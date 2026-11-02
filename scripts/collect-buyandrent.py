#!/usr/bin/env python3
"""Collect the public BuyAndRentRobots.com robot directory.

The site renders its directory from a small JSON API and also exposes a complete
server-rendered /robots page.  This collector deliberately uses only the standard
library so it can be re-run without installing anything.

Outputs (default):
  data/competitors/buyandrentrobots.json
  data/competitors/buyandrentrobots-gaps.json

Raw API responses and, optionally, raw HTML pages are written below
scratch/competitor-research/.  The inventory itself contains only short factual
feature paraphrases, never the site's marketing copy.
"""

from __future__ import annotations

import argparse
import csv
import difflib
import glob
import html
import json
import os
import re
import sys
import time
import unicodedata
import urllib.error
import urllib.request
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from threading import Event


BASE = "https://buyandrentrobots.com"
API = "https://app.buyandrentrobots.com"
RATE_LIMITED = Event()
USER_AGENT = (
    "Mozilla/5.0 (compatible; robotics-directory-research/1.0; "
    "+https://github.com/huskynarr/robotics-directory)"
)


def utc_now() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def fetch(url: str, timeout: int = 45, retries: int = 3) -> dict:
    last_error = None
    for attempt in range(retries):
        if RATE_LIMITED.is_set():
            return {
                "url": url, "status": None, "contentType": "", "body": b"",
                "fetchedAt": utc_now(), "error": "Skipped after HTTP 429; retry in a later run",
                "skipped": True,
            }
        try:
            req = urllib.request.Request(
                url,
                headers={
                    "User-Agent": USER_AGENT,
                    "Accept": "application/json,text/html;q=0.9,*/*;q=0.8",
                    "Accept-Language": "en-US,en;q=0.8",
                },
            )
            with urllib.request.urlopen(req, timeout=timeout) as response:
                body = response.read()
                return {
                    "url": url,
                    "status": response.status,
                    "contentType": response.headers.get("content-type", ""),
                    "body": body,
                    "fetchedAt": utc_now(),
                    "error": None,
                }
        except urllib.error.HTTPError as exc:
            last_error = f"HTTP {exc.code}: {exc.reason}"
            if exc.code == 429:
                RATE_LIMITED.set()
                # Never hammer a rate-limited host.  The caller records this as
                # evidence and the remaining checks are left explicitly pending.
                retry_after = exc.headers.get("retry-after", "")
                return {
                    "url": url,
                    "status": 429,
                    "contentType": "",
                    "body": b"",
                    "fetchedAt": utc_now(),
                    "error": f"HTTP 429: {exc.reason}",
                    "retryAfter": retry_after,
                    "rateLimited": True,
                }
        except Exception as exc:  # noqa: BLE001 - collector must record every failure
            last_error = f"{type(exc).__name__}: {exc}"
        if attempt + 1 < retries:
            time.sleep(1.5 * (attempt + 1))
    return {
        "url": url,
        "status": None,
        "contentType": "",
        "body": b"",
        "fetchedAt": utc_now(),
        "error": last_error,
    }


def text_body(response: dict) -> str:
    return response["body"].decode("utf-8", "replace")


def norm(value: str) -> str:
    value = unicodedata.normalize("NFKD", value or "")
    value = value.encode("ascii", "ignore").decode("ascii")
    value = value.lower().replace("&", " and ")
    value = re.sub(r"[^a-z0-9]+", " ", value)
    return " ".join(value.split())


BRAND_ALIASES = {
    "unitree": "unitree",
    "pudu": "pudu",
    "keenon": "keenon",
    "gausium": "gausium",
    "fourier": "fourier",
    "fourier intelligence": "fourier",
    "ubtech": "ubtech",
    "mobile industrial robots mir": "mir",
    "mobile industrial robots": "mir",
    "mir": "mir",
    "otto motors": "otto",
    "otto": "otto",
    "clearpath robotics": "clearpath",
    "clearpath": "clearpath",
    "robotize": "robotize",
    "softbank robotics": "softbank",
    "softbank robotics america": "softbank",
    "softbank": "softbank",
    "rainbow robotics": "rainbow",
    "rainbow": "rainbow",
    "deep robotics": "deep",
    "deep": "deep",
    "hikrobot": "hikrobot",
    "ecovacs commercial robotics": "ecovacs",
    "ecovacs robotics": "ecovacs",
    "ecovacs": "ecovacs",
    "kawasaki robotics": "kawasaki",
    "kawasaki": "kawasaki",
    "richtech robotics": "richtech",
    "richtech": "richtech",
    "bear robotics": "bear",
    "bear": "bear",
    "agile robots se": "agile",
    "agile robots": "agile",
    "agibot": "agibot",
    "booster robotics": "booster",
    "booster": "booster",
    "standard bots": "standard bots",
    "productive robotics": "productive",
    "elephant robotics": "elephant",
    "elephant": "elephant",
    "makeblock": "makeblock",
    "modular robotics": "modular",
    "sphero": "sphero",
    "ozobot": "ozobot",
    "rev robotics": "rev",
    "rev": "rev",
    "dji official": "dji",
    "dji": "dji",
    "skydio": "skydio",
    "zipline": "zipline",
    "wing": "wing",
    "nuro": "nuro",
    "serve robotics": "serve",
    "starship technologies": "starship",
    "coco robotics": "coco",
    "kiwibot": "kiwibot",
    "relay robotics": "relay",
    "relay delivery robots": "relay",
    "aethon medical robots": "aethon",
    "diligent robotics": "diligent",
    "smp robotics systems corp": "smp",
    "knightscope": "knightscope",
    "cobalt robotics": "cobalt",
    "asylon robotics": "asylon",
    "anybotics": "anybotics",
    "boston dynamics": "boston dynamics",
    "hyundai": "hyundai",
    "doosan robotics": "doosan",
    "doosan": "doosan",
    "fanuc": "fanuc",
    "yaskawa motoman robotics": "yaskawa",
    "yaskawa": "yaskawa",
    "kuka": "kuka",
    "abb": "abb",
    "comau": "comau",
    "denso robotics": "denso",
    "denso": "denso",
    "epson robots": "epson",
    "epson": "epson",
    "staubli": "staubli",
    "universal robots": "universal robots",
    "techman": "techman",
    "omron robotics": "omron",
    "omron": "omron",
    "pilz": "pilz",
    "schunk": "schunk",
    "festo": "festo",
    "kardex": "kardex",
    "swisslog south east asia": "swisslog",
    "swisslog": "swisslog",
    "daifuku": "daifuku",
    "symbotic": "symbotic",
    "geek+": "geek+",
    "hai robotics": "hai",
    "exotec": "exotec",
    "locus robotics": "locus",
    "seegrid": "seegrid",
    "vecna robotics": "vecna",
    "vecna technologies": "vecna",
    "fetch robotics": "fetch",
    "magazino": "magazino",
    "robotnik": "robotnik",
    "pal robotics": "pal",
    "neobotix": "neobotix",
    "metralabs gmbh": "metralabs",
    "temi robot": "temi",
    "robotemi": "temi",
    "blue ocean robotics": "blue ocean",
    "cleanfix robotics": "cleanfix",
    "avidbots": "avidbots",
    "tennant company": "tennant",
    "brain corp": "brain",
    "karcher robotics": "karcher",
    "karcher": "karcher",
    "nexaro": "nexaro",
    "gaussian robotics": "gaussian",
    "rex robots": "rex",
    "bots-4-events": "bots-4-events",
    "event robot": "event robot",
    "elite event robotics": "elite event",
    "robots of london": "robots of london",
    "robot rentals": "robot rentals",
    "proven robotics": "proven",
    "sebotics": "sebotics",
    "robotlab": "robotlab",
    "robotsinternational com": "robotsinternational",
    "robotsinternational": "robotsinternational",
    "dma events": "dma",
    "graba robot": "graba",
    "graba": "graba",
    "360 bright media": "360 bright",
    "inrobots": "inrobots",
    "in robots": "inrobots",
}


def brand_key(value: str) -> str:
    key = norm(value)
    key = re.sub(
        r"\b(robotics|robot|robots|inc|incorporated|ltd|limited|gmbh|corp|"
        r"corporation|co|company|group|technologies|technology|tech|systems|"
        r"system|international|global|the)\b",
        " ",
        key,
    )
    key = " ".join(key.split())
    return BRAND_ALIASES.get(key, key)


# Companies that mainly rent, stage, integrate, resell or publish rather than make
# the robot model themselves.  They can still list genuine manufacturer models;
# brand inference below handles those cases.
SERVICE_COMPANIES = {
    "DMA Events",
    "RobotsInternational.com",
    "GrabaRobot",
    "PROVEN Robotics",
    "Sebotics",
    "Sedona Technology LLC",
    "RobotLAB",
    "Robot Rentals",
    "Robots of London",
    "Event Robot",
    "Bots-4-Events",
    "360 Bright Media",
    "Elite Event Robotics",
    "Rex Robots",
    "RobotAnno",
    "InDro Robotics",
    "Telepresence Robots",
    "ProServBots.com",
    "AI Robotics Inc.",
    "Innovative Robotics Inc.",
    "Global Times Robotics",
    "Robot Innovations Inc.",
    "Hyperion Robotics",
    "Ameca Robotics",
    "Cognition",
    "XYZ Robotics",
    "AI Kitchen Automation Platform",
    "Doosan Robotics AI Powered Solutions",
    "SoftServe Robotics",
    "VLT Robotics",
    "Cynnx Technologies LLC",
    "Alpha Robotics Alice Reception Robot",
    "Reception Robots. Collaborative Robotics & Service Robotics",
    "Humanoid Robot for Trade Shows Las Vegas",
    "Rental Robot for Las Vegas Trade Show, Special Event or Business",
    "Robot Rental for Events: The Complete 2026 Pricing Guide",
    "Trade Show & Event Rentals | Rent a Robot - Advanced Robot Solut",
}


NOISE_COMPANIES = {
    "How Commercial Service Robots Are Transforming Industries",
    "The Future of Commercial Cleaning Robots Is Now",
    "Last-Mile Delivery Robots: Fact or Fiction, Are Sidewalk Bots the ...",
    "Leasing Industrial Robots and Automation Equipment",
    "Live Entertainment - The Future of Fan Experience Has Arrived",
    "Robots that Build the World. Built Robotics",
    "AeolusRobotics.com. Premium Domain For Sale",
    "Precisionhawk",
    "The Role of Service Robots in Commercial Cleaning - CleanLink",
    "Robots for events, trade shows and product presentations - RBTX",
    "Humanoid: Pioneering Humanoid Robots for the Future",
    "Intralogistics, Supply Chain Automation & Warehouse Management Solutions",
    "Autonomous Lift Trucks & Robots (AGV",
    "The Professional Cleaning Industry's Online Resource",
    "NIDEC CORPORATION",
    "TREVENTUS",
    "ispace",
    "Missions",
    "Midea",
    "MURATEC",
    "HOKUYO AUTOMATIC CO., LTD.",
    "Formant",
    "NEXCOM",
    "Harmonic Drive",
    "HEIDENHAIN",
    "Omron",
    "Staubli Robotics",
    "Techman Robot",
    "White Box Robotics",
    "Willow Garage",
    "Anybots",
    "Autel Robotics",
    "ABB Group",
    "B&R: Perfection in Automation",
    "Hitachi",
    "Prioria",
    "Roborock",
    "Marble",
    "Techman",
    "Honeybee Robotics",
    "Toshiba",
    "YANMAR",
    "CloudMinds",
    "Siasun Robotics",
    "Estun Automation",
    "Denso",
    "Epson",
    "ABB Group",
    "Kodenshi AUK Group",
    "Tethers Unlimited, Inc.",
    "Monarch Tractor",
    "Shark Robotics",
    "Intellibot Robotics",
    "Endeavor Robotics",
    "ROKAE",
    "Zhiyuan Robotics",
    "Robot Restaurant Group",
    "Robodyne",
    "Dextrous Robotics",
    "Dispatch AI",
    "BotsAndUs",
    "Ispin Robot",
    "Ateago",
    "Creator Restaurant",
    "Moyotech",
    "Omega Bots",
    "Nexus Event Robots",
}


MANUFACTURER_COMPANIES = {
    "Pudu Robotics", "Unitree Robotics", "Keenon Robotics", "Gausium Robotics",
    "Richtech Robotics", "Fourier Robotics", "Fourier", "UBTECH Robotics",
    "Robotize", "Mobile Industrial Robots (MiR)", "OTTO Motors", "Clearpath Robotics",
    "EVST (以物思)", "Fdata Robot", "Productive Robotics", "Rainbow Robotics",
    "Deep Robotics", "IPLUSMOBOT", "OrionStar Robotics", "Makeblock",
    "Modular Robotics", "Elephant Robotics", "Blue Robotics", "Deep Trekker",
    "VideoRay", "Oceanbotics", "Parrot", "DJI Official", "Skydio", "Zipline",
    "Wing", "Manna Air Delivery", "Flytrex Drone Delivery", "Matternet.com",
    "Quantum Systems", "Shield AI", "Iris Automation", "Percepto Autonomous Solutions",
    "SkyPorts Infrastructure", "Event 38", "Inspired Flight Technologies",
    "Hypershell", "Ekso Bionics", "CYBERDYNE", "Syrebo", "Hai Robotics",
    "Daifuku", "HWArobotics", "Geek+", "Locus Robotics", "Seegrid",
    "Vecna Robotics", "Fetch Robotics", "Magazino", "Robotnik", "PAL Robotics",
    "Neobotix", "MetraLabs GmbH", "Temi Robot", "Blue Ocean Robotics",
    "Cleanfix Robotics", "Avidbots", "Brain Corp", "Nexaro", "Kärcher",
    "Hikrobot", "SMP Robotics Systems Corp.", "Knightscope", "Cobalt Robotics",
    "Asylon Robotics", "ANYbotics", "Boston Dynamics", "Standard Bots",
    "Exotec", "Relay Robotics", "Relay Delivery Robots", "Aethon Medical Robots",
    "Diligent Robotics", "Loop Robots America Inc.", "Simbe Robotics", "Agile Robots SE",
    "Apptronik", "Figure", "1X Technologies", "Agility Robotics", "Sanctuary AI",
    "Realbotix", "Ambi Robotics", "GreyOrange", "Addverb Technologies",
    "Capra Robotics", "Quasi Robotics", "Bear Robotics", "Kawasaki Robotics",
    "RAD Security", "LG Electronics", "Samsung", "iRobot", "ECOVACS Robotics",
}


GENERIC_TOKENS = set(
    """robot robots cleaning delivery service security humanoid educational
    entertainment industrial commercial autonomous mobile amr agv asrs cobot arm
    drone aerial inspection agricultural medical surgical warehouse logistics
    greeter reception concierge telepresence disinfection sanitisation
    sanitization palletizing palletising welding painting vacuum scrubber
    sweeper mower lawn garden companion social rehab rehabilitation
    exoskeleton kitchen barista coffee vending machine solution solutions
    system systems equipment products product platform technology
    technologies automation integrator supplier manufacturer factory company
    companies shop store home page website official global international
    series family""".split()
)

EXTRA_GENERIC = set(
    """autonomous automated intelligent smart advanced heavy light large small
    mini max pro plus lite new ai multi purpose custom modular collaborative
    professional commercial industrial automatic robotic unmanned ground aerial
    underwater pipe drainage sewage solar panel facade floor indoor outdoor""".split()
)


BRAND_ONLY = {
    "pudu", "bear robotics", "sanbot", "unitree robot", "ubtech", "fanuc",
    "kuka", "abb", "omron", "staubli", "denso", "epson", "comau",
    "yaskawa", "techman", "universal robots", "festo", "pilz", "schunk",
    "kardex", "swisslog", "daifuku", "symbotic", "geek+", "hai", "exotec",
    "locus", "seegrid", "vecna", "fetch", "magazino", "robotnik", "pal",
    "neobotix", "metralabs", "temi", "blue ocean", "cleanfix", "avidbots",
    "tennant", "brain", "karcher", "nexaro", "gaussian", "rex", "event robot",
    "elite event", "robots of london", "robot rentals", "proven", "sebotics",
    "robotlab", "robotsinternational", "dma", "graba", "360 bright", "inrobots",
    "agibot", "booster", "deep", "unitree", "keenon", "gausium", "richtech",
    "fourier", "rainbow", "softbank", "diligent", "aethon", "smp",
    "knightscope", "cobalt", "asylon", "anybotics", "boston dynamics",
    "hyundai", "doosan", "standard bots", "productive", "elephant",
    "makeblock", "modular", "sphero", "ozobot", "rev", "dji", "skydio",
    "zipline", "wing", "nuro", "serve", "starship", "coco", "kiwibot",
    "relay", "hai robotics", "hikrobot", "ecovacs", "kawasaki",
}

# Generic device categories that are sometimes listed as if they were models.
# They stay in the inventory, but are explicitly not concrete product models.
GENERIC_PRODUCT_NAMES = {
    "addverb s autonomous forklift",
    "autonomous floor care scrubbers",
    "ai handler",
    "cobalt ai",
    "cobalt monitoring intelligence",
    "customer experience robot",
    "data",
    "deliverydrone",
    "dog robot",
    "drainage cctv",
    "edubot",
    "robotic vacuum cleaner",
    "securityguard",
    "servicebot",
    "robot dog",
    "cnc robot",
    "gantry rail dual welding station",
    "nine axis cantilever weld station",
    "pick and place robot",
    "seven axis track weld station",
    "welding robot",
    "palletizing robot",
    "concrete robot",
    "manufacturing plant robot",
    "refractory robot",
    "solar panel robot",
    "srw civil",
    "cutting robot",
    "desilting and sewage suction robot",
    "drainage endoscope",
    "pipe inspection robot",
    "inventory scan",
    "shelfoptix",
    "autonomous mobile robot",
    "autonomous mobile robots (amr)",
    "autonomous forklift robots (agv",
    "amr",
    "agv",
    "rs",
    "il bots",
    "smart depalletizer",
    "smart item picker",
    "smart mixed case palletizer",
    "smart palletizer",
}


MODEL_HINTS = [
    (r"^unitree\b", "Unitree Robotics"),
    (r"^pudu\b", "Pudu Robotics"),
    (r"^pudubot\b", "Pudu Robotics"),
    (r"^(bellabot|kettybot|flashbot|holabot)\b", "Pudu Robotics"),
    (r"^(dinerbot|kleenbot|butlerbot|xman)\b", "Keenon Robotics"),
    (r"^(gausium|beetle|mira|omnie|marvel|phantas|scrubber 75|vacuum 40)\b", "Gausium Robotics"),
    (r"^(richtech|adam|scorpion|titan|dust-e|matradee|dex|data|pallet jack)\b", "Richtech Robotics"),
    (r"^(robotize|gopal)\b", "Robotize"),
    (r"^mir\d", "Mobile Industrial Robots (MiR)"),
    (r"^otto\b", "OTTO Motors"),
    (r"^(boxer|dingo|husky|jackal|ridgeback|turtlebot|warthog)\b", "Clearpath Robotics"),
    (r"^agibot\b", "AgiBot"),
    (r"^booster\b", "Booster Robotics"),
    (r"^deep robotics\b", "Deep Robotics"),
    (r"^(walker|ubtech|ugot|yanshee|alpha)\b", "UBTECH Robotics"),
    (r"^(gr-|grx|fourier|rehabhub)\b", "Fourier Robotics"),
    (r"^(nao|pepper|whiz)\b", "SoftBank Robotics"),
    (r"^temi\b", "Robotemi"),
    (r"^double 3\b", "Double Robotics"),
    (r"^ava 500\b", "Ava Robotics"),
    (r"^beam\b", "Awabot"),
    (r"^ohmni", "Ohmnilabs"),
    (r"^boteyes", "BotEyes"),
    (r"^c2 ", "Quasi Robotics"),
    (r"^capra", "Capra Robotics"),
    (r"^(carti|servi)\b", "Bear Robotics"),
    (r"^(haipick|hai )", "Hai Robotics"),
    (r"^locus\b", "Locus Robotics"),
    (r"^seegrid\b", "Seegrid"),
    (r"^tally\b", "Simbe Robotics"),
    (r"^skypod\b", "Exotec"),
    (r"^sls\d", "HWArobotics"),
    (r"^smart ", "Smart Robotics"),
    (r"^(soto|toru)\b", "Magazino"),
    (r"^relay\b", "Relay Robotics"),
    (r"^uvd\b", "Blue Ocean Robotics"),
    (r"^ekso\b", "Ekso Bionics"),
    (r"^hypershell\b", "Hypershell"),
    (r"^(ava|radcam|rio|roameo|rosa|sara)\b", "RAD Security"),
    (r"^(k1 |k5|k7)\b", "Knightscope"),
    (r"^(t3|tug)\b", "Aethon Medical Robots"),
    (r"^moxi\b", "Diligent Robotics"),
    (r"^sam\b", "Loop Robots America Inc."),
    (r"^rb-", "Robotnik"),
    (r"^er-(flex|max)", "Enabled Robotics"),
    (r"^(m500|t500|ping360|bluerov2|blueboat)\b", "Blue Robotics"),
    (r"^srv-8", "Oceanbotics"),
    (r"^(dtg3|mag|photon|pivot|spectra|vac|revolution)\b", "Deep Trekker"),
    (r"^(wraith|ally|defender|pro 5)\b", "VideoRay"),
    (r"^e4\d\d", "Event 38"),
    (r"^(if1200|if800|gs-one)\b", "Inspired Flight Technologies"),
    (r"^skydio", "Skydio"),
    (r"^(anafi|chuck)\b", "Parrot"),
    (r"^mavic\b", "DJI"),
    (r"^(firejet|avenger|hivemind|v-bat|vista|x-bat)\b", "Shield AI"),
    (r"^(vector ai|reliant|twister)\b", "Quantum Systems"),
    (r"^casia", "Iris Automation"),
    (r"^percepto", "Percepto Autonomous Solutions"),
    (r"^skyports", "SkyPorts Infrastructure"),
    (r"^zipline", "Zipline"),
    (r"^wing\b", "Wing"),
    (r"^manna", "Manna Air Delivery"),
    (r"^flytrex", "Flytrex Drone Delivery"),
    (r"^matternet", "Matternet.com"),
    (r"^nuro|^robotaxi", "Nuro"),
    (r"^coco\b", "Coco Robotics"),
    (r"^starship", "Starship Technologies"),
    (r"^(saymo|serve)\b", "Serve Robotics"),
    (r"^kiwi\b", "Kiwibot"),
    (r"^(cargo|dog|noid)\b", "robot.com"),
    (r"^(kai|tai|eve)\b", "Bots-4-Events"),
    (r"^(halo|pixel|nova|glambot|chess robot|furo-d)\b", "DMA Events"),
    (r"^digit\b", "Agility Robotics"),
    (r"^phoenix\b", "Sanctuary AI"),
    (r"^buddy\b", "Blue Frog Robotics"),
    (r"^moxi\b", "Diligent Robotics"),
    (r"^optimus", "Optimus Robo"),
    (r"^afl\b", "Rapyuta Robotics"),
    (r"^arc\b", "NAVER LABS"),
    (r"^(ari|evo)\b", "Ozobot"),
    (r"^astrorinse\b", "Beatbot"),
    (r"^ausmos\b", "ULC Technologies"),
    (r"^badger\b", "Badger Technologies"),
    (r"^amr\+", "IPLUSMOBOT"),
    (r"^deebot\b", "ECOVACS Robotics"),
]


OFFICIAL_SITES = {
    "Pudu Robotics": "https://www.pudurobotics.com/",
    "Keenon Robotics": "https://www.keenon.com/",
    "Gausium Robotics": "https://www.gausium.com/",
    "Richtech Robotics": "https://www.richtechrobotics.com/",
    "Unitree Robotics": "https://www.unitree.com/",
    "UBTECH Robotics": "https://www.ubtrobot.com/",
    "Fourier Robotics": "https://www.fftai.com/",
    "Robotize": "https://robotize.com/",
    "Mobile Industrial Robots (MiR)": "https://www.mobile-industrial-robots.com/",
    "OTTO Motors": "https://ottomotors.com/",
    "Clearpath Robotics": "https://clearpathrobotics.com/",
    "Hai Robotics": "https://www.hairobotics.com/",
    "Geek+": "https://www.geekplus.com/",
    "Locus Robotics": "https://locusrobotics.com/",
    "Seegrid": "https://seegrid.com/",
    "Vecna Robotics": "https://vecnarobotics.com/",
    "Fetch Robotics": "https://fetchrobotics.com/",
    "Magazino": "https://magazino.eu/",
    "Robotnik": "https://robotnik.eu/",
    "PAL Robotics": "https://pal-robotics.com/",
    "Neobotix": "https://www.neobotix.de/",
    "MetraLabs GmbH": "https://www.metralabs.com/",
    "Temi Robot": "https://www.robotemi.com/",
    "Blue Ocean Robotics": "https://www.blue-ocean-robotics.com/",
    "Cleanfix Robotics": "https://cleanfix-robotics.com/",
    "Avidbots": "https://avidbots.com/",
    "Brain Corp": "https://www.braincorp.com/",
    "Nexaro": "https://nexaro.com/",
    "Kärcher": "https://www.kaercher.com/",
    "Hikrobot": "https://www.hikrobotics.com/",
    "SMP Robotics Systems Corp.": "https://smprobotics.com/",
    "Knightscope": "https://www.knightscope.com/",
    "Cobalt Robotics": "https://www.cobaltrobotics.com/",
    "Asylon Robotics": "https://asylonrobotics.com/",
    "ANYbotics": "https://www.anybotics.com/",
    "Boston Dynamics": "https://bostondynamics.com/",
    "Standard Bots": "https://standardbots.com/",
    "Exotec": "https://www.exotec.com/",
    "Relay Robotics": "https://relayrobotics.com/",
    "Aethon Medical Robots": "https://aethon.com/",
    "Diligent Robotics": "https://www.diligentrobotics.com/",
    "Loop Robots America Inc.": "https://looprobots.com/",
    "Simbe Robotics": "https://www.simberobotics.com/",
    "Agile Robots SE": "https://www.agile-robots.com/",
    "Apptronik": "https://apptronik.com/",
    "Figure": "https://www.figure.ai/",
    "1X Technologies": "https://www.1x.tech/",
    "Agility Robotics": "https://agilityrobotics.com/",
    "Sanctuary AI": "https://www.sanctuary.ai/",
    "Realbotix": "https://realbotix.ai/",
    "Ambi Robotics": "https://www.ambirobotics.com/",
    "GreyOrange": "https://www.greyorange.com/",
    "Addverb Technologies": "https://www.addverb.com/",
    "Capra Robotics": "https://capra.ooo/",
    "Quasi Robotics": "https://www.quasi.ai/",
    "Bear Robotics": "https://bearrobotics.ai/",
    "Kawasaki Robotics": "https://kawasakirobotics.com/",
    "RAD Security": "https://radsecurity.com/",
    "EVST (以物思)": "https://www.evsint.com/",
    "Fdata Robot": "https://www.fdatabot.com/",
    "Productive Robotics": "https://www.productiverobotics.com/",
    "Rainbow Robotics": "https://www.rainbowrobotics.com/",
    "Deep Robotics": "https://www.deeprobotics.cn/",
    "IPLUSMOBOT": "https://www.iplusmobot.com/",
    "OrionStar Robotics": "https://www.orionstar.com/",
    "Makeblock": "https://makeblock.com/",
    "Modular Robotics": "https://modrobotics.com/",
    "Elephant Robotics": "https://www.elephantrobotics.com/",
    "Blue Robotics": "https://bluerobotics.com/",
    "Deep Trekker": "https://www.deeptrekker.com/",
    "VideoRay": "https://videoray.com/",
    "Oceanbotics": "https://oceanbotics.com/",
    "Parrot": "https://www.parrot.com/",
    "DJI Official": "https://www.dji.com/",
    "Skydio": "https://www.skydio.com/",
    "Zipline": "https://www.flyzipline.com/",
    "Wing": "https://wing.com/",
    "Manna Air Delivery": "https://www.manna.aero/",
    "Flytrex Drone Delivery": "https://flytrex.com/",
    "Matternet.com": "https://matternet.com/",
    "Quantum Systems": "https://www.quantum-systems.com/",
    "Shield AI": "https://shield.ai/",
    "Iris Automation": "https://irisonboard.com/",
    "Percepto Autonomous Solutions": "https://percepto.co/",
    "SkyPorts Infrastructure": "https://www.skyports.net/",
    "Event 38": "https://event38.com/",
    "Inspired Flight Technologies": "https://inspiredflight.com/",
    "Hypershell": "https://hypershell.tech/",
    "Ekso Bionics": "https://eksobionics.com/",
    "CYBERDYNE": "https://www.cyberdyne.jp/",
    "Syrebo": "https://www.syrebo.com/",
    "Daifuku": "https://www.daifuku.com/",
    "HWArobotics": "https://www.hwarobotics.com/",
    "Daifuku": "https://www.daifuku.com/",
}


def company_role(name: str, company: dict) -> str:
    if name in NOISE_COMPANIES:
        return "media"
    if name in SERVICE_COMPANIES:
        return "service_provider"
    if name in MANUFACTURER_COMPANIES:
        return "manufacturer"
    text = " ".join(str(company.get(k) or "") for k in ("company_name", "description", "website_url"))
    if re.search(r"\b(rental|rent|hire|event|events|agency|integrator|reseller|distributor|marketplace|dealer|leasing|sourcing)\b", text, re.I):
        return "service_provider"
    if re.search(r"\b(news|article|blog|guide|report|magazine|resource|review|press)\b", text, re.I):
        return "media"
    if re.search(r"\b(manufactur|develops|designs|builds|produces|maker)\b", text, re.I):
        return "manufacturer"
    return "unknown"


def is_generic(name: str) -> bool:
    tokens = norm(name).split()
    if not tokens:
        return True
    if all(token in GENERIC_TOKENS for token in tokens):
        return True
    if len(tokens) <= 4 and all(token in GENERIC_TOKENS or token in EXTRA_GENERIC for token in tokens):
        return True
    return False


NON_PRODUCT_RE = re.compile(
    r"[|!?]|&amp;|&#|\b(home page|homepage|website|official|solutions?|"
    r"company|supplier|manufacturer|factory|directory|guide|news|article|blog|"
    r"resource|rental|rent|lease|marketplace|for sale|product search|main navigation|"
    r"welcome|missions|shop|topics|press release|search)\b",
    re.I,
)


def brand_for(name: str, company: str, role: str) -> str | None:
    normalized = norm(name)
    for pattern, brand in MODEL_HINTS:
        if re.search(pattern, normalized):
            return brand
    if role == "manufacturer":
        return company
    return None


def classify(robot: dict) -> tuple[str, str | None, str]:
    name = (robot.get("robot_name") or "").strip()
    company = (robot.get("robot_companies") or {}).get("company_name") or ""
    description = (robot.get("description") or "").strip()
    role = company_role(company, robot.get("robot_companies") or {})
    normalized = norm(name)
    if (
        NON_PRODUCT_RE.search(name)
        or description.lower().startswith("robot by ")
        or len(name) > 45
        or name.lower() == company.lower()
    ):
        return "non_product", None, role
    if normalized in BRAND_ONLY:
        return "brand", None, role
    if normalized in GENERIC_PRODUCT_NAMES:
        entry_type = "series" if "series" in normalized else "unclear"
        return entry_type, brand_for(name, company, role), role
    if is_generic(name):
        return "service", None, role
    brand = brand_for(name, company, role)
    if brand is None and role in ("service_provider", "media"):
        return "service", None, role
    if brand is not None:
        return ("series" if re.search(r"\bseries\b", name, re.I) else "model"), brand, role
    return "unclear", None, role


CATEGORY_FEATURES = {
    "delivery": "food/parcel delivery",
    "cleaning": "floor cleaning",
    "security": "patrol and surveillance",
    "humanoid": "humanoid interaction",
    "educational": "STEM education",
    "entertainment": "event engagement",
    "greeter": "reception and greeting",
    "service": "service tasks",
    "agricultural": "agricultural work",
    "medical_surgical": "medical/surgical support",
    "warehouse": "warehouse logistics",
    "inspection": "inspection",
    "drone_aerial": "aerial operations",
    "quadruped": "legged mobility",
    "robot_arm": "robotic manipulation",
}

FEATURE_PATTERNS = [
    (r"\bautonom(?:ous(?:ly)?|y)\b|\bself[- ]driving\b", "autonomous operation"),
    (r"\btelepresence\b", "telepresence"),
    (r"\buv[- ]?c\b", "UV-C disinfection"),
    (r"\blidar\b", "lidar sensing"),
    (r"\bai[- ]?(?:enabled|powered)?\b", "AI-enabled"),
    (r"\bforklifts?\b", "forklift platform"),
    (r"\b(scrubber|sweeper|vacuum)\b", "floor cleaning"),
    (r"\bexoskeleton\b", "wearable exoskeleton"),
    (r"\b(rov|underwater|subsea)\b", "underwater operation"),
    (r"\b(drone|uav|aerial)\b", "aerial operations"),
    (r"\b(kiosk|vending)\b", "self-service kiosk"),
    (r"\b(cobots?|collaborative)\b", "collaborative robotics"),
    (r"\b(warehouse|asrs|as/rs)\b", "warehouse automation"),
    (r"\b(food|restaurant|kitchen)\b", "food service"),
    (r"\b(hotel|hospitality)\b", "hospitality"),
    (r"\b(medical|surgical)\b", "medical support"),
    (r"\brehab", "rehabilitation"),
    (r"\b(education|stem|classroom|school)\b", "education"),
    (r"\bevent\b", "event engagement"),
    (r"\b(advertising|display)\b", "advertising display"),
    (r"\bmapping\b", "mapping"),
    (r"\binspection\b", "inspection"),
    (r"\b(security|patrol|surveillance)\b", "patrol and surveillance"),
    (r"\bsolar[- ]powered\b", "solar power"),
    (r"\brtk\b", "RTK positioning"),
    (r"\bgps\b", "GPS positioning"),
    (r"\bslam\b", "SLAM localization"),
    (r"\bseed(?:ing|er)?\b", "crop seeding"),
    (r"\bweed(?:ing|s| control| removal)?\b", "weed control"),
    (r"\bharvest(?:ing)?\b", "crop harvesting"),
    (r"\b(?:videoconferenc|video[- ]conferenc)", "video conferencing"),
    (r"\btwo[- ]wheeled\b", "two-wheel mobility"),
    (r"\bfour[- ]legged\b|\bquadrupeds?\b", "four-legged mobility"),
    (r"\bhumanoids?\b", "humanoid form"),
    (r"\bdual[- ]arm\b|\btwo[- ]arm\b", "dual-arm manipulation"),
    (r"\bmobile manipulators?\b|\bmobile manipulation\b", "mobile manipulation"),
    (r"\b(?:computer|machine|embedded|3d) vision\b|\bvision technology\b", "machine vision"),
    (r"\b(?:recogniz|recognis)(?:e|es|ing) faces\b|\bface recognition\b", "face recognition"),
    (r"\b(?:recogniz|recognis)(?:e|es|ing) (?:faces and )?emotions\b|\bemotion recognition\b", "emotion recognition"),
    (r"\b(?:voice|speech|talking)\b", "speech interaction"),
    (r"\banswering questions\b|\bquestion[- ]answering\b", "question answering"),
    (r"\b(?:seating|retail|visitor) guidance\b", "visitor guidance"),
    (r"\btouchscreen\b|\btouch screen\b", "touchscreen interface"),
    (r"\brfid\b", "RFID sensing"),
    (r"\b3d\b|\bdepth sensing\b", "3D sensing or processing"),
    (r"\bcameras?\b", "camera hardware"),
    (r"\bobstacle avoidance\b|\bcollision avoidance\b", "obstacle avoidance"),
    (r"\bremote (?:control|supervision|operation)\b|\bteleoperat", "remote operation"),
    (r"\bcloud\b", "cloud connectivity"),
    (r"\bfleets?\b|\bmulti[- ]robot orchestration\b", "fleet coordination"),
    (r"\bopen[- ]source\b", "open-source technology"),
    (r"\bmodular\b", "modular hardware or software"),
    (r"\bprogramm(?:able|ing|ed)\b|\bcoding\b", "robot programming"),
    (r"\bethernet\b", "Ethernet communication"),
    (r"\bwi[- ]fi\b", "Wi-Fi communication"),
    (r"\bwarehouse management systems?\b|\bwms\b", "warehouse management integration"),
    (r"\b(?:machine|cnc) tending\b", "machine tending"),
    (r"\b(?:de)?palletiz(?:ing|ation|ers?)\b|\b(?:de)?palletis(?:ing|ation|ers?)\b", "palletizing or depalletizing"),
    (r"\bpallets?\b|\bpallet[- ]handling\b", "pallet handling"),
    (r"\bbin[- ]picking\b", "bin picking"),
    (r"\b(?:piece|shelf|case)[- ]picking\b", "piece or case picking"),
    (r"\bpicking\b|\bpick[- ]and[- ]place\b", "item picking"),
    (r"\bgoods[- ]to[- ]person\b", "goods-to-person workflow"),
    (r"\brobots?[- ]to[- ]goods\b", "robots-to-goods workflow"),
    (r"\bputaway\b", "warehouse putaway"),
    (r"\bsort(?:ing|ation)\b", "item sorting"),
    (r"\bstack(?:ing)\b", "item stacking"),
    (r"\b(?:truck|trailer) (?:loading|unloading)\b", "truck loading or unloading"),
    (r"\bweld(?:ing|ers?)\b", "robotic welding"),
    (r"\bpaint(?:ing)?\b|\bcoating\b", "painting or coating"),
    (r"\bgripp(?:ing|ers?)\b", "robotic gripping"),
    (r"\bresearch\b", "robotics research"),
    (r"\b(?:companion|companionship)\b", "companionship"),
    (r"\b(?:cook|cooking|chef|bartender)\b", "food or drink preparation"),
    (r"\bdisinfect(?:ion|ing)\b", "disinfection"),
    (r"\bvacuum\b", "vacuum cleaning"),
    (r"\bscrubb(?:er|ers|ing)\b", "floor scrubbing"),
    (r"\bsweep(?:er|ers|ing)\b", "floor sweeping"),
    (r"\bpool cleaning\b", "pool cleaning"),
    (r"\bsolar panels?\b", "solar-panel applications"),
    (r"\bwindow(?:s)?\b|\bfacades?\b", "window or facade applications"),
    (r"\b(?:inventory|stock)\b", "inventory monitoring"),
    (r"\b(?:facial|expressive) gestures?\b", "expressive interaction"),
    (r"\bairspace\b|\bdetecting non-cooperative aircraft\b", "airspace monitoring"),
    (r"\baccess control\b", "access-control integration"),
    (r"\broot cause analysis\b", "incident root-cause analysis"),
    (r"\bmaterial handling\b|\bmaterial movement\b|\bmaterial transport\b", "material transport"),
    (r"\bautomatic battery[- ]exchange\b", "automatic battery exchange"),
    (r"\bedge controller\b|\blocal processing\b", "local edge processing"),
    (r"\bbrain[- ]computer\b|\bbci[- ]based\b", "brain-computer interface"),
    (r"\bsoft robotic hand\b", "soft robotic hand assistance"),
    (r"\bturnkey\b|\bend[- ]to[- ]end solutions?\b", "system integration"),
    (r"\bros\s*2\b", "ROS 2 support claimed"),
    (r"\bros\b", "ROS ecosystem reference"),
    (r"\bgazebo\b", "Gazebo software reference"),
    (r"\b(?:auto(?:matic)? docking|additional docking capabilities|charging dock)\b", "robot docking"),
    (r"\bcross[- ]docking\b", "cross-docking logistics"),
    (r"\b(?:towing carts|tow tractors?)\b|\bcart trains?\b", "cart towing or cart-train transport"),
    (r"\bpallet jacks?\b", "pallet-jack applications"),
    (r"\b(?:parts[- ]to[- ]line|line[- ]side) delivery\b", "production-line delivery"),
    (r"\bstorage\s*(?:&|and)\s*retrieval\b", "storage and retrieval"),
    (r"\bhigh[- ]reach\b", "high-reach storage claimed"),
    (r"\bhigh[- ]density (?:inventory storage|racking)\b", "high-density storage claimed"),
    (r"\blifting shelves\b", "shelf lifting"),
    (r"\btactile (?:feedback|sensors?)\b", "tactile sensing"),
    (r"\brecovers? from falls\b|\bfall recovery\b", "fall recovery claimed"),
    (r"\bomnidirectional(?:ly)?\b", "omnidirectional movement"),
    (r"\bonboard ai compute\b", "onboard AI computing"),
    (r"\bcurricul(?:um|a)\b", "education curriculum"),
    (r"\bpricing accuracy\b|\bprice checking\b", "retail price checking"),
    (r"\bconcrete pouring\b", "concrete placement"),
    (r"\binstallation of solar panels\b", "solar-panel installation"),
    (r"\bscripted interactions?\b", "scripted interaction"),
    (r"\bon[- ]site (?:professional operation|operation support|operator support)\b", "on-site operator support"),
    (r"\bvision inspection\b|\bvisual inspection\b", "visual inspection"),
    (r"\bdefect detection\b", "defect detection"),
]


def features_from(description: str, category: str = "") -> list[str]:
    """Controlled keyword -> feature templates, never source sentences."""
    text = re.sub(r"\s+", " ", (description or "").strip()).lower()
    features: list[str] = []
    for pattern, label in FEATURE_PATTERNS:
        for match in re.finditer(pattern, text):
            # A mentioned unsupported capability must not become a positive claim.
            prefix = text[max(0, match.start() - 70):match.start()]
            suffix = text[match.end():match.end() + 40]
            negated = re.search(r"\b(?:no|not|without|lacks?|lacking)(?:\s+[\w-]+){0,3}\s*$", prefix)
            unavailable = re.match(r"\s+(?:is |are )?not (?:available|offered|supported)\b", suffix)
            if (not negated or re.search(r"\bnot only\s*$", prefix)) and not unavailable:
                if label not in features:
                    features.append(label)
                break
    if category and category in CATEGORY_FEATURES:
        label = CATEGORY_FEATURES[category]
        if label not in features:
            features.insert(0, label)
    return features


def company_feature_fields(company: dict) -> dict:
    """Keep company-description claims distinct from the listings attributed to it."""
    raw_cases = company.get("use_cases") or []
    cases = list(dict.fromkeys(value.strip() for value in raw_cases
                             if isinstance(value, str) and value.strip())) if isinstance(raw_cases, list) else []
    return {
        "features": features_from(company.get("description") or ""),
        "useCases": cases,
        "featureStatus": "Directory company-description themes; not manufacturer verified",
    }


def merge_model_features(model: dict, listing: dict) -> None:
    """Union all reseller/manufacturer themes and retain each claim's source listings."""
    for feature in listing["features"]:
        if feature not in model["features"]:
            model["features"].append(feature)
        evidence = next((item for item in model["featureSources"] if item["feature"] == feature), None)
        if evidence is None:
            evidence = {"feature": feature, "listingIds": [], "sourceUrls": []}
            model["featureSources"].append(evidence)
        for field, value in [("listingIds", listing["listingId"]), ("sourceUrls", listing["sourceUrl"])]:
            if value not in evidence[field]:
                evidence[field].append(value)
    model["usp"] = "; ".join(model["features"][:4])


def short_usp(description: str, category: str = "") -> str:
    """Return controlled feature keywords, never a copied marketing sentence."""
    features = features_from(description, category)
    return "; ".join(features[:4])


def parse_sitemap(xml_text: str) -> dict:
    locations = re.findall(r"<loc>(.*?)</loc>", xml_text)
    robots = sorted({url for url in locations if "/robot/" in url})
    companies = sorted({url for url in locations if "/companies/" in url})
    other = sorted(set(locations) - set(robots) - set(companies))
    lastmod = {}
    for block in re.findall(r"<url>(.*?)</url>", xml_text, re.S):
        loc = re.search(r"<loc>(.*?)</loc>", block)
        if loc:
            lm = re.search(r"<lastmod>(.*?)</lastmod>", block)
            if lm:
                lastmod[loc.group(1)] = lm.group(1)
    return {
        "locations": locations,
        "robotUrls": robots,
        "companyUrls": companies,
        "otherUrls": other,
        "lastmod": lastmod,
    }


def parse_ssr_cards(page: str) -> dict[str, dict]:
    cards = {}
    for match in re.finditer(
        r'<article class="ssr-card">\s*<h3 class="ssr-card-name"><a href="(/robot/[^"]+)">(.*?)</a></h3>'
        r'\s*<p class="ssr-card-meta">(.*?)</p>\s*<p class="ssr-card-desc">(.*?)</p>',
        page,
        re.S,
    ):
        href, name, meta, desc = match.groups()
        meta_text = html.unescape(re.sub(r"<[^>]+>", "", meta)).strip()
        cards[href] = {
            "name": html.unescape(re.sub(r"<[^>]+>", "", name)).strip(),
            "meta": meta_text,
            "description": html.unescape(re.sub(r"<[^>]+>", "", desc)).strip(),
        }
    return cards


def fetch_paginated(endpoint: str, key: str, page_size: int = 500) -> tuple[list[dict], list[dict]]:
    rows: list[dict] = []
    errors: list[dict] = []
    offset = 0
    while True:
        url = f"{API}{endpoint}?limit={page_size}&offset={offset}"
        response = fetch(url)
        if response["error"]:
            errors.append({"url": url, "error": response["error"], "fetchedAt": response["fetchedAt"]})
            break
        try:
            payload = json.loads(text_body(response))
        except json.JSONDecodeError as exc:
            errors.append({"url": url, "error": f"JSON decode: {exc}", "fetchedAt": response["fetchedAt"]})
            break
        batch = payload.get(key) or []
        rows.extend(batch)
        if len(batch) < page_size:
            break
        offset += page_size
        if offset > 5000:
            errors.append({"url": url, "error": "pagination safety stop at 5000", "fetchedAt": utc_now()})
            break
    return rows, errors


def csv_catalog(data_dir: str) -> list[dict]:
    catalog = []
    for path in sorted(glob.glob(os.path.join(data_dir, "*.csv"))):
        with open(path, newline="", encoding="utf-8") as handle:
            for row in csv.DictReader(handle):
                manufacturer = (row.get("manufacturer") or "").strip()
                model = (row.get("model") or "").strip()
                if manufacturer and model:
                    catalog.append(
                        {
                            "manufacturer": manufacturer,
                            "model": model,
                            "category": (row.get("category") or "").strip(),
                            "file": os.path.basename(path),
                        }
                    )
    return catalog


def model_key(model: str, manufacturer: str) -> str:
    key = norm(model)
    for token in brand_key(manufacturer).split():
        key = re.sub(r"\b" + re.escape(token) + r"\b", " ", key)
    return " ".join(key.split())


def build_catalog_index(catalog: list[dict]) -> tuple[dict, dict]:
    by_brand: dict[tuple[str, str], list[dict]] = defaultdict(list)
    global_models: dict[str, list[dict]] = defaultdict(list)
    for row in catalog:
        key = model_key(row["model"], row["manufacturer"])
        by_brand[(brand_key(row["manufacturer"]), key)].append(row)
        global_models[key].append(row)
    return by_brand, global_models


def match_catalog(
    model: str, brand: str, catalog_by_brand: dict, global_models: dict
) -> tuple[str, list[dict]]:
    key = model_key(model, brand)
    brand_k = brand_key(brand)
    # A shared model name (for example NEO or Go2) does not establish the maker.
    # Keep the global index argument for existing callers, but never use it as
    # an attribution fallback. Verified corrections live in the strict audit.
    exact = catalog_by_brand.get((brand_k, key))
    if exact:
        return "exact", exact
    best = (0.0, [])
    for (candidate_brand, candidate_key), rows in catalog_by_brand.items():
        if candidate_brand != brand_k:
            continue
        ratio = difflib.SequenceMatcher(None, key, candidate_key).ratio()
        if ratio > best[0]:
            best = (ratio, rows)
    if best[0] >= 0.92:
        return "fuzzy", best[1]
    return "none", []


def build_listing(robot: dict, fetched_at: str) -> dict:
    company = robot.get("robot_companies") or {}
    name = (robot.get("robot_name") or "").strip()
    description = (robot.get("description") or "").strip()
    entry_type, brand, role = classify(robot)
    company_name = company.get("company_name") or ""
    slug = company.get("slug") or ""
    listing_id = robot.get("listing_id") or ""
    category = robot.get("robot_type") or ""
    source_url = f"{BASE}/robot/{listing_id}"
    company_url = f"{BASE}/companies/{slug}" if slug else ""
    official = OFFICIAL_SITES.get(brand or "")
    return {
        "listingId": listing_id,
        "name": name,
        "company": company_name,
        "companySlug": slug,
        "companyWebsite": company.get("website_url") or "",
        "companyCountry": company.get("country") or "",
        "companyRole": role,
        "category": category,
        "entryType": entry_type,
        "isConcreteModel": entry_type == "model" and norm(name) not in GENERIC_PRODUCT_NAMES,
        "classificationStatus": "needs-review" if entry_type in ("model", "series", "unclear") else "classified",
        "brand": brand,
        "usp": short_usp(description, category),
        "features": features_from(description, category),
        "sourceUrl": source_url,
        "companyUrl": company_url,
        "officialProductUrl": official or "",
        "officialProductUrlStatus": (
            "candidate; brand site, exact product page not resolved" if official else "not resolved"
        ),
        "availability": robot.get("availability") or "",
        "fetchedAt": fetched_at,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--out", default="data/competitors/buyandrentrobots.json")
    parser.add_argument("--gaps", default="data/competitors/buyandrentrobots-gaps.json")
    parser.add_argument("--scratch", default="scratch/competitor-research")
    parser.add_argument("--data-dir", default="data")
    parser.add_argument("--timeout", type=int, default=45)
    parser.add_argument("--workers", type=int, default=4)
    parser.add_argument("--check-detail", action="store_true", help="Optional: check robot detail pages (low concurrency)")
    parser.add_argument("--check-company-pages", action="store_true", help="Optional: check company profile pages")
    parser.add_argument("--skip-detail", action="store_true", help="Deprecated; detail checks are opt-in")
    parser.add_argument("--skip-company-pages", action="store_true", help="Deprecated; company checks are opt-in")
    parser.add_argument("--raw", action="store_true", help="Write raw HTML/API bodies to scratch")
    parser.add_argument("--offline", action="store_true", help="Rebuild from saved raw responses; never make network requests")
    args = parser.parse_args()
    if args.offline and (args.check_detail or args.check_company_pages):
        parser.error("Offline refresh cannot check remote detail pages")

    os.makedirs(args.scratch, exist_ok=True)
    os.makedirs(os.path.dirname(args.out), exist_ok=True)
    os.makedirs(os.path.dirname(args.gaps), exist_ok=True)

    errors: list[dict] = []
    fetched_at = utc_now()
    sources: dict[str, dict] = {}
    previous = {}
    if os.path.isfile(args.out):
        with open(args.out, encoding="utf-8") as handle:
            previous = json.load(handle)
    if args.offline:
        fetched_at = previous.get("fetchedAt") or datetime.fromtimestamp(
            os.path.getmtime(os.path.join(args.scratch, "buyandrent-robots-api.json")), timezone.utc
        ).isoformat().replace("+00:00", "Z")

    def get_source(name: str, url: str) -> dict:
        if args.offline:
            suffix = ".json" if name == "stats" else ".html"
            with open(os.path.join(args.scratch, f"buyandrent-{name}{suffix}"), "rb") as handle:
                body = handle.read()
            response = {"url": url, "status": 200, "contentType": "application/json" if name == "stats" else "text/html", "body": body, "fetchedAt": fetched_at, "error": None}
        else:
            response = fetch(url, timeout=args.timeout)
        sources[name] = {
            "url": url,
            "status": response["status"],
            "fetchedAt": response["fetchedAt"],
            "error": response["error"],
        }
        if response["error"]:
            errors.append({"source": name, "url": url, "error": response["error"]})
        if args.raw and response["body"]:
            suffix = ".json" if "json" in response["contentType"] else ".html"
            path = os.path.join(args.scratch, f"buyandrent-{name}{suffix}")
            with open(path, "wb") as handle:
                handle.write(response["body"])
        return response

    robots_txt = get_source("robots", f"{BASE}/robots.txt")
    sitemap_resp = get_source("sitemap", f"{BASE}/sitemap.xml")
    directory_resp = get_source("directory", f"{BASE}/directory")
    robots_page_resp = get_source("robots-page", f"{BASE}/robots")
    stats_resp = get_source("stats", f"{API}/api/stats")

    stats = {}
    if stats_resp["status"] == 200:
        try:
            stats = json.loads(text_body(stats_resp))
        except json.JSONDecodeError as exc:
            errors.append({"source": "stats", "error": f"JSON decode: {exc}"})

    sitemap = parse_sitemap(text_body(sitemap_resp))
    ssr_cards = parse_ssr_cards(text_body(robots_page_resp))

    if args.offline:
        with open(os.path.join(args.scratch, "buyandrent-robots-api.json"), encoding="utf-8") as handle:
            robots = json.load(handle)
        with open(os.path.join(args.scratch, "buyandrent-companies-api.json"), encoding="utf-8") as handle:
            companies = json.load(handle)
    else:
        robots, robot_errors = fetch_paginated("/api/robots", "robots")
        errors.extend(robot_errors)
        companies, company_errors = fetch_paginated("/api/companies", "companies")
        errors.extend(company_errors)

    if args.raw:
        with open(os.path.join(args.scratch, "buyandrent-robots-api.json"), "w", encoding="utf-8") as handle:
            json.dump(robots, handle, ensure_ascii=False, indent=1)
        with open(os.path.join(args.scratch, "buyandrent-companies-api.json"), "w", encoding="utf-8") as handle:
            json.dump(companies, handle, ensure_ascii=False, indent=1)

    # Cross-check every robot HTML page and every company profile page.
    detail_results: dict[str, dict] = {}
    company_page_results: dict[str, dict] = {}
    if args.check_detail and not args.skip_detail:
        def check_detail(listing_id: str) -> tuple[str, dict]:
            url = f"{BASE}/robot/{listing_id}"
            response = fetch(url, timeout=args.timeout)
            body = text_body(response)
            title_match = re.search(r'<h1 id="heroTitle"[^>]*>(.*?)</h1>', body, re.S)
            title = html.unescape(re.sub(r"<[^>]+>", "", title_match.group(1))).strip() if title_match else ""
            ok = response["status"] == 200 and bool(title) and title.lower() != "robot not found"
            return listing_id, {
                "url": url,
                "status": response["status"],
                "ok": ok,
                "fetchedAt": response["fetchedAt"],
                "error": response["error"],
            }

        with ThreadPoolExecutor(max_workers=args.workers) as pool:
            futures = [pool.submit(check_detail, robot.get("listing_id", "")) for robot in robots]
            for future in as_completed(futures):
                listing_id, result = future.result()
                detail_results[listing_id] = result
                if not result["ok"]:
                    errors.append({"source": "robot-detail", "url": result["url"], "error": result["error"] or "not ok"})

    if args.check_company_pages and not args.skip_company_pages:
        def check_company(slug: str) -> tuple[str, dict]:
            url = f"{BASE}/companies/{slug}"
            response = fetch(url, timeout=args.timeout)
            return slug, {
                "url": url,
                "status": response["status"],
                "ok": response["status"] == 200,
                "fetchedAt": response["fetchedAt"],
                "error": response["error"],
            }

        with ThreadPoolExecutor(max_workers=args.workers) as pool:
            futures = [pool.submit(check_company, company.get("slug", "")) for company in companies]
            for future in as_completed(futures):
                slug, result = future.result()
                company_page_results[slug] = result
                if not result["ok"]:
                    errors.append({"source": "company-page", "url": result["url"], "error": result["error"] or "not ok"})

    listings = [build_listing(robot, fetched_at) for robot in robots]
    by_id = {listing["listingId"]: listing for listing in listings}

    # Deduplicate models by brand + normalized model name.  A reseller listing and
    # the manufacturer listing collapse into one model, retaining both sources.
    models_by_key: dict[tuple[str, str], dict] = {}
    for listing in listings:
        if listing["entryType"] not in ("model", "series") or not listing["brand"]:
            continue
        key = (brand_key(listing["brand"]), model_key(listing["name"], listing["brand"]))
        if key not in models_by_key:
            models_by_key[key] = {
                "brand": listing["brand"],
                "model": listing["name"],
                "category": listing["category"],
                "entryType": listing["entryType"],
                "isConcreteModel": listing["isConcreteModel"],
                "classificationStatus": listing["classificationStatus"],
                "usp": listing["usp"],
                "features": [],
                "featureSources": [],
                "officialProductUrl": listing["officialProductUrl"],
                "officialProductUrlStatus": listing["officialProductUrlStatus"],
                "listingIds": [],
                "companies": [],
                "sourceUrls": [],
                "companyUrls": [],
                "fetchedAt": listing["fetchedAt"],
            }
        model = models_by_key[key]
        model["listingIds"].append(listing["listingId"])
        if listing["company"] not in model["companies"]:
            model["companies"].append(listing["company"])
        if listing["sourceUrl"] not in model["sourceUrls"]:
            model["sourceUrls"].append(listing["sourceUrl"])
        if listing["companyUrl"] and listing["companyUrl"] not in model["companyUrls"]:
            model["companyUrls"].append(listing["companyUrl"])
        merge_model_features(model, listing)

    models = sorted(models_by_key.values(), key=lambda item: (item["brand"].lower(), item["model"].lower()))

    company_by_name = {company.get("company_name") or "": company for company in companies}

    brands_by_key: dict[str, dict] = {}
    for model in models:
        key = brand_key(model["brand"])
        source_company = company_by_name.get(model["brand"], {})
        if key not in brands_by_key:
            brands_by_key[key] = {
                "name": model["brand"],
                "website": OFFICIAL_SITES.get(model["brand"], "") or source_company.get("website_url") or "",
                "country": source_company.get("country") or "",
                "role": "manufacturer",
                "modelCount": 0,
                "categories": [],
                "sourceUrls": [],
            }
        brand = brands_by_key[key]
        brand["modelCount"] += 1
        if model["category"] and model["category"] not in brand["categories"]:
            brand["categories"].append(model["category"])
        for url in model["companyUrls"]:
            if url not in brand["sourceUrls"]:
                brand["sourceUrls"].append(url)

    # Keep every company entry, including brands with no individual robot model
    # and pure rental / integration / media vendors.  This is deliberately
    # separate from `brands`, which is derived from model listings only.
    companies_inventory = []
    listings_by_company = defaultdict(list)
    for listing in listings:
        listings_by_company[listing["company"]].append(listing)
    for company in sorted(companies, key=lambda item: (item.get("company_name") or "").lower()):
        name = (company.get("company_name") or "").strip()
        if not name:
            continue
        slug = company.get("slug") or ""
        role = company_role(name, company)
        company_listings = listings_by_company.get(name, [])
        company_models = [model for model in models if name in model["companies"]]
        categories = company.get("robot_type") or []
        if not isinstance(categories, list):
            categories = []
        companies_inventory.append(
            {
                "name": name,
                "slug": slug,
                "website": company.get("website_url") or "",
                "country": company.get("country") or "",
                "city": company.get("city") or "",
                "role": role,
                "categories": categories,
                **company_feature_fields(company),
                "modelCount": len(company_models),
                "listingCount": len(company_listings),
                "sourceUrl": f"{BASE}/companies/{slug}" if slug else "",
                "sourceUrls": [f"{BASE}/companies/{slug}"] if slug else [],
                "fetchedAt": fetched_at,
            }
        )

    services = []
    excluded = []
    unclear = []
    for listing in listings:
        if listing["entryType"] == "service":
            services.append(
                {
                    "name": listing["name"],
                    "company": listing["company"],
                    "companyRole": listing["companyRole"],
                    "category": listing["category"],
                    "usp": listing["usp"],
                    "sourceUrl": listing["sourceUrl"],
                    "companyUrl": listing["companyUrl"],
                    "fetchedAt": listing["fetchedAt"],
                }
            )
        elif listing["entryType"] == "non_product":
            excluded.append(
                {
                    "name": listing["name"],
                    "company": listing["company"],
                    "reason": "scraped site title, article, domain listing or non-product page",
                    "sourceUrl": listing["sourceUrl"],
                    "fetchedAt": listing["fetchedAt"],
                }
            )
        elif listing["entryType"] == "unclear":
            unclear.append(listing)

    # Compare with every data/*.csv without modifying the catalog.
    catalog = csv_catalog(args.data_dir)
    catalog_by_brand, global_models = build_catalog_index(catalog)
    gaps_models = []
    for model in models:
        if not model.get("isConcreteModel", True):
            continue
        status, matches = match_catalog(model["model"], model["brand"], catalog_by_brand, global_models)
        model["catalogMatch"] = {
            "status": status,
            "matches": [
                {
                    "manufacturer": row["manufacturer"],
                    "model": row["model"],
                    "category": row["category"],
                    "file": row["file"],
                }
                for row in matches[:5]
            ],
        }
        if status == "none":
            gaps_models.append(
                {
                    "model": model["model"],
                    "brand": model["brand"],
                    "category": model["category"],
                    "entryType": model["entryType"],
                    "competitorUrl": model["sourceUrls"][0] if model["sourceUrls"] else "",
                    "allCompetitorUrls": model["sourceUrls"],
                    "officialProductUrl": model["officialProductUrl"],
                    "officialProductUrlStatus": model["officialProductUrlStatus"],
                    "officialProductUrlVerified": False,
                    "features": model["features"],
                    "usp": model["usp"],
                    "matchStatus": "no exact or fuzzy match in data/*.csv",
                }
            )

    catalog_brands = {brand_key(row["manufacturer"]) for row in catalog}
    gaps_brands = []
    for brand in sorted(brands_by_key.values(), key=lambda item: item["name"].lower()):
        if brand_key(brand["name"]) in catalog_brands:
            continue
        missing_models = [
            model for model in gaps_models if brand_key(model["brand"]) == brand_key(brand["name"])
        ]
        gaps_brands.append(
            {
                "brand": brand["name"],
                "website": brand["website"],
                "officialWebsiteStatus": "candidate; brand site, not independently verified",
                "categories": brand["categories"],
                "modelCount": brand["modelCount"],
                "missingModelCount": len(missing_models),
                "competitorUrl": brand["sourceUrls"][0] if brand["sourceUrls"] else "",
                "sourceUrls": brand["sourceUrls"],
            }
        )

    missing_ids = sorted(set(re.findall(r"/robot/([0-9a-f-]{36})", " ".join(sitemap["robotUrls"]))) - {robot.get("listing_id") for robot in robots})
    missing_slugs = sorted(set(re.findall(r'/companies/([^/\s\"]+)', " ".join(sitemap["companyUrls"]))) - {company.get("slug") for company in companies})
    detail_ok = sum(1 for result in detail_results.values() if result["ok"])
    company_ok = sum(1 for result in company_page_results.values() if result["ok"])

    counts = {
        "listings": len(listings),
        "uniqueListingNames": len({norm(listing["name"]) for listing in listings}),
        "models": len(models),
        "concreteModels": sum(1 for model in models if model.get("isConcreteModel", True)),
        "modelListings": sum(1 for listing in listings if listing["entryType"] == "model"),
        "series": sum(1 for model in models if model["entryType"] == "series"),
        "brands": len(brands_by_key),
        "companies": len(companies_inventory),
        "manufacturers": sum(1 for company in companies_inventory if company["role"] == "manufacturer"),
        "vendors": sum(1 for company in companies_inventory if company["role"] == "service_provider"),
        "mediaCompanies": sum(1 for company in companies_inventory if company["role"] == "media"),
        "unknownCompanies": sum(1 for company in companies_inventory if company["role"] == "unknown"),
        "services": len(services),
        "nonProducts": len(excluded),
        "unclear": len(unclear),
        "repeatedModelListings": sum(len(model["sourceUrls"]) - 1 for model in models),
        "catalogModels": len(catalog),
    }

    inventory = {
        "source": f"{BASE}/directory",
        "sourceName": "BuyAndRentRobots.com",
        "scope": "Public robot listings and company entries; detail-page validation is optional and separately reported",
        "fetchedAt": fetched_at,
        "method": "sitemap.xml + /robots SSR + paginated /api/robots + paginated /api/companies; optional detail checks",
        "sources": sources,
        "completeness": {
            "sitemapRobotUrls": len(sitemap["robotUrls"]),
            "sitemapCompanyUrls": len(sitemap["companyUrls"]),
            "sitemapOtherUrls": len(sitemap["otherUrls"]),
            "sitemapTotalUrls": len(sitemap["locations"]),
            "apiRobots": len(robots),
            "apiCompanies": len(companies),
            "apiStats": stats,
            "ssrRobotCards": len(ssr_cards),
            "ssrCompanyLinks": len(set(re.findall(r"/companies/([^\"?#]+)", text_body(directory_resp)))),
            "detailPagesChecked": len(detail_results),
            "detailPagesOk": detail_ok,
            "companyPagesChecked": len(company_page_results),
            "companyPagesOk": company_ok,
            "missingRobotIds": missing_ids,
            "missingCompanySlugs": missing_slugs,
            "inventoryComplete": bool(robots) and bool(companies) and not missing_ids and not missing_slugs and len(robots) == len(ssr_cards) == len(sitemap["robotUrls"]) and len(companies) == len(sitemap["companyUrls"]),
            "detailCheckPerformed": bool(detail_results),
            "detailCheckComplete": bool(detail_results) and detail_ok == len(robots),
            "companyCheckPerformed": bool(company_page_results),
            "companyCheckComplete": bool(company_page_results) and company_ok == len(companies),
            "detailCheckNote": "Opt-in --check-detail; detail checks are intentionally not part of the default inventory run",
            "complete": bool(detail_results) and detail_ok == len(robots) and bool(company_page_results) and company_ok == len(companies) and not missing_ids and not missing_slugs and not errors,
        },
        "counts": counts,
        "brands": sorted(brands_by_key.values(), key=lambda item: item["name"].lower()),
        "companies": companies_inventory,
        "models": models,
        "listings": listings,
        "services": services,
        "excluded": excluded,
        "unclear": unclear,
        "errors": errors,
    }

    gaps = {
        "source": f"{BASE}/directory",
        "fetchedAt": fetched_at,
        "comparison": {
            "catalogFiles": sorted(os.path.basename(path) for path in glob.glob(os.path.join(args.data_dir, "*.csv"))),
            "catalogRows": len(catalog),
            "catalogManufacturers": len(catalog_brands),
            "method": "same-brand normalized exact match, then same-brand SequenceMatcher >= 0.92; candidate hints only",
        },
        "counts": {
            "missingModels": len(gaps_models),
            "missingBrands": len(gaps_brands),
            "competitorModels": len(models),
            "competitorBrands": len(brands_by_key),
        },
        "models": gaps_models,
        "brands": gaps_brands,
        "unresolved": [
            {
                "name": listing["name"],
                "company": listing["company"],
                "category": listing["category"],
                "sourceUrl": listing["sourceUrl"],
                "reason": "model/brand could not be resolved from competitor listing",
            }
            for listing in unclear
        ],
    }

    if not inventory["completeness"]["inventoryComplete"]:
        print("Incomplete source inventory; existing output files preserved.", file=sys.stderr)
        print(json.dumps({"completeness": inventory["completeness"], "errors": errors}), file=sys.stderr)
        return 1

    # Preserve historical failed checks when doing an offline data-only refresh.
    if args.offline and previous.get("completeness", {}).get("rateLimitEvidence"):
        current = inventory["completeness"]
        for key, value in previous["completeness"].items():
            if key.startswith(("detail", "companyPages", "companyCheck")) or key == "rateLimitEvidence":
                current[key] = value
        current["complete"] = False
    inventory["refreshedAt"] = utc_now()
    inventory["refreshMode"] = "offline" if args.offline else "network"

    # Keep the exact reviewed description text reproducible without scratch files.
    # This is source evidence; it is never shipped as browser catalog JSON.
    descriptions_path = os.path.join(os.path.dirname(args.out), "company-descriptions.json")
    descriptions = {
        "sourceSnapshotAt": fetched_at,
        "scope": "Original company-description text for source-bound name extraction; not verified product claims.",
        "companies": [
            {key: company.get(key) for key in ("company_id", "company_name", "slug", "description")}
            for company in companies
        ],
    }
    with open(descriptions_path + ".tmp", "w", encoding="utf-8") as handle:
        json.dump(descriptions, handle, ensure_ascii=False, indent=1)
        handle.write("\n")
    os.replace(descriptions_path + ".tmp", descriptions_path)

    with open(args.out + ".tmp", "w", encoding="utf-8") as handle:
        json.dump(inventory, handle, ensure_ascii=False, indent=1)
        handle.write("\n")
    os.replace(args.out + ".tmp", args.out)
    with open(args.gaps + ".tmp", "w", encoding="utf-8") as handle:
        json.dump(gaps, handle, ensure_ascii=False, indent=1)
        handle.write("\n")
    os.replace(args.gaps + ".tmp", args.gaps)

    print(
        json.dumps(
            {
                "inventory": args.out,
                "gaps": args.gaps,
                "fetchedAt": fetched_at,
                "counts": counts,
                "completeness": inventory["completeness"],
                "missing": {"models": len(gaps_models), "brands": len(gaps_brands)},
                "errors": len(errors),
            },
            ensure_ascii=False,
            indent=1,
        )
    )
    return 0 if not errors else 1


if __name__ == "__main__":
    raise SystemExit(main())

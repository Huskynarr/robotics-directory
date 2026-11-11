#!/usr/bin/env python3
"""Poll robot news feeds and report announcements that are not in the catalog yet.

Usage:
  python3 scripts/news-radar.py                 # dry run: print new candidates
  python3 scripts/news-radar.py --issues        # post candidates to today's GitHub issue
  python3 scripts/news-radar.py --hours 72      # look-back window (default 36)

Sources live in data/news-sources.json. Already reported items are recognized by
hidden markers in issues labelled "news-radar", so the radar needs no state file.
"""

from __future__ import annotations

import difflib
import hashlib
import importlib.util
import json
import re
import subprocess
import sys
import urllib.request
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from html import unescape
from pathlib import Path
from typing import Final

ROOT: Final = Path(__file__).resolve().parent.parent
SOURCES_PATH: Final = ROOT / "data" / "news-sources.json"
LABEL: Final = "news-radar"
USER_AGENT: Final = "Mozilla/5.0 (X11; Linux x86_64) RoboticsDirectoryNewsRadar/1.0"
MAX_PER_RUN: Final = 40
MARKER: Final = re.compile(r"<!-- radar:([0-9a-f]{16}) -->")

ROBOT_TERMS: Final = re.compile(
    r"\b(robot\w*|humanoid\w*|quadruped\w*|robodog|cobot\w*|exoskeleton\w*|robovac\w*|"
    r"roboter\w*|saugroboter|m[äa]hroboter|vacuum|lawn ?mower|window cleaner|"
    r"embodied ai|manipulator\w*|amr|agv)\b|机器人|人形|四足|机器狗|机械臂|扫地机|割草机|外骨骼|具身",
    re.IGNORECASE,
)
LAUNCH_CUES: Final = re.compile(
    r"\b(launch\w*|unveil\w*|introduc\w*|announc\w*|debut\w*|reveal\w*|pre-?orders?|"
    r"now available|goes on sale|next[- ]gen\w*|first look|hands[- ]on|"
    r"vorgestellt|stellt\w* vor|präsentiert|startet)\b|发布|推出|亮相|首发|上市|开售|预售|全新|首款",
    re.IGNORECASE,
)
# Makers rarely say "launch" in video titles, so their own feeds accept softer wording.
MAKER_CUES: Final = re.compile(r"\b(meet|new|is here|all-new|next|introducing|world'?s first)\b", re.IGNORECASE)
# Business, research and policy news that is not a product announcement.
NOT_PRODUCT: Final = re.compile(
    r"\b(funding|financing|series [a-f]\b|raises?|valuation|ipo|acquir\w*|acquisition|partnership|"
    r"partners? with|study|research\w*|scientists?|university|standard|policy|lawsuit|layoffs?|"
    r"earnings|revenue|market size|forecast|webinar|podcast|award\w*|interview|opinion)\b|"
    r"融资|估值|收购|合作|研究|论文|财报|政策|方案|行动|规划|蓝图|调查|赞助|大赛|比赛|就业|论坛|峰会",
    re.IGNORECASE,
)
STOPWORDS: Final = frozenset(
    "the a an and or of for to in on with its new robot robots robotics launches unveils announces "
    "introduces amazon's".split()
)


@dataclass(frozen=True, slots=True)
class Item:
    source: str
    kind: str
    title: str
    url: str
    published: datetime | None

    @property
    def key(self) -> str:
        return hashlib.sha1(title_key(self.title).encode("utf-8")).hexdigest()[:16]


def title_key(title: str) -> str:
    """Normalize a headline so syndicated copies collapse to one key."""
    title = re.sub(r"\s+[-–|]\s+[^-–|]{2,60}$", "", title)  # drop " - Publisher" suffixes
    return re.sub(r"\s+", " ", re.sub(r"[^\w]+", " ", title.casefold())).strip()[:120]


def load_crawler():
    spec = importlib.util.spec_from_file_location("ai_nexus_crawler", ROOT / "scripts" / "ai-nexus-crawler.py")
    module = importlib.util.module_from_spec(spec)
    sys.modules["ai_nexus_crawler"] = module
    spec.loader.exec_module(module)
    return module


def parse_date(value: str) -> datetime | None:
    value = value.strip()
    if not value:
        return None
    try:
        parsed = parsedate_to_datetime(value)
    except (TypeError, ValueError):
        try:
            parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
        except ValueError:
            return None
    return parsed if parsed.tzinfo else parsed.replace(tzinfo=timezone.utc)


def parse_feed(xml_bytes: bytes, source: str, kind: str) -> list[Item]:
    """Parse RSS 2.0 items and Atom entries into Items."""
    root = ET.fromstring(xml_bytes)
    items: list[Item] = []
    for node in root.iter():
        tag = node.tag.rsplit("}", 1)[-1]
        if tag not in ("item", "entry"):
            continue
        fields = {child.tag.rsplit("}", 1)[-1]: child for child in node}
        title = unescape((fields.get("title").text or "") if "title" in fields else "").strip()
        link = fields.get("link")
        url = ""
        if link is not None:
            url = (link.text or "").strip() or link.get("href", "")
        date_node = next(
            (fields[name] for name in ("pubDate", "published", "updated", "date") if name in fields), None
        )
        published = parse_date(date_node.text or "") if date_node is not None else None
        if title and url:
            items.append(Item(source, kind, title, url, published))
    return items


def fetch(url: str) -> bytes:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read()


def is_candidate(item: Item) -> bool:
    """Launch wording is required; news and search feeds also need a robot term."""
    if NOT_PRODUCT.search(item.title):
        return False
    if item.kind == "maker":
        return bool(LAUNCH_CUES.search(item.title) or MAKER_CUES.search(item.title))
    return bool(LAUNCH_CUES.search(item.title) and ROBOT_TERMS.search(item.title))


COMMON_CJK: Final = frozenset(
    "机器 器人 人形 发布 推出 亮相 具身 智能 首发 全新 正式 科技 新浪 财经 网易 搜狐 进博 博会 展会".split()
)


def topic_words(title: str) -> set[str]:
    """Distinctive words (and CJK bigrams) used to group headlines about the same launch."""
    key = title_key(title)
    words = {w for w in re.findall(r"[a-z0-9][a-z0-9'-]+", key) if len(w) > 2 and w not in STOPWORDS}
    for run in re.findall(r"[\u4e00-\u9fff]{2,}", key):
        words |= {run[i : i + 2] for i in range(len(run) - 1)} - COMMON_CJK
    return words


def known_models(aliases) -> list[str]:
    """Model names distinctive enough to recognize without the maker (digits or 2+ words)."""
    names = set()
    for robot in aliases:
        model = re.sub(r"[^a-z0-9]+", " ", robot.model.casefold()).strip()
        if re.search(r"\d", model) and len(model) >= 3 or len(model.split()) >= 2:
            names.add(model)
    return sorted(names)


@dataclass(slots=True)
class Story:
    lead: Item
    words: set[str]
    also: list[Item]


def select(items: list[Item], seen: set[str], aliases, crawler, since: datetime) -> list[Story]:
    """Group recent, unseen launch items that name no catalog model into stories."""
    models = re.compile(r"\b(" + "|".join(re.escape(m) for m in known_models(aliases)) + r")\b")
    stories: list[Story] = []
    for item in sorted(items, key=lambda i: i.published or since):
        if item.published and item.published < since:
            continue
        if item.key in seen or not is_candidate(item):
            continue
        normalized = re.sub(r"[^a-z0-9]+", " ", item.title.casefold())
        if models.search(normalized) or crawler.match_robots(item.title, aliases):
            continue
        seen.add(item.key)
        words = topic_words(item.title)
        key = title_key(item.title)
        for story in stories:
            shared = words & story.words
            similar = difflib.SequenceMatcher(None, key, title_key(story.lead.title)).ratio() > 0.8
            if similar or len(shared) >= 3 or (len(shared) >= 2 and len(shared) / max(1, min(len(words), len(story.words))) >= 0.5):
                story.also.append(item)
                story.words |= words
                break
        else:
            stories.append(Story(item, words, []))
    stories.reverse()  # newest first
    return stories


def gh(*args: str, input_text: str | None = None) -> str:
    result = subprocess.run(["gh", *args], input=input_text, capture_output=True, text=True, check=True)
    return result.stdout


def seen_markers() -> set[str]:
    issues = json.loads(gh("issue", "list", "--label", LABEL, "--state", "all", "--limit", "60",
                           "--json", "number,title,body,comments"))
    text = "\n".join([i["body"] for i in issues] + [c["body"] for i in issues for c in i["comments"]])
    return set(MARKER.findall(text))


def link(item: Item) -> str:
    title = item.title.replace("[", "(").replace("]", ")")
    when = item.published.strftime("%Y-%m-%d %H:%M UTC") if item.published else "date unknown"
    return f"[{title}]({item.url}) — {item.source}, {when} <!-- radar:{item.key} -->"


def render(stories: list[Story]) -> str:
    lines = []
    for story in stories:
        sources = 1 + len(story.also)
        badge = f" **({sources} sources)**" if sources > 1 else ""
        lines.append(f"- [ ] {link(story.lead)}{badge}")
        lines.extend(f"  - {link(item)}" for item in story.also)
    return "\n".join(lines)


def post(items: list[Story], now: datetime) -> None:
    gh("label", "create", LABEL, "--color", "1d76db", "--description",
       "Possible new robots found by the news radar", "--force")
    title = f"News-Radar {now:%Y-%m-%d}"
    existing = json.loads(gh("issue", "list", "--label", LABEL, "--state", "open", "--search",
                             f'"{title}" in:title', "--json", "number,title"))
    number = next((i["number"] for i in existing if i["title"] == title), None)
    body = render(items)
    if number is None:
        intro = ("Announcements not yet in the catalog. Tick an item once it is added "
                 "or ruled out; close the issue when the day is done.\n\n")
        gh("issue", "create", "--title", title, "--label", LABEL, "--body-file", "-", input_text=intro + body)
    else:
        gh("issue", "comment", str(number), "--body-file", "-",
           input_text=f"New since last check ({now:%H:%M} UTC):\n\n{body}")


def main(argv: list[str]) -> int:
    post_issues = "--issues" in argv
    hours = int(argv[argv.index("--hours") + 1]) if "--hours" in argv else 36
    now = datetime.now(timezone.utc)
    since = now - timedelta(hours=hours)
    sources = json.loads(SOURCES_PATH.read_text(encoding="utf-8"))["sources"]

    def load(source: dict) -> list[Item]:
        try:
            return parse_feed(fetch(source["url"]), source["name"], source["kind"])
        except Exception as error:  # one broken feed must not stop the radar
            print(f"warn: {source['name']}: {error}", file=sys.stderr)
            return []

    with ThreadPoolExecutor(max_workers=8) as pool:
        items = [item for batch in pool.map(load, sources) for item in batch]

    crawler = load_crawler()
    seen = seen_markers() if post_issues else set()
    chosen = select(items, seen, crawler.load_aliases(), crawler, since)
    print(f"scanned {len(items)} items from {len(sources)} sources; {len(chosen)} new stories")
    if len(chosen) > MAX_PER_RUN:
        print(f"note: {len(chosen) - MAX_PER_RUN} older stories deferred to the next run")
        chosen = chosen[:MAX_PER_RUN]
    if not chosen:
        return 0
    if post_issues:
        post(chosen, now)
    else:
        print(render(chosen))
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))

# Catalog data verification

Last systematic review: 2026-07-11

## Method

The catalog is checked in two layers:

1. `pnpm audit:data` parses every CSV row strictly and checks required fields, stable IDs,
   normalized duplicates, currencies, years, URLs, local images, and identical image files.
2. `pnpm audit:data:links` requests every recorded source URL. HTTP 401, 403, and 429 are
   reported separately because they commonly indicate bot protection rather than a bad source.

Product facts are verified against manufacturer product pages, stores, manuals, specifications,
or dated manufacturer announcements wherever available. Independent contemporary reporting is
used for discontinued companies whose original sites no longer exist. A blank value means that no
reliable value was found; it must not be replaced with an estimate. Prices always name their
currency, and “Not disclosed” is preferred over an inferred price.

Images are checked for product identity. Shared images remain valid when a manufacturer presents
several capacity or configuration variants in one product gallery. Remote images retain their
manufacturer URL so their origin is explicit; local assets must have a valid product/source URL in
the same row.

## Primary sources used in the 2026-07-11 correction pass

- [Fourier GR-2](https://www.fftai.com/products-gr2)
- [PUDU D5 and D5-W](https://store.pudurobotics.com/products/pudu-d5)
- [Direct Drive Diablo](https://en.directdrive.com/product_diablo)
- [Pollen Robotics Reachy Mini](https://shop.pollen-robotics.com/products/reachy-mini)
- [Casio Moflin](https://www.casio.com/us/moflin/)
- [Dreame W10 Pro](https://global.dreametech.com/products/dreamebot-w10-pro)
- [Dreame D10s Plus](https://global.dreametech.com/products/dreamebot-d10s-plus)
- [ANTHBOT Genie](https://anthbot.com/products/genie-robot-lawn-mower)
- [Worx Landroid models](https://www.worx.com/landroid/landroid-models/)
- [ECOVACS T30S Combo](https://www.ecovacs.com/sg/deebot-robotic-vacuum-cleaner/deebot-t30s-combo-complete-black)
- [ECOVACS Y1 Pro Plus](https://www.ecovacs.com/sg/deebot-robotic-vacuum-cleaner/deebot-y1-pro-plus)
- [KEENON Kleenbot C30](https://www.keenon.com/en/product/C30/)
- [LionsBot R3 Scrub](https://www.lionsbot.com/r3-scrub/)
- [CenoBots SP50](https://www.cenobots.com/products/sp50)
- [Nilfisk Liberty SC50](https://www.nilfisk.com/en-us/professional/products/floor-cleaning/robotic-floor-cleaning/nilfisk-liberty-sc50+56104508/)
- [Xiaomi Robot Vacuum H40](https://www.mi.com/global/product/xiaomi-robot-vacuum-h40/)
- [UWORLD U1 series](https://www.uworldrobotics.com/product?type=1)
- [Faraday Future robotics](https://robotics.ff.com/us/)
- [WORLD AI Conference 2026 exhibitor directory](https://www.worldaic.com.cn/exhibitors)
- [Booster Robotics T2](https://www.booster.tech/booster-t2/)
- [Galbot](https://www.galbot.com/)
- [DexForce W1 documentation](https://docs.dexforce.com/en/Humanoid/W1Usermanual/V0.4.0/cg1oebgr/)
- [JAKA π and JAKA Kargo](https://www.jaka.com/en/newsDetail/1493)
- [AGIBOT WAIC 2026 product announcement](https://www.prnewswire.com/apac/news-releases/agibot-unveils-four-new-products-at-waic-2026-showcasing-embodied-ai-in-real-world-operations-302829347.html)
- [Dax Robotics Qiji T1000](https://www.daxrobotics.cn/)

## Sources for the World Humanoid Robot Games 2026 additions

- [Xinhua: Second World Humanoid Robot Games open with 2,056 robots](https://english.news.cn/20260822/5d3833b994004947b39aada45ad3de4d/c.html) — confirms 666 teams, 2,056 robots and 16 countries
- [Reuters: Tiangong Ultra and Honor Lightning at the Games](https://www.reuters.com/sports/robotics/chinese-humanoid-robot-lightning-beats-human-100m-world-record-state-media-says-2026-08-22/) — confirms the Lightning and Tiangong Ultra race entries
- [IEEE Spectrum: Honor Lightning half-marathon technical report](https://spectrum.ieee.org/china-humanoid-robot-marathon) — liquid cooling and race performance
- [HONOR MWC 2026 announcement](https://www.prnewswire.com/news-releases/honor-advances-its-ai-vision-at-mwc-2026-with-robot-phone-humanoid-robot-and-magic-v6-302701074.html) — confirms HONOR's first humanoid-robot program
- [IT之家: Fujian Fuzhi preparations for the Games](https://www.ithome.com/0/990/389.htm) — identifies the Fuzhi wheel-arm humanoid and its real-world testing

## Sources for the 2026-08-08 UBTECH + humanoid additions

Ten verified missing robots were added, sourced from the user's UBTECH product
pages and the RoboSphäre RoboNews video. Panda, Walker Tienkung, UGOT, uKit AI,
Yanshee and Alpha 1E come from official UBTECH product pages; LimX Luna,
VinRobotics H3/H5 and DroidUp Moya come from the RoboSphäre episode below,
cross-checked against the manufacturers' official product pages. The second
video was also reviewed; its Walker S2 and UWorld U1 models were already in the
catalog and were not duplicated.
Unknown specifications are left blank rather than invented; prices are recorded
as "Not disclosed" where the official page does not publish one. Local product
images were taken from the same manufacturer product pages.

Source videos:

- [RoboSphäre RoboNews: Während Figure 03 in den USA schuftet, sind Chinas Bots ab 18?!](https://www.youtube.com/watch?v=ERUEwRAVvmE) (2026-06) — chapters cover LimX Luna, VinRobotics H3 & H5, UBTECH U1 and DroidUp Moya
- [Everlast Robotics: Diese KI-Roboter sind ZU ECHT!](https://www.youtube.com/watch?v=_jIVP2QCZcM&t=627s) (2026-08) — Walker S2 and UWorld U1 confirmed as existing catalog entries; no additional named robot could be verified at the requested timestamp

Official product sources for the added robots:

- [UBTECH Panda Robot (Youyou)](https://www.ubtrobot.com/en/humanoid/products/panda-robot) — official AI robot partner of the China Pavilion at Expo 2020 Dubai
- [LimX Luna](https://www.limxdynamics.com/en/products/luna) — 160 cm, 27 DoF, commercial performance use
- [VinRobotics H3](https://vinrobotics.net/product) — third prototype of VinRobotics' high-end humanoid series
- [VinRobotics H5](https://vinrobotics.net/product) — flagship model for advanced industrial applications
- [DroidUp Moya](https://www.droidup.com/) — fully bionic android (WAIC 2026, Davos 2026)
- [UBTECH Walker Tienkung](https://www.ubtrobot.com/en/ai-education/products/walker-tienkung) — full-size research/education humanoid
- [UBTECH UGOT](https://www.ubtrobot.com/en/ai-education/products/ugot/) — 7-in-1 AI education robotic kit
- [UBTECH uKit AI](https://www.ubtrobot.com/en/ai-education/products/ukit-ai) — buildable programming robot for AI learning
- [UBTECH Yanshee](https://www.ubtrobot.com/en/ai-education/products/yanshee) — open-source educational humanoid platform
- [UBTECH Alpha 1E](https://www.ubtrobot.com/en/consumer/humanoid-robots/alpha-series/alpha-1e) — consumer educational humanoid

The Daxbot outdoor row's column alignment was also corrected in this pass: the
website field is restored to `https://daxbot.com/security-robots/products` and
the local image path `images/outdoor/daxbot-helium-security-robot.webp` now sits
in the image column.

## Sources for the 2026-08-05 RoboNews video additions

Robots added from the RoboSphäre video
[RoboNews: Zentaur-Ersthelfer mit Kettensäge, PLUS fliegender T800 & mehr](https://www.youtube.com/watch?v=xDdXM0cN15k)
(2026-08-05). Auto-generated subtitles garbled several names; each robot was
verified against the primary sources below before being added. Local product
images were taken from the same manufacturer/press pages; the `website` column
of each row is the image source.

- [Satyress Robotics Threehalves](https://www.satyress.com/) (image: satyress.com preview render; also KCRA, The Debrief)
- [Holiday Robotics FRIDAY](https://holiday-robotics.com/product) (image: The Robot Report press photo)
- [ROBROS IGRIS-C](https://www.robros.co.kr/en/igrisc) (image: robros.co.kr product page)
- [Liaode Technology E1 Yiyi](http://liaode.net/) (image: WAIC 2026 press coverage)
- [Dinghuo Bionic Technology / WSG Doll Xiaomei](https://allyourdolls.com/product-category/wsg-doll/) (image: product video thumbnail)
- [IIT iRonCub3](https://ami.iit.it/en/aerial-humanoid-robotics) (image: IIT press photo via TechXplore)
- Rainbow Robotics [HUBO](https://en.wikipedia.org/wiki/HUBO) and [DRC-HUBO](https://www.rainbow-robotics.com/en_drc_hubo) (image: rainbow-robotics.com product page)
- Generative Bionics [GENE.01](https://gbionics.ai/gene01/) and EngineAI [T800](https://en.engineai.com.cn/) description updates (The Robot Report, New Atlas, Mike Kalil)

## Historical availability sources

## Sources for the 2026-08-08 image backfill pass

This pass added only images that could be matched to the exact catalog model
from an official product page or a clearly attributed source image. Files were
converted to local WebP assets with `scripts/import-images.py`. Corporate product
images retain the manufacturer page as provenance; the two Wikimedia images are
public-domain/CC material as noted below. Rows without a safe exact-model asset
remain on the transparent placeholder rather than using a successor or similar
robot.

Added image sources:

- Cop Rose X6 — [product page](http://www.coprose.net/Window-Cleaning-Robot-X62)
- Blaupunkt Bluebot XTREME — [product page](https://blaupunkt.com/product/blaupunkt-bluebot-xtreme-bpk-vcbb1xte/)
- Dreame L10s Pro Ultra Heat — [Dreame source](https://global.dreametech.com)
- iRobot Roomba Combo 10 Max — [iRobot source](https://www.irobot.com)
- Roborock Qrevo Pro — [Roborock source](https://us.roborock.com)
- LEGO Mindstorms NXT — [Wikimedia Commons image](https://commons.wikimedia.org/wiki/File:Lego_Mindstorms_kit.jpg), CC BY-SA 3.0
- Sphero Mini — [Sphero source](https://sphero.com)
- DJI RoboMaster TT — [DJI source](https://www.dji.com/robomaster-tt)
- Husqvarna Automower 305 — [Husqvarna source](https://www.husqvarna.com)
- Boston Dynamics LS3 — [Wikimedia Commons image](https://commons.wikimedia.org/wiki/File:Legged_Squad_Support_System_robot_prototype.jpg), public-domain U.S. Marine Corps image
- Figure 01 — [Figure 01 press coverage](https://techcrunch.com/2023/03/02/figure-emerges-from-stealth-with-the-first-images-of-its-humanoid-robot/), image credit Figure AI
- LG CLOi ServeBot LDLIM21 — [LG source](https://www.lg.com/us/business/robotics)
- Vorwerk Thermomix TM6 — [Vorwerk source](https://thermomix.vorwerk.com)
- Suvie 3.0 Plus — [Suvie source](https://www.suvie.com)
- Segway ServeBot S1 — [Segway Robotics source](https://robotics.segway.com/)

## BYD Xiao Di — new entry (2026-08-09)

- [SCMP: BYD to debut first humanoid robots in August](https://www.scmp.com/business/china-business/article/3362362/byd-debut-first-humanoid-robots-august-rivalry-tesla-intensifies) — official company statement, August debut at Di Space
- [CnEVPost: BYD confirms plan to unveil humanoid robot in August](https://cnevpost.com/2026/07/28/byd-confirms-plan-humanoid-robot-aug/) — confirmation to China Securities Journal
- [TechFastForward: BYD Launches Xiao Di Humanoid Robot](https://techfastforward.com/articles/byd-launches-xiao-di-humanoid-robot-in-its-showrooms) — specs: 1.61 m, 58.5 kg, 31 DoF, 6+6 language translation
- [TMTPost: BYD to Debut Humanoid AI Robot](https://en.tmtpost.com/news/8081705) — 360-degree vision, multimodal interaction, codename Xiao Di
- [Notebookcheck: BYD officially unveils AI robot Xiao Di](https://www.notebookcheck.net/BYD-officially-unveils-AI-robot-Xiao-Di-Tesla-Optimus-faces-a-new-rival-as-the-U-S-blocks-it.1359680.0.html) — functional prototype, FCC import restrictions context

No image added: BYD press images are copyrighted and no CC-licensed or
manufacturer-published product image was available at the time of entry.

The remaining empty-image rows were not filled with substitute imagery. They
include discontinued products, blocked manufacturer CDNs, ambiguous successor
pages, and records whose available source does not expose an exact model image.
They remain candidates for a later source-specific pass.

- [Kuri cancellation (IEEE Spectrum)](https://spectrum.ieee.org/mayfield-robotics-shuts-down-kuri)
- [Laundroid bankruptcy (TechCrunch)](https://techcrunch.com/2019/04/23/seven-dreamers-laundroid-bankruptcy/)

The audit intentionally keeps unverified release years blank and retired product URLs empty when a
domain has been repurposed. This prevents an apparently complete catalog from silently presenting
fabricated dates or linking visitors to unrelated businesses.

## Sources for the 2026-08-13 additions

- [Luwu Dynamics XGO-mini2SW](https://www.xgorobot.com/en/miniw.html) — wheel-legged desktop robot and development/AI features
- [EngineAI JS01](https://en.engineai.com.cn/product-js01.html) — heavy-duty quadruped, payload, speed, perception and navigation features
- [EngineAI product family](https://en.engineai.com.cn/) and [S2 product page](https://en.engineai.com.cn/product-s2.html) — current EngineAI lineup and S2 service-robot positioning

## Sources for the 2026-08-15 WAIC 2026 additions

- [Shanghai government WAIC 2026 overview](https://english.shanghai.gov.cn/en-Events/20260624/9cc202d708504b56ba32f70fbd61ef79.html) and [Pudong government report](https://www.shanghai.gov.cn/nw15343/20260722/4514c99cfd364c3ba7d1b81790a09163.html) — official count of more than 1,100 participating companies and more than 3,000 exhibits
- [AheadForm Origin F1](https://www.aheadform.com/origin-f1), [Origin M1](https://www.aheadform.com/origin-m1) and [Elf Xuan](https://www.aheadform.com/elf-xuan) — desktop bionic interaction, character robot and reception/display use cases
- [Fourier GR Nano WAIC report](https://auto.gasgoo.com/news/202607/17I70466305C601.shtml) and [Fourier product site](https://www.fftai.com/) — desktop companion concept and company/product context
- [DEEP Robotics WAIC 2026 release](https://www.globenewswire.com/news-release/2026/07/22/3331079/0/en/new-product-lineup-and-six-industry-solutions-deep-robotics-makes-a-major-appearance-at-waic-2026.html), [official Lynx page](https://www.deeprobotics.cn/en/index/lynx.html) and [official Yunju mention](https://deeprobotics.cn/robot/wap/article/id/291.html) — Lynx M20S and the Yunju robot horse
- [Spirit AI Moz2 WAIC report](https://autonews.gasgoo.com/articles/news/waic-2026-spirit-ai-commercial-service-robot-moz2-makes-public-debut-2079208558850711553) — confirms the likely correction from “Sprint AI” to Spirit AI
- [UNIUBI Lingmao/Cyvet product page](https://www.uniubi.com/embodied-ai/robot), [official product details](https://www.uniubi.com/shop/buy?product=max) and [official 720° backflip report](https://www.uniubi.com/about/news/222) — product specifications, development/companion positioning and WAIC 2026 dynamic demonstration

## Sources for the 2026-08-21 variant additions

- [AGIBOT A3 / Expedition A3](https://www.agibot.com/products/A3) — base A3 platform, distinct from A3 Ultra
- [X Square Robot QUANTA X2](https://x2robot.com/en/product/quantum2) — wheeled bimanual humanoid and ArtiXon hand platform
- [DEEP Robotics DR02](https://www.deeprobotics.cn/en/index/dr02.html) and [DR02 specification PDF](https://deep-website.oss-cn-hangzhou.aliyuncs.com/app/DR02%E5%8D%95%E9%A1%B5202602-%E8%8B%B1%E6%96%87.pdf) — DR02 Pro variant comparison
- [Xiaomi global robotics site](https://www.mi.com/global/) and [CyberOne V2 reporting](https://www.humanoidsdaily.com/news/xiaomi-debuts-cyberone-v2-at-investor-day-moving-beyond-the-factory-floor) — second-generation CyberOne reporting

## Sources for the 2026-08-31 additions

- [Unitree Dex5-1](https://www.unitree.com/Dex5-1) — official product page with 20 DoF, 1.1 kg weight, dimensions, tactile-sensor count and load conditions
- [UBTECH Walker C1](https://www.ubtrobot.com/en/humanoid/products/walker-c1/) — official product page for the full-size humanoid service robot

- [Pink Robotics](https://www.pink-robotics.com/) — official company site for the German humanoid developer
- [Pink Robotics #01 on YouTube](https://www.youtube.com/watch?v=MaKcxfeq1Fc) and [Humanoids Daily coverage](https://www.humanoidsdaily.com/news/pink-robotics-emerges-in-germany-with-a-mission-to-revive-industrial-engineering) — identifies the first prototype as P0 and documents 1.75 m, 82 kg, 32 DoF and 8 kg payload

## Sources for the 2026-11-01 competitor additions

37 model/configuration additions were reviewed against manufacturer sources. Each
record, its paraphrased highlights and its check date are retained in
`data/competitors/verified-products.json`. Competitor listings only identify
research candidates; they do not establish specifications or availability.
Unknown fields remain empty; no competitor images were imported.

- KUKA: [KUKA manufacturer source](https://www.kuka.com/en-de/products/robot-systems/industrial-robots/lbr-iiwa)
- Bitcraze: [Bitcraze manufacturer source](https://www.bitcraze.io/products/crazyflie-2-1-plus/)
- Skyline Robotics: [Skyline Robotics manufacturer source](https://www.skylinerobotics.com/meet-ozmo)
- Simbe Robotics: [Simbe Robotics manufacturer source](https://www.simberobotics.com/store-intelligence/tally)
- Relay Robotics: [Relay Robotics manufacturer source](https://relayrobotics.com/)
- Dusty Robotics: [Dusty Robotics manufacturer source](https://www.dustyrobotics.com/fieldprinter)
- Pudu Robotics: [Pudu Robotics manufacturer source](https://www.pudurobotics.com/en/products?tab=cleaning)
- KEENON Robotics: [KEENON Robotics manufacturer source](https://www.keenon.com/en/product/C20), [KEENON Robotics manufacturer source](https://www.keenon.com/en/product/C55), [KEENON Robotics manufacturer source](https://www.keenon.com/en/product/S100), [KEENON Robotics manufacturer source](https://www.keenon.com/en/product/S300), [KEENON Robotics manufacturer source](https://www.keenon.com/en/product/T11), [KEENON Robotics manufacturer source](https://www.keenon.com/en/product/T3), [KEENON Robotics manufacturer source](https://www.keenon.com/en/product/T9)
- Gausium: [Gausium manufacturer source](https://gausium.com/products/beetle/), [Gausium manufacturer source](https://gausium.com/products/marvel/), [Gausium manufacturer source](https://gausium.com/products/mira/), [Gausium manufacturer source](https://gausium.com/products/phanshop/)

See `reports/competitor-audit-2026-11-01.md` for inventory coverage, unverified
model/family candidates and the remaining review queue.


### Second competitor verification batch, 2026-11-01

51 further model/configuration records bring this task's reviewed additions to 88.
The complete field-level records, manufacturer references and dated highlights are
in `data/competitors/verified-products.json`. The CSV catalog now has 1,343 models.

- Productive Robotics: OB7, Stretch, Max 8/12/16 and three Blaze welding systems —
  [manufacturer lineup](https://www.productiverobotics.com/).
- OTTO Motors: 100, 600, 1200, 1500 and Lifter —
  [manufacturer lineup](https://ottomotors.com/). Linked manufacturer specification
  PDFs supply technical figures; rendered zero counters were ignored. OTTO 1500
  lists 1,900 kg capacity rather than a value inferred from its name.
- Mobile Industrial Robots: MiR250, MiR600, MiR1350, MiR1200 Pallet Jack —
  [manufacturer product pages](https://mobile-industrial-robots.com/).
- Robotize: GoPal E22, E24, E24W, U22W, U24W and P35 —
  [manufacturer lineup](https://robotize.com/). Conflicting P35 payload claims remain
  blank; repeated generic cards were not treated as each model's specification.
- Bear Robotics: Servi, Servi Q and six Carti configurations —
  [manufacturer lineup](https://www.bearrobotics.ai/).
- Clearpath Robotics: Warthog, Husky A300, Jackal, Ridgeback, Dingo, Boxer,
  TurtleBot 4 and Lite — [manufacturer lineup](https://clearpathrobotics.com/) and
  [official TurtleBot 4 documentation](https://turtlebot.github.io/turtlebot4-user-manual/).
- Enabled Robotics: ten ER-FLEX and two ER-MAX configurations —
  [ER-FLEX](https://www.enabled-robotics.com/er-flex),
  [ER-MAX](https://www.enabled-robotics.com/er-max) and
  [manufacturer correspondence for MC250/MC600](https://www.enabled-robotics.com/partnernetwork).
  The system supplier is Enabled Robotics; manipulator capacity is distinguished
  from mobile-base capacity.

Contradictory weights for OB7, OB7 Stretch and Ridgeback were not imported. Generic
Husky source listings do not independently establish the A300 generation. All
unknown prices and release dates remain empty.

`data/competitors/listing-reviews.json` additionally records 17 classification
reviews with primary references. Six teach pendants and four motors are components;
five STEMROBO school lab/program listings are educational solutions; ER-FLEX and
ER-MAX are families of already imported configurations. These reviews do not
validate reseller availability or create extra complete-robot catalog rows.


### Third competitor verification batch, 2026-11-01

37 more product identity/highlight records were checked: 36 new CSV models and
one existing FarmBot model. This brings the task to 124 additions, 125 dated
primary-source highlight records and 1,379 catalog models. Exact page URLs, source
snapshots and model-specific qualifications are in `verified-products.json`.

- [Blue Robotics BlueROV2](https://bluerobotics.com/store/rov/bluerov2/) and
  [BlueBoat](https://bluerobotics.com/store/boat/blueboat/blueboat/): distinct ROV and
  surface-vehicle roles; BlueROV2 acrylic/aluminum depth limits stay qualified,
  BlueBoat capacity includes batteries and payload together.
- [Deep Trekker](https://www.deeptrekker.com/products): DTG3, PHOTON, PIVOT,
  REVOLUTION, SPECTRA, MAG and VAC. Configuration-dependent navigation and tooling
  are not assumed standard. MAG/VAC widths are omitted because metric/imperial
  values disagree; tether-reel IP ratings are not applied to complete vehicles.
- [Oceanbotics SRV-8](https://oceanbotics.com/srv-8/) and
  [SRV-8X OPTIMUS](https://oceanbotics.com/srv-8x-optimus/): standard and optional
  depth ratings are distinguished. Weight remains blank because extracted tables
  mix battery/no-battery figures.
- [VideoRay](https://videoray.com/products/): Defender, Pro 5, Ally and Wraith.
  Animated zero counters were ignored. Only explicit narrative specifications are
  imported; missing depth ratings are not inferred from another family member.
- [Seegrid](https://seegrid.com/autonomous-mobile-robots/): Lift CR1, Lift RS1,
  Tow Tractor S7. Native lb/mph units are retained; towing and onboard capacity
  differ. RS1 lift height remains out because the page says both 6 feet and 6 inches.
- [Capra Robotics](https://capra.ooo/): Carrier, Scout and Urban; reported runtime
  is a manufacturer claim, and ROI/payback marketing is not a measured result.
- [Aethon T3 family](https://aethon.com/t3/): T3 and T3XL; the separately linked XL
  dimensions and capacity are not inferred from T3.
- [Standard Bots](https://standardbots.com/): Spark, Core, Thor and Bolt. Spark
  reach conflicts between cards and detail; Thor has an apparent m/mm unit conflict.
  Both disputed reach figures remain out. Bolt is explicitly a coming-soon product.
- [Locus Robotics](https://locusrobotics.com/): Origin, Vector and Array; no claimed
  site-level throughput, savings or payback is treated as per-robot performance.
- [Exotec Skypod](https://www.exotec.com/system/automated-warehouse-robots/): robot
  payload and speed are separated from workstation throughput.
- [EZ-Robot](https://www.ez-robot.com/): JD, Roli, Six and EZ-InMoov Robot Head.
  Hardware kit requirements and product dimensions are distinguished from shipping
  carton dimensions; manufacturer listings were marked unavailable at review.
- [FarmBot Genesis v1.8](https://farm.bot/products/farmbot-genesis-v1-8) and
  [Genesis XL v1.8](https://farm.bot/products/farmbot-genesis-xl-v1-8): nominal
  footprint is not exact serviceable area. The existing XL row's unsupported
  whole-system IP67 value was removed: the source's IP67 statement concerns its
  USB camera. Existing unrelated fields were preserved.

Four Blue Robotics source-model candidates are now independently classified as
components in `model-classifications.json`: M500 motor, T500 thruster, Ping360 sonar
and the ANB pH sensor. These records remain in the source inventory, with source
URLs and factual features; they do not masquerade as imported complete robots.
Six previously unclear EZ-Robot/FarmBot listings have exact primary-supported
catalog targets in `listing-reviews.json`. The original source classification is
retained for reproducibility.

Of four already queued Makeblock detail requests, three returned HTTP 429 and
one returned HTTP 200. No Makeblock detail data was used for additions; no new
requests to that host were issued after that batch.
The primary-page helper now serializes requests per host and skips queued calls
to that host after its first 429. Magazino SOTO returned a database-error page, so
its details were not imported. These fetch limitations do not establish that a
product is unavailable or discontinued.

## 2026-11-01 — Competitor review batch 4: medical, agriculture and product classes

25 manufacturer-supported models added; catalog now 1,404 rows, with 150 dated
product-highlight records (149 additions and one preexisting FarmBot model).
Primary pages and review qualifications are preserved in
`scratch/competitor-research/primary/batch-4/` and
`data/competitors/verified-products.json`.

- Medtronic Hugo RAS: modular arm carts, open console and Touch Surgery ecosystem.
  CMR Versius: modular portable units, V-wrist rotation, 3D HD view and open console.
- Stryker Mako 4: fourth-generation platform, CT planning, haptics and Q Guidance
  integration. Procedure applications are not counted as separate robot models.
- Zimmer Biomet ROSA Knee with OptimiZe: named knee configuration, planning,
  landmarking, tracking and imaging workflows. Other ROSA applications are not
  implicitly verified. Regulatory status, reimbursement and clinical outcomes
  were not imported from marketing claims.
- EksoNR: therapist-controlled gait assistance and GaitCoach/session feedback.
  Ekso Indego Personal: powered hip/knee joints, modular quick connects, 14 kg.
  Eligibility and clinical benefit are outside this technical check.
- Cyberdyne HAL-ML08, ML07, ML05: explicitly named columns in the Japanese lower-
  limb medical-system table. Approximate device weights 13/9.5/14 kg include cuffs,
  sensor shoes and battery; runtime approximately one hour depends on operation.
  Wearer height/weight are not robot dimensions or payload.
- Carbon LaserWeeder: tractor-mounted implement, not the separate 2021 autonomous
  demonstration vehicle. Five G2 configurations have individually checked pages.
  Compatible tractor, hitch and PTO supply remain required. Tractor lift capacity
  is not implement payload; inconsistent shoot-width conversion was omitted.
- Naïo Oz: GNSS RTK navigation, up to eight hours operation and 60 kg tool lift.
  FarmDroid FD20: RTK seed-position mapping, mechanical weeding, up to 12 rows and
  3.5 m working width. Weather-dependent runtime is qualified; ambiguous 1.6 kWh
  solar-power figure is omitted. Related FD60 supports up to 20 rows and 6.75 m;
  its range extender consumes petrol and is not assigned the all-electric FD20 claim.
- Neuromeka Indy7/Indy12: manufacturer names the 7/12 kg base collaborative arms.
  Pro, V3 and RP2 configurations are not merged with them.
- ULC CISBOT: live-gas-main joint-sealing robot offered through a turnkey service.
  Diameter range describes different configurations, not one universal chassis.
- inVia Picker: suction tote handling, lift, hot-swappable battery and fiducial
  navigation. Payload/reach are subject to engineered system configuration;
  workstation throughput is not per-robot performance.
- Tailos Rosie: manufacturer purchase listing from USD 7,999.99, 18 lb, lidar and
  3D depth sensing, 90/135/180-minute battery modes. Three supplied batteries do
  not imply that one battery runs a whole shift. Prices dated, not global offers.
- Modular Robotics GiggleBot and GoPiGo: educational wheeled kits. Required
  separately supplied micro:bit/Raspberry Pi is explicit; no generation inferred.

Source model classifications now include BrainOS and Hivemind as software,
ShelfOptix as managed shelf-intelligence service, Nuro Driver as a software/hardware
integration stack, See & Spray as integrated plant-level perception/actuation
technology, and BrickPi/Cubelets modules as components. Names stay in the source
inventory and none of these is counted as an imported complete robot. Carbon ATK,
PRX250 and Sereact Cortex are separately reviewed within the unclear-listing queue.

Manufacturer retrieval limitations: Intuitive returned an Incapsula rejection
inside HTTP 200 responses; empty main content was not interpreted as valid product
evidence. J&J, Iris/uAvionix returned HTTP 403. No access restriction was bypassed,
no blocked product facts were invented. Greenfield pages did not establish the
BOTONY model identity. PickNik's 3Pro listing remains ambiguous. No requests were
made to rate-limited BuyAndRent detail pages or Makeblock in this batch.

Medical/rehabilitation and agriculture are new commercial subcategories. A model-
matching regression is fixed: when model and recorded manufacturer are identical
(e.g. Ameca), removing the optional company prefix must not erase the model name.
This corrects existing catalog matching and does not independently verify its specs.

## 2026-11-01 — Competitor review batch 5: transport, telepresence and cleaning

50 manufacturer-supported models added; 1,454 catalog rows and 201 dated product-
highlight records now include 199 additions and two preexisting models. Primary
snapshots, PDF evidence and curation scripts are preserved in
`scratch/competitor-research/primary/batch-5/`.

- IPLUSMOBOT: 22 explicitly named configurations, including EMMA K/L, FOLA, OMNI,
  Luna and NERA-A. Full-load speed is distinguished from unloaded speed; NERA arm
  capacity is not cargo capacity. Conflicting metric/imperial dimensions and
  FOLA BN2001 mass are omitted. Optional cameras are not standard equipment.
- Quasi: C2 Mini, Standard, Large, PartPorter and Heavy. Native pound payloads
  avoid inconsistent rounded conversions. Mass includes batteries, not shipping
  crates. Wireless charging is optional on the three larger configurations.
- Ohmni Telepresence is explicitly historical, discontinued August 2024. Its
  successor's specifications are not assigned to it. OhmniCare is a separate
  telehealth platform; OhmniClean uses UV-C in unoccupied rooms. Conflicting
  OhmniClean weights and unverified efficacy percentages are omitted.
- Gausium Omnie: multimodal SLAM, 3D lidar, panoramic camera and wet/dry spot
  targeting. Avidbots Neo 2W: separately named warehouse scrubber with low-obstacle
  detection, Bulk Navigator and Debris Diverter; no Neo 2 equivalence inferred.
- Nexaro NR 1500 and NR 1700: distinct products. NR1500's former product URL
  redirects to NR1700, but the official download share retains a separate August
  2025 datasheet. That PDF supports NR1500 mass, mode-specific runtime, dimensions,
  laser navigation and washable HEPA H13 filter. NR1700 uses its own product page.
  Fleet functions can require a paid license; checkout price ambiguity is omitted.
- Cleanfix S170 Navi: lidar, camera/microphone-free design, Wi-Fi/cellular support,
  self-emptying dock and optional FieldBots fleet license. Privacy guarantees and
  UV-C efficacy are not independently established. Robot and dock sizes are separate.
- PAL StockBot: RAIN RFID readers/antennas, up-to-four-meter capture and ERP/WMS
  interfaces. Runtime omitted because specification table and FAQ disagree
  (10/12 h, with 5/4 h recharge). TIAGo Pro: dual seven-axis arms, ROS 2, Mecanum
  base and 3 kg/arm excluding end effector. Inconsistent reaches are omitted;
  optional wrist F/T sensor, Jetson and dock are not standard equipment.
- BotEyes-Pad: USD 1,999 base excludes tablet. Autodocking requires compatible
  orientation sensing and horizontal tablet orientation; iPad limitations are
  explicit. Features page supplements the product homepage as evidence. Bundles
  with different tablets are not counted as distinct chassis.
- Ava Robot and Ava Healthcare Robot are current manufacturer names. A public
  product brochure supports the general Ava model. Neither source establishes
  equivalence with the competitor's historical Ava 500 name, which stays open.
- OrionStar: LuckiBot, Pro Autodoor and CarryBot D100/D150 are separate names.
  D150 runtime is qualified as tested with 100 kg on marble; total load includes
  attachments. Tray/shelf configuration masses are not generalized.
- UFACTORY xArm 5/7 added, xArm 6 highlights reviewed. Existing xArm 6 legacy mass
  12.2 kg differs from current page 12.5 kg and is not overwritten as though the
  hardware generation were proven. The unrelated preceding 850 mm/20 kg block is
  not assigned to xArm. OrionStar's link establishes UFACTORY as manufacturer.
- Robotnik: RB-KAIROS and RB-ROBOUT bases remain separate from Plus manipulators.
  Arm capacities are labeled by selected UR configuration. Optional payload
  upgrades and grippers are not standard equipment or extra robot identities.
  ROBOUT base runtime is omitted because banner and specification disagree.

Eight additional identity reviews resolve six IPLUSMOBOT families, CarryBot and
the xArm manufacturer correction. There are now 18 identity rules. Partial family
representation is not a claim of complete historical/custom variant coverage.
The stricter review still has 180 source model/family mentions and 89 originally
unclear listings open. All source names and raw classifications are retained.

New navigation filters cover commercial telepresence, research platforms and
commercial cleaning. Integration checks require every reviewed product to appear
in an appropriate subcategory and keep professional robots out of home results.

Pudu guessed product paths returned a generic product-list shell even after a
browser render; a real SH1 page was subsequently found. Its upright scrubber
description alone is not treated as proof of an autonomous robot. SuperCam,
Cleanfix RA660 Navi M and Robotnik RB-WATERCHER remain unresolved. No further
requests were sent to rate-limited BuyAndRent detail pages or Makeblock.


## 2026-11-01 — Competitor review batch 6: aerial and security platforms

21 primary-supported configurations and research platforms added: 1,475 catalog
rows, 588 exact manufacturer spellings and 222 dated highlight records (220 task
additions plus two existing models). Evidence and curation scripts are preserved
in `scratch/competitor-research/primary/batch-6/`.

- Skydio R10: 20-minute flight and up-to-three-hour landed Perch streaming remain
  separate claims. Its 785 g mass includes battery. No unsupported waterproof
  rating. X10: 2.11 kg configured mass, 2.49 kg maximum takeoff mass, 40-minute
  ideal flight versus 35-minute hover. Controller properties stay separate.
- Parrot ANAFI UKR: standard and XLR battery configurations have different masses,
  flight conditions and endurance. The technical-specifications page supplies
  the evidence; radio modes do not establish legal operating permissions.
- Inspired Flight IF800 TOMCAT/IF1200: battery-inclusive aircraft mass differs
  from maximum takeoff mass. IF800 uses the official specification documentation
  in addition to its product page. Inconsistent IF1200 payload values are omitted;
  the IF1200A interface reference does not create an extra catalog variant.
- Event 38 E400 Mapping, E400 ISR and E455: distinct named configurations with
  separate endurance, payload and speed conditions. Initial HTTP-200 snapshots
  contained product-specific evidence. A subsequent direct request returned 403;
  further requests stopped. No BVLOS permission is inferred from capability.
- Quantum Reliant is a heavy-fuel platform; its endurance is not battery life.
  Twister has separate flight endurance and takeoff mass. Vector AI fixed-wing
  and multicopter configurations have different endurance and takeoff limits;
  they are configurations of one convertible family. Animated zero counters
  are not specifications and were ignored.
- Shield AI V-BAT: fuel endurance and payload maxima are not promised together.
  X-BAT is explicitly in development: scheduled first flight in 2026 is not
  evidence that flight occurred, and planned 2029 production is not availability.
  Development targets are kept out of numerical specification fields.
- Asylon DroneDog integrates Boston Dynamics Spot with security payload,
  docking and managed operations; it is not an alias for a bare Spot. Guardian
  has mission-dependent flight endurance; automatic battery swapping does not
  imply unlimited continuous flight. RSOC is a staffed service, not a chassis.
- Percepto Ranger/Ranger OGI are current named systems. The old AirMax/AirMax OGI
  source mentions remain unresolved without explicit evidence of identity.
  Dock hurricane resistance is not an aircraft rating. Percepto Autonomous
  Solutions merges with Percepto as a company alias: 595 competitor groups,
  all source names preserved, rather than the previous duplicate count of 596.
- Kratos MQM-178 Firejet: target/research aircraft maker corrected from Shield AI.
  General Atomics Avenger ER: current named family configuration; its specifications
  are not assigned to an unproven historical MQ-20 test-airframe identity. Family
  representation remains partial. Lockheed Martin X-62A VISTA: one-off research
  testbed developed with Calspan; Shield AI is an autonomy-trial participant.
  The 2021 redesignation is not a product launch date. No normal F-16 performance
  specifications or commercial availability are inferred.
- Inspired Flight GS-ONE is a ground controller, not an aircraft. A zero-dollar
  shop placeholder does not establish a free robot. Parrot CHUCK DV7 remains
  unresolved: current CHUCK 3.0 material does not prove equivalence.

Five new identity decisions bring the total to 23, and two nonrobot decisions
bring that total to 15. There remain 160 strict source model/family mentions and
89 originally unclear listings requiring review. The additional fuzzy gap check
runs offline and reports 147 candidates/26 brands; it is not identity verification.

The commercial CSV now has the common 22 fields plus `depthRating`, `flightTime`
and `maxTakeoffWeight` (25 columns); the other eight CSVs retain 22 columns.
Existing rows are padded without shifting values. Detail tables, comparison and
structured data expose the new fields. Speed is labeled generically because
cruise speed must not be presented as a maximum. A commercial aerial navigation
filter keeps these platforms discoverable. Flight endurance and takeoff mass
are not filled into battery-life and empty-weight fields.


## 2026-11-01 — Competitor review batch 7: industrial arms and warehouse systems

20 new models/configurations and dated highlights for the existing Mercury X1:
1,495 catalog rows, 592 exact manufacturer spellings and 243 highlight records
(240 task additions, three existing models). Primary snapshots and curation are
preserved in `scratch/competitor-research/primary/batch-7/`.

- FANUC CR-4iA, CR-7iA, CR-7iA/L, CR-14iA/L, CR-15iA and CR-35iB are separately
  named in the official collaborative-robot brochure. CRX remains a different
  line. Payload and reach come from the named feature overview, not misaligned
  extracted tables. CR-35iB's 35/50 kg capacity remains configuration-dependent.
  Hand-guided teaching needs a separate module; vision, force sensors and
  offline simulation are options. No global IP/speed or fence-free guarantee.
- Magazino SOTO: up to 24 totes depends on tote/backpack layout, with 250 kg total
  and 20 kg per tote. This does not imply 480 kg capacity. Gripper handover height
  is not chassis size. Up-to-1.5-m/s travel requires aisles at least 2.5 m wide.
  Up-to-eight-hour operation is distinct from 24/7 process marketing. The old
  SOTO URL redirects to a customer case study; the current production-logistics
  page supplies product evidence. TORU's shoe-logistics page separately supports
  shoebox/specialized NEO-tote picking; daily operating hours are not battery life.
- AmbiSort A-Series and AmbiStack are configurable integrated sorting/stacking
  systems. A-Series retains human sack replacement; its 66-destination image is
  explicitly a placeholder. AmbiStack pallet/container outputs and layout sizes
  are options rather than additional robot identities. AI-training, deployment
  speed, accuracy and relative-throughput marketing are not benchmarked here.
- HWArobotics SLS300/400/500/600 are integrated shuttle AS/RS systems, not one
  free-roaming robot each. Standard totes, variable tote widths, FIFO flow-rack
  buffering and cross-aisle/level movement distinguish the four systems.
  Narrative sections are reviewed; numerical PDF performance tables were not
  visually validated and are not imported. Goods-lift capacity, aisle throughput,
  example installation counts and container dimensions are not robot specs.
  No 24-hour battery, zero-downtime or independently certified safety claim.
- Elephant myAGV original and explicitly named Pi/JN 2023 configurations stay
  separate. The original page's Raspberry Pi base mass/size/speed do not migrate
  to later generations. New-generation pages name 5 kg capacity and different
  computing boards. Arms, 3D cameras, screens and batteries are optional kits.
  Year in the product name does not establish a release date or availability.
- myCobot Pro 630: six axes, 2 kg payload and 630 mm working radius; Linux/RoboFlow
  and ROS/Python/C++ support. Radius is not chassis size, and collision detection
  does not prove an independently validated collaborative safety certification.
- Mercury A1 is a single seven-axis research arm. B1 is a stationary dual-arm
  torso with 17 total axes; X1 is a wheeled 19-axis platform. The existing X1 row
  is retained and receives only dated highlights/evidence. New controller details
  are not assigned retroactively. Contradictory CPU/GPU/TOPS statements are
  omitted. B1 payload is omitted because the source does not clarify per-arm
  versus total capacity. Exoskeleton/VR controllers are accessories.

Three new family decisions bring identity rules to 26. They resolve the source
CR-Series and Mercury mentions to named configurations, and record AmbiSort
A-Series as a configurable family-level system without invented installation
variants. All source names and classifications are retained. The strict queue
has 148 model/family mentions and 89 originally unclear listings. The additional
BuyAndRent heuristic refresh is offline: 138 candidates and 23 brands; this is
not strict identity verification. No requests to BuyAndRent or Makeblock.

ABB YuMi pages timed out; a library PDF returned HTTP 403 and further ABB requests
stopped. YuMi remains unresolved rather than relying on snippets as import proof.
A guessed FANUC page returned 404; the official CRX-hosted brochure supports the
actual CR models. A retained original myAGV page alone does not prove current
stock or discontinuation. Category schemas remain 25 commercial / 22 otherwise.


## 2026-11-01 — Competitor review batch 8: transport, handling and retail sensing

16 named models/configurations added: 1,511 catalog rows, 595 exact manufacturer
spellings and 259 dated highlight records (256 task additions, three existing
models). Primary snapshots and curation are preserved in
`scratch/competitor-research/primary/batch-8/`.

- OMRON LD-60, LD-90, LD-90x and LD-250 retain individual payload, speed and
  loaded/unloaded runtime ratings from the named key-specification blocks.
  Optional ESD skins, toppers and MoMa arm integration are not extra base models.
  OL-450S has a 450 kg cart lift and separate loaded/unloaded runtime. Its speed
  is omitted: the individual page says 1.2 mm/s; the family comparison says
  1.2 m/s forward/lateral and 0.3 m/s reverse. Lift travel is not chassis size.
  Twenty-to-eighty-percent charging time is not full recharge.
- Rapyuta PA-AMR is the two-50-L-container base pick-assist robot. People select
  items; the robot guides picking and transports totes. RFID and autocharging
  station are explicitly optional. The manufacturer's exposition overview names
  PA-AMR XL with two 75 L totes; the functionality page also links an XL model.
  The linked current URL redirects to High Capacity Model, which alone does not
  prove unchanged hardware generation. Current High Capacity mass is not assigned
  to XL. The separately named Extra High Capacity configuration has three 75 L
  totes, 39.2 kg payload and approximately 63 kg platform mass. Container liters
  are not cargo kilograms; tentative aisle limits are omitted.
- Rapyuta AFL: current page lists Japan availability, 4.5 m lift and 1.35-ton
  payload. Payload maximum is not promised at maximum height without a load chart.
  Case-study videos are explicitly old-model examples and are not current specs.
  Three-hour charging is not operating endurance. No universal compatibility,
  guaranteed 30-pallet/hour result, deployment-time or safety guarantee is imported.
- Smart Palletizer Essential/Advanced/Premium are explicit integrated-system
  configurations with separate installation footprints. Partner arm supplier can
  vary; generic payload/throughput maxima do not apply unconditionally to every
  selected arm. Interlayer handling, lifts and grippers can be optional. Maximum
  stacking height is not chassis height. Table icons missing from extracted text
  are not interpreted as included features.
- Smart Item Picker, Smart Depalletizer and Smart Mixed Case Palletizer are
  integrated installations, distinct from bare partner arms and external AS/RS
  or AMRs. 'Above 5 kg' is not a maximum item-picker payload. Mixed-case pages
  disagree on 30 kg versus 30 kg and above, and up to versus above two meters;
  those numerical fields are omitted. A guessed mixed-case URL redirected to a
  JPEG, which is rejected as product evidence; direct product HTML is meaningful.
- Tally RFID is a named sensing configuration of the Tally mobile platform, not
  another independently designed base chassis. Conflicting 35/40 ft read ranges
  are omitted. Tally Spot is a fixed-camera system and is classified as a sensor
  component rather than another mobile robot; battery power does not imply motion.
- NAVER ARC is shared cloud robot intelligence/software, not a chassis. DUSt3R's
  official NAVER repository describes image-based learned 3D reconstruction;
  the competitor's cleaning category does not establish a cleaning robot.
  Brain Inventory Scan is explicitly an accessory fitted to OEM scrubbers.
  The separate generic Brain scrubber listing remains unresolved rather than
  being relabeled as software merely because Brain supplies the autonomy layer.

Ten additional reviews resolve eight originally unclear robot/family listings
and classify Inventory Scan/DUSt3R separately. Of the 122 original unclear listings,
43 are reviewed and 79 remain open: 13 components, two software offerings, five
educational services, six resolved families and 17 concrete models. The raw
classifications and all source identities remain intact. The strict original
model/family queue has 144 remaining mentions; identity rules stay at 26 while
nonrobot decisions increase to 17 (12 components, three software, two services).
The additional BuyAndRent gap refresh is offline: 136 candidates and 22 brands,
which is not a substitute for strict identity verification.

uAvionix requests returned HTTP 403; they are not used as primary import evidence
and further requests stopped. The local fetch helper now also stops pending host
requests on 403, in addition to 429. No new requests to BuyAndRent or Makeblock.
No browser was needed for primary research. All category schemas remain unchanged.


## 2026-11-01 — Competitor review batch 9: mobile bases, cleaning and security

23 named models/configurations added, taking the catalog to 1,534 rows, 598 exact
manufacturer spellings and 282 dated primary-sourced highlight records (279 task
additions plus three existing models). Saved evidence and curation inputs live in
`scratch/competitor-research/primary/batch-9/`.

- Richtech: Dex, DUST-E MX, DUST-E S, Matradee Plus, Pallet Jack. Dex's launch
  language and stationary/mobile options are preserved; no bipedal locomotion or
  immediate availability is assumed. DUST-E S is a four-function wet/dry cleaner.
- Fdata: A011, four individually named A012 configurations, A020, A025R/F/N and
  A026. Payloads remain configuration-specific. Developer bases do not imply
  included upper bodies, tools or complete autonomy sensors. A020's erroneous
  introductory A025 reference does not transfer A025 specifications.
- ECOVACS: K1 VAC, M1 and separate M1 3D. K1 charging time, cleaning width and
  throughput are omitted because official pages disagree. Mode-specific runtime
  is retained. Original M1 remains evidenced by the comparison and homepage even
  though its former individual URL now resolves to a general product listing.
- KEENON: C25, supported by an official company product post and company news.
  Guessed regional product paths returned 404 and are not evidence. Twenty-four-
  hour self-charging is not twenty-four-hour battery endurance.
- SMP: S5.3, S5.4 and historical Picard S5.2 PTZ IS 2020. The generic S5.2 family
  remains under review; one historical variant does not exhaust all variants.
  S5.3 hardware and performance are not assigned to the S5.4 announcement.
- RAD: ROAMEO. Current manufacturer ratings are not assumed to hold simultaneously;
  SARA licensing, connectivity and human response remain deployment-dependent.

Seven nonrobot decisions: KB 5 and PUDU SH1 use `manual-appliance`, whose audited
status is `reviewed-manual-appliance`. They are complete manually guided devices,
not imported robots or accessories. RAD AVA, ROSA, RIO and RADCAM are non-patrolling
security/sensor hardware; SARA is software. RIO requires physical delivery/placement.
RADCAM's redirect to ROSA is not identity evidence; a dedicated manufacturer
announcement identifies the camera instead.

Three reviewed Fdata family rules increase identity rules to 29. There are 24
nonrobot decisions (16 hardware/components, four software, two services, two manual
appliances) and 43 listing reviews. Strict remaining model/family mentions: 120;
remaining originally unclear listings: 79. Source classifications and every source
identity are preserved. Offline heuristic gaps: 122 candidates and 19 brands,
which is not strict coverage. No new requests to previously blocked BuyAndRent,
Makeblock or uAvionix hosts. The new appliance status has a regression test for
preserving evidence/source identity without claiming robot coverage.


Validation: build 2,582 pages (~367 MB), 185 unit tests and 218 desktop/mobile
browser tests passed. Data audit: zero errors and 419 warnings (410 missing release
years, four missing trusted source URLs, five existing duplicate-image warnings).
Lint, formatting and whitespace checks passed. Repeat import adds zero CSV rows.
The 23 new records match the authoritative data/CSV fields and 21 successful
meaningful primary snapshots; all previous verified product records are unchanged.
Nine generated model pages were checked for titles and manufacturer evidence.
All CSV row widths and the three review-export row counts were verified.
Logs: `scratch/competitor-research/*batch9*`.


## 2026-11-01 — Competitor review batch 10: generations and manufacturer identity

13 named models/configurations added: 1,547 catalog rows, 604 exact manufacturer
spellings and 295 dated manufacturer highlight records (292 task additions and
three existing products). Snapshots: `scratch/competitor-research/primary/batch-10/`.

- Intuitive: Standard, S, Si, Xi, X, SP and 5, all individually named in the
  manufacturer's own annual filing hosted by the SEC. Commercialization years
  are explicit; historic/in-use systems do not imply present new-unit availability.
  Surgeon control is required. Region/version-dependent indications and force
  feedback are not generalized. SEC hosting is not product endorsement.
- MONARCH: current manufacturer announcement identifies the platform and QUEST 3
  software update. The software is not an extra robot. The source Auris Health
  (J&J) attribution is preserved in an explicit current-manufacturer resolution.
- Ocado: Chuck and separately named Chuck+ wide-load configuration. Manufacturer
  FAQ confirms the 2023 acquisition of 6 River Systems. No generic Chuck payload
  or runtime is assigned to Chuck+; people still perform item picking. A legacy
  6river PDF URL returned empty HTML and is rejected as evidence.
- RoboThespian RT4: official customer wiki documents expressive actuation,
  compressed-air/mains requirements and configuration options. Feet stay secured
  to the base even for active legs. No unsupported current new-unit availability
  or third-party .tech-site AI feature claims are imported.
- IAM Swift: company-hosted history documents withdrawal of the fleet; historical
  record only, with no Lumabot/Bolt specifications transferred to Swift.
- TyBOT: horizontal rebar tying on edge form/screed rail. Fuel endurance is not
  battery runtime; throughput, setup speed and all-weather claims are not guarantees.

Six additional identity rules (35 total) resolve Relay/Savioke, Chuck, MONARCH and
three families: da Vinci, RoboThespian and KUKA LBR iiwa. Two identical RoboThespian
source mentions receive the same source identity decision. Seven da Vinci generations
are separate records; generic family matches are not exact hardware identities.

Savioke, Relay Robotics and Relay Delivery Robots are merged with company evidence,
retaining all source names. Competitor company groups: 593; all brand/company
profiles: 1,033 (593 with models, 440 source-only). No source inventory was trimmed.
Strict remaining mentions: 111; unclear listings: 79. Nonrobot decisions: 24;
listing reviews: 43. Offline heuristic gaps remain 122 candidates/19 brands.

Access limits: J&J MedTech, RobotShop CDN, Intuitive investor/mirror and GlobeNewswire
returned HTTP 403 and further calls to those hosts stopped. Intuitive's main product
host had DNS failure. Successful J&J corporate news and the issuer's SEC filing are
independent primary publications, not blocked-page content or circumvention. SAM's
old page is 404; SAM remains under review. No new BuyAndRent, Makeblock or uAvionix
requests. All fetched material is saved with URL, date, status and content hash.


Validation: build 2,594 pages (~369 MB); 185 unit tests, two Python regression tests
and all 218 desktop/mobile browser tests passed. Data audit: zero errors, 425
warnings (416 missing release years, four missing trusted URLs, five existing
image overlaps). Lint, format and whitespace checks passed. Repeat import adds
zero CSV rows. All 13 new records match authoritative data and CSV fields, with
seven meaningful successful primary publications. Prior verified product records
are unchanged. All 13 generated model pages have titles and manufacturer evidence.
Review exports: 593/406/862 records; every original company name retained.
Own browsers, preview server and fetch helpers are stopped; port 4321 is free.
Pre-existing MCP servers and other workspaces were untouched. Logs:
`scratch/competitor-research/*batch10*`.


## 2026-11-01 — Competitor review batch 11: rehabilitation and telepresence

13 models/configurations added: 1,560 catalog rows, 607 exact manufacturer spellings
and 308 dated manufacturer highlight records (305 additions and three existing models).
Snapshots and curation notes: `scratch/competitor-research/primary/batch-11/`.

Fourier Rehab manufacturer literature distributed through MEDICA identifies ArmMotus
EMU/M2, WristMotus, ExoMotus M4, AnkleMotus and MetaMotus Galileo. RehabHub is an
integrated family incorporating robotics, sensors and stimulation, not one physical
robot. PDF text was used; unlabeled image tables were not interpreted. Galileo
integrations remain configuration-specific. No clinical or regulatory guarantees.

A dated iRobot announcement establishes historical Ava 500 identity and 2014 release,
correcting the competitor's Ava Robotics attribution. Awabot expressly names One
as formerly Beam and Pro as formerly BeamPro; the generic BEAM entry resolves as a
family. Remote driving and parking assistance do not imply general autonomous travel.
The Ohmnilabs support article expressly documents Supercam robot serial numbers
PVT 3000+ and their viewing angles, distinct from older Standard configurations.

SAM room autonomy does not imply independent room-to-room travel. Manufacturer
intended-use and nonmedical-device limitations are retained in notes. Akara Violet
and UVD Robot Pharma are named primary-source products; software, sensors and
optional integrations are not extra models. No blanket occupied-room safety,
sterility, clinical benefit, FDA authorization or GMP validation is inferred.

K1 Laser is manufacturer-documented LiDAR hardware, not a mobile robot. Cobalt AI
Handler and Monitoring Intelligence are software. Generic Cobalt AI remains open.
Identity rules: 38 (10 attribution, five alias, 23 family); nonrobot decisions: 25
(17 components, four software, two services, two manual appliances). Listing reviews:
45; unresolved originally unclear listings: 77. Strict remaining model/family
mentions: 103. Every original company name and source listing remains represented.
Profiles: 1,033 total, 596 with models and 437 source-only. Exports: 593/406/862.

Access limits: 403 from Cleanfix Robotics and Awabot Helpcenter; Beatbot product
request limited. Further requests to these hosts stopped. SPA title-only responses,
HTML returned for a PDF URL, and generic redirected pages are not product evidence.
No new BuyAndRent, Makeblock or uAvionix requests. Offline heuristic gaps: 119 model
candidates and 17 brands; these are not exact-coverage counts.


Validation: production build 2,607 pages (~371 MB); 185 unit tests, two Python
regression tests and 218 desktop/mobile browser tests passed. Lint, format and
whitespace checks passed. Data audit: zero errors and 437 warnings (428 missing
years, four missing trusted URLs, five existing image overlaps). Repeat import
adds zero rows. All 13 additions match authoritative records and CSV fields, with
nine successful primary publications. All prior verified products and review
decisions are unchanged. All 13 generated pages have titles, review dates and
primary-source links. Own browsers, preview server and fetch helpers are stopped;
port 4321 is free. Other processes and workspaces were untouched. Logs:
`scratch/competitor-research/*batch11*`.


## 2026-11-01 — Competitor review batch 12: family identity and lifecycle corrections

Ten models added: ABB YuMi IRB 14000/14050; Addverb Dynamo 100/200/500/1000/1500/2500
and FlowT; Bitcraze Crazyflie 2.1 Brushless. Five existing products gain dated
highlights: SPIKE Essential/Prime, MINDSTORMS EV3, NAO 6 and ElliQ 3. Totals: 1,570
catalog models, 608 exact manufacturer spellings and 323 dated highlight records
(315 additions and eight existing models). Profiles: 1,033, with 597 model-bearing
and 436 source-only. Source groups/exports remain 593/406/862.

Dynamo variants are explicitly named; only default-selected Dynamo 100 has clearly
associated numeric ratings in saved text. Numbers in names do not establish payload.
YuMi ratings also appear in labeled body text; unlabeled image tables are not read.
Crazyflie takeoff mass depends on legs/guards, while docks/decks are not extra drones.
No blanket collaborative safety or universal autonomy claim is inferred.

SPIKE direct sales ended June 30, 2026; app support is scheduled through June 30,
2031. Old retail prices are replaced with discontinued status. Prime's incorrect
five-port hub description is corrected to six using the manufacturer's hub PDF.
EV3 manufacturer software documentation supports its MicroPython workflow, not
complete historical MINDSTORMS kit coverage. NAO6 current Maxtronics documentation
requires migration for cloud services after October 1, 2026, while normal offline
operation remains possible; NAO5 is excluded. Historical Aldebaran catalog identity
remains, without a blanket legal-company merger. ElliQ 3 manufacturer launch and
current membership page distinguish hardware identity from leased service fees;
the obsolete approximate monthly price and unsupported two-times-compute claim are
removed. Clinical benefits and universal regulatory approval are not inferred.

Aethon T3/T3XL are intentionally corrected in prior verified records and CSVs:
T3 750 lb / 340 kg; T3XL 1,000 lb / 454 kg. The shared-page headline had incorrectly
been assigned to T3. Model datasheets list nine-hour effective runtime while the
page quotes twelve without conditions; the generic T3 runtime is cleared and the
conflict is documented. TUG source mentions remain unresolved pending direct
identity evidence. All other prior verified records remain unchanged.

Nine new family rules: 47 identity rules total (10 manufacturer, five alias,
32 family). Listing reviews: 46, with 76 originally unclear entries unresolved.
Strict remaining model/family mentions: 94. Twenty-five nonrobot decisions unchanged.
Only seven existing CSV models and 17 fields changed; unrelated row values were
checked against saved before-images and remain unchanged. All original source
names and inventories retained. Offline heuristic gaps: 119 candidates/17 brands.

Access limits: further ABB library, LEGO consumer shop and Dusty support-center
requests stopped after 403. Successfully fetched primary publications are separate
from blocked content. Current NAO6 linked datasheet replaces use of a redirected
legacy PDF. Refraction's unavailable site does not establish current product
availability. No new BuyAndRent, Makeblock or uAvionix requests. Snapshots and
curation scripts: `scratch/competitor-research/primary/batch-12/`.


Validation: 2,617 pages built (~372 MB); 185 unit tests, two Python regression tests
and 218 desktop/mobile browser tests passed. Lint, formatting and whitespace checks
passed. Data audit: zero errors, 447 warnings (438 missing release years, four
missing trusted URLs, five existing image overlaps). Repeat import adds zero rows.
Fifteen added highlight records and two corrected prior records match CSV/primary
data, using 16 successful source publications including a saved Aethon page.
All other prior product records and identity decisions remain unchanged. Seven
existing CSV models/17 fields changed; before-image comparison found no unrelated
row changes. All 17 affected pages have dated sources; rendered corrections for
Aethon, SPIKE, NAO6 and ElliQ were explicitly checked. Own helper/browser/preview
resources are closed, port 4321 is free, and other processes were untouched.
Logs: `scratch/competitor-research/*batch12*`.


## 2026-11-01 — Competitor review batch 13: configuration boundaries and announced models

21 models added: Unitree G1 EDU, H2 EDU, As2 AIR/PRO/X/EDU; ten Rainbow RBC arms
and three RBC-N arms; Realbotix Echo Tabletop/Full Body. Twelve existing products
receive dated primary-source highlights. Totals: 1,591 models and 356 highlight
records (336 additions and twenty existing models). Manufacturer spellings: 608;
profiles: 1,033 (597 with models, 436 source-only); source groups: 593.

Unitree source tables distinguish standard/EDU development access and As2 variant
payload, runtime, ingress protection and equipment. Standard G1 had incorrectly
inherited the EDU joint range; it is corrected to 23, with current explicitly
USD-denominated manufacturer price excluding tax/shipping. Optional hands/compute,
stationary loads, wheel-leg variants and developing demos are not generalized.
Go2/B2/A2 identity highlights do not comprehensively reverify legacy numeric fields.

Rainbow model-card values, not model-name numbers, identify ten standard and three
food-industry arms. RB5-850 imperial conversion is inconsistent and omitted.
Model-specific RBQ-10 page separates optional LiDAR/LTE/inspection/charging equipment;
weight, payload and conditional runtime are corrected. No blanket food-contact,
application safety or historical family completeness is inferred.

Realbotix manufacturer-authored June 30, 2025 management report explicitly names
B/M/F robotic models. It is a SEDAR filing mirrored by a filing host, not host
endorsement. Old prices and 404 URLs are removed; current new-unit availability
is unverified. Seventeen facial actuation points are not automatically seventeen
verified degrees of freedom. Unverified .tech ownership is not used as evidence.
Current manufacturer October 26, 2026 Echo announcement documents two hardware
platforms and planned H2 2027 deliveries. The four personalities are not extra robot
models; the deposit is not a full purchase price. Monthly app subscription and
optional Vinci equipment remain separate. Currency is not inferred from a dollar
symbol. No walking, clinical benefit, universally local-only processing or confirmed
2027 shipment is implied. Release year records announcement, not delivery.

PUDU primary storefront/variant data separately name D5 and D5-W. Agile ONE launch
release establishes named identity without proving present stock or every legacy
numeric field. temi V3 manufacturer page establishes generation, tray differences
and twelve-kilogram mass. Old approximate price is removed and the home-assistant
tag restores its appropriate subcategory; older generic temi hardware is not merged.

Identity rules: 59 (10 attribution, six alias, 43 family). Strict remaining source
mentions: 80; originally unclear listings still unresolved: 76. Prior verified
records/decisions unchanged, with all original company names and inventories kept.
Six older CSV models have 29 targeted field changes; before-images verify unrelated
row values are unchanged. Offline heuristic gaps: 117 candidates/17 brands.

Access limits: Realbotix shop returned 429, with further calls stopped. Rainbow
empty HTTP 500 and HTML returned for a download are not product evidence. PUDU
legacy app shells/navigation/forms do not establish KettyBot or HolaBot identity,
including after controlled rendering. Own render browser closed in a finally block.
No new BuyAndRent, Makeblock or uAvionix requests. Snapshots/scripts:
`scratch/competitor-research/primary/batch-13/`.

Batch-13 validation: 185 unit tests, 218 browser tests and five Python tests passed
(including both collector regressions). Production build generated 2,638 pages,
about 375 MB. Data audit: zero errors, 466 warnings. Evidence/CSV/rendered-page
checks passed; 33 dated highlight pages checked. Reimport: 356 highlight records,
zero additions. No commit, push or deployment. Remaining inventory work is open.


### Manufacturer review batch 14 — 2026-11-01

Catalog: 1,602 models; 369 dated highlight records (347 task additions, 22 existing
models). Eleven new models: Ozobot Ari, ULC AUSMOS, Yu 5 Industrial, CAPRA200/500,
RA660 Navi M Pure/Connect, myCobot 320 Pi, HaiClimber, K50 and HaiPick A42T-E2.
Two existing models receive highlights: myCobot 320 M5 and Avidbots Neo 2. Their
three targeted CSV field corrections remove the unverified M5 price and correct
both website URLs; unrelated old row values are preserved.

Source limits: Ari grades are not converted to assumed ages. AUSMOS mass excludes
batteries; operator setup remains required. Yu payload/radius values are paired.
CAPRA product numbers are not assumed payloads. Cleanfix app/remote access is
Connect only; battery/fast-charge footnotes remain optional. Mother-company
archived PDF, independently linked from its product page, supplies Cleanfix
specifications after the robotics website returned HTTP 403; no retries there.
M5/Pi controllers stay distinct and conflicting myCobot repeatability/copy remains
unused. K50 is supplementary within a HaiPick system. A42T-E2 model-specific 30 kg
rating is not upgraded to the broader system-page 50 kg. Neo 2 is not Neo 2W;
optional disinfection hardware is not generalized.

Four HaiPick Climb/System 1/2/3 entries are integrated robotic systems, separately
classified as reviewed-robotic-system without individual robot coverage. Named
constituent robot models have their own evidence. Five new identity rules resolve
families: 64 total rules, 67 strict source mentions remaining, 76 unclear listings
remaining. All original companies/inventories/previous reviews retained. Offline
heuristic gaps: 113 candidates / 16 brands. Batch snapshots and checks are under
`scratch/competitor-research/primary/batch-14/`.

Batch-14 validation: 186 unit tests passed. Production build: 2,649 pages, about
376 MB. Data audit: zero errors, 477 warnings. Thirteen affected rendered product
pages passed source-date, trim/controller, conditional-rating and equipment checks.
CSV/evidence/identity checks passed; prior reviews and unrelated old rows unchanged.

Batch 14: all 218 browser tests passed; test browsers and preview server exited.


### Manufacturer review batch 15 — 2026-11-01

Catalog: 1,608 models; 376 dated manufacturer highlights (353 task additions,
23 existing models). Six additions: Robot.com R-cargo/R-noid/R-dog, Robotnik
RB-WATCHER/XL and historical Percepto Air Max OGI. KEENON XMAN-R1 gains dated
highlights and three CSV corrections removing its unverified approximate DOF and
updating its website/description; other old row values remain unchanged.

R-dog is a concept/waitlist offer, not generally available stock. R-noid is a
site-dependent RaaS platform: payload is per arm and articulated DOF groups are
not miscounted as base joints. R-cargo numeric payload/speed remain blank because
text headings do not supply numbers. The commercial quadruped filter now includes
commercial tags instead of forcing unsupported industrial/research labels.
WATCHER and XL use separate current runtime/speed/IP cards; older conflicting PDF
values stay unused. Air Max OGI is documented by an April-2022 primary PDF; its
10.7 kg drone mass is separate from the base. Redirects to Ranger do not establish
identical hardware. XMAN-R1 introduction is dated April 2, 2025; contact-form-only
F1/L1 responses are not treated as feature evidence.

Six new identity rules: 70 total (10 attribution, 11 aliases, 49 families).
RB-WATERCHER spelling correction is explicitly an editorial inference, with original
source name preserved. Remaining strict source mentions: 61; unclear listings: 76.
All prior verified records/reviews and original company names are preserved.
Kawasaki product-host 403 respected; general news listing is not a product source.
No further BuyAndRent/Makeblock/uAvionix or blocked Hypershell/Beatbot requests.
Snapshots and scripts: scratch/competitor-research/primary/batch-15/.

Validation: 186 unit tests passed; production build generated 2,655 pages (about
377 MB). Data audit: zero errors, 482 warnings. Lint/format/diff checks passed.
Seven rendered product pages and evidence/CSV/identity checks passed. No commit,
push or deployment, and market leadership has not been measured.

Batch-15 audit warnings: 473 undocumented release years, four older rows lacking a
trustworthy product URL, five shared local-image notices. No invented dates/URLs.
Repeated import: 376 highlight records, zero additions. Both collector regression
tests and fifteen targeted inventory/resolution/classification checks passed.

All 218 batch-15 browser tests passed. Own project browsers, preview server and
research/build/test helpers have exited. Process inspection confirmed no own
leftovers; two environment-managed MCP processes were preserved.

### Manufacturer review batch 16 — 2026-11-01

Seven additions: Cyngn DriveMod Tugger, Running Brains GR100/GR200, SuperDroid
Gopher/Bulldog and LocoRobo LocoScout/LocoHex. Catalog: 1,615 models, 614 exact
manufacturer names, 383 dated highlights (360 task additions, 23 existing models).
All 1,033 company/brand profiles retained: 603 with models, 430 source-only.

DriveMod towing and deck loads stay separate; no certification or deployment
promise inferred. GR200 was presented in 2025 with rental planned for 2027,
not current stock. Gopher robot mass differs from shipping mass. Bulldog is one
platform with distinct Lite/standard/Pro equipment/runtime/control packages;
no universal runtime or conflicting flipper configuration imported. LocoRobo
school grades do not establish ages; educational simulations are not field rescue.

Sixteen unclear-listing reviews add seven model resolutions, two Awabot family
resolutions to existing One/Pro, one Richtech data service, five components
(ROEQ, WUJI and PaXini) and one integrated inVia PickerWall system. New review
kind robotic_system preserves original unclear classification and cannot claim
individual robot catalog coverage. Eleven event/integration offers are separately
classified as services: four Bots-4-Events, six DMA Events and Optimus Robotics.
Provider KAI/TAI hardware attributions are retained without inventing new OEM models.
No exact WUJI/PaXini revision is inferred from generic reseller titles.

62 listing reviews now leave 60 open; 40 model classifications and the unchanged
70 identity rules leave 50 strict source model/family mentions. Every original
company name and all 593/406/862 company/model/listing export rows are retained.
All prior verified products, classifications and listing reviews are unchanged.
Offline heuristic gap report remains 113 model / 15 brand candidates.

Validation: 187 unit tests including a new system/classification regression;
two Python collector tests; lint/format/diff checks passed. Build: 2,662 pages,
378 MB. Data audit: zero errors, 489 warnings (480 unknown release years,
four older missing URLs, five shared-image notices). Seven rendered pages,
all primary evidence, 27 review decisions, CSV schemas and exports checked.
Repeated import reports 383 highlights and zero additions. Evidence/check scripts:
scratch/competitor-research/primary/batch-16/. No commit, push or deployment.

Batch 16: all 218 browser tests passed. Own test browsers, preview server and
research/build/test helpers exited. Port 4321 is free; project helper process
check found no leftovers. Other-task and environment resources preserved.

### Manufacturer review batch 17 — 2026-11-01

Nine additions: Enactic OpenArm 2.0, Robot.com R-kiwi, Badger Digital Teammate,
historical MiR100, PUDU KettyBot/HolaBot, Greenfield BOTONY, DEEP LYNX M20 Pro
and Rapid Robotics 3PRO. Four existing models enriched: LYNX M20, Lynx S10,
X30 Pro and Buddy Pro+. Catalog: 1,624 models, 619 manufacturer spellings,
396 dated highlights (369 task additions, 27 existing models). Profiles: 1,033,
including 607 with models and 426 source-only. Manufacturer May 8, 2025 release
supports Kiwibot / Robot.com grouping: 592 groups, all source names retained.

OpenArm payload includes end-effector mass and defined nominal/peak test periods.
M20 and Pro share explicit brochure ratings; laboratory 5 m/s is not working speed.
Existing M20 corrected to 33 kg, IP66 and 2 m/s with load-specific runtime. S10
SDK proves platform/developer workflows, not 120 kg payload or prior numerical
ratings; unsupported mass, runtime, DOF, speed, IP and year cleared. X30 Pro
uses model-specific manufacturer data; unsupported price/year removed, conflicting
dimensions not imported. Buddy quotation template is dated March 2025 with a
one-month term and EU ex-tax limits; not treated as a current all-inclusive offer.
Unsupported old runtime/speed/age/year removed. Existing row IDs/images retained.

PUDU Academy pages supply base KettyBot and HolaBot features and link official
manuals. Runtime is no-load; HolaBot tray load falls from 15 kg on flat floors
to 10 kg at a 5 mm threshold. MiR100 primary document is manufacturer-authored
May-2016 datasheet hosted by RG Group, not current availability evidence.
Greenfield details are issuer-authored September-2026 SEC-hosted product disclosure,
not regulator performance endorsement. 3PRO evidence is an explicitly attributed
manufacturer CEO statement published in PickNik's integration case study; source
name discloses the host and author. Partner hardware descriptions are separate,
and present commercial availability is unproven. No blocked-host bypasses/retries.

Ten identity rules: 80 total (15 aliases, 10 attribution, 55 families). Eleven
listing reviews: OpenArm family, BOTONY/3PRO models, six MULE powered hand-guided
lifting/application offers, two Swisslog integrated systems. New manual_appliance
review kind preserves source classification and cannot claim robot model coverage.
Generic application-title classification is identified as editorial inference.
73 listings reviewed, 49 open; 38 strict model/family mentions open. Prior 40 model
classifications unchanged. All 592/406/862 export rows and original company names
retained. Offline heuristic report: 110 model / 14 brand candidates.

189 unit tests including new manual-appliance and rebrand regressions; two Python
collector tests; lint/format/diff checks passed. Build: 2,671 pages, 379 MB.
Data audit: zero errors, 501 warnings (492 unknown release years, four older
missing URLs, five shared-image notices). Thirteen rendered pages and all 21 new
review decisions checked against saved primary evidence. CSV schemas/exports,
prior reviews and unaffected fields of edited CSVs verified. Reimport: 396 dated
highlight records, zero additions. Evidence and checks under
scratch/competitor-research/primary/batch-17/. No commit, push or deployment.

Browser validation: 216 initial passes; two stale MiR count expectations after
MiR100 import replaced by concrete MiR100/MiR250 presence with ER-MAX exclusion.
Both affected desktop/mobile tests passed on rerun.


## 2026-11-01 competitor batch 18

Four distinct GreyOrange Ranger intralogistics variants imported: Uplift-L,
Forklift Elevate, Forklift AnyPallet and Forklift XXL. Variant-specific metric
payload/dimensions and loaded/unloaded speeds retained; no OEM fabrication,
ROI, throughput or universal pallet-compatibility inference. Existing GreyOrange
source profile regenerated to include all four catalog manufacturers/models.

Three existing models enriched: iRobot Roomba Max 875 Combo, Blue Ocean Robotics
UVD Robot Model C, Gausium Scrubber 50 Pro. iRobot US launch MSRP explicitly dated
September 2, 2026; no live retail price assumed. UVD manufacturer history proves
Model C/2020; current generic range functions are qualified, without transferring
Pharma audit-trail functions or clinical/biocidal guarantees. Scrubber 50 Pro
uses Gausium and SoftBank evidence with developer/solution-provider roles separated.
Unsupported old price, mass, dimensions, runtime, charge duration, speed and year
cleared; optional water/charging stations not bundled by default. All unrelated
fields and existing IDs/images preserved, including originally blank images.

Catalog: 1,628 models, 620 exact manufacturer spellings, 403 dated highlight
records (373 additions/30 existing-model enrichments). 1,033 brand/company profiles,
608 with models and 425 source-only. All 339/412 source company entries/names
retained in 592 groups. All 592/406/862 CSV review exports retained.

Three family mappings: Roomba/Max875, UVD/ModelC+Pharma, S5.2/Picard. 83 total
identity rules: 15 aliases/10 attribution/58 families. Fourteen listing reviews:
two GreyOrange families, six generic product ranges, three integrated EVST weld
stations, Formic service, Sereact software, SoftBank model attribution. New
`generic_product_family` kind has no catalog targets and cannot claim model
coverage; regression test enforces this. 87 unclear listings reviewed, 35 open;
35 strict model/family mentions open. Prior 40 model classifications unchanged.

190 unit tests and two Python collector tests passed. Lint/format/diff checks
passed. Build: 2,675 pages, 380 MB. Audit: zero errors, 506 warnings (497 unknown
years, four older missing URLs, five shared-image notices). Seven rendered model
pages and the GreyOrange profile verified against saved primary evidence; 17 new
review decisions, CSV schemas, prior decisions and unaffected fields checked.
Reimport: 403 highlights, zero additions. Offline heuristic: 110 models/14 brands.
Artifacts: scratch/competitor-research/primary/batch-18/. No commit/push/deployment.

All 218 desktop/mobile browser tests passed. Own test browsers/preview exited;
port 4321 closed, no own research/test helpers remain. Other tasks and environment
resources preserved. Resource check saved in batch-18/resource-check.json.

## 2026-11-01 competitor batch 19

Seven additions: Refraction AI REV-1, Sarcos Guardian XO, Percepto Air Max,
SROD S100C MINI, T200, D600D and D800F. Existing Fourier GR-2 enriched and
explicitly linked to the GRx family. Historical REV-1 pilot dated June 14, 2021;
no current availability inferred. Company-authored Sarcos/Palladyne annual reports
separate XO development intentions from commercial hardware and record suspension
of commercialization on November 14, 2023. SEC hosting is not technical endorsement.
Percepto datasheet revision 4/2022 separates Air Max from Mobile, OGI and the base.
No present Ranger identity inferred. SROD body masses remain separate from power
stations/winches; optional explosion-proof equipment is not assumed standard.

Catalog: 1,635 models, 623 exact manufacturer spellings, 411 dated highlights
(380 additions/31 existing-model enrichments), 1,033 brand/company profiles
(611 with models/422 source-only). All 339/412 source company entries/names
retained in 592 groups; 592/406/862 review export rows retained.

Two identity rules: GRx/GR-2 and Percepto AirMax/Air Max. 85 total rules
(16 aliases/10 attribution/59 families). Two classifications: Casia G ground
surveillance component, FlightLine uAvionix data service documented by joint
provider announcement. 42 total model classifications. Eleven listing reviews:
four GrabaRobot directory categories plus Geek+ RS as generic product ranges,
four SROD ranges linked to documented variants, manually positioned drainage
endoscope equipment, performer-operated Showbots entertainment service.
98 listings reviewed/24 open; 29 strict source model/family mentions remain open.

190 unit tests, two Python collector tests, 46 targeted desktop/mobile catalog
and brand browser tests, lint and format checks passed. Build: 2,682 pages,
381 MB. Data audit: zero errors, 513 warnings (504 undocumented years, four older
missing URLs, five shared-image notices). Eight rendered model pages, 15 new
decisions, schemas, exports, prior decisions and unaffected CSV fields verified
against saved primary sources. Reimport: 411 highlights, zero additions.
Offline heuristic unchanged at 110 models/14 brands. Artifacts under
scratch/competitor-research/primary/batch-19/. No commit, push or deployment.

Agibot store returned 429; Businesswire, Sarcos investor-file host and a
Regulations.gov attachment returned 403. Further host requests stopped; no retry
of previously blocked hosts. Manufacturer-authored SEC filings were accessible.

Own test browsers and preview processes exited; port 4321 closed. No own
research/test helpers remain. Other tasks and environment resources preserved.
Resource check: batch-19/resource-check.json. Targeted JSON formatting and diff
checks also passed.

## 2026-11-01 competitor batch 20

Twelve additions: Daifuku SOTR-M; Hypershell X Ultra S, X Max S, X Pro S,
Halo and X Go; Beatbot iSkim; Lucid Gravity Robotaxi; QIHAN Sanbot Nano and
Elf; LocoRobo LocoDrone and LocoDrone X. Existing Beatbot AquaSense X enriched,
unsupported size removed, old price replaced by dated April manufacturer MSRP.

Hypershell S variants retain separate motor/battery/mode ratings. Assisted pace
is not autonomous robot speed. Halo preorder and planned November deliveries are
not confirmed shipments; stated mass is not assumed battery-inclusive. X Go has
explicit manufacturer lineup identity but no verified variant-specific technical
ratings. No transfer of Ultra S specifications or physiological benefit claims.
AstroRinse station classified as component, separately from AquaSense X robot.
iSkim is distinct from iSkim Ultra; solar continuity depends on lighting/maintenance.
AquaSense X sale/presale wording conflicts internally, so no present stock inferred.

Nuro primary partner page explicitly names Lucid as vehicle builder and Uber as
operator. Gravity Robotaxi remains production-intent/testing, not verified local
public service. Nuro and Lucid profiles remain separate. RST mounts classified as
instrument components after manufacturer ASTRO page explicitly names the variants.

QIHAN release dated August 31, 2017, syndicated by Business Wire and hosted by NTB,
explicitly distinguishes Nano from Elf. Nano height/price/Alexa are not transferred
to Elf; inherited SDK, App Store and charging features are explicit. No 2026 cloud,
app or security support asserted. Sanbot brand profile now maps QIHAN manufacturer;
regression verifies this grouping while keeping Lucid/Nuro separate. LocoRobo
provider lineup names both drone platforms; hardware/curriculum ecosystem context
is qualified and exact airframe/bundle/flight ratings remain unknown.

New subcategories: outdoor exoskeletons, educational drones, passenger mobility.
English/German labels, English fallback in other UI languages as for other new
catalog labels. Three shared-URL browser scenarios cover catalog discovery and
navigation to sourced model pages on desktop/mobile.

Catalog: 1,647 models, 627 exact manufacturer spellings, 424 dated highlights
(392 additions/32 existing-model enrichments). 1,034 brand/company profiles,
615 with models/419 source-only. All 339/412 source names and 592/406/862 review
export rows preserved. 91 identity rules (21 aliases/11 attribution/59 families),
44 classifications. Eight new listing reviews: six named platforms, Daifuku AGV
generic range, Cobalt AI monitoring service. 106 listings reviewed/16 open;
20 strict source model/family mentions remain open. Offline heuristic: 103/12.

Lucid investor host returned 403; no further requests there. Nuro independently
provides the first-party vehicle/partner evidence. Old Rainbow host TLS failed;
new manufacturer catalogue worked. Previously blocked hosts were not retried.
Research snapshots and checks: scratch/competitor-research/primary/batch-20/.

191 unit tests, two Python collector regressions and all 224 desktop/mobile
browser tests passed. New alias-role regression and six browser scenarios cover
all three new subcategories and navigation to sourced model pages. Lint, format
and diff checks passed. Production build: 2,695 pages, 393 MB. Data audit: zero
errors, 519 warnings (510 undocumented years, four older missing URLs, five
shared-image notices). Thirteen rendered model pages, three brand pages, sixteen
new review decisions, schemas, exports, prior decisions and unaffected CSV fields
verified against saved evidence. Reimport: 424 highlights, zero additions.

Own test browsers and preview processes exited; port 4321 closed. No own
research/test helpers remain; other tasks/environment resources preserved.
Resource check: batch-20/resource-check.json. Local changes only; no commit,
push, deployment or independently established search-rank claim.

## 2026-11-01 competitor batch 21

Six additions: Makeblock mBot Ranger and mBot2 Rover Robotics Kit; Geek+ P800R
V6.0, P800R and P1200R; Construction Robotics SAM100. Existing mBot Neo and
mBot Ultimate 2.0 receive dated highlights. Unsupported old price/runtime/charging
values and Neo mass removed or replaced; unsupported Mega2560 claim removed.
Images and other pre-existing CSV fields remain preserved. Manufacturer mBot2
page links Neo documentation/examples; same base-platform alias resolved without
duplicating Neo. Ultimate is a family resolution only. Classroom Pack is a
six-robot educational bundle, separately classified; Rover full kit is distinct
from the add-on. No new age limits inferred for Ranger or Rover.

Geek+ July 2022 historical brochure used. PDF span coordinates confirm distinct
columns: P800R V6.0 (800 kg payload), P800R (1000 kg), P1200R (1200 kg).
No ratings copied between variants or merged table cells. Restricted 2021 partner
proposal is not used for published content. P800/P1200 remain family mappings.

SAM100 uses the University of Nevada, Reno construction-owner deployment report
from August 22, 2018. Manufacturer and deployment-owner source roles are now
explicitly supported and labeled separately on product pages. Unknown/secondary
source types and missing dates do not satisfy primary-evidence validation. No
current availability or comparative productivity inferred from this old deployment.

Catalog: 1653 models, 629 exact manufacturer spellings, 432 dated highlight records
(398 additions, 34 existing-model enrichments). 1034 profiles, 617 with models and
417 source-only. 96 identity rules (22 aliases, 11 attribution, 63 families),
45 classifications (20 components, four software, 14 services, two manual devices,
five systems). All RoboticsDir model mentions accounted for with explicit status;
12 strict BuyAndRent model/family mentions and 16 unclear listings remain open.
106 listing reviews unchanged. Offline heuristic queue: 101 candidates, 11 brands.
All 339/412 source names and 592/406/862 review-export row counts preserved.

Coding & Robotics filter makes programmable educational robots discoverable
without inventing age limits. English/German labels, English fallback elsewhere.
Support.makeblock and device.report returned 403; no further requests there.
Previously blocked hosts were not retried. Failed DNS hosts were not retried.
Manufacturer-authored public manuals/brochures and saved successful snapshots used.

194 unit tests, five Python collector tests, lint, source formatting, targeted JSON
formatting and diff checks passed. Final sequential production build: 2701 pages,
396 MB. Data audit: zero errors, 525 warnings (516 undocumented years, four older
missing URLs, five shared-image notices). Eight rendered model pages, payload
table coordinates, source roles, five new identity rules and one bundle decision
checked against saved evidence. Previous decisions, unrelated CSV rows/fields
and export schemas/counts preserved. Reimport: 432 records, zero additions.
Evidence and logs: scratch/competitor-research/primary/batch-21/.

All 228 desktop/mobile browser tests passed. New cases cover coding-filter
discovery without assumed ages, deployment-owner source labels, and P800R variant
payload separation. Two brand pages now have indexable model content and all four
new robot links. Own test process tree (35 processes) exited; port 4321 closed; no
own research helpers remain. Other-task browsers/processes preserved.
Resource evidence: batch-21/resource-check.json. Local changes only; no commit,
push, deployment or independently measured market/search leadership.

## 2026-11-01 competitor batch 22

Eight named catalog configurations added: AGIBOT D1 Ultra-W/G2 Air, Rainbow
Robotics FX-2, Kawasaki YF002N/YF003N and Macco Kime Bartender/Chef/Kiosk.
Kärcher RCV 3/RCV 5 enriched. 1661 models, 630 exact manufacturer spellings,
442 dated highlights (406 additions/36 existing). 1034 profiles: 618 with models,
416 source-only. 97 identity rules (22 aliases/11 attribution/64 families),
50 classifications (23 components/four software/14 services/two manual/five
systems/one named unit/one generic family). 112 listings reviewed, ten open.
Three unresolved model mentions: Kawasaki A700/Kx and Parrot CHUCK DV7.
All 339/412 source names and 592/406/862 export rows preserved. Offline heuristic:
98 candidates/11 brands, not a measure of true missing models.

AGIBOT model-specific Ultra-W sheets support 22 kg including battery, 16 DOF,
5 kg effective payload and 10–90% charging in about one hour. Ultra/Max/MaxPro
ratings not transferred. G2 Air April 17, 2026 announcement explicitly identifies
single-arm assisted operations; full autonomy is an upgrade path, not verified
current behavior. ≥1.5 m/s is not imported as maximum speed.

KAIST developer report and government event report corroborate FX-2 rideable
2017 demonstration and Rainbow/KAIST joint development. Source labeled Developer
source. Larraioz/Kawasaki Iberian hub portfolio labeled Integration partner source;
YF payload columns verified by PDF span coordinates. No merged cycle-time,
certification or mass assertions imported. New role labels and classification
statuses have regressions; named units/generic families cannot claim catalog IDs.

Kawasaki Clean Robot is a generic NS/NX/NT cleanroom range, with unverified source
floor-cleaning description excluded. Saymo is a named robot/TV character; no new
hardware SKU or assumed Gen3 identity. uAvionix manufacturer-authored manuals
hosted at Manuals.plus distinguish pingStation 3 ADS-B receiver, wearable skyAlert,
and Trakr UAS tracking device from the TrakrStation receiver/relay. These are
components, not three standalone robots. Blocked manufacturer host not retried.

Macco public page rendered with an owned Chromium instance after static HTML
returned an app shell. All three named offers appear in Our Robots. Complete
branded hospitality configurations recorded; component arms/revisions/bundles
remain unknown. Conditional monthly financing amounts, certification scope,
throughput, savings, uptime and hygiene guarantees not imported. Browser closed
in finally after snapshot capture; inspection exited successfully.

Kärcher US sheets/comparison support 120-minute operating time for both models.
RCV 3 old charging-field runtime cleared; RCV 5 old 150-minute value replaced.
Unverified old price, mass and nonnumeric size cleared. Camera/dual laser/carpet
features restricted to RCV 5. US regional context retained; no charge duration
inferred. Generic vacuum title remains a range review, not an exact model.

360 Bright Media Dog Robot classified as event rental/engagement service without
inventing chassis/manufacturer. DealMaker Miso Robotics is a fundraising-client
listing, not DealMaker robot hardware. Omni remains unresolved. TGW/Pilz Go2/NEO
raw descriptions do not establish a reliable hardware identity; no name-only
correction to Unitree or 1X. Original classifications, names and descriptions
retained. New UST 403 respected; other previously blocked hosts not retried.

196 unit tests in 15 files, five Python collector tests, lint, source/test/JSON
formatting and diff checks passed. Final build 2709 pages, 397 MB. Data audit:
zero errors, 531 warnings (522 undocumented years/four older missing URLs/five
shared-image notices). Ten rendered model pages, three brand pages, one identity
rule, five classifications and six listing reviews checked against saved sources.
Old CSV rows, images, unrelated fields and prior decisions preserved. Reimport:
442 records, zero additions. Evidence: scratch/competitor-research/primary/batch-22/.

All 236 final desktop/mobile browser tests passed, including new source-role,
variant payload, wheel-leg, charging/endurance and three-offer Macco scenarios.
Own initial/final test process trees (69 processes) all exited; port 4321 closed.
No own fetch or Macco browser helper remains; Macco browser close awaited in finally.
Other-task browsers/processes preserved. Resource evidence: batch-22/resource-check.json.
Local changes only: no commit, push, deployment or measured market/search leadership.


## 2026-11-01 competitor batch 23

48 existing catalog models received dated primary-source product highlights.
490 highlight records now cover 406 task additions and 84 existing models; catalog
size remains 1661. Only the listed highlights were reviewed: existing specification
tables, historical prices, release years, images and manufacturer attributions are
not certified by this pass. Current and historical generations are distinguished;
optional hardware/EDU support and unreleased features remain explicitly qualified.

The audit now counts highlight evidence separately from model identity coverage:
421 catalog models matched to named competitor mentions, 392 with dated highlights,
29 without. All missing IDs are retained in coverage.json. The model export adds
primary highlights, sources, dates and complete/partial/missing/unmapped statuses,
while preserving directory themes and identity/classification evidence. 406 model
review rows, 592 company rows and 862 listing rows retained. Remaining source
identity work: three model mentions and ten unclear listings, unchanged.

Double 3 and GreetingBot Mini/Nova moved from smarthome to commercial, retaining
stable IDs and all other CSV fields. New reception filter complements telepresence;
English/German labels with the existing English fallback for other languages.
48 rendered model pages and all 406 model-review rows checked against snapshots.
Original products and CSV fields preserved. 197 unit tests, five Python tests,
lint, formatting and diff checks passed. Build: 2709 pages, about 403 MB. Data audit:
zero errors, 531 known warnings. Reimport: 490 records, zero new models.
Evidence: scratch/competitor-research/primary/batch-23/.

All 238 desktop/mobile browser tests passed. All 304 tracked own test processes
exited; port 4321 closed, no own research/browser helpers remain. Research browser
closed in finally. Other-task resources preserved. Resource evidence:
batch-23/resource-check.json. Changes remain local; no commit, push or deployment.


## 2026-11-01 competitor batch 24

28 additional existing catalog models receive dated primary-source highlights.
Totals: 1661 catalog models, 629 exact manufacturer spellings, 1034 brand/company
profiles, 518 highlight records (406 task additions / 112 existing-model enrichments).
Of 421 catalog models matched to named competitor mentions, 420 have dated highlights
and DR01 remains without one. Three strict identity/family mentions and ten unclear
listings remain unresolved. Export rows remain 592 companies / 406 model mentions /
862 listings; every source company name is retained.

Manufacturer documents distinguish D7/D9, Standard/Lifting T150, MarsCat/MetaCat,
Pepper software generations, ANYmal C assets and historical Anki SDK examples.
K7 roadmap status and Pudu promotional-feature limitations are explicit.
The April 2026 Tesla disclosure is dated development context, not a claim to latest
production status. Makeblock's independently hosted manufacturer catalog establishes
original mBot/Arduino learning support without transferring mBot2 hardware or Python.

Ameca manufacturer corrected to Engineered Arts. Four CSV cells change: manufacturer,
price, batteryLife and tags. Source describes mains power; old prototype/not-for-sale
and battery statements were unsupported. Other CSV fields and all existing product
evidence records are preserved. The old model URL redirects to the canonical URL;
saved favorites and comparison IDs migrate with deduplication. Sitemap checked.
The remaining specification tables are not certified by highlight-only reviews.

Sources and before-images: scratch/competitor-research/primary/batch-24/.
DEEP Robotics pages returned HTTP 520; the Makeblock CDN returned HTTP 526.
Previously blocked hosts were not retried. No research browser opened this batch.

Validation: 200 unit tests / 5 Python tests / 240 desktop+mobile browser tests passed
(445 total). Lint, source formatting, targeted JSON/test formatting and diff checks
passed. Build: 2709 pages plus legacy Ameca redirect. Data audit: zero errors, 531
known warnings. All 28 rendered model pages and 406 model-review rows checked.
Reimport: 518 evidence records, zero additions. All 307 tracked test processes exited;
port 4321 closed; no own research/browser helpers remain. Other task resources preserved.
Evidence: batch-24/evidence-check.json and batch-24/resource-check.json.
Changes remain local; no commit, push or deployment.


## 2026-11-01 competitor batch 25

DR01 gains dated highlight evidence from a public DEEP Robotics outdoor-test post.
Its linked public author profile lists deeprobotics.cn. Historical demonstration
only: no hardware values, current availability, certified durability or universal
terrain capability inferred. All 421 catalog models matched to named competitor
mentions now have dated highlights. Totals: 519 highlight records (406 additions,
113 existing models); 1661 catalog models, 629 manufacturer spellings, 1034 profiles.
Three strict model/family mentions and ten unclear listings remain unresolved.

New selected-field review dataset: 12 models / 66 fields, with 45 documented,
17 not documented, two conflicting and two roadmap fields. It is not whole-model
certification. 65 CSV cells change; before-images retain all former claims. D7/D9
mass and payload conditions, RB-Y1 A/M variants and conflicting joint counts,
Kangaroo configurations, T1 endurance/charging, Ameca generations/mains power,
Go2-W limits and K7 development status are explicit. Unsupported selected numeric
claims are removed rather than legitimized by a feature-only source.

maxRuntime continues to mean maximum operating endurance. New chargingTime is a
separate column in all CSVs (23 common / 26 commercial columns). Three charge values
previously stored under runtime migrate to chargingTime in catalog and import rows:
iSkim, mBot Neo, D1 Ultra-W. T1 charging comes from the manufacturer manual. This
corrects misleading assumptions in earlier review notes about the legacy field;
other runtime values are not globally reinterpreted as charging.

Selected table fields display source reviews and dates, with unmarked-field scope.
A validation module rejects stale field/source mappings. Model export adds selected
values, states, URLs and dates. Comparison and JSON-LD show charging separately.
Prices no longer imply unverified in-stock availability. Duration filters require
actual time units; 100–250 V AC is not parsed as 100 hours.

Manufacturer main DR01 pages still return HTTP 520. No blocked host was retried;
public LinkedIn post/profile returned HTTP 200. No research browser opened.
Evidence: scratch/competitor-research/primary/batch-25/.

Validation: 212 unit tests and five Python tests passed. Full browser run: 243 passed,
one page crash before the favorites test. That exact case passed with one worker
on --last-failed; all 244 distinct browser cases passed across the full run and retry.
An earlier test run was deliberately interrupted during correction of the standalone
JSON-LD verification helper; its own resource trace is retained.
Build: 2709 pages. Data audit: zero errors, 532 known warnings (one extra unknown K7
release year). Lint, formatting and diff checks passed. Twelve rendered pages, all
406 model-review rows and all 65 CSV changes checked; all other original cells and
existing highlights preserved. All robot HTML checked for removed InStock claims.
Reimport: 519 records, zero additions. All 405 tracked own test processes exited, including
initial run and retry; port 4321 closed, no own helpers remain. Other tasks preserved.
Changes remain local, without commit/push/deployment.


## 2026-11-02 — Competitor batch 26: company themes, financing reference and TGW systems

Company profiles and brand search now use the stored directory positioning and
controlled feature themes, retaining source links and snapshot dates. A shared
exact-name/explicit-alias helper also supplies the company export; websites and
fuzzy names cannot join companies. Themes appear on 553 of 1,034 profiles and
remain explicitly unverified directory claims, including reseller/client content.

Separate company-authored focus reviews for DealMaker and TGW Logistics live in
`data/competitors/company-evidence.json`; source roles, dates and scope also appear
in five new company-review CSV columns. The DealMaker client page explicitly
identifies Omni and describes VR treadmills. The Omni listing is classified as a
financing-client service reference, without creating a DealMaker robot or verifying
investment claims. Listing reviews: 113 resolved / nine open; original entryTypes
and all 122 originally unclear source records are preserved.

Three named TGW systems are added from the TGW product page and a public,
company-authored platform article: PickCenter RovoFlex, InductCenter RovoFlex and
DecantCenter RovoFlex. They retain separate picking, singulation and decanting
functions. Unsupported prices, dimensions, release years and runtime are blank or
undisclosed. This does not validate TGW Go2/NEO, Pilz Go2/NEO or related ambiguous
source attributions. The three strict unresolved mentions remain Kawasaki A700,
Kawasaki Kx and Parrot CHUCK DV7.

Totals: 1,664 catalog models, 630 exact manufacturer spellings, 1,034 profiles
(619 with models / 415 source-only), 522 dated highlights (409 task additions /
113 existing models). All 421 catalog models linked to named competitor mentions
retain dated highlights; 12 specification reviews still cover only 66 selected
fields. All 339/412 source entries/company names and 592/406/862 review-export rows
are retained. Offline heuristic: 98 candidate models / 11 brands.

Validation: 218 unit tests in 18 files and five Python tests passed. Build: 2,712
pages, approximately 403 MB. Data audit: zero errors and 535 existing/unknown-data
warnings; three new warnings are the unknown release years of the TGW systems.
Lint, source formatting and diff checks passed. The rendered-evidence check covers
all 553 profiles containing themes, all three new product pages and all export
counts/themes, plus Omni classification. All 276 previous commercial CSV rows and
all 519 previous verified product records remain unchanged. Reimport: 522 records,
zero additions. Saved evidence: `scratch/competitor-research/primary/batch-26/`.

Browser validation selected 96 desktop/mobile cases for brands, accessibility,
responsive layout and page quality. Initially 94 passed; two new tests expected a
source link name without its existing screenreader external-tab notice. The test
was corrected and now also asserts the exact source URL; both targeted repeats
passed. All 172 tracked own test processes exited, port 4321 is closed, and no own
research helpers remain. No research browser was opened; other tasks' browser
resources were preserved. Evidence: `batch-26/evidence-check.json` and
`batch-26/resource-check.json`. Local changes only; no commit, push or deployment.


## 2026-11-02 — Competitor batch 27: lossless theme union and company descriptions

Removed the five-theme limit from controlled keyword extraction. Deduplicated
models now retain the union of every listing's themes, and `featureSources`
records the contributing listing IDs and URLs for each theme. The model export
includes those links. Source company descriptions and supplied use cases are
extracted separately from product/service listing themes, shown on brand profiles
and included in brand search and separate company-export columns.

The expanded rules retain solar power, RTK/GPS, seeding/weeding, self-driving video
presence, modular hardware, Ethernet, machine vision and other explicit concepts.
Labels no longer infer navigation solely from LiDAR, autonomy solely from forklift
or cleaning categories, or inspection solely from underwater operation. Explicitly
negated capabilities are not emitted as positive themes. Superlatives, investment
claims, sales metrics and certification claims are not promoted as verified facts.

Theme assignments: 348 source models/series now have 691 (previously 536); 862
listings have 1,446 (previously 1,189); 210 company-description records contribute
518, and 95 source company records contribute 466 use cases. RoboticsDir has 321
(previously 207). These are controlled themes including category positioning,
not counts of unique advantages or exhaustive semantic extraction. The coverage
audit now records these layers in `sourceFeatureCoverage`.

554 brand profiles show source themes. Three company-authored focus reviews are
separate from directory claims. Primary T-Chef sources identify the former name
智谷天厨 (Zhigu Tianchu), the current Chinese name 仟弈智能 and cooking robotics /
smart-kitchen systems. The September 30, 2026 company announcement describes
Cooking Domain Agent for diagnosis and maintenance support. The reviewed company
website is displayed separately from the directory's 36kr media link, with its
own dated source required by validation. Delivery Bot / EduBot remain unresolved.

All source identities are preserved across 339 RoboticsDir entries, 412 company
records, 862 listings and 348 deduplicated model/series records. Brand mappings,
verified imports and product highlights remain unchanged: 1,664 catalog models,
630 manufacturer spellings, 1,034 profiles, 522 dated highlights, 592/406/862 export
rows, three strict model mentions and nine unclear listings still open. Six newly
fetched T-Chef manufacturer product pages are retained as separate research leads;
these are not added to the original competitor-mention count or imported blindly.

Validation: 223 unit tests in 18 files; eleven Python tests; 108 selected browser
cases passed for brands, accessibility, responsive layout and page quality on
desktop/mobile. The HEBI and Zhigu profiles also pass the selected Axe checks in
light/dark modes. Final static build: 2,712 pages, approximately 403 MB. A final
copy clarification explicitly includes source categories alongside descriptions.
Source lint/format and targeted script/test formatting checks passed. Data audit:
zero errors, 535 unchanged warnings. Evidence checks cover all 554 themed profiles,
company/model/listing exports and per-feature model provenance, three existing TGW
pages, every preserved source identity, and the unchanged import/highlight records.
Evidence and primary captures: `scratch/competitor-research/primary/batch-27/`.

Resource verification: all 161 tracked own test processes exited, port 4321 is
closed and no own research helper remains. No research browser was opened;
other tasks' resources were preserved. Local changes only; no commit, push or
deployment. Checks: `batch-27/inventory-check.json`, `batch-27/evidence-check.json`
and `batch-27/resource-check.json`.


## 2026-11-02 — Competitor batch 28: typed company-description product names

All 412 source companies have explicit snapshot-bound name reviews: 299 have
text and 113 have no description. The 132 extracted names in 76 companies include
52 model names, 28 families, 19 software names, nine components, seven component
families, five brand references, three systems, six configuration labels, one
service, one machine family and one unresolved name. They are a separate source
layer, not 132 verified robots. Names, aliases and exact short contexts are
searchable and displayed with type, URL and source/review dates on 76 profiles.

`company-descriptions.json` retains original descriptions outside scratch, for
repeatable extraction and CI checks. The collector writes it only after a complete
source inventory is established. Explicit reviews store SHA-256 hashes of exact
text. Missing reviews, changed hashes, absent names/aliases/context, invalid dates,
duplicate identities and unsafe or mismatched URLs are rejected. CLI extraction
validates before replacing existing output. Browser catalog JSON never contains
the original source descriptions. Snapshot: 2026-11-01T17:58:29Z; name review:
2026-11-02. This is not a fresh successful live check of the blocked competitor.

`company-product-review.csv` contains 132 typed references with IDs, names,
context, aliases, company/profile identities, candidate catalog IDs, source URLs,
dates, hashes and review scope. Existing company/model/listing exports remain
592/406/862 rows. Coverage tracks 27 catalog-name candidates, six prefixes, 19 model
names needing identity review and 80 names of other types, separately from the
original 406 model/family mentions. Candidates do not establish manufacturers,
availability or a unique advantage.

Tokinomo Shelfobot is added from its manufacturer product page, with shopper
sensing, a programmable swing arm, LED/audio and wireless/cloud campaign controls.
It is a stationary advertising robot. Sales uplift claims and unknown numeric
specifications are omitted. Visibubble is retained as a source name and is not
imported as a robot: its page documents an advertising display without robotic
motion. SY-HR08E remains a research lead: the exact code occurs in the manufacturer
URL, but not the fetched body text. No clinical efficacy claim is imported.

Catalog: 1,665 models, 631 exact manufacturer spellings, 1,034 profiles
(620 with models / 414 source only), 523 dated product-highlight records
(410 task additions / 113 existing model enrichments). All prior 1,664 CSV rows,
522 verified product records and source identity records are preserved. The only
company mapping change links Tokinomo to its existing profile. Original matched
catalog models remain 421, all with dated highlights. Three original strict model
mentions and nine unclear listings remain unresolved. Full specification review
and market leadership remain unproven.

Evidence: `scratch/competitor-research/primary/batch-28/` and
`batch-28/primary-review-notes.json`. No commit, push or deployment.


Validation: 244 unit tests in 19 files, 11 Python tests and 118 selected browser
cases passed. Axe covers the typed names section in light/dark and desktop/mobile.
Initially 117 passed; one existing page with a YouTube embed emitted a transient
compute-pressure permissions-policy console message. The unchanged single-case
retry passed. No test or application change suppressed the message. The embed is
a possible source, not a conclusively identified cause.
Rendered checks cover all 554 theme profiles, 132 names on 76 profiles, the new
Shelfobot page and all 592/406/862/132 exported rows. Build: 2,713 pages, about
404 MB. Data audit: zero errors, 536 warnings; the new warning is the undocumented
Shelfobot release year. Reimport: 523 records, zero additions. All 1,664 previous
catalog rows, 522 previous evidence records and 1,961 source identity records are
preserved. All 193 tracked own test processes are closed, port 4321 is
closed and no own research helper remains. No research browser was opened;
other tasks' resources were preserved. Changes remain local. See
`batch-28/inventory-check.json`, `batch-28/evidence-check.json`,
`batch-28/test-resource-result.json` and `batch-28/resource-check.json`.


## 2026-11-02 — Competitor batch 29: reviewed company-description model identities

A separate `company-product-reviews.json` registry now records 45 dated decisions:
38 model references to 37 distinct catalog models, six qualified related-version
references and one non-robot device. Source extraction keeps all 132 names and
original types unchanged. Seven model names remain without a completed identity
review: ANYmal, ANYmal X, Sparky, Bee-Bot, Titan the Robot, SY-HR08E and Thymio.
The other 80 typed source references remain name extraction, not product certification.

Decisions require an exact source-description hash, dated primary sources, safe
HTTP(S) URLs without credentials, valid date ordering and existing primary-sourced
catalog targets. Exact identities require one model target; family/version links
remain qualified; non-robots cannot claim a robot target. Reviews appear with
notes, source/review dates and catalog links on profiles and in the 132-row export.
Provider references preserve separate manufacturer identities and do not establish
availability or authorization. The company export retains explicit decisions and
primary evidence URLs. Original 406 mention coverage stays separate.

Nine primary-sourced models were added: DJI Air 3S, Flip, Mini 4 Pro and Mavic 3 Pro;
Tennant T7AMR and T16AMR; Badger Technologies PatrolBot; Barrett Burt; and original
Ozobot Bit. Highlight evidence was added to four existing models: Tennant X4 ROVR,
X6 ROVR, T380AMR and Misty II. Original Bit is a distinct historical model from Bit+,
based on the cached manufacturer educator guide fetched 2026-11-01. Blocked main
hosts were not retried. Other batch sources were fetched 2026-11-02.

DJI hero-page extracts support features only; no general ProRes claim, unsupported
numeric aircraft specifications or current stock is imported. Tennant optional or
cumulative-in-24-hour endurance claims are not imported as continuous runtime.
Burt device functions are described without clinical efficacy, universal safety
or regulatory claims; inconsistent activity counts are omitted. Existing CSV
specification tables are preserved, not certified by highlight checks.

Totals: 1,674 models, 632 exact manufacturer spellings, 1,034 profiles (621 with
models / 413 source only), 536 dated highlights (419 task additions / 117 existing
model enrichments). All 1,665 previous catalog rows, 523 previous evidence records,
132 source-description names and 1,961 source identity records are preserved.
Only the Barrett manufacturer-to-profile mapping changes. Original source/export
counts remain 339/412 companies and 592/406/862/132 rows. All 421 catalog models
matched to original named competitor mentions still have dated highlights.
Three original model identities, nine unclear listings, remaining description
reviews, full specification coverage and market leadership remain unresolved.

Evidence: `scratch/competitor-research/primary/batch-29/` and
`batch-29/primary-review-notes.json`. No commit, push or deployment.


Validation: 265 unit tests in 20 files, 11 Python tests and all 124 selected browser
cases passed. Axe covers the new review section in light/dark and desktop/mobile.
Initially 123 passed; the existing mobile product page again emitted a
compute-pressure console policy error. The page-quality suite now stubs only the
external YouTube embed response. All six affected page-quality cases then passed;
all app-script errors remain checked. Video playback is outside this fixture-based
test scope. The original message's source was not directly established; the change
removes external player execution from the page-quality test.
Rendered verification covers all 554 theme profiles, 132 names on 76 profiles,
45 decisions, 13 product pages and all 592/406/862/132 export rows. Build: 2,722
pages, about 406 MB. Data audit: zero errors, 545 warnings; the nine new warnings
are undocumented release years for the nine additions. An initial integration
failure caught original Bit's missing `programmable` navigation tag. The supported
tag was added, then the full unit suite passed. Reimport: 536 records, zero
additions. All 1,665 previous catalog rows and 523 previous evidence records remain
unchanged. All 222 tracked own test processes are closed, port 4321 is
closed, no own research helper remains, and no research browser was opened.
Other tasks' resources were preserved. Changes remain local. See
`batch-29/inventory-check.json`, `batch-29/evidence-check.json` and
`batch-29/resource-check.json`.


## 2026-11-02 — Competitor batch 30: remaining model-typed description names

Added TTS Bee-Bot and Syrebo SY-HR08E; enriched Thymio II and ANYmal X.
Bee-Bot numeric memory claims conflict and are omitted. Syrebo's image-only PDF
was machine-transcribed with local OCR; PDF, images, confidence scores and machine
text are retained. No independent visual correction, clinical efficacy or
regulatory certification is claimed. The isolated OCR environment was removed.
ANYmal X now has a factual functional description; its unsubstantiated 2022
release year is cleared. The October 27, 2026 announcement milestone is not
substituted as an initial release year. Other existing specifications remain
unreviewed. Selected reviews now cover 67 fields at 13 models: 45 documented,
18 not documented, two conflicting and two roadmap.

Seven description decisions bring the registry to 52: 41 model references to
40 distinct models, eight qualified related-generation references, one non-robot
and two named offerings with unverified hardware identity. Sparky and Titan are
supported as named event offerings by their operator/creator. They gain no robot
target, hardware manufacturer attribution or autonomy/costume claims. The new
review kind rejects robot targets. Mobsya is mapped to its existing Thymio profile;
Syrebo gains a manufacturer mapping. Robotix remains separate from manufacturer
TTS. All 132 extracted names and their original types are preserved; 80 other
typed names retain extraction only. Original 406 mentions stay separate.

Totals: 1,676 models, 634 exact manufacturer spellings, 1,034 profiles (623 with
models / 411 source only), 540 dated highlights (421 additions / 119 enrichments).
All 1,674 previous rows remain: 1,673 unchanged and one with the two documented
corrections. All 536 previous evidence records, 45 previous decisions and 1,961
source identities are preserved. Original three model identities, nine unclear
listings, two event hardware identities, other typed names, T-Chef leads, complete
specifications and market leadership remain unresolved. Sources/notes are retained
under `scratch/competitor-research/primary/batch-30/`.

Validation: 268 unit tests in 20 files, 11 Python tests and all 128 selected browser
cases passed after correcting a new test selector. Initially 126 passed and
2 failed because the assertion searched for a visible status label inside the
notes panel instead of its enclosing product item. Both affected desktop/mobile
cases then passed. No app change or assertion removal was involved. Batch-29
YouTube response isolation remains; actual video playback is not tested.
Rendered verification: 554 theme profiles, 76 name profiles, 132 names,
52 decisions, four product pages and all 592/406/862/132 export rows. Additional
HTML checks cover ANYmal X corrections and both unverified-hardware boundaries.
Build: 2,724 pages, about 406 MB. Data audit: zero errors, 548 warnings (two new
undocumented model release years plus the cleared ANYmal X year). Lint/format pass.
Reimport: 540 records, zero additions. All 215
tracked own test processes are closed, port 4321 is closed, and no own research
helper remains. No research browser was opened. Other tasks' resources were
preserved. See `batch-30/inventory-check.json`, `batch-30/evidence-check.json`,
`batch-30/correction-html-check.json` and `batch-30/resource-check.json`.


## 2026-11-02 — Competitor batch 31: T-Chef cooking systems and useful comparison

All six saved T-Chef product leads are imported from the manufacturer's explicit
product pages: E10A, TC-E20A, TC-E40A, TC-G300, TC-G1000 and TC-40EA-US.
These are integrated programmable cooking systems; no mobile autonomy or specific
robot arm is inferred. E20A in a technical-table label and TC-E20A in its page title
are one source record. TC-40EA-US remains distinct from TC-E40A with different
mass/dimensions and optimal versus maximum capacity. TC-E40A liquid-seasoning
counts conflict and are omitted. No certification, 20% savings, staffing replacement,
self-cleaning, recipe-independent throughput or safety guarantee is imported.
Primary pages/history/index were already fetched successfully on this date in
batch 27; evidence was reused without duplicate/blocked-host requests.

Cooking & Food Service navigation includes the six systems and existing tagged
Macco offerings. Explicit cookingCapacity and heatSource fields appear in detail
tables, comparisons and structured product properties, with English/German labels.
Batch food capacity remains separate from machine mass, robot payload and
throughput. The commercial CSV gained two columns; every previous cell value is
unchanged. Twenty-four field reviews document weight, dimensions, batch capacity
and heating source for the six products. Selected reviews now total 91 fields at
19 models: 69 documented, 18 not documented, two conflicting and two roadmap.
Unmarked specifications remain unverified.

Manufacturer T-Chef maps to the existing Zhigu Tianchu profile based on company
history and product index. The original media URL and reviewed company website
remain separate. Delivery Bot and EduBot remain unresolved, rather than being
matched to these cooking systems. The six old lead records remain unchanged;
dated review/import outcomes are in batch-31/cooking-product-lead-decisions.json.

Totals: 1,682 models, 635 exact manufacturer spellings, 1,034 profiles (624 with
models / 410 source only), 546 dated highlights (427 additions / 119 enrichments).
All 1,676 previous catalog rows, 540 previous evidence records, 52 description
reviews, 13 previous specification reviews and 1,961 source identities are retained.
Original 592 groups, 406 model/family mentions, 862 listings and 132 description
names remain separate. All 421 catalog products matched to original mentions
retain highlight evidence. Three original identities, nine unclear listings, two
event hardware identities, 80 other typed names, full specification checks and
market leadership remain unresolved.

Validation: 269 unit tests in 20 files, 11 Python tests and all 138 selected browser
cases passed. An old unit assumption of zero T-Chef profile cards was updated to
six evidenced cooking systems while preserving unrelated-name limits. The static
JSON-LD checker was adapted to accept list-valued shared schemas alongside product
objects. Additional browser cases cover food-service navigation, batch-capacity
versus mass/payload comparison, German labels, source links and the new US product's
light/dark desktop/mobile accessibility. Existing YouTube response isolation remains;
actual video playback is not tested. Rendered checks cover 554 theme profiles,
76 name profiles, 132 names, 52 decisions, six product pages and 592/406/862/132
export rows. All 24 new marked fields and structured properties were checked.
Build: 2,730 pages, about 409 MB. Data audit: zero errors, 554 warnings (six new
undocumented release years). Lint/format pass; reimport: 546 records, zero additions.
All 199 tracked own test processes are closed,
port 4321 is closed and no own research helper remains. No research browser was
opened; other tasks' resources were preserved. See batch-31/inventory-check.json,
batch-31/evidence-check.json, batch-31/cooking-evidence-check.json and
batch-31/resource-check.json. Evidence: scratch/competitor-research/primary/batch-31/.


## 2026-11-02 — Competitor batch 32: all extracted family names receive scoped reviews

Reviewed all 28 previously unreviewed family names: 27 qualified related-product
references and one coordinated system reference. They add 89 related catalog links,
not exact configuration matches or an exhaustive current lineup. Source extraction
preserves every name, type and description hash. Selected ER-FLEX standard/ESD
configurations remain separate; collaborative RB/RB-N arms exclude RBQ/RB-Y1.
Historical HUBO developer evidence and DEEBOT PRO commercial examples remain
explicitly scoped. Existing evidence/source dates are reused unchanged.

Added DJI Inspire 3 plus Interbotix ALOHA Stationary, ALOHA Mobile and ALOHA Solo.
The Trossen publisher identifies Interbotix kits it sells; its provider profile stays
separate from the hardware brand. Documentation version 2.0 is not a hardware model
or the Trossen AI Arms line. Mobile camera type conflicts and is omitted. Documented
teleoperation/data-training workflows do not establish turnkey autonomy. The public
meta-refresh was followed normally to versioned docs; no access block was bypassed.
DJI's downloads fetch timed out; successful named product/spec pages supply evidence.
Inspire mass, maximum takeoff mass and flight endurance retain conditions; no battery
charging, ProRes-license/bundle, current stock or certification inference. Three marked
fields bring selected reviews to 94 fields at 20 models: 72 documented, 18 not
documented, two conflicting, two roadmap. Enriched existing GOAT A3000 LiDAR and
WINBOT W2 Pro Omni with feature-only evidence, preserving unreviewed CSV values.

New company focus for SOLARTODO identifies SKYHUB as a coordinated catalogue system,
not a standalone robot. The validator requires family/system source types and zero
robot targets for this decision. Rev 1.3 names aircraft, exchange cabinet and selected
ground robot; simulated public dashboards are not deployments or measured performance.
Four component names remain separate hardware/OEM/physical-product research leads
in batch-32/skyhub-hardware-leads.json. No standalone component robots are imported.

Totals: 1,686 models, 636 exact manufacturer spellings, 1,035 profiles (625 with
models / 410 source only), 552 dated highlights (431 additions / 121 enrichments).
All 1,682 previous rows, 546 evidence records, 52 decisions, 19 selective specification
reviews and 1,961 source identities are unchanged. Original 592 groups, 406 model/family
mentions, 862 listings and 132 description names remain separate. All 421 original
matched catalog products retain highlight evidence. Description reviews total 80:
41 model references, 35 qualified related-product references, one non-robot device,
two offerings with unverified hardware and one system reference. Fifty-two other typed
names, three original identities, nine unclear listings, two event hardware identities,
four SKYHUB component leads, full specifications and market leadership remain unresolved.

Validation: 272 unit tests in 20 files, 11 Python tests and all 148 selected browser
cases passed. An old unit assumption that every non-model name was unreviewed was
updated to permit explicit manual family/system decisions while retaining zero
automatic model candidates. New browser cases cover provider separation, RB variants,
system/simulation limits and Inspire flight conditions; axe covers the new company
profile in light/dark desktop/mobile. Existing YouTube response fixture retained;
actual playback not tested. Initial browser run: 146 passed, two aerial navigation
failures because X10 moved beyond the first page. Tests now search the model field
X10; both targeted rechecks passed. A first recheck with combined brand/model text
returned no results under the existing field-by-field search. Rendered checks: 554 theme profiles, 76 name profiles,
132 names, 80 decisions, six product pages and all 592/406/862/132 export rows.
Additional checks cover 28 family items/89 related links, three marked fields and
structured properties, three ALOHA pages and the zero-target system reference.
Build: 2,735 pages, about 410 MB. Data audit: zero errors, 558 warnings (four new
undocumented release years). Lint/format pass; reimport: 552 records, zero additions.
All 263 tracked own test processes are closed,
port 4321 is closed and no own research helper remains. No research browser opened;
other tasks' resources preserved. Evidence under scratch/competitor-research/primary/
batch-32/, including inventory-check.json, evidence-check.json, family-evidence-check.json
and resource-check.json.


## 2026-11-02 — Competitor batch 33: typed references and integrated hardware

Added five products: three named CafeXbot kiosks, ScalableArc Welding Cobot Cart and
DriveMod Forklift. VLT integrates coffee/soft-serve appliances; Scalable supplies a
cart system using an ABB GoFa-10, without claiming to manufacture the arm. Cyngn
supplies autonomy for BYD forklift integration. Its June 2023 development announcement
is superseded by supplier announcements of a first paid deployment on October 21,
2024 and further industry deployments on February 19, 2025. Current delivery status,
exact current chassis and independent deployment validation remain open. The
/autonomous-forklift page now discusses Tugger workflows; it is not used as a current
forklift specification. Conflicting dated capacities are omitted; deployment dates
are not release years. CafeXbot ice-cream naming relies on the manufacturer overview;
its detail page extracted no text. Conflicting coffee serving times, power-unit
wording and ROI/profit/superlative claims are not adopted.

Added 49 primary-source description reviews: 17 software, 16 components/families,
five brand/company references, five configuration labels, four additional systems,
one service and one machine family. Source types, text, dates and hashes are
unchanged. Nuro Driver remains software in extraction but is explicitly reviewed as
an integrated software/hardware system. Configuration links point to separately
evidenced related products; no exact edition specification is implied. All other
new classes forbid standalone robot targets. Brand/company classification does not
prove reseller authorization or legal succession; Oxipital/Soft Robotics legal
relationships remain unverified. The old littleBits app removal and Space Rover w33
dependency are documented without claiming all kits are discontinued. 403/429 and
ROS Anubis challenges are not bypassed; developer manuals, Open Robotics platform
descriptions and public manufacturer support documentation supply independent
primary documents. Remaining typed names: APP+ (checked company pages name 1+OS;
no evidenced alias), VEX Robotics at iDesign (blocked provider/manufacturer/support
pages) and Kime v5 (no supported exact version/launch/portion-control claim).

Sixteen additional company focus records describe software and integrated-system
functions, bringing focus reviews to 20. Totals: 1,691 models, 638 exact manufacturer
spellings, 1,035 profiles (627 with models, 408 source only), 557 primary-sourced
product highlight records (436 additions / 121 enrichments). All 1,686 previous rows,
552 product records, 80 name decisions and 20 selective specification reviews remain
unchanged. Only Scalable Robotics and VLT Robotics gain explicit manufacturer
mappings. Original 592 groups, 406 mentions, 862 listings and 132 description names
remain distinct. Reviews total 129, leaving three typed names; three original model
identities, nine unclear listings, two event hardware identities and four SKYHUB
component/OEM leads remain open. Selective field reviews stay at 94 fields on 20
models. Commercial terms and market leadership remain unproven.

Validation: 282 unit tests in 20 files, 11 Python tests and all 168 selected browser
cases pass. New browser checks cover software/body separation, eight DJI components,
forklift supplier/deployment boundaries, cafe appliance suppliers and the integrated
welding cart. Additional axe pages: Open Robotics, VLT and Scalable, light/dark,
desktop/mobile. An initial missing commercial subcategory for the welding cart was
fixed by classifying the integrated arm system under robotic-arm/industrial; all old
rows are preserved. The initial browser run passed 166 cases; two older PlusAI tests still expected
unreviewed software and source-first link/time ordering. Updated assertions check
the explicit software decisions, original source dates/URLs and zero robot links,
plus APP+ retaining its unverified label; both targeted rechecks passed.
Existing YouTube fixture retained; actual playback not tested.
Rendered/export checks cover 554 theme profiles, 76 name profiles, 132 names,
129 decisions, five product pages, 20 company focus profiles and 592/406/862/132
export rows. New typed checks: 49 review items, five related configuration links,
44 references without robot targets and two manufacturer mappings. Build: 2,740
pages, around 411 MB. Data audit: zero errors, 563 warnings (five new unknown release
years). Lint/format pass; reimport: 557 records, zero additions. All
276 tracked own test processes are closed, port 4321 is
closed and no own research helper remains. No research browser opened; other tasks'
resources preserved. Local changes only. Evidence under
scratch/competitor-research/primary/batch-33/.


## 2026-11-02 — Competitor batch 34: final description-name decisions

All 132 extracted company-description names now have scoped source decisions.
APP+ is a historical software reference in SGInnovate's 2022 programme brochure;
its relationship to current Hand Plus 1+OS remains unverified. Programme sources
are accepted only for software-reference reviews and cannot qualify hardware
targets or product imports. A manufacturer-hosted VEX curriculum supports the
brand reference, without establishing iDesign's authorization or supplied kits.
Macco's own posts and a member-authored offer linking a KIME V5 datasheet support
the versioned product. Datasheet metadata is not a launch date; RGB/depth
object-state recognition does not verify portion control. Numeric specifications
and certifications are not imported. Local image viewing was unavailable; no
independent visual audit of specification tables is claimed. SDK wording is
qualified by the document's Macco-managed modification condition.

Added Hand Plus PICK+, MOVE+ and PACK+ and Macco Kime V5. The Hand Plus source
separates its integrated systems from partner arms, AMRs and grippers; partner
models, payloads and throughput are not inferred. Two new company focus reviews
bring the total to 22. Four SKYHUB component pages add qualified catalogue
functions to the existing company profile. These pages explicitly do not establish
a delivered site. Four OEM/physical hardware/delivery verifications remain open;
no standalone robot cards were added from these catalogue pages. The original
lead artifact and all source identities are retained.

Totals: 1,695 models, 639 exact manufacturer spellings, 1,035 company/brand
profiles (628 with models, 407 without), 561 dated product highlight records
(440 additions / 121 enrichments). All 1,691 previous CSV rows, 557 product
records, 129 description decisions and 20 selective specification reviews remain
unchanged. Only Hand Plus gains a new explicit manufacturer mapping. The 592
company groups, 406 original model/family mentions, 862 listings and 132
description names remain separate. Three original model identities, nine unclear
listings, two event hardware identities, four SKYHUB hardware verifications,
current commercial terms and market leadership remain open. Selected
specifications stay at 94 fields on 20 models; unmarked values are unverified.

Validation: 284 unit tests in 20 files, 11 Python tests and all 182 selected browser
cases pass. New browser assertions cover the three Hand Plus cards, Kime V5,
VEX provider separation, SKYHUB catalogue boundaries and historical APP+.
Additional axe pages: Hand Plus and Macco in light/dark, desktop/mobile. The
existing deterministic YouTube fixture is retained; actual playback is not tested.
The initial browser run passed 180 cases; two older Macco search tests expected
three offers. Updated assertions verify the fourth V5 card and all four distinct
product links. Both targeted desktop/mobile rechecks passed.
Rendered/export checks cover 554 theme profiles, 76 name profiles, all 132
decisions, four product pages and 592/406/862/132 export rows. Targeted checks
cover three new decisions, one version link, three Hand Plus cards and four
SKYHUB catalogue references with zero standalone cards. Build: 2,744 pages,
around 411 MB. Data audit: zero errors, 567 warnings (four new unknown release
years). Lint/format pass; reimport: 561 records, zero additions. All
297 tracked own test processes are closed, port 4321 is
closed and no own research helper remains. No research browser opened; other
tasks' resources preserved. Local changes only. Evidence under
scratch/competitor-research/primary/batch-34/.


## 2026-11-02 — Competitor batch 35: Universal Robots configuration coverage

Reviewed all 17 current family-page offer links. Added 12 evidenced named/controller
configurations and primary product highlights for three existing g-Series arms.
The 12 additions comprise seven e-Series offers (UR3e CB5/UR3e-540, UR7e CB5/UR7e-920,
UR12e CB5/UR12e-1300 and UR16e CB5) and five CB5 UR Series offers (UR8 Long, UR15,
UR18, UR20 and UR30). Controller variants do not establish new mechanical arm designs.
UR20-1750 and UR30-1300 remain held because the reviewed pages do not establish
their controller/hardware difference from the CB5 offers. Current family links
do not establish complete historical manufacturer coverage.

Added 75 selected specification field reviews on 15 offers. Nominal/extended payload,
manual conditions, tooling load, cable inclusion and maximum TCP speed remain explicit.
UR17g-1300's former plain 17 kg is corrected to 15 kg nominal / up to 17.5 kg extended;
g-Series datasheet masses include cable, unlike bare arm values. UR3e-540 and UR7e-920
retain unresolved reach conflicts against their linked generic datasheets. Source badges
link directly to the technical PDF; both PDF and product page remain product sources.
Old predecessor paths now serve g-Series pages and cannot evidence CB5 predecessors.
Old 404 product/PDF routes are not treated as product discontinuation or evidence.
No blanket cage-free operation, independent certification, unrestricted software,
guaranteed throughput, ROI, price or delivery claim is imported. The manufacturer risk
assessment manual is linked. SP7 is optional. October 2026 document revisions are not
release years. PDF text was extracted; independent visual table/diagram inspection is
not claimed. Repeatability discrepancies are not imported as extra specification fields.

Totals: 1,707 model/configuration rows, 639 manufacturer spellings, 1,035 profiles
(628 with models / 407 without), 576 dated product records (452 additions / 124
enrichments), 23 company focus reviews. All 561 previous product records, 132 name
decisions, 20 prior specification reviews and source identities remain unchanged.
Three existing UR rows were explicitly re-reviewed; the other 1,692 prior rows remain
unchanged. Field coverage: 169 on 35 models, with 145 documented, 18 not documented,
four conflicting and two roadmap values. Original three model identities, nine unclear
listings, event hardware, SKYHUB verification, commercial terms and market leadership
remain open; two newly reviewed UR suffix names have their own pending identity decisions.

Validation: 286 unit tests pass. All 14 new desktop/mobile browser cases pass, including
eight light/dark axe cases. After pointing badges to technical PDFs, six functional
rechecks pass. Previous batch's 182 browser and 11 Python cases are retained as history,
not claimed as freshly rerun. Rendered/export checks cover 554 theme profiles, 76 name
profiles, 132 decisions, 15 product pages and 592/406/862/132 export rows. All 75 new
field cells, PDF targets and structured properties match; 15 undisclosed prices generate
no Offer schema. Build: 2,756 pages, about 413 MB. Data audit: zero errors, 579 warnings
(12 new unknown release years). Test formatting passes; reimport: 576 records, zero
additions. No application source code changed. All 86
tracked own test processes are closed, port 4321 is closed and no research helper
remains. No research browser opened; other tasks' resources preserved. Local changes
only. Evidence under scratch/competitor-research/primary/batch-35/.


## 2026-11-02 — Competitor batch 36: MiR platforms and Enabled partner boundaries

Added three historically documented platforms: MiR200 (2017), MiR500 (2018),
MiR1000 (2019). Manufacturer-created datasheets are hosted by distributor RG Group;
the source role and historical status remain explicit. Current 404 product routes
and sitemap absence do not establish discontinuation. Existing MiR100 unchanged.
Re-reviewed MiR250, MiR600, MiR1350 and MiR1200 Pallet Jack with 77 selected field
reviews across seven products. Carrying versus towing, module useful load, loaded
versus unloaded runtime and opportunity charging versus full-charge time stay separate.
MiR250's narrow doorway requires the manufacturer's protective-field configuration.
Pallet Jack mass conversion, runtime and dimensions/lift height retain conflicts;
no silent unit correction or validated mass is claimed. Historical MiR1000 charging
time does not imply a battery runtime or IP rating. PDF text was extracted; no
independent visual table inspection is claimed. Manufacturer cases are supplier claims.

MiR and Enabled company focus reviews distinguish software, ten accessories/stations
and two partner integrations from robots. MC250/MC600 are Enabled-provided listings,
not proven exact aliases of current ER-FLEX/ER-MAX variants; old UR arm/payload options
are not transferred to current variants. Optional 3D pose remains optional. No
independent certification, guaranteed ROI, exact availability or quotations inferred.

Totals: 1,710 model/configuration rows, 639 manufacturer spellings, 1,035 profiles
(628 with models / 407 without), 579 highlights (455 additions / 124 enrichments),
25 company focus reviews. Selected field coverage: 246 on 42 models, 197 documented,
40 not documented, seven conflicting, two roadmap. Source inventories, 132 name
decisions and 35 prior specification reviews preserved. 1,703 old CSV rows unchanged,
four explicitly re-reviewed; 572 previous highlight records unchanged, four revised,
three appended. Three source identities and nine unclear listings remain unresolved;
complete manufacturer verification and market leadership remain unproven.

Validation: 289 unit tests and 22 targeted desktop/mobile cases pass, including
12 light/dark axe cases. Prior browser/Python results are history, not fresh reruns.
Rendered/export checks: 554 theme profiles, 76 name profiles, 132 decisions, seven
product pages and 592/406/862/132 export rows. All 77 review values match CSV; 55 source
badges, 48 structured properties, three conflict cells and 15 omitted blank fields
checked. Seven release years are additional table rows without individual source
badges; product highlights link the manufacturer timeline. Unknown prices yield no
Offer schema. Build: 2,759 pages, about 414 MB. Data audit: zero errors, 575 warnings
(four fewer from documented release years). Formatting and repeat import pass;
579 records, zero additions. No application source code changed in this batch.
All 63 tracked own test processes closed, port 4321
closed, no own research helper remains; other tasks' resources preserved. Local only.
Artifacts: scratch/competitor-research/primary/batch-36/.


## 2026-11-02 — Competitor batch 37: evidence in the model comparison

Comparison now shows every available product highlight with dated primary sources
and publisher roles. The public payload contains 579 highlight records / 1,782
statements / 712 product-source references and selected field statuses/notes for
246 fields across 42 models. These are statements, not verified unique advantages.
Conflicting, roadmap and undocumented values retain visible qualifications;
unreviewed values do not acquire a verification badge. Sources are deduplicated by
URL/date/role per model. Missing reviews and source-load failures have distinct
states. Model names link to details. Unknown prices still do not create offers.

The 319,656-byte JSON response loads only when comparing at least two models, then
is reused in the page session. The 1,324,091-byte shared catalog script is unchanged.
Public JSON excludes internal snapshots, research paths and discovery metadata.
Numeric comparison survives HTTP failures with retry. Late responses do not restore
cleared selection or overwrite changed-language labels. English fallback labels
cover 28 UI languages; German labels are localized, claim prose remains as reviewed.
Tables scroll internally on mobile; source text/URLs are escaped and non-HTTP(S)
source links are excluded.

Validation: 292 unit tests and 144 fresh desktop/mobile browser cases pass (18 new
comparison cases, including four light/dark axe cases; 126 existing brand/catalog/
detail cases). All delivered claims, sources and review qualifications match their
records. 554 theme profiles, 76 name profiles, 132 identity decisions, seven MiR
pages and 592/406/862/132 export rows checked again. Changed-file JS lint and
formatting pass. Build: 2,759 HTML pages plus data endpoints, about 414 MB. Audit:
zero errors, 575 existing warnings. All 25 snapshotted data/inventory files remain
byte-identical; no catalog/product/evidence mutations. 1,710 catalog rows, 579
highlights and 42 specification reviews unchanged. Three source identities, nine
unclear listings, complete product verification and market leadership remain open.
All 177 tracked own test processes closed; port 4321 closed,
no own research helper remains, other tasks' resources preserved. Local changes only.
Artifacts: scratch/competitor-research/primary/batch-37/.


## 2026-11-02 — Competitor batch 38: XYZ mobile and SE handling robots

Added RockyOne/RockyLight mobile manipulators and manufacturer-named RockyOne SE /
stationary RockyLight SE palletizing configurations. Mobile payload, travel speed,
footprint, body mass and IP ratings are qualified; footprint is not full height,
application case loads are not universal payload limits, and travel is not TCP or
case throughput. Launch years 2023/2024 come from the company history. Supplier
case dates do not establish SE release dates. No mobile numeric/mobility values
are transferred to SE. The complete conveyor/barcode workflow is not another model.
Manufacturer-authored cases are not independent performance or deployment validation.
No brochure form submitted or gated file obtained. Four obsolete routes returned
404; successful current source links provided evidence, not those error pages.

One XYZ company focus links the official site separately from the directory's
MarketWatch candidate. DeliveryDrone/SecurityGuard/ServiceBot remain unresolved,
as do Kawasaki A700/Kx and Parrot CHUCK DV7; no fuzzy identities or fake models.
All original source identities retained. Totals: 1,714 catalog rows, 640 manufacturer
spellings, 1,035 profiles (629 with / 406 without models), 583 highlights (459 added /
124 enriched), 26 company focus reviews. Selected specifications: 290 fields on
46 models (211 documented, 70 not documented, seven conflicting, two roadmap).
All 1,710 prior CSV rows, 579 highlights, 42 field-review records and 132 description
name decisions unchanged. Only XYZ's catalogManufacturer field changes in the
592 source-company groups. Market leadership and complete verification remain open.

Validation: 294 unit tests and 20 new desktop/mobile cases pass, including 12
light/dark axe cases. Previous 144 browser cases remain history, not fresh reruns.
Rendered/export checks: 554 theme profiles, 76 name profiles, 132 decisions, four
new product pages and 592/406/862/132 export rows. 44 new field values, 16 source
badges and 12 structured properties match; 26 blank fields omitted, no unknown-price
Offers. Two release years are additional rows without individual field badges;
company history is linked. Full comparison JSON matches 583 products / 1,810
statements / 722 product-source references and 290 field statuses. Test lint and
formatting pass. Build: 2,763 HTML pages, about 415 MB. Audit: zero errors, 577
warnings (two unknown SE release years). Repeat import: 583 records, zero additions.
Application code unchanged. All 61 tracked own
processes closed; port 4321 closed, no own research helper, other tasks preserved.
Local only. Artifacts: scratch/competitor-research/primary/batch-38/.


## 2026-11-02 — Competitor batch 39: retrieve product highlights through catalog search

Catalog search now includes all 1,810 highlight statements on 583 products. ECIC,
AprilTag, barcode facing outward, Parrot ANAFI UKR and Karcher previously returned
zero; they now retrieve 1/1/1/1/5 appropriate models. 719 full-statement queries
previously missed their own model; all 1,810 now retrieve it. This is a literal text
retrieval diagnostic, not semantic search, claim certification or market ranking.
Full manufacturer/model names and case/accent/ß/whitespace/dash normalization are
supported without changing identity matching. Highlight-only results show the full
qualifying sentence and link to the detail highlight/source section. Other matches
keep the normal detail URL. No source-URL or private-metadata indexing.

Search/comparison share one lazy request and page-session cache. No request on an
unsearched catalog visit without comparison. The catalog script (1,328,307 bytes)
and evidence JSON (336,131 bytes) are unchanged. Loading does not prematurely show
an empty-state message; failure explicitly limits results to basic catalog fields
and supports retry. Current filters/history/query/cleared state survive late responses.
Claim markup is escaped. English fallback and German UI labels do not translate the
reviewed claim prose. Existing comparison behavior remains covered.

Validation: 300 unit tests across 23 files; 188 fresh desktop/mobile browser cases
are covered: 186 initial passes and two targeted recheck passes after correcting
a test that closed an already-expanded URL-filter panel. The recheck changes only
test setup, not application code. Scope: 24 new search cases and 164 existing
comparison/brand/catalog/detail/XYZ cases.
Fresh axe checks: four search, four comparison and 12 XYZ light/dark cases. Rendered/
export checks: 554 theme profiles, 76 name profiles, 132 decisions, four XYZ products
and 592/406/862/132 export rows. Changed-file JS/Astro lint and formatting pass.
All 25 snapshotted data files byte-identical: 1,714 catalog rows, 583 highlights,
46 specification reviews / 290 fields, 26 company focus reviews, all source identities
unchanged. Build: 2,763 HTML pages, about 415 MB. Audit: zero errors, 577 existing
warnings. Three source identities, nine unclear listings, complete manufacturer
verification and market leadership remain open. All 268
tracked own test processes closed, port 4321 closed, no own research helper remains;
other tasks preserved. Local only. Artifacts: scratch/competitor-research/primary/batch-39/.


## 2026-11-02 — Competitor batch 40: Unitree variant corrections

Reviewed labeled G1/G1 EDU and Go2 AIR/PRO/X/EDU columns from two successful
manufacturer HTML snapshots. Corrected six existing cards and added Go2 X;
the Go2-EDU identity is retained without a duplicate. Pro is USD 2800 excluding
tax/freight and 0–3.5 m/s. EDU uses a 15000 mAh battery / about 2–4 h, rather
than AIR/PRO/X's 8000 mAh / about 1–2 h. Nominal and maximum payload, lab
speed claims, conditional terrain, graphical programming, secondary development
symbols and dock compatibility remain distinct. Generic Go2 has no mixed
variant-specific numeric values. Unsupported IP54 and EDU age fields cleared.
G1/EDU arm load is posture dependent (about 2/3 kg), not whole-body capacity;
EDU hands/computing are optional. Undocumented G1 speed removed. Battery
estimates are not guaranteed endurance; charger output does not prove charging
duration. Legacy release years, images/video and complete Unitree lineup remain
outside this selected review. Manufacturer statements are not independent tests.

Totals: 1715 catalog entries, 640 manufacturer spellings, 1035 profiles (629/406),
586 product records (460 additions / 126 enrichments), 1846 statements and 725
product-source references. 365 selected fields / 53 models: 257 documented,
99 not documented, seven conflicting, two roadmap. Seven new reviews / 75 fields.
1708 prior CSV rows unchanged, six explicitly corrected, one new. 579 prior
highlight records unchanged, four updated, three new. All 46 prior spec records,
1961 source identities, 132 description decisions and original open names preserved.
Market leadership and complete manufacturer verification remain unproven.

303 unit tests / 23 files pass. Initial run: 302 passed, one failed because
removing broad tags left Go2 without a subcategory; manufacturer consumer
classification restores the filter and the full suite passes. 20 Unitree
desktop/mobile cases covered: 14 passed initially; six passed after targeted
test correction (qualified price text and existing unitree-robotics brand URL).
Application code unchanged. Includes 12 passing light/dark axe cases. The 188 batch-39
cases remain history. Seven pages / 75 values / 49 source badges /
26 omitted blank fields / 38 structured properties / four numeric offers
match. Unknown prices produce no structured offers. 554 theme profiles, 76
name profiles, 132 decisions and 592/406/862/132 export rows rechecked. All 1846
statements retrieve their own model. Full comparison payload checked:
354658 bytes, 586 products, 53 spec records, 365 field statuses; no
internal paths. Build: 2764 pages, about 415 MB. Data audit: zero errors / 578
warnings (one new undocumented Go2 X release year). Repeat import: zero additions.
Test lint/format pass. Application code unchanged. All 120 own tracked processes
closed, no own research helpers, port 4321 closed; other tasks preserved.
Local only. Artifacts: scratch/competitor-research/primary/batch-40/.


## 2026-11-02 — Competitor batch 41: source-theme extraction fidelity

Restored 45 direct source-theme assignments (27 across 17 company descriptions,
18 across 14 listings) using 24 new controlled labels. Eleven additional assignments
in seven merged model/family entries are derived from those listings, not independent
claims. Totals: 1464 listing, 702 merged-model and 545 company-description assignments;
466 company use cases unchanged. Examples include ROS 2, tactile sensing, docking,
cross-docking, cart trains, production-line delivery, storage/retrieval, curricula,
scripted interaction and specific construction tasks. Robot docking is not inferred
from cross-docking; ROS alone does not prove ROS 2; explicit denial of on-site operator
support stays excluded. Source themes are not primary specifications, certifications,
current availability, manufacturer identity or proven unique market advantages.

Offline-only refresh from 2026-11-01 snapshots; no network calls. Original text,
source timestamps, 1961 identities and 132 name decisions preserved. Forty-five proof
records retain matching text, URL, identity and description hash. All 702 model theme
provenance records checked against exact listing IDs/URLs. Heuristic comparison now
uses 1715 rows / 632 normalized manufacturer keys (640 exact spellings); its 98 model
and 11 brand candidates remain distinct from strict identity gaps. Strict three model
identities and nine unclear listings remain open. Eight previously empty brand queries
now retrieve appropriate profiles. Existing token/substring semantics remain; incidental
partial matches do not establish an exact capability. Complete semantic extraction and
market leadership remain unproven.

303 unit tests / 23 files, 12 offline Python tests and 20 fresh desktop/mobile browser
cases covered: 12 passed initially; eight passed after targeted test correction.
New link assertions had selected both heading and footer links; now scoped to each
card heading link. Frontend unchanged. Eight light/dark axe cases pass. Initial Python
run caught an uppercase
AI pattern against lowercased input; corrected and full suite passed. Previous browser
cases remain history. Render/export checks: 554 theme profiles, 76 name profiles, 132
decisions and 592/406/862/132 export rows. All nine CSVs, 586 primary records and 365
spec decisions byte-identical. Catalog script 1331365 bytes / comparison 354658 bytes
unchanged. Build 2764 pages / about 415 MB; zero data errors / 578 existing warnings.
Test lint/format pass. Frontend unchanged. All 142 tracked own test processes closed,
no own research helpers, port 4321 closed, other tasks preserved. Local only.
Artifacts: scratch/competitor-research/primary/batch-41/.


## 2026-11-02 — Competitor batch 42: Clearpath platform boundaries and specifications

Added Husky A200, Husky AMP, Husky Observer, Dingo-D and Dingo-O; corrected eight
existing Clearpath entries. Thirteen selected model reviews / 143 fields added:
85 documented, 53 not documented, five conflicting. Overall 1720 catalog models,
591 primary highlight records (465 additions / 126 existing enrichments), 1894
statements, 736 product source references; 66 reviewed models / 508 fields
(342 documented / 152 not documented / 12 conflicting / two roadmap), 27 company
focus reviews. Fourteen successful source fetches, thirteen used snapshots; extra
AMP manual is research only. No known blocked host retried or form submitted.

Preserved generation, installed-system payload, drive, battery and software
boundaries. A300 height/runtime and Warthog weight/runtime plus Ridgeback weight
conflicts stay explicit. Observer IP55 is a design claim, not certification.
Generic Husky candidate links expanded without changing its reviewed family
decision or asserting an exact generation. Seven application/software/integration
references held without standalone cards. No current stock, complete historical
lineup or independent performance certification inferred. Original 1961 source
identities, 132 name decisions and strict three/nine gaps preserved.

308 unit tests / 23 files passed. Initial 24 Clearpath browser cases: 22 passed,
two mobile A300 cases exposed genuine overflow (402 vs 375 px). Added
overflow-wrap:anywhere to specification value cells. Rebuilt and passed all
24 Clearpath plus 20 Unitree regression cases, including 20 light/dark axe cases.
554 theme profiles, 76 name profiles, 132 decisions and 592/406/862/132 export rows
checked. Thirteen product pages: 143 values, 103 source badges, 40 omitted blanks,
90 structured properties and 13 unknown prices without structured offers checked.
1707 prior catalog rows and 578 primary records unchanged; eight rows/records
corrected deliberately. All 53 prior field reviews preserved. Repeat import zero
additions. Test lint/format and CSS format passed. Build 2769 pages / about 416 MB;
zero data errors / 583 warnings, including five newly unknown release years.
Catalog script 1338851 bytes / comparison JSON 394253 bytes.
All 174 tracked own test/diagnostic processes closed, no own research helpers,
port 4321 closed, other tasks preserved. Local only. Broader heuristic gap snapshot
still refers to batch-41 catalog; strict current coverage is refreshed.
Artifacts: scratch/competitor-research/primary/batch-42/.


## 2026-11-02 — Competitor batch 43: Pudu variants, category and specification fidelity

Seventeen successful manufacturer/Academy snapshots support nine named hardware
configurations and fifteen corrected existing entries. Five category transfers
from smarthome to commercial preserve stable IDs and existing image paths. Added
266 field decisions on 24 models: 180 documented, 80 not documented, six conflicts.
Overall 1729 models, 600 primary records (474 additions / 126 existing enrichments),
1921 statements, 747 source references; 90 selected models / 774 fields
(522 documented / 232 not documented / 18 conflicting / two roadmap), 28 company
focus reviews. Only product-source link underlining changed in frontend markup; no JavaScript
changes, blocked-host retry or form submission.

Standard/lifting, upright/underride, fork and screen SKUs retain distinct identities.
Partial charging is 0%-90%, not full charging. Runtime retains load/mode conditions;
T300 12 h unloaded vs 8 h fully loaded is a condition, not a conflict. BellaBot
capacity is 40 kg total / 10 kg per tray, not four 40 kg trays. Pro dish recognition
remains in development. PuduBot 2 marketing/manual charge and lower-speed differences,
BellaBot runtime/speed, KettyBot Pro clearance and CC1 runtime conflicts remain
explicit. Do not invert the unusual PuduBot 2 12 h empty / 15 h loaded product-page
claim or transfer it to exact manual SKUs. CC1 mode tests use low gear / 100%-10%
state of charge; its general 3-8 h line conflicts with 9 h silent mode. Optional
accessory mass is not robot mass; FlashBot Arm delivery capacity is not arm payload.
Unsupported prices, numeric values and eight prior launch years removed. Original
1961 identities, 132 name decisions and strict three/nine gaps unchanged. Twelve
other primary-sourced Pudu products await field reviews; D1/SwiftBot outside scope.
Full historical coverage, availability, independent performance and ranking unproven.

314 unit tests / 23 files pass. Initial run: 313 pass / one alias-duplicate failure;
parentheses-stripping normalized two screen SKUs to the family. Explicit PDFD12/
PDFD22 display names now omit parentheses; IDs/hardware boundaries unchanged.
Full rerun passes. Initial browser run: 18 passed / eight axe failures found source links identified
only by color. Underlined source links and replaced technical source labels with
readable manufacturer/manual titles. Rebuilt and passed all 26 Pudu plus 24 Clearpath
cases, including sixteen light/dark axe checks. Prior browser results remain history. Checked 24 product pages,
266 fields, 210 badges, 56 omitted blanks, 184 structured properties and 24 unknown
prices without offers; 554 theme / 76 name profiles / 132 decisions and
592/406/862/132 export rows. 1705 old rows, 576 primary records and all 66 previous
field reviews unchanged. Fifteen rows/records deliberately corrected. Repeat import
zero additions. Build 2778 pages / about 417 MB; data audit zero errors / 600 warnings
(nine new unknown and eight removed unsupported release years explain +17).
Test lint/format passed. Catalog script 1358591 bytes; evidence JSON
429661 bytes. All 182 tracked own test processes closed,
no own research helpers, port 4321 closed, other tasks preserved. Local only.
Artifacts: scratch/competitor-research/primary/batch-43/.


## 2026-11-02 — Pudu cleaning, mowing and D5 variant evidence (batch 44)

Twelve existing catalog/highlight records corrected from ten saved manufacturer
HTML snapshots; all ten SHA-256 hashes checked. Eleven successful HTTP fetches
include an unused D5.js response whose body was not retained by the HTML collector.
That endpoint is not used as evidence. No new robot cards or category moves.
1,717 other catalog rows preserve their values; cleaning/outdoor add optional
workingWidth and areaRate columns. All 90 prior specification reviews, 1,961
source identities and 132 name decisions preserved. Reimport: zero additions.

152 selected fields on twelve models: 106 documented, 44 not documented, two
conflicting (BG1/Pro charging branches overlap at exactly 180 V). Separate BG1
speeds; Pro/Disc weight, battery, modes and scrubbing width; ET1 task widths and
optional advertising; MT1 Max robot versus emptying-station mass; MT1 Vac filter
options and hard-floor runtime. GT3 per-charge area does not become an hourly
rate. GT5/GT7 working rates remain manufacturer claims and fast chargers optional;
GT7 does not inherit another model's IP rating. D5/D5-W retain exact variant step,
grade and battery-inclusive mass. Generic speed is omitted, dated USD 80000/85000
storefront variant prices retain fulfillment/bundle/tax/stock caveats. No
unsupported launch years. Preserved hand-vacuum, reel-pattern and developer-control
functions remain in searchable primary highlights.

Working width and hourly area rate render in product tables, Product structured
properties and comparison, with English/German labels and existing fallback for
other UI languages. Comparison sources now underlined. All 38 primary-sourced
Pudu entries have selected reviews; D1/SwiftBot legacy entries remain outside
that set. Catalog remains 1,729 rows and 600 highlight records. Current evidence:
1,940 statements / 745 product-source references; 102 models / 926 selected fields
(628 documented, 276 not documented, 20 conflicting, two roadmap). 28 company
focus records; only Pudu extended. Original three identity gaps and nine unclear
listings remain. Historical lineup, every competitor detail page, independent
performance, current availability and market leadership remain unproven.

Validation: 320 unit tests / 23 files; 46 desktop/mobile browser cases (28 Pudu,
18 existing comparison), all pass; 16 light/dark axe cases. Build 2,778 pages,
approximately 417 MB; data audit zero errors / 602 warnings, two new unknown
release-year warnings after unsupported D5 dates removed. Lint and formatting
pass. Rendered checks: 554 theme profiles, 76 name profiles, 132 identity decisions,
12 product pages; exports 592/406/862/132 rows. New fields: 152 checks, 118 source
badges, 34 omitted blank values, 106 structured properties, two numeric structured
offers and ten unknown prices without offers. Public evidence delivery matches all
600 highlight records and 926 field statuses; private research metadata excluded.
Catalog script 1384232 bytes; evidence JSON 449601 bytes.
All 91 tracked own test processes closed; no own research helpers;
port 4321 closed and other task resources preserved. Local changes only.
Artifacts: scratch/competitor-research/primary/batch-44/.


## 2026-11-02 — KEENON configurations, XMAN posters and water capacity (batch 45)

Added XMAN-F1; corrected 13 existing rows and moved T8/T10/W3 from smarthome
to commercial without changing IDs/images. T8 gains primary highlights. Fourteen
selected reviews / 170 fields: 101 documented, 66 not documented, three conflicting.
Preserved 1,716 other prior rows, all 102 prior field reviews, 28 company focus
records, 1,961 source identities and 132 source-name decisions. Cleaning adds an
optional waterTankCapacity field, rendered in detail/structured data/comparison
with English/German labels and existing fallback; unreviewed values stay blank.

Sources: 18 HTTP-200 HTML snapshots (14 used products, homepage, three leads),
three HTTP-404 legacy routes. All 21 HTML hashes and five poster hashes checked.
R1/F1 poster OCR is explicitly disclosed: wheeled R1 174 cm / 110 kg / 36 DoF;
bipedal F1 175 cm / 68 kg / 43 DoF, both counts include two six-DoF hands.
Persona birthdays are not exact release dates. R1 year uses its earlier
manufacturer announcement; F1 year remains blank. XMAN-L1, X101 and M102 remain
company-level research leads without verified model cards. X101/M102 share generic
hospital logistics body text and identical banner bytes. C25/G2/M2 404s do not
establish discontinuation. Availability, exact task autonomy and independent
physical measurements remain unverified; temporary OCR environment removed.

C30 dry modes and C40 sweeping/scrubbing endurance remain separate. C55 tank
headline 110 L differs from 60 L clean plus 47 L wastewater; retain conflict.
Theoretical area rates, task widths, per-charge area, optional building stations,
mode runtime and hot battery swaps stay qualified. T9/T10 charge times are
15–100% powered on; T11 has no numeric charging time. W3 unsupported waterproof
copy removed and adjustable compartments qualified. S100 eight-hour endurance is
conditioned below 100 kg; metric 90 cm passage disagrees with 29.53 inches.
S300 low-chassis/overall-height/configuration basis remains unresolved; six-hour
runtime is full-load. Safety, disinfection and fast-deployment claims are not
independent certification or medical efficacy. Original three model-identity and
nine unclear-listing gaps unchanged; broader completeness and leadership unproven.

Current catalog: 1,730 rows, 602 primary-highlight records (475 additions / 127
existing enrichments), 1,975 statements / 748 product-source references, 29 company
focus records. 116 models / 1,096 selected fields: 729 documented, 342 not documented,
23 conflicting, two roadmap. KEENON: 17 rows / 15 with primary highlights / 14 with
selected reviews. C25 and legacy G2/M2 remain outside this field-review set.

Validation: 328 unit tests / 24 files. Browser first run 52 pass / two failures
from a new T8 test expecting the wrong category URL. Corrected selector to the
existing /?category=commercial link; two targeted desktop/mobile rechecks pass,
application unchanged. All 54 cases pass (36 KEENON + 18 existing comparison),
including 20 light/dark axe cases. Lint/format pass. Build 2,779 pages, approximately
418 MB; data audit zero errors / 607 warnings, including four removed unsupported
years and one new unknown F1 year. Reimport zero additions. Rendered checks: 554
theme profiles, 76 name profiles, 132 identity decisions, 14 product pages and
592/406/862/132 export rows. New field delivery: 170 checks, 117 source badges,
52 omitted blanks, 101 structured properties; one R1 release-year additional row
uses linked announcement evidence in highlights without its own field badge.
All 14 unknown prices omit structured offers. Exact public evidence delivery
checks all 602 highlight records and 1,096 field statuses; private research
metadata excluded. Catalog script 1400813 bytes, evidence JSON 477801 bytes.
All 134 tracked own test processes closed, no own research helpers,
port 4321 closed; original research snapshots and other tasks preserved. Local only.
Artifacts: scratch/competitor-research/primary/batch-45/.


## 2026-11-02 — Gausium variants and documented Gaussian alias

Corrected twelve existing Gausium rows and added eleven explicitly named
configurations. Twenty-three current catalog entries have 307 selected field
decisions: 185 documented, 116 not documented, six conflicting. All 1,718 other
previous rows, 116 previous specification reviews, 29 company reviews, 1,961 source
identities and 132 name decisions preserved. No category transfers.

A manufacturer post dated 2022-11-14 explicitly identifies Gaussian Robotics as
an alias of Gausium. Combined the two source company groups, preserving original
names and source URLs. Old profile has a static redirect to the canonical Gausium
page; old URL excluded from sitemap and canonical link verified. This is a brand
alias, not a verified legal merger. Now 591 source groups, 1,034 profiles (629 with
models/405 without), 553 theme profiles and 30 company focus reviews.

Variant boundaries: Beetle Standard/Pro named runtimes versus conflicting family
overview; Mira/Marvel mode-specific lower bounds without invented maxima;
Omnie roller optional 780-mm sweeping coverage distinct from 406-mm wet scrub
width, disc sweeping still roadmap; PhanShop Max lacks merchandise tray and no
touch function is asserted. Scrubber 50 provider-specific Pro SKU lacks an exact
brush-table mapping and retains fourteen not-documented decisions. Scrubber 75 S/P
physical values explicitly shared family evidence; cleaning/driving slopes and
optional station/radar package ambiguity retained. Vacuum 40 Diffuser reservoir
is humidification water and eighteen hours is dry mopping. Historical X1/X1 Pro
cargo is thirty kg across three trays, ten per tray; current availability unknown.

Six conflicts retained: Beetle family runtime, Mira speed unit pair, Marvel and
Phantas area-rate unit pairs, Sweeper 111 passage unit pair and battery/runtime
label mismatch. Arithmetic checks do not independently establish which unit is
correct. Phantas Extra exact table/generation mapping remains unverified; no
extra model card. Unsupported Phantas release year removed. All reviewed Gausium
prices and release years unknown. Archived 28 successful HTML and four public
JSON bodies plus three unused guessed 404 routes; all 35 body hashes verified.
Manufacturer alias quote and resolved Delivery X1 evidence URL verified. No forms.

Current totals: 1,741 catalog entries, 614 primary-highlight records (486 additions,
128 existing enrichments), 2,054 statements and 783 source references. Selected
specification reviews: 139 models/1,403 fields (914 documented, 458 not documented,
29 conflicting, two roadmap). Three original identity gaps and nine unclear
listings remain; complete historical lineup, all competitor detail pages,
independent product performance and measured market leadership unproven.

Validation: 339 unit tests in 25 files; all 160 browser cases (36 new Gausium,
106 existing brands, 18 existing comparison), including sixteen light/dark axe
cases across desktop/mobile. Initial run: 154 passed, six failed due to test
assumptions: obsolete BellaBot wording, net versus manufacturer unladen mass,
and a supposed highlight-only phrase already present in the description. Updated
tests, selected a true highlight-only display restriction and reran all six
affected desktop/mobile cases successfully. Application/data unchanged in recheck.
Changed-file lint and format pass. Build 2,789 pages,
approximately 419 MB; audit zero errors/619 warnings. Twelve new warnings are
unknown release years: eleven additions and one removed unsupported old year.
Rendered/export checks: 553 theme profiles, 76 name profiles, 132 decisions,
23 product pages and 591/406/862/132 export rows. All 307 new field values checked:
214 source badges, 93 omitted blanks, 191 structured properties. Twenty-three
unknown prices omit structured offers. Public comparison evidence matches all
614 highlight records and 1,403 field statuses; private research metadata absent.
Catalog script 1420310 bytes; evidence JSON 539709 bytes.
Reimport zero additions. All 276 tracked own test processes closed, no own
research helpers and port 4321 closed. Other tasks preserved. Local only.
Artifacts: scratch/competitor-research/primary/batch-46/.


## 2026-11-02 — IPLUSMOBOT configurations and distinct comparison measurements

Corrected 22 existing rows and added eleven named configurations: EMMA 2000L,
six further FOLA models, Luna 30T, LDT1500-OMNI, autonomous NERA-P200-DS3 chassis
and explicitly labeled EMMA-T/400L drawing configuration. Thirty-three selected
reviews/564 fields: 299 documented, 246 not documented, nineteen conflicting.
All 1,719 other prior rows preserved apart from six empty optional commercial
columns; 139 previous model reviews, 30 company reviews, 1,961 source identities,
132 name decisions and 591 source groups preserved. Three existing family
resolutions (EMMA L/FOLA/LUNA) extended with eight primary-backed models; family
status and original URLs retained. All 429 catalog models mapped to original
source mentions have dated highlights; no complete historic lineup assertion.
New company focus separates
robot hardware, integration chassis, NERA-C controller and four software offerings.

Added navigation accuracy, docking accuracy, drive mode, lift travel, maximum
fork height and arm reach to detail tables, structured Product properties and
comparison, with German/English labels and existing fallback. QR-assisted docking
is not general navigation precision. Runtime lower bounds do not become maxima;
empty/full speeds, minimum/maximum fork heights and lift travel remain separate.
EMMA 400L 75-mm travel and 2000L undocumented full-load speed retained. FOLA table
columns checked using positioned PDF text. Nineteen conflicts include dimensional,
imperial-unit, speed-order, payload/runtime-headline, aisle and height/travel
label disagreements. LUNA region/navigation/docking differences remain explicit;
30T does not inherit 5T/20T specifications. NERA arm load/reach and drivetrain
are exact configuration facts; vision execution claim retains its stated condition.
LDT does not inherit neighboring application runtimes. Chassis optional counterweight
and absent endurance retained. Tug drawing 300-kg load stays distinct from the
wider <=800-kg family. No independent certification, availability or performance asserted.

Fifteen saved HTTP body hashes checked: fourteen HTML and one twelve-page APAC
PDF; thirteen primary snapshots used. Two guessed PDF paths redirect to HTML and
are unused as product evidence. PDF text and four positioned-text pages checked;
six new FOLA columns/30 source cells, 2000L column, tug drawing label and 30T name/
payload verified. Image inspection unavailable, not claimed. No forms submitted.

Totals: 1,752 catalog entries, 625 primary-highlight records (497 additions/128
existing enrichments), 2,151 statements/816 source references; 172 models/1,967
selected fields (1,213 documented/704 not documented/48 conflicting/two roadmap).
31 company focus records. Three original model identities and nine unclear listings
remain; complete historical/regional inventory, all competitor detail pages and
measured market leadership unproven.

Validation: 352 unit tests/26 files. Initial 350 pass/one fail due to stale
aggregate expectations, then 351 pass after correction. Added one family-link
regression and final full 352-test run passes. All 98 browser cases pass: 44 IPLUSMOBOT,
36 existing Gausium and 18 existing comparison, including 32 desktop/mobile light/
dark axe cases. Lint/format pass. Build 2,800 pages/~421 MB; audit zero errors/630
warnings, eleven new unknown release years. Rendered/export checks: 553 theme
profiles, 76 name profiles, 132 decisions, 33 product pages, 591/406/862/132 rows. Three expanded family export rows checked
for eight added models, primary claims and selected-field reviews. This final
resolution/export change has no frontend imports; the tested build/catalog/evidence
payload stays unchanged. All 564 fields checked: 351 source badges, 213 omitted blanks, 318 structured
properties; 33 unknown prices omit offers. Public evidence matches 625 highlight
records/1,967 field statuses, private metadata excluded. Catalog script
1482455 bytes; evidence JSON 641933 bytes.
Reimport zero additions. All 159 tracked own test processes closed, no own research
helpers, port 4321 closed; other tasks preserved. Local only.
Artifacts: scratch/competitor-research/primary/batch-47/.


## 2026-11-02 — Bear Robotics exact models, operating conditions and partner attribution

Corrected nine existing Bear rows and added Servi mini, Servi Clean, Servi Clean Max
and LG B9. B9 remains LG hardware with Bear integration-partner evidence. Thirteen
selected reviews/167 fields: 114 documented, 52 not documented, one conflicting.
All 1,743 other prior rows, 172 previous reviews, 31 company focuses, 1,961 source
identities, 97 family resolutions and 132 name decisions preserved. Servi Plus
moves to commercial with its route/ID/image retained; unsupported price/fixed
endurance removed. Exact size/mass, safe-mode speed and threshold limits come
from its manual, with 10-12 h web versus 8-12 h average manual endurance retained
as a conflict. Carti 100 three-hour charging is explicitly 1%-75%; safe/max speed
and per-shelf/total load remain distinct. Mini table assignment verified from its
own HTML grouping, separate from Servi 30-kg/1046-mm values.

Five Low-Profile tables checked: QR docking versus SLAM navigation, standard and
optional CE heights, separate 1000s/1000 envelopes and charging bounds. No 15-cm
robot height inferred from docking-clearance marketing. Clean versus Max task
runtimes, widths, dust/water capacities and surface classes remain separate.
B9 cleaning area is not hourly throughput, spare batteries not single-charge
24/7 endurance, and lb versus L collection claims not silently equated. Family
milestones do not date separately named 1000s/Max variants. Company focus retains
provisional Kinisi launch limits pending primary hardware-identity reconciliation.

Twelve saved HTTP bodies: nine HTML/three PDFs; eleven primary snapshots used.
Carti manual page 11 and Servi Plus pages 10/38 checked. Two-page image-only
trifold brochure saved but unused as product evidence; no image/OCR inspection
claimed. No forms submitted or known blocked hosts retried.

Totals: 1,756 catalog entries; 629 highlight records (501 additions/128 existing
model enrichments), 2,185 claims/833 source references, 185 models/2,134 selected
fields (1,327 documented/756 not documented/49 conflicting/two roadmap), 32 company
focuses. Original three model identities/nine unclear listings, all BuyAndRent
detail-page content, wider historical/regional coverage and market leadership remain open.

Validation: 363 unit tests/27 files. Ninety-two browser cases checked (30 Bear/LG,
44 IPLUSMOBOT, 18 comparison), including 28 desktop/mobile light/dark axe cases.
Initial 90 pass/two fail because the new German test expected the English partner
source label; corrected only the test expectation and both targeted cases pass.
Lint/format pass. Build 2,804 pages/~422 MB; audit zero errors/626 warnings (four
fewer). Rendered/export checks: 553 themed profiles, 76 name profiles, 132 decisions,
13 product pages and 591/406/862/132 export rows. Six Bear source rows/nine unique
models checked for exact field/status/evidence serialization; initial checker had
incorrectly expected four rows, now corrected. All 167 selected fields agree:
119 source badges, 39 omitted blanks, nine year rows, 106 structured properties.
Thirteen unknown prices omit offers. Public JSON fully reconciled; private
metadata excluded. Catalog script 1491413 bytes; evidence JSON 675480 bytes.
Reimport zero additions. All 180 tracked own processes closed, no own research
helpers, port 4321 closed; other tasks preserved. Local only.
Artifacts: scratch/competitor-research/primary/batch-48/.


## 2026-11-02 — Enabled Robotics integrated transport, arm and marker measurements

Reviewed twelve existing integrations against the current linked specification
sheets: 192 fields, 120 documented/72 not documented, no new hardware. Added
transportPayload and visionPrecision to detail/structured/comparison delivery,
with German/English labels and existing fallback. Exact Standard/ESD product
numbers are searchable. Arm load/reach differs from freight and bare-base ratings.
Marker-relative 1 mm does not become navigation/docking/arm repeatability. Estimated
operation over 100%-10% charge differs from daily utilization and recharge time.
Family masses/footprints and component IP ratings retain scope. Exact price, year,
full-charge time and unconditional maximum endurance remain undocumented.

Current family-name correspondence MC250/ER-FLEX and MC600/ER-MAX does not map
every historical arm/coating/controller package. ER-ABILITY, ER-ORGANIZER and
ER-CONNECT remain software. Updated the existing Enabled company focus; 31 other
focuses, 185 previous reviews, 1,744 other catalog rows, 1,961 source identities,
97 family resolutions and 132 name decisions preserved. Two optional columns are
empty for other commercial models. No current inventory/certification/unique
market-advantage assertion.

Eight new saved HTTP bodies: six HTML/two one-page PDFs linked from product pages.
Seven new primary snapshots used. Thirty-one cells checked through positioned PDF
text; no image inspection or form submission. Four prior company references kept:
two historical PDF bodies hash-checked, two legacy MiR Go extracted-text/metadata
snapshots have no saved raw HTML body and cannot have their recorded body hashes
rechecked. Not newly fetched or dated. Current exact field claims use the newly
saved integration datasheets.

Totals stay 1,756 models/629 highlight records (501 additions/128 existing
model enrichments), now 2,233 statements/845 references; 197 models/2,326 selected
fields (1,447 documented/828 not documented/49 conflicting/two roadmap), 32 company
focuses. Original three model identities/nine unclear listings, BuyAndRent detail
content, wider historical/regional manufacturer verification and leadership remain open.

Validation: all 374 unit tests/28 files and 80 browser cases pass first run
(32 Enabled, 30 Bear/LG, 18 comparison), including 24 desktop/mobile light/dark
axe cases. Lint/format pass. Build 2,804 pages/~422 MB; audit zero errors/626
warnings. Rendered/export checks: 553 themes, 76 name profiles, 132 decisions,
twelve product pages, 591/406/862/132 export rows. Two source rows/twelve related
integrations checked for exact field/status/evidence serialization. All 192 fields
agree: 132 source badges/60 omitted blanks/120 structured properties, twelve
unknown prices without offers. Public payload reconciled; internal metadata excluded.
Catalog script 1514906 bytes/evidence JSON 733720 bytes. Reimport zero additions.
All 133 tracked own processes closed, no own research helpers, port 4321 closed;
other tasks preserved. Local only. Artifacts: scratch/competitor-research/primary/batch-49/.


## 2026-11-02 — Rainbow arm reach, source conflicts and quadruped boundaries

Reviewed thirteen existing arms and RBQ-10: 209 selected fields, 111 documented,
92 not documented and six conflicting. No new robot cards; 1,742 other rows remain
semantically unchanged. Added optional robotic-arm.armReach, using existing detail,
structured-data and comparison support. Preserved 197 earlier field reviews,
including RB-Y1; 32 company focuses, 1,961 source identities, 97 family resolutions
and 132 name decisions. Added one scoped Rainbow company focus.

Retained two 850/927.7 mm narrative/table reach conflicts, RB5-850's 5 kg/6.6 lb
payload discrepancy and RB30-1400's 71 kg/158 lb mass discrepancy. RBQ walking is
6 versus 9 km/h and step height 20 versus 25 cm; running up to 14 km/h retains its
mode. Gradients 45%/20% are percentages. Two-hour/up-to-four-hour operation has no
stated workload/test conditions. Optional LiDAR/LTE/surveillance/wireless charging
remain configuration dependent; automatic charging does not give recharge duration.

Mounting footprint is not a full arm envelope; arm and controller physical data
remain separate. Repeatability is not absolute accuracy. Only four exact model
tables supply numeric TCP speed; angular speed is not converted. Exact IP classes
remain separate. RB16-900's linked query returns the homepage with HTTP 200:
family-card facts remain useful but missing exact-model IP/speed remain unknown.
N-series hygiene/certification/first-market wording stays attributed without an
independent certificate or regional-package audit. Adjacent RBY/RBM/ASTRO navigation
names are leads, not newly verified hardware. Historical developer evidence unchanged.

Seventeen saved HTML bodies hash checked, fifteen primary snapshots used (thirteen
exact model pages/two arm families). Thirteen arm cards and 122 extracted facts
checked against the bodies. Broken query/additional RBQ family retained as context.
Thirty gated download links recorded only: no form submitted, no gated resource
requested, no image inspection claimed. No known blocked hosts retried.

Totals: 1,756 model/configuration entries, 629 highlights, 2,263 statements/857
references; 211 models/2,535 selected fields (1,558 documented, 920 unknown, 55
conflicting, two roadmap), 33 company focuses. Three original unresolved model
identities, nine unclear listings, BuyAndRent detail content, wider manufacturer
verification and measured leadership remain open. Local only.

Validation: 386 unit tests/29 files, eighty distinct browser cases pass (30 Rainbow,
32 Enabled, eighteen comparison), including 28 desktop/mobile light/dark axe cases.
Initial run: 78 passed/two new assertions failed because an empty IP cell has no
source badge. Adjusted assertions to verify the empty cell and visible source
limitation; both targeted cases pass. No product/source-code change needed.
Lint/format pass; build 2,804 pages/~422 MB; audit zero errors/626 warnings.
Rendered/export checks cover 553 themes, 76 name profiles, 132 name decisions,
fourteen products and 591/406/862/132 export rows; three Rainbow source rows contain
all fourteen selected targets and field evidence. Exact 209 field values checked:
103 badges, 78 omitted blanks, fourteen descriptions/fourteen websites, 89 structured
properties, fourteen unknown prices without offers. Public payload reconciled with
no private metadata. Catalog script 1517763 bytes, evidence JSON 779931 bytes.
Reimport zero additions. All 168 tracked own processes closed, no own research
helpers, port 4321 closed; other tasks preserved. Artifacts: scratch/competitor-research/primary/batch-50/.


## 2026-11-02 — Elephant Robotics generations, operating modes and companion evidence

Twelve existing models corrected with 199 selected decisions: 75 documented,
122 unknown, two conflicting. No new model cards/category transfers. Existing
myCobot 280 M5 gains first dated primary highlights; eleven records updated.
1,744 other rows, 211 earlier reviews, 33 company focuses, 1,961 source identities,
97 family resolutions and 132 name decisions preserved. Added one company focus
and optional humanoid.armReach using existing detail/structured/comparison support.

Original myAGV mass/dimensions retain overview/spec conflicts. Work, standby and
charge intervals remain separate. Pi/JN 2023 columns give 4.16 kg/5 kg payload,
181-minute navigation and 328-minute standby; original speed/charge not inherited.
Controller/camera columns, optional arm/vision kits and inconsistent computing
labels retain scope. myCobot lifespan/joint angular speeds do not become battery
runtime/TCP speed. Mercury A1/B1/X1 remain 7/17/19-DOF arm/torso/mobile platforms;
1 kg is not doubled, B1 radius is not inherited by X1, current controller wording
does not map all previous hardware. Price examples stay dated/region-qualified in
highlights, without universal numeric offers.

International MARS-1001 manual supports MarsCat 2.9 kg, sixteen joints, age 12+,
pose-specific tail-excluded dimensions, two-hour active/three-to-four-hour regular
motion and three-hour recharge. Ambiguous second standing-length label not repaired
by inference. MetaCat documents touch/voice/head/tail/eye/charging interactions;
legacy ten-hour endurance removed. No MarsCat walking/SDK, therapeutic effect or
LLM edition equivalence inferred. Existing metaCat AI remains unreviewed after its
old URL returns 404, not proof of discontinuation. Search-only metaDog/metaPanda
leads not imported: first detail received 429, further shop requests stopped.

Twenty-five saved bodies hash checked: 21 successful HTML, one HTML 404, three PDFs.
Twenty-one primary snapshots used including two text PDFs. Checked sixteen AGV
header/cells, three Mercury model tables, six positioned MarsCat PDF label/value
pairs, and selected MetaCat USD159 Ragdoll/no-suit non-Americas quote. Image-only
Quick Guide unused; no visual inspection claimed. Later plain-text 429 has retained
text/metadata but no saved raw body, so no rechecked raw hash claimed for it.

Totals: 1,756 models, 630 highlights (501 additions/129 existing enrichments),
2,279 statements/867 references; 223 models/2,734 selected fields (1,633 documented,
1,042 unknown, 57 conflicting, two roadmap), 34 company focuses. Original three
model identities/nine unclear listings, BuyAndRent detail content, wider manufacturer
verification and leadership remain open. Local only.

All 398 unit tests/30 files and eighty browser cases pass initial run (32 Elephant,
30 Rainbow, eighteen comparison), including 28 desktop/mobile light/dark axe cases.
Lint/format pass; build 2,804 pages/~422 MB; data zero errors/631 warnings, five new
unknown release-year warnings. Rendered/export checks: 553 theme profiles, 76 name
profiles, 132 decisions, twelve products, 591/406/862/132 export rows; six Elephant
source rows/nine targets. Three additional reviewed models are not original-source
mention targets; coverage not inflated. Exact 199 values checked: 65 badges,
110 omitted blanks, twelve descriptions/twelve websites, 52 structured properties,
twelve unknown region-specific totals without universal offers. Public payload
reconciled; internal metadata excluded. Catalog 1523493 bytes / evidence 825388 bytes.
Reimport zero additions. All 137 tracked own processes closed, no own research
helpers, port 4321 closed; other tasks preserved. Artifacts: scratch/competitor-research/primary/batch-51/.


## 2026-11-02 Fdata model columns, sensor packages and units

Ten existing configurations were corrected and four explicitly named models added:
workbook-only A012 Mini and secondary-domain A005, A006 and A010 product pages.
Fourteen selected reviews contain 238 decisions: 106 documented, 130 unknown and
two conflicting. The prior 223 reviews, 34 company focuses and 1,746 other catalog
rows are unchanged. One company focus was added. The A012 family mapping now
includes Mini; 96 other mappings are unchanged, with 97 total. Original source
mentions now reach 430 catalog targets, all with dated highlights. No category,
optional-column or source-code changes were required.

The A012 Plus/Pro/Omni/base/Mini payloads of 100/80/60/60/30 kg remain specific
to their named columns. Legacy A012/Plus listing payloads of 50/80 kg differ from
current tables' 60/100 kg. Current values retain conflict status without claiming
a reviewed revision mapping. Horizontal movement is explicit for Omni and optional
for Plus. A generic 62 cm passage claim does not verify clearance for a 700 mm base.
A011/A020/A025 operating claims lack workload conditions; range and battery capacity
remain separate. A025 R/F/N sensor checks differ; autonomy depends on configuration.

The A026 PDF gives 450 kg, 1300 x 850 x 820 mm, 1000 kg load, longitudinal/lateral
speed up to 2 m/s and IP65. Full-load terrain limits are ten degrees and 100 mm.
Chassis clearance of at least 270 mm differs from 130 mm tire-assembly clearance.
Noise below 80 dB is estimated and sensor mounting is marked TBD. Battery capacity,
charging method and remote-control range do not establish endurance or precision.
A005's kilometre-labeled battery life is range, with separate four-hour charging
and loaded versus empty terrain limits. A006 40/70 Ah rows give 35/60 km range and
unitless battery-life cells of 7/12, which are not verified hours. A010 steering,
temperature and indicators do not establish navigation/docking accuracy or IP class.
Prices and first-release years remain unknown; secondary-domain product pages do
not certify present stock or delivery configuration.

A004/A008/A009 links redirect to differently named current pages. No exact identity,
renaming or discontinuation is inferred; three additional unresolved leads remain.
Broader service/mower and historical/regional lineups remain unreviewed. Both domains
use the same contact email and the older listing links current A012/Plus pages;
this does not establish legal succession or complete configuration equivalence.

Nineteen response-body hashes were rechecked: 16 HTML, two workbooks and one PDF.
Fifteen current primary snapshots were used. Checks include 63 nonempty XLSX cells,
56 A025 header/card values, two expanded A006 rowspan rows and seven positioned
PDF label/value pairs. No visual inspection is claimed; image-only A020/A025 specs
were unused. No forms were submitted and previously blocked hosts were not retried.

Current catalog: 1,760 models/configurations, 634 highlight records (505 additions
and 129 existing enrichments), 2,299 statements and 890 source references. There
are 237 reviews with 2,972 selected fields: 1,739 documented, 1,172 unknown, 59
conflicting and two roadmap fields; 35 company focuses. All 408 unit tests across
31 files and 78 browser cases passed initially: 28 Fdata, 32 Elephant and 18
comparison, including 28 desktop/mobile light/dark Axe cases. Lint and formatting
passed; build: 2,808 pages, approximately 423 MB; data audit: zero errors and 635
warnings. Only four new release-year warnings were added. HTML/export checks cover
553 theme profiles, 76 name profiles, 132 decisions, 14 products and 591/406/862/132
export rows. Six Fdata source rows link eleven reviewed targets. Public evidence:
877,773 bytes; catalog script: 1,529,508 bytes. Own processes were closed and port
4321 was free; other tasks were preserved. Changes remain local.

Three original model identities, nine listings, all 862 BuyAndRent detail contents,
broader manufacturer verification and measured market leadership remain open.


## 2026-11-02 Productive Robotics arm, process and cell review

Eight existing configurations corrected; seven named offerings added: Blaze Max,
Blaze Laser Max, Blaze MAX Mobile, Blaze LF, Blaze MIG Cell, Blaze Laser Cell and
Assemble & Weld Cell. These are three Max configurations, a package, two cells and
a custom coordinated system, not seven unique bare-arm designs. Fifteen selected
reviews contain 255 decisions: 88 documented, 163 unknown and four conflicting.
One company focus added; 1,752 other earlier catalog rows preserved.

OB7/Stretch list 22 kg paired with inconsistent 58 lb values; retain conflict status.
Five OB7 load/reach pairs stay distinct from flange dimensions and IP-rated controller,
tablet and optional gripper components. Blaze standard/Max reach of 1550/2159 mm
includes the torch. Laser Max and Max Laser are two official orderings of the same
linked larger offering. Welding feed up to 2540 mm/min now has a separate weldSpeed
field; the laser PDF's 0-2+ m/s and maximum 2 m/s free-motion labels remain conflicting.
Shared two-size 22 kg/58 lb mass is not assigned to either size. Miller's 64 kg
source mass, input power and duty cycle are not full robot mass, payload or endurance.
The OptX 2 kW input is 32 A in the PDF versus 20 A in LF/Mobile option tables;
controller Ethernet labels also differ. No revision mapping is certified.

Mobile frames have locking wheels, without verified autonomous driving. LF/MIG/
Laser work tables of 4 ft x 8 ft have a separate workTableSize field; overall enclosure
and system dimensions stay unknown. Component IP ratings do not rate a complete cell.
Custom Assemble & Weld systems coordinate OB7 holding with Blaze welding without
summing or inheriting unspecified arm versions, degrees of freedom or payloads.
Blaze Duo's series reference describes two stations but links the MIG Cell page,
whose warranty line names Laser Cell. Identity, layout and warranty scope remain
unresolved; no separate Duo card. Safety, PPE, warranty and productivity statements
remain manufacturer claims, not independent approvals or audited contracts.

Both measurements reach detail tables, structured Product properties and comparison
with English/German labels and existing fallback. A real manufacturing/welding
subcategory finds the four named package/cell systems. An initial integration test
revealed its absence; cells were not misclassified as research robots to pass tests.
Removed 151 contradictory missing-value template notes from documented fields in
26 prior Elephant/Fdata reviews, preserving values, statuses, sources, dates and
substantive qualifications. Of 237 prior reviews, 211 are entirely unchanged and
26 have only these note corrections. Eighty-six similar defaults in new reviews were
also cleared. This display correction is not fresh manufacturer verification.

Sixteen saved response hashes rechecked: 15 HTML and one single-page PDF, all used.
Checked 20 labeled OB7 values, seven positioned PDF robot label/value pairs and two
OptX input-current bands, plus size, component, table and Duo link scope. No image
inspection claimed, forms submitted, member manuals requested or blocked hosts retried.
Original inventories, 97 family mappings and 132 description-name decisions preserved.

Current totals: 1,767 models/configurations; 641 highlight records (512 additions,
129 existing enrichments), 2,341 statements and 920 source references. There are
252 models with 3,227 selected fields: 1,827 documented, 1,335 unknown, 63 conflicts
and two roadmap fields; 36 company focuses. All 430 original-mention targets retain
highlights. Three original identities, nine unclear listings, all 862 BuyAndRent
detail contents, wider manufacturer verification and measured leadership remain open.

All 422 unit tests across 32 files pass. All 112 browser cases pass initially:
34 Productive, 28 Fdata, 32 Elephant and 18 comparison, including 40 desktop/mobile
light/dark Axe cases. Earlier unit failures identified the missing category and an
assertion's incorrect assumption that optional notes always contain strings; both
resolved. Lint/format pass; build 2,815 pages/~429 MB; data audit zero errors/642
warnings, with only seven new undocumented-release-year warnings. Rendered checks
cover 15 highlight pages, 41 specification pages/692 fields, 236 source badges,
185 structured properties, 553 theme profiles, 76 name profiles and 132 decisions.
Exports contain 591/406/862/132 rows; eight Productive source rows/targets checked.
Current field/note text for affected reviews also matches 20 export rows covering
28 catalog targets, with exact entries rather than prefix-only comparisons.
Evidence JSON: 923,786 bytes; catalog script: 1,553,986 bytes. Own processes closed,
port 4321 free; other tasks preserved. Local changes only.


## Ergänzung vom 2. November 2026 – Richtech: Gewerbe, Plattformen und Quellenkonflikte

Acht vorhandene Modelle überarbeitet: Dex, Matradee Plus, Pallet Jack, DUST-E MX,
DUST-E S, ADAM, Scorpion und Titan. ADAM/Scorpion stehen nun bei gewerblichen
Getränkerobotern, Titan bei gewerblicher Logistik. IDs, bestehende Modell-URLs und
lokale Bildpfade bleiben erhalten; keine Bildprüfung behauptet. Keine neuen
Modelle angelegt. 1.759 andere Katalogzeilen und alle 252 bisherigen Feldprüfungen
unverändert. Acht neue Prüfungen umfassen 156 Felder: 56 dokumentiert, 93 nicht
dokumentiert, zwei widersprüchlich, fünf Roadmap. Ein Firmenfokus ergänzt.

Dex: stationäre/mobile Plattform, 11 lb je Arm, vier Taskkameras und Jetson Thor.
Mobile Höhe 4 Fuß 6 Zoll, stationär 3 Fuß 7 Zoll; nur Höhe, keine vollständigen
Abmessungen. Vier Stunden Batterie, zwei Stunden Laden sowie Spalt/Schwelle gelten
für mobil. Stationär nutzt externe Versorgung. Die Seite kündigt weiterhin
Roadmap-/Demo-Updates vor dem Start an: diese fünf technischen Werte bleiben als
Roadmap markiert. Keine unbenannten Plattform-SKUs oder bestätigte Lagerverfügbarkeit.

Matradee Plus: 88 lb insgesamt über vier Tabletts, nicht je Tablett; zehn Stunden
Batterie, vier Stunden Laden. Herstellerachsen 22,8 B × 19,2 L × 50,7 H Zoll bleiben
erhalten. Tablett- und Displaymaße sind keine Gesamtgröße. Pallet Jack: 3.307 lb
Nennlast und 8,26 Zoll angegebene angehobene Höhe, ohne belegten Hubweg/Bezugspunkt.
Steigung 5° voll/10° leer; 86,6 Zoll Gangbreite ist kein Radius. Die allgemeine
Positionierangabe ±0,19 Zoll/±1° wird ohne Messmethode nicht zu Andockgenauigkeit.

DUST-E MX: 557 lb ohne Wasser, 20 Zoll Reinigung/30 Zoll Saugleiste, 21.958 ft²/h,
6° Steigung und beschriftete 17/13-gal-Frisch-/Schmutzwassertanks. Gallonenstandard
unbekannt, keine pauschale Literumrechnung. DUST-E S: 13,7 Zoll Bürste/15,7 Zoll
Abzieher, maximal 8.138 ft²/h, sieben Prozent statt Grad und zwei Stunden Laden.
10/15 Liter haben keine Frisch-/Schmutzwasserzuordnung; der 1-Liter-Müllbehälter ist
getrennt. Bürstendruck ist keine Nutzlast, Zubehör/Station keine pauschale Lieferzusage.

ADAM: 11 lb je Arm; die sechs-DoF-Beschriftung nennt keinen Pro-Arm-/Gesamtscope.
Die Größenzeile 19,6 Zoll × 32,6 Zoll × 110 lbs vermischt Maße und Masse. Nur zwei
qualifizierte Maße bleiben mit Konfliktstatus; Gesamtmasse und dritte Abmessung
werden nicht erfunden. Spannweite ist keine radiale Reichweite. Scorpion: sechs
DoF, 11 lb und durchschnittlich eine Minute je Getränk bei einem Standardlayout mit
20 Zutaten. Eine Haupt-/drei Zusatzsprachen sind keine unbegrenzte Sprachabdeckung.
±0,5 Prozent betrifft Zutatenmessung, keine Arm-/Navigationsgenauigkeit.

AC/540 W beziehungsweise AC/380 W und die vom Hersteller behauptete NSF-Zulassung
bleiben getrennt von Batterielaufzeit oder unabhängig geprüften Zertifikaten.
Die ADAM-Fallstudie nennt bis 50 Getränke/Stunde bei einem konkreten Fünf-Getränke-
Menü sowie 1.365 Getränke/32.746 USD in 30 Tagen. Ihre Payback-Texte nennen sowohl
vor fünf Jahren als auch sechs Monate; keine universelle Durchsatz-/ROI-Garantie.
Mietformate ADAM Tisch/klassischer Trailer und Scorpion Tisch/Cybertruck sind
Dienstleistungen, keine weiteren Robotermodelle; kein Preis oder Regionalangebot
erfunden. Unbelegte Erscheinungsjahre von ADAM/Scorpion entfernt.

Titan: zehn bis 24 Stunden abhängig von Nutzung, 5,5 Stunden Laden, IP43 am Körper
und IP66 nur an der Batterie. Die Beschreibung nennt 330 lb, die Tabelle 330–1300 lb,
ohne benannte Varianten-/Lastmoduszuordnung. Nutzlast bleibt widersprüchlich;
keine erfundenen Varianten. ADA-Rampenwerbung ohne Zahl wird nicht zur Gradangabe.

Zwölf HTTP-Körper gehasht: elf HTML und ein siebenseitiges PDF. Elf Quellen verwendet,
50 beschriftete technische Werte mit gespeichertem Text abgeglichen. Der Solutions-
Index liefert trotz HTTP200 keine serverseitigen Produktinhalte; vollständige aktuelle
oder historische Herstellerabdeckung ist damit nicht belegt. Keine Formulare versandt
und keine zuvor gesperrten Hosts erneut angefragt.

Gesamt: 1.767 Modelle/Konfigurationen, 640 Herstellerschreibweisen und 1.034 Profile;
641 Merkmalsdatensätze mit 2.353 Aussagen/923 Quellenreferenzen. 260 Modelle mit
3.383 ausgewählten Feldern: 1.883 dokumentiert, 1.428 unbekannt, 65 widersprüchlich,
sieben Roadmap. 37 Firmenfokus-Prüfungen. Alle 430 Ziele ursprünglicher Nennungen
behalten datierte Merkmale. Quelleninventare, 97 Familienentscheidungen und
132 Beschreibungsnamensentscheidungen erhalten. Drei ursprüngliche Modellidentitäten,
neun Listings, alle 862 BuyAndRent-Detailinhalte und gemessene Marktführerschaft offen.

434 Unit-Tests/33 Dateien bestanden. 84 unterschiedliche Browserfälle bestanden:
32 Richtech, 34 Productive-Regression und 18 Vergleich; darunter 28 Axe-Fälle auf
Desktop/Mobil in Hell/Dunkel. Erster Lauf: 82 bestanden/zwei fehlgeschlagen; der neue
deutsche Vergleichstest erwartete fälschlich Dezimalpunkte. Die Anwendung zeigte
korrekte Dezimalkommas. Test korrigiert, beide betroffenen Fälle erneut bestanden.
Keine Produktänderung dafür erforderlich. Lint/Format bestanden. Build 2.815 Seiten/
rund429 MB; Datenprüfung null Fehler/644 Hinweise. Die zwei neuen Hinweise betreffen
ausschließlich die nun offen ausgewiesenen unbekannten Erscheinungsjahre.

HTML-Abgleich: acht Modellseiten, 156 Feldentscheidungen, 55 Quellenmarkierungen,
85 ausgelassene Leerfelder, 47 strukturierte technische Eigenschaften und36 Merkmals-
sätze sowie Firmenfokus mit acht Karten. Acht ursprüngliche Modell-Exportzeilen/
acht Ziele/156 Feldvorkommen exakt abgeglichen; Gesamt-Exporte591/406/862/132 Zeilen.
Vergleichs-JSON 950.440 Byte, Katalogskript1.556.373 Byte; interne Recherchepfade
bleiben ausgeschlossen. Erneuter Import null Ergänzungen. Eigene Testprozesse,
Browser und Vorschau geschlossen; Port4321 frei. Änderungen nur lokal, kein Commit,
Push oder Deployment. Fortschritt belegt, vollständige Herstellerprüfung und Nr.1
weiterhin unbewiesen.


## Ergänzung vom 2. November 2026 – OrionStar: aktuelle Modelle, Lasten und Reinigungsmodi

Fünf ausdrücklich benannte Modelle ergänzt: GreetingBot AD sowie CleaniBot S55 Pro,
M1, K1 und C5. Acht bestehende englische/chinesische Einträge korrigiert. LuckiBot Pro
und Lucki (Zhaocaibao) von Smart Home nach gewerblicher Zustellung verschoben; IDs,
Modell-URLs und lokale Bilder erhalten. 1.759 andere Katalogzeilen und alle 260 früheren
Feldprüfungen unverändert. 13 neue Prüfungen umfassen 225 Felder: 99 dokumentiert,
126 nicht dokumentiert; keine neuen Konflikt-/Roadmap-Status. Ein Firmenfokus ergänzt.

Alle elf Produktlinks der aktuellen englischen Navigation mit gespeicherten Seiten
abgeglichen: vier Reinigung, drei Zustellung, drei Empfang und CarryBot. CarryBot
nennt D100/D150 als zwei Hardwaremodelle. Zusammen mit dem separat erhaltenen
chinesischen Eintrag ergeben sich 13 geprüfte Katalogeinträge. Die allgemeine
Produktübersicht lässt einzelne Navigationseinträge aus; vollständige historische
Herstellerabdeckung wird nicht behauptet. Software und Zubehör sind keine zusätzlichen
Robotermodelle. Kein EXE-Download oder Programmstart und kein Formularversand.

LuckiBot: 40 kg insgesamt/10 kg je Tablett; Pro: 60 kg insgesamt/15 kg je Tablett,
beides ausdrücklich belegt. Autodoor nennt 20 kg je Tablett ohne Gesamtnutzlast und
69-Liter-Stauraum neben 410×480×315 mm maximalem Einzelstauraum; deren Verhältnis
ist nicht erläutert. Keine Übernahme der offenen Pro-Last oder -Masse. Die drei
englischen Liefermodelle nennen 4, 5 Stunden Laden im ausgeschalteten Zustand.
Chinesisches Zhaocaibao nennt dagegen 4, 5 Stunden am Dock, 5° Steigung und obere
Tabletts 500×420 mm; englisches LuckiBot nennt 500×430 mm. Region-/Revisionsgleichheit
bleibt unbestätigt, deshalb beide bisherigen Identitäten erhalten. Kein chinesischer
Steigungswert auf das englische Modell übertragen. Frühere 12–15 Stunden beim
chinesischen Eintrag durch belegte zehn Stunden im typischen Fahrbetrieb ersetzt.

CarryBot D100: 100 kg und bis neun Stunden; D150: 150 kg und zwölf Stunden. Die
Vergleichsfußnote gilt für 100 kg Last auf Marmorboden. Traglast schließt montierte
Tabletts/Regal ein; 30 kg je Tablett hebt die Gesamtgrenze nicht auf. D150 unterscheidet
48 kg Basis, 58 kg Tabletts und 60 kg mit Regal(48+12). Keine einzelne Familienmasse
gewählt. Gemeinsame Robotermaße 600×525×1377 mm bleiben getrennt vom
405×825×937-mm-Regal; keine abgeleitete Gesamtgröße der Installation. Die detaillierte
Tabelle ist ausdrücklich D150: Maße, Masse, Geschwindigkeit und Ladezeit werden
nicht nach D100 kopiert. CarryBot 1/2/3 sind Tragekonfigurationen unter beiden benannten
Modellen, keine erfundenen zusätzlichen SKUs. Allgemeine 1-cm-Positionierwerbung
wird nicht zur Andockgenauigkeit.

GreetingBot Mini: 21 kg, 410×410×1000 mm, zwölf Stunden typische Fahrt und höchstens
4, 5 Stunden Laden ausgeschaltet. Nova: 56 kg, 558×525×1350 mm, zwölf bis 14 Stunden
und 4, 5 Stunden am Dock. AD: 21, 5-Zoll-Werbedisplay plus 14-Zoll-Touchscreen, acht bis
zehn Stunden; 8 A am Dock ist Stromstärke, keine Ladedauer. Qualitative Zentimeter-
positionierung ist keine exakte±1-cm-Grenze; Gangbreiten sind keine Körpermaße.
Sprachabdeckung, Drittanbieter-LLMs und Softwarezugriff bleiben einsatzabhängige
Herstellerangaben. Unbelegte Startjahre von Pro, Nova und Zhaocaibao entfernt.

S55 Pro: 3, 5 Stunden Power Scrub, 4, 5 Stunden Scrub/Sweep-Vacuum/zusätzlicher
Mop-Modus, 19, 5 Stunden ECO Vacuum und 28 Stunden Dust Mop.28 Stunden gelten nicht
für alle Reinigung. Flächenleistungen 1197/1368 m²/h bleiben modusspezifisch;
Kartierungsfläche ist keine Stundenleistung. Keine Werkzeugbreite aus Körper- oder
Durchfahrtsbreite abgeleitet. M1: 500-mm-Bürste/680-mm-Abzieher, 3, 5 Stunden Schrubben/
acht Stunden Moppen, 35/33 Liter Wasser. K1: 440-mm-Bürste, 420-mm-Körperbreite,
880-mm-Durchfahrtsbreite getrennt; Quelllabels Vacuuming 8h/Mopping 4h unvertauscht.
10 Liter sind Staubbehälter, keine Wassertanks; Wasserstation nicht unterstützt.
C5: 45 Liter Frisch-/45 Liter Abwasser statt 90 Liter Frischwasser. Stationstank 8 Liter,
25 kg Bürstendruck, 10.000 Stunden Lüfterlebensdauer und Stationsleistung 1800 W sind
keine zusätzliche Bordkapazität, Nutzlast, Batterielaufzeit oder Gesamtroboterleistung.
C5-Steigung 5° beladen/8° leer bleibt getrennt. Desinfektion, Zero-Edge, Produktivität,
ROI, Lärm und Sicherheitswerbung sind keine unabhängigen Prüfresultate.

14 gespeicherte HTML-Körper erneut gehasht, alle 14 als Quellen verwendet.56
beschriftete technische Paare, 18 D150-Spezifikationszellen in drei Konfigurationen
sowie zwölf Last-/Laufzeitzellen in sechs D100/D150-Spalten anhand der HTML-Struktur
geprüft. Keine Bildprüfung behauptet. Quelleninventare, 97 Familienentscheidungen
und 132 Beschreibungsnamensentscheidungen erhalten.

Gesamt: 1.772 Modelle/Konfigurationen, 640 Herstellerschreibweisen, 1.034 Profile;
647 datierte Merkmalsdatensätze(517 Ergänzungen/130 bestehende Modelle), 2.389
Aussagen/930 Quellenreferenzen.273 Modelle mit 3608 ausgewählten Feldern: 1982
dokumentiert, 1554 unbekannt, 65 widersprüchlich, sieben Roadmap.38 Firmenfokus-
Prüfungen. Alle 430 Ziele ursprünglicher Modellnennungen behalten datierte Merkmale.
Drei ursprüngliche Identitäten, neun Listings, alle 862 BuyAndRent-Detailinhalte,
weitere Herstellerprüfung und gemessene Marktführerschaft bleiben offen.

447 Unit-Tests/34 Dateien bestanden. Ein neuer Test griff zunächst auf eine
Werteliste statt auf den vorhandenen Einzelwert des Gewerbereinigungsfilters zu;
Test anhand der stabilen Unterkategorie korrigiert.84 verschiedene Browserfälle
bestanden: 34 OrionStar, 32 Richtech-Regression und 18 Vergleich, darunter 28 Axe-Fälle
auf Desktop/Mobil in Hell/Dunkel. Erster Lauf 80 bestanden/vier fehlgeschlagen:
zwei neue Prüfungen nahmen die erste 24-Karten-Seite und die Auswahlreihenfolge
als Vergleichsspaltenfolge an. Tests nutzen nun Herstellerfilter beziehungsweise
Modellüberschriften; alle vier betroffenen Desktop-/Mobilfälle erneut bestanden.
Dafür keine Produktänderung nötig. Lint/Format bestanden. Build 2820 Seiten/rund 429 MB.
Datenprüfung null Fehler/652 Hinweise;acht zusätzliche Hinweise betreffen nur fünf
neue Modelle ohne Startjahr und drei offengelegte bislang unbelegte Startjahre.

HTML-/Exportprüfung: 13 Modellseiten, 225 Feldentscheidungen, 86 Quellenmarkierungen,
113 ausgelassene Leerfelder, 73 strukturierte technische Eigenschaften und 57
Merkmalsätze; ein Firmenfokus mit 13 Karten. Sechs ursprüngliche Modell-Exportzeilen/
sieben Ziele/119 Feldvorkommen exakt geprüft. Gesamt-Exporte 591/406/862/132 Zeilen.
Vergleichs-JSON990.575 Byte, Katalogskript 1.564.093 Byte; interne Recherchemetadaten
nicht ausgeliefert. Erneuter Import null Ergänzungen. Eigene Testprozesse, Browser und
Vorschau geschlossen, Port 4321 frei. Änderungen nur lokal;kein Commit, Push oder
Deployment. Verifizierter Fortschritt, vollständige Prüfung und Nr.1 weiter unbewiesen.


## Ergänzung vom 2. November 2026 – OTTO: Traglast, Ladefenster und Fahrraum

Fünf bestehende Modelle anhand der aktuell verlinkten Herstellerdatenblätter
überarbeitet: OTTO 100, 600, 1200, 1500 und Lifter. Keine zusätzlichen Modelle
oder Kategorieverschiebungen. 110 ausgewählte Feldentscheidungen: 64 dokumentiert,
45 unbekannt und ein Quellenkonflikt. Alle 273 früheren Feldprüfungen sowie 1.767
andere Katalogzeilen inhaltlich erhalten; lediglich zwei leere optionale Spalten
kommen bei anderen gewerblichen Zeilen hinzu. 642 frühere Merkmalsdatensätze bleiben
unverändert, fünf wurden überarbeitet. Ein Firmenfokus ergänzt.

Gangbreite und Wenderadius sind nun eigene Felder auf Modellseiten, in strukturierten
Daten und im Vergleich, mit englischen/deutschen Bezeichnungen und bestehendem
Sprachfallback. Gangbreiten gelten ausdrücklich ohne Nutzlast und je nach Ein- oder
Zweirichtungsverkehr. Drehen auf der Stelle bedeutet keine Null-Freiraum-Garantie.
OTTO 1500 nennt für den Zweirichtungsverkehr 3570 mm und 146 Zoll im selben Blatt;
146 Zoll entsprechen 3708,4 mm. Dieser Widerspruch bleibt beim Wert sichtbar.

OTTO 100 trägt insgesamt 150 kg einschließlich montierter Ausrüstung und Wagen,
OTTO 1500 insgesamt 1900 kg einschließlich Aufbau. Die Modellnummer ist keine
Traglastangabe. Der integrierte Hub von 100 beträgt 62 mm und ist keine maximale
Stapler-Hubhöhe. Laufzeiten von sechs bzw. zehn Stunden für 100/1500 gelten von
90 auf 10 Prozent Ladezustand. Ladezeiten 18/30/30/60 Minuten für 100/600/1200/1500
gelten von 10 auf 90 Prozent. 10.000/6000/3000 Ladezyklen sind Lebensdauerangaben,
keine Betriebsstunden. Für 600/1200 bleibt die Laufzeit unbekannt. Beim 600 stehen
42 A maximale Batterie-Laderate neben einem 100-A-Zubehörladegerät; diese Labels
werden nicht als identische Geräteauswahl behandelt.

Lifter: 1,0 m maximale Hubhöhe autonom und 2,7 m manuell; Wenderadius 1985 mm autonom
und 1420 mm manuell. Lastschwerpunkt 623 mm sowie 183 cm Last-Höhenlimit bei 1000 kg
gegenüber 134 cm bei 1200 kg bleiben getrennt von der Hubhöhe. Bleiakku lädt ungefähr
sechs Stunden, Lithium ungefähr eine Stunde mit 200-A-Supercharger, jeweils 10–90 %.
Die Web-Überschrift von 60 Minuten gilt nicht für jeden Akku. Palettenandocken ±50 mm
steht getrennt vom Absetzen mit Zielmarke (x ±13 mm, y ±10 mm, Winkel ±1°).
Unklare Winkel-/Wiederholgenauigkeitszeichen der anderen vier PDFs werden nicht
zu erfundenen Grad- oder Sigma-Grenzen normalisiert. IP20 gilt belegt nur für
100/1500; Bodenhindernis, Bodenfreiheit und überfahrbarer Spalt bleiben getrennt.

Fleet Manager, Open API/OPC-UA, VDA5050 ohne hier geprüfte Version, Ladegeräte,
HADS, Wagen, Aufbauten und Batterievarianten sind qualifizierte Software-/Zubehör-
oder Konfigurationsangaben. Sie erzeugen keine erfundenen Hardwaremodelle.
Sicherheits-, Normen-, ROI- und Marktführungswerbung bleibt Herstellerangabe.
Keine Formulare übermittelt, keine unabhängige Sicherheits-/Verfügbarkeitsprüfung.

14 gespeicherte HTTP-Körper erneut gehasht und alle als Quellen verwendet:
neun HTML-Seiten sowie fünf PDFs mit zehn Seiten. PDF-/HTML-Text exakt reproduziert;
66 technische Label-Wert-Paare, acht bedingte Gangbreiten und Lifter-Modus-/Akku-/
Lastgrenzen geprüft. Keine visuelle PDF- oder Bildprüfung behauptet.

Aktueller Gesamtbestand: 1.772 Modelle/Konfigurationen, 640 Herstellerschreibweisen,
1.034 Profile, 647 datierte Merkmalsdatensätze (517 Ergänzungen/130 bestehende Modelle),
2405 Aussagen und 935 Quellenreferenzen. 278 Modelle mit 3718 ausgewählten Feldern:
2046 dokumentiert, 1599 unbekannt, 66 widersprüchlich und sieben Roadmap. 39 Firmenfokus-
Prüfungen. Alle 430 Ziele ursprünglicher Modellnennungen behalten datierte Merkmale.
Drei ursprüngliche Identitäten, neun Listings, alle 862 BuyAndRent-Detailinhalte,
weitere Herstellerprüfung und gemessene Marktführerschaft bleiben offen.

459 Unit-Tests in 35 Dateien bestanden. Zwei neue Textprüfungen erwarteten zunächst
fehlende Leerzeichen; Erwartungen anhand der vorhandenen Prosa korrigiert.
80 Browserfälle bestanden: 28 OTTO, 34 OrionStar-Regressionen und 18 Vergleichsfälle,
darunter 28 Axe-Prüfungen auf Desktop/Mobil in Hell/Dunkel. Lint und Format bestanden.
Build: 2820 Seiten, ungefähr 430 MB; Datenprüfung null Fehler und unverändert
652 Hinweise. Fünf Modellseiten/110 Felder/60 Quellenmarkierungen/40 ausgelassene
Leerfelder/55 strukturierte Eigenschaften/31 Merkmalsätze und ein Firmenfokus mit
fünf Karten geprüft. Fünf ursprüngliche Modell-Exportzeilen mit 110 Feldvorkommen
exakt abgeglichen; Gesamt-Exporte 591/406/862/132 Zeilen. Vergleichs-JSON 1.013.708 Byte,
Katalogskript 1.579.797 Byte. Interne Recherchemetadaten werden nicht ausgeliefert.
Erneuter Import: null Ergänzungen. Eigene Testprozesse, Browser und Vorschau geschlossen,
Port 4321 frei. Änderungen nur lokal, kein Commit, Push oder Deployment.
Dies ist verifizierter Fortschritt; vollständige Herstellerprüfung und Nr. 1 bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Robotize: aktuelle GoPal-Modelle und historischer GoPal 400

Sechs bestehende Modelle anhand der aktuell verlinkten Herstellerseiten und Broschüre
überarbeitet: E22, E24, E24W, U22W, U24W und P35. GoPal 400 als separat benanntes
historisches Modell ergänzt: Die Herstellerchronik nennt den Start im Dezember 2017.
Kein technischer Wert wird aus der Modellnummer 400 oder aus aktuellen Nachfolgern
abgeleitet. Historische Traglast, Masse, Maße, Laufzeit und Generationsgleichheit bleiben
unbekannt. Alle 278 früheren Feldprüfungen und 1.766 andere Katalogzeilen unverändert.
641 frühere Merkmalsdatensätze erhalten, sechs überarbeitet, einer ergänzt.
Ein Firmenfokus ergänzt. Sieben neue Prüfungen umfassen 154 Felder: 46 dokumentiert,
79 unbekannt und 29 widersprüchlich.

Wiederholte Seitenübersichten nennen dieselben 187 kg, 1400×860×340 mm und 500 kg
bei verschiedenen Modellen. Die ausdrücklich benannten Spezifikationsabschnitte und
die sechs Broschürenspalten nennen stattdessen E24W 215 kg, U22W/U24W 242 kg und
P35 120 kg sowie abweichende Maße, Lasten und Geschwindigkeiten. Ausgewählte Werte
folgen benannten Abschnitten und Broschüre; die Unterschiede bleiben beim Wert sichtbar.
U24W nennt 1200 kg einschließlich Palette. P35 nennt 300 kg einschließlich Aufsatz;
Homepage-Karte 250 kg und Seitenübersicht 500 kg bleiben als Konflikt erhalten.
Höhere Lasten bestimmter Partnerkonfigurationen sind keine allgemeine Traglastfreigabe.

E22/E24 unterstützen Euro-/Halb-Euro-Paletten, E24W zusätzlich Industrie-Euro-Paletten;
U22W/U24W UK-/US-Paletten. Palettenzustand und Lastgeometrie bleiben Bedingungen.
2400 mm Lasthöhe ist weder Roboterhöhe noch maximale Bord-Hubhöhe. P35-Karosserie
960×660×295 mm und 120 kg bleiben getrennt von der 20-kg-Ladestation mit
505×790×258 mm und 1000 W. P35 hat 24-V-LFP und induktives Hauptladen sowie USB-C
für Notladen; Palettenmodelle haben 48-V-LFP und physische Dock-/Steckerschnittstellen.

Palettenseiten nennen 45 Minuten für Vollladung; die Broschüre nennt 45 Minuten von
30 auf 95 Prozent. P35-Seite und Broschüre nennen 45 beziehungsweise 55 Minuten für
dasselbe 30–95-Prozent-Fenster. Keine stille Harmonisierung. Laufzeit 6–14 Stunden
beziehungsweise P35 8–14 Stunden bleibt lastabhängig; 20 km Distanz, 5000 Ladezyklen
und 24/7/365-Flottenbetrieb sind keine zusätzlichen garantierten Betriebsstunden.

Gangbreiten trennen Minimum, Zweirichtungsverkehr, Ideal-/Hochgeschwindigkeitsbereich
und Türdurchfahrt. P35-Seite nennt 960 mm Gang und 760 mm Durchfahrt, Broschüre
1000 mm und 900 mm für das nackte AMR ohne Aufbau. P35-Radius 660 mm steht neben
1300 mm Broschüren-Drehdurchmesser; imperial erscheinen dort außerdem 3,3 bzw.
4,27 Fuß. Andere Seiten verwenden Durchmesser-Labels für Werte vom Roboterzentrum,
während die Broschüre 1900/2000 mm Drehdurchmesser nennt. Keine stillschweigende
Halbierung oder Freiraumgarantie. ±2 Prozent Steigung sind keine ±2 Grad. Bodenstufen,
Reibung, Temperatur und Feuchte bleiben getrennt von einer unbelegten IP-Klasse.

GoControl, Paletten-/Hub-/Förderstationen, IO Box, Tasten, Ladegeräte und Aufsätze von
Nord Modules/ROEQ bleiben Software, Zubehör oder Partnerintegration. Stationäre
Transaktionshöhen und 1500-kg-Förderstationen werden nicht zu Bord-Hub-/Traglastwerten.
Sicherheits-, Freigabe-, ROI- und Marktführungswerbung bleibt Herstellerpositionierung.
Keine Formulare übermittelt und keine unabhängige Leistungs-/Verfügbarkeitsprüfung.

Zwölf HTTP-Körper erneut gehasht: elf HTML-Seiten und eine 15-seitige Broschüre.
HTML-/PDF-Text exakt reproduziert, 30 HTML-Spezifikationsbeziehungen, 84 Werte in
sechs positionierten PDF-Modellspalten sowie 33 Werte in drei Fahrraum-Spalten geprüft.
Bildinput ist nicht verfügbar; keine visuelle PDF-/Bildprüfung behauptet.

Die erste Browserprüfung bestand 80 von 82 Fällen. Zwei Desktop-/Mobilprüfungen
zum historischen Modell deckten eine echte Darstellungslücke auf: zusätzliche
Spezifikationszeilen wie Startjahre hatten keine Feldkennung/Quellenmarkierung.
SpecsTable ergänzt diese Metadaten jetzt auch für zusätzliche geprüfte Felder.
Nach neuem Build wurden alle 82 Fälle erneut bestanden: 36 Robotize, 28 OTTO-
Regressionen und 18 Vergleichsfälle, einschließlich 28 Axe-Prüfungen in Hell/Dunkel
auf Desktop/Mobil. Alle 470 Unit-Tests in 36 Dateien, Lint und Format bestanden.
Übergreifender HTML-Abgleich: 285 Modellseiten, 3872 ausgewählte Feldwerte und
2254 sichtbare technische Werte mit Quellenmetadaten; alle 20 geprüften
Startjahre haben jetzt Quellenmarkierungen. Frühere Herstellerquellen wurden dabei
nicht erneut abgerufen oder unabhängig zertifiziert.

Neue Modell-/Exportprüfung: sieben Seiten, 154 Felder, 68 Quellenmarkierungen,
72 ausgelassene Leerfelder, 60 strukturierte Eigenschaften und 40 Merkmalsätze.
Ein Firmenfokus mit sieben Karten; sechs ursprüngliche Modell-Exportzeilen mit
132 Feldvorkommen exakt abgeglichen. Gesamt-Exporte unverändert 591/406/862/132 Zeilen.
Vergleichs-JSON 1054235 Byte, Katalogskript 1583066 Byte; keine internen
Recherchemetadaten ausgeliefert. Build 2821 Seiten, ungefähr 430 MB. Datenprüfung
null Fehler und unverändert 652 Hinweise. Erneuter Import: null Ergänzungen.

Gesamt: 1.773 Modelle/Konfigurationen, 640 Herstellerschreibweisen, 1.034 Profile,
648 datierte Merkmalsdatensätze (518 Ergänzungen/130 bestehende Modelle), 2427 Aussagen
und 949 Quellenreferenzen. 285 Modelle mit 3872 ausgewählten Feldern: 2092 dokumentiert,
1678 unbekannt, 95 widersprüchlich und sieben Roadmap. 40 Firmenfokus-Prüfungen.
Alle 430 Ziele ursprünglicher Modellnennungen behalten datierte Merkmale.
Drei ursprüngliche Identitäten, neun Listings, alle 862 BuyAndRent-Detailinhalte,
weitere Herstellerprüfung und gemessene Marktführerschaft bleiben offen.
Eigene Browser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.
Änderungen nur lokal, kein Commit, Push oder Deployment. Verifizierter Fortschritt;
vollständige Herstellerprüfung und Nr. 1 bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Deep Trekker und Pipe Trekker

Sieben bestehende Deep-Trekker-ROVs/Crawler korrigiert; VAC MAX, Pipe Trekker A-150/A-200
und die historisch benannten DTG2, DTG2 Worker, DTX2, DT320 und DT340 ergänzt.
Pipe Trekker bleibt als vom Hersteller ausdrücklich eingeführte Marke separat.
13 benannte S/X- und ROV-Pakete innerhalb der jeweiligen Modellbelege erhalten;
Ausstattungspakete werden nicht zu zusätzlichen Robotergrundmodellen.
15 Feldprüfungen mit 300 Entscheidungen: 68 dokumentiert, 220 unbekannt, zwölf Konflikte.
Zwei Firmenfokusse ergänzt; 285 frühere Prüfungen und 1.766 andere Katalogzeilen erhalten.

Konflikte bleiben sichtbar: SPECTRA 3,5/4 Knoten, PHOTON 200/215 Grad Kameradrehung,
MAG/VAC 406 mm/13 Zoll Breite, VAC 4K/1080p und Pipe Trekker fünf/acht Stunden Akku.
A-200-S-Shop wiederholt A-150-Masse, -Maße und -Geschwindigkeit; S/X-Elektriktabellen
widersprechen A-200-Seite bei Kapazität und Antriebsabdichtung. A-150, A-200 und DT320
haben weitere unvereinbare Maßpaare. Keine stille Reparatur oder Spezifikationsvererbung.
VAC MAX 36-Zoll-Kopfbreite ist keine Karosseriebreite. Generische angehängte Tabellen
belegen nicht die vollständige breitere Baugruppe; kein errechnetes Tempo von 24 m/min.
IP68-Kabeltrommel, Kabelbruchlast und Zug-/Schubkraft sind keine Roboter-IP-/Nutzlastwerte.
Controllerlaufzeit, Hybridstrom, Kabellänge und Tauchtiefe bleiben getrennt.
Historische Artikeldaten werden nicht zu Startjahren. Ein alter Worker-URL liefert jetzt
einen aktuellen SAR-Ratgeber; tatsächlicher Seiteninhalt hat Vorrang vor altem Slug.
Vier Manual-Landings führen nur zum Support-Shell; keine Handbücher daraus zertifiziert.

37 gespeicherte HTML-Körper gehasht und Text reproduziert; 92 konkrete Belege geprüft:
59 sichtbare Tabellenpaare, 20 eingebettete Shop-Werte, vier Paketlisten, PHOTON-Spalten-
beziehung, Product/FAQ-Daten und sechs Textstellen. 26 tatsächlich verwendete Snapshots.
Keine Bildsichtprüfung, Formularübermittlung oder weiteren Zugriffe auf blockierte Hosts.
15 gerenderte Modellseiten: 300 Felder, 64 Quellenmarkierungen, 206 ausgelassene Leerfelder,
49 strukturierte Werte und 68 Merkmalsätze. Zwei Firmenfokusse geprüft; sieben ursprüngliche
Modell-Exportziele mit 140 Feldvorkommen abgeglichen. Gesamt-Exporte 591/406/862/132 Zeilen.
Globaler Metadatenabgleich: 300 Seiten, 4172 Feldwerte und 2318 sichtbare technische Werte
mit Quellenmarkierung; 20 geprüfte Startjahre weiterhin belegt.

Alle 482 Unit-Tests in 37 Dateien bestanden; Lint und Format bestanden. 102 verschiedene
Browserfälle bestanden: 48 Deep/Pipe Trekker, 36 Robotize- und 18 Vergleichsregressionen,
einschließlich 36 Axe-Prüfungen auf Desktop/Mobil in Hell/Dunkel. Erster Lauf 100 bestanden,
zwei Fehler in einem neuen Testselektor (Karte und Favoritenknopf tragen dieselbe ID).
Selektor auf Roboterkarten begrenzt, beide Fälle erneut bestanden; keine Produktänderung.
Build 2830 Seiten, ungefähr 431 MB; null Datenfehler, 660 Hinweise (+8 fehlende Startjahre).
Erneuter Import null Ergänzungen. Vergleichs-JSON 1119217 Byte und
Katalogskript 1593285 Byte; interne Recherchemetadaten bleiben serverseitig.
Eigene Browser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Stand: 1.781 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1.035 Profile,
656 datierte Merkmalsdatensätze (526 Ergänzungen/130 bestehende Modelle), 2474 Aussagen,
970 Quellenreferenzen und 42 Firmenfokus-Prüfungen. 300 Modelle mit 4172 ausgewählten
Feldern: 2160 dokumentiert, 1898 unbekannt, 107 widersprüchlich und sieben Roadmap.
Drei ursprüngliche Modellidentitäten, neun Listings und alle 862 BuyAndRent-Detailinhalte
bleiben offen. Vollständige historische Prüfung und Marktführerschaft sind unbewiesen.
Änderungen nur lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Addverb Lagerrobotik und Physical AI

25 ausdrücklich benannte Modelle/Systeme ergänzt und neun vorhandene Einträge
korrigiert. Der Addverb-Bestand umfasst jetzt 34 Datensätze in vier Kategorien.
Dazu gehören Dynamo 100/200/500/1000/1500/2500; FlowT und 1000/1530/1520;
Dash Line/Tug; Veloce; Zippy 6/10/30/40/X; Cruiser/360; Multi-Pro; Quadron;
Medius; Skyron; SortIE; Travect; Trakr und 5/20; Elixis/Elixis-W; Syncro 5/10; JEN 6.
34 neue Modellprüfungen umfassen 697 Felder: 298 dokumentiert, 379 unbekannt,
18 widersprüchlich und zwei Zielwerte/Roadmap. 300 vorherige Prüfungen und
1.772 andere Katalogzeilen bleiben unverändert. Ein Firmenfokus ergänzt.

Die FlowT-1530-Auswahl verlinkt ein ausdrücklich FlowT 1520 genanntes Dokument.
Beide Namen bleiben separat, ohne Übernahme von 1520-Masse, -Maßen oder -Hubhöhe
in den 1530. 1000/2000-kg-FlowT-Angaben bleiben ein Quellenkonflikt. Dynamo 2500
nennt im PDF omnidirektionalen, im Web differentiellen Antrieb. Leere/beladene
Geschwindigkeit, 0–80-/20–80-Prozent-Ladefenster, Chassis-/Zuglast, Palettenmaße,
Systemdurchsatz und Einzelroboterleistung bleiben getrennt. Veloce und Zippy nennen
Wendedurchmesser, keine belegten Radien. Rackhöhen und AC-/Stromschienenbetrieb
werden nicht zu Karosseriemaßen oder Akkulaufzeiten. Skyron-Temperatur ist kein Gelände.

Physical-AI-Varianten wurden im öffentlichen Selektor getrennt aufgerufen:
Trakr 5/20, Syncro 5/10 und Elixis/Elixis-W. Trakr 5 hat widersprüchliche
Desktop-/Responsive-Akkuangaben und 120/170-mm-Stufenwerte. IP67 und automatisches
Laden sind optional. Elixis ist zweibeinig (75 kg), Elixis-W fährt auf Rädern (210 kg).
Laufzeiten sind ausdrücklich Zielwerte; fünf Kilogramm pro Arm werden nicht
unqualifiziert zur Gesamtnutzlast. Syncro-Controller sind keine Armabmessungen.
JEN 6 enthält einen kopierten Quadruped-Text; daraus entstehen keine 20 kg Armnutzlast.
Generische Trakr-/FlowT-Familien erhalten keine übernommenen Variantendaten.

30 gespeicherte HTML-Seiten, 24 PDFs mit 91 Seiten, drei JavaScript-Dateien und
15 öffentliche, rein lesende Selektorantworten: alle 72 Körper gehasht und die
HTML-/PDF-Textextraktion reproduziert. Sechs gerenderte Variantenstände gehasht.
178 konkrete Quellenbeziehungen geprüft: 90 positionierte PDF-Zeilen, 15 benannte
Selektoren, sechs Standnachweise, 30 sichtbare Label-/Wertpaare, 30 DOM-Eigenschafts-
zeilen, drei widersprechende Responsive-Zeilen und vier JEN-6-Spezifikationspaare.
Alle 30 HTML-Seiten samt Selektornamen haben explizite Klassifikationsentscheidungen.
Cruiser-Palettenklassen, Multi-Pro-Größen und Zippy-Bandanbauten bleiben Konfigurationen.
Movect/Mobinity/Concinity/Optimus sind Software; Rapido, Corzie, konventionelle
Förderer und eigenständige Lifte sind angrenzende Angebote. Deren Selektornamen
wurden inventarisiert; keine Vollprüfung sämtlicher angrenzender Variantendetails.
Keine Kontakt-/Angebots-/Abonnement-/Download-Einwilligungsformulare übermittelt.
Keine Bildsichtprüfung oder weiteren Zugriffe auf bereits blockierte Hosts.

34 gerenderte Modellseiten abgeglichen: 697 Felder, 284 Quellenmarkierungen,
345 ausgelassene Leerfelder, 247 strukturierte Werte und 146 Merkmalsätze.
Firmenfokus und Firmenexport stimmen überein; ein ursprünglicher Modell-Exportdatensatz
enthält sechs Dynamo-Ziele mit 132 Feldvorkommen. Gesamtexporte 591/406/862/132 Zeilen.
Globaler Abgleich: 334 Modellseiten, 4869 Feldwerte und 2602 sichtbare technische
Werte mit Quellenmarkierung; 20 geprüfte Startjahre weiter belegt.
Vergleichs-JSON 1248216 Byte und Katalogskript 1622120 Byte.

494 Unit-Tests in 38 Dateien bestanden; Lint und Format bestanden. Abschließender
Browserlauf vollständig bestanden: 100 Fälle, davon 34 Addverb, 48 Deep/Pipe-Trekker-
und 18 Vergleichsregressionen, einschließlich 32 Axe-Prüfungen auf Desktop/Mobil
in Hell/Dunkel. Erster Lauf: 96 bestanden, vier mobile Überläufe im neuen Firmenfokus.
Ursache war eine lange Aufzählung ohne Leerzeichen. Prosa lesbar aufgelöst, neu gebaut
und alle 100 Fälle erneut bestanden. Keine Quellcodeänderung hierfür erforderlich.
Build 2855 Seiten, etwa 435 MB; null Datenfehler, 687 Hinweise (+27 fehlende Startjahre:
25 neue Modelle und zwei gelöschte unbelegte Altjahre). Erneuter Import null Ergänzungen.
Eigene Browser, Vorschauen und Hilfsprozesse geschlossen; Port 4321 frei.

Aktueller Gesamtstand: 1.806 Modelle/Konfigurationen, 641 Herstellerschreibweisen,
1.035 Profile, 683 datierte Merkmalsdatensätze (551 neue/132 bestehende Modelle),
2599 Aussagen, 1024 Quellenreferenzen und 43 Firmenfokus-Prüfungen.
334 ausgewählte Modellprüfungen mit 4869 Feldern: 2458 dokumentiert, 2277 unbekannt,
125 widersprüchlich, neun Roadmap. Drei ursprüngliche Modellidentitäten, neun Listings
und sämtliche 862 BuyAndRent-Detailinhalte bleiben offen. Vollständige historische
Herstellerprüfung, exklusive USPs und Marktführerschaft sind nicht nachgewiesen.
Änderungen lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – DEEP Robotics Plattformen und Editionen

Lite3 Venture, Lite3 EDU und DR02 Standard ergänzt; neun bestehende Einträge
korrigiert: LYNX M20/M20 Pro, X30/X30 Pro, Lite3, Lynx S10/M20S und DR02/DR02 Pro.
Zwölf neue ausgewählte Prüfungen umfassen 183 Felder: 54 dokumentiert, 129 unbekannt.
334 frühere Prüfungen und 1.797 andere Katalogzeilen unverändert. Ein Firmenfokus
ergänzt. Jueying, Jueying Mini, X20 und Yunju bleiben außerhalb dieser Prüfung;
die frühere DR01-Prüfung bleibt erhalten. M20_Piper bleibt ein Integrationshinweis.

M20/M20 Pro: 33 kg einschließlich Akku, 15 kg effektive Last. Zwei Meter pro Sekunde
sind Arbeitsgeschwindigkeit; fünf sind ein nicht verfügbares Laborextrem, die Fußnote
nennt drei als Produktgrenze. Diese unterschiedlichen Bedingungen sind kein
gleichartiger Feldkonflikt. Leere/beladene Laufzeit und Reichweite bleiben getrennt.
Optionale Ladestation und zukünftige OTA-Funktionen erhalten keine Verfügbarkeitszusage.
Grafische Häkchen im PDF wurden nicht als Merkmale transkribiert.
X30: 56 kg und 1000 × 470 × 595 mm; Pro: 59 kg und 1000 × 470 × 715 mm.
Gemeinsame PDF-Zeilen bleiben als solche qualifiziert; Pro-Navigation wird nicht
automatisch zur Basisausstattung. Keine frei übertragene Fünf-Meter-Geschwindigkeit.

Lite3: Elf Kilogramm betreffen die benannte Körperbaugruppe, nicht das ganze Gerät.
Beinmassen werden wegen überlappender Bauteile nicht addiert; Körpermaße und
Koordinatenversätze ergeben keine belegte Standhöhe. Venture-SDK und EDU-Lightning-LM
haben eigene Bedingungen; Jetson AGX und Livox Mid360 sind keine universelle
Lieferumfangszusage. S10/M20S haben benannte SDK-Unterstützung ohne geerbte M20-Ratings.
DR02 Pro hat 31 Gelenke mit derzeit gesperrten Halsachsen 29/30; Standard hat 21
ohne Hals. DR02 bleibt eine eigene Familienreferenz. Eine externe Versorgung mit
72 V, 5 A und 360 W ist kein Akkukapazitäts- oder Ladezeitbeleg. Aus Bildern wurden
keine mechanischen Maße abgeschrieben. Unbelegte Preise, Jahres- und Leistungswerte
wurden in den ausgewählten Feldern entfernt.

54 gespeicherte HTTP-Körper gehasht und Extraktion reproduziert: 44 erfolgreich
(26 HTML, zwei PDFs mit vier Seiten, 15 Klartextdateien und ein JavaScript).
Zehn Produktrouten lieferten HTTP 520 und dienen nicht als Belege; danach keine
weiteren Zugriffe auf diesen Produkthost. 64 Quellenbeziehungen geprüft:
41 positionierte PDF-Spalten-/Zeilenbezüge, sieben HTML-Tabellenzeilen und 16
benannte SDK-/Herstellertextstellen. 20 verwendete Primär-Snapshot-URLs.
Alle 54 Antworten klassifiziert, zwölf Modellentscheidungen gespeichert.
Keine Bildsichtprüfung, Formularübermittlung oder Ausführung von Herstellercode.

Zwölf gerenderte Modellseiten: 183 Feldwerte, 42 Quellenmarkierungen, 117 ausgelassene
Leerfelder, 30 strukturierte Werte und 55 Merkmalsätze. Firmenfokus und Export
abgeglichen; sechs ursprüngliche Modell-Exportziele mit 91 Feldvorkommen geprüft.
Gesamtexporte weiterhin 591/406/862/132 Zeilen. Globaler Metadatenabgleich:
346 Seiten, 5052 Felder, 2644 sichtbare technische Werte mit Quellenstatus,
2097 ausgelassene Leer-/NA-Felder und 20 belegte Startjahre. Dieser Abgleich prüft
die Ausgabe vorhandener Reviews, nicht erneut die früheren Herstellerquellen.
Vergleichs-JSON 1295135 Byte; Katalogskript 1625505 Byte.

504 Unit-Tests in 39 Dateien bestanden; Lint und Format bestanden. 84 Browserfälle
bestanden: 32 DEEP Robotics, 34 Addverb- und 18 Vergleichsregressionen, darunter
28 Axe-Prüfungen auf Desktop/Mobil in Hell/Dunkel. Build 2858 Seiten, etwa 436 MB.
Null Datenfehler, 696 Hinweise (+9 fehlende Startjahre: drei neue Modelle und sechs
gelöschte unbelegte Altjahre). Erneuter Import null Ergänzungen. Keine UI-Codeänderung.
Eigene Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Gesamtstand: 1.809 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1.035 Profile,
688 datierte Merkmalsdatensätze (554 neue/134 bestehende Modelle), 2634 Aussagen,
1048 Quellenreferenzen und 44 Firmenfokus-Prüfungen. 346 ausgewählte Modellprüfungen
mit 5052 Feldern: 2512 dokumentiert, 2406 unbekannt, 125 widersprüchlich, neun Roadmap.
Drei ursprüngliche Modellidentitäten, neun Listings und sämtliche 862 BuyAndRent-
Detailinhalte bleiben offen. Historische Vollständigkeit, exklusive USPs und
Marktführerschaft sind nicht nachgewiesen. Änderungen lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – PAL Robotics Plattformen und Konfigurationen

Elf benannte Plattformen/Konfigurationen ergänzt: TIAGo Base, OMNI Base, Base AI,
Base Delivery, Base Actuated Conveyor, Base Shelf, TIAGo LITE, TIAGo++, Pro Arm,
TIAGo Head und REEM-C. Sechs bestehende Einträge korrigiert: TIAGo, TIAGo Pro,
StockBot, Kangaroo, TALOS und ARI. Keine Kategorienübertragung. Alle elf Plattformen
des gespeicherten Herstellerverzeichnisses sind vertreten; sechs weitere Namen sind
historische, Editions- oder ausgestattete Konfigurationen, keine sechs neuen Grunddesigns.
17 ausgewählte Modellprüfungen mit 287 Feldern: 95 dokumentiert, 184 unbekannt,
acht widersprüchlich. Die frühere Kangaroo-Prüfung mit acht Feldern wurde auf
16 Felder erweitert; ihre Quelle bleibt im Snapshot erhalten. 345 andere Reviews,
1.803 andere Katalogzeilen, 44 Firmenfokusse und ursprüngliche Quellenidentitäten
unverändert. Netto 16 zusätzliche Reviews und 279 zusätzliche Felder. Ein Firmenfokus ergänzt.

TIAGo Pro: 80 kg, 120–155 cm, 23 DoF inklusive Standardgreifern und vier Stunden
im verlinkten Datenblatt gelten für die dokumentierte Konfiguration. 92/236 cm
vertikale/horizontale Reichweite gehören zum mobilen Roboter; 96/240 cm gehören
zur ausdrücklich getrennten Teleoperation Station. Der bisherige Konfliktvermerk
war daher zu weitgehend. Drei Kilogramm pro ausgestrecktem Arm schließen den
Endeffektor aus; Torsohub 35 cm. Keine Verdopplung zur ungeprüften Gesamtnutzlast.
Die Station bleibt Zubehör. TIAGo mit einem/zwei Akkus hat 4–5/8–10 Stunden;
generische 70 kg und Familienwerte werden nicht in LITE oder ++ kopiert.
Die ++-Spalte nennt zwei Siebenachsarme, keine vollständige Gesamtgelenkzahl.

StockBot: ~10 Stunden und fünf Stunden Vollladung in der Webtabelle stehen gegen
zwölf und vier Stunden im Datenblatt/FAQ. Beide Felder bleiben widersprüchlich.
RFID-Erfassung bis vier Meter und optische Erfassung bis 2,4 Meter sind getrennte
Messgrößen; 0,5-Meter-Artikelortung ist keine Dockinggenauigkeit. Marketingzähler
werden nicht zu unabhängigen Genauigkeits- oder Laufzeitprüfungen.
Kangaroo: Armvarianten mit 4/5/7 DoF tragen ausgestreckt 7/5/3 kg; beidhändig
stehen separat 30/28/25 kg. Die beidhändigen Werte sind keine Summe ausgestreckter
Armlasten. 50–65 kg und 14–40 DoF bleiben konfigurationsabhängig. Die fehlerhafte
976-Ah-Schreibweise im PDF wird nicht als Akkukapazität übernommen.
TALOS: 1,5 Stunden Gehen versus drei Stunden Bereitschaft; Drehmomentsensor-Aussage
mit Ausnahme für Kopf, Handgelenke und Greifer. Separate Handgelenk-Kraftsensoren
heben diese Ausnahme nicht auf. ARI: 73/75 cm Tiefe bleiben ein Quellenkonflikt;
unbelegte 60 kg entfernt. Sprache, Navigation, Docking und Cloud-Funktionen bleiben
paketabhängig; Hersteller-Datenschutzwerbung ist keine unabhängige Rechtsprüfung.

TIAGo Base: 70/100 kg Nutzlast und 1/1,5 m/s Maximalgeschwindigkeit sind zwischen
aktueller Seite, verlinktem PDF und Herstellerartikel nicht auf eine exakte Revision
aufgelöst. Ein-Zentimeter-Stufe und etwa sechs Prozent Steigung im FAQ sind keine
150-mm-Stufe; die PDF-Beschriftung kombiniert Spalt/Stufe und bleibt unklar.
OMNI Base nennt 150 mm Spaltbreite, keine vertikale Stufenhöhe. Bare-Base-Werte
werden nicht auf Delivery-, Conveyor- oder Shelf-Gesamtsysteme übertragen.
Der Base-AI-Artikel von 2023 dokumentiert 150 kg, 245° LiDAR und zwei RGB-D-Kameras.
Seine alte Produktadresse leitet zur heutigen 100-kg-OMNI-Base-Seite um; daraus
folgen weder identische Hardware noch aktuelle Verfügbarkeit.

TIAGo Pro Arm: 9,5 kg, sieben Achsen; 110 cm Webhöhe gegen 105 cm im Datenblatt.
Sieben Kilogramm Spitzen- und sechs Kilogramm Dauerlast sind in der Tabelle
qualifiziert; die zusätzliche Drei-Kilogramm-Angabe im Überblick hat keine erklärte
Beziehung dazu. Diese Unsicherheit bleibt markiert. 75 cm horizontale Reichweite
und 95 cm unqualifizierte Reichweite werden nicht als gleiche Messung ausgegeben.
24-Stunden-Betriebszyklus bei externer Versorgung ist keine Akkulaufzeit.
Visual Programming ist im Überblick als künftig verfügbar gekennzeichnet.
TIAGo Head ist eine separat versorgte, zweiachsige HRI-Plattform, keine passive
Ersatzhülle. Sie und REEM-C sind im aktuellen Verzeichnis als Legacy klassifiziert.
Head-Paketpreise von 12.950/19.900 EUR im gespeicherten PDF enthalten zehn Prozent
Bildungsrabatt und schließen Versand/Steuern/Zölle aus; keine aktuellen allgemeinen
Offers daraus erzeugt. REEM-C: drei Stunden Gehen/sechs Bereitschaft getrennt;
Konzeption 2013 ist kein belegtes erstes kommerzielles Startjahr.

33 gespeicherte HTTP-Körper gehasht und Text reproduziert: 18 HTML und 15 PDF-Körper
mit 43 Seiten, einschließlich zweier Routen auf dasselbe Pro-PDF. Eindeutig sind
14 PDFs mit 41 Seiten. 88 konkrete Quellenbeziehungen geprüft: 63 Tabellenzeilen,
eine getrennte Zubehörsektion, 17 benannte Textbezüge, sechs positionierte PDF-
Regionen und eine finale Weiterleitungsadresse. 26 verwendete Primär-Snapshot-URLs.
Alle 33 Antworten, elf Hersteller-Verzeichnisplattformen und sechs weitere Namen
haben Klassifikationsentscheidungen. Keine Bildsichtprüfung, Formularübermittlung,
Preis-/Demoanfrage oder erneuten Zugriffe auf zuvor blockierte Hosts.

17 gerenderte Modellseiten: 287 Felder, 86 Quellenmarkierungen, 167 ausgelassene
Leerfelder, 63 strukturierte Werte und 59 Merkmalsätze. Firmenfokus und Export
abgeglichen; vier ursprüngliche Modell-Exportziele mit 68 Feldvorkommen geprüft.
Gesamtexporte 591/406/862/132 Zeilen. Globaler Metadatenabgleich: 362 Modellseiten,
5331 Felder, 2725 sichtbare technische Werte mit Quellenstatus, 2263 ausgelassene
Leer-/NA-Felder und 20 belegte Startjahre. Frühere Herstellerquellen wurden hierfür
nicht erneut unabhängig geprüft. Vergleichs-JSON 1350855 Byte,
Katalogskript 1638994 Byte; interne Recherchemetadaten bleiben serverseitig.

516 Unit-Tests in 40 Dateien, Lint und Format bestanden. Alle 84 Browserfälle
bestanden: 34 PAL, 32 DEEP-Robotics- und 18 Vergleichsregressionen, einschließlich
28 Axe-Prüfungen auf Desktop/Mobil in Hell/Dunkel. Build 2869 Seiten, etwa 437 MB.
Null Datenfehler, 711 Hinweise (+15 fehlende Startjahre: elf Ergänzungen und vier
entfernte unbelegte Altjahre). Erneuter Import null Ergänzungen. Keine UI-Codeänderung.
Eigene Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Gesamtstand: 1.820 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1.035 Profile,
701 datierte Merkmalsdatensätze (565 neue/136 bestehende Modelle), 2681 Aussagen,
1076 Quellenreferenzen und 45 Firmenfokus-Prüfungen. 362 ausgewählte Modellprüfungen
mit 5331 Feldern: 2601 dokumentiert, 2588 unbekannt, 133 widersprüchlich, neun Roadmap.
Drei ursprüngliche Modellidentitäten, neun Listings und alle 862 BuyAndRent-
Detailinhalte bleiben offen. Vollständige historische Prüfung, unabhängige Leistung,
exklusive USPs und Marktführerschaft sind nicht nachgewiesen. Änderungen lokal;
kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – aktueller Abgleich und gemeinsame Rechercheliste (Batch 62)

Die heuristische Suchliste war seit 1.715 Katalogzeilen nicht aktualisiert. Ein
Collector-Fallback konnte zudem einen gleichen Modellnamen bei einem anderen
Hersteller als exakten Treffer zählen. Der Abgleich verlangt jetzt denselben
Hersteller und ist durch drei zusätzliche Regressionstests abgesichert. Bekannte
Alias-, Familien- und Herstellerkorrekturen bleiben getrennte Prüfentscheidungen.

`pnpm research:refresh` aktualisiert Coverage, Vergleichshinweise und Exporte ohne
HTTP. Der aktuelle Vergleich umfasst 1.820 Zeilen, 641 Herstellerschreibweisen und
633 normalisierte Herstellerschlüssel. Die 114 Modell- und elf Markenkandidaten
sind Suchhinweise; 111 der 114 Modellkandidaten haben bereits eine Prüfentscheidung,
etwa als Alias, Familie, Komponente oder Dienstleistung. Es bleiben drei ungeklärte
ursprüngliche Modellidentitäten und neun Listings. Die Quelldateien einschließlich
ihrer ursprünglichen Abrufdaten und eingebetteten historischen Vergleiche sind unverändert.

Die gemeinsame Rechercheliste unter `data/competitors/research-queue.json` und
`data/competitors/robot-research-queue.csv` erfasst 430 Ziele aus ausdrücklichen
Modellnennungen, 489 einschließlich geprüfter Listing-Auflösungen und 518 mit
geprüften Beschreibungsreferenzen. Sie bewahrt Quelle, Status, Geltungsbereich und
Prüfnotiz. Familien- und Kontextreferenzen werden nicht zu exakten Identitäten.
Alle 518 Ziele haben datierte Merkmalsbelege; 206 haben ausgewählte Feldprüfungen
mit 3.130 Feldern (1.568 dokumentiert, 1.461 unbekannt, 94 widersprüchlich, sieben
Roadmap). 312 Ziele benötigen diese Feldprüfung noch. Von den 591 Quellen-Firmengruppen
haben 44 einen Firmenfokus aus eigenen Quellen; im Gesamtkatalog sind es weiterhin 45.
Die nächste Prüfpriorität ergibt sich aus fehlenden Belegen und Feldprüfungen,
beginnend mit Unitree Robotics, Fourier und Intuitive Surgical. Das misst keinen Marktanteil.

23 Daten-/Belegdateien, alle 1.961 ursprünglichen Quellenidentitäten und sämtliche
bisherigen strengen Coverage-Entscheidungen unverändert geprüft. Exporte weiterhin
591 Firmen, 406 Modell-/Familiennennungen, 862 Listings und 132 Beschreibungsnamen;
die neue Recherche-CSV enthält zusätzlich 518 Zeilen. 525 Unit-Tests in 41 Dateien
und 20 Python-Tests bestanden; ESLint und Formatprüfung der betroffenen Dateien bestanden.
Kein neuer Build oder Browserlauf erforderlich: Diese Änderung betrifft Recherchewerkzeuge
und abgeleitete Arbeitslisten. Die 2.869 Buildseiten, null Datenfehler, 711 Hinweise
und 84 bestandenen Browserfälle bleiben historische Ergebnisse aus Batch 61.

Gesamtbestand unverändert: 1.820 Modelle/Konfigurationen, 1.035 Profile, 701 datierte
Merkmalsdatensätze (565 Ergänzungen und 136 bestehende Modelle), 2.681 Aussagen,
1.076 Quellenreferenzen und 362 ausgewählte Modellprüfungen mit 5.331 Feldern.
Alle 862 BuyAndRent-Detailinhalte bleiben ungeprüft; HTTP 429 wurde nicht erneut
angefragt. Vollständige Herstellerprüfung, exklusive USPs und Marktführerschaft
sind weiterhin nicht nachgewiesen. Eigene Browser/Server wurden nicht gestartet;
141 frühere eigene Testprozesse sind beendet, keine eigenen Recherchehelfer aktiv,
Port 4321 frei. Änderungen lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Fourier-Modelle und Quellenabgrenzung (Batch 63)

Sieben benannte Modelle/Konfigurationen ergänzt: GR-3C, GR-3C Ultra, GR Mini,
GRW, GRW Lite, ArmMotus M2 Pro und ExoMotus M4 Immersive. Elf bestehende Einträge
korrigiert, darunter GR-1, GR-2, GR-3, N1 und GR Nano. Die Dublette von GR Nano unter
Fourier/Fourier Intelligence wurde zusammengeführt; die bisherige Modelladresse
bleibt erhalten. Nexus-01 ist eine N1-Bezeichnung, kein zusätzliches Modell.
RehabHub, InfinityNet, reine Sensorik und Trainingsgeräte werden nicht pauschal
als neue Robotermodelle gezählt. 18 ausgewählte Modellprüfungen mit 293 Feldern:
109 dokumentiert, 176 unbekannt und acht widersprüchlich. Ein Firmenfokus ergänzt.

GR-1: unbelegte 125.000 USD und pauschale Traglast entfernt; etwa 3 kg pro Hand,
60 Minuten Betrieb gegenüber 45 Minuten Gehen, 315 Minuten Laden und getrennte
44/34-Konfigurationen. GR-2: optionale 12-DoF-Hände bleiben von Standardhänden getrennt.
GR-3: 43 Basisgelenke und bis zu 55 mit optionalen Händen sind unterschiedliche
Konfigurationen; Geschwindigkeit und Spannweite behalten dagegen Quellenkonflikte.
Laden etwa 1,5 Stunden, nicht drei Stunden. N1: 38/39 kg und Körpermaße bleiben
widersprüchlich; 2,7 km/h Gehen und unterschiedliche Laufangaben sind abgegrenzt.
GR-3C-Editionen erhalten keine aus der generischen GR-3-Seite kopierte Masse.
Mini erhält keine N1-Geschwindigkeit; die uneindeutige Ladezeit bleibt leer.

GRW: 160 kg auf der Website gegenüber etwa 240 kg in der Dokumentation sowie
abweichende Maße und Gelenkzahlen bleiben sichtbar. 16 kg gelten kombiniert für
beide Arme, nicht je Arm; die chinesische Unterlage nennt 8 kg je Arm.
Zwei Stunden Laden gelten für 0–80 Prozent. 880/895 mm Wendekreisdurchmesser werden
nicht als Wenderadius ausgegeben; maximale Greifhöhe wird nicht als Hubhöhe
übernommen. Lite erhält keine GRW-Nutzlast oder Gesamtgelenkzahl. Nano ist eine
200-g-Tischplattform mit drei Kopfachsen; ASR/TTS/LLM/VLM gehören zur externen
Kundenplattform. Reha-Trainingsraum, Patientengewicht oder Übungskraft werden nicht
als Gelenkzahl, Robotertraglast oder belegter klinischer Nutzen ausgegeben.

57 gespeicherte Quellenkörper gehasht: 54 erfolgreiche Antworten und drei 404;
23 HTML, 19 gerenderte HTML, ein Binärkörper und 14 PDF-Körper mit zusammen
180 Seiten einschließlich doppelter Körper. 30 unterschiedliche öffentliche
JavaScript-Ressourcenkörper zusätzlich gehasht. 83 konkrete Quellenbeziehungen
geprüft: 35 HTML-Tabellenzeilen, neun benannte Textbezüge, 20 positionierte
PDF-Textregionen, neun begrenzte Reha-PDF-Abschnitte, neun positionierte OCR-Belege
und eine lokale OCR-Gegenprüfung im Handbuch. 27 verwendete Primär-URLs.
32 Seiten aus neun PDF-Körpern maschinell erkannt; sechs lokale OCR-Regionen
nachgeprüft. Keine manuelle Bildsichtprüfung. Mehrdeutige Zeichen wurden nicht
zu technischen Angaben erklärt. Alte leere SPA-Routen und falsch befüllte
Reha-Detailtexte wurden nicht als Produktbelege verwendet. Beide eigenen
Recherchebrowser wurden geschlossen. Zuvor blockierte Hosts wurden nicht erneut
angefragt; keine Formulare, Bestellungen oder Demoanfragen übermittelt.

18 gerenderte Modellseiten: 293 Felder, 99 Quellenmarkierungen, 158 ausgelassene
Leerfelder, 69 strukturierte technische Werte und 65 Merkmalsätze.
Firmenfokus und Exporte abgeglichen; acht ursprüngliche Modell-Exportziele mit
128 Feldvorkommen. Alle 362 früheren Modellprüfungen, 45 früheren Firmenfokusse,
1.809 übrigen Katalogzeilen und 1.961 ursprünglichen Quellenidentitäten erhalten.
Globaler Metadatenabgleich: 380 Modellseiten und 5.624 ausgewählte Felder.
Vergleichs-JSON 1417857 Byte; Katalogskript 1649124 Byte.

540 Unit-Tests in 42 Dateien und alle 94 Browserfälle bestanden: 42 Fourier,
34 PAL und 18 Vergleichsfälle, einschließlich 28 Axe-Prüfungen auf Desktop/Mobil
in Hell/Dunkel. Build: 2.876 Seiten, etwa 438 MB. Datenprüfung: null Fehler,
718 Hinweise, sieben mehr als zuvor; unbekannte Erscheinungsjahre bleiben offen.
Erneuter Import: null Ergänzungen. Geänderte Tests bestehen Lint/Format.
Eigene Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Gesamtstand: 1.827 Modelle/Konfigurationen, 641 Herstellerschreibweisen,
1.035 Marken-/Firmenprofile, 711 datierte Merkmalsdatensätze (572 neue und
139 bestehende Modelle), 2.721 Aussagen, 1.118 Quellenreferenzen und 46 Firmenfokusse.
380 Modellprüfungen umfassen 5.624 Felder: 2.710 dokumentiert, 2.764 unbekannt,
141 widersprüchlich und neun Roadmap. Die gemeinsame Rechercheliste enthält
weiterhin 518 Ziele mit Merkmalsbelegen; 214 haben ausgewählte Feldprüfungen,
304 benötigen diese noch. Drei ursprüngliche Modellidentitäten, neun Listings
und alle 862 BuyAndRent-Detailinhalte bleiben offen. Exklusive USPs,
historische Vollständigkeit und Marktführerschaft sind nicht nachgewiesen.
Änderungen lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Unitree-Konfigurationen und Lastgrenzen (Batch 64)

Sechs ausdrücklich benannte Konfigurationen ergänzt: A2-PRO, As2-W X, As2-W EDU,
R1 AIR, R1 EDU und H1-2. Zwölf bestehende Einträge korrigiert: A2, As2 AIR/PRO/X/EDU,
AS2-W, B2, B2-W, R1, H2, H2 EDU und H1. Keine Kategorienübertragung.
18 ausgewählte Modellprüfungen umfassen 259 Felder: 160 dokumentiert und
99 unbekannt. Ein Herstellerfokus ergänzt. 1.815 übrige Katalogzeilen,
380 frühere Modellprüfungen, 46 Firmenfokusse und 1.961 Quellenidentitäten erhalten.
Frühere Erscheinungsjahre, Bilder und Videos liegen außerhalb dieser Feldprüfung.

A2: etwa 42 kg einschließlich Akku, 35 kg ohne Akku; die Standardspalte nennt
nur einen LiDAR, A2-PRO zwei. PRO nennt IP56–IP67, ausdrücklich IP67 für
Kernkomponenten; daraus folgt keine pauschale IP67-Gesamtroboterfreigabe.
25 kg Gehbelastung, ideale 35 kg und 100 kg Standlast sind getrennt.
30 cm Treppenstufe ist nicht die separate 0,5–1-m-Kletterhöhe. Hot-Swap bedeutet
nicht unbegrenzte Laufzeit pro Akkuladung.

As2 AIR: 65 N·m statt generischer 95 N·m, 10 kg Gehbelastung, etwa zwei Stunden
unbelastet, mehr als 1,5 Stunden bei 10 kg. Kein IP-Wert in der AIR-Spalte;
der generische IP54-Text wird nicht übertragen. PRO: 75 N·m, 13 kg Gehbelastung.
X/EDU: 95 N·m, 15 kg. Nur X/EDU bieten Sekundärentwicklung. AIR hat 8000 mAh
und Unitree L2, die anderen Spalten 15000 mAh und industriellen LiDAR. Ein
Ladedock ist nur für EDU gelistet. GPS/4G sind standardmäßig deaktiviert und
benötigen Benutzerfreigabe; ihre Existenz ist kein uneingeschränkter Betriebsnachweis.

As2-W: 16 Gelenkmotoren, etwa 25 kg einschließlich Akku, IP54. Kontinuierliche
30-cm-Treppen sind von 0,4–0,8 m maximaler Kletterhöhe getrennt; der 80-cm-Slogan
wird nicht als durchgängige Treppenspezifikation verwendet. Standlast 150 kg
ist keine Gehtraglast; diese beträgt etwa 16 kg. X und EDU unterstützen
Sekundärentwicklung, Dock und zusätzliche Rechenmodule sind nur bei EDU gelistet.
Der widersprüchliche Radiusdruck in der Reifentabelle wird nicht als Wenderadius
übernommen; unqualifizierte Geschwindigkeitswerbung ersetzt keine Messbedingungen.

B2: unbelegte 17.000 USD entfernt. >6 m/s gelten für besondere Konfigurationen
mit praktischer Geschwindigkeitsbegrenzung. Vier bis sechs Stunden allgemeine
Laufzeit, >5 Stunden unbelastetes Gehen und >4 Stunden mit 20 kg Last bleiben
getrennt. Radumrüstung und autonomes Laden sind Optionen. B2-W: etwa 85 kg
mit Akku statt 75 kg; eigene Herstelleradresse. 15 km/h und 25 km mit 40 kg
Last sind ausdrücklich besondere Konfigurationen. 30 km unbelastete Reichweite
werden nicht in Betriebsstunden umgerechnet; Akkudauer und Ladezeit bleiben leer.

R1 AIR: 20 Gelenke, etwa 27 kg mit Akku, Monokularkamera, 4900 USD ohne Steuern
und Versand. R1: 26 Gelenke, etwa 29 kg, Binokularkamera und 5900 USD. Nur EDU
listet Sekundärentwicklung, optionale Hände und zusätzliche Rechenmodule;
26–40 Gelenke bleiben konfigurationsabhängig. Die englische Tabellenzeile
„Maximum Torque of Arm Joint“ nennt etwa 2 kg und verweist auf eine Arm-Last-
Fußnote. Diese Einheiten-/Beschriftungsunklarheit wird nicht stillschweigend
in eine gesicherte Nutzlast oder ein Drehmoment umgewandelt.

H2: Tabellenmaße 1820 × 456 × 218 mm; etwa 70 kg mit Akku. Armnennlast etwa
7 kg, Spitzenlast etwa 15 kg; keine Gesamtkörper- oder verdoppelte Bimanuallast.
Standard nennt Core i5 und keine Zusatzmodule; EDU zusätzlich Core i7 und
wählbare Module wie Thor. Generische 2070 TOPS und ältere „3× Orin NX“-Prosa
begründen keine überall enthaltene Konfiguration. H1: etwa 47 kg Gesamtmasse,
unbelegte 90.000 USD, 30 kg Traglast und zwei Stunden Akku entfernt. 864 Wh
sind keine Akkudauer. 3,3 m/s und potenzielle >5 m/s sind getrennt. H1-2:
etwa 70 kg, 27 Gelenke, <2 m/s, 7 kg Armnennlast und 21 kg Spitzenlast.
H1-Gelenkzahlen werden nicht aus Gliedmaßenzahlen zu einer unbekannten
Gesamtzahl zusammengerechnet.

25 öffentliche HTML-Quellenkörper gespeichert, alle HTTP 200, gehasht und
Text reproduziert. Acht benannte Vergleichstabellen mit 239 Zeilen geprüft;
258 konkrete Quellenbeziehungen einschließlich 17 Fußnoten-/Textbezügen und
zweier variantengenauer Preiszeilen. Keine Bildsichtprüfung, Bestellungen,
Formulare oder Zugriffe auf früher blockierte Anbieter.
15 weitere Portfolioquellen sind enthalten: eine Firmenseite sowie 14 Produkt-/
Anwendungsreferenzen, die noch eine Modell-/Konfigurationsentscheidung benötigen.
Dazu gehören A2-W, H2-X, H2-D, R1-D, G1-D, G1-Comp, G1-Boxing, B2-Ex, G1+,
R1-7a, D1-T, Z1, AlienGo und D2. Sie sind in `portfolio-decisions.json`
mit Snapshot und Prüfbedarf gespeichert und werden in diesem Durchgang
nicht als zusätzliche Robotermodelle gezählt. Insbesondere benannte Arme,
Systeme, Konfigurationen und Anwendungen dürfen nicht pauschal gleichgesetzt werden.

18 gerenderte Modellseiten: 259 Felder, 139 Quellenmarkierungen, 84 ausgelassene
Leerfelder, 114 strukturierte technische Werte und 72 Merkmalsätze.
15 Modell-Exportziele mit 213 Feldvorkommen sowie Firmenfokus und Gesamtexporte
abgeglichen. Globaler Metadatenabgleich: 398 Modellseiten, 5883 ausgewählte Felder,
2963 sichtbare technische Werte samt Quellenstatus, 2505 ausgelassene Leer-/NA-Felder
und 25 zuvor belegte Startjahre. Drei veröffentlichte USD-Preise haben strukturierte
Offers; 15 unbekannte Preise erzeugen keine. Die Preise behalten den Ausschluss
von Steuern/Versand und sind keine Bestands- oder regionalen Lieferzusagen.
Vergleichs-JSON 1475471 Byte, Katalogskript 1657783 Byte.

556 Unit-Tests in 43 Dateien und alle 80 Browserfälle bestanden: 42 neue Unitree-,
20 frühere G1/Go2- und 18 Vergleichsfälle, einschließlich 32 Axe-Prüfungen.
Build: 2882 Seiten, etwa 439 MB. Datenprüfung: null Fehler und 724 Hinweise,
sechs zusätzliche nicht belegte Startjahre der Ergänzungen. Lint/Format der
geänderten Tests bestanden; erneuter Import null Ergänzungen. Eigene
Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei.

Gesamtstand: 1833 Modelle/Konfigurationen, 641 Herstellerschreibweisen,
1035 Marken-/Firmenprofile, 720 datierte Merkmalsdatensätze (578 neue und
142 bestehende Modelle), 2766 Aussagen, 1127 Quellenreferenzen und 47 Firmenfokusse.
398 ausgewählte Modellprüfungen umfassen 5883 Felder: 2870 dokumentiert,
2863 unbekannt, 141 widersprüchlich und neun Roadmap. Von 518 ursprünglichen
Referenzzielen haben 223 ausgewählte Feldprüfungen, 295 benötigen diese noch.
Die 14 neuen Hersteller-Portfolioreferenzen werden getrennt geführt.
Drei ursprüngliche Modellidentitäten, neun Listings und 862 BuyAndRent-
Detailinhalte bleiben offen. Vollständigkeit, exklusive USPs, unabhängige
Leistung und Marktführerschaft sind nicht nachgewiesen. Änderungen lokal;
kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Unitree-Portfolio, Arme und mobile Systeme (Batch 65)

Alle 14 im vorherigen Durchgang gesicherten Produkt-/Anwendungsreferenzen haben
eine abgegrenzte Entscheidung. 26 benannte Modelle/Konfigurationen ergänzt:
A2-W/PRO, H2-X/EDU, H2-A Standard, H2-D Standard/Flagship, R1-A5/A7 und
R1-A5-D/A7-D, G1-D Standard/Ultimate, G1+/EDU, G1-Comp, B2-Ex Chassis/Inspection
Solution, AlienGo, R1-7a, D1, D1-T Standard/Full Edition, Z1 AIR/PRO und D2.
G1-Boxing ist ein Anwendungskontext am bestehenden G1, kein weiterer Hardwaretyp.
26 ausgewählte Modellprüfungen mit 409 Feldern: 206 dokumentiert, 203 unbekannt.
Alle 1833 vorherigen CSV-Zeilen und 398 vorherigen ausgewählten Modellprüfungen
unverändert; 719 frühere Merkmalsdatensätze unverändert, G1 um Kontext und Quelle
ergänzt. Ein Firmenfokus erweitert, 46 weitere unverändert. 1961 ursprüngliche
Quellenidentitäten erhalten. Unitree umfasst jetzt 58 Katalogeinträge; sechs ältere
Komponenten-/Legacy-Einträge sind weiterhin außerhalb der ausgewählten Feldprüfungen.

A2-W wiegt etwa 52 kg mit und 45 kg ohne Akku; 16 Motoren. Standard nennt einen,
PRO zwei LiDAR. PRO IP56–IP67 mit IP67 für Kernkomponenten ist keine einheitliche
Gesamtroboter-IP67-Freigabe. 25 kg Gehbelastung, ideale 35 kg und 100 kg Standlast
bleiben getrennt. Mehr als 3,5 Stunden unbelastet und mehr als 1,5 Stunden mit
25 kg sind Herstellerbedingungen; 30-cm-Treppen und 0,5–1 m Klettern verschieden.

H2-X: 65+ kg, 31 Körpergelenke, etwa 7 kg Nenn-/15 kg Spitzenlast pro Arm.
Die Herstellerseite nennt sowohl statische als auch gehende acht Stunden;
beides bleibt als ungemessene Herstellerangabe qualifiziert. Fünf Stunden des
optionalen Funkmikrofons sind keine Roboterlaufzeit, 7 A Ladestrom keine Ladezeit.
H2-X Standard 25400 USD ohne Steuer/Versand, EDU unbekannt. Optionale Thor-/AGX-
Module werden nicht zu einem überall enthaltenen Paket zusammengerechnet.

H2-A Standard ist eine feste Basis ohne gelistete Hubsäule oder angetriebenes
Fahrwerk; etwa 0,6 m Reichweite ohne geschickte Hände. H2-D Standard: 148 kg,
manuelles Fahrwerk und etwa 0,36 m Hub; direkter 7×24-Netzbetrieb liefert keine
Akkulaufzeit. Flagship: 120 kg, angetriebenes Fahrwerk, etwa 0,46 m Hub, 1,5 m/s
und etwa fünf Stunden Akku. 0,75 m Wendedurchmesser wird nicht Wenderadius;
2 m Arbeitsraum werden nicht Gabelhub. Arm-Nenn-/Spitzenlast bleibt pro Arm.

R1-A5/A7 sind feste Arme mit 11/13 kg einschließlich externer Stromversorgung;
die mobilen Varianten nennen 30/32 kg ohne daraus eine Akkuinklusion abzuleiten.
15/19 beziehungsweise 18/22 Gelenke schließen den Greifer ein. 2–4 kg Armlast
hängt von der Armstellung ab. 4290 USD ist ein Familien-Ab-Preis ohne exaktes
strukturiertes Angebot. Drei Fahrwerk-Freiheitsgrade bestimmen keinen Antriebstyp.

G1-D Standard/Ultimate: 17/19 Gelenke ohne Endgeräte, etwa 90 kg, zwei/sechs
Stunden Akku. Nur Ultimate nennt 1,5 m/s und angetriebenes Differentialfahrwerk.
24/7 betrifft Software-Dienstverfügbarkeit und ist keine Akkuzusage. 3 kg ist
maximale Einzelarmlast. Höhenpositionen werden nicht als belegter Hub verrechnet.
G1+ Standard/EDU: 25 beziehungsweise 25–45 Gelenke, 3/4 kg Armlast, 35/35+ kg.
0,45 m Armspanne ist keine sichere Armreichweite. Standardpreis 15000 USD ohne
Steuern/Versand, EDU unbekannt. G1-Comp-Optionen und Rechenmodule bleiben wählbar;
G1-Boxing-Demonstrationen begründen kein enthaltenes Boxpaket für jeden Standard-G1.

B2-Ex Chassis/Inspection: 130/170 kg, 45°/30°, sieben/vier Stunden unter den
jeweiligen Herstellerbedingungen. Chassis: 40 kg Gehlast und separate 70 kg
Maximalangabe ohne bekannten Betriebsmodus. Inspection-Testlast von 40 kg plus
etwa 80 W externer Last ist keine freie zusätzliche Nutzlast; diese bleibt leer.
Ex db mb IIB T4 Gb und Ex db eb ib mb IIB T4 Gb sind Herstellerkennzeichnungen,
kein unabhängig geprüftes Zertifikat. IP66 bleibt als generische Familienangabe
qualifiziert. AlienGo: 21,5 ± 1 kg ohne Akku; 13 kg Last ohne Betriebsmodus,
2,5–4,6 Stunden ohne veröffentlichte Bedingungen. Schutzmodus ist kein IP-Wert.

R1-7a: sieben Achsen, 2 kg, 650 mm einschließlich Hand; 1650 USD als Ab-Preis,
Masse unbekannt und begrenzte Steifigkeit/Kontrolloptionen sichtbar. D1 ist der
Einzelarm: 2,37 kg, 500 g Nutzlast, sechs Achsen plus Greifer. D1-T Standard/Full
sind Zwei-/Vierarm-Kits; ihre Gesamtmasse, Nutzlast und Gelenkzahl bleiben leer.
Unter 8500/16000 USD sind Preisobergrenzen ohne exakte strukturierte Offers.
Z1 AIR/PRO: 4,3/4,5 kg und 2/≥3 kg Last. 405 g beziehungsweise 33 N·m beziehen
sich auf eine Motorkomponente; 500 W liefert keine Akkulaufzeit. D2: netto
5,9 kg, sieben Achsen plus Greifer; 3 kg Tabellenlast und maximal 5 kg Übersicht
behalten ihre Bedingungen. 633 mm Armlänge sind nicht 780 mm Greiferradius.
As2 trägt laut Hersteller nur einen Arm; zwei Arme auf A2 schließen Hochgeschwindigkeits-
laufen aus. 60 W typisch/870 W Spitze werden nicht in Stunden umgerechnet.

Quellen: 14 am selben Tag gespeicherte Herstellerkörper aus Batch 64 bytegleich
wiederverwendet; ihre damals gesicherten HTTP-Status sind jeweils 200. Keine neuen
Quellsnapshots angefordert; ein gehosteter Web-Gegencheck. Hash und Text reproduziert,
13 benannte Tabellen mit 326 Zeilen und 362 konkrete Quellenbezüge geprüft.
Keine unabhängige Zertifikatsprüfung, Bildsichtprüfung oder Bestandsprüfung.
Keine Formulare und keine Wiederholung früher blockierter Anbieterzugriffe.

26 gerenderte Modellseiten: 409 Felder, 178 Quellenmarkierungen, 179 ausgelassene
Leerfelder, 136 strukturierte technische Werte und 102 Merkmalsätze geprüft;
zusätzlich bestehender G1-Boxing-Abschnitt und Firmenfokus. Diese 26 Ergänzungen
sind außerhalb der ursprünglichen Modellnennungen und erzeugen deshalb keine
zusätzlichen Modell-Exporttreffer. Gesamtexporte: 591 Firmen, 406 Modellnennungen,
862 Listings, 132 Beschreibungsentscheidungen und 518 Rechercheziele erhalten.
Global: 424 Modellseiten, 6292 Felder, 3141 sichtbare technische Werte samt Belegen,
2684 ausgelassene Leer-/NA-Felder und 25 bereits belegte Startjahre abgeglichen.
Zwei exakte veröffentlichte USD-Preise erzeugen Offers, 24 unbekannte Preise keine.
Vergleichs-JSON 1564511 Byte; Katalogskript 1685614 Byte.

574 Unit-Tests in 44 Dateien und 104 Browserfälle bestanden: 44 neue Portfolio-,
42 frühere Plattform- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Build: 2908 Seiten, etwa 443 MB. Datenprüfung: null Fehler und 750 Hinweise,
26 zusätzliche unbekannte Erscheinungsjahre. Lint/Format bestanden; erneuter
Import null Ergänzungen. Eigene Testbrowser, Vorschau und Hilfsprozesse beendet;
Port 4321 frei und Ressourcen anderer Aufgaben erhalten.

Gesamt: 1859 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
746 datierte Merkmalsdatensätze (604 neue/142 bestehende Modelle), 2869 Aussagen,
1154 Quellenreferenzen und 47 Firmenfokusse. 424 ausgewählte Prüfungen umfassen
6292 Felder: 3076 dokumentiert, 3066 unbekannt, 141 widersprüchlich, neun Roadmap.
Von den ursprünglichen 518 Referenzzielen haben weiterhin 223 ausgewählte
Feldprüfungen; 295 benötigen diese noch. Die 14 Unitree-Portfolioreferenzen sind
jetzt entschieden und keine offene Warteschlange mehr. Drei ursprüngliche
Modellidentitäten, neun Listings und 862 BuyAndRent-Detailinhalte bleiben offen.
Vollständigkeit, exklusive USPs und Marktführerschaft sind nicht belegt.
Änderungen lokal; kein Commit, Push oder Deployment.


## Ergänzung vom 2. November 2026 – Carbon Robotics: Anbaugeräte, Demonstrator und Traktorgrenzen (Batch 66)

Sechs bestehende Modelle technisch geprüft: LaserWeeder und LaserWeeder G2
200/300/400/600/1200. Das vom Hersteller ausdrücklich benannte „First Autonomous
LaserWeeder Unit“ ergänzt, eingeführt im März 2021 und nur für Felddemonstrationen,
nicht zum Verkauf. Es bleibt vom kommerziellen Traktoranbaugerät aus Februar 2022
getrennt. Sieben Prüfungen mit 119 Feldern: 42 dokumentiert, 77 unbekannt.
Ein Firmenfokus ergänzt; alle 47 bisherigen Firmenfokusse und 424 bisherigen
Modellprüfungen unverändert. Die 1853 übrigen alten Katalogzeilen behalten ihre
Werte; zwei optionale kommerzielle CSV-Spalten sind dort leer. Keine Kategorien-
übertragung; 1961 ursprüngliche Quellenidentitäten und alle Exportzeilen erhalten.

Die sechs kommerziellen Anbaugeräte bekommen belegte Behandlungskapazität in
ha/h und ac/h, sichtbar in Detailtabelle, strukturierten Eigenschaften und Vergleich.
LaserWeeder: 0,20–0,61 ha/h. G2 200: 0,16–0,28; 300: 0,30–0,61; 400: 0,32–0,65;
600: 0,61–1,21; 1200: 1,21–2,43 ha/h. Alle Werte sind Herstellerangaben unter
nicht vollständig dokumentierten Feldbedingungen. Unkrautschüsse pro Minute
werden weder Fläche pro Stunde noch Fahrgeschwindigkeit. Traktor-Mindesthubkraft
wird nicht Robotertraglast: G2 300 wiegt 2540 kg, fordert aber 3600 kg Hubkraft;
G2 1200 wiegt 8165 kg und fordert 8618 kg Hubkraft. Laser-/Modul-/Kamerazahlen
sind keine Gelenk-Freiheitsgrade.

G2 1200 verlangt hinteren PTO-Generator und IVT am 8R-Traktor; die anderen G2-
Spalten verlangen vorderen PTO-Generator und nennen eigene Motor-/PTO-Grenzen.
Ein nicht genannter Mindest-PTO-Wert des 1200 wird nicht aus anderen Modellen
übernommen. Der kommerzielle LaserWeeder nutzt 30 × 150 W Diodenlaser und
42 Kameras. Der autonome Demonstrator hat acht 150-W-CO2-Laser, zwölf Kameras,
74-hp-Cummins-Diesel und vier hydraulische Fahrmotoren. 75 Gallonen Tankkapazität
liefern keine Betriebsstunden; seine 80-Zoll-Spurweite ist keine Arbeitsbreite.

Die Quellen drucken nominell „20 ft / 6.01 m“ und separat 609 cm Gesamtbreite.
Die G2-Familienseite druckt „21 inches (61 cm)“ pro Modul. Diese Einheiten stimmen
nicht überein. Weder Rahmenbreite, ein Modulmaß noch verstellbare Reihen-/Spurweite
belegt die gesamte Behandlungsbreite; das Feld bleibt deshalb bei allen sieben
Einträgen leer, die Diskrepanzen stehen in Merkmalsätzen und Feldnotizen.
Eine zunächst zugeordnete nominale Breite wurde vor dem abschließenden Build
wegen dieser Bedeutungsgrenze zurückgenommen. Kein zusätzliches technisches
Konfliktfeld behauptet, eine belegte Arbeitsbreite zu enthalten.

24/7 bedeutet Software-/Fernunterstützung, nicht Akkulaufzeit. Kühlung und
versiegelte Module liefern keinen IP-Wert. Zielgenauigkeit unter einem Millimeter,
bis zu 99 % Unkrautvernichtung sowie Ertrags-/Kosten-/Amortisationswerte bleiben
zugeordnete Hersteller-/Fallbehauptungen, keine garantierten Betriebsergebnisse
oder Navigationsgenauigkeit. Alle Preise bleiben unbekannt und erzeugen keine
strukturierten Kaufangebote. G2-Varianten erhalten ohne Einzelmodellbeleg kein
Erscheinungsjahr aus der Familiennavigation.

Carbon ATK leitet auf Carbon Autonomy weiter: Nachrüstsatz für Deere 6R/8R/8RX/8RT
ab 2019, mit Kamera/Radar/LiDAR, menschlicher Fernüberwachung und manueller
Übernahme. Früher Zugang und anfänglich bestimmte US-Regionen bleiben sichtbar.
Der Satz ist kein zusätzliches komplettes Traktormodell und kein impliziter
Lieferbestandteil jedes LaserWeeders. Carbon AI, Large Plant Model, Plant Profiles,
Ops Center, Companion und iPad-App sind Software-/Modellfunktionen, keine weiteren
Roboterkarten. Das Firmenprofil dokumentiert diese Unterschiede mit Quellen.

Elf neue öffentliche HTML-Körper gespeichert, alle HTTP 200; Hash und Text
reproduziert. 33 ausdrücklich zugeordnete Spezifikationsabschnitte mit 151 Zeilen
und insgesamt 177 Quellenbezüge geprüft. Die beiden Unit-Specs-Blöcke derselben
LaserWeeder-Seite bleiben unter den jeweiligen kommerziellen/Demo-Überschriften.
26 Felder haben zusätzliche konkrete Abschnittszuordnung; Masse, Maßzahlen,
Flächenraten und PTO-Seite wurden gegen die passenden Blöcke geprüft.
Keine Formulare, Bildsichtprüfung, unabhängigen Feldversuche oder Wiederholung
früher gesperrter Anbieterzugriffe. Intuitive wurde wegen der dokumentierten
Sperrseiten nicht erneut abgerufen; der nächste substanzielle technische Review
ging deshalb an die sechs Carbon-Referenzziele.

Gerenderte Prüfung: sieben Seiten, 119 Felder, 35 Quellenmarkierungen,
70 ausgelassene Leerfelder, 26 strukturierte Eigenschaften, 45 Merkmalsätze und
ein Firmenfokus. Sieben unbekannte Preise ohne Offers. Der ursprüngliche
Modellnennungs-Export enthält einen LaserWeeder-Treffer mit 17 Feldern; die
gemeinsame Recherchewarteschlange enthält alle sechs Referenzmodelle mit
102 Feldern. Die zusätzlichen G2-Zuordnungen stammen aus geprüfter Firmen-
beschreibungsreferenz und sind keine fünf weiteren ursprünglichen Modellnennungen.
Globaler Metadatenabgleich: 431 Seiten und 6411 Felder, davon
3176 sichtbare technische Werte mit Quellen,
2754 ausgelassene Leer-/NA-Felder und 27 belegte Startjahre.
Vergleichs-JSON 1591095 Byte, Katalogskript 1700792 Byte.

585 Unit-Tests in 45 Dateien sowie insgesamt 96 verschiedene Browserfälle bestanden: 34 Carbon-,
44 frühere Unitree-Portfolio- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Im ersten Browserlauf bestanden 94 Fälle; zwei deutsche Vergleichserwartungen
verwendeten fälschlich Dezimalpunkte. Nach Korrektur auf die tatsächlich korrekt
lokalisierten Dezimalkommas bestehen beide gezielt wiederholten Fälle. Die
Produktdarstellung benötigte dafür keine Änderung; kein vollständiger zweiter
96-Fälle-Lauf behauptet.
Die erste Unit-Ausführung deckte einen falschen Testzugriff auf die Suchfunktion
auf; der Test verwendet nun deren tatsächlichen Rückgabetyp und der vollständige
abschließende Unit-Lauf besteht. Build: 2909 Seiten, etwa 444 MB. Datenprüfung:
null Fehler und unverändert 750 Hinweise. Lint/Format bestanden; erneuter Import
null Ergänzungen. Eigene Testbrowser, Vorschau und Hilfsprozesse beendet;
Port 4321 frei; andere Aufgabenressourcen erhalten. Änderungen bleiben lokal,
ohne Commit, Push oder Deployment.

Gesamt: 1860 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
747 datierte Merkmalsdatensätze (605 neue/142 bestehende Modelle), 2896 Aussagen,
1155 Quellenreferenzen und 48 Firmenfokusse. 431 ausgewählte Modellprüfungen
umfassen 6411 Felder: 3118 dokumentiert, 3143 unbekannt, 141 widersprüchlich,
neun Roadmap. Von 518 ursprünglichen Referenzzielen haben jetzt 229 ausgewählte
Feldprüfungen; die offene Zahl fällt von 295 auf 289. Drei Modellidentitäten,
neun Listings und 862 BuyAndRent-Detailinhalte bleiben offen. Vollständigkeit,
exklusive Vorteile, unabhängige Leistungswerte und Marktführerschaft sind nicht belegt.


## Ergänzung vom 2. November 2026 – FANUC CR/CRX, Lastmodi und Wiederholgenauigkeit (Batch 67)

Sechs bestehende CR-Arme geprüft: CR-4iA, CR-7iA, CR-7iA/L, CR-14iA/L, CR-15iA und
CR-35iB. Zwölf ausdrücklich benannte Konfigurationen ergänzt: CRX-3iA, -5iA, -10iA,
-10iA/L, -20iA/L, -30iA, -10iA/L Paint sowie Food-Ausführungen von -5iA, -10iA,
-10iA/L, -20iA/L und -30iA. 18 ausgewählte Prüfungen umfassen 288 Felder:
138 dokumentiert, 146 unbekannt, vier widersprüchlich. Ein Firmenfokus ergänzt.
Alle 431 alten Modellprüfungen, 48 alten Firmenfokusse und 1961 Quellenidentitäten
erhalten; 1854 übrige alte Katalogzeilen behalten ihre Werte. Die neue optionale
Arm-Spalte bleibt dort leer. Keine Kategorienübertragung.

Wiederholgenauigkeit des Arms ist als `armRepeatability` getrennt von absoluter
Positioniergenauigkeit und visueller Lokalisierung gespeichert. Detailtabelle,
Product-Eigenschaften und Vergleich zeigen Herstellerwert, ISO-9283-Bezug,
Prüfstatus und Quellenhinweis. Englisch/Deutsch sind beschriftet; andere vorhandene
Oberflächensprachen nutzen die bestehende englische Rückfallregel. Keine Werte
bei älteren Armen ohne gesonderte Prüfung nachgetragen. Vier Quelldateien wurden
um genau fünf Feld-/Übersetzungseinträge erweitert; vorherige Änderungen erhalten.

CR-14iA/L: 14 kg Maximal-Wristlast, aber 911 mm Reichweite nur unter 12 kg;
ab einschließlich 12 kg 820 mm. Der vermutete US-Modellpfad leitet auf die Familie
um; eine weitere vermutete EU-Route liefert 404. Beide sind keine Modellbelege.
CR-35iB: 35 kg bei 1831 mm; optionale 50 kg schränken den Raum auf 1643 mm ein.
Der 300-mm/s-Kollaborationsmodus und bis zu 750 mm/s unter Anwendungseinschätzung
werden nicht zu einer pauschal zulässigen Zellgeschwindigkeit. CR-15iA nennt
800/1500 mm/s mit separat angeordnetem Sicherheitssensor für die höhere Angabe.
CR-7iA/L hat 1000 mm/s maximale kartesische Geschwindigkeit ohne belegten
separaten Kollaborations-/High-Speed-Wert; der 500-mm/s-Wert der Nachbarseite
wurde nicht übernommen. Körper-IP54 versus IP67 für Handgelenk/J3 bleibt getrennt.

Vier Konflikte sichtbar: CR-7iA hat 717 mm in Tabelle/Broschüre und 911 mm in
generischer Seitenprosa; CR-35iB wiegt 386 kg in Broschüren/Datenblatt gegenüber
375 kg auf der US-Seite; Paint hat 47 kg in der aktuellen EU-Tabelle gegenüber
40 kg auf der US-Seite; CRX-30iA nennt in der Broschüre 1756 mm bei 30 kg und
1889 mm bei 25 kg, während die US-Tabelle 1889 mm neben 30 kg unqualifiziert
aufführt. Keine stille Auswahl oder rechnerische Controller-Subtraktion.

Die aktuelle CRX-30iA-Tabelle nennt zusätzlich 40 kg mit nur nach unten gerichtetem
Handgelenkflansch. Ein zusätzlicher 1700-mm-Eintrag verweist auf Fußnote 8, die
ISO 9283 statt des Lastmodus beschreibt. Deshalb wird daraus keine unbelegte
40-kg/Reichweiten-Paarung. Die alte CRX-25iA-Route leitet aktuell auf CRX-30iA um;
das begründet keine zusätzliche neue Karte oder vollständig geprüfte historische
Hardwaregleichheit. CRX-3iA: 11 kg, 692 mm, 3 kg und 1200/2500 mm/s nach Modus.
CRX-20iA/L erbt keine High-Speed-Zahl, die seine eigene Spalte nicht nennt.

Food-Seiten nennen fünf konkrete Ausführungen, IP67, korrosionsbeständige
Handgelenkoberfläche, geschlossene Kabelführung und NSF-H1-Fett für unbeabsichtigten
Lebensmittelkontakt. Daraus folgen keine universelle direkte Lebensmittel-
Kontaktzulassung, Sterilisation oder unabhängig geprüfte Hygienezertifizierung.
Food-Masse, Achszahl, Geschwindigkeit und Wiederholgenauigkeit bleiben leer;
Standardarmwerte sind nicht automatisch vollständige Ausstattungsdaten. Food
-30iA bleibt bei seinen 25/30-kg-Angaben ohne Übernahme des 40-kg-Modus.
Paint bleibt eine benannte Lackier-/Beschichtungsvariante; keine unabhängige
Explosionsschutz-Freigabe geprüft. Endwerkzeuge, Kameras, Kraftsensoren und
Controller bleiben paketabhängig. Acht Jahre Wartungspositionierung sind keine
Akkudauer, Garantiezeit oder gesicherte Verfügbarkeit. Unbelegte Preise,
Erscheinungsjahre und vollständige Armabmessungen bleiben leer. US-Seiten von
CR-4iA/-7iA/-7iA/L nennen nicht mehr produzierte Legacy-Produkte; das ist keine
weltweite Stilllegungsfrist für installierte Systeme.

27 neue Quellenkörper gespeichert: 26 HTTP 200, eine 404; 20 HTML und sieben PDF.
Hash und extrahierter Text reproduziert. Zwei Tabellen auf der jeweils elften
Broschürenseite mit 14 Modellspalten, 14 Headerpositionen und 112 einzelnen
Koordinatenzellen geprüft; acht US-DL-Tabellen und Fußnoten ergeben insgesamt
205 konkrete Quellenbezüge. PDF-Texte und Positionen wurden geprüft, keine
visuelle PDF-/Bildprüfung oder unabhängige Leistung-/Zertifikatsprüfung behauptet.
Die 2024/2026-Ordnerdaten sind keine Modell-Erscheinungsjahre. Keine Formulare,
Bestellungen oder erneuten Zugriffe auf zuvor gesperrte Anbieter.

18 gerenderte Modellseiten: 288 Felder, 124 Quellenmarkierungen, 128 ausgelassene
Leerfelder, 106 strukturierte Eigenschaften, 85 Merkmalsätze und ein Firmenfokus
abgeglichen. Ein ursprünglicher Familien-Export trifft sechs CR-Ziele mit 96
Feldvorkommen; alle sechs Rechercheziele entsprechen dem Export. 18 unbekannte
Preise erzeugen keine Offers. Globaler Abgleich: 449 Modellseiten und 6699 Felder,
3300 sichtbare technische Werte mit Quellen,
2882 ausgelassene Leer-/NA-Felder und 27 belegte Startjahre.
Vergleichs-JSON 1662629 Byte; Katalogskript 1717075 Byte.

597 Unit-Tests in 46 Dateien und 100 Browserfälle bestanden: 48 FANUC-,
34 Carbon- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Build: 2921 Seiten, etwa 445 MB. Datenprüfung: null Fehler, 762 Hinweise;
zwölf zusätzliche unbekannte Erscheinungsjahre. Lint/Format der geänderten
Quelldateien und Tests bestanden; erneuter Import null Ergänzungen. Eigene
Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei, Ressourcen
anderer Aufgaben erhalten. Änderungen lokal; kein Commit, Push oder Deployment.

Gesamt: 1872 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
759 datierte Merkmalsdatensätze (617 neue/142 bestehende Modelle), 2963 Aussagen,
1186 Quellenreferenzen und 49 Firmenfokusse. 449 ausgewählte Modellprüfungen mit
6699 Feldern: 3256 dokumentiert, 3289 unbekannt, 145 widersprüchlich, neun Roadmap.
Von 518 ursprünglichen Referenzzielen haben jetzt 235 ausgewählte Feldprüfungen;
die offene Zahl sinkt von 289 auf 283. Drei Modellidentitäten, neun Listings und
862 BuyAndRent-Detailinhalte bleiben offen. Andere industrielle/historische
FANUC-Familien sind nicht vollständig geprüft. Vollständigkeit, exklusive USPs,
unabhängige Leistung und Marktführerschaft bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Smart Robotics, Systemgrenzen und Durchsatz (Batch 68)

Sechs bestehende Systeme/Konfigurationen anhand von neun frisch gespeicherten
Herstellerseiten geprüft: Smart Palletizer Essential, Advanced und Premium,
Smart Item Picker, Smart Depalletizer und Smart Mixed Case Palletizer.
96 ausgewählte Felder: 21 dokumentiert, 73 unbekannt, zwei widersprüchlich.
Ein Firmenfokus ergänzt; keine neue Modellkarte. Homepage, Produktnavigation,
Lagerautomatisierungs- und Palettierübersicht nennen die vier bestehenden Systeme.
Der Footer-Link parcel-picking leitet auf Smart Depalletizer um und begründet
keinen weiteren Roboter. Alle 1961 Quellenidentitäten, 1866 übrigen Katalogzeilen,
449 bisherigen Modellprüfungen und 49 Firmenfokusse erhalten.

Die gespeicherte HTML-Vergleichsmatrix wurde nach benannten Spalten und zehn
Zellen je Spalte abgeglichen. Fußflächen: 2,4 × 2,3 m / 2,4 × 2,75 m /
2,4 × 3,5 m; jeweils 3 m maximale Stapelhöhe. Produkte/Stapelmuster: 10 / 20 /
unbegrenzt. Essential ohne Multi-picks und offene Kartons; Advanced mit Multi-picks,
aber ohne offene Kartons; Premium mit beiden Funktionen. Die Check-/Disable-
Dateinamen in den HTML-Zellen liefern 15 Funktionszuordnungen; keine visuelle
Bildprüfung behauptet. Die Matrix nennt Zwischenlagen, OEE-Dashboard und
Installation in einem halben Tag; die Hardware-FAQ nennt Zwischenlageneinheit
und vertikalen Lift optional. Funktionsversprechen und endgültige Stückliste
bleiben deshalb getrennt. Die familienweiten 1600 Kartons/h und 30 kg werden
keiner der drei Konfigurationen als exakter Wert zugeordnet. Partnerarme von
Universal Robots/Doosan und unterschiedliche Greifer ergeben keine pauschal
eingeschlossene Armmasse, Achszahl oder Greiferausstattung.

Durchsatz ist als `throughput` getrennt von linearer Geschwindigkeit gespeichert;
`stackingHeight` ist getrennt von Anlagenabmessungen, Reichweite und Gabelhubhöhe.
Detailseite, Product-Eigenschaften und Vergleich zeigen Werte, Status und Quellen.
Englisch/Deutsch beschriftet; bestehende englische Rückfallregel für andere
Oberflächensprachen. Vier Quelldateien um genau zehn Einträge ergänzt; frühere
Arm-Wiederholgenauigkeit erhalten. Die zwei optionalen kommerziellen CSV-Spalten
bleiben außerhalb dieser sechs Systeme leer.

Smart Item Picker: bis 1000 Items/h, Barcode und Wiegen, WCS/WMS-/AutoStore-/ASRS-/
AMR-/Fördertechnik-Integration. Die Formulierung oberhalb 5 kg ist keine maximale
5-kg-Traglast; obere Grenze unbekannt. Smart Depalletizer: bis 1000 Produkte/h,
KI-Saugkreiswahl ohne SKU-Teaching, einzelne/gemischte SKUs auf Paletten sowie
in Käfigen/Behältern und konfigurierbare Cobot-/Industriearmhardware.

Smart Mixed Case Palletizer: bis 500 Items/h und dynamische Platzierung ohne
vorberechnete Stapelsequenzen. Zwei Herstellerkonflikte sichtbar: Produkt-FAQ
bis 30 kg, Palettierübersicht 30 kg und darüber; Stapelhöhe bis 2 m in FAQ,
über 2 m in Feature-Text und Übersicht. Keine größere Angabe still ausgewählt,
keine gleichzeitige Erreichbarkeit von Last- und Durchsatzmaxima behauptet.
Herstellerangaben sind keine unabhängig gemessenen oder exklusiven USPs.
Preise, Anlagenmasse, Strom-/Akkulaufzeit, IP-Schutz und Erscheinungsjahre bleiben
unbekannt, wo die Quellen keine exakte Systemangabe liefern.

Quellenkörper: neun HTTP 200, Hash und extrahierter Text reproduziert; 20 begrenzte
Aussagen und drei benannte Konfigurationsspalten geprüft. Keine Formulare,
Bestellungen oder erneuten Zugriffe auf zuvor gesperrte Anbieter.
Sechs gerenderte Modellseiten mit 96 Feldern,
17 Quellenmarkierungen, 67 ausgelassenen
Leerfeldern und 11 strukturierten Eigenschaften
abgeglichen. 30 Merkmalsätze und ein Firmenfokus geprüft. Export und Recherchequeue
behalten alle sechs Ziele. Globaler Abgleich: 455 Seiten, 6795 Felder,
3317 sichtbare technische Werte mit Quellen,
2949 ausgelassene Leer-/NA-Felder und 27 belegte Startjahre.
Vergleichs-JSON 1684840 Byte; Katalogskript 1732641 Byte.

608 Unit-Tests in 47 Dateien und 106 Browserfälle bestanden: 40 Smart-Robotics-,
48 FANUC- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Build: 2921 Seiten, etwa 446 MB. Datenprüfung: null Fehler, 762 Hinweise,
unverändert zum Vorlauf. Lint/Format bestanden; erneuter Import null Ergänzungen.
Eigene Testbrowser, Vorschau und Hilfsprozesse geschlossen; Port 4321 frei,
Ressourcen anderer Aufgaben erhalten. Änderungen lokal.

Gesamt: 1872 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
759 datierte Merkmalsdatensätze (617 neue/142 bestehende Modelle), 2975 Aussagen,
1187 Quellenreferenzen und 50 Firmenfokusse. 455 ausgewählte Modellprüfungen mit
6795 Feldern: 3277 dokumentiert, 3362 unbekannt, 147 widersprüchlich, neun Roadmap.
Von 518 ursprünglichen Referenzzielen haben 241 ausgewählte Feldprüfungen;
die offene Zahl sinkt von 283 auf 277. Drei Modellidentitäten, neun Listings und
862 BuyAndRent-Detailinhalte bleiben offen. Vollständigkeit, exklusive USPs,
unabhängige Leistung und Marktführerschaft bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Capra und Hypershell, Modellgrenzen und Preisangaben (Batch 69)

Fünf Capra- und fünf bestehende Hypershell-Modelle geprüft; drei ausdrücklich
benannte Hypershell-Modelle ergänzt: X Ultra, X Carbon und X Pro, jeweils getrennt
von den S-Varianten. 13 Prüfungen, 224 Felder: 86 dokumentiert, 138 unbekannt.
Zwei Firmenfokusse ergänzt. Alle 1961 Quellenidentitäten, 1862 übrigen alten
Katalogzeilen, 455 bisherigen Modellprüfungen und 50 Firmenfokusse erhalten.
Keine Kategorieübertragung. SmartFleet bleibt Software; Anwendungsfälle und die
nummerierte Halo Origin Edition ohne gesondert belegte Hardware werden nicht
als weitere Roboterkarten gezählt.

CAPRA200: 50 kg mit zwei Akkus, 1125 × 600 × 373 mm, 50 kg auf dem Chassis und
200 kg Zuglast, 6 km/h, 465 mm Wenderadius, bis 20 Stunden Betrieb abhängig von
Untergrund, Steigung und Nutzlast. Tabelle erlaubt bis vier Akkus; die Laufzeit
ist nicht ausdrücklich mit der gewogenen Zwei-Akku-Konfiguration gepaart.
CAPRA500: 73,5 kg ohne ausdrückliche Akku-Einschlussangabe, 1145 × 635 × 356 mm,
100 kg Chassislast und 500 kg Zuglast, 6 km/h, 480 mm Wenderadius, bis 15 Stunden
unter Last-/Streckenbedingungen. Beide: 60 Minuten drahtlos nur von 20 auf 80
Prozent, kein Volladeversprechen; IP65 Basisplattform, bis 50 Prozent Steigung
und 140 mm Stufe mit Geometrie-/Lastbedingungen. 50 Prozent sind keine 50 Grad.
Unter −10 °C ist ein zusätzliches Heizelement erforderlich. Tabellenwerte und
Fußnoten in zehn Zeilen mit zwei benannten Modellspalten geprüft; Flyertext
bestätigt die Trennung von Trag- und Zuglast. Keine visuelle PDF-Prüfung behauptet.

Carrier nennt 100 kg Oberdecklast und 500 kg beladenen Wagen. Die Hero-Zahl
500 kg wird nicht als 500 kg Chassislast übernommen. Konfigurierte Lösungen
Carrier/Scout/Urban behalten ihre Zehn-Stunden-Positionierung und erben keine
20-/15-Stunden-Dauer, Masse, Geschwindigkeit oder Abmessungen der Basisplattform.
Urban nennt zwei Stunden Laden ohne Start-/Endladezustand. Scout nennt
360-Grad-Überwachung, autonome Patrouillen, Fernüberwachung und manuelle
Übernahme. Urban arbeitet je nach Einsatz autonom oder teilautonom. IP- und
Sicherheitskomponentenbehauptungen zertifizieren keine beliebigen Aufbauten
oder öffentlichen Einsätze unabhängig.

Hypershell: X Ultra S und X Max S mit bis 1000 W, 22 Nm und unterstütztem Tempo
bis 25 km/h; X Pro S bis 800 W, 18 Nm und 20 km/h. Das sind Unterstützungswerte
für Träger, keine autonome Fahrgeschwindigkeit oder Frachttraglast. Ultra S
nennt bis 30 km je Akku und zwei enthaltene Akkus; kein garantiertes 60-km-Ziel
und keine Umrechnung in Akkustunden. Pro S nennt 17,5 km Standardreichweite;
Max S hat keine eigene belegte Kilometerangabe im geprüften Text. 1,8 kg sind
im Juni-Text speziell für Ultra S genannt, ohne geklärten Akku-Einschluss und
ohne Übernahme auf Max S/Pro S. Die neuen Felder `assistPower`, `assistancePace`
und `assistanceRange` erscheinen mit Quellenstatus in Detail, strukturierten
Product-Eigenschaften und Vergleich, mit Englisch/Deutsch und bestehendem
englischen Rückfall für andere UI-Sprachen. Andere Outdoor-Datensätze bleiben
in diesen optionalen Spalten leer.

Halo: vier aktive Hüft-/Kniegelenke, bis 1490 W Spitzenleistung, 2,6 kg genannte
Systemmasse, 370 g PocketVolt-Akku und bis 20 km je Akku. Akku-Einschluss in der
Systemmasse bleibt ungeklärt; keine Addition/Subtraktion geraten. Vier Motoren
sind keine vollständige mechanische Freiheitsgradzählung. Faltvolumen unter acht
Litern sind keine vollständigen Außenmaße; 85-Liter-Rucksackkompatibilität ist
keine Nutzlast. Ankündigung vom 3. September 2026: erste 200 Origin-Edition-Geräte
ab 2299 USD vorbestellbar, offizielle Verkäufe und gestaffelte Lieferungen für
November 2026 geplant. Diese Ankündigung bestätigt keine erfolgten Lieferungen
oder aktuellen Lagerbestand am 2. November. Die im Mai angekündigte S-Modell-
AI-Agent-Firmware bleibt ein Zukunftsplan. Herstellerberichtete SGS-/TÜV-Werte,
Ermüdungs- und Schutzvorteile sind keine unabhängig geprüften Gesundheits- oder
Verletzungspräventionswirkungen.

Der Juni-Portfolio-Text benennt X Ultra, X Carbon, X Pro und X Go mit damaligen
MSRP-Werten von 1999/1799/1199/999 USD. Die Juni-23-bis-30-Aktion ist abgelaufen.
Exakte Masse, Ausgangsleistung, Tempo, Reichweite, IP und Erstveröffentlichung
werden nicht aus dem speziell Ultra S betreffenden Absatz oder einer allgemeinen
X-Serienbehauptung übernommen. Die direkte Hypershell-Seite lieferte einmal HTTP
429; weitere Abrufe gestoppt. Drei frische herstellereigene Pressemitteilungen
über PRNewswire liefern datierte Belege, keine unabhängige Berichterstattung
oder vollständige aktuelle Shop-/Lieferprüfung.

Preisverarbeitung korrigiert: Betragsextraktion hängt keine Datumsziffern mehr an
den Geldbetrag an; zum Beispiel 1999 USD mit dem Datum 20. Mai 2026 sortiert als
1999. Preisbereiche nutzen die untere Grenze. Strukturierte exakte Offers nur für
unqualifizierte positive Beträge mit konsistenter Währung. Historische MSRP,
Vorbestellungs-Startpreise, Aktionen, Schätzungen, Bereiche und andere qualifizierte
Texte bleiben lesbarer Katalogtext. Globaler Abgleich aller 1875 Produktseiten:
352 unqualifizierte Offers erhalten,
1523 qualifizierte/unbekannte Preise ohne Offer,
18 ausdrücklich erkannte qualifizierte Preise und alle acht
Hypershell-Preise ohne exaktes Offer. Dies verifiziert keine aktuellen Verkäufer-
preise oder Lagerbestände des gesamten Altbestands.

Zwölf gespeicherte Quellenkörper: elf HTTP 200 und ein 429; zehn HTML, ein PDF,
eine Rate-Limit-Antwort. Hashes und extrahierter Text reproduziert, 51 begrenzte
Aussagen bzw. exakte Modellzellen geprüft. Keine Formulare/Bestellungen oder
Wiederholungsabrufe zuvor gesperrter Hosts. 13 gerenderte Modellseiten:
224 Felder, 65 Quellenmarkierungen,
133 ausgelassene Leerfelder, 48
strukturierte Eigenschaften und 58 Merkmalsätze. Zwei Firmenfokusse,
zehn ursprüngliche Modell-/Rechercheziele mit 170 Feldvorkommen und drei
Firmenbeschreibung-Ziele geprüft. Global: 468 geprüfte Modellseiten mit 7019
Feldern, 3382 sichtbare technische Werte mit Quellen,
3082 ausgelassene Leer-/NA-Felder und 31 belegte Startjahre.
Vergleichs-JSON 1739445 Byte; Katalogskript 1749655 Byte.

627 Unit-Tests in 48 Dateien und 106 Browserfälle bestanden: 48 Capra/Hypershell-,
40 Smart-Robotics- und 18 Vergleichsfälle, einschließlich 36 Axe-Prüfungen.
Build: 2924 Seiten, etwa 446 MB. Datenprüfung: null Fehler, 765 Hinweise,
drei zusätzliche unbekannte Erscheinungsjahre der neuen alten X-Modelle.
Lint/Format bestanden; erneuter Import null Ergänzungen. Eigene Testbrowser,
Vorschau und Hilfsprozesse geschlossen; Port 4321 frei, andere Aufgaben erhalten.
Änderungen lokal; kein Deployment.

Gesamt: 1875 Modelle/Konfigurationen, 641 Herstellerschreibweisen, 1035 Profile,
762 datierte Merkmalsdatensätze (620 neue/142 bestehende Modelle), 3004 Aussagen,
1194 Quellenreferenzen und 52 Firmenfokusse. 468 ausgewählte Modellprüfungen mit
7019 Feldern: 3363 dokumentiert, 3500 unbekannt, 147 widersprüchlich, neun Roadmap.
Von 518 ursprünglichen Referenzzielen haben 251 ausgewählte Feldprüfungen;
die offene Zahl sinkt von 277 auf 267. Drei Modellidentitäten, neun Listings und
862 BuyAndRent-Detailinhalte bleiben offen. Vollständigkeit, exklusive USPs,
unabhängige Leistung und Marktführerschaft bleiben unbewiesen.


## Ergänzung vom 2. November 2026 – Omron und ECOVACS, Varianten und Quellenkonflikte (Batch 70)

Zehn vorhandene Modelle geprüft und zwölf ausdrücklich benannte Hardware-/ESD-
Varianten ergänzt: LD-60 ESD, LD-90 ESD, LD-90x ESD, LD-250 ESD, OL-450S2,
OL-450S3, MD-650, MD-900, HD-1500 sowie GOAT A3000/A2000/O1000 LiDAR PRO.
22 Prüfungen mit 392 Feldern: 218 dokumentiert, 166 unbekannt, acht widersprüchlich.
Zwei Firmenfokusse ergänzt. Alle 1865 übrigen alten Katalogzeilen, 468 bisherigen
Modellprüfungen, 52 Firmenfokusse und 1961 Quellenidentitäten bleiben erhalten.
Keine Kategorieübertragung oder neue CSV-Spalte. Software, Mast-/Dock-/Pendant-
Optionen und GOAT-Zubehörpakete werden nicht als weitere Robotermodelle gezählt.
Die vorhandene OL-450S-Familie bleibt zusätzlich zu ihren benannten Varianten.

LD: Die ESD-Ausführungen stehen ausdrücklich in der Bestelltabelle mit eigenen
Bestellidentitäten; IEC 61340-5-1 bleibt eine Hersteller-Complianceangabe.
LD-60/90/90x einschließlich ESD: 62 kg mit Akku; LD-250/ESD: 148 kg mit Akku.
Der Akku muss separat bestellt werden: Masseneinschluss bedeutet keinen
Lieferumfang. LD-90x ist für Cart-Transporter-Anwendungen benannt. Laufzeiten
behalten Leer-/Volllastbezug. Alle LD-Ladezeiten von 2 h 10 min beziehen sich nur
auf 20–80 Prozent. LD-90/90x bleiben bei Nennlast auf ebenem Boden; die gemeinsame
PDF erlaubt die 4,8-Grad-/8,3-Prozent-Steigung nur bis 60 kg. LD-250 nennt maximal
1,7 Grad/3 Prozent. IP20 gilt für den Roboter, nicht andere Komponentenratings.

OL: Die Webseite druckt 1,2 mm/s; das gemeinsame S2/S3-Datenblatt nennt 1200 mm/s
vorwärts/seitwärts und 300 mm/s rückwärts. Der Einheitenkonflikt bleibt sichtbar
bei Familie und beiden Varianten. Plattenhöhe 108–308 mm ergibt 200 mm Hubweg;
308 mm sind keine Hubstrecke. S2: 771-mm-Platte, 188 kg ohne Mast/201 kg mit Mast;
S3: 851-mm-Platte, 192/205 kg, jeweils mit Akku. Kein einzelnes Familiengewicht
gewählt. 450 kg Hubkapazität, etwa elf Stunden leer/sieben Stunden voll, 25 Minuten
Laden nur 20–80 Prozent. Flache trockene Innenböden, keine Stufen; 10-mm-Spalten
nicht oberhalb 750 mm/s. 750-mm-Wenderadius und 685-mm-Schwenkradius sind getrennt.

MD/HD: 650/900/1500 kg Last; MD 220 kg ohne Akku/Zubehör, HD 506 kg mit Akku.
MD-900-Webspalte lässt Volllastlaufzeit aus; die gemeinsame PDF-Laufzeitzeile
deckt beide MD-Spalten ausdrücklich mit zehn Stunden leer/acht Stunden voll ab.
Kein Kopieren aus der Nachbar-Webspalte. HD hat 12,5/neun Stunden. Hilfsverbrauch
beeinflusst die Dauer. Laden 19,6 beziehungsweise 24 Minuten nur 20–80 Prozent;
eine Full-charge-Webüberschrift ändert den gedruckten Ladebereich nicht. MD-IP22
benötigt eingesetzte Top-Plate-Plugs, Ladepads bleiben IP10; Akku-IP33 ist nicht
Chassis-IP. Null Wenderadius bedeutet keinen verschwindenden Schwenkraum.

ECOVACS Commercial: K1-Webseite nennt 1,5 h Laden, Vergleichstabelle zwei Stunden.
700 m²/h Maximum und 1296 m²/h theoretische Kapazität tragen unterschiedliche
Bezeichnungen; beide Werte samt ungeklärtem Testbezug bleiben erhalten. 440 mm
Reinigungsbreite, 300 mm Walzenbreite und 420 mm Gehäusebreite sind verschiedene
Maße. Zehn Liter Staubbehälter werden kein Wassertank/Nutzlastwert. M1/M1 3D:
500-mm-Walze, 2160 m²/h theoretisch, 35/33 Liter Frisch-/Schmutzwasser, 2,5 h Laden
ohne Ladezustandsbereich. M1 3D: 126,5 kg und 1050 mm Höhe, M1: 125 kg/1012 mm.
3D-LiDAR wird nicht vom 3D-Modell auf die Standardausführung übertragen.

GOAT A3000: Verlinktes GPL11-Handbuch nennt 16,4 kg mit Akku und
680 × 460 × 342,5 mm. US-Tabellenhöhe 13,39 Zoll entspricht etwa 340,1 mm;
Abweichung bleibt gekennzeichnet. Mähen 118 Minuten von 100 auf 15 Prozent oder
80 Minuten von 85 auf 15 Prozent; kein pauschales Zwei-Stunden-Versprechen.
45 ± 5 Minuten Laden ohne genannte Ladezustände. 400 m²/h Labor-Mährate ist von
500 m² je zwei Stunden einschließlich Laden getrennt. 33 cm Schnittbreite,
IPX6 Mäher/IPX4 Station. US-Hauptprodukt: 2999,99 USD, ausverkauft, beobachtet am
2. November 2026. Der sichtbare 999,99-USD-Selektor gehört zum O1000 RTK.

GOAT PRO: A3000 PRO mit 7500 mAh/70 Minuten Laden, A2000 PRO 3000 mAh/50 Minuten,
O1000 PRO 5200 mAh/70 Minuten. A3000-PRO-Laufzeitzelle 160 hat keine Zeiteinheit;
kein 160-Minuten-Wert übernommen. Massenzelle 18.3KG unter lb-Überschrift bleibt
Einheitenkonflikt; Hero-Steigung 15 Grad widerspricht der 50-Prozent-/27-Grad-
Tabelle. A2000 PRO nennt 50 Minuten Mähen, O1000 PRO 90 Minuten. Mäher und
Trimmerbreiten, Maße mit/ohne Bürste, Arbeitsflächen-/Grenzsteigung und Station
bleiben getrennt. Regionale Hauptproduktpreise 2499,99/1999,99/1499,99 USD wurden
am 2. November als vorrätig angezeigt, nicht universell oder dauerhaft garantiert.
Zubehörpakete sind keine zusätzlichen Hardwareidentitäten.

WINBOT: Roboter 1,6 ± 0,1 kg und 271 × 271 × 77 mm, Station 5,5 ± 0,2 kg und
312 × 215 × 327 mm. 110 Minuten ±10 Prozent Akku-Betrieb sind von 30 Minuten
Stromausfall-Haftschutz getrennt; Netzbetrieb möglich. Ladezeit höchstens drei
Stunden ohne Ladezustandsgrenzen. Fast-Mode-Flächenzeit 1 min 45 s ± 15 s/m² ist
keine lineare Fahrgeschwindigkeit. 60 ± 5 ml Wassertank sind keine 4500-mAh-
Akkukapazität. Glas mindestens 3 mm und 30 × 40 cm Fenster; Außenglas nur mit
ordnungsgemäßer Sicherung, ruhigem Wind und ohne Regen/Schnee laut Handbuch.
Kein IP-Wert erfunden. Hauptproduktpreis 499,99 USD, datiert als vorrätig;
538-USD-Paket ist ein anderer Selektor. Unbelegte alte Startjahre von WINBOT und
ursprünglichem A3000 entfernt statt aus dem PDF-Uploaddatum neu datiert.

23 gespeicherte Quellenkörper, alle HTTP 200: 17 HTML und sechs PDFs. Hashes und
Text reproduziert; 161 begrenzte Aussagen/Modellzellen, neun Omron-Modelltabellen,
drei kommerzielle ECOVACS-Modellspalten und 14 PDF-Tabellenseiten geprüft.
Keine Formulare/Bestellungen, keine erneut abgerufenen gesperrten Hosts und keine
visuelle Bild-/PDF-Prüfung oder unabhängige Leistungs-/Zertifizierungsbehauptung.
Weitere Omron-Industrieroboter und übrige ECOVACS-Modelle bleiben außerhalb dieser
abgegrenzten Prüfung. A2500 RTK aus Zubehörkompatibilität bleibt Recherchehinweis.

22 gerenderte Produktseiten: 392 Felder, 199 Quellenmarkierungen, 149 ausgelassene
Leerfelder, 177 strukturierte Eigenschaften und 130 Merkmalsätze geprüft.
Zwei Firmenfokusse, zwei ursprüngliche Modell-Exportziele mit 36 Feldvorkommen,
fünf Firmenproduktziele und zehn ursprüngliche Rechercheziele mit 179 Feldern.
Globaler Metadatenabgleich: 490 Modellseiten, 7411 Felder, davon
3581 sichtbare technische Werte mit Belegen,
3231 ausgelassene Leer-/NA-Felder und 31 belegte Startjahre.
Globaler Preisabgleich: alle 1887 Produktseiten, 350
unqualifizierte Offers erhalten, 1537 qualifizierte/unbekannte Preise
ohne Offer. Datierte regionale Beobachtungen bleiben lesbarer Text ohne universelles
exaktes Offer. Dies ist keine erneute Verkäuferpreisprüfung sämtlicher Altmodelle.

636 Unit-Tests in 49 Dateien und 106 Browserfälle bestanden: 40 neue
Omron/ECOVACS-, 48 Capra/Hypershell- und 18 Vergleichsfälle, darin 36 Axe-Prüfungen
auf Desktop/Mobil und hell/dunkel. Kein vollständiger Repository-Browserlauf.
Build 2936 Seiten, etwa 448 MB; Datenprüfung null Fehler und 779 Hinweise
(+12 unbekannte Erstjahre neuer Modelle, +2 entfernte unbelegte Altjahre).
Semantische HTML-Korrektur: Vergleichsleiste als beschriftetes Aside, Produktkopf
als vom H1 benannte Section. Die zusätzliche Axe-Best-Practice-Prüfung hatte
Inhalte außerhalb von Landmarken gefunden; diese Ursache ist behoben. Keine
Änderung der Daten-/Vergleichslogik. Format/Lint, erneuter Import ohne Ergänzungen,
Inventar-/Quellen-/Such-/Vergleichsprüfungen bestanden. Eigene Browser, Server und
Hilfsprozesse geschlossen; andere Aufgaben unverändert.

Gesamtstand: 1887 Modelle/Konfigurationen, 774 datierte Merkmalsdatensätze,
632 neue Modelle dieser Aufgabe und 142 vorhandene Anreicherungen. 3104 einzelne
Merkmalaussagen, 1221 Produktquellenverweise, 54 Firmenfokusse, 7411 Felder auf
490 Modellen: 3581 dokumentiert, 3666 unbekannt, 155 widersprüchlich, neun Roadmap.
518 ursprüngliche Rechercheziele haben Merkmalsbelege; 261 ausgewählte Feldprüfungen,
257 offen. 53 von 591 Quellen-Firmengruppen mit Fokus, 538 ohne. Offline-
Heuristik weiter 114 Modell-/elf Markensuchhinweise; keine bestätigten Lücken.
Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte offen.
Vollständige Produktverifikation und Marktführerschaft bleiben unbelegt.
Prüfdateien: `scratch/competitor-research/primary/batch-70/`.


## Ergänzung vom 2. November 2026 – Quasi Robotics und Tennant (Batch 71)

Zehn vorhandene Modelle geprüft, drei neue Tennant-Modelle ergänzt: X2 ROVR SCRUB,
X16 SWEEP und P1 VAC. 13 Modellprüfungen mit 237 Feldern: 123 dokumentiert,
104 unbekannt und zehn widersprüchlich. Zwei Firmenfokusse ergänzt. Alle 1877
übrigen bisherigen Katalogzeilen behalten ihre Werte, 490 vorherige Modellprüfungen,
54 Firmenfokusse und 1961 Quellenidentitäten bleiben erhalten. Die Cleaning-CSV
hat zusätzlich die optionale Spalte minAisleWidth; andere Zeilen erhalten dort nur
einen leeren Wert. Vorhandene Oberfläche und Vergleich unterstützen das Feld bereits.
Keine Änderung am Anwendungscode oder Kategorieübertragung. Docks, Software,
Akkus und Regalzubehör sind keine zusätzlichen Roboteridentitäten.

Quasi: Elf HTML-Tabellen mit fünf expliziten Modellspalten und gemeinsam markierten
Zellen sichern Mini, Standard, Large, PartPorter und Heavy ab. Mindestgangbreiten
0,76/0,9/1,2/1,5/1,2 m, unterschiedliche Ablagen und vorgeschlagene Gesamtlasten
bleiben modellbezogen. Gerundete lb/kg-Werte werden nicht als exakte Umrechnung
oder universelle Traglast behandelt. Erste vier Varianten: Differentialantrieb,
720 Wh und bis 16 Stunden; Heavy: Mecanum, 1440 Wh und bis 14 Stunden. Laden
etwa 60/90 Minuten bis 50 Prozent und 2,5/4 Stunden bis 100 Prozent ohne genannten
Anfangsladezustand. Wireless optional nur bei Large, PartPorter und Heavy;
Komponenten-IP20 ist kein Roboter-IP-Wert. Sensor-, E-Stop- und Stack-Light-Optionen
bleiben je Spalte getrennt. 46.500 m² Arbeitsbereich ist keine Stundenleistung.
Steigung ist lastabhängig: zehn Grad leer, ungefähr fünf Prozent halb und drei
Prozent voll beladen. Geschwindigkeit ist konfigurierbar, aber ohne numerisches
Maximum. Local-WebSocket und Cloud-REST haben unterschiedliche Voraussetzungen.
Kauf/RaaS nach Angebot; Stundenlohn- und ROI-Rechner sind keine Kaufpreise.

Tennant: Dedicated X4-/X6-Sheets geben 1860/6967 m² je Lösungstank an; die
X-Series-Broschüre nennt separat 1860/1914 m² je Stunde theoretisch im manuellen
Modus. Keine Umdeutung zu autonomer Stundenleistung. X4-Länge 960 mm steht
940 mm in der X-Series-Broschüre gegenüber. X2-Datenblatt: 10.000 ft²/929 m²
je Tank; X-Series druckt theoretisch manuell je Stunde 10.000 ft²/1929 m², deren
Umrechnung nicht stimmt. Konflikt bleibt sichtbar. X2-Maße und Tankvolumen tragen
die dokumentierte Präzision sowie die Rundungen anderer Broschüren; Navigation,
90-Grad-Einfahrt und U-Turn unter 762 mm sind keine exakt festgelegte Mindestbreite.
Herstellerankündigungen belegen X4 2024, X6 2025 und X2 2026.

T380AMR-/T7AMR-Broschüren nennen Lithiumlaufzeiten bis fünf/6,5 Stunden; gemeinsames
März-2022-Sheet vier/sechs Stunden. Beide Broschüren tragen Februar-2022-Stände;
daraus folgt keine bewiesene spätere Aufrüstung. T380 nennt selbst 385 und 386 kg
für dieselben 850 lb. T7-Flächenangabe ohne Zeitintervall bleibt ohne Stundenwert.
T16: vier/5,5 Stunden Economy-Mode sind nicht die beworbenen bis 13 Reinigungsstunden
innerhalb eines 24-Stunden-Zyklus. Vier Stunden Laden gelten nur für Lithium mit
High-Capacity-Offboard-Lader, ohne angegebene Ladezustandsgrenzen. 635-kg-Lithium-
Konfiguration wird mit 11,5 beziehungsweise 12,2 kWh gekoppelt; Quellenkonflikt bleibt.
Autonome und manuelle Fahrgeschwindigkeiten, Betrieb-/Transportsteigungen sowie
Passage, Einfahrt und U-Turn bleiben getrennt. Unbelegtes T380-Startjahr entfernt.

X16 SWEEP: 4621 m²/h autonom gegenüber 9777 m²/h manuell; 150 L/158 kg beziehen
sich auf trockenen Hopperinhalt. Gangbreite web 1400 mm versus PDF/Broschüre 1440 mm
und bis sechs Stunden web versus mehr als sechs Stunden Eco im PDF bleiben
widersprüchlich. P1 VAC: bis 3,5 Stunden Standardmodus, 1,5 Stunden Laden ohne
Zustandsgrenzen, 700 m²/h ohne Seitenbürste. 440-mm-Arbeitsbreite mit Seitenbürste
ist von der 279-mm-Hauptbürste getrennt. Web 46 kg und 558×420×592 mm weichen von
44,7 kg und 558×425×608 mm in der Spezifikation ab. Staubbehälter, Auffangschale,
Ladegerät und Roboter bleiben getrennt; kein Wasser-, Nutzlast- oder achtstündiger
Laufzeitwert erfunden. Erstjahre von P1 und X16 nicht aus PDF-Revisionen abgeleitet.

51 gespeicherte Quellenkörper, alle HTTP 200: 26 HTML, 17 PDFs und acht regionale
Hersteller-Dokument-APIs. Hashes und Text reproduziert; 406 begrenzte Text-/Zellbelege,
elf Quasi-Tabellen und 35 PDF-Textseiten erfasst. Keine Formulare, keine erneut
abgerufenen gesperrten Hosts, keine visuelle PDF-/Bildprüfung und keine unabhängigen
Leistungs-, Exklusivitäts- oder Zertifizierungsnachweise.

13 gerenderte Produktseiten: 237 Felder, 120 Quellenmarkierungen, 91 ausgelassene
Leerfelder, 104 strukturierte Eigenschaften und 90 Merkmalsätze geprüft. Zwei
Firmenfokusse, vier ursprüngliche Modell-Exportziele mit 68 Feldvorkommen, zehn
Firmenproduktziele und zehn ursprüngliche Rechercheziele mit 180 Feldern geprüft.
Globaler Abgleich: 503 Modellseiten, 7648 Feldwerte, 3701 sichtbare technische Werte
mit Quellenstatus, 3322 ausgelassene Leer-/NA-Felder und 34 belegte Startjahre.
Alle 1890 Preis-Ausgaben geprüft: 350 unqualifizierte Offers, 1540 qualifizierte oder
unbekannte Preise ohne Offer. Keine erneute Verkäuferpreisprüfung aller Altmodelle.

643 Unit-Tests in 50 Dateien und 96 Browserfälle bestanden: 38 neue Quasi/Tennant-,
40 Omron/ECOVACS- und 18 Vergleichsfälle, darin 36 Axe-Prüfungen auf Desktop/Mobil,
hell/dunkel. Erster Lauf: 92 bestanden, vier Testannahmen fehlgeschlagen. Suchtest auf einen
reinen Merkmalsbegriff und Vergleichstest auf tatsächliche Spaltenüberschriften
sowie lokalisierte Dezimalzeichen korrigiert; alle vier gezielt nachgeprüften
Fälle bestanden. Keine Anwendungskorrektur dafür nötig. Kein vollständiger
Repository-Browserlauf. Build 2939 Seiten, etwa
449 MB; Datenprüfung null Fehler, 782 Hinweise (+2 neue unbekannte Erstjahre,
+1 entferntes unbelegtes Altjahr). Format/Lint, Import ohne Ergänzungen und
Inventar-/Quellen-/Such-/Vergleichsprüfungen bestanden. Eigene Testprozesse und
Server geschlossen und überprüft; andere Aufgaben unverändert.

Gesamtstand: 1890 Modelle/Konfigurationen, 777 datierte Merkmalsdatensätze,
635 neue Modelle dieser Aufgabe, 142 vorhandene Anreicherungen, 3164 einzelne
Merkmalaussagen, 1257 Produktquellenverweise und 56 Firmenfokusse. 7648 Felder auf
503 Modellen: 3704 dokumentiert, 3770 unbekannt, 165 widersprüchlich, neun Roadmap.
518 ursprüngliche Rechercheziele mit Merkmalsbelegen, 271 mit ausgewählten
Feldprüfungen, 247 offen. 55 von 591 Quellen-Firmengruppen mit Fokus, 536 ohne.
Offline-Heuristik weiterhin 114 Modell-/elf Markensuchhinweise, keine bestätigten
Lücken. Drei Modellidentitäten, neun Listingidentitäten und 862 Buy-Detailinhalte
bleiben offen. Vollständige Produktverifikation und Marktführerschaft unbelegt.
Prüfdateien: `scratch/competitor-research/primary/batch-71/`.


## Ergänzung vom 2. November 2026 – Cleanfix und EZ-Robot (Batch 72)

Acht vorhandene Modelle mit 13 neuen Prüfungen und 231 Feldern bearbeitet:
102 dokumentiert, 125 unbekannt, vier widersprüchlich. Fünf neue Produktidentitäten:
RA660 Navi XL Generation 2, EZ-InMoov Enhanced Robot Head, EZ-InMoov Humanoid Robot
(Hardware Kit), AdventureBot und Battle Flipper. JD Humanoid war eine originale
Dublette zu JD mit derselben Herstellerseite/SKU KI-0100. Alte Bilddatei zu JD
übernommen; alte URL führt per noindex-Weiterleitung mit kanonischem Ziel zu JD.
Favoriten und Vergleichsauswahlen werden über die bestehende Aliaslogik migriert
und dedupliziert. Alte URL bleibt aus Sitemaps; Markenprofil zeigt eine JD-Karte.
Keine Änderung des Anwendungsalgorithmus. Die Educational-CSV erhält die bereits
von Detailseite/Vergleich unterstützte optionale driveMode-Spalte.

Alle 1881 übrigen bisherigen Katalogzeilen behalten ihre Werte; 503 frühere
Modellprüfungen, 56 Firmenfokusse und 1961 Quellenidentitäten bleiben erhalten.
Zwei neue Firmenfokusse. Fünf Ergänzungen minus eine Dublette ergeben vier
zusätzliche Katalogeinträge. Ausgangsbestand bereinigt 1254 plus 640 Ergänzungen
während dieser Aufgabe ergibt 1894 Modelle/Konfigurationen. Keine neue Roboterkarte
für Controller-Developer-Kit, zwei Umbausätze, Softwarepakete oder Classroom-Bundles.

Cleanfix: Pure/Connect bleiben getrennt; iPad-App und Berichte sind Connect-spezifisch.
Optionaler Lithium-/120-Ah-Akku und Fast Charging werden nicht als universelle
Standardausstattung präsentiert. 40 Minuten bis 80 Prozent und 60 bis 100 Prozent
nennen keinen Anfangsladezustand. M- und XL-Membrantanks teilen Frisch-/Schmutz-
volumen; 45/45 beziehungsweise 110/110 Liter sind keine unabhängigen 90/220 Liter.
Mai-2025-XL-Konfiguration: 313 kg mit Wasser, 1010×850×1185 mm, 0,6 m/s. Explizit
benannte Generation 2: 1015×850×1100 mm, 215 kg mit Akku ohne Wasser auf der Webseite
und 315 kg mit Wasser im Flyer. Unterschiedliche Massenzustände sind kein Konflikt.
Web-Speedzelle 08. m/s bleibt als missgebildete Angabe sichtbar neben 0,8 m/s im
Gen.-2-Flyer. 24/7-Dockbetrieb ist kein kontinuierlicher Akkulaufzeitnachweis.

S170: 170-mm-Hauptwalze, 275 mm mit Seitenbürste, bis 250 Minuten. Ladewerte
5,5–6 Stunden auf Webseite/Flyer versus höchstens 5,5 im Juli-2024-Handbuch bleiben
widersprüchlich. Ramp-slope-Zeile mit 20 mm wird weder als Grad noch als bewiesene
Stufenhöhe umgedeutet. 320 m² ohne Zeitintervall bleibt ohne Stundenleistung;
Empfehlungen 20–300/320 m² behalten ihre Quellen. 0,28-L-Staubbehälter und 2,5-L-
Stationsbeutel sind keine Wassertanks. SIM-Nutzung braucht laut Handbuch ein
bezahltes FieldBots-OS-Abo. Indoor-Trockenreinigung, kein industrielles Umfeld,
keine nassen/gefährlichen Stoffe laut Handbuch. UVC-/Cybersecurity-Aussagen bleiben
Herstellerangaben ohne unabhängigen Wirksamkeitsnachweis.

EZ-Robot: Produktmassen und L×B×H bleiben getrennt von Versandwerten. Six nennt
zwölf Gelenke/zwölf Hebelservos; andere Servo- und Controllerkanalzahlen liefern
keinen pauschalen DOF-Wert. Servodrehmoment/Gradgeschwindigkeit sind weder Nutzlast
noch lineare Fahrgeschwindigkeit. JD-Altersangabe 10+ ersetzt keine allgemeine
Kit-Altersgrenze; 16 DOF und 2014 aus der alten Dublette werden nicht übernommen.
AdventureBot und Battle Flipper unterscheiden sich durch Mechanik und 0,71/0,79 kg.

InMoov-Kits benötigen selbst gedruckte Kunststoffteile. Standardkopf: vier Servos,
LiPo/USB-Lader, 1,25 kg zusammengebaut. Enhanced: fünf schwere plus zwei Mikroservos,
zusätzliche Halsbewegung/Faseroptik, 7,5-V-Netzteil und 1,75 kg. Enhanced-Höhe 33 cm
und 12,1 Zoll stimmen nicht überein und bleiben markiert. Torso/Kopf-Hardwarekit
ist kein fertig montierter laufender Ganzkörperroboter; eigene Masse, Maße und
Gelenkzahl bleiben unbekannt statt von verwandten Produktkarten übernommen.
Ein Jahr ARC Pro ist Softwareumfang, keine weitere Hardwareversion. Beobachtete
USD-Einzelpreise und Kopf-Optionsspannen sind auf den 2. November datiert und mit
Listinglabel Unavailable versehen; keine universellen exakten Offers. Die
2026-Preisliste rundet Dollarwerte; Paket-/Zubehörpreise bleiben getrennt.

31 nutzbare gespeicherte Quellenkörper: 21 HTML, zehn PDFs. Hashes und extrahierter
Text reproduziert, 27 begrenzte Text-/Modellbelege. Archivierte PDF-Textseiten sind
keine visuell geprüften Seiten; die weitgehend gescannte EZ-Broschüre liefert nur
elf Textzeichen und wird nicht für Produktbehauptungen genutzt. Neue 403-Sperre
auf cleanfix-robotics.com beobachtet und weitere Anfragen dort gestoppt; öffentliche
Herstellerunterlagen unter cleanfix.com genutzt. Keine früher gesperrten Hosts
erneut abgerufen, keine Formulare, keine visuelle Bild-/PDF-Prüfung.

13 gerenderte Produktseiten: 231 Felder, 86 Quellenmarkierungen, 119 ausgelassene
Leerfelder, 68 strukturierte Eigenschaften und 76 Merkmalsätze geprüft. Zwei
Firmenfokusse; vier ursprüngliche Modell-Exportziele mit 76 Feldvorkommen und acht
ursprüngliche Rechercheziele mit 144 Feldern. Globaler Metadatenabgleich: 516
Modellseiten/7879 Felder, 3787 sichtbare technische Werte,
3441 ausgelassene Leer-/NA-Felder und 34 belegte Startjahre. Alle 1894
Preis-Ausgaben geprüft: 350 unqualifizierte Offers, 1544 ohne Offer. Kein erneuter
Verkäuferpreischeck aller Altmodelle. 653 Unit-Tests in 51 Dateien und 94 Browserfälle
bestanden: 38 neue Cleanfix/EZ-, 38 Quasi/Tennant- und 18 Vergleichsfälle, darin 36
Axe-Prüfungen auf Desktop/Mobil, hell/dunkel. Build 2943 Seiten, etwa 450 MB;
Datenprüfung null Fehler/787 Hinweise, fünf neue unbekannte Erstjahre. Anfangs
falsche Unterfilter-Tags neuer Kits korrigiert und Generationsbezeichnung außerhalb
von Klammern geführt, damit der vorhandene Dublettencheck sie erhält. Format/Lint,
Import ohne Ergänzungen, Daten-/Quellen-/Such-/Vergleichs-/Identitätschecks bestanden.
Eigene Testprozesse/Server geschlossen und geprüft; andere Aufgaben unverändert.

Gesamtstand: 1894 Modelle/Konfigurationen, 782 datierte Merkmalsdatensätze,
640 Ergänzungen dieser Aufgabe und 142 bestehende Anreicherungen. 3216 einzelne
Merkmalaussagen, 1282 Produktquellenverweise und 58 Firmenfokusse. 7879 Felder auf
516 Modellen: 3806 dokumentiert, 3895 unbekannt, 169 widersprüchlich, neun Roadmap.
518 ursprüngliche Rechercheziele mit Merkmalsbelegen; 279 mit Feldprüfung und
239 offen. 57 von 591 Quellen-Firmengruppen mit Fokus. Drei Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Offline-Heuristik
weiter 114 Modell-/elf Markensuchhinweise, keine bestätigten Lücken. Vollständige
Produktverifikation und Marktführerschaft bleiben unbelegt.
Prüfdateien: `scratch/competitor-research/primary/batch-72/`.


## Ergänzung vom 2. November 2026 – DJI und HWArobotics (Batch 73)

Acht vorhandene Modelle geprüft und vier benannte Produkte ergänzt: DJI Mavic 3 Pro
Cine sowie HWArobotics FPSS1500A, FPSS1500B und GTR200. Zwölf neue Prüfungen umfassen
225 Felder: 91 dokumentiert, 131 unbekannt und drei widersprüchlich. Zwei neue
Firmenfokusse. Alle 1886 übrigen Katalogzeilen, 516 vorherigen Modellprüfungen,
58 Firmenfokusse und 1961 Quellenidentitäten bleiben erhalten. Keine Änderungen
am Anwendungsalgorithmus, an CSV-Spalten oder an Modell-Aliassen.

DJI: Die Mini 4 Pro erreicht laut Hersteller 34 Minuten mit Standardakku oder
45 Minuten mit Plus-Akku; Plus ist auf der geprüften Seite in Europa nicht
verfügbar und erhöht die Masse über 249 g. Flug, Schweben, Funkreichweite und
Flugdistanz behalten ihre unterschiedlichen Testbedingungen. Startmasse liefert
weder maximal zulässige Startmasse noch Nutzlast. Mavic Standard mit 958 g und
8 GB bleibt getrennt von Cine mit 963 g, 1 TB und Apple ProRes auf drei Kameras.
Fly More und Premium sind Zubehörpakete. Air 3S mit 27 m/s benötigt äquivalent
6 m/s Rückenwind, EU-Grenze 19 m/s; Flip mit 16 m/s benötigt 4 m/s Rückenwind,
Tracking bleibt bei 12 m/s. Ladezeiten behalten Ladegerät/Hub, Akkuzahl und
sequentielles/paralleles Laden; nur Flip nennt ausdrücklich 0–100 Prozent.
Dreiachsige Kamerastabilisierung ist keine Gesamtroboter-DOF-Zahl.

HWA: Ladeeinheit, Shuttle, Lift und vollständiges Regalsystem bleiben getrennt.
SLS300/400 nennen 35 kg Nennlast und 50 kg Maximum; SLS500 nennt 3–20 kg,
SLS600 35/50 kg. Die 2500 beziehungsweise mindestens 1000 Behälter pro Stunde
sind Single-Aisle-Compound-Systemraten; SLS400 behält die Fußnote mit 10 m Höhe
und 50 m Regallänge. SLS500 nennt mindestens 540 pro Stunde für einen Eingang.
Behältermaße sind keine Chassisabmessungen; 70 kg Güterlift und über 160 kg
Shuttle-plus-Tote-Lift sind andere Module. SLS300/400 behalten 4 m/s aus ihren
benannten Datenblättern, SLS500 bleibt ohne eigene Geschwindigkeitsangabe.
SLS600 behält die gedruckten Ungleichungen trotz Maximum-Überschriften.
24-Stunden-Systembetrieb belegt keine Laufzeit einer Akkuladung.

Die aktuellen Tote-Webseiten heißen SLS900 Standard, Variable, Buffer & Sort
und 4-Way, verlinken jedoch ältere SLS300/400/500/600-Datenblätter. Umbenennung
und Hardwarekontinuität sind ungeklärt. Abweichende aktuelle Geschwindigkeiten,
Behältergrenzen und Laufzeitaussagen werden nicht auf ältere Modelle übertragen.
Keine zusätzlichen SLS900-Karten oder behaupteten Aliasse angelegt.

FPSS1500A ist für −10 bis 50 °C, B für −25 bis 50 °C beschrieben. Das Shuttle
misst 1172 × 960 × 125 mm bei 350 kg Eigengewicht und 1500 kg Palettenlast.
1200 × 1000 mm ist das Palettenformat, 2000 kg die separate Hubwerkskapazität.
35 mm Shuttle-Hub in drei Sekunden ist nicht die 22 m Regallagerhöhe. Acht
Stunden pro Ladung bleiben getrennt von mehrtägigem Betrieb mit Nachladen;
die B-FAQ nennt zusätzlich 72 Stunden ohne klare Ladeabgrenzung und bleibt
als Konflikt markiert. Headline-Maximum 2 m/s versus Tabelle ≥2 m/s bleibt bei
beiden Varianten sichtbar. ±3 mm ist Shuttle-Positionierung. Keine IP-Klasse,
Ladezeit oder DOF aus Räderzahl abgeleitet. GTR200 ist eine kameragestützte
Roboter-Pickstation laut archivierter Herstellerbroschüre; PSD310/PSS105 sind
menschliche Arbeitsstationen, MFC ist Software. Keine fremden Arm-/Greiferwerte,
Projekt-Tagesraten oder Akku-Laufzeiten übernommen. Aktuelle Lieferung und genaue
Konfiguration bleiben unbestätigt.

25 gespeicherte Quellenkörper: 17 HTML und acht PDFs. Hashes und Text reproduziert,
21 begrenzte Textbelege sowie 63 PDF-Textseiten mit Koordinaten archiviert.
Keine visuelle Bild-/PDF-Prüfung, Formulare oder erneuten Abrufe gesperrter Hosts.
Zwölf gerenderte Modellseiten mit 225 Feldern, 82 Quellenmarkierungen, 119
Leerfeldauslassungen, 70 strukturierten Eigenschaften und 65 Merkmalsätzen geprüft.
Zwei Fokus-Seiten; vier ursprüngliche Modell-Exportziele mit 80 Feldern, vier
Firmenbeschreibungsziele und acht Rechercheziele mit 148 Feldern. Globaler Abgleich
von 528 Modellseiten/8104 Feldern: 3869 sichtbare Werte mit Quellen, 3560 ausgelassene
Leer-/NA-Felder und 34 belegte Erstjahre. Alle 1898 strukturierten Preisausgaben
geprüft: 350 Offers und 1548 ohne Offer; kein erneuter Verkäuferpreischeck aller
Altmodelle. 661 Unit-Tests in 52 Dateien und 94 Browserfälle bestanden: 38 neue
DJI/HWA-, 38 Cleanfix/EZ- und 18 Vergleichsfälle, darin 36 Axe-Prüfungen auf Desktop
und Mobil in hell/dunkel. Build: 2947 Seiten, etwa 450 MB. Datenprüfung: null
Fehler und 791 Hinweise, vier zusätzliche unbekannte Erstjahre. Der erste Testlauf
hatte nur einen veralteten globalen Konfliktzähler; nach Aktualisierung von 169
auf 172 bestehen alle 661 Fälle. Format, Lint, Bestands-/Quellen-/Vergleichschecks
und Import ohne Ergänzungen bestanden. Alle 159 eigenen Testprozesse beendet,
Serverport frei, keine eigenen Recherche-Hilfsprozesse; andere Aufgaben erhalten.

Gesamtstand: 1898 Modelle/Konfigurationen, 786 datierte Merkmalssätze, 644 Ergänzungen
und 142 bestehende Anreicherungen. Bereinigte Ausgangsbasis weiterhin 1254 nach
der früheren JD-Dubletten-Korrektur. 3257 einzelne Merkmalaussagen, 1299 Produkt-
quellenverweise und 60 Firmenfokusse. 8104 Felder auf 528 Modellen: 3897 dokumentiert,
4026 unbekannt, 172 widersprüchlich und neun Roadmap. Alle 518 ursprünglichen
Rechercheziele haben Merkmalsbelege; 287 haben Feldprüfungen, 231 sind offen.
59 von 591 Quellengruppen haben einen Firmenfokus. Drei ursprüngliche Modell-
identitäten, neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen;
dazu die SLS900-Namens-/Hardwarezuordnung. Die Heuristik bleibt bei 114 Modell-
und elf Markensuchhinweisen. Vollständige Herstellerverifikation und Marktführung
bleiben unbelegt. Prüfdateien: `scratch/competitor-research/primary/batch-73/`.


## Ergänzung vom 2. November 2026 – GreyOrange und KUKA (Batch 74)

Acht vorhandene Modelle geprüft und sieben benannte iisy-Varianten ergänzt:
LBR iisy 3 R760, 6 R1300, 8 R930, 11 R1300, 11 R1300 CR, 15 R930 und 15 R930 CR.
15 neue Prüfungen mit 275 Feldern: 114 dokumentiert, 160 unbekannt und ein Konflikt.
Zwei neue Firmenfokusse. Alle 1890 übrigen Katalogzeilen, 528 vorherigen
Modellprüfungen, 60 Firmenfokusse und 1961 Quellenidentitäten erhalten. Keine
Anwendungsänderungen, neuen CSV-Spalten oder behaupteten Modell-Aliasse.

GreyOrange: Uplift-L nennt 1000 kg und 2 m/s; Elevate 1400 kg und 1,50 m/s.
AnyPallet hat bis 2000 kg, XXL bis 2500 kg, beide 1,4 m/s beladen beziehungsweise
1,7 m/s unbeladen. Elevate nimmt geschlossene Paletten erhöht auf, AnyPallet
auch vom Boden. XXL nennt 2450 mm Gabeln; horizontale Gabellänge ist keine
Hubhöhe. Eigene Modellmaße bleiben getrennt von Gangbreite und Wenderadius.
Uplift-L druckt 1280 mm Länge und zugleich 51,2 Zoll; letzteres entspricht
1300,48 mm. Beide Angaben und der Konflikt bleiben sichtbar. Masse, Akku-/Lade-
dauer, IP-Code, Fahrwerkskinematik, Abstände und numerische Hubhöhen bleiben
unbelegt statt von anderen Modellen abgeleitet.

GreyMatter ist Software zur Orchestrierung; CRN umfasst ausdrücklich Hardware
von Drittanbietern. Die Ranger-Markenbezeichnung belegt nicht, wer jedes Chassis
fertigt. Sodimac mit 63 AMRs und 4000 Paletten pro Tag ist ein Einsatzbericht zum
Flottenbetrieb, keine einzelne Roboterleistung. Einsparung, Implementierungszeit
und ROI bleiben nicht unabhängig geprüfte Anbieterclaims mit Anwendungskontext.

KUKA: iiwa hat sieben Achsen und Sunrise Cabinet; iisy sechs Achsen mit aktueller
iiQKA.OS2-Plattform und KR C5 micro-2 laut benannter Webzeile. Standard-iiwa:
7 R800 mit 23,9 kg und ±0,1 mm Wiederholgenauigkeit; 14 R820 mit 29,9 kg und
±0,15 mm. Die Tabelle und Broschüre beschränken ihre Daten auf Standardversionen.
CR-Masse und -Wiederholgenauigkeit bleiben daher offen. iiwa-CR-Webzeilen nennen
nur Bodenmontage, Standard zusätzlich Wand/Decke. 800/820 mm Reichweite ist keine
komplette dreidimensionale Körperabmessung; ±2 Prozent Drehmomentgenauigkeit ist
keine kartesische Positioniergenauigkeit oder Nutzlastreserve.

iisy 3 R760 hat IP30 und 22,8 kg; größere Varianten IP54. Standard 6/11 R1300
haben 46,3 kg, 8/15 R930 43,2 kg. Standard-Wiederholgenauigkeit ±0,1 mm beim
3-kg-Modell und ±0,05 mm bei den größeren. Die eigenen CR-Zeilen für 11 und 15 kg
belegen Identität, Last, Reichweite, IP und Montage; Standardmassen und -präzision
werden nicht übernommen. Familienangaben zu optionaler ISO-Klasse 3 und ESD sind
keine individuellen Anwendungszertifikate. IP, Reinraumklasse und sichere
Kollaboration sind verschiedene Eigenschaften. Werkzeug, Medienflansch und
Softwarepakete werden nicht zu enthaltenen Händen oder zusätzlichen Robotern.
Kein garantierter schutzzaunfreier Einsatz und keine unabhängige Sicherheits-
oder Exklusivitätsprüfung. KMR iisy-2 sowie Education-Zellen/-Kits aus dem großen
Portfolio sind mit Seitenverweisen als gesondert zu prüfende Integrationsleads
festgehalten; nicht pauschal importiert.

Neun nutzbare Quellenkörper: sieben HTML und zwei PDFs. Zwei zunächst vermutete
PDF-Adressen lieferten allgemeines Fehler-HTML mit HTTP 200 und wurden
semantisch ausgeschlossen. Byte-Hashes und Text reproduziert, 13 exakte Textanker,
begrenzte Modellblöcke und acht PDF-Textseiten mit Koordinaten archiviert. Der
102-seitige Gesamtkatalog ist vollständig gespeichert, fünf ausgewählte Seiten
fließen in den Textbeleg ein. Keine visuelle Bild-/PDF-Prüfung, Formulare oder
erneuten Abrufe früher gesperrter Hosts.

15 gerenderte Modellseiten mit 275 Feldern, 100 Quellenmarkierungen, 145
Leerfeldauslassungen, 85 strukturierten Eigenschaften und 86 Merkmalsätzen geprüft.
Zwei Fokus-Seiten; ein ursprünglicher Modell-Export mit vier Zielmodellen/68
Feldern und acht Rechercheziele/156 Felder. Global 543
Modellseiten mit 8379 Feldern geprüft:
3969 sichtbare Werte samt Quellen,
3705 ausgelassene Leer-/NA-Felder und 34 belegte Erstjahre.
Alle 1905 strukturierten Preisausgaben geprüft: 350 Offers und 1555 ohne Offer;
kein erneuter Verkäuferpreischeck aller Altmodelle. 669 Unit-Tests in 53 Dateien
und 94 Browserfälle bestanden: 38 neue GreyOrange/KUKA-, 38 DJI/HWA- und 18
Vergleichsfälle, darin 36 Axe-Prüfungen auf Desktop/Mobil in hell/dunkel. Build:
2954 Seiten, etwa 452 MB. Datenprüfung: null Fehler und 798 Hinweise, sieben
zusätzliche unbekannte Erstjahre. Format, Lint, Import ohne Ergänzungen und
Bestands-/Quellen-/Vergleichschecks bestanden. Alle 159 eigenen Testprozesse beendet,
Serverport frei; keine eigenen Recherche-Hilfsprozesse, andere Aufgaben erhalten.

Gesamtstand: 1905 Modelle/Konfigurationen, 793 datierte Merkmalssätze, 651 Ergänzungen
und 142 bestehende Anreicherungen. Bereinigte Ausgangsbasis weiterhin 1254 nach
der früheren JD-Dubletten-Korrektur. 3319 einzelne Merkmalaussagen, 1329 Produkt-
quellenverweise und 62 Firmenfokusse. 8379 Felder auf 543 Modellen: 4011 dokumentiert,
4186 unbekannt, 173 widersprüchlich und neun Roadmap. Alle 518 ursprünglichen
Rechercheziele mit Merkmalen; 295 mit Feldprüfungen und 223 offen. 61 von 591
Quellengruppen haben einen Firmenfokus. Drei ursprüngliche Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Heuristik weiter
114 Modell- und elf Markensuchhinweise. Frühere offene Herstellerzuordnungen und
neue Integrationsleads bleiben erhalten. Vollständigkeit und Marktführung sind
weiter unbelegt. Prüfdateien: `scratch/competitor-research/primary/batch-74/`.


## Ergänzung vom 2. November 2026 – VideoRay und Standard Bots (Batch 75)

Acht vorhandene Modelle geprüft: VideoRay Defender, Pro 5, Ally und Wraith;
Standard Bots Spark, Core, Thor und Bolt. 131 neue Feldprüfungen: 65 dokumentiert,
58 unbekannt, sechs widersprüchlich und zwei Roadmap-Angaben. Zwei Firmenfokusse.
Keine neue Modellidentität, Kategorie oder CSV-Spalte. Alle 1897 übrigen Zeilen,
543 vorherigen Modellprüfungen, 62 Firmenfokusse und 1961 Quellenidentitäten erhalten.

VideoRay: Bewegungsachsen sind nicht Thruster oder die neun IMU-Sensorachsen.
Pro 5 hat drei, Ally vier, Defender und Wraith sechs kontrollierte Freiheitsgrade.
Der Herstellervergleich benennt Erstjahre 2019, 2024, 2017 und 2025 ausdrücklich.
Pro 5 nennt im Datenblatt 11,8 kg und 300 m, auf der Produktseite 10 kg und 305 m;
auch 4,4 versus über 4,4 Knoten bleibt als Quellenabweichung sichtbar. Wraith:
2026-Vergleich 4,3 Knoten und getrennt 1,0 m/s Heave/2,0 m/s Transit; Datenblatt
Version 250826: 4,2 Knoten und 1,5 m/s vertikal. Piloting-Manipulatorlasten
1,4/10,0/9,5/36,3 kg bleiben getrennt von Schub, Pollerzug und >100 lb Bergung.
Defender 300 m Standard sowie 1000/4000-m-Konfigurationen sind keine einheitliche
Standardtauchtiefe; 450/1500 m Tether-Reichweite ist kein Tiefenbeleg.
Ally-Akkus sind aktuell nicht verfügbar/integrationsbereit. Base/Premium und
Basic/SAR sind Zubehörpakete, keine zusätzlichen Grundroboter. Wraiths sechs
Akkus, Energie-/Leistungsangaben und Controller-IP65 belegen weder zwei Stunden
Laufzeit noch einen vollständigen ROV-IP-Code. Kamera-FOV-Konflikt Ally 180/200 Grad
bleibt bei den Merkmalen. Acht archivierte VideoRay-Handbuchnamen samt Links sind
als offene historische Identitäts-/Dublettenprüfungen gespeichert; Handbücher nicht
in diesem Durchgang abgerufen.

Standard Bots: Spark/Core/Thor 7/18/30 kg Nennlast, 21/32,5/79 kg Armmasse und
±0,025 mm Hersteller-Wiederholgenauigkeit ohne ausgewählten Prüfnormnachweis.
Spark 950 mm eigene Spezifikation versus 900 mm Modellkarte; Thor druckt wörtlich
2 mm (78.7 in), daneben 2000 mm und 2 m. Konflikte bleiben sichtbar. Fußabdruck
unter 200 beziehungsweise 296 mm Durchmesser wird nicht zur Körperabmessung.
Spark-Geschwindigkeit weiter Coming Q2 2026; ein vergangener Termin ist kein
Liefernachweis. Core bis 3 m/s und Thor 4 m/s sind eigene lineare Werkzeugwerte;
Thors 30-kg-FAQ gilt bei kollaborativen Geschwindigkeiten/TCP-Bedingungen.
IP65 ist bei Spark/Thor ausdrücklich Design Rating, keine verifizierte Zertifizierung
und kein auf Core übertragener Code. Lokaler Betrieb nach Programmübertragung,
Netzpflicht für Updates/Fernsupport/verbundene Anwendungen und Beta-Ausnahmen
bleiben zusammen erhalten. Werkzeugkompatibilität ist keine enthaltene Hand.
Startpreise $29.500/$39.500/$49.500 haben in den ausgewählten Texten keine explizite
Währung und keine vollständige Konfigurations-/Steuerabgrenzung; keine Offers.
Bolt und autonome Navigation bleiben Coming soon. Geplante mobile 6 mph sind
keine Festbasisgeschwindigkeit. Torso-Abdeckung bis sieben/zehn Fuß ist keine
Armreichweite. Hot-Swap-/24-Stunden-Wortlaut ist keine Einzelakku-Laufzeit.

16 nutzbare Quellenkörper (zehn HTML, sechs lesbare PDFs), 32 exakte Textanker und
zwölf PDF-Textseiten mit Koordinaten. Vier gescannte PDFs gerendert, aber wegen
nicht unterstützter Bildansicht/fehlender OCR nicht ausgewertet; keine Fakten
daraus gewählt. Zwei 404-Adressen und zwei kurze Linkseiten ausgeschlossen.
Keine visuelle Bild-/PDF-Prüfung, Formulare oder erneuten Abrufe gesperrter Hosts.
Acht Modellseiten: 131 Felder, 62 sichtbare Quellenmarkierungen, 53 ausgelassene
Leerfelder, 50 strukturierte Eigenschaften und 46 Merkmalsätze. Acht Modell-
Exportziele und acht Rechercheziele mit jeweils 131 Feldern sowie zwei Firmen-
Fokus-/Exportzeilen geprüft. Global 551 Modellseiten mit
8510 Feldern geprüft: 4031
sichtbare Quellen/Werte, 3758 ausgelassene Leer-/NA-Felder und
38 belegte Erstjahre. Alle 1905 strukturierten Preisausgaben geprüft: 350 Offers,
1555 ohne Offer; keine erneute Verkäuferprüfung aller Altpreise.
681 Unit-Tests in 54 Dateien und 94 Browserfälle bestanden: 38 neue VideoRay/
Standard-Bots-, 38 GreyOrange/KUKA- und 18 Vergleichsfälle, darunter 36 Axe-
Prüfungen auf Desktop/Mobil in hell/dunkel. Build: 2954 Seiten, etwa 452 MB.
Datenprüfung: null Fehler und 794 Hinweise, vier weniger durch belegte Erstjahre.
Format, Lint, wiederholter Import ohne Ergänzungen, Bestands-/Quellen-/Vergleichs-
prüfungen bestanden. Alle 159 eigenen Testprozesse beendet, Serverport frei;
keine eigenen Recherche-Hilfsprozesse, andere Aufgaben erhalten.

Gesamtstand: 1905 Modelle/Konfigurationen, 793 datierte Merkmalssätze, unverändert
651 Ergänzungen und 142 bestehende Anreicherungen. 3340 einzelne Merkmalaussagen,
1337 Produktquellenverweise und 64 Firmenfokusse. 8510 Felder auf 551 Modellen:
4076 dokumentiert, 4244 unbekannt, 179 widersprüchlich und elf Roadmap. Alle 518
ursprünglichen Rechercheziele mit Merkmalen; 303 mit Feldprüfungen und 215 offen.
63 von 591 Quellengruppen mit Firmenfokus. Drei ursprüngliche Modellidentitäten,
neun Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Heuristik weiter
114 Modell- und elf Markensuchhinweise, keine bestätigten Lücken. Frühere offene
Zuordnungen und neue historische Leads bleiben erhalten. Vollständigkeit und
Marktführung weiterhin unbelegt; nur lokale Änderungen. Prüfdateien:
`scratch/competitor-research/primary/batch-75/`.


## Ergänzung vom 2. November 2026 – Quantum Systems, Ohmnilabs und WIY Drones (Batch 76)

Acht Modelle ergänzt: Trinity Pro, Trinity Tactical, PULSE P19, Mandrill, Seavex,
Subvex, Skyron 400 und WIY Drones STRILA. Acht vorhandene Modelle geprüft:
Ohmni Telepresence Robot, Ohmni SuperCam, OhmniCare, OhmniClean, Reliant, Twister
und die beiden Vector-AI-Betriebsarten. 262 Feldentscheidungen: 109 dokumentiert,
138 unbekannt, zehn widersprüchlich und fünf Roadmap. Drei Firmenfokusse ergänzt.
1897 übrige Zeilen, 551 vorherige Modellprüfungen, 64 Firmenfokusse und alle 1961
Quellenidentitäten erhalten. Keine Kategorieübertragung oder neue CSV-Spalte.

Ohmni: Das Original ist seit August 2024 eingestellt. Die inzwischen auf den
Nachfolger ausgerichtete Altseite belegt keine Übertragung von 66 lb, vier Rädern
oder 8–9 Stunden auf das Original. Dessen 18 lb Eigenmasse bleiben von 31 lb Versand
getrennt; 4–5 Stunden Gespräch und 8–10 Stunden Standby sind Betriebsarten.
Die ungefähr drei Stunden Ladezeit gelten nur halbvoll bis voll bei ausgeschaltetem
Roboter. 2 versus 2,2 mph ist ein Quellenkonflikt. SuperCam gehört laut archivierter
Supportangabe zu Seriennummern ab PVT3000; 109/80/138 Grad FOV sind horizontal/
vertikal/diagonal, keine einzelne 360-Grad-Kamera. Die Supportangabe behält den
1. November 2026 als Prüfdatum. Der neue Abruf lieferte 403 und ist kein Beleg;
weitere Hostanfragen wurden gestoppt. OhmniCare: 14×18 gegenüber 15×9,5 Zoll
Grundfläche bleibt widersprüchlich; 20 Minuten Laden pro Betriebsstunde ist kein
Vollladezyklus. OhmniClean: 79 versus 71 lb und zwei Stunden durchschnittlicher
Betrieb versus 75 Minuten Desinfektion bleiben sichtbare Konflikte. 24 Stunden
dank Akkuwechsel sind keine Einzelakku-Laufzeit; 9000 Stunden Lampenlebensdauer
ebenfalls nicht. Raumzeit und Mappingrate belegen weder normierten Durchsatz noch
garantierte Infektionsreduktion. Sicherheits-/Betriebsbedingungen bleiben erhalten.

Quantum: Flugzeit und maximales Abfluggewicht bleiben von Akkulaufzeit und
Leergewicht getrennt. Reliants 9 kg Nutzlast stammt aus dem verlinkten englischen
Datenblatt; Controller-Akku/IP-Werte werden nicht aufs Fluggerät übertragen.
Vector AI behält getrennte Flächen-/Multicopter-Betriebsarten bei gleichem
umrüstbarem Rumpf. Trinity Pro nennt 90 Minuten, standardmäßig exportbedingt auf
59 Minuten begrenzt. Familienjahr und PDF-Datum sind kein Pro-Erstjahr. Trinity
Tactical nennt IP54 im Text und IP55 im Datenblatt. PULSE P19 ist ein vorläufiges
Juni-2026-Konzept: fünf ausgewählte Leistungsfelder bleiben Roadmap, bemannte und
geplante unbemannte Modi sowie gewichtsabhängige Nutzlast-/Treibstoffbudgets sind
qualifiziert; kein VTOL- oder Liefernachweis. Mandrill 750 versus 750+ kg bleibt
ein Konflikt; kurze/lange Bauform und Rad/Kette sind Optionen ohne Zusatzkarten.
Seavex: 4500 kg Verdrängung ist keine Leermasse, 1,8 m Tiefgang keine Körperhöhe.
Bis zwei Monate Missionsdauer sind keine Akkulaufzeit; Betrieb bis Seegang 3 und
Überleben bis 6 bleiben getrennt. Subvex: 533 versus 530 mm Durchmesser bleibt
widersprüchlich; 6000 m Tauchtiefe, USBL-Reichweite und Sonarreichweite sind eigene
Größen. Vier Tage Missionsdauer werden nicht aus 42 kWh hergeleitet. Skyron 400:
800 g Webseite versus 1,2 kg Datenblatt Nutzlast; Booster bleibt eine Option.

STRILA bleibt WIY Drones zugeordnet, Quantum als Integrationspartner. Beteiligung
und Joint Venture beweisen keine rechtliche Herstellerfusion. 5,7 versus 5,3 kg
Abfluggewicht und 415 versus 350 km/h bleiben widersprüchlich; die Quelle mit
fehlendem /h wird nicht stillschweigend korrigiert. Kein Wirksamkeits-, Kampf-,
Verfügbarkeits- oder unabhängiger Zertifizierungsnachweis. Trinity F90+, SCORPION,
TRON und Vector vor AI bleiben vier historische Identitäts-/Familienleads.

44 nutzbare aktuelle Quellenkörper: 20 HTML und 24 PDFs, zusätzlich eine archivierte
normalisierte Supportmomentaufnahme ohne erhaltenes HTML. 42 exakte Textanker und
108 PDF-Textseiten mit Koordinaten gespeichert. Zehn kurze Linkseiten, eine
vermutete 404-Adresse und der neue 403-Abruf ausgeschlossen. Keine visuelle
Bild-/PDF-Prüfung oder Formulare, keine Wiederholung früher gesperrter Hosts.
16 Modellseiten mit 262 Feldern und 107 Quellenmarkierungen geprüft; 123 Leerfelder
ausgelassen, 91 strukturierte Eigenschaften und 76 Merkmalaussagen geprüft.
Acht Modell-Exportziele und acht Rechercheziele mit jeweils 130 Feldern, drei
Firmenfokusse und zwei ursprüngliche Firmenexportzeilen geprüft. Global 567
Modellseiten mit 8772 Feldern: 4138
sichtbare Quellen/Werte, 3881 ausgelassene Leer-/NA-Felder und
38 belegte Erstjahre. Alle 1913 strukturierten Preisausgaben geprüft: 350 Offers,
1563 ohne Offer. Das ist keine erneute Verkäuferprüfung aller Altpreise.

696 Unit-Tests in 55 Dateien und 98 Browserfälle bestanden: 42 neue Quantum/Ohmni-,
38 GreyOrange/KUKA- und 18 Vergleichsfälle, darunter 36 Axe-Prüfungen auf Desktop/
Mobil in hell/dunkel. Eine zunächst fehlgeschlagene Prosa-Abstandserwartung
korrigiert, anschließend alle Unit-Tests bestanden; Erstprotokoll erhalten.
Build: 2963 Seiten, etwa 453 MB. Datenprüfung: null Fehler und 802 Hinweise,
acht zusätzliche unbekannte Erscheinungsjahre. Format, Lint, wiederholter Import
ohne Ergänzungen sowie Bestands-/Quellen-/Vergleichsprüfungen bestanden.
Alle 163 eigenen Testprozesse beendet, Serverport frei;
keine eigenen Recherche-Hilfsprozesse, Ressourcen anderer Aufgaben erhalten.

Gesamtstand: 1913 Modelle/Konfigurationen, 801 datierte Merkmalssätze, 659 Ergänzungen
und 142 bestehende Anreicherungen. 3392 einzelne Merkmalaussagen, 1367 Produktquellen-
verweise und 67 Firmenfokusse. 8772 Felder auf 567 Modellen: 4185 dokumentiert,
4382 unbekannt, 189 widersprüchlich und 16 Roadmap. Alle 518 ursprünglichen
Rechercheziele mit Merkmalen; 311 mit Feldprüfungen und 207 offen. 65 von 591
Quellengruppen mit Firmenfokus. Drei ursprüngliche Modellidentitäten, neun
Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Heuristik unverändert
114 Modell- und elf Markensuchhinweise, keine bestätigten Lücken. Frühere offene
Zuordnungen bleiben erhalten. Vollständigkeit und Marktführung weiterhin unbelegt;
nur lokale Änderungen. Prüfdateien: `scratch/competitor-research/primary/batch-76/`.


## Ergänzung vom 2. November 2026 – Robot.com und LocoRobo (Batch 77)

Vier benannte physische Angebote ergänzt: LocoXtreme, LocoArm, LocoRover und R-top.
Acht vorhandene ursprüngliche Rechercheziele geprüft: R-cargo, R-kiwi, R-noid,
R-dog, LocoScout, LocoHex, LocoDrone und LocoDrone X. 197 Feldentscheidungen:
48 dokumentiert, 148 unbekannt, eine Roadmap. Zwei Firmenfokusse ergänzt.
Alle 1905 übrigen Zeilen, 567 vorherigen Modellprüfungen, 67 Firmenfokusse und
1961 Quellenidentitäten erhalten. Keine Kategorieübertragung oder neue CSV-Spalte.

R-noid: Das verlinkte Datenblatt Revision 003 vom 14. Mai 2026 nennt zwei Arme mit
je sieben Achsen, vier Torso- und zwei Halsachsen sowie 2 m/s Spitze. 90 kg Gesamt-
masse, 1,7 m Höhe und 0,55 m Radbasis sind kein vollständiger Körperquader.
0,82 m Arm length ist keine ausgewiesene Nutzreichweite; 0–1,9 m vertikaler Arbeits-
raum ebenfalls nicht. 4 kg pro Arm werden nicht addiert oder als bei Höchsttempo
garantierte Last dargestellt. Drei Stunden Akku, Netzbetrieb und 110 V sind keine
Ladedauer oder mehrschichtige Einzelakku-Laufzeit. Modularer Endeffektor bedeutet
keine bestimmte enthaltene Hand. Kameras, acht Ultraschallsensoren und 360-Grad-
LiDAR werden nicht als mechanische Achsen gezählt. Der Hersteller nennt den
22. Juni 2026 ausdrücklich als kommerziellen Start; das Mai-PDF-Datum bleibt
Dokumentdatum. Fünf Rollen und 19 Aufgaben sind keine weiteren Modelle.

R-top: Eigene Herstelleradresse und Seitentitel sowie feste Oberflächen werden
ausdrücklich von R-noids mobiler Basis unterschieden. Gemeinsame Überschriften
mit sechs Achsen und 9 lb pro Arm belegen keine eindeutig abgegrenzte R-top-
Konfiguration und ersetzen keine R-noid-Modellspezifikation. Daher keine numerische
Übernahme. R-cargo nennt acht Stunden Akku; Payload und Speed stehen ohne Zahlen.
Selbst-/Drahtlosladen bleibt optional, API in 48 h ein Integrationsversprechen,
keine Ladedauer. R-kiwi: 10–12 Stunden Modellseite versus zwölf Stunden Portfolio
sind vereinbare Headlines ohne Belastungsprotokoll. 18 lb sind Massennutzlast,
19 L Ladevolumen, kein Quellenkonflikt. Historische Kiwibot-Generationen bleiben
getrennt. R-dog: Homepage sagt coming in 2027; Modellseite nennt Konzept, Warteliste
und Piloten. Gegenwärtige Werbe-/Inspektionsprosa einer allgemeinen Seite löst
die Verfügbarkeit nicht. Geplanter Umgebungseinsatz trägt Roadmap-Status;
kein tatsächliches Erscheinungsjahr, numerische Plattformdaten oder Offer.

LocoRobo: LocoScout/Hex sind schulische Vier-/Sechsbeiner; Beinanzahl ist keine
Gelenkzahl, Klassenstufe kein numerisches Alter. Rettungs-, Agrar- und Erkundungs-
übungen beweisen keinen Feldeinsatz. LocoXtreme nennt sechs integrierte Sensoren,
Blockcoding, Python/Java und gemeinsame Programmspeicherung; keine angenommene
Fahrmechanik. LocoArm nennt Python-gesteuerte Greif-/Sortier-/Montageübungen mit
mobilen oder stationären Projekten, keine standardmäßig enthaltene Basis/Hand.
LocoRover nennt vier Mecanum-Räder, HD-FPV-Kamera und integrierten Arm; dessen
Identität mit LocoArm ist nicht belegt. ROS/Gazebo/SLAM, HRI und Edge-AI bleiben
Hochschul-Lehrsystemkontext, keine konkrete Hardware-Revision, Messgenauigkeit
oder pauschale Open-Hardware-Lizenz. LocoDrone und LocoDrone X bleiben zwei
Anbieternamen ohne exakte Fluggerät-/OEM-Daten. Hochschulschreibweise LocoDroneX
ist kein drittes Gerät. CodeMyDrones/CodeMyRobots, LocoFly, TryDrones und
BuildMyDrones bleiben Software-, Vorbereitungs-, Wettbewerbs- oder Kitangebote.
FAA-Vorbereitung und Erfolgsquoten sind weder Zertifizierungsgarantie noch
Flugerlaubnis. Historische Revisionen, exakte Drohnen und R-top-Hardware bleiben Leads.

18 nutzbare aktuelle Quellenkörper (17 HTML, ein PDF), 47 exakte Textanker und eine
PDF-Textseite samt Koordinaten gespeichert. Eine vermutete 404-Adresse und kurze
Support-Linkseite ausgeschlossen; keine Formulare, gesperrten Hosts oder visuelle
Bild-/PDF-Prüfung. Zwölf Modellseiten mit 197 Feldern geprüft: 37 sichtbare Quellen-
markierungen, 136 ausgelassene Leerfelder, 23 strukturierte Eigenschaften und
53 Merkmalaussagen. Vier Modell-Exportziele mit 65 Feldern, acht Rechercheziele mit
130 Feldern sowie zwei Firmenfokus-/Exportzeilen geprüft. Global 579
Modellseiten mit 8969 Feldern: 4175
sichtbare Quellen/Werte, 4017 ausgelassene Leer-/NA-Felder und
39 belegte Erstjahre. Alle 1917 strukturierten Preisausgaben geprüft: 350 Offers,
1567 ohne Offer; keine erneute Verkäuferprüfung aller Altpreise.

709 Unit-Tests in 56 Dateien und 96 Browserfälle bestanden: 40 neue Robot.com/
LocoRobo-, 38 GreyOrange/KUKA- und 18 Vergleichsfälle, darunter 36 Axe-Prüfungen
auf Desktop/Mobil in hell/dunkel. Build: 2967 Seiten, etwa 454 MB. Datenprüfung:
null Fehler und 806 Hinweise, vier zusätzliche unbekannte Erscheinungsjahre.
Format, Lint, wiederholter Import ohne Ergänzungen und Bestands-/Quellen-/Vergleichs-
prüfungen bestanden. Alle 161 eigenen Testprozesse beendet, Serverport frei;
keine eigenen Recherche-Hilfsprozesse, andere Aufgaben erhalten.

Gesamtstand: 1917 Modelle/Konfigurationen, 805 datierte Merkmalssätze, 663 Ergänzungen
und 142 bestehende Anreicherungen. 3423 einzelne Merkmalaussagen, 1387 Produktquellen-
verweise und 69 Firmenfokusse. 8969 Felder auf 579 Modellen: 4233 dokumentiert,
4530 unbekannt, 189 widersprüchlich und 17 Roadmap. Alle 518 ursprünglichen
Rechercheziele mit Merkmalen; 319 mit Feldprüfungen und 199 offen. 67 von 591
Quellengruppen mit Firmenfokus. Drei ursprüngliche Modellidentitäten, neun
Listingidentitäten und 862 Buy-Detailinhalte bleiben offen. Heuristik unverändert
114 Modell- und elf Markensuchhinweise, keine bestätigten Lücken. Frühere offene
Zuordnungen erhalten. Vollständigkeit und Marktführung weiterhin unbelegt;
nur lokale Änderungen. Prüfdateien: `scratch/competitor-research/primary/batch-77/`.


## Ergänzung vom 2. November 2026 – SROD und Macco Robotics (Batch 78)

Zwölf neue SROD-Modelle: S190DHD, S300EHD, S200CHD, S150A, S150AF, S300YL,
S300Y, S450A, F100, S70, Micro Wriggling Cutting Robot und S3831E. Acht vorhandene
Modelle geprüft: S100C MINI, T200, D600D, D800F sowie Kime Bartender/Chef/Kiosk/V5.
356 Feldentscheidungen: 130 dokumentiert, 224 unbekannt, zwei widersprüchlich.
Drei Anwendungsrouten-Paare S150A/S190DHD/S150AF nennen dasselbe Modell und haben
identische technische Tabellen; keine zusätzlichen Karten. SROD-Firmenfokus neu,
Macco-Fokus erweitert mit Erhalt seiner drei bisherigen Aussagen und Quellen.
Alle 1909 übrigen Zeilen, 579 vorherigen Modellprüfungen, 68 unveränderten Fokusse
und 1961 Quellenidentitäten erhalten. Keine Kategorie-/CSV-Spaltenänderung.

SROD: T200 nennt 70 kg im Headlinefeld, 75 kg in der Körper-Spezifikation; getrennt
davon 115 kg Kabelwinde. DN600+ setzt Erweiterungschassis voraus. Kamera-Lift ist
keine Lasthebefähigkeit, Kameraachsen/Räder/Motoren sind keine belegte Gesamt-DOF.
S100C 4,5 kg gilt mit 70-mm-Rädern. 8–10-Stunden-Headlines und Reel-Batterien werden
nicht als reine Crawler-Laufzeit importiert. S300YL 125 kg Reel inklusive Kabel und
15 Ah sind keine Crawler-Masse/-Laufzeit. S450A behält vier Stunden als qualifizierte
System-Headline ohne Batteriestandort/Last; Pull 14 kg ist weder Masse noch Nutzlast.
D600D Hydraulik-/Spülströme sind kein Sedimentdurchsatz. D800F: 650 kg Roboter versus
2500 kg Supporteinheit; mindestens zwölf Stunden Terminal-Akku ist keine Roboter-
Laufzeit. 200 m³/h Pumpe, 40 m Förderhöhe und 40-mm-Partikel sind getrennte Maxima,
kein gemeinsamer Betriebspunkt. IP68/20 m sind keine Militär-/Ex-Zertifizierung;
Standardumgebung nicht explosionsgeschützt, Ex-Ausführung auf Anfrage, Diesel optional.
S70 externe Rückspeisung mit unlimited-Wortlaut ist keine Akkulaufzeit; Tether bis
2 km ist keine Tauchtiefe. Positions-/Leckempfindlichkeits-Headlines behalten fehlende
Prüf-/Referenzbedingungen. F100: 9,5 kg ohne Akku, mindestens vier Stunden pro Akku,
10–30 cm Positionsfehler pro 100 m als Herstellerwert; 100-m-Blatt in fünf Minuten
ist ein Beispiel, keine konstante Fahrgeschwindigkeit. 1080P-Panorama aktuell,
8K erst späteres Softwareupdate. S3831E: DN500–600 mm Headline gegen DN500–6000 mm
Tabelle bleibt Konflikt; 20 m Tauchtiefe, 0,25–6 m Sonar und 200–1000 m Tether bleiben
getrennt, zwei/vier Stunden gelten bei hoher/niedriger Stufe. Micro-Cutter: Standard
DN80–150, DN250 optional; Axialfeed 100 m Headline gegen 100 mm Tabelle wird nicht
still korrigiert oder zu Lift-/Armreichweite erklärt.

Macco: Bartender 200 Cocktails/h und bis zu 80 Rezepte, Chef 120 Gerichte/h und
Mehrrezeptfunktion sind eigene Angebots-Headlines ohne ausgewähltes Last-/Rezept-
Prüfprotokoll. Generische 300+ Getränke/h und Live-Demo-Präzision sind keine allen
Konfigurationen zugewiesenen Spezifikationen. Monatlich ab 1800/2300/2800 EUR sind
bankabhängige Finanzierungen, keine belegten Kauf-/Mietpreise oder Offers. Kime V5:
60 kg Roboter mit Basis, 1498 mm Roboterhöhe, circa zwei Meter Roboter plus Kiosk;
keine vollständige Systemmasse/-geometrie. 5 kg je Arm nicht addiert; zwei Sechs-
Achs-Arme, drei Kopf-/Halsachsen und 350-Grad-Taillenbereich nicht zu erfundener
Gesamt-DOF zusammengezählt. Fünffingerhände im Versionsblatt, 359–720 Grad/s keine
lineare Fahr-/TCP-Geschwindigkeit. IP44 innen, Betrieb 5–35 °C versus Lager 0–40 °C.
Netz-/Leistungswerte keine Akkulaufzeit. SDK bleibt durch Macco-Personalrechte
beschränkt; CE/USA/FCC/NSF und Hygieneprosa ohne ausgewählten Zertifikatsumfang.
Body-Pose-Vorschau mit Herstellertext erneut belegt, ohne visuelle Videoanalyse.
V5-Daten werden nicht auf alle unversionierten Angebote übertragen.

32 nutzbare aktuelle Quellenkörper: 30 statische HTML, ein gerendertes DOM, ein PDF
mit fünf Text-/Koordinatenseiten. 64 exakte Anker, gerenderte Anker zusätzlich im
gespeicherten DOM geprüft. Statische Macco-Apphülle ausgeschlossen. Ein eigener
Recherchebrowser samt Kontext und sieben Hilfsprozessen geschlossen/verifiziert.
Keine Formulare, gesperrten Hosts, visuelle Bild-/PDF-Analyse oder unabhängigen Tests.
20 Modellseiten mit 356 Feldern: 112 sichtbare Quellenmarkierungen, 204 ausgelassene
Leerfelder, 89 strukturierte Eigenschaften und 66 Merkmalaussagen geprüft. Keine
Treffer im ursprünglichen Modellnennungs-Export; zwei Beschreibungsreferenzen mit
vier Macco-Zielen, acht Rechercheziele mit 142 Feldern und zwei Firmenfokus-/Export-
zeilen geprüft. Global 599 Modellseiten/9325 Felder:
4287 sichtbare Quellen/Werte, 4221
ausgelassene Leer-/NA-Felder und 39 belegte Erstjahre. 1929 strukturierte Preise:
350 Offers, 1579 ohne Offer; keine erneute Verkäuferprüfung sämtlicher Altpreise.

721 Unit-Tests in 57 Dateien und 100 Browserfälle bestanden: 40 neue SROD/Macco-,
38 GreyOrange/KUKA-, 18 Vergleichs- und vier bisherige Macco-Markenfälle, darunter
36 Axe-Prüfungen Desktop/Mobil hell/dunkel. Build: 2979 Seiten, etwa 456 MB.
Datenprüfung: null Fehler, 818 Hinweise, zwölf neue unbekannte Erscheinungsjahre.
Format, Lint, wiederholter Import ohne Ergänzungen sowie Bestands-/Quellen-/Vergleichs-
prüfungen bestanden. Alle 165 eigenen Testprozesse und sieben Recherche-
prozesse beendet, Testserverport frei; Ressourcen anderer Aufgaben erhalten.

Gesamtstand: 1929 Modelle/Konfigurationen, 817 datierte Merkmalssätze, 675 Ergänzungen,
142 bestehende Anreicherungen. 3463 einzelne Merkmalaussagen, 1402 Produktquellen-
verweise, 70 Firmenfokusse. 9325 Felder auf 599 Modellen: 4363 dokumentiert,
4754 unbekannt, 191 widersprüchlich, 17 Roadmap. Alle 518 ursprünglichen Recherche-
ziele mit Merkmalen; 327 mit Feldprüfungen und 191 offen. 68 von 591 Quellengruppen
mit Firmenfokus. Drei ursprüngliche Modellidentitäten, neun Listingidentitäten und
862 Buy-Detailinhalte bleiben offen. Heuristik 114 Modell-/elf Markensuchhinweise,
keine bestätigten Lücken. Weitere SROD-Systemarten und frühere offene Zuordnungen
bleiben erhalten. Vollständigkeit und Marktführung weiterhin unbelegt; lokale
Änderungen. Prüfdateien: `scratch/competitor-research/primary/batch-78/`.


## Ergänzung vom 2. November 2026 – Avidbots und Event 38 (Batch 79)

Sechs bestehende Modelle geprüft: Neo 2, Neo 2W, Kas, E400 Mapping, E400 ISR und
E455. 114 Feldentscheidungen: 59 dokumentiert, 49 unbekannt, sechs widersprüchlich.
Zwei neue Firmenfokusse. Keine zusätzlichen Karten aus Reinigungsköpfen,
Sensor-/Funkoptionen, Home Base, Desinfektionsaufsatz, DROPS oder Command Center.
Alle 1923 übrigen Katalogzeilen, 599 bisherigen Modellprüfungen, 70 Firmenfokusse
und 1961 Quellenidentitäten erhalten. CSV-Spalten und Kategorien unverändert.

Kas: 172 kg leer versus 266 kg GVW; 552-mm-Arbeitsweg, 559-mm-Bürstendurchmesser
und 630-mm-Rakel getrennt. 500–1000 m²/h praktische Leistung versus 2186 m²/h
theoretisches Maximum. 2025-Blatt bis vier Stunden versus Produktseite bis drei
und Einführung 3+ Stunden; Akkuwechsel verlängert Schichten, keine Einzelladung.
Tankbelegung 45/46 L im Datenblatt, 46/45 L in FAQ, zusätzlich 50-L-Abwassertext
und 48-L-Lösung in Broschüre bleibt widersprüchlich. Gerade Durchfahrt 1,05 m im
Blatt versus 1,0 m auf Seite, 1,55-m-Wendemanöver separat. Anpresslast 36/36,8/40,8 kg
ist keine Roboter-Nutzlast. Allgemeine Neo-FAQ auf Kas-Seite liefert keine Kas-Werte.

Neo 2: Disc-GVW 661/669 kg, Zylinder-GVW 663/688 kg inklusive Akkus und voller
Lösung; Leermassen 283/291 bzw. 285/290 kg. Untere Seiten-GVW 581,5 kg ungeklärt.
Konfigurationsbezogene Bürstenbreiten und theoretische Flächenleistungen getrennt;
metrische 1374-mm-Höhe bleibt mit Hinweis auf inkonsistente Zollangabe. Neo 2
maximal 0,5 % Reinigungssteigung im gewählten Blatt, Neo 2W 3 % im 2024-Blatt.
Neo 2W: Paletten-/Gabelerkennung, Bulk Navigator und Debris Diverter mit Vorreinigung
und Standortprüfung; Home Base ist Rückkehrpunkt, kein belegter Lade-/Füll-Dock.
480-Stunden-Wartung ist keine Akkulaufzeit. Neo 2 eingeführt am 1. September 2020,
Kas am 10. April 2024; historische Datumsangaben nicht aus PDF-Uploaddaten abgeleitet.

Event 38: Erster HTML-main enthielt nur den Hero. Gesicherter #main-Rahmen enthält
auch technische Abschnitte und wurde aus Originalbytes reproduziert. E400 Mapping:
3-m-Spannweite/1,5-m-Länge getrennt vom Packmaß; 20 lb/9,3 kg Startmasse und
3 lb/1,3 kg Nutzlast als nicht exakte Hersteller-Einheitenpaare erhalten. 90 Minuten,
54 Meilen Flugstrecke und fünf Meilen Telemetrie getrennt; PPK ohne erfundene
Navigationsgenauigkeit, leichte Regenbeständigkeit ohne IP-Code. E400 ISR:
120 Minuten bei voller Flugmasse 20 lb/9 kg ist weder Leermasse noch MTOW;
320-g-Gimbal keine maximale Flugzeug-Nutzlast. Vier-Minuten-Aufbau keine Ladezeit;
40×-Zoom aus 20× optisch und 2× digital. IP53, Temperatur und Wind bleiben
Herstellerangaben. E455: über zwei Stunden mit sieben Pfund unter 55 lb Gesamtmasse
nicht auf Zwölf-Pfund-Option übertragen. Aktuelle 60 lb gegen 65 lb der Einführung
bleiben Konflikt; HTML datePublished 7. November 2023 getrennt von Änderung 2026.
BVLOS-/Part-108-Texte keine pauschale Flugerlaubnis; DROPS-Integration vom September
2026 liefert keine universell verbaute Hand, Ladezeit oder unbegrenzte Flugausdauer.

24 nutzbare Quellenkörper: 15 HTML, neun PDF mit 36 Text-/Koordinatenseiten,
108 exakte Quellenanker. Drei 404-Quellen ausgeschlossen. Keine Formulare,
gesperrten Hosts erneut abgerufen, Recherchebrowser oder visuelle PDF-/Bildanalyse.
Sechs Modellseiten: 114 Felder, 59 Quellenmarkierungen, 43 ausgelassene Leerfelder,
50 strukturierte Eigenschaften und 25 Merkmalaussagen geprüft. Sechs Modell-Export-
zeilen/sieben Zielvorkommen mit 133 Feldvorkommen, zwei Firmenfokus-Seiten/-Exporte,
zwei Beschreibungsreferenzen/drei Ziele und sechs Rechercheziele/114 Felder geprüft.
Global 605 Modellseiten/9439 Felder mit 4346 sichtbaren Quellenwerten, 4264
ausgelassenen Leer-/NA-Feldern und 42 belegten Erstjahren. 1929 Preisangaben:
350 Offers und 1579 ausgelassene Offers; keine aktuelle Verkäuferprüfung aller Altpreise.

729 Unit-Tests in 58 Dateien, 20 Python-Tests und 92 Browserfälle bestanden:
34 neue Avidbots/Event-38-, 40 SROD/Macco- und 18 Vergleichsfälle, darunter
36 Axe-Prüfungen Desktop/Mobil hell/dunkel. Build 2979 Seiten, ungefähr 456 MB.
Datenprüfung null Fehler, 817 Hinweise; ein bisher unbekanntes Erstjahr ergänzt.
Format, Lint, Bestands-, Quellen-, Vergleichs- und Wiederholungsimportprüfung bestanden.
Alle 157 eigenen Testprozesse beendet, Testserverport frei;
Ressourcen anderer Aufgaben erhalten. Dies ist keine erneute vollständige Browser-Suite.

Gesamtstand: 1929 Modelle/Konfigurationen, 817 Merkmalssätze, 3470 einzelne Aussagen,
1412 Produktquellenverweise, 72 Firmenfokusse. 9439 Felder auf 605 Modellen:
4422 dokumentiert, 4803 unbekannt, 197 widersprüchlich, 17 Roadmap. Von 518
ursprünglichen Zielen haben 333 Feldprüfungen und 185 bleiben offen. Firmenfokusse
decken 70 von 591 Quellengruppen ab. Drei Modell- und neun Listingidentitäten,
862 Buy-Detailinhalte und vorherige offene Portfolios bleiben erhalten; 114 Modell-
und elf Markenhinweise bleiben Heuristiken. Vollständigkeit und Marktführung unbelegt.
Prüfdateien: `scratch/competitor-research/primary/batch-79/`.

Auf Nutzerwunsch werden abgeschlossene Zwischenstände committed und auf
`origin/codex/competitor-directory-expansion` gepusht. Lokale Rohrecherche und
andere Aufgaben bleiben außerhalb dieser Commits; Pages-Publishing ist unverändert.


## Ergänzung vom 2. November 2026 – Geek+ (Batch 80)

31 benannte Modelle bzw. ausdrücklich bezeichnete Versionen in P/M/F/RS/S/X:
28 Ergänzungen und drei bestehende Modelle. 682 Feldprüfungen: 310 dokumentiert,
352 nicht dokumentiert, 20 widersprüchlich. Ein Firmenfokus ergänzt. Alle 1926
unbeteiligten Katalogzeilen, 605 bisherigen Modellprüfungen, 72 Firmenfokusse und
1961 Quellenidentitäten erhalten. Keine neuen CSV-Spalten oder Kategoriewechsel.

P500R: 600 kg Nutzlast; aktuelle globale Lastgeschwindigkeit 1,5 m/s gegenüber
japanischen 1,6 m/s. P800R aktuell 142 kg, regional 165 kg inklusive Batterie,
2022 162 kg; aktuelle 1095-mm-Länge gegenüber früher 1090 mm. Reguläre 195-mm-
und dickere PopPick-275-mm-Höhe bleiben Konfigurationen. Aktuelle 55-mm-Hubstrecke
gegenüber früheren 60 mm ungeklärt. P1200R aktuell 288 kg, regional 320 kg,
historisch 187 kg und abweichende Geschwindigkeiten. P800R V6.0 bleibt die explizite
historische 800-kg-Konfiguration. Globale/regionale/historische Zuordnung ungeklärt.
Ladeintervalle von zehn Minuten für definierte Arbeitsintervalle sind keine volle
Ladezeit; Abweichungen 1,5–2 gegen 2–3 Stunden bleiben bei den gewählten P-Quellen.

M200C hat 300 kg Nutzlast trotz seines Namens, 106 kg Körpermasse und getrennte
Fahrt-/endgestützte Stopptoleranzen. MP1000R-SNE V2.1 hat eigene 1105×855×275-mm-
Maße und wird nicht in generisches MP1000R oder M1000R umgedeutet. Seine gedruckte
0,7-m-Durchfahrt bei 855-mm-Körperbreite bleibt ungeklärt; 774-mm-Drehdurchmesser
wird kein erfundener Radius. M2000C/M3000C nennen ausdrücklich minimale,
anpassbare 1800×1000×350-mm-Körpermaße; Regalgrößen bleiben getrennt.

F12ML-Nutzlast ist höhenabhängig: 1500/1200/1000 kg in den Blattstufen
0–2/2–2,5/2,5–3 m. Blatt nennt 2300-mm-Hubhöhe gegenüber Webseite
2344/2844/3244 mm; Zuordnung ungeklärt. Stufen bis drei Meter beweisen nicht,
dass die 2300-mm-Version drei Meter erreicht. F20MT 2000 kg und 120-mm-Hub.
Körper-/Gabelmaße, Fahr-/Hubgeschwindigkeit und volle Ladezeit bleiben getrennt.
Gedruckte F12ML-„Rotation speed ≥800mm“ wird weder Winkelgeschwindigkeit noch
angenommener Wenderadius. CE/UKCA/PLd bleiben spezifische Herstellerangaben.

RS5-D, RS8-DA/DX, RS11-DA/DX behalten aktuelle 40-kg-Lastangaben. Historische
240/320-kg-Maximalnutzlast wird ohne belegte Aggregat-/Einzelbehälterzuordnung
nicht gleichgesetzt. RS8-DA 900/1000-kg-Masse und 4700/4600-mm-Körperhöhe bleiben
Quellenkonflikte; Lagerhöhe 8220 mm ist keine aktuelle Hubhöhe 7935 mm.
RS11-DA-Hubzyklus zwölf Sekunden auf Seite gegenüber zehn im Blatt bleibt im
Merkmalstext. Batteriestrom, Ah und Zyklen liefern keine Lauf-/Ladezeit.
RS Air hat im Hubhöhenfeld „Minimum Aisle width:1015“ ohne bestätigte Einheit;
Hubhöhe und Gangbreite bleiben leer. P40/P40R sind beide explizit bezeichnet,
aber ihre Gleichsetzung bleibt unbewiesen: Webseite 386 mm, P40R-Blatt 383 mm.
Historisches P40 75 kg/andere Maße wird nicht zu einer erfundenen dritten Generation.

S-Serie: sechs ausdrücklich benannte Blattversionen statt drei zusätzlicher
unversionierter Doppelkarten. S20C V2.0 75 kg/560-mm-Länge/2,0 m/s beladen,
V3.0 78 kg/650 mm/2,5 m/s. Generische Seitenzuordnung ungeklärt; S20T-Seite
2,5 m/s beladen überschreibt nicht V2.0-Blatt 2,0 m/s. Verstellbare Trägerhöhe
S20C-A ist keine belegte Hubstrecke. X1200H 245 kg und explizit beladen/unbeladen
2,5/1,8 m/s werden nicht vertauscht. X1200Z 270 kg, 1,6/1,5 m/s und getrennte
Raumtemperatur-/Kühlhaus-Akkuwerte. 8–10 h nach 1,2 h Ladung gehört nicht zur
Kühlhausvariante mit 6–8 h nach zwei Stunden. „Motor-driven“ ist kein belegtes
Lokalisierungsverfahren; Kühlhaus-CE/UL-Batterie ist TBD. Historisches X1200
bleibt separat. Dokumentdatum liefert kein Erstjahr oder aktuelle Lieferbarkeit.

21 nutzbare URL-Antworten (acht HTML, 13 PDF), davon 16 verschiedene Inhaltskörper
(acht HTML/acht PDF). 76 gespeicherte PDF-Text-/Koordinatenseiten einschließlich
identischer Downloads; 49 Seiten in den verschiedenen PDF-Inhalten. 97 exakte
Textanker geprüft. Leere 200-Antwort einer alten P-Route ausgeschlossen.
Keine Formulare, Recherchebrowser, erneuten Abrufe bekannter gesperrter Hosts oder
visuelle PDF-/Bildprüfung. Quellen-Hashes und Entscheidungen versioniert in
`reports/competitor-batch-80-evidence.json`; Rohdateien lokal in
`scratch/competitor-research/primary/batch-80/`.

742 Unit-Tests in 59 Dateien, 20 auf die Wettbewerber-Skripte begrenzte Python-Tests
und 82 Browserfälle bestanden: 30 Geek+-, 34 Avidbots/Event-38- und 18 Vergleichsfälle,
darunter 32 Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Build
3007 Seiten, ungefähr 460 MB. Datenprüfung null Fehler, 845 Hinweise, davon
28 zusätzliche unbelegte Erstjahre; kein Erstjahr geraten. Lint, Format, Quellen-,
Bestands-, Vergleichs-, Preis- und Wiederholungsimportprüfung bestanden. Alle
143 erfassten eigenen Testprozesse beendet; Port4321 frei,
Ressourcen anderer Aufgaben erhalten. Dies ist keine vollständige Browser-Suite.

Gesamtstand: 1957 Modelle/Konfigurationen, 703 Ergänzungen, 845 Merkmalssätze,
3576 Aussagen, 1465 Produktquellenverweise, 73 Firmenfokusse. 10121 Felder auf
636 Modellen: 4732 dokumentiert, 5155 unbekannt, 217 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 336 Feldprüfungen und 182 bleiben offen.
Firmenfokusse decken 71 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und alle vorherigen offenen Portfolios
bleiben erhalten. Auch Geek+-Altsysteme, neue Systemnamen und regionale Portfolios
bleiben Recherchepunkte; Vollständigkeit und Marktführung sind unbelegt.

Zwischencommit `ea35b27` mit Geek+-Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
folgen als zweiter Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Locus Robotics und Seegrid (Batch 81)

Acht ausgewählte Modelle: zwei Ergänzungen (historisches Locus Max, Seegrid Lift
EL1) und sechs bestehende Modelle. 184 Feldprüfungen: 49 dokumentiert, 132 nicht
dokumentiert, drei widersprüchlich. Seegrid-Firmenfokus ergänzt, vorhandenen
Locus-Fokus vertieft. Alle 1951 unbeteiligten Katalogzeilen, 636 bisherigen
Modellprüfungen, 72 anderen Firmenfokusse und 1961 Quellenidentitäten erhalten.
Keine neuen CSV-Spalten oder Kategoriewechsel.

Origin: 36 kg/80 lb als gerundetes Herstellerpaar, bis 14 h und ungefähr 50 min
Laden; Last-/Arbeitsprofil und Ladezustandsfenster fehlen. Die Seite benennt die
Achsen ihrer 20,4×22,8×62-Zoll-Maße nicht ausdrücklich. Vector: 272 kg/600 lb,
gleiche Lauf-/Ladezeitbedingungen. Öffentliche Einführung am 28. März 2022 steht
gegenüber 2023 in der aktuellen Firmenchronik; Versand-/Regionszuordnung offen.
Omnidirektionale Fahrt liefert keinen numerischen Wenderadius.

Array: globale Herstellerankündigung am 13. April 2026, frühe nordamerikanische
Einsätze und geplante regionale Skalierung getrennt. NeuraGrasp ist ein weicher,
nachgiebiger Greifer laut Hersteller; Gelenkzahl, Last und Reichweite unbekannt.
100 Prozent SKU-Abdeckung gehört zum gemischten System. 24/7-Betrieb und
250K/500K Einheiten pro Tag liefern keine einzelne Akkulaufzeit oder Roboterleistung.
Max ist in der Firmenankündigung vom 28. März 2022 ausdrücklich benannt; damalige
begrenzte Verfügbarkeit beweist keine heutige Lieferbarkeit. Keine numerische
Max-Last aus veralteten Suchauszügen oder inzwischen geänderten Blogtexten übernommen.

CR1: 4000 lb Palettenlast, maximal automatisch 5 mph und aktuell 15 ft Hubhöhe;
künftige höhere Masten sind keine heutige Bewertung. Debütankündigung vom
15. Februar 2024 steht gegenüber 2025 in der Firmenchronik. RS1: 3500 lb und
maximal 5 mph; Hero/FAQ nennen sechs Fuß, die Spezifikationskarte sechs Zoll.
Dieser Einheitenkonflikt bleibt ungeklärt. Seine Einführung im Dezember 2022 ist
in der CR1-Ankündigung ausdrücklich datiert. EL1: 2700 lb, maximal automatisch
3,4 mph und 5 ft 2 in Hubhöhe. Gabelabmessungen sind keine Körpermaße.
EL1-Seite behauptet VDA5050 2.1; ein Firmenplan vom Juli 2025 für 2026 beweist
keine abgeschlossene Umstellung aller Modelle.

S7: bis 10000 lb gesamte gezogene Wagenlast, keine aufliegende Nutzlast oder
Fahrzeugmasse; maximal automatisch 4 mph und Steigung bis 2,5 Prozent unter
Hersteller-/Einsatzbedingungen. Kein Palettenhub. Auto-Charge und Fleet Central
belegen keine numerische Einzelakku-Laufzeit, volle Ladezeit oder universelle
Kompatibilität. Unbekannte Eigengewichte, IP-Codes und Positioniertoleranzen
bleiben leer. RaaS/ROI liefert keinen konkreten Kaufpreis oder strukturiertes Angebot.

22 nutzbare HTML-URL-Inhalte, davon 21 verschieden, und 46 exakte Stichprobenanker
gegen gespeicherte Bytes geprüft. Zwölf 404-Antworten und drei Highspot-200-
Unsupported-Browser-Seiten ausgeschlossen; zwei Seegrid-Hub-Downloads mit Timeout.
Ein eigener Diagnosebrowser prüfte die drei Viewer, ohne nutzbares PDF. Seine
sieben Prozesse sind beendet. Keine Formulare, visuelle PDF-Prüfung, importierten
numerischen PDF-Suchauszüge oder erneuten Abrufe bekannter gesperrter Hosts.
Versioniertes Quellen-/Entscheidungsprotokoll:
`reports/competitor-batch-81-evidence.json`; Rohbelege lokal unter
`scratch/competitor-research/primary/batch-81/`.

751 Unit-Tests in 60 Dateien, 20 Wettbewerber-Python-Tests und 68 ausgewählte
Browserfälle bestanden: 20 Locus/Seegrid-, 30 Geek+- und 18 Vergleichsfälle,
darunter 24 Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung.
Build 3009 Seiten, ungefähr 461 MB. Datenprüfung null Fehler und 842 Hinweise
(drei weniger): ein neues unbelegtes Erstjahr, ein neues belegtes historisches
Erstjahr und vier bisherige Jahre mit belegtem oder widersprüchlichem Meilenstein.
Lint, Format, Wiederholungsimport (null Ergänzungen), Bestands-, Quellen-,
Seiten-, Vergleichs-, Preis- und globale Feldmetadatenprüfung bestanden.
Alle 152 erfassten eigenen Testprozesse beendet;
Port4321 frei, Ressourcen anderer Aufgaben erhalten. Keine vollständige Browser-Suite.

Gesamtstand: 1959 Modelle/Konfigurationen, 705 Ergänzungen, 847 Merkmalssätze,
3593 Aussagen, 1480 Produktquellenverweise und 74 Firmenfokusse. 10305 Felder auf
644 Modellen: 4781 dokumentiert, 5287 unbekannt, 220 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 342 Feldprüfungen und 176 bleiben offen.
Firmenfokusse decken 72 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `4e7b62d` mit Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
folgen als zweiter Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Robotnik (Batch 82)

15 benannte Angebote in sieben Plattformfamilien plus RB-THERON FP: neun neue
Modelle/Varianten und sechs vertiefte Bestandsprüfungen. 366 Felder: 167 dokumentiert,
189 nicht dokumentiert und zehn widersprüchlich. Firmenfokus ergänzt. Alle 1953
unbeteiligten Katalogzeilen, 644 bisherigen Modellprüfungen, 74 Firmenfokusse und
1961 Quellenidentitäten erhalten. Acht kommerzielle Ergänzungen und eine
Bildungsvariante nutzen bestehende Spalten; keine Kategoriewechsel.

RB-KAIROS: 100 kg mit Standardrädern, 250 kg nur mit stärkeren optionalen Rädern.
115 kg Basismasse und 978×776×690 mm sind keine Maße/Masse der Plus-Installation.
RB-KAIROS+ trennt UR7e/UR12e/UR16e-Armlast 7,5/12,5/16 kg, Restplattformlast
230/215/215 kg und Robotermasse 135/150/150 kg. Separate Armgewichte nicht nochmals
addiert; Rad-/Restlastzuordnung bleibt qualifiziert.

RB-ROBOUT: 1000 kg Standard, 2000 kg nur mit geänderter Länge/Breite. Blattmaße
1758×891×372 mm und 360 kg nicht unbesehen jeder schweren Variante zugeordnet.
Gemeinsamer Hero 8 h steht gegen technisches Basisfeld/Blatt 10 h. RB-ROBOUT+
trennt fünf UR-Arme, konfigurierte Masse und Restlast 755/765/760/735/765 kg;
800-kg-Hero/1000-kg-Basiskomponente nicht ohne Zuordnung gleichgesetzt. UR15-
Höhe 1758 mm in Tabelle gegen 1785 mm in Zeichnung bleibt widersprüchlich.
Optionale 1200-/800-mm-Säulen liefern keine Hubstrecke oder maximale Gabelhöhe.

WATCHER/WATCHER XL: 73/75 kg Selbstmasse, 50/40 kg Fracht, IP54/IP55 sowie 5/10 h.
IP65-Mikrofon und Lautsprecher sind keine IP65-Zertifizierung des Gesamtsystems.
XL-Wechselakku/14-cm-Hindernisfähigkeit nicht auf das Standardmodell übertragen.
FIQUS: 450 kg/1000 kg Fracht, IP42 und 10 h. FIQUS+: 600 kg konfigurierte Masse,
700–720 kg Restplattformlast und getrennte UR-Armlasten bis 35 kg, IP53 und 9 h.
±300 mm Querführung ist keine vertikale Hubstrecke oder zusätzliche Armreichweite;
verstellbare Breite 1177–1610 mm und Doppelarm bleiben Optionen.

SUMMIT: 65 kg, 50 kg Fracht, IP54 und 5 h. SUMMIT+ mit aktuellen Kinova-Optionen
70/72/73 kg, Armlast 0,5/4/4 kg und Reichweite 760/891/902 mm. Blatt-Hero 40 kg
Restlast widerspricht Tabelle 45/43/42 kg. XL-GEN leitet auf RB-GEN+ weiter,
benennt im Inhalt aber SUMMIT+ mit anderen Daten; historische Generation nicht
zugeordnet und keine zusätzliche erfundene Modellkarte angelegt.

THERON: 70 kg/200 kg, 8 h, differentialer Antrieb. Optionale Aufbauhöhe 418 statt
320 mm liefert keine belegte 98-mm-Hubstrecke. THERON+: UR7e in Seite/Tabelle,
UR5e in Blattprosa; 6 h technisch gegen 8 h im selben Blatt-Hero. Alternative
omnidirektionale Basis nicht vollständig den Tabellenwerten zugeordnet. FP ist
als benannte Ausbildungsvariante erfasst: 70 kg/200 kg, 5 h und eigenes Blatt.
Tabelle 717×550×320,5 mm gegen Zeichnung 717,70×550,56×320,40 mm bleibt als
ungeklärte Präzisions-/Rundungsabweichung sichtbar; kein Erstjahr aus AF08.26.

VOGUI: 165 kg Selbstmasse und 150 kg Fracht. VOGUI+ mit UR7e/UR8 Long/UR12e
185/210/200 kg konfigurierte Masse, 7,5/10/12,5 kg Armlast und getrennten Restlasten.
125 kg Plattformangabe auf Seite gegen 130/105/115 kg im Blatt bleibt ungeklärt.
1750-mm-Reichweite des UR8 Long hat ausdrücklich eingeschränkten Arbeitsraum.
Keine numerische Dockinggenauigkeit, volle Ladezeit, Erstjahre oder Preise geraten.
ROS2/RLC/Command Manager/HMI und URCap bleiben Software-/Integrationsbefunde;
Hersteller-UR+/ISO/CE/Alleinstellungsbehauptungen nicht unabhängig zertifiziert.

30 nutzbare URL-Inhalte: 15 HTML und 15 PDF, 28 verschiedene Inhaltskörper. 41 PDF-
Text-/Koordinatenseiten, 114 exakte Stichprobenanker sowie 42 koordinatengeprüfte
Tabellenzeilen mit 98 Zahlenzellen geprüft. 15 öffentliche Viewer-Hüllen zugunsten
der verlinkten PDF-Inhalte ausgeschlossen. Keine Formulare, Recherchebrowser,
bekannten gesperrten Hosts oder visuellen PDF-Prüfungen. Quellenprotokoll:
`reports/competitor-batch-82-evidence.json`; Rohdateien lokal unter
`scratch/competitor-research/primary/batch-82/`.

761 Unit-Tests in 61 Dateien, 20 Wettbewerber-Python-Tests und 66 ausgewählte
Browserfälle bestanden: 28 Robotnik-, 20 Locus/Seegrid- und 18 Vergleichsfälle,
darunter 20 Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Build
3018 Seiten, ungefähr 462 MB. Datenprüfung null Fehler, 851 Hinweise (neun neue
unbelegte Erstjahre). Lint, Format, Wiederholungsimport (null Ergänzungen), Bestands-,
Quellen-, Seiten-, Vergleichs-, Preis- und globale Feldmetadatenprüfung bestanden.
Alle 115 erfassten eigenen Testprozesse beendet;
Port 4321 frei, Ressourcen anderer Aufgaben erhalten. Keine vollständige Browser-Suite.

Gesamtstand: 1968 Modelle/Konfigurationen, 714 Ergänzungen, 856 Merkmalssätze,
3635 Aussagen, 1505 Produktquellenverweise und 75 Firmenfokusse. 10671 Felder auf
659 Modellen: 4948 dokumentiert, 5476 unbekannt, 230 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 345 Feldprüfungen und 173 bleiben offen.
Firmenfokusse decken 73 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `ef7c49f` mit Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
bilden einen separaten Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Rapyuta Robotics (Batch 83)

PA-AMR Weight Inspection als benannte Variante ergänzt; PA-AMR, PA-AMR XL,
PA-AMR Extra High Capacity und AFL vertieft geprüft. 125 Felder: 38 dokumentiert,
83 unbekannt und vier widersprüchlich. Ein Firmenfokus ergänzt. Alle 1964
unbeteiligten Katalogzeilen, 659 früheren Modellprüfungen, 75 Firmenfokusse und
1961 ursprünglichen Quellenidentitäten unverändert; keine neuen CSV-Spalten.

Standard/XL: acht Stunden in HTML gegen zehn Stunden in der weiterhin verlinkten
Familienbroschüre; Batterie-/Generations-/Einsatzzuordnung ungeklärt. Zwei 50-L-
oder vier 10-L-Behälter beim Standardmodell sind von 45 kg Gesamtfracht getrennt.
49×33×30 cm bezeichnen transportierbare Gegenstände, keine Chassisabmessungen.
10–15 cm Lokalisierung bleibt eine Herstellerangabe ohne definierte Fehlermetrik.
Der XL-Link führt zur High-Capacity-Seite; deren 45 kg Eigenmasse und 1,2 m
Gangempfehlung werden ohne Generationenbeleg nicht auf XL übertragen. Kein
zusätzliches identisches Zwei-Behälter-Chassis aus dem Redirect erfunden.
Extra High Capacity behält drei 75-L-Behälter, 39,2 kg Fracht, 63 kg Eigenmasse und
1,2 m/s; die vorläufige Vier-Fuß-Gangbreite ist kein bestätigter Grenzwert.

Weight Inspection: 40 kg Fracht sind keine Eigenmasse. 610×580 mm sind nur
Breite/Tiefe, die Höhe bleibt offen. Bis zu vier Wiegebehälter und Unterstützung
für Behälter bis 50 L belegen keine vier gleichzeitig passenden 50-L-Behälter.
10 g Mindestartikelgewicht und eine Reaktion unter einer Sekunde sind weder
Wiegegenauigkeit noch Kommissionierdurchsatz. Automatische/manuelle Ladung
bleibt mit einer/zwei Stunden getrennt; Ladezustandsfenster und Bedingungen fehlen.

AFL: 1,35 Tonnen und 4,5 m Hubhöhe ohne gemeinsamen Last-Höhen-Nachweis; drei
Stunden Ladung sind keine Betriebsdauer. 30 Paletten pro Stunde sind ein
Einsatzort-Ergebnis. Seitliche Abstände 150–200 mm und 50 mm hinten liefern keine
gesamte Mindestgangbreite. Japan-Verfügbarkeit, Altmodell-Videos und PLd-Sensor-
Behauptung behalten ihren Geltungsbereich. ASRS bleibt als konfigurierbares
Robotik-Lagersystem im Firmenfokus, rapyuta.io als Plattform; kein unbenanntes
Einzelchassis oder garantierter Faktor für Durchsatz/Speicherdichte abgeleitet.

14 URL-Abrufe: neun nutzbare Inhalte (acht HTML und eine verlinkte PDF-Broschüre).
Fünf HTTP-403-Routen ausgeschlossen und nicht erneut angefragt. Neun exakte
Stichprobenanker und Körper-Hashes im Quellenprotokoll
`reports/competitor-batch-83-evidence.json`. PDF-Text ausgewertet, keine visuelle
PDF-Prüfung behauptet. Keine Formulare oder Recherchebrowser verwendet.

769 Unit-Tests in 62 Dateien, 20 Wettbewerber-Python-Tests und 40 ausgewählte
Browserfälle bestanden: 22 Rapyuta- und 18 Vergleichsfälle, darunter zwölf
Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Build: 3019 Seiten,
ungefähr 462 MB. Datenprüfung: null Fehler, 852 Hinweise (ein zusätzliches
unbelegtes Erstjahr). Lint, Format, Wiederholungsimport mit null Ergänzungen,
Bestands-, Quellen-, Seiten-/Export- und Vergleichsprüfung bestanden. Metadaten
aller 664 geprüften Modellseiten mit 10796 Feldern kontrolliert; die übrigen
Herstellerquellen wurden dabei nicht erneut recherchiert. Veraltete öffentliche
Merkmalsdaten im ersten Testlauf erkannt und vor dem finalen Build neu erzeugt.
Alle 236 erfassten eigenen Testprozesse beendet; Port 4321 frei.

Gesamtstand: 1969 Modelle/Konfigurationen, 715 Ergänzungen, 857 Merkmalssätze,
3645 Aussagen, 1511 Produktquellenverweise und 76 Firmenfokusse. 10796 Felder auf
664 Modellen: 4986 dokumentiert, 5559 unbekannt, 234 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 348 Feldprüfungen und 170 bleiben offen.
Firmenfokusse decken 74 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `# BuyAn` mit Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
bilden einen separaten Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Cyberdyne (Batch 84)

Zwölf benannte Angebote ergänzt: HAL-FL08, HAL-FL07, HAL-FL05, Medical HAL Single
Joint, Well-being HAL Single Joint, HAL Lumbar Type for Well-being (BB04), HAL-LB06,
HAL-LB03-SSSJP, HAL-LB01, CL02, Transportation Robot und Medicalcare Pit
(HPD-BT04-JP). HAL-ML08, HAL-ML07 und HAL-ML05 vertieft geprüft. 384 Felder:
96 dokumentiert, 288 unbekannt; ein neuer Firmenfokus. Alle 1966 unbeteiligten
Katalogzeilen, 664 früheren Modellprüfungen, 76 Firmenfokusse und 1961 ursprünglichen
Quellenidentitäten unverändert; keine neuen CSV-Spalten oder Kategorieübertragungen.

Bei HAL bleiben Medizin-/Well-being-Angebote, Ein-/Zweibeinmasse inklusive Zubehör,
Geräteabmessungen und Körpergrößen/-massen getrennt. Die EU-Unterlage gilt nur für
ML07/ML08. Einzelgelenk-Masse/-Maße schließen Steuerung und Batterie aus. BB04 hat
eine gemeinsame 3,1-kg-Tabellenzelle für drei Größen; Lauf-/Ladezeit bleiben unbekannt.
Die japanische Arbeitshilfe ist ausdrücklich LB06 (2,7 kg, Batterieumfang offen;
zehn Stunden Betrieb, drei Stunden Ladung), die englische LB03-SSSJP (3,1 kg mit
Batterie; 4,5 Stunden Betrieb, zwei Stunden Ladung). Keine Sprachalias-Gleichsetzung
oder Übernahme dieser Werte auf das erwähnte LB01. IPX4 und IP5X bleiben getrennte
Herstellerangaben. Ein neuer Filter „Arbeitsunterstützung“ mit englischen/deutschen
Texten erschließt die gewerblichen Arbeitshilfen.

CL02: bis 3000 m² je Ladung ist kein Stundenwert; optionale Desinfektionseinheit
und Fahrstuhlanbindung bleiben optional. Transportplattform: 200 kg Bordfracht
sind keine Zugkraft und keine 25 kg Eigenmasse; Japan-Verfügbarkeit bleibt begrenzt.
Medicalcare Pit: robotisch unabhängige linke/rechte Entlastung mit HAL-Daten;
120 kg Körpermasse inklusive HAL/Orthesen sind keine freie Fracht. Bandgeschwindigkeit
0,2–8 km/h und 110 mm Einstiegshöhe sind weder mobile Fahrgeschwindigkeit noch
Hubweg. HALTREAD, All-in-One, Acoustic X, CYIN und Dienste bleiben abgegrenzte
Portfoliofunde. Keine Zulassung oder unabhängige klinische Wirkung bestätigt.

26 Abrufversuche: 24 nutzbare Inhalte (23 HTML und eine 14-seitige PDF). Ein
vorübergehender DNS-Fehler wurde behoben; eine bildbasierte vierseitige Broschüre
bleibt ungelesen und ausgeschlossen. 24 exakte Stichprobenanker und Körper-Hashes,
sechs HTML-Modellspalten, zwei gemeinsame Massezellen und sechs PDF-Zellen anhand
der Textkoordinaten geprüft. Keine visuelle PDF-Prüfung behauptet. Keine gesperrten
Hosts erneut angefragt, Formulare oder Recherchebrowser verwendet. Dauerhafte
Quellen-/Entscheidungsbelege: `reports/competitor-batch-84-evidence.json`.

781 Unit-Tests in 63 Dateien, 20 Wettbewerber-Python-Tests und 44 ausgewählte
Browserfälle bestanden: 26 Cyberdyne- und 18 Vergleichsfälle, darunter zwölf
Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Zwei anfängliche
Testfehler erwarteten einen Dezimalpunkt im deutschen Vergleich; die bestehende
korrekte Kommadarstellung und Modellqualifikation werden nun ausdrücklich geprüft.
Build: 3031 Seiten, ungefähr 469 MB. Datenprüfung: null Fehler, 864 Hinweise
(zwölf zusätzliche unbelegte Erstjahre). Lint, Format, Wiederholungsimport mit null
Ergänzungen, Bestands-, Quellen-, Seiten-/Export- und Vergleichsprüfung bestanden.
Metadaten aller 679 geprüften Modellseiten mit 11180 Feldern kontrolliert, ohne
erneute Herstellerrecherche für frühere Modelle. Alle 265
erfassten eigenen Testprozesse beendet; Port 4321 frei.

Gesamtstand: 1981 Modelle/Konfigurationen, 727 Ergänzungen, 869 Merkmalssätze,
3698 Aussagen, 1536 Produktquellenverweise und 77 Firmenfokusse. 11180 Felder auf
679 Modellen: 5082 dokumentiert, 5847 unbekannt, 234 widersprüchlich, 17 Roadmap.
Von 518 ursprünglichen Zielen haben 351 Feldprüfungen und 167 bleiben offen.
Firmenfokusse decken 75 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `d4695f0` mit Daten, Filter und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
bilden einen separaten Commit; der Hauptbranch bleibt unverändert.


## Ergänzung vom 2. November 2026 – Interbotix und Trossen (Batch 85)

28 benannte Angebote ergänzt, drei bestehende ALOHA-Kits vertieft geprüft.
590 Felder: 200 dokumentiert, 353 unbekannt, neun widersprüchlich und 28 Roadmap.
Zwei Firmen-/Markenfokusse ergänzt. Alle 1978 unbeteiligten Katalogzeilen,
679 früheren Modellprüfungen, 77 Firmenfokusse und 1961 ursprünglichen
Quellenidentitäten unverändert; keine neuen CSV-Spalten oder Kategorieübertragungen.
Trossens bestehendes Quellenprofil ordnet nun ausdrücklich die 16 neuen Angebote
unter „Trossen Robotics“ zu. Interbotix bleibt eine getrennte Hardwaremarke mit
15 Modellen. Keine Quellennamen, Aliasse oder Erfassungsdaten überschrieben.

Zwölf X-Series-Arme mit eigener Modellübersicht: PincherX-100/-150,
ReactorX-150/-200, WidowX-200/-250/-250 6DOF, ALOHA WidowX-250 6DOF,
ViperX-250/-300/-300 6DOF und ALOHA ViperX-300 6DOF. Volle angegebene Arbeitslast
nur mit empfohlener maximal halber Ausladung; Arbeitsraum und Kühlpausen bleiben
qualifiziert. Servozahl ist keine Arm-DOF-Zahl, Wiederholgenauigkeit keine absolute
Genauigkeit. PincherX-150 nennt wörtlich 150 mm Reichweite bei 900 mm Gesamtspanne;
keine eigenmächtige Korrektur auf 450 mm. Axiale Kettenlänge und Greiferwagenabstand
bleiben von Reichweite und Kontaktöffnung getrennt.

ALOHA Stationary/Mobile/Solo bleiben die ursprünglichen Interbotix-Kits. Mobile
nennt 122 kg, 1 m/s und 1,4 kWh; Energie wird nicht zu Laufzeit umgerechnet.
750 g Traglast und 750 mm Reichweite gehören zum jeweiligen ViperX-Follower mit
Ausladungsgrenze. Frühere Trossen WidowX AI Base/Leader/Follower und die drei
AI-Kits bleiben eigene Angebote. Sechs Armachsen plus Greifer sind keine sieben
Armachsen. Rechneroptionen und Aussagen zur Modellkompatibilität behalten ihre
Bedingungen; weder Kit-Gesamtmassen noch aktuelle Lieferbarkeit abgeleitet.

Neue WidowX Core Follower, Core Leader, Pro und Heavy sowie Rivet Base, die
Rivet-Konfiguration mit zwei Pro-Armen/Kameras, drei Workbench-Lite-Arm-/Kamera-
Pakete und der angekündigte volle Workbench sind separat erfasst. Aktuelle
Arm-Unterlagen sind ausdrücklich vorläufig: Core/Pro-Reichweite 790 mm statt
700 mm auf der Produktseite, Heavy 1114 mm statt 1400 mm. Heavy nennt 6 kg je Arm,
das Workbench-Heavy-Paket 8 kg; Konfiguration/Lastbedingungen ungeklärt. Die
2026-Preise sind vorgeschlagen und warten auf Freigabe, keine festen strukturierten
Kaufangebote. Rivet Base enthält keine Arme, Kameras oder eingebauten Rechner;
890 mm sind vertikaler Verfahrweg, keine absolute Hubhöhe. Lite-Kamerapakete und
Rechnerverzicht bleiben getrennt, voller Workbench ausdrücklich „coming soon“.
Glide ist passiv, Cockpit ein Bedienstand und TRumi ein handgeführter Datensammler.
Sie sowie Computer, Dienste und fremde UGV-Angebote sind keine zusätzlichen
angetriebenen Roboter unter dieser Marke. SLATE/LoCoBot bleiben offene Folgespuren.

41 HTML-/PDF-Abrufe: 40 nutzbare Fach-/Portfolioquellen (35 HTML, fünf PDF mit
14 Textseiten); ein kurzer Dokumentationsindex dient nur der Linkfindung. Zwölf
Modelltabellen, eine expandierte Drei-Modell-Tabelle und 41 weitere exakte Anker
geprüft; Hashes und Spaltenzuordnung dauerhaft in
`reports/competitor-batch-85-evidence.json`. Zwei Rasterzeichnungen heruntergeladen,
aber wegen nicht verfügbarer Bildansicht nicht visuell geprüft; keine Maße daraus
abgeleitet. Keine Formulare/Warenkorbaktionen oder Recherchebrowser verwendet.
Früher gesperrte Hosts wurden nicht erneut angefragt.

793 Unit-Tests in 64 Dateien, 20 Wettbewerber-Python-Tests und 50 ausgewählte
Browserfälle bestanden: 32 Interbotix/Trossen- und 18 Vergleichsfälle, darunter
zwölf Axe-Prüfungen für Desktop/Mobil und helle/dunkle Darstellung. Build: 3059
Seiten, ungefähr 473 MB. Datenprüfung: null Fehler, 892 Hinweise (28 zusätzliche
unbelegte Erstjahre). Lint, Format, Wiederholungsimport mit null Ergänzungen,
Bestands-, Quellen-, Seiten-/Export- und Vergleichsprüfung bestanden. Metadaten
aller 710 geprüften Modellseiten mit 11770 Feldern kontrolliert, ohne erneute
Herstellerrecherche für frühere Modelle. Anfängliche Testannahmen über Profilfelder,
Trossens bislang leeren eigenen Produktbestand, Abschnittswortlaut und URL-Fragmente
korrigiert; veralteten Zwischenbuild vor dem finalen Build beendet. Alle
430 erfassten eigenen Testprozesse beendet; Port 4321 frei.

Gesamtstand: 2009 Modelle/Konfigurationen, 755 Ergänzungen, 897 Merkmalssätze,
3847 Aussagen, 1645 Produktquellenverweise und 79 Firmenfokusse. 11770 Felder auf
710 Modellen: 5282 dokumentiert, 6200 unbekannt, 243 widersprüchlich, 45 Roadmap.
643 exakte Herstellerbezeichnungen; 1036 Profile, davon 632 mit/404 ohne Modelle.
Von 518 ursprünglichen Zielen haben 354 Feldprüfungen und 164 bleiben offen.
Firmenfokusse decken 76 von 591 Quellengruppen ab. Drei Modell- und neun
Listingidentitäten, 862 Buy-Detailinhalte und frühere offene Portfolios bleiben
erhalten. Vollständigkeit und Marktführung sind weiterhin unbelegt.

Zwischencommit `fa00c6b` mit Daten und Tests auf
`origin/codex/competitor-directory-expansion` gepusht. Dokumentation und Prüfprotokoll
bilden einen separaten Commit; der Hauptbranch bleibt unverändert.

## Ergänzung vom 2. November 2026 – Ozobot (Batch 86)

Vier bestehende Modelle geprüft: Ari, Evo, Bit und getrennt davon Bit+.
68 Felder: 23 dokumentiert, 45 unbekannt. Keine neuen Robotermodelle oder
CSV-Spalten. Bit+ erhält eigene Primärmerkmale, Ozobot einen Firmenfokus.
Alle 2005 unbeteiligten Katalogzeilen, 710 früheren Feldprüfungen, 79 früheren
Firmenfokusse und 1961 ursprünglichen Quellenidentitäten bleiben unverändert.
Originale Inventardaten und die getrennte Bit/Bit+-Zuordnung bleiben erhalten.

Ari: 57 g Roboter, 43 × 43,0 mm Breite/Höhe ohne erfundene Tiefe, 3,7 V /
1050 mAh und etwa 240 Minuten Herstellerlaufzeit. 0,9 kg gehören zum Ladekoffer,
nicht zum Roboter; JSON-Versandgewicht 907 g wird nicht übertragen.
Etwa 60 Minuten mit externem 5 V / 1 A Ladegerät und etwa 168 Minuten bis 80 %
im Ladekoffer sind unterschiedliche Methoden/Zielzustände. PC-basierte
Editor-/Python-Programme verlangen laut Datenblatt laufende WLAN-Verbindung;
Bluetooth-/Flashloading-Angaben der Kompatibilitätstabelle behalten ihren
ungeklärten Workflow-/Firmwarebezug. Android/AI-Werbung belegt kein lokales
Generativmodell und keine gemessenen Lernresultate.

Evo: Herstellerdatenblatt nennt 1 oz Roboter und getrennt 2 lb Ladekoffer,
33,5 × 33,0 mm Breite/Höhe ohne Tiefe sowie etwa 60 Minuten Betrieb. Der ältere
geteilte Bit/Evo-Leitfaden nennt 60–90 Minuten ohne Betriebsmodus. Das ist keine
unabhängig gemessene Maximaldauer. 60 Minuten kabelgebundenes Laden und 60 Minuten
bis 80 % im Koffer bleiben getrennt. Gespeicherte Blockly-Programme bis 2 kB
können ohne aktiven PC laufen; daraus folgt kein eigenständiges Python.
Die Datenblattüberschrift „Python over WiFi“ widerspricht ihrer eigenen
BLE-Verbindungsbedingung und belegt keine native WLAN-Hardware. Zehn RGB-LEDs
auf der aktuellen Produktseite gegenüber fünf Front-/einer oberen LED im alten
Leitfaden bleiben ein ungeklärter Revisionsunterschied.

Original Bit: bis 40 Minuten Laden und geteilte historische 60–90-Minuten-Laufzeit,
Einzeltastensteuerung und Farbcode-/OzoBlockly-Lernen sind im alten Leitfaden
belegt. Sie werden nicht auf Bit+ übertragen. Für Bit+ sind Blockly und Arduino
via WebUSB im eigenen Hersteller-Kompatibilitätsblatt belegt. Die bisherigen
unbelegten Angaben zu Preis, Geschwindigkeit, Laufzeit und Erscheinungsjahr
wurden entfernt; Schulstufen werden nicht als Lebensalter ausgegeben.

Ari Entry Kit 250 USD und Evo Entry Kit 175 USD sind über exakte Produkt-/
Variantenmetadaten mit ausdrücklicher Währung belegt. Enthaltenes Zubehör,
Mehrfachpacks, Schulungs-/Curriculumpakete, Handelsrabatte und Lieferzusagen sind
getrennt. Das öffentliche Produkt-JSON enthält 82 Angebote, darunter ein
„Ora EEK Bundle“ mit leerem Beschreibungstext. Das reicht nicht für eine
exakte Ora-Modell-/Herstellerzuordnung oder zusätzliche Roboterkarte.

19 Quellenversuche: 16 HTTP-200-Inhalte, darunter zehn PDFs mit 59 Textseiten;
zwei vorübergehende DNS-Fehler und ein abschließendes HTTP 429. Danach keine
weiteren Anfragen an den Haupt-Host. PDF-Text und Wortkoordinaten sind gesichert,
keine visuelle PDF-/Checkbox-Auswertung behauptet. Die Wettbewerber-Hosts und
anderen früher gesperrten Hersteller wurden nicht erneut abgefragt.

Stand: 2009 Modelle/Konfigurationen, 898 Merkmalsdatensätze (755 Aufgaben-Ergänzungen,
143 bestehende Anreicherungen), 3863 Aussagen, 1654 Produktquellenverweise,
80 Firmenfokusse auf 77 der 591 Quellen-Firmengruppen. 11838 Felder auf 714
Modellseiten: 5305 dokumentiert, 6245 unbekannt, 243 widersprüchlich, 45 Roadmap.
Die ursprünglichen 518 Rechercheziele haben jetzt 357 Feldprüfungen und 161 bleiben offen.
Drei Modellidentitäten, neun Listing-Identitäten, 862 Detailinhalte und historische/
regionale Portfolios bleiben offen. Marktführerschaft ist nicht gemessen.

Prüfung: 793 Unit-Tests in 64 Dateien, 20 Python-Tests und 30 ausgewählte Browserfälle
bestanden (12 Ozobot, 18 Vergleich; darin acht Axe-Läufe). Build: 3059 Seiten,
473 MB. Datenprüfung: 0 Fehler, 894 Warnungen; zwei zusätzliche Warnungen folgen aus
entfernten unbelegten Erscheinungsjahren. Lint, Format, Import mit null Ergänzungen,
Offline-Refresh, Quellenhashes, Export-/Quellenerhalt und alle 714 gerenderten
Prüfseiten bestanden. Anfangs falsche Bestandskonstanten und Annahmen in den
zusätzlichen Prüfskripten wurden korrigiert; kein Anwendungsalgorithmus geändert.
Eigene Testserver, Browser und Hilfsprozesse beendet und geprüft.

Dauerhafter Beleg: `reports/competitor-batch-86-evidence.json`.

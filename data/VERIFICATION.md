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

- [Kuri cancellation (IEEE Spectrum)](https://spectrum.ieee.org/mayfield-robotics-shuts-down-kuri)
- [Laundroid bankruptcy (TechCrunch)](https://techcrunch.com/2019/04/23/seven-dreamers-laundroid-bankruptcy/)

The audit intentionally keeps unverified release years blank and retired product URLs empty when a
domain has been repurposed. This prevents an apparently complete catalog from silently presenting
fabricated dates or linking visitors to unrelated businesses.

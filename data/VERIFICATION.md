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

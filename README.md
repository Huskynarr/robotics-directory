# Robotics Directory

A comprehensive, interactive directory of robots with search, filtering and
side-by-side comparison. Built as a static site with [Astro](https://astro.build/)
and [Tailwind CSS](https://tailwindcss.com/).

🔗 **Live:** [robodirectory.huskynarr.de](https://robodirectory.huskynarr.de/)

![Robotics Directory - a searchable collection of robots](public/images/placeholder.svg)

## Features

- **Nine categories** - humanoids, quadrupeds, companions, cleaning, outdoor,
  educational, smart-home robots, robotic arms and commercial robots, each with subcategory filters.
- **Brand and company directory** with alias search, model links and source references.
- **Sourced product highlights** for reviewed additions, with primary-source links, source roles and check dates.
- **Search & advanced filters** - by name, manufacturer, price, weight, battery
  life, use case and more, with shareable URL state.
- **Detail pages** for every robot with specifications, image gallery and video.
- **Compare** up to four robots side by side.
- **Favorites** persisted in the browser.
- **Dark mode** and a **share** function.
- **28 UI languages** with client-side switching.
- **Responsive** layout for all devices.

## Tech Stack

- **Astro** - static site generation
- **Tailwind CSS v4** - styling
- **pnpm** - package manager
- **Vitest** - unit tests
- **Playwright** - end-to-end tests
- **GitHub Actions** - CI and deployment to GitHub Pages

**Requirements:** Node.js 24 (see `.nvmrc`) and pnpm.

## Local Development

```bash
git clone https://github.com/Huskynarr/robotics-directory.git
cd robotics-directory
pnpm install
pnpm dev          # http://localhost:4321
```

### Scripts

| Command            | Description                                   |
|--------------------|-----------------------------------------------|
| `pnpm dev`         | Start the dev server                          |
| `pnpm build`       | Build the static site to `dist/`              |
| `pnpm preview`     | Preview the production build locally          |
| `pnpm lint`        | Run ESLint                                     |
| `pnpm format`      | Format `src/` with Prettier                   |
| `pnpm test:unit`   | Run unit tests (Vitest)                       |
| `pnpm test:e2e`    | Run end-to-end tests (Playwright)             |
| `pnpm test`        | Run unit and E2E tests                        |
| `pnpm research:refresh` | Refresh saved-source coverage, research queues and review exports without HTTP |

## Deployment

Pushes to `main` are built and deployed to GitHub Pages by the
[`deploy`](.github/workflows/deploy.yml) workflow: it runs lint, unit tests,
the build and E2E tests, then publishes `dist/` to the custom domain configured
via `CNAME`.

## Project Structure

```
data/                 Robot data - one CSV per category (source of truth)
public/               Static assets (images, robots.txt, CNAME, favicon)
src/
  components/         Astro UI components
  data/               Data loading, categories, subcategory filters, i18n
  layouts/            Base layout
  pages/              Routes (index + robot/[id])
  scripts/            Client-side behaviour (search, compare, favorites, ...)
  utils/              CSV parser and formatting helpers
tests/
  unit/               Vitest unit tests
  e2e/                Playwright end-to-end tests
```

## Data Model

The robot data lives in `data/`, with **one CSV per category** that the build
(`src/data/robots.js`) reads directly. The category CSVs are the single source of
truth; research inventories do not automatically become published robot rows.

Files: `humanoid.csv`, `quadruped.csv`, `companion.csv`, `cleaning.csv`,
`outdoor.csv`, `educational.csv`, `smarthome.csv`, `robotic-arm.csv`, `commercial.csv`.

Robotic arms can additionally use `armRepeatability`, with its test standard and
conditions; it is separate from absolute positioning or vision accuracy.

All categories use these common 23 columns. `commercial.csv` additionally includes
`depthRating` for manufacturer-rated operating depth, `flightTime` for aircraft
endurance, and `maxTakeoffWeight` for maximum takeoff mass. These optional fields
retain configuration limits; takeoff mass is not empty aircraft weight, and flight
endurance is not battery life. `cleaning.csv` and `outdoor.csv` additionally use
`workingWidth` (task-dependent width) and `areaRate` (area throughput or explicitly labelled time per area). Cleaning also
uses `waterTankCapacity` to distinguish clean supply from wastewater. Commercial
integrations can additionally use `transportPayload` and `visionPrecision` to keep
freight and marker-relative localization separate from arm load/general accuracy.
Commercial tractor implements additionally use `areaRate` for treatment area per
hour; `workingWidth` stays empty where frame width, tractor row spacing or module
dimensions do not establish total treatment swath. Modes and
accessory conditions stay in each value; area per charge is not an hourly rate:

```
category,manufacturer,model,price,weight,size,batteryLife,maxRuntime,tags,handType,dof,payload,speed,terrain,ipRating,ageRange,website,image,video,gallery,description,releaseDate,chargingTime
```

- `batteryLife` and `maxRuntime` describe operating endurance. `chargingTime` is
  separate and records charging duration, including partial-charge conditions.
- `category` must match the file's category id.
- `tags` is a `;`-separated list (e.g. `consumer;vacuum;mop`) and drives the
  subcategory filters in `src/data/subcategory-filters.js`.
- `image` is a path relative to `public/`, e.g. `images/cleaning/foo.webp`.
- `gallery` uses `path|label;path|label` entries.
- Wrap any field containing a comma in double quotes.

### Adding or Updating Robots

1. Add or edit a row in the matching `data/<category>.csv`. Leave unknown fields
   empty rather than inventing values.
2. Put any image in `public/images/<category>/` and reference it from the
   `image` column. Use only images you are licensed to use.
3. Add at least one `tags` value that matches a subcategory filter, otherwise
   the robot will not appear under any subcategory.
4. Run `pnpm build` and `pnpm test` to verify the site builds and stays
   consistent, then commit `data/` and `public/images/`.

### Competitor research

The public inventories and review evidence live in `data/competitors/`. Company
listings, model candidates and manufacturer-verified products are separate records.
A source listing does not verify availability, specifications or a manufacturer's identity.
See [the competitor audit](reports/competitor-audit-2026-11-01.md) for coverage,
limitations, differentiation and the remaining review queue.

As of 2026-11-03, all source company names are represented in 591 competitor
groups. The catalog contains 2,366 model/configuration entries and 1,297 dated primary-source highlight
records. Review remains open for 3 source model/family mentions and 9 originally
unclear listings. Of the 430 catalog models matched to named source mentions, all 430 have
dated highlights. Highlight checks do not certify the existing
specification tables; inventory completeness does not imply full product verification.
The combined research queue also includes reviewed listing resolutions and reviewed
company-description references: 518 catalog targets have dated highlights, with
selected technical-field reviews for 476 and 42 still awaiting those reviews.
Family and contextual references retain their scope; they do not establish exact
model identities. See `data/competitors/research-queue.json` and
`data/competitors/robot-research-queue.csv` for source references and manufacturer priorities.
Run `pnpm research:refresh` after catalog or evidence changes. It refreshes the
comparison against the saved inventories without replacing their original dates.
The heuristic gap file now compares all 2,366 rows using same-brand matches only.
Its 113 model and eleven brand candidates are search hints, including already
reviewed aliases, components and services; the strict unresolved counts remain
three model identities and nine listings.
Gausium and Gaussian Robotics now share one manufacturer-evidenced brand profile;
the original company names and directory URLs are retained and the former profile
redirects to the canonical page. Twenty-three Gausium model/configuration entries
have selected field reviews, including eleven newly added named configurations.
Cleaning modes, optional side brushes, shared family values and historical delivery
models remain qualified; six new source conflicts stay visible. Phantas Extra's
exact hardware/generation mapping and the provider-specific Scrubber 50 Pro SKU
remain unresolved. These reviews do not establish complete historical lineups.
IPLUSMOBOT now has 33 reviewed configurations, including eleven additions from
manufacturer product pages and the 2026 APAC brochure. Navigation accuracy,
QR-conditioned docking, drive mode, lift travel, maximum fork height and arm reach
have separate comparison fields. Runtime lower bounds, loaded versus empty speed,
arm versus platform payload and regional source conflicts remain explicit.
NERA-P200-DS3 is an autonomous integration chassis; NERA-C remains a controller
component. The EMMA-T/400L drawing's 300 kg load is separate from the wider
800 kg tugging-family limit. Generic application headings and software are not
additional hardware models. Three competitor-family references now link eight more
primary-backed configurations. This is not a complete historical/region lineup audit.
Bear Robotics has twelve catalog models with selected field reviews, including
new Servi mini, Servi Clean and Servi Clean Max entries. LG B9 is a fourth addition
under LG, supported by Bear integration-partner evidence. Servi Plus moved to
commercial while retaining its route and image; unsupported price and fixed-runtime
claims were removed. Its web/manual endurance conflict remains explicit. Carti
100 charging covers 1%-75%, and QR docking is separate from SLAM navigation for
the five Low-Profile variants. Mode-specific cleaning times, water versus dust
capacity and optional CE heights remain qualified. Family milestone years are not
inherited by separately named 1000s/Max variants. Kinisi's provisional launch table
remains a company-level finding pending hardware-identity reconciliation.
All twelve Enabled Robotics configurations now have selected integration-sheet
reviews. Arm payload and transport load have separate detail/structured/comparison
fields; marker-relative vision precision does not become navigation, docking or
arm repeatability. The exact Standard/ESD product numbers are searchable. Family
mass ranges, footprints, component IP ratings and estimated operating charge
intervals remain qualified; daily utilization is not single-charge endurance.
ER-ABILITY, ER-ORGANIZER and ER-CONNECT remain software findings. Current ER-FLEX/
ER-MAX specifications are not substituted into older MC250/MC600 packages solely
because the manufacturer documents their family-name correspondence.
Rainbow Robotics now has selected field reviews for all 26 catalog platforms,
including thirteen arms, RBQ-10 and twelve newly reviewed or expanded humanoid,
quadruped and AMR identities. Earlier arm/RBQ-10 specifications retain their scope. Arm reach is available in
the detail table, structured properties and comparison. Six earlier arm/RBQ-10 conflicts
remain visible: two 850-arm reach disagreements, metric/imperial payload and mass
discrepancies, and RBQ walking-speed/step-height differences. Mounting footprint,
arm/controller mass, TCP versus angular speed, percentage gradients and optional
modules retain their scope. RB16-900 uses its family card because the linked
HTTP-200 route returns the homepage; missing exact-model fields stay undocumented.
The expanded company focus retains arm/hygiene evidence and adds four named RBM
AMRs, historical KAIST lineage and two coming-soon platforms. Earlier gated
resource links and current RBY/RBM catalog gates remain unrequested.
Elephant Robotics now has twelve selected model reviews, including the first dated
highlight record for the existing myCobot 280 M5. Original myAGV physical conflicts
stay visible; 2023 Pi/Jetson columns separate navigation from standby and optional
kits. Arm lifespan hours are not battery runtime. Mercury A1/B1/X1 load, dimension
and controller scopes stay distinct. The MARS-1001 manual supplies MarsCat joint,
pose, age and mode-specific battery/charging values; MetaCat's unsupported ten-hour
claim was removed. Regional advertised amounts remain qualified in highlights.
The separate metaCat AI entry is still unverified. A missing legacy URL and a
subsequent shop HTTP 429 are documented; metaDog/metaPanda search hits do not
create new product cards. No further shop requests were made after the rate limit.
Fdata now has fourteen selected model reviews: ten existing configurations and four
additions (A012 Mini, A005, A006 and A010). The Mini workbook column extends the
existing A012 family mapping. Current/legacy A012 payload conflicts, optional Plus
horizontal movement, A025 sensor columns, A026 full-load/clearance limits and
range/time unit boundaries remain explicit. A004/A008/A009 redirect-only labels do
not become verified cards. Secondary-domain product pages do not certify current
stock or complete historical/service/mower lineups.
Productive Robotics now has fifteen selected configuration reviews: eight existing
OB7/Blaze entries and seven named Max/package/cell additions. Torch reach, welding
feed and work-table dimensions stay separate from bare-arm reach, free motion and
whole-product size. New measurement fields reach details, structured properties
and comparison; a manufacturing/welding subcategory finds the integrated systems.
OB7/Stretch mass and laser motion-speed conflicts remain visible. Duo identity,
warranty scope, component revisions and installation safety remain qualified.
Generic missing-value notes were corrected on 151 already documented fields in
26 prior Elephant/Fdata reviews without changing their facts, sources or statuses.
All 52 model-typed and 28 family-typed names from company descriptions now have
scoped decisions: 41 model references, 35 related-product references, one non-robot,
two named offerings whose hardware identities remain unverified and one coordinated
system reference. The remaining 52 typed names also have scoped source reviews: 18 software,
16 component, six brand/company, six configuration, four additional system, one
service and one machine-family reference. APP+ is documented by a 2022 programme
brochure without identifying it as current 1+OS. VEX is a brand reference, separate
from provider authorization. Kime V5 is a versioned robot; the claimed exact launch
date and computer-vision portion control remain unverified. These counts are separate from the original
406 model/family mentions. Related links do not assert exact configurations or a
complete current lineup. Provider references do not establish manufacturer identity,
authorization or availability.
Richtech Robotics now has eight selected model reviews, including commercial category
corrections for ADAM, Scorpion and Titan with their existing identifiers and image paths.
Announced Dex platform figures retain roadmap status. Titan payload discrepancies,
ADAM's malformed size table, per-arm loads, cleaning brush/rake widths, percent versus
degree slopes, unlabeled tank roles and component IP classes stay explicit. Rental
formats and ADAM venue case-study results are attributed service/case claims rather
than additional models or guaranteed returns. No current or historical full-lineup
completeness is inferred from the empty server-rendered solutions index.

OrionStar now has thirteen selected model reviews including the separate Chinese
Zhaocaibao entry. Five named models were added: GreetingBot AD and CleaniBot S55 Pro,
M1, K1 and C5. LuckiBot Pro and Zhaocaibao moved to commercial delivery while preserving
identifiers and local images. Current navigation and the generic overview differ;
all eleven English navigation product links were checked without claiming historical
lineup completeness. CarryBot D100/D150 retain configuration and 100 kg endurance-test
conditions; D150-only figures are not inherited into D100. Cleaning mode endurance,
brush versus squeegee widths, robot/station tanks and component lifetime remain distinct.

OTTO Motors now has selected field reviews for its five current linked hardware
models: 100, 600, 1200, 1500 and Lifter. Minimum aisle width and turning radius have
separate detail, structured-data and comparison fields. No-payload aisle conditions,
10%–90% charge windows, 90%–10% runtime windows, attachments inside total load and
Lifter manual/autonomous modes remain explicit. The 1500 sheet's 3570 mm/146 in
conflict remains visible. Battery charge cycles are not operating hours; ambiguous
yaw typography is not converted into a numeric angular bound. Software, chargers,
HADS, batteries and carts are separate configuration or integration findings.

Reviewed additional specification rows now show the same dated source/status badges
as predefined fields. Batch 99 checked rendered metadata for all 838 selected-review
model pages, including seventy-six reviewed launch years. Batch 100 checked the two
additional Nexaro pages separately and proved all 838 previous review records and
2,074 other catalog rows unchanged. This does not re-verify the underlying
manufacturers or unmarked fields.

Robotize now has selected field reviews for six current GoPal models and the
separately documented historical GoPal 400 (December 2017). Six present-day models
were corrected; historical mass, capacity and battery values remain unknown.
Repeated product summaries disagree with named specification sections and the
six-column brochure. Twenty-nine field conflicts remain visible, including P35
module-inclusive capacity, charging duration/window and bare-platform lane limits.
Rotation diameter and from-center radius labels are not silently converted. Pallet
stations, lift/conveyor stations, top modules and GoControl remain accessory or
software findings. Brochure text/column positions were checked; visual inspection
was unavailable and independent performance was not verified.

Deep Trekker and Pipe Trekker now have fifteen selected model reviews: seven existing
ROV/crawler entries corrected and eight models added, including VAC MAX, A-150/A-200
and five historical names. Pipe Trekker retains its separate manufacturer profile;
S/X and ROV package differences remain searchable within the hardware model evidence.
The 300 new field decisions distinguish 68 documented, 220 unknown and twelve conflicting
values. Reused shop tables, camera revisions, speed and runtime conflicts remain visible.
Head width, robot dimensions, dive depth, tether length, reel IP rating and pulling force
retain their different meanings. Generic VAC MAX tables and historical publication dates
do not certify full-assembly specifications or hardware launch years.

Addverb now has 34 selected model/system reviews across warehouse robotics and
Physical AI: nine existing records corrected and 25 named models added. FlowT 1530
and the differently named linked FlowT 1520 document remain separate. Biped Elixis
and wheeled Elixis-W, Trakr 5/20 and Syncro 5/10 retain distinct specifications.
The 697 new field decisions distinguish 298 documented, 379 unknown, eighteen
conflicting and two targeted/roadmap values. Partial charging windows, per-arm
loads, optional protection and controller dimensions retain their scope. Pallet
size configurations, conveyors, lifts and named software remain separate portfolio
findings rather than extra robot cards. Thirty saved HTML pages and all their
selector names have explicit classification decisions in the research artifacts.

DEEP Robotics now has twelve additional selected platform/edition reviews:
nine existing entries corrected, with Lite3 Venture, Lite3 EDU and DR02 Standard
added. The 183 field decisions include 54 documented and 129 unknown values.
M20 working speed, laboratory extremes and product limits remain qualified;
X30/Pro use separate PDF columns. Lite3 component mass is not whole-robot mass.
Venture/EDU software conditions and DR02 Pro/Standard joint counts remain distinct.
S10 and M20S SDK support does not establish physical ratings. M20_Piper stays an
integration lead. Ten failed product responses are retained without serving as
evidence; four legacy models remain outside this selected review.

PAL Robotics now has seventeen selected platform/configuration reviews, with
eleven additions, six corrected existing records and an expanded earlier Kangaroo
review. All eleven platforms in the saved manufacturer directory are represented;
six additional historical, edition or equipped configurations retain their own
scope. The 287 selected fields distinguish 95 documented, 184 unknown and eight
conflicting values. Mobile TIAGo Pro reach is separate from its teleoperation
accessory. KANGAROO bimanual loads are not two extended-arm payloads, and TALOS
torque-sensor exclusions remain explicit. StockBot endurance/recharge, ARI depth,
TIAGo Base limits and TIAGo Pro Arm height/payload retain source differences. TIAGo Head
and REEM-C are classified as legacy; educational package prices do not become
current structured offers. A Base AI redirect does not establish an OMNI alias.

Fourier now has eighteen selected model/configuration reviews: seven additions
and eleven corrected existing entries, including one reconciled GR Nano identity.
The 293 fields distinguish 109 documented, 176 unknown and eight conflicting values.
GRW combined payload and partial recharge stay qualified; GR-3/N1 specifications
retain source differences. GR Nano uses customer-provided AI services. Ambiguous
edition mass, Lite payload and Mini recharge bounds remain blank. Rehabilitation
workspace and patient limits do not become robot joint counts or payload ratings.

Unitree now has eighteen additional selected platform/configuration reviews,
covering six new named configurations and twelve corrected existing entries.
The 259 selected fields distinguish 160 documented and 99 unknown values. A2/PRO
perception and protection, As2 variant endurance and development access, R1
AIR/standard/EDU hardware and optional H2 computing retain their exact columns.
B2-W kilometre range does not become operating hours; H1 battery hours and
unsupported payload remain blank. The fourteen saved portfolio references
were subsequently resolved in the additional review below.

Unitree's fourteen saved portfolio references now resolve to 26 additional named
models/configurations and a scoped boxing context on the existing G1 page. These
26 reviews add 409 selected fields: 206 documented and 203 unknown. Fixed arms,
mobile platforms, component figures and equipped kits retain their exact scope.
H2-D Standard direct-power operation is separate from Flagship battery endurance;
G1-D software 24/7 availability is not robot battery life. B2-Ex protection labels
are manufacturer statements without independent certificate validation. D1-T kit
mass/payload and charging times remain unknown; family from-prices and price caps
do not become exact structured offers. Unitree now has 58 catalog entries, without
claiming complete historical coverage or validating every legacy entry.

Carbon Robotics now has seven selected reviews: six commercial tractor implements
and the separately named 2021 autonomous field-demo unit, explicitly not for sale.
The 119 selected fields distinguish 42 documented from 77 unknown values. Treatment
area rate reaches details, structured properties and comparison. Tractor lift
capacity is separate from implement mass/payload; the G2 1200's rear PTO and 8R
transmission requirements are not copied from front-PTO variants. Conflicting
nominal-width units remain in sourced highlights without inventing total treatment
swath. Carbon Autonomy early access, remote human supervision and Carbon AI/apps
remain company/retrofit/software findings. Claimed targeting, weed kill, savings
and payback are not independently verified field outcomes.

Daifuku now has 21 named models/configurations with selected field reviews,
including 20 additions across sorting, regional AGVs, cleanroom transport,
automotive towing and airport baggage inspection. Towing load, carried payload,
fork load center, optional deck derating and system sorting throughput stay
separate. Eight source conflicts remain visible; M500-U/U2200 hardware identity
and exact regional availability remain unresolved. Generic integration headings
and the 2030 vision do not become extra currently available robot models.

Construction Robotics now has a SAM100 field review and company focus, supported
by historical project-owner and contractor reports. The 2018 brick-per-hour quote
stays separate from its eight-second cycle observation and whole-shift output.
Current hand-guided MULE MZ100/ML150 equipment and the ML150S support-name lead
remain separate from SAM100; configuration columns, runtime/charging differences,
width-unit mismatch and conditional financing retain their scopes. Construction
Robotics and Advanced Construction Robotics remain separate companies.

Coco 2 now has a selected technical-field review and a Coco company focus.
The explicit February 26, 2026 launch supports its release year. Manufacturer
ratings of 21 km/h, 32 km distance and 30% grade stay distinct from lawful sidewalk
speed, battery hours and degrees. Human oversight and Pilot Terminal intervention
remain visible; packing capacity and service uptime do not become robot mass,
body dimensions or runtime. The legacy Coco route redirects to Coco 2.

CMR Surgical now has selected reviews for original Versius and newly added
Versius Plus. Component mass/dimensions and restricted bedside-arm battery support
remain separate from whole-system ratings. Plus vision and instrument features
retain their regional limits. FDA milestones distinguish the original 2024 grant,
Plus 2025 clearance and the October 21, 2026 decision; the exact latest expansion
label was not established from the retrieved record. Redirects and a missing
summary remain research limitations rather than evidence of current labeling.

BotEyes now has selected reviews for Pad and the newly identified Mini camera
configuration. The current web table and a survey PDF with March 2019 metadata
disagree on Pad mass and height; hardware-revision mapping remains unresolved.
Ten-hour operating and full-charge figures stay separate. Pad tablet bundles,
shipping/dock measurements and Mini's separate camera/drive workflow keep their
own scopes; Pad dimensions, endurance and autodocking are not copied to Mini.

Blue Frog Robotics' existing Buddy Pro+ now has a selected sixteen-field review
and company focus. The 560 mm technical-table height conflicts with the current
60 cm overview; the offer does not identify a hardware revision that resolves it.
Six-hour endurance and forward/reverse speeds retain Buddy platform scope.
Optional docking, remote-pilot obstacle-detection limits, software packages and
the expired March 2025 quote remain separate; no additional robot is invented.

Beatbot now has five additional selected model reviews: AquaSense X and Sora 30
are enriched, Sora 70 and Sora 10 are added, and Aquatic RoboTurtle is identified
as a research prototype. Station filter washing and waste-bin intervals remain
separate from robot endurance and charging. Sora 30 runtime is not inherited by
Sora 10, and Sora 70 keeps its own dimensions, mass and ingress rating. Requests
stopped after an HTTP 429; seven successful native sources support this batch.
Other Beatbot models and a full iSkim field review remain open.

Barrett Technology, LLC now has twelve selected model/configuration reviews:
eleven WAM additions and a deeper Burt review. Four- and seven-axis Standard,
High Speed, Ultra High Speed, High Payload and High Precision values retain
exact table ownership. A historical active-gimbals/master package stays separate.
Repeatability is not absolute accuracy, peak tip speed is not full-load speed,
and workspace volume is not physical size. BurtWrist, hands, controllers and
BurtCare remain components or services; no clinical efficacy/approval is inferred.

Aethon now has five selected model reviews, including new Zena RX, Zena and
historical T2 TUG entries. Exact T3/T3XL sheets keep cart capacity separate from
arm payload and preserve the nine-hour versus twelve-hour runtime discrepancy.
Clinical PIN/fingerprint access and hotel QR/PIN delivery stay model-specific;
turning envelopes, dock dimensions and compatibility identifiers are qualified.
T2 TUG has no inherited current-model specifications or inferred launch year.

Advanced Construction Robotics now has selected field reviews for TyBOT and the
new IronBOT V3.0 record. Active tying and placed-mass rates, rail span, carried
material capacity and generator endurance retain separate comparison fields.
The IronBOT sheet's imperial/metric mass and height discrepancies remain visible;
transmitter battery life and optional TyBOT hoists are kept separate. A sourced
company focus distinguishes hardware, reporting software and supervised services.

Engineered Arts now has 14 selected family/generation reviews, including twelve
additions: Ameca Gen 1/2/2.6, Ameca/Ami/Azi Desktop Gen 2/3, Mesmer and SociBot
Kiosk/Mini. Ameca and RT4 are enriched; Ameca's earlier four-field review expands
to seventeen. The 238 selected fields distinguish 90 documented, 143 unknown and
five conflicting values, with 234 net new fields. Current generation tabs retain
geometry, audio, Wi-Fi roadmap and mass-conversion differences. Motor counts are
separate from DoF; RT4 bare/base/kiosk/compressor quantities and fixed feet stay
separate. SociBot is explicitly discontinued since 2019. A new manufacturer focus
separates Tritium software from hardware. Historical family/version dates and all
prior literal highlights remain visible. See `reports/competitor-batch-132-evidence.json`.

A further 13 KEENON/MiR records have selected field reviews, including nine
additions: DINERBOT T1/T2/T5/T6/T2 Pro, M1, GUIDERBOT G1, Xiaolang and MiR250
Dynamic. The 260 fields distinguish 104 documented, 151 unknown, four conflicting
and one roadmap value. C25 operating/charging intervals and separate water tanks,
M2 standby, G2 lower-bound endurance, T2 subsystem IPX5 and tray loads retain their
scope. G2 now sits in commercial with its existing route and image preserved.
Historical MiR100 revisions remain conflicting; Dynamic has its own loaded/unloaded
and docking conditions. T2 Pro remains a historical announcement with release
unconfirmed. Two company focuses retain prior evidence and add historical scope.
See `reports/competitor-batch-131-evidence.json`.

Sanbot now has 11 selected family/configuration reviews, including nine additions:
Max and its Professional/Standard/Economic configurations, Mini ELF and its
PRO/BASE/RETAIL configurations, and customized Xiaohai 2.0. The 200 fields
separate 58 documented, 141 unknown and one conflicting value. Native variant
columns preserve manual versus powered bases, Professional freight capacity,
operating versus standby duration, Mini privacy-switch differences and mains
power. Nano height conflicts remain visible; Elf charging-pile values stay out
of robot metrics. Dated Max towing/height claims and customs deployment context
remain scoped. QIHAN and Sanbot Innovation share the Sanbot product-brand
profile without asserting a legal rename. See `reports/competitor-batch-130-evidence.json`.

Apptronik and NASA now have 13 selected model/configuration reviews, including
12 additions. All ten native Our Work cards have model/manufacturer decisions:
upper-body platforms, bipeds, a mobile manipulator and wearable research systems
remain distinct; Valkyrie/R5 retains NASA Johnson Space Center attribution.
The 225 fields distinguish 37 documented and 188 unknown values. Historical
2023 unnumbered Apollo specifications remain dated on the family record rather
than inherited by Apollo 1/2. Apollo 2 swap-enabled uptime and actuator efficiency
do not establish single-pack endurance. Shared Draco text does not separately
certify both generations. NASA's article and two-page fact sheet agree on the
selected R5 configuration. See `reports/competitor-batch-129-evidence.json`.

Agility now has six selected family/generation/configuration reviews, including
five additions: Digit 4, Digit 5, Cassie and Cassie Gen. 1/Gen. 2. The 102 fields
distinguish 14 documented, 81 unknown and seven roadmap values. Digit's commercial
sales announcement from January 3, 2020 is separate from its 2019 prototype.
Digit 5's 90-minute runtime and nine-minute recharge targets do not imply
20-hour single-charge endurance, and reachable height is not horizontal arm reach.
Its 2027 early-access and certification plans remain future milestones. Archived
Cassie support, computer-stack configurations and its particular sprint result
remain scoped. Arc, RoboFab, battery/compute partners and unresolved generation
references are not additional robot rows. See `reports/competitor-batch-128-evidence.json`.

ANYbotics and Booster Robotics now have 13 selected model/configuration reviews,
including seven additions: ANYmal B/C, three K1 editions and two T2 editions.
The 216 fields distinguish 81 documented and 135 unknown values; two earlier
reviews are expanded. K1 walking durations remain tied to edition batteries and
1.1 m/s test speed. T2's posture-dependent 10 kg dual-arm maximum and different
TOPS/TFLOPS compute units remain qualified. T1 optional arms and Agent exclusions
are separate. ANYmal stays a generic family, and B/C/D public robot-description
software does not certify full physical specifications. ANYmal X uses authored
manufacturer post text only; the main ANYbotics host returned 403 and requests
there stopped. See `reports/competitor-batch-127-evidence.json`.

Shield AI now has four selected aircraft/platform reviews: V-BAT, X-BAT and
the newly added Nova 1 and Nova 2. The 84 fields distinguish 15 documented,
67 unknown and two roadmap values. Fuel endurance, gross takeoff mass, payload
and communications configurations remain separate. The public-share V-BAT PDF
and product HTML differ on metric landing-zone dimensions. X-BAT milestones and
its 39 ft design wingspan remain development targets. Nova 2's 15-camera system
and five-centimetre map resolution do not imply numerical navigation accuracy.
All 16 native Hivemind showcase labels have scoped decisions; software,
third-party OEMs, PC-Nova simulation and unresolved iPRD do not become additional
Shield aircraft. See `reports/competitor-batch-126-evidence.json`.

UVD Model C, UVD Robot Pharma and Akara Violet now have 60 selected field
reviews: eight documented and 52 unknown, ten added highlights and two company
focuses. Model C retains its explicit 2020 launch without inheriting current
range specifications. Pharma's conditional 25 m² / approximately ten-minute room
example remains separate from battery endurance and guaranteed hourly throughput.
Authentication, audit trails, site qualification and Violet's dose-map/manual
cleaning workflow retain their scope. Thermal sensors, Clara and validation
services do not become additional robot models. Public brochure landing pages
contain forms without direct PDF links; no forms were submitted. See
`reports/competitor-batch-125-evidence.json`.

UBTECH now has 20 selected platform reviews: eight additions, twelve existing
model reviews, 360 fields and 40 additional highlights. Walker C uses its own
manufacturer page; older Walker, S, S Lite, X and industrial S generations remain
separate. Tienkung configurations, the unconfirmed Voice & Vision DOF total,
CADEBOT's conflicting six/eight-hour working durations, net/shipping mass and
modular-kit inventories retain their scope. Manufacturer images were inspected
through OCR text and coordinates with two engines; no visual inspection is claimed.
U1/UWORLD, historical JIMU and full group portfolios remain open. See
`reports/competitor-batch-124-evidence.json`.

SuperDroid now has 31 selected model/platform reviews: 29 additions and two
Gopher/Bulldog enrichments, with 1,026 fields and 88 added highlights. All 35
catalogue cards have a reviewed mapping or an explicit unresolved decision; six
legacy/placeholder configurations remain open. Current navigation adds Jack
Russell and Lynx. Groundhog table conflicts, full HK1000-V2 naming, operator versus
robot values, development hardware, retired products and configurable mower/plow
roles retain their scope. Native HTML cells, SKUs, availability statements and
redirect destinations were checked. No full historical portfolio or present stock
is certified. See `reports/competitor-batch-123-evidence.json`.

Modular Robotics and Wonder Workshop now have eight selected educational reviews,
including new GoPiGo2, GoPiGo3 and Cue entries. Cubelets construction, GoPiGo
generation/software compatibility, historical Dot/Cue, virtual characters and
optional accessories retain their scope. Dash charging and intended-age conflicts
remain unresolved; unsupported older values were removed. GiggleBot’s retained
price snapshot keeps its earlier date after failed fresh TLS/connection checks.
The batch adds 136 field reviews and 29 highlights, with one new and one expanded
company focus. See `reports/competitor-batch-122-evidence.json`.

Kawasaki now has reviews for all 58 distinct named robot models in the 2026
Iberian integration-partner portfolio’s parameter tables: 56 additions and two
YF enrichments, with 1,160 selected fields and 290 added highlights. Native grid
and word coordinates preserve merged-cell ownership. YF work envelopes and task
cycles, duAro per-arm payload, KJ wrist versus arm load, multi-IP ambiguity,
MC/MS sterilizability and MG15HL load consultation retain their scope. Document
dates are not release years; the remaining mobile/prototype entries and the full
global/historical lineup require separate review. The company focus identifies
the integration-partner source role. See `reports/competitor-batch-121-evidence.json`.

iRobot now has eleven selected identities with field reviews, including six new
models: Max 775 Combo, Max 715 Vacuum, Plus 575/515/415 Combo and Mini. Five
existing entries were reviewed; 237 fields, 42 added highlights and a company focus
retain regional launch pricing, historical Ava/Cisco scope and prototype Duo roles.
Plus 515’s contradictory 295-minute/about-ten-hour runtime stays omitted with a
conflicting status. Companion dimensions, spray versus suction pressure, dock
service intervals and user-operated Electro Plus remain separate.
See `reports/competitor-batch-120-evidence.json` for sources and validation.

Ambi Robotics now has four reviewed named systems: A-Series and AmbiStack
enriched, B-Series and AmbiKit added, with 148 selected fields and 21 new highlights.
Primary introductions are dated 2023, 2021 and 2025 for B-Series, AmbiKit and
AmbiStack respectively; A-Series first release remains unverified. Historical
customer sorts/hour, three-cell versus per-cell rates, kits versus individual items,
and handled-case limits versus machine specifications retain their context.
AmbiOS/AI apps, AmbiVision scanning, partner unloading and external AMRs stay
separate. The existing company focus is expanded; uncertain PDF digits remain open.
See `reports/competitor-batch-119-evidence.json`.

ABB now has seven reviewed cobot entries from its 2023 portfolio: two YuMi
models enriched, GoFa 5/10/12 CRB 15000 and SWIFTI CRB 1100/1300 added.
140 selected fields and 28 new sourced highlights retain the brochure date.
GoFa 12's literal `IP567` is left unresolved; SWIFTI variant arrays remain unpaired.
Maximum TCP speed, safe collaborative speed, repeatability, controller/tooling
and single/dual-arm differences stay qualified. Current GoFa revisions and ABB's
broader industrial/mobile/historical portfolio remain outside this selected review.
See `reports/competitor-batch-118-evidence.json`.

Intuitive now has nine reviewed platforms: seven da Vinci generations enriched,
Ion IF1000 and historical SP999 added, with 333 selected fields and 37 new sourced
highlights. Commercialization dates remain separate from FDA decisions: historical
SP999 (2014 record) is distinct from SP1098 (commercialized 2018). Clinician control,
component/software scope and version-specific authorizations remain qualified.
Regulator records now have their own source label in model pages and comparison,
with English/German comparison labels; manufacturer submissions retain their role.
Comparison now honors URL/current UI language ahead of saved language, covered by
a permanent regression test and the existing comparison behavior/accessibility suite.
See `reports/competitor-batch-117-evidence.json`.

Oceanbotics and ULC now have 22 reviewed named platforms: four existing entries
expanded and 18 models/configurations added, with 814 selected fields and 57 new
sourced highlights. Battery-excluded masses, variant depth/runtime and pipe/service
scope stay separate. ROV tether/depth conflicts and compact PDF OCR uncertainty
remain visible. ULC collaborations and prospective capabilities retain their scope;
three image-only PDFs were machine-extracted without a visual inspection. One
company focus expanded and one added. See `reports/competitor-batch-116-evidence.json`.

Skydio now has reviewed R10, X10, X10D and announced F10 Lightrunner, with 148
selected fields and 18 additional sourced highlights. R10's 20-minute flight is
separate from three-hour landed perch; aircraft/controller/dock ratings and
X10/X10D configuration masses and charge windows remain distinct. F10's September
2026 announcement plans customer deployment in 2027; its eight technical fields
retain roadmap status, without treating earlier 2025 forecasts as fulfilled.
Dated launch/availability milestones, partial versus full charge and supplier
compliance/security claims retain scope. Older Skydio aircraft remain research leads.
See `reports/competitor-batch-115-evidence.json`.

Running Brains Robotics and Simbe now have nine reviewed models: GR100, announced
GR200, the Tally family/RFID configuration and named Tally 1.0, 2.0, 2.6, 3.0 and 4.0.
The 333 selected fields add 29 sourced highlights and two company focuses. GR200
retains roadmap ratings with rental planned for 2027. Tally's first introduction
was November 2015, RFID July 2018 and 4.0 January 2026; internal/customer deployment
milestones stay separate from exact first release. Current runtime and historical
mass/height are not inherited across generations. RFID's 35/40-foot range text
remains conflicting. Fixed Tally Spot, stations, software, RaaS fees, supplier
certification and under-contract fleet counts retain their separate scopes.
See `reports/competitor-batch-114-evidence.json`.

Percepto now has six reviewed current/historical aircraft: Air Max, Air Max OGI,
Air Mobile, predecessor Sparrow, Ranger and Ranger OGI. The 222 fields add 24 sourced
highlights. Air Mobile launched in November 2021 alongside AIM 2022; Sparrow succession
does not establish identical hardware. Aircraft/base masses, propeller-tip spans,
ingress ratings and dock cycles stay separate. Ranger's 61 MP product page and 1 MP
portfolio text remain an unresolved source discrepancy. The October 27, 2026 Axion
launch is hardware-agnostic SaaS with Ranger/Harbor hardware retained; U.S. consolidation
was still underway. Dated detector/regulatory claims retain supplier/test scope,
without independent universal approval or performance verification.
See `reports/competitor-batch-113-evidence.json`.

Inspired Flight now has reviewed IF800 TOMCAT and IF1200 families plus the historical
IF750, whose launch is explicitly dated 2018. The 111 fields add 17 sourced highlights;
four source/revision conflicts retain IF800 mass, takeoff mass and operating-envelope
differences and IF1200 payload discrepancies. Maximum flight duration is not a
maximum-load guarantee; landed hot swap and charging current are not airborne
endurance or a full charging duration. Listed USD controller/care variants start at
23,000/33,500, with inconsistent public availability flags and no verified stock.
Older IF1200A documentation does not by itself establish a separate current aircraft;
batteries, controllers, payloads, software and care plans retain their own roles.
See `reports/competitor-batch-112-evidence.json`.

Ekso now has seven reviewed powered platforms: current EksoNR and Indego Personal,
archive-listed Indego Therapy, historical EksoGT/eLEGS/HULC and study-limited Nomad.
The 259 selected fields add 29 sourced highlights. Personal's 14 kg product page
and linked 13 kg safety text remain an unresolved revision/configuration difference;
Therapy's printed 17.7 kgf weight and four-hour operation remain separate. Wearer
fitting is not device mass/geometry or cargo load; battery, charge and service life
have separate scope. GT release is explicitly 2013; the February 2026 Nomad filing
only conditionally targeted broader rollout in late 2026. The October 1, 2026
Wandercraft acquisition retains device identities; DynaWear's industrial transfer,
passive EVO/Vest, ZeroG support, MediTouch distribution and software/services are
separate roles. Clinical, regulatory, coverage and exclusive-USP conclusions are
not established by these selected technical checks.
See `reports/competitor-batch-111-evidence.json`.

Cyngn now has three reviewed integrations: the current Motrec MT-160 DriveMod
Tugger, BYD DriveMod Forklift and historically documented Columbia DriveMod
Stockchaser. The 111 field checks add 17 sourced highlights. Tugger towing/deck
loads, autonomous/manual speeds, percent slope, charge and runtime remain distinct;
6000 lb/54 in preview figures are separate from the later 12000 lb upgrade.
Forklift catalog narrative does not fill values from page 15, whose content/type is unverified.
Stockchaser landing-page and Tugger download wording remain a source mismatch,
without forced aliasing or transfer of host-vehicle ratings. Software, fleet tools,
attachments and rental services are separate roles.
See `reports/competitor-batch-110-evidence.json`.

Badger now has five named current/historical robot entries: Digital Teammate,
PatrolBot, Retail inSight, Retail inSpect and UV Disinfect Robot. The five reviews
cover 168 selected fields and add 23 sourced highlights. Sixteen-hour Digital
Teammate battery and twelve-hour historical PatrolBot battery remain separate.
The 2025 platform launch does not date earlier chassis. inSight/inSpect are
explicit historical robot names; Marty and Deborah retain deployment-name scope.
UV treatment figures are early 2021 tests with further pilots announced, without
claiming current availability, completed trials or safe occupied-space operation.
RFID accuracy and item-location sections are not universal vision/navigation
ratings. See `reports/competitor-batch-109-evidence.json`.

Awabot One and Pro now have 74 selected field checks and ten added manufacturer
highlights. Current pages explicitly identify them as formerly Beam and BeamPro;
these specifications do not cover every historical revision. One's same-page
3/3.2 km/h discrepancy stays marked as conflicting. Its 45-degree stability tilt
is not driving gradeability. Eight-hour battery operation is distinct from
continuous runtime, and One's six-hour charge and 2 cm threshold figures do not
transfer to Pro. Remote driving and parking assistance retain their scope.
Historical rental packages, software and HIKU performance are not extra robot
models or current purchase prices. See `reports/competitor-batch-108-evidence.json`.

Asylon DroneDog and Guardian now have 53 selected field checks and expanded
manufacturer highlights. DroneDog remains a Spot/PupPack integration with no
inherited bare-Spot mass, payload, speed, IP or battery rating. Guardian retains
manufacturer wording "up to 30+ minutes", 35 mph aircraft speed, separate 25 mph
wind resistance and IP45. Under-three-minute battery swaps are not charging time;
24/7 human monitoring is not battery endurance. Starlink is optional. DogHouse,
DroneHome, PupPack, DroneIQ and RSOC retain infrastructure/component/software/service
roles rather than becoming extra robot models. Supplier mission totals and market
leadership remain qualified. See `reports/competitor-batch-107-evidence.json`.

Original Anki Vector and Cozmo now have 33 selected field checks and expanded
historical SDK highlights. Unsupported approximate mass, battery/runtime, body
size, age, price and first-release values are omitted. Vector's same-network SDK
connection with companion app disconnected differs from Cozmo's app/Wi-Fi/USB
path. Vector's documented visual-marker charger search differs from Cozmo's
position-dependent reverse-to-charger operation. Lift geometry is not payload,
body size or rated speed; scripted speech does not establish autonomous dialogue.
Original narrow SDK highlights are retained. The Digital Dream Labs homepage
returned HTTP 429; further product-page requests stopped. Support failed expired-certificate TLS validation;
current app/cloud/stock, corporate scope and later 2.0 models remain unverified.
See `reports/competitor-batch-106-evidence.json`.

Neuromeka's mobile/humanoid review adds seven named platforms/configurations:
ZEN, current NAMI, EIR, historical RAXIS, Moby-RP V3.3 and Moby-Agri 600/650 Type.
The 179 selected fields retain body/hand versus upper-body DOF, per-arm/platform
versus component loads and camera lift versus chassis motion. Historical NAMY
remains an unresolved name lead; unnamed service/factory/surgical table columns
are not mapped. EIR's December 29, 2025 article described planned production from
March 2026, without proving actual production or delivery. Moby-Agri's additional
unscoped dimension row remains visible. Three fresh HTML sources and three saved
batch104 sources were used, with PDF text/coordinates on pages 4/14/15 and no
visual inspection. See `reports/competitor-batch-105-evidence.json`.

Neuromeka now has 23 selected arm identities with 414 reviewed fields, including
21 additions: named Indy generations/research variants and historical releases,
OPTi3/5, NURI C/S/30 and D3/D6 delta robots. Original Indy tables do not inherit V3
data; RP and RP2 remain separate. OPTi3's TBD mass is preliminary. NURI20c's printed
0.5 mm repeatability versus general family marketing and NURI30's reach/workspace
wording remain qualified source differences. Delta example cycles and repeated XY
labels are not converted into unconditional speed or serial-arm reach. The English
catalog cover is V20251205 despite download label V20260903. Relevant PDF text and
word coordinates were inspected; visual image/PDF/drawing inspection was unavailable
and is not claimed. Mobile/humanoid and further historical leads remain open. See
`reports/competitor-batch-104-evidence.json`.

Magazino SOTO and TORU now have 50 selected field reviews. SOTO's total load,
charging duration and full-speed aisle conditions differ across manufacturer and
parent-company sources; these remain three visible conflicts. Its December 2023
technical sheet supplies revision/configuration-qualified mass, body dimensions
and IP20. TORU's object limits, daily operation and the NEO integrated system's
350+ picks/hour do not become chassis dimensions, battery endurance or one-robot
throughput. Five HTML pages and a three-page PDF were inspected as text only.
No new robot identities or independent performance tests are claimed. See
`reports/competitor-batch-103-evidence.json`.

Twenty versioned FarmBot identities now have 360 selected field reviews: two
existing Genesis v1.8 entries and eighteen additional Genesis/Express versions or
named designs. The v1.9 pair retains preorder/roadmap status; Genesis/Express MAX
retain cancellation and unproven delivery. Nominal bed footprints, shipping masses,
component IP ratings and assembly times do not become throughput, assembled mass,
whole-system IP or operating endurance. The v1.8 plant-height source disagreement
remains explicit, while v1.9 permanently mounted watering is kept separate from
v1.8 removable tooling. Earlier v0.0–v1.1 docs are unreviewed leads. HTML text and
table version headings were inspected; no visual CAD/image inspection or crop
performance test was performed. Main-host requests stopped after HTTP 429; separate
official documentation hosts remained accessible. See
`reports/competitor-batch-102-evidence.json`.

All seven existing Makeblock platforms now have selected reviews across 119 fields:
six new reviews plus an expansion of Neo's two energy fields, adding 117 net fields.
Original mBot/mCore, CyberPi-based mBot2/Neo, Codey Rocky, mTiny, Ranger, Ultimate
and the complete Rover retain separate controller, programming and kit scope.
Unsupported prices, masses, runtimes, precise ages, launch years and standard-gripper
assumptions were withdrawn. Base-mBot2 energy/speed does not transfer into Rover;
Neo's numerical dimensions retain ambiguous horizontal source-axis labels.
Four manufacturer-authored PDFs and a saved November 1 product text were read as
text only; the Spring 2022 catalog is historical evidence. Current stock/app
compatibility and learning outcomes were not independently verified. Seven pages
and exports were checked; 839 other review records and 2,069 other CSV rows remain
unchanged. See `reports/competitor-batch-101-evidence.json`.

Nexaro's two existing models now have 40 selected-field checks and a sourced
company focus. Cleaning throughput (up to 100 m²/h), mapping speed and maximum
area remain distinct; featureless-space and dock-distance limits are retained.
Hard-floor runtime stays mode-specific and charging windows cover 15–85%/15–95%.
NR 1700 shop/datasheet body-size disagreement remains visible; the old NR 1500
URL redirect does not merge model identities. Document revisions are not launches.
See `reports/competitor-batch-100-evidence.json`.

Boston Dynamics now has 17 generation/configuration and legacy reviews across
318 fields, including ten additional cards. Production Atlas (January 2026), the
2024 electric development platform and retired hydraulic Atlas stay separate.
Instant/sustained/one-handed Atlas loads and heavy-lift endurance retain their
conditions. Spot's active HTML/linked PDF mass and length disagreements remain
visible; bare robot, optional Arm, sensor kit, tablet and Dock ratings stay separate.
Stretch trailer unloading and Case Pick have distinct 1,300/1,500 kg robot masses;
towing, box load, stacking and task rate do not transfer across configurations.
History timeline nodes are not assumed first-release years. See
`reports/competitor-batch-99-evidence.json`.

AgiBot now has 25 current model/configuration reviews across 431 fields, including
13 new robot cards: A2 Ultra/Lite, X2 Ultra/REC/EDU, G1 MAX, D1 Edu/Max/MaxPro and
C5/C4/C2/C2P. The A3 Ultra has its own 60 kg/eight-hour figures; base A3 retains
55 kg/ten hours. G2 Max's October 29, 2026 launch specifies 21 DOF and up to 40 kg
combined dual-arm handling. D1 MaxPro's 3 m/s lab headline is qualified by the
actual product's 2 m/s software limit. Stair, obstacle, load, SDK and station scopes
remain explicit; two source/counting issues remain marked. The old A2_W route
returns A2 Ultra content, so legacy A2-W and A2 Max technical mapping remains open.
PDF evidence was checked as text, with no visual-inspection claim. See
`reports/competitor-batch-98-evidence.json`.

Blue Robotics now has selected reviews for BlueROV2 and BlueBoat across 38 fields:
21 documented, 16 unknown and one unresolved battery-condition conflict. The ROV's
HTML table uses 15.6 Ah for two-hour normal/four-hour light operation, versus 18 Ah
in its linked datasheet. Depth depends on tube material; available buoyancy is not
bollard thrust. BlueBoat's 15 kg allowance combines batteries with payload, and
18–62-hour endurance is conditioned on battery count, 1 m/s and no payload.
The operating guide qualifies telemetry-loss behavior by mode rather than promising
universal return-home. USD starting prices exclude tax and retain options/system
scope. Four current Ambi URLs returned HTTP403; earlier Ambi evidence and pending
reviews remain unchanged. See `reports/competitor-batch-97-evidence.json`.

Bitcraze now has selected reviews for both source-linked flying kits across 34
fields: 18 documented and 16 unknown. Manufacturer store kit listings are 240 USD
for Crazyflie 2.1+ and 480 USD for Brushless, without inferred tax, delivery or
ecosystem-infrastructure inclusion. Stock-battery flight is seven/ten minutes and
charging forty/sixty minutes; a distinct maximum endurance is not established.
Brushless takeoff mass depends on legs/guards, and its 100 mm diagonal motor-centre
span is not overall envelope. Plus retains the manufacturer's published axis order.
Positioning support is required for automated flight; controllers, radios, decks,
docks and external Crazyswarm2 remain separate. The LED-ring compatibility exception
stays visible. Datasheet revision dates are not robot release dates. See
`reports/competitor-batch-96-evidence.json` for source limitations and retained prior
product evidence.

The latest Rainbow review covers 218 fields: 55 documented, 159 unknown, two
conflicting and two roadmap. Six additions are RBM-D400/D1000, RBM-S100a/S100b,
RB-Y2 and RBQ-10W. The last two remain coming soon. S100a/b payloads are 120/100 kg;
D400/D1000 masses, loads and differential drive stay separate from battery energy.
HUBO, HUBO 2, DRC-HUBO, FX-2 and RBQ-3 retain historical developer/manufacturer scope.
RB-Y1 keeps official DOF disagreements and dated 1.5/2.5 m/s statements, wrist reach,
optional equipment and teleoperation scope. An October 2021 RBQ-3 demonstration is
not a current RBQ-10 datasheet or a 2023 first release. Gated catalogs were not
requested. See `reports/competitor-batch-95-evidence.json`.

Knightscope now has five selected reviews across 80 fields: 27 documented,
50 unknown and three roadmap. The historical stationary K1 Tower is added;
K1 Hemisphere, K3, K5 and K7 retain exact model and generation scope. K5 V5
brochure values differ from the historical filing. Patrol intervals, charging
stops and 24/7 service remain separate; K3 disables plate-recognition functions.
K7 remains under development despite its dated beta-deployment target. Adjacent
emergency devices, retrofit components, software, human services and H1 wearables
are recorded without extra robot cards. See
`reports/competitor-batch-94-evidence.json` for sources and validation scope.

Agile Robots now has eight selected reviews across 143 fields: 64 documented,
72 unknown and seven roadmap. Six additions cover Diana 7 and Thor 3/7/7 Pro/12/20;
Agile ONE and Yu 5 Industrial retain exact model scope. Thor 20 remains coming
soon and Thor 3 APAC-only. Robot/controller mass, load/reach pairs, TCP speed,
pose repeatability and force-control accuracy remain separate. Agile ONE’s public
animation attributes establish height/mass/payload values; hand joint counts and
cloud-training demonstrations do not substantiate full-body DOF or endurance.
Group membership and hand/software components do not create duplicate robots.
See `reports/competitor-batch-93-evidence.json` for sources and validation scope.

1X now has four selected model reviews across 68 fields: 21 documented and 47
unknown. Beta/Gamma prototype milestones, the later NEO home offer and EVE’s
industrial history remain distinct. NEO ownership, subscription and reservation
prices retain their US pre-order scope. Hand/wrist DOF counts, hand/body IP ratings,
carry/lift/arm loads and runtime/charging rates are separate quantities. The
842 Wh table versus 0.75 kWh FAQ capacity difference remains unresolved. Beta’s
cooking showcase is explicitly teleoperated; current NEO cooking is initially
restricted. Two prior models gain dated highlights and one company focus is added.
See `reports/competitor-batch-92-evidence.json` for sources and validation scope.

SoftBank/Aldebaran/Maxtronics now have nine selected model reviews across 163
fields: 62 documented, 99 unknown, one conflicting and one roadmap. Six additions
cover Whiz i/B/P/V, Pepper+ and the explicitly developmental NAO7. Historical
NAO6/Pepper identities remain attributed to Aldebaran. Whiz mass, mode durations
and regional generations remain qualified; dust capacity is not a water tank,
and rental fees are not purchase offers. NAO6 cloud migration, Pepper software
versions and Japan service sunsets retain their model, region and date scope.
Two company focuses and the existing Maxtronics profile binding are included.
See `reports/competitor-batch-91-evidence.json` for sources and validation scope.

SMP Robotics now has twenty selected configuration reviews: seventeen additions
and three retained identities, across 370 fields (71 documented, 296 unknown,
three conflicting). Named security generations, delivery, environmental/gas
monitoring, telepresence, ALPR and pest-control configurations retain their equipment
scope. Picard/Promt envelope conflicts and Picard operating/freight mass ambiguity
remain explicit. Solar supply, propane duration, travel distance, camera axes and
cargo compartments are not battery endurance, whole-platform DOF or robot envelope.
S6.3 is explicitly not represented as explosion-proof or intrinsically safe.
S7/Prompt, Herschel code/resolution variants, Kepler/IPD and full historical/regional
coverage remain open. See `reports/competitor-batch-90-evidence.json` for source
hashes, PDF duplication and validation scope.

LEGO now has nine selected kit reviews: original NXT, separate NXT 2.0 8547,
EV3, Robot Inventor 51515, SPIKE Essential/Prime and current Computer Science & AI
sets 45520/45521/45522. Four named sets were added and five existing identities
corrected. The 153 fields comprise 35 documented and 118 unknown values. Build
mass, envelope, runtime and mechanical DOF are not inferred from hub mass, sensor
axes, battery capacity/cycles or lesson hours. Current kit contents and USD
single-kit amounts retain their SKU scope; grade bands are not chronological ages.
Retired SPIKE sales, scheduled support to June 30, 2031 and bounded competition
eligibility remain explicit. Five Robot Inventor builds and classroom quantities
are not additional hardware models. Full historical/regional coverage remains open;
see `reports/competitor-batch-89-evidence.json` for source hashes and exclusions.

Realbotix now has selected field reviews for six retained identities: historical
Aria, B-Series, M-Series, F-Series and announced Echo Tabletop/Full Body. The 102
fields comprise 21 documented, 74 unknown and seven roadmap values. Aria is a
historical demonstrator and a current selectable persona, without a unique current
hardware configuration; unsupported mechanical and price claims were removed.
B-Series facial points are not a DOF count, and F-Series' estimated 4–8 hour battery
range is not a measured 480-minute maximum. Echo's footprint and character heights,
required AI plan, optional Vinci upgrade, configuration-specific cloud/local behavior
and estimated H2 2027 delivery remain explicit. Current terms limit reservations to
US/DC addresses. No extra hardware cards are inferred from personas or plans; see
`reports/competitor-batch-88-evidence.json` for primary-source hashes and limitations.

UFACTORY now has eight selected model reviews, including four additions: 850,
Lite 6 and historical uArm Swift/Metal. Current three-model and five-model matrices
retain exact axes, load, reach, TCP speed and repeatability mappings. Three xArm
mass discrepancies remain visible; controller and Gripper G2 data are not robot
body ratings. Swift Pro dimensions are millimetres, and its documented maximum
speed is 100 mm/s. Available v4.10.2 release notes remove several older Studio
workflows. Historical Swift/Metal identity is corroborated by manufacturer-linked
SDKs without inheriting Swift Pro mechanics. The 144 fields comprise 58 documented,
83 unknown and three conflicting values. Component revisions, supplied packages
and historical/regional completeness remain open; see
`reports/competitor-batch-87-evidence.json` for source hashes and qualifications.

Ozobot now has four selected model reviews: Ari, Evo, original Bit and separate Bit+.
Robot mass excludes cradles and shipping variant weights; width/height pairs do not
invent a depth. Wired charge time stays separate from cradle charging to 80%, and
stored Evo Blockly stays separate from connected PC execution. Bit+ documents
Blockly and Arduino over WebUSB without inheriting original Bit battery figures.
Entry-kit prices have explicit USD evidence; unsupported speed, age and launch
values were removed. The 68 fields comprise 23 documented and 45 unknown values.
The empty Ora EEK Bundle, radio/workflow wording and Evo LED revision remain open;
see `reports/competitor-batch-86-evidence.json` for source hashes and limitations.

Interbotix and Trossen now have 31 selected offering reviews, including 28 additions.
Twelve X-Series arms and three existing ALOHA kits retain exact model/arm mappings;
750 g follower load and 1.4 kWh mobile energy are not combined cargo or runtime.
Previous-generation WidowX AI and Solo/Stationary/Mobile AI stay separate from
Core/Pro/Heavy, Rivet and Workbench. The new arm specifications are preliminary;
reach and Heavy package load conflicts remain visible, and 2026 prices are proposed.
Full Workbench is marked coming soon. Trossen's existing source profile now maps its
own sixteen branded offerings while Interbotix retains its separate hardware profile.
Glide, Cockpit, TRumi, computers and third-party UGVs retain their portfolio roles.
The 590 fields comprise 200 documented, 353 unknown, nine conflicting and 28 roadmap
values. Source hashes, named overview tables, preliminary column mappings and test
results are in `reports/competitor-batch-85-evidence.json`. Uninspected raster drawings,
SLATE/LoCoBot leads and complete historical/regional lineups remain open.

Cyberdyne now has fifteen selected offering reviews, including twelve additions.
Their 384 fields distinguish 96 documented and 288 unknown values. Medical and
well-being HAL model names, double/single-leg mass, wearer fit and device dimensions
stay separate. Japanese LB06 and English LB03-SSSJP describe different generations;
LB01 inherits neither table. CL02 coverage per charge is not an hourly rate, and
Medicalcare Pit's belt speed is not mobile travel speed. Workplace-assistance HAL
models have a dedicated commercial filter with English/German labels. Source hashes,
model-column checks, PDF coordinate checks and validation are recorded in
`reports/competitor-batch-84-evidence.json`. One image-only brochure, historical
portfolio completeness and independent treatment/performance outcomes remain open.

Rapyuta Robotics now has five selected model/configuration reviews, including the
new PA-AMR Weight Inspection variant. Their 125 fields distinguish 38 documented,
83 unknown and four conflicting values. Standard/XL eight-hour runtime differs
from the still-linked ten-hour family brochure. XL-to-High-Capacity generation
mapping remains unresolved. Item/tray dimensions, partial chassis footprints,
weighing response, cargo mass and site throughput retain their scope. The modular
ASRS and robotics software are covered in the manufacturer focus. Source hashes,
nine sampled anchors and validation are recorded in
`reports/competitor-batch-83-evidence.json`; five unavailable routes and the
complete historical portfolio remain open.

Robotnik now has fifteen selected offerings across seven platform families and the
RB-THERON FP education variant: nine additions and six existing models reviewed.
Their 366 fields distinguish 167 documented, 189 unknown and ten conflicting values.
Carrier cargo, installed-arm load/reach and configured robot mass stay separate;
heavy-load footprints, stronger wheels, lifting columns and battery options retain
their conditions. Runtime, drawing/table and carrier-load discrepancies remain
explicit. Fifteen manufacturer-linked PDFs support numeric tables; current and
unmapped legacy SUMMIT/GEN wording are kept distinct. Source hashes, 114 sampled
anchors, 42 coordinate-checked table rows and validation are recorded in
`reports/competitor-batch-82-evidence.json`. Historical portfolio completeness,
independent safety/performance and exact current purchase prices remain open.

Locus Robotics and Seegrid now each have four selected model reviews. Historical
Locus Max and Seegrid Lift EL1 are additions; six existing models were reviewed.
Their 184 fields distinguish 49 documented, 132 unknown and three conflicting
values. Vector/CR1 introduction milestones and RS1 feet/inches wording retain
source conflicts. Towed cart capacity, pallet load, fork/body dimensions and fleet
operation stay separate. Array's 2026 introduction and NeuraGrasp claims do not
establish numeric gripper load, universal SKU success or battery endurance.
See `reports/competitor-batch-81-evidence.json` for source hashes, sampled exact
anchors, decisions and validation; present Max availability and unavailable
datasheet details remain open.

Geek+ now has 31 selected model/revision reviews across six families, including
28 additions and three existing models. Their 682 fields distinguish 310 documented,
352 unknown and 20 conflicting values. Explicit S revisions, MP1000R-SNE V2.1 and
X1200/H/Z identities retain their source scope. P40/P40R and generic S-page mappings
remain unresolved. Global/regional/historical mass and speed differences, forklift
height derating, robot/carrier dimensions and opportunity charging stay explicit.
The source hashes, model decisions and validation are recorded in
`reports/competitor-batch-80-evidence.json`; this is a selected review, not a complete
historical portfolio or independent performance/market-position claim.

Avidbots and Event 38 now have selected reviews for all six existing referenced
models across 114 fields: 59 documented, 49 not documented and six conflicting.
Kas runtime, tank-role and aisle differences remain explicit; Neo loaded/empty
mass, head-specific theoretical output and warehouse versus standard grade limits
retain configuration scope. Aircraft flying mass, takeoff mass, payload, sensor
weight, telemetry reach and packed size remain separate. E455 60/65 lb takeoff
claims stay conflicting; seven-pound endurance is not assigned to twelve-pound
options or DROPS integrations. Two company focuses were added. No extra robot
cards were inferred from cleaning heads, sensor options or accessory systems.

SROD and Macco have twenty additional selected reviews across 356 fields:
130 documented, 224 not documented and two conflicting. Twelve named SROD models
were added; three repeated pipe/blade application-route pairs create no duplicates.
Crawler mass/endurance stays separate from reels, terminals and hydraulic units;
camera lift/angles stay separate from cargo load and mechanical joints. T200 mass,
S3831E pipe range and micro-cutter axial-feed units retain discrepancies. F100
battery exclusion, localization and future camera software remain qualified.
Macco named throughput and conditional financing are distinct from V5 hardware
and retail prices. V5 retains per-arm load, five-finger hands, arm/neck groups,
robot/kiosk scope and restricted software access. The existing Macco company focus
was extended without removing prior claims/sources, alongside a new SROD focus.

Robot.com and LocoRobo have twelve additional selected reviews across 197 fields:
48 documented, 148 not documented and one roadmap. LocoXtreme, LocoArm, LocoRover
and fixed-surface R-top are four new named offers. R-noid's linked revision 003
sheet adds neck axes and top speed; structural arm length stays separate from
usable reach and vertical workspace. R-kiwi mass capacity is separate from cargo
volume. R-dog retains its 2027 concept/waitlist conditions. Educational leg, sensor
and wheel counts do not establish joint DOF; school grades do not become ages.
Course/software names and LocoDroneX spacing do not create duplicate airframes.
Two company focuses retain service, software, hardware and learning-system scope.

Quantum Systems and Ohmnilabs have sixteen additional selected reviews across
262 fields: 109 documented, 138 not documented, ten conflicting and five roadmap.
Eight named platforms were added, including WIY Drones STRILA under its documented
manufacturer with Quantum as integration partner. Three company focuses separate
vehicle families, software and options. Original Ohmni stays separate from its
OhmniCare replacement; SuperCam support retains its original archived source date.
Charging windows, serial conditions and disinfecting modes remain explicit.
Flight time, takeoff mass, displacement, draft and mission endurance keep their
distinct meanings. Trinity export restrictions and PULSE preliminary claims remain
qualified; manufacturer disagreements stay visible. Four historical names remain
identity leads. These reviews establish neither complete lineups nor availability.

VideoRay and Standard Bots have eight additional selected reviews across 131 fields:
65 documented, 58 not documented, six conflicting and two roadmap. No model added.
ROV motion axes stay separate from thruster/IMU counts; piloting manipulator lift
stays separate from thrust, tether retrieval and dive depth. Pro 5 mass/depth and
Wraith speed conflicts remain visible. Ally battery availability, optional package
equipment and Wraith controller-only IP retain their scope. Spark and Thor reach
conflicts remain explicit, including Thor's malformed source unit. Spark speed
still carries an elapsed roadmap date; Bolt and autonomous navigation remain
coming soon. Hot swapping does not establish 24-hour single-charge endurance.
Starting dollar listings lack explicit currency and create no structured Offer.
Eight archived VideoRay manual identities are retained as research leads.

GreyOrange and KUKA have fifteen additional selected reviews covering 275 fields:
114 documented, 160 not documented and one conflicting. Seven named LBR iisy
standard/CR variants are added. Ranger pickup, load and loaded/unloaded speed
conditions stay separate; CRN explicitly includes third-party hardware vendors.
Uplift's printed metric and imperial length values conflict. Fork length is not
lift height, and fleet case-study throughput is not an individual robot rate.
KUKA iiwa has seven axes; iisy has six. Standard arm mass and pose repeatability
are not assigned to CR variants. Smallest iisy 3 R760 is IP30, other listed iisy
models IP54; iiwa CR mounting remains floor only. Controller/software platform,
optional tooling, torque accuracy and application safety retain their own scope.

DJI and HWArobotics have twelve additional selected reviews covering 225 fields:
91 documented, 131 not documented and three conflicting. New model identities are
Mavic 3 Pro Cine, FPSS1500A, FPSS1500B and GTR200. Aircraft takeoff mass is not
maximum takeoff mass or cargo payload; Mini standard/Plus battery and regional
availability conditions, charger/hub equipment and flight test conditions stay
explicit. HWA cargo sizes, unit loads, single-aisle throughput, shuttle movement,
hoist capacity, rack height and shuttle stroke stay separate. Current tote pages
name SLS900 but link older SLS300/400/500/600 PDFs with different values; hardware
continuity remains pending, with no duplicate SLS900 cards or assumed aliases.
FPSS speed notation and B runtime ambiguity remain visible; multi-day charged
duty is not single-charge endurance. GTR200 is a robotic station, while nearby
human workstations and MFC software do not become standalone robot cards.

Cleanfix and EZ-Robot have thirteen selected reviews covering 231 fields:
102 documented, 125 not documented and four conflicting. New identities are
RA660 Navi XL Generation 2, EZ-InMoov Enhanced Robot Head, EZ-InMoov Humanoid
Robot (Hardware Kit), AdventureBot and Battle Flipper. The old JD Humanoid row
was a duplicate of JD/SKU KI-0100: its image, links, favorites and comparison
selections are preserved through the canonical JD identity. Thus five additions
and one duplicate removal increase the catalog by four, not five. Cleanfix
membrane-tank roles share capacity; optional fast charging and Pure/Connect app
features retain their configuration scope. InMoov kits require user-printed
plastic parts. Product mass and assembled dimensions are separate from shipping
values; servo/controller capabilities are not robot payload, speed or total DOF.
Dated USD listing amounts and Unavailable labels do not create universal Offers.
The optional driveMode CSV column now also exists for educational robots.

Quasi Robotics and Tennant have thirteen selected reviews covering 237 fields:
123 documented, 104 not documented and ten conflicting. Three newly sourced
Tennant models were added: X2 ROVR SCRUB, X16 SWEEP and P1 VAC. Five Quasi C2
variants keep their exact shelf, suggested payload, drive, aisle, sensor and
wireless-option differences. Charging endpoints do not imply an unstated initial
charge. Tennant coverage per solution tank stays separate from theoretical manual
hourly productivity; dry hopper and dustbin volume are not water tanks or cargo
ratings. X2 hourly unit conversion, X4 length, legacy runtimes, T16 lithium-battery
pairing, X16 aisle/runtime and P1 mass/dimensions retain visible disagreements.
The optional minimum-aisle column now also exists in the cleaning CSV and uses
the existing detail/comparison interface. Docks and software are not extra robots.

Omron and ECOVACS have twenty-two selected reviews covering 392 fields:
218 documented, 166 not documented and eight conflicting. Twelve separately
named models/variants were added: four Omron LD ESD models, OL-450S2/S3,
MD-650/900, HD-1500 and three GOAT LiDAR PRO mowers. Accessory bundles, mast
options and fleet software remain separate from robot identities. Reviews keep
payload and battery-qualified mass, partial charging, mower/trimmer/roller/body
widths, robot/station dimensions and theoretical area rates in their stated scope.
OL speed units, K1 charging/area rates, A3000 dimensions and A3000 PRO slope/mass
conflicts remain visible. An A3000 PRO runtime cell without a time unit stays
unknown. WINBOT area-time, water, station battery duration and power-off backup
remain separate quantities. US main-product prices and stock are dated regional
observations, excluding selector/accessory prices and universal structured Offers.

Capra and Hypershell now have thirteen selected reviews covering 224 fields.
CAPRA200/500 distinguish onboard carrying from towing, exact dimensions, battery
mass boundaries and partial wireless charging. Carrier, Scout and Urban retain
complete-system scope instead of inheriting bare-platform figures. Hypershell
X Ultra, X Carbon and X Pro are separately named additions alongside the S
variants. `assistPower`, `assistancePace` and `assistanceRange` keep wearer
assistance separate from autonomous speed, cargo load and battery hours. Halo
mass inclusion and announced delivery timing remain qualified; the direct store
returned HTTP 429, so current price, stock and deliveries are unconfirmed.
Dated MSRP, preorder, range and estimated price text does not generate an exact
structured Offer. Price sorting extracts the amount without joining date digits.

Smart Robotics now has six selected system/configuration reviews covering 96
fields. Essential, Advanced and Premium retain their exact footprints, pattern
limits and multi-pick/open-box differences. Family maximum throughput and payload
are not assigned to every package. Item Picker handles above 5 kg without a
published upper item-mass limit. Mixed Case Palletizer load and stacking-height
conflicts remain visible. `throughput` and `stackingHeight` have their own
source-aware detail, structured-data and comparison fields, separate from linear
speed, installed size and maximum fork height. These optional commercial columns
remain blank for other models without a separate review.

FANUC now has eighteen selected CR/CRX reviews: six existing CR arms and twelve
new named standard, Paint and Food configurations. The 288 fields distinguish
138 documented, 146 unknown and four conflicting values. Arm repeatability has
its own detail/structured/comparison field with source status and English/German
labels. CR-14 reach changes at 12 kg; CR-35 and CRX-30 payload modes retain their
reach and wrist-orientation limits. Mechanical-mass and reach conflicts remain
visible. Food package mass, axes, speed and repeatability are not inherited from
standard arms. Three US CR pages identify legacy models no longer in production;
this does not establish worldwide retirement. Other FANUC families and historical
variants remain outside this selected review.

The model-review CSV includes separate primary highlights, evidence URLs, dates and
complete/partial/missing/unmapped statuses. Selected specification reviews cover
23,408 fields across 1237 models, distinguishing documented, undisclosed, conflicting and
roadmap values. Field sources appear on product pages, including reviewed launch years; the review export includes
those values and evidence. Unmarked fields remain unverified.
The model comparison now includes every available reviewed highlight, dated primary
sources and publisher roles, plus field-level review statuses and qualifications.
A separate 6,305 kB JSON response loads only for search or comparison;
evidence stays separate from the shared catalog data script. Search and comparison share the same
on-demand request and page-session cache. Missing reviews and failed source loads
have distinct messages, with retry and model-page links available. Conflicting
values stay qualified beside the numeric cells. English labels are available as
fallback for all 28 UI languages; German labels are localized.
Catalog search now includes all 5,731 reviewed highlight statements as well as
names, descriptions and tags. Highlight-only matches show the entire matching
statement and link to the model's highlight/source section. Full manufacturer/model
names and case/accent/whitespace/dash normalization improve lookup without changing
identity matching. Filters and browser history apply to the expanded results.
Loading and failures are explicit; basic name search remains available on failure,
with a retry action. Source URLs and private research metadata are not indexed.
English fallback labels cover all UI languages, with German result labels localized;
the claim text itself stays in its reviewed language.
An offline source-theme audit restores 45 direct assignments from 17 company
descriptions and 14 listings, plus 11 derived model assignments with listing-level
provenance. ROS 2, tactile sensing, robot docking, cross-docking, operator support,
curricula and specific construction tasks are now visible on brand profiles and
searchable in the brand directory. These remain unverified directory themes;
numeric specifications and primary highlights are unchanged. Explicitly denied
services stay excluded. The source snapshot remains 2026-11-01; this is no new
live fetch or proof of exhaustive semantic extraction.

KEENON adds the manufacturer-documented bipedal XMAN-F1 and corrects thirteen
existing entries, including three moves from Smart Home to commercial use.
Fourteen selected reviews cover 170 fields. C30 dry-cleaning and C40 sweeping/
scrubbing endurance remain mode-specific; T9/T10 charging is explicitly 15–100
percent. C55 water capacity, S100 passage units and S300 height/configuration
basis retain unresolved source discrepancies. Water tank capacity now appears
in detail tables, structured Product properties and comparison. R1/F1 poster
facts are disclosed as OCR transcriptions; persona birthdays are not treated as
release dates. XMAN-L1/X101/M102 remain company-level research leads without
verified robot cards. Failed legacy C25/G2/M2 routes do not prove discontinuation.
Pudu now has explicit T150/T300 Standard/Lifting, T600 Upright/Underride,
MP2000 Standard/Narrow Fork and PuduBot 2 PDFD12/PDFD22 hardware entries. Fifteen
existing entries have corrected data, including five moves from Smart Home to
commercial use. The new reviews cover 266 selected fields across 24 entries.
BellaBot capacity is 40 kg total and 10 kg per tray. Partial-charge times,
load/mode-dependent runtime, optional docks and under-development functions stay
qualified. Source conflicts remain visible; unsupported prices and release years
are omitted. All 38 primary-sourced Pudu entries now have selected field reviews;
the legacy D1/SwiftBot entries remain outside that set. The latest twelve reviews
add 152 field decisions, including working width and area rate in product pages,
structured data and comparison. GT3 area per charge is not presented as hourly
output. CC1 Pro Disc keeps separate weight, battery, runtime and scrubbing width;
optional docks and fast chargers stay qualified. D5/D5-W step limits, battery-
inclusive mass and dated variant offers remain separate; generic speed claims
are not inherited.
Clearpath now has 13 reviewed catalog entries, including Husky A200, AMP and
Observer plus separate Dingo-D/O variants. Eight existing entries have corrected
selected specifications; 143 fields have dated source decisions. Five manufacturer
conflicts remain explicit instead of being merged into a synthetic specification.
Installed-system payload, battery configuration, hardware generation, safe speed
and charging duration retain their conditions. Application names, software and
integration kits do not automatically create robot cards. Long specification
values wrap within narrow screens without hiding their qualifications.
Universal Robots now has 15 evidenced catalog configurations: 12 added CB5/CB7
offers and three re-reviewed g-Series arms. CB5/CB7 labels do not imply different
mechanical arms. UR20-1750 and UR30-1300 are held as separately listed names whose
configuration difference is unverified. UR3e-540 and UR7e-920 retain conflicting
page/datasheet reach values. Payload conditions, TCP speed and cable inclusion
remain explicit; numeric spec links point to the arm datasheet.
MiR200, MiR500 and MiR1000 are now included as historically documented platforms;
four current MiR platforms have refreshed highlights and 77 selected field reviews.
Carrying capacity, towing capacity, installed pallet-module limits, loaded runtime
and opportunity charging stay separate. Pallet Jack mass, dimensions/lift height
and runtime remain conflicting. MiR Fleet/Insights, ten accessories and Enabled
MC250/MC600 partner listings do not create duplicate robot cards. MC labels are
not established exact aliases of current ER-FLEX/ER-MAX variants. Historical
product-route 404s do not establish discontinuation or current availability.
XYZ Robotics now has RockyOne and RockyLight mobile manipulators plus separately
named RockyOne SE and stationary RockyLight SE palletizing configurations. Mobile
payload, base speed and footprint remain distinct from application case limits;
SE numeric values are not inherited. Two launch years come from the manufacturer
history, while SE case publication dates do not establish product launch dates.
The company profile links the official site separately from the directory's
MarketWatch candidate. DeliveryDrone, SecurityGuard and ServiceBot remain unresolved.
Unitree G1/G1 EDU and the Go2 family/AIR/PRO/X/EDU now have 75 selected field
decisions from labeled manufacturer tables. Go2 Pro price/speed and EDU battery
endurance are corrected. The generic family does not mix values from different
variants; undocumented IP54 ratings are removed. G1 arm payload depends on posture,
and EDU hands are optional. Go2 X is a separately named configuration. Existing
release years, imagery and videos remain outside this selected-field review.
Commercial navigation includes Cooking & Food Service. Cooking-system details,
comparison tables and structured product properties distinguish batch food capacity
from robot payload and machine weight, and include the documented heating source.
The six T-Chef systems link to the existing Zhigu Tianchu company profile; the
directory names Delivery Bot and EduBot remain unresolved.

```bash
node scripts/collect-roboticsdir.mjs             # browser; closes after collection
python3 scripts/collect-buyandrent.py --raw       # public API, sitemap and SSR inventory
python3 scripts/collect-buyandrent.py --offline  # refresh saved evidence without HTTP
node scripts/extract-company-mentions.mjs       # validate and extract reviewed company-description names
node scripts/reconcile-competitors.mjs           # merge company names and curated aliases
node scripts/import-competitor-products.mjs      # preview verified additions
node scripts/import-competitor-products.mjs --write
node scripts/audit-competitor-coverage.mjs        # exact model coverage and review queue
python3 scripts/refresh-competitor-gaps.py        # current same-brand comparison hints; no HTTP
node scripts/export-competitor-review.mjs        # CSVs for companies, models, listings and description names
pnpm research:refresh                           # audit, comparison hints and exports together; no HTTP
python3 -m unittest tests.python.test_competitor_collector tests.python.test_competitor_gaps
```

Use Node.js 24. Collectors preserve the last complete output if collection is
incomplete. The BuyAndRent collector stops further requests after HTTP 429; detail
checks are optional. Its offline mode needs raw responses from an earlier `--raw`
run. Manually guided appliances receive a separate `reviewed-manual-appliance` status
and are retained as source evidence without robot catalog coverage. Integrated robotic
systems receive `reviewed-robotic-system`; their constituent models require separate evidence.
Only reviewed records in `verified-products.json` are imported into the CSVs;
unknown specifications stay blank. Repeated imports preserve existing CSV rows.
CSV exports retain all 591 competitor company groups, 406 source model/family
mentions and all 862 BuyAndRent listings. They are review sheets, not verified
product catalogs; aliases and repeated source mentions are intentionally retained.
Company exports include source positioning and factual feature themes; reseller
listing themes are kept separate from claims about a manufacturer. Brand profiles
and brand search now expose these source-attributed themes. Company-authored focus
reviews now cover 112 profiles, including autonomy software, open-source platforms,
robotic cafes, welding integration, DealMaker, TGW Logistics and T-Chef. They are recorded in
`company-evidence.json` and in the company export; directory themes remain unverified.
Three named TGW RovoFlex systems are included with dated first-party highlights.
The collector now retains all recognized themes, merges features from every listing
of the same model, and records per-feature listing provenance. Company descriptions
and source use cases are separate from reseller listing themes. These themes are
visible on 553 profiles; they include category positioning and are not counts of
proven unique advantages. `coverage.json` reports these layers separately. A reviewed
T-Chef company URL is displayed separately from the media URL supplied by the directory.
Company-description name reviews cover all 412 source companies (299 descriptions,
113 without text). The 132 recorded names span 76 profiles: 52 model names, 28
families, 19 software names, 16 components/component families and 17 other typed
references. They are visible with source dates and searchable on brand profiles.
`company-product-review.csv` retains every name, type, exact context, source URL,
review date and description hash. Its catalog-name/prefix candidates are a
separate identity review queue. `company-product-reviews.json` now records 132 dated
decisions covering every extracted name. Classification and historical naming do
not imply exact hardware identity, current availability or provider authorization. All 52 model-typed names have scoped decisions; two event
offerings still have unverified hardware identities. Reviewed references link to catalog models
with dated primary evidence; family/version context never counts as an exact
configuration. Provider references such as Unitree G1 at Elite Event Robotics
leave provider and manufacturer profiles separate. Reviews fail on changed source
hashes, invalid dates/URLs, missing primary evidence or unknown catalog targets.
They appear on the profiles, in coverage, and in company/name review exports.
Earlier additions include Hand Plus PICK+, MOVE+ and PACK+
integrations and Macco Kime V5. The Hand Plus page separates its own offers from
partner arms and AMRs. Kime V5 has manufacturer posts and a manufacturer-attached
datasheet; SDK wording does not establish unrestricted software modification.
The four SKYHUB component catalogue pages now have scoped reviews and profile
references, without standalone robot imports, OEM confirmation or site-delivery
claims. Earlier additions include CafeXbot kiosks, ScalableArc Welding Cobot Cart,
DriveMod Forklift, DJI drones, Tennant scrubbers and original Ozobot Bit. Original Bit is
separate from Bit+. Existing X4 ROVR, X6 ROVR, T380AMR and Misty II now have dated
manufacturer highlights as well. Highlight reviews do not certify unreviewed
legacy specification tables, clinical efficacy or current availability. Shelfobot is added
with manufacturer-documented motion, sensing and remote campaign controls;
Visibubble remains a source name because its checked page describes an advertising
display without documenting robotic motion.
`company-descriptions.json` stores exact source text for reproducibility. It is read
only at build time. `company-description-reviews.json` requires an explicit review
for every source company, including empty descriptions; changed hashes or incomplete
snapshots fail extraction without replacing the previous generated output. After
refreshing the collector, update reviews for changed source text and run the name
extractor before the coverage audit, export or build. Date stamps describe the
saved source snapshot, not a new live check of the blocked competitor host.
`model-resolutions.json` records verified identity corrections. `listing-reviews.json`
records dated component/software/service/family decisions for unclear listings; the audit
validates them against source identities and requires primary-sourced catalog
targets for resolved families and concrete model identities.
`model-classifications.json` distinguishes manufacturer-supported components,
software, services or integrated robotic systems from individual robot candidates without counting them as catalog coverage. The listing CSV includes these reviews while
retaining each source classification.

## Contributing

Contributions are welcome - see [CONTRIBUTING.md](CONTRIBUTING.md).

<a href="https://github.com/Huskynarr/robotics-directory/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Huskynarr/robotics-directory" alt="Contributors" />
</a>

## License

Licensed under the MIT License - see [LICENSE](LICENSE).

## Contact

For feedback and inquiries, reach out via [@Huskynarr](https://x.com/Huskynarr) on X.

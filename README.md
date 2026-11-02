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

As of 2026-11-02, all source company names are represented in 591 competitor
groups. The catalog contains 2,047 model/configuration entries and 943 dated primary-source highlight
records. Review remains open for 3 source model/family mentions and 9 originally
unclear listings. Of the 430 catalog models matched to named source mentions, all 430 have
dated highlights. Highlight checks do not certify the existing
specification tables; inventory completeness does not imply full product verification.
The combined research queue also includes reviewed listing resolutions and reviewed
company-description references: 518 catalog targets have dated highlights, with
selected technical-field reviews for 378 and 140 still awaiting those reviews.
Family and contextual references retain their scope; they do not establish exact
model identities. See `data/competitors/research-queue.json` and
`data/competitors/robot-research-queue.csv` for source references and manufacturer priorities.
Run `pnpm research:refresh` after catalog or evidence changes. It refreshes the
comparison against the saved inventories without replacing their original dates.
The heuristic gap file now compares all 2,047 rows using same-brand matches only.
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
Rainbow Robotics now has selected field reviews for thirteen existing collaborative
arms and RBQ-10, alongside its unchanged RB-Y1 review. Arm reach is available in
the detail table, structured properties and comparison. Six manufacturer conflicts
remain visible: two 850-arm reach disagreements, metric/imperial payload and mass
discrepancies, and RBQ walking-speed/step-height differences. Mounting footprint,
arm/controller mass, TCP versus angular speed, percentage gradients and optional
modules retain their scope. RB16-900 uses its family card because the linked
HTTP-200 route returns the homepage; missing exact-model fields stay undocumented.
The new company focus separates adjacent families, hygiene claims and certificate
limitations. Thirty gated download links were recorded without submitting forms.
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
as predefined fields. Rendered metadata was checked for all 782 selected-review
model pages, including sixty-six reviewed launch years with conflicting milestones
retained; this does not re-verify the underlying manufacturers or unmarked fields.

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
13,058 fields across 782 models, distinguishing documented, undisclosed, conflicting and
roadmap values. Field sources appear on product pages, including reviewed launch years; the review export includes
those values and evidence. Unmarked fields remain unverified.
The model comparison now includes every available reviewed highlight, dated primary
sources and publisher roles, plus field-level review statuses and qualifications.
A separate 3,316 kB JSON response loads only for search or comparison;
evidence stays separate from the shared catalog data script. Search and comparison share the same
on-demand request and page-session cache. Missing reviews and failed source loads
have distinct messages, with retry and model-page links available. Conflicting
values stay qualified beside the numeric cells. English labels are available as
fallback for all 28 UI languages; German labels are localized.
Catalog search now includes all 4,106 reviewed highlight statements as well as
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
reviews now cover 89 profiles, including autonomy software, open-source platforms,
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

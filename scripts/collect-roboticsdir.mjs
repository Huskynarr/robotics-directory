import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = 'https://roboticsdir.com/';

// These are named products/families explicitly mentioned by the directory, not
// inferred products of a listed vendor. Families still require model research.
const mentions = {
  'ABB YuMi': ['YuMi'],
  'FANUC CR Series': ['CR Series'],
  'KUKA LBR iiwa': ['LBR iiwa'],
  'IAM Robotics': ['Swift'],
  'Refraction AI': ['REV-1'],
  '6 River Systems (Shopify)': ['Chuck'],
  Exotec: ['Skypod'],
  'Intuitive Surgical': ['da Vinci'],
  Stryker: ['Mako'],
  Medtronic: ['Hugo'],
  'CMR Surgical': ['Versius'],
  'Zimmer Biomet': ['ROSA'],
  'Auris Health (J&J)': ['Monarch'],
  Cyberdyne: ['HAL'],
  'Diligent Robotics': ['Moxi'],
  Aethon: ['TUG'],
  Savioke: ['Relay'],
  'Akara Robotics': ['Violet'],
  'Blue River Technology (John Deere)': ['See & Spray'],
  'Carbon Robotics': ['LaserWeeder'],
  'Naio Oz': ['Oz'],
  'Skyline Robotics': ['Ozmo'],
  'Bear Robotics': ['Servi'],
  'Miso Robotics': ['Flippy'],
  'Simbe Robotics': ['Tally'],
  'Boston Dynamics': ['Atlas', 'Spot'],
  'Agility Robotics': ['Digit'],
  Tesla: ['Optimus'],
  Apptronik: ['Apollo'],
  '1X Technologies': ['EVE', 'NEO'],
  'Sanctuary AI': ['Phoenix'],
  'Engineered Arts': ['Ameca', 'RoboThespian'],
  'PAL Robotics': ['TALOS'],
  'SoftBank Robotics': ['Pepper', 'NAO'],
  'Blue Frog Robotics': ['Buddy'],
  'Intuition Robotics': ['ElliQ'],
  'Anki (Digital Dream Labs)': ['Vector', 'Cozmo'],
  'Groove X': ['LOVOT'],
  'LEGO Education': ['SPIKE', 'MINDSTORMS'],
  'Wonder Workshop': ['Dash', 'Dot'],
  Bitcraze: ['Crazyflie'],
  'Construction Robotics': ['SAM'],
  'Dusty Robotics': ['FieldPrinter'],
  'Advanced Construction Robotics': ['TyBot'],
  ANYbotics: ['ANYmal'],
  'Boston Dynamics Spot': ['Spot'],
  'Sarcos Robotics': ['Guardian XO'],
  iRobot: ['Roomba'],
};

const specificFeatures = {
  'ABB YuMi': ['Two-arm collaborative manipulation'],
  'KUKA LBR iiwa': ['Contact-sensitive collaborative arm'],
  'Kassow Robots': ['Seven-axis collaborative arms'],
  'Epson Robots': ['SCARA and six-axis robot configurations'],
  'Fetch Robotics (Zebra)': ['Cloud-connected mobile robot platform'],
  Seegrid: ['Visual guidance for automated material transport'],
  'RightHand Robotics': ['Automated piece picking for fulfillment'],
  'Corvus Robotics': ['Inventory counting using flying robots'],
  'Gather AI': ['Autonomous drones for stock inspection'],
  Verity: ['Drone-based warehouse inventory'],
  'Pensa Systems': ['Automated retail shelf monitoring'],
  Cyberdyne: ['Wearable robotic assistance'],
  'Blue River Technology (John Deere)': ['Targeted crop spraying'],
  'Carbon Robotics': ['Laser-based weed removal'],
  'Cobalt Robotics': ['Indoor security patrol'],
  'SMP Robotics': ['Outdoor security patrol'],
  'Skyline Robotics': ['Robotic cleaning of building windows'],
  'Simbe Robotics': ['Retail inventory scanning'],
  'Construction Robotics': ['Automated masonry work'],
  'Dusty Robotics': ['Robot-printed building layouts'],
  'Advanced Construction Robotics': ['Automated reinforcement-bar tying'],
  'Gecko Robotics': ['Climbing robots for surface inspection'],
  Kinova: ['Lightweight manipulation arms'],
  'Precise Automation': ['SCARA manipulation arms'],
};

// Short factual themes only. Superlatives, sales rankings and nationality are
// intentionally not promoted to product differentiators or verified facts.
const featurePatterns = [
  [/\bcompact\b/i, 'Compact hardware format'],
  [/\bhigh.precision|\bprecision\b/i, 'Precision-oriented applications'],
  [/\bhigh.speed|\bfast\b/i, 'High-speed operation claimed'],
  [/\bsmall parts\b/i, 'Small-parts handling'],
  [/\bfood.grade\b/i, 'Food-handling configuration'],
  [/\bheavy payload\b/i, 'Heavy-load handling'],
  [/\bbuilt.in vision\b/i, 'Integrated machine vision'],
  [/\b7.axis\b/i, 'Seven-axis manipulation'],
  [/\b6.axis\b/i, 'Six-axis manipulation'],
  [/\bscara\b/i, 'SCARA configuration'],
  [/\bdelta\b/i, 'Delta configuration'],
  [/\bdual.arm\b/i, 'Two-arm manipulation'],
  [/\bcollaborative|\bcobot/i, 'Collaborative robotics'],
  [/\bsensitive\b/i, 'Contact-sensitive manipulation'],
  [/\bcloud\b/i, 'Cloud-connected robotics'],
  [/\bvision.guided\b/i, 'Vision-based navigation'],
  [/\bAI\b/i, 'AI functionality claimed'],
  [/\bautonomous|\bself.driving\b/i, 'Autonomous operation claimed'],
  [/\bremote.operated|\bremote control\b/i, 'Remote operation'],
  [/\belectric\b/i, 'Electric actuation or propulsion'],
  [/\bplatooning\b/i, 'Coordinated truck platooning'],
  [/\bsidewalk\b/i, 'Sidewalk delivery'],
  [/\bcampus\b/i, 'Campus delivery'],
  [/\bcube storage\b/i, 'Cube-based storage architecture'],
  [/\bpiece.picking\b/i, 'Individual-item picking'],
  [/\bdrone.*inventory|inventory.*drone\b/i, 'Aerial inventory inspection'],
  [/\bshelf\b/i, 'Retail shelf inspection'],
  [/\bbronchoscopy\b/i, 'Robotic bronchoscopy'],
  [/\bmagnetic navigation\b/i, 'Magnetic guidance'],
  [/\bexoskeleton|\bwearable\b/i, 'Wearable robotic assistance'],
  [/\bmyoelectric\b/i, 'Myoelectric control'],
  [/\bUV disinfection\b/i, 'Ultraviolet disinfection'],
  [/\bsolar.powered\b/i, 'Solar power'],
  [/\bindoor farming|\bvertical farming\b/i, 'Indoor or vertical cultivation'],
  [/\bmilking\b/i, 'Automated milking'],
  [/\blivestock monitoring\b/i, 'Livestock monitoring'],
  [/\bcinematography\b/i, 'Cinematography applications'],
  [/\bindoor inspection\b/i, 'Indoor inspection'],
  [/\bfixed.wing\b/i, 'Fixed-wing flight'],
  [/\bphotogrammetry\b/i, 'Photogrammetric mapping'],
  [/\bVTOL\b/i, 'Vertical takeoff and landing'],
  [/\bmedical delivery\b/i, 'Medical logistics'],
  [/\bspraying\b/i, 'Automated spraying'],
  [/\bwindow|\bfacade\b/i, 'Window or facade cleaning'],
  [/\bpizza\b/i, 'Pizza preparation'],
  [/\bburger\b/i, 'Burger preparation'],
  [/\belderly\b/i, 'Older-adult companionship'],
  [/\bprogrammable|\bcoding|\bSTEM\b/i, 'Coding or STEM education'],
  [/\bportable\b/i, 'Portable equipment'],
  [/\bROV|\bunderwater|\bsubsea\b/i, 'Underwater operation'],
  [/\bdrywall\b/i, 'Drywall finishing'],
  [/\bwall.climbing\b/i, 'Wall-climbing inspection'],
  [/\bpipeline\b/i, 'Pipeline inspection'],
  [/\bmagnetic tank\b/i, 'Magnetic adhesion for tank inspection'],
  [/\bhazardous|\bhazmat|\bharsh\b/i, 'Hazardous-environment applications'],
  [/\bdepth|\b3D\b/i, 'Depth or 3D sensing'],
  [/\bopen source\b/i, 'Open-source software'],
  [/\bfleet\b/i, 'Robot fleet management'],
  [/\boffline programming\b/i, 'Offline robot programming'],
  [/\btool changers\b/i, 'Robot tool changing'],
  [/\bsoft adaptive\b/i, 'Compliant adaptive gripping'],
  [/\bpneumatic\b/i, 'Pneumatic actuation'],
  [/\bstrain wave\b/i, 'Strain-wave gearing'],
  [/\bEtherCAT\b/i, 'EtherCAT motor communication'],
  [/\blightweight\b/i, 'Lightweight manipulation'],
  [/\blidar\b/i, 'Lidar sensing'],
  [/\bturnkey\b/i, 'Turnkey system integration'],
  [/\bwelding\b/i, 'Robotic welding'],
  [/\bpainting|\bcoating\b/i, 'Painting or coating'],
  [/\bassembly\b/i, 'Assembly automation'],
  [/\bpalletiz/i, 'Palletizing'],
  [/\bmachine tending\b|\bCNC\b/i, 'Machine tending'],
  [/\bAMRs?\b/i, 'Autonomous mobile robot platform'],
  [/\bAGVs?\b|\bautomated guided vehicle\b/i, 'Automated guided vehicle platform'],
  [/\bmaterial handling\b/i, 'Material handling'],
  [/\bsurgical|\bsurgery\b/i, 'Surgical robotics'],
  [/\brehabilitation\b/i, 'Rehabilitation robotics'],
  [/\bpharmacy\b/i, 'Pharmacy automation'],
  [/\bharvesting\b/i, 'Crop harvesting'],
  [/\bweeding\b/i, 'Weed control'],
  [/\bautosteering\b/i, 'Automated steering'],
  [/\bmapping\b/i, 'Mapping applications'],
  [/\bdrone operations management\b/i, 'Drone operations management'],
  [/\bvacuum\b/i, 'Vacuum cleaning'],
  [/\bhumanoid\b/i, 'Humanoid robot form'],
  [/\bquadruped\b/i, 'Four-legged mobility'],
  [/\bbipedal\b/i, 'Two-legged mobility'],
  [/\bcompanion\b/i, 'Companion interaction'],
  [/\beducational|\beducation\b/i, 'Educational robotics'],
  [/\bmachine vision\b|\bembedded vision\b/i, 'Machine vision'],
  [/\bgripp(?:ers|ing)\b|\bend-effectors\b/i, 'Robotic gripping'],
  [/\bservo\b/i, 'Servo actuation'],
  [/\brobot operations platform\b/i, 'Robot operations software'],
  [/\brobot(?:ics)? integration|\bsystem integration\b/i, 'Robot system integration'],
];

export function inventoryFromSnapshot(snapshot) {
  if (
    !snapshot?.fetchedAt ||
    !Array.isArray(snapshot.companies) ||
    !Array.isArray(snapshot.categories)
  ) {
    throw new Error('Expected a dated companies/categories snapshot');
  }
  const categories = new Map(snapshot.categories.map((c) => [c.id, c.name]));
  const entries = snapshot.companies.map((company, index) => {
    if (!company.name || !categories.has(company.category))
      throw new Error(`Invalid entry ${index}`);
    const url = new URL(company.url);
    if (!['http:', 'https:'].includes(url.protocol))
      throw new Error(`Unsafe website ${company.url}`);
    const features = [
      ...new Set([
        ...(specificFeatures[company.name] || []),
        ...featurePatterns
          .filter(([pattern]) => pattern.test(company.desc || ''))
          .map(([, fact]) => fact),
      ]),
    ];
    return {
      name: company.name,
      website: url.href,
      category: company.category,
      categoryLabel: categories.get(company.category),
      modelMentions: mentions[company.name] || [],
      features,
      positioning: categories.get(company.category),
      featureStatus: features.length
        ? 'Directory claims; not manufacturer verified'
        : 'No concrete differentiator extracted; category positioning only',
      sourceUrl: source,
      evidence:
        'Directory listing; company activity and product availability not independently verified',
    };
  });
  const rendered = snapshot.renderedCount ?? null;
  const categoryCount = new Set(entries.map((e) => e.category)).size;
  return {
    source,
    fetchedAt: snapshot.fetchedAt,
    scope:
      'All company entries and explicit named product/family mentions on the public company directory',
    completeness: {
      listedEntries: entries.length,
      renderedEntries: rendered,
      categories: categoryCount,
      declaredCategories: categories.size,
      complete:
        entries.length > 0 && rendered === entries.length && categoryCount === categories.size,
      uniqueNames: new Set(entries.map((e) => e.name)).size,
      note: 'Entries include category aliases and repeated companies; this is not a count of unique manufacturers or models.',
    },
    categories: snapshot.categories.map(({ id, name }) => ({ id, name })),
    entries,
    errors: [],
  };
}

async function main() {
  const inputIndex = process.argv.indexOf('--snapshot');
  let snapshot;
  if (inputIndex !== -1) {
    snapshot = JSON.parse(fs.readFileSync(path.resolve(process.argv[inputIndex + 1]), 'utf8'));
  } else {
    const { chromium } = await import('@playwright/test');
    const browser = await chromium.launch({
      headless: true,
      ...(fs.existsSync('/opt/google/chrome/chrome') ? { channel: 'chrome' } : {}),
    });
    try {
      const page = await browser.newPage();
      await page.goto(source, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForFunction(() => document.querySelectorAll('.company-link-pill').length > 0);
      snapshot = await page.evaluate(() => ({
        fetchedAt: new Date().toISOString(),
        // The site publishes these data arrays in its public script.js.
        companies,
        categories,
        renderedCount: document.querySelectorAll('.company-link-pill').length,
      }));
    } finally {
      await browser.close();
    }
  }
  const result = inventoryFromSnapshot(snapshot);
  if (!result.completeness.complete)
    throw new Error('Incomplete directory snapshot; keeping previous inventory');
  const destination = path.join(root, 'data/competitors/roboticsdir.json');
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify(result.completeness));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getAllRobots } from '../src/data/robots.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const dir = path.join(root, 'data/competitors');
export const normalizeBrand = (value) =>
  String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\([^)]*\)/g, '')
    .replace(/\b(robotics|robots|robot|technologies|technology|inc|ltd|corporation)\b/g, '')
    .replace(/[^a-z0-9]/g, '');
const slug = (name) =>
  name
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
const host = (url) => new URL(url).hostname.replace(/^www\./, '');
const aliases = {
  'Figure AI': ['Figure'],
  'Engineered Arts': ['Ameca'],
  'SoftBank Robotics': ['Aldebaran'],
  SharkNinja: ['Shark'],
  'UVD Robots': ['Blue Ocean Robotics'],
  'Franka Emika': ['Franka Robotics'],
  'Mobile Industrial Robots (MiR)': ['Mobile Industrial Robots', 'MiR'],
  Fourier: ['Fourier Robotics', 'Fourier Intelligence'],
  Aethon: ['Aethon Medical Robots'],
  Robotemi: ['Temi', 'Temi Robot'],
  'Agile Robots': ['Agile Robots SE'],
  'OrionStar Robotics': ['Orion Star', 'OrionStar'],
  'Percepto Autonomous Solutions': ['Percepto'],
  'Yaskawa (Motoman)': ['Yaskawa Motoman Robotics'],
  'LEGO Education': ['LEGO'],
  'Relay Robotics': ['Savioke', 'Relay Delivery Robots'],
  // Manufacturer rebrand announcement, May 8, 2025 (batch-17 primary evidence).
  'Robot.com': ['Kiwibot'],
  // QIHAN manufacturer announcement, August 31, 2017 (batch-20 primary evidence).
  'Sanbot Robots': ['Sanbot', 'QIHAN Technology', 'QIHAN Technology Co. Ltd.'],
  // Official Thymio II repository assigns production to Mobsya (batch-30).
  'Thymio by Mobsya': ['Mobsya'],
  // Manufacturer's company history and T-Chef product pages (batch-27/31).
  'Zhigu Tianchu': ['T-Chef', 'T-chef tech'],
  // Manufacturer company description explicitly identifies Gaussian Robotics as an alias (2022-11-14).
  'Gausium Robotics': ['Gaussian Robotics'],
};
// The source sometimes uses a product name as a company listing. Group only
// known category aliases; do not merge unrelated companies sharing a bad URL.
const canonicalByHost = {
  'new.abb.com': 'ABB Robotics',
  'fanuc.com': 'FANUC',
  'kuka.com': 'KUKA',
  'yaskawa.com': 'Yaskawa (Motoman)',
  'omron.com': 'Omron',
  'epson.com': 'Epson Robots',
  'staubli.com': 'Stäubli',
  'mitsubishielectric.com': 'Mitsubishi Electric',
  'daifuku.com': 'Daifuku',
  'dematic.com': 'Dematic',
  'vanderlande.com': 'Vanderlande',
  'universal-robots.com': 'Universal Robots',
  'ottomotors.com': 'Otto Motors',
  'swisslog.com': 'Swisslog',
  'balyo.com': 'Balyo',
  'naio-technologies.com': 'Naïo Technologies',
  'bostondynamics.com': 'Boston Dynamics',
  'formant.io': 'Formant',
  'inorbit.ai': 'InOrbit',
  'robotics.org': 'RIA (Robotics Industries Association)',
};

export function buildBrands(records, manufacturers, updatedAt) {
  const groups = new Map();
  const canonicalNames = new Map();
  for (const [name, alternatives] of Object.entries(aliases)) {
    for (const alternative of [name, ...alternatives])
      canonicalNames.set(normalizeBrand(alternative), name);
  }
  for (const record of records) {
    const requestedName = record.canonicalName || record.name;
    const name = canonicalNames.get(normalizeBrand(requestedName)) || requestedName;
    if (!name?.trim()) throw new Error('Brand name missing');
    const key = normalizeBrand(name);
    if (!key) throw new Error(`Invalid brand name: ${name}`);
    if (!groups.has(key))
      groups.set(key, {
        id: slug(name),
        name,
        website: record.website || '',
        categories: [],
        aliases: [],
        sources: [],
        catalogManufacturers: [],
      });
    const brand = groups.get(key);
    for (const alias of [record.name, ...(aliases[name] || [])]) {
      if (alias !== brand.name && !brand.aliases.includes(alias)) brand.aliases.push(alias);
    }
    if (record.category && !brand.categories.includes(record.category))
      brand.categories.push(record.category);
    if (record.source && !brand.sources.some((s) => s.url === record.source.url))
      brand.sources.push(record.source);
    if (!brand.website && record.website) brand.website = record.website;
  }
  for (const brand of groups.values()) {
    const accepted = new Set([brand.name, ...brand.aliases].map(normalizeBrand));
    brand.catalogManufacturers = manufacturers.filter((m) => accepted.has(normalizeBrand(m)));
    brand.aliases.sort();
    brand.categories.sort();
  }
  const result = [...groups.values()].sort((a, b) => a.name.localeCompare(b.name, 'en'));
  if (new Set(result.map((b) => b.id)).size !== result.length)
    throw new Error('Conflicting brand IDs');
  return { updatedAt, brands: result };
}

function main() {
  const robotics = JSON.parse(fs.readFileSync(path.join(dir, 'roboticsdir.json'), 'utf8'));
  const records = robotics.entries.map((e) => ({
    name: e.name,
    canonicalName: canonicalByHost[host(e.website)] || e.name,
    website: e.website,
    category: e.categoryLabel,
    source: { name: 'RoboticsDir', url: e.sourceUrl },
  }));
  const buyFile = path.join(dir, 'buyandrentrobots.json');
  let updatedAt = robotics.fetchedAt;
  if (fs.existsSync(buyFile)) {
    const buy = JSON.parse(fs.readFileSync(buyFile, 'utf8'));
    if (!Array.isArray(buy.companies) || buy.companies.length !== buy.completeness.apiCompanies)
      throw new Error('Incomplete company inventory');
    updatedAt = [updatedAt, buy.fetchedAt].sort().at(-1);
    const categoryLabels = {
      service: 'Service robots',
      delivery: 'Delivery robots',
      humanoid: 'Humanoid robots',
      educational: 'Educational robots',
      cleaning: 'Cleaning robots',
      security: 'Security robots',
      entertainment: 'Entertainment robots',
      greeter: 'Reception robots',
      telepresence: 'Telepresence robots',
    };
    for (const company of buy.companies) {
      for (const category of company.categories.length ? company.categories : ['']) {
        records.push({
          name: company.name,
          website: company.website,
          category: categoryLabels[category] || category,
          source: { name: 'BuyAndRentRobots', url: company.sourceUrl },
        });
      }
    }
  }
  const { manufacturers } = getAllRobots();
  const result = buildBrands(records, manufacturers, updatedAt);
  fs.writeFileSync(path.join(dir, 'brands.json'), `${JSON.stringify(result, null, 2)}\n`);
  console.log(
    `${result.brands.length} competitor brands; ${result.brands.filter((b) => b.catalogManufacturers.length).length} linked to catalog manufacturers`,
  );
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();

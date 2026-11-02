import fs from 'node:fs';
import { getAllRobots } from '../src/data/robots.js';
import { createRobotId } from '../src/utils/format.js';
import { CATEGORIES } from '../src/data/categories.js';
import { parseCSVLine } from '../src/utils/csv-parser.js';
import { normalizeBrand } from './reconcile-competitors.mjs';
import { isPrimaryProductSource } from '../src/utils/product-evidence.js';

const input = JSON.parse(fs.readFileSync('data/competitors/verified-products.json', 'utf8'));
const { allRobots } = getAllRobots();
const key = (r) =>
  `${normalizeBrand(r.manufacturer)}:${String(r.model)
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/[^a-z0-9]/g, '')}`;
const known = new Map(allRobots.map((r) => [key(r), r]));
const categoryIds = new Set(CATEGORIES.map((c) => c.id));
const additions = [];
const insights = [];
const csvValue = (v) => (/[",\r\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
for (const product of input.products) {
  const { row, highlights, sources } = product;
  if (!row?.manufacturer || !row.model || !categoryIds.has(row.category))
    throw new Error('Invalid product identity/category');
  if (!sources?.some(isPrimaryProductSource))
    throw new Error(`Missing primary evidence: ${row.model}`);
  if (
    !Array.isArray(highlights) ||
    highlights.length === 0 ||
    highlights.some((h) => typeof h !== 'string' || !h.trim())
  )
    throw new Error(`Missing highlights: ${row.model}`);
  for (const source of sources) {
    if (!['https:', 'http:'].includes(new URL(source.url).protocol))
      throw new Error('Unsafe evidence URL');
  }
  if (!['https:', 'http:'].includes(new URL(row.website).protocol))
    throw new Error('Unsafe product website');
  const existing = known.get(key(row));
  const id = existing?.id || createRobotId(row);
  if (!existing) {
    if (allRobots.some((r) => r.id === id)) throw new Error(`Conflicting robot ID: ${id}`);
    const file = `data/${row.category}.csv`;
    const text = fs.readFileSync(file, 'utf8');
    const headers = parseCSVLine(text.split(/\r?\n/)[0]);
    const line = headers.map((h) => csvValue(String(row[h] || ''))).join(',');
    additions.push({ file, id, line });
    known.set(key(row), { ...row, id });
  }
  insights.push({
    robotId: id,
    manufacturer: row.manufacturer,
    model: row.model,
    highlights,
    sources,
    discoveredIn: product.discoveredIn || [],
  });
}

console.log(
  `${input.products.length} primary-sourced models; ${additions.length} additions; ${insights.length} product highlight records`,
);
if (process.argv.includes('--write')) {
  for (const addition of additions) {
    const text = fs.readFileSync(addition.file, 'utf8');
    fs.appendFileSync(addition.file, `${text.endsWith('\n') ? '' : '\n'}${addition.line}\n`);
  }
  fs.writeFileSync(
    'data/competitors/product-insights.json',
    `${JSON.stringify({ updatedAt: input.updatedAt, products: insights }, null, 2)}\n`,
  );
} else {
  for (const addition of additions) console.log(`Would add ${addition.id}`);
  console.log('Pass --write to import. Existing product rows are kept.');
}

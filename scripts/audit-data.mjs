import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { getAllRobots } from '../src/data/robots.js';

const { allRobots } = getAllRobots();
const errors = [];
const warnings = [];
const seenIds = new Map();
const seenProducts = new Map();
const imageHashes = new Map();

const normalize = (value) =>
  String(value || '')
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/\([^)]*\)/g, '')
    .replace(
      /\b(robotics|robots|robot|technology|technologies|tech|industries|industry|inc|ltd|corp|corporation)\b/g,
      '',
    )
    .replace(/[^a-z0-9]+/g, '');

const addToMap = (map, key, value) => map.set(key, [...(map.get(key) || []), value]);

for (const robot of allRobots) {
  const label = `${robot.manufacturer} ${robot.model}`;
  addToMap(seenIds, robot.id, label);
  addToMap(seenProducts, `${normalize(robot.manufacturer)}:${normalize(robot.model)}`, robot.id);

  if (!robot.manufacturer?.trim() || !robot.model?.trim() || !robot.category?.trim()) {
    errors.push(`${robot.id}: manufacturer, model and category are required`);
  }
  if (robot.price?.trim().startsWith('$')) {
    errors.push(`${robot.id}: price uses an ambiguous dollar symbol; specify USD, CAD, AUD, etc.`);
  }
  if (robot.releaseDate && !/^\d{4}$/.test(robot.releaseDate)) {
    errors.push(`${robot.id}: releaseDate must be a four-digit year`);
  }
  if (!robot.releaseDate) warnings.push(`${robot.id}: release year is not documented`);
  if (!robot.website) {
    warnings.push(`${robot.id}: no trustworthy product/source URL is currently available`);
  } else {
    try {
      new URL(robot.website);
    } catch {
      errors.push(`${robot.id}: invalid website URL ${robot.website}`);
    }
  }

  if (robot.image && !/^https?:\/\//.test(robot.image)) {
    const imagePath = path.resolve('public', robot.image.replace(/^\//, ''));
    if (!fs.existsSync(imagePath)) {
      errors.push(`${robot.id}: missing image ${robot.image}`);
    } else {
      const hash = crypto.createHash('sha256').update(fs.readFileSync(imagePath)).digest('hex');
      addToMap(imageHashes, hash, `${robot.id} (${robot.image})`);
    }
  }
}

for (const [id, products] of seenIds) {
  if (products.length > 1) errors.push(`duplicate page ID ${id}: ${products.join(', ')}`);
}
for (const [key, ids] of seenProducts) {
  if (ids.length > 1) errors.push(`duplicate normalized product ${key}: ${ids.join(', ')}`);
}
for (const products of imageHashes.values()) {
  if (products.length > 1) warnings.push(`identical local image: ${products.join(', ')}`);
}

if (process.argv.includes('--links')) {
  const queue = allRobots.filter((robot) => robot.website);
  let cursor = 0;
  const results = [];
  const worker = async () => {
    while (cursor < queue.length) {
      const robot = queue[cursor++];
      try {
        const response = await fetch(robot.website, {
          headers: { 'user-agent': 'robotics-directory-data-audit/1.0' },
          redirect: 'follow',
          signal: AbortSignal.timeout(12_000),
        });
        results.push({ id: robot.id, status: response.status, url: response.url });
      } catch (error) {
        results.push({ id: robot.id, status: 'network', url: robot.website, detail: error.name });
      }
    }
  };
  await Promise.all(Array.from({ length: 16 }, worker));
  const inaccessible = results.filter(
    ({ status }) => status === 'network' || (Number(status) >= 400 && ![401, 403, 429].includes(status)),
  );
  for (const result of inaccessible) {
    warnings.push(`${result.id}: URL returned ${result.status} (${result.url})`);
  }
  const counts = Object.groupBy(results, ({ status }) => status);
  console.log(
    `Link responses: ${Object.entries(counts)
      .map(([status, entries]) => `${status}=${entries.length}`)
      .join(', ')}`,
  );
}

console.log(`Catalog: ${allRobots.length} products`);
console.log(`Errors: ${errors.length}; warnings: ${warnings.length}`);
if (warnings.length) console.log(`\nWarnings:\n${warnings.join('\n')}`);
if (errors.length) {
  console.error(`\nErrors:\n${errors.join('\n')}`);
  process.exitCode = 1;
}

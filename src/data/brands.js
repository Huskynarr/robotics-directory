import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { getAllRobots } from './robots.js';
import { CATEGORY_LABELS } from './categories.js';
import { slugify } from '../utils/format.js';
import { getCompanyInsights } from './company-insights.js';

const DIRECTORY_PATH = path.resolve('data/competitors/brands.json');
const BRAND_FIELDS = [
  'id',
  'name',
  'website',
  'categories',
  'aliases',
  'sources',
  'catalogManufacturers',
];

function fail(message) {
  throw new Error(`[brands] ${message}`);
}

function checkObject(value, fields, label) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    fail(`${label} must be an object.`);
  }
  if (
    fields.some((field) => !Object.hasOwn(value, field)) ||
    Object.keys(value).some((field) => !fields.includes(field))
  ) {
    fail(`${label} must contain exactly these fields: ${fields.join(', ')}.`);
  }
}

function checkString(value, label) {
  if (typeof value !== 'string' || !value.trim() || value !== value.trim()) {
    fail(`${label} must be a non-empty string without surrounding whitespace.`);
  }
}

function checkStrings(values, label) {
  if (!Array.isArray(values)) fail(`${label} must be an array of strings.`);
  values.forEach((value, index) => checkString(value, `${label}[${index}]`));
  if (new Set(values).size !== values.length) fail(`${label} contains duplicate values.`);
}

function checkUrl(value, label, allowEmpty = false) {
  if (allowEmpty && value === '') return;
  checkString(value, label);
  let url;
  try {
    url = new URL(value);
  } catch {
    fail(`${label} must be an absolute HTTP(S) URL.`);
  }
  if (
    !['http:', 'https:'].includes(url.protocol) ||
    !url.hostname ||
    url.username ||
    url.password
  ) {
    fail(`${label} must be an absolute HTTP(S) URL without credentials.`);
  }
}

/** Validate the entire supplied schema; malformed existing files must never become a fallback. */
export function validateBrandDirectory(directory) {
  checkObject(directory, ['updatedAt', 'brands'], 'directory');
  checkString(directory.updatedAt, 'updatedAt');
  if (!Array.isArray(directory.brands)) fail('brands must be an array.');
  const ids = new Set();
  const mappedManufacturers = new Set();

  directory.brands.forEach((brand, index) => {
    const label = `brands[${index}]`;
    checkObject(brand, BRAND_FIELDS, label);
    checkString(brand.id, `${label}.id`);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(brand.id)) {
      fail(`${label}.id must be a lowercase URL slug.`);
    }
    if (ids.has(brand.id)) fail(`Duplicate brand id "${brand.id}".`);
    ids.add(brand.id);
    checkString(brand.name, `${label}.name`);
    // An empty website explicitly means that no manufacturer website is recorded.
    checkUrl(brand.website, `${label}.website`, true);
    for (const field of ['categories', 'aliases', 'catalogManufacturers']) {
      checkStrings(brand[field], `${label}.${field}`);
    }
    if (!Array.isArray(brand.sources)) fail(`${label}.sources must be an array.`);
    const sourceUrls = new Set();
    brand.sources.forEach((source, sourceIndex) => {
      const sourceLabel = `${label}.sources[${sourceIndex}]`;
      checkObject(source, ['name', 'url'], sourceLabel);
      checkString(source.name, `${sourceLabel}.name`);
      checkUrl(source.url, `${sourceLabel}.url`);
      if (sourceUrls.has(source.url)) fail(`${label}.sources contains duplicate URLs.`);
      sourceUrls.add(source.url);
    });
    for (const manufacturer of brand.catalogManufacturers) {
      if (mappedManufacturers.has(manufacturer)) {
        fail(`Catalog manufacturer "${manufacturer}" is assigned to more than one brand.`);
      }
      mappedManufacturers.add(manufacturer);
    }
  });
  return directory;
}

/** Missing JSON is supported; malformed JSON and other filesystem errors are reported. */
export function loadBrandDirectory(filePath = DIRECTORY_PATH) {
  let text;
  try {
    text = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw new Error(`[brands] Cannot read directory at ${filePath}.`, { cause: error });
  }
  let directory;
  try {
    directory = JSON.parse(text);
  } catch (error) {
    throw new Error(`[brands] Invalid JSON at ${filePath}.`, { cause: error });
  }
  return validateBrandDirectory(directory);
}

/** Pure merge: names and aliases never implicitly claim a catalog manufacturer. */
export function buildBrands(directory, robots) {
  if (directory !== null) validateBrandDirectory(directory);
  const robotsByManufacturer = new Map();
  for (const robot of robots) {
    const matches = robotsByManufacturer.get(robot.manufacturer) || [];
    matches.push(robot);
    robotsByManufacturer.set(robot.manufacturer, matches);
  }

  const brands = (directory?.brands || []).map((brand) => ({
    ...brand,
    categories: [...brand.categories],
    aliases: [...brand.aliases],
    sources: brand.sources.map((source) => ({ ...source })),
    catalogManufacturers: [...brand.catalogManufacturers],
    directoryUpdatedAt: directory.updatedAt,
  }));
  const usedIds = new Set(brands.map((brand) => brand.id));
  const assigned = new Set();
  for (const brand of brands) {
    for (const manufacturer of brand.catalogManufacturers) {
      if (!robotsByManufacturer.has(manufacturer)) {
        fail(
          `Brand "${brand.id}" references unknown catalog manufacturer "${manufacturer}"; use the exact CSV spelling.`,
        );
      }
      assigned.add(manufacturer);
    }
  }

  for (const manufacturer of [...robotsByManufacturer.keys()].sort()) {
    if (assigned.has(manufacturer)) continue;
    // Hash the exact name, so punctuation, accents and non-Latin names cannot collapse.
    // IDs do not depend on CSV order or the presence of another similarly named company.
    const hash = createHash('sha256').update(manufacturer).digest('hex').slice(0, 12);
    const baseId = `catalog-${slugify(manufacturer).slice(0, 60) || 'brand'}-${hash}`;
    let id = baseId;
    let suffix = 1;
    while (usedIds.has(id)) id = `${baseId}-${suffix++}`;
    usedIds.add(id);
    brands.push({
      id,
      name: manufacturer,
      website: '',
      categories: [],
      aliases: [],
      sources: [],
      catalogManufacturers: [manufacturer],
      directoryUpdatedAt: null,
    });
  }

  return brands
    .map((brand) => {
      const brandRobots = brand.catalogManufacturers.flatMap(
        (manufacturer) => robotsByManufacturer.get(manufacturer) || [],
      );
      return {
        ...brand,
        robots: brandRobots,
        modelCount: brandRobots.length,
        catalogCategories: [...new Set(brandRobots.map((robot) => robot.category))].sort(),
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'en') || a.id.localeCompare(b.id, 'en'));
}

/** Returns every directory entry plus every otherwise unassigned CSV manufacturer. */
let cachedBrands;
export function getAllBrands() {
  cachedBrands ||= buildBrands(loadBrandDirectory(), getAllRobots().allRobots);
  return cachedBrands;
}

/** Exact CSV lookup; pass an existing brand list to reuse it while generating pages. */
export function getBrandForManufacturer(manufacturer, brands = getAllBrands()) {
  return brands.find((brand) => brand.catalogManufacturers.includes(manufacturer)) || null;
}

export function normalizeBrandSearch(value) {
  return value.toLowerCase().normalize('NFKD').replace(/\p{M}/gu, '').replace(/ß/g, 'ss');
}

/** Search includes aliases, both category origins, exact CSV names and existing model names. */
export function getBrandSearchText(brand) {
  const categories = [...brand.categories, ...brand.catalogCategories];
  const insights = getCompanyInsights(brand);
  return normalizeBrandSearch(
    [
      brand.name,
      ...brand.aliases,
      ...brand.catalogManufacturers,
      ...categories,
      ...categories.map((category) => CATEGORY_LABELS[category] || category),
      ...brand.robots.map((robot) => robot.model),
      ...insights.groups.flatMap((group) => group.themes),
      insights.primary?.role || '',
      ...(insights.primary?.highlights || []),
      ...insights.directoryProducts.flatMap((mention) => [
        mention.name,
        ...mention.aliases,
        mention.context,
      ]),
    ].join(' '),
  );
}

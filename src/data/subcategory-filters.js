import { CATEGORIES, USE_CASES } from './categories.js';

/**
 * Parse a price string to a numeric value.
 * Returns NaN if not parseable.
 */
function parsePrice(raw) {
  if (!raw || typeof raw !== 'string') return NaN;
  const m = raw.replace(/[,\s]/g, '').match(/[\d.]+/);
  return m ? parseFloat(m[0]) : NaN;
}

/**
 * Extract the first number from a string (e.g. "32 kg" -> 32).
 */
function parseNumber(raw) {
  if (typeof raw === 'number') return raw;
  if (!raw || typeof raw !== 'string') return NaN;
  const m = raw.replace(/,/g, '').match(/[\d.]+/);
  return m ? parseFloat(m[0]) : NaN;
}

/**
 * Parse an age-range string like "4-8", "12-99", or "all" into { min, max }.
 * Returns null if the input cannot be parsed.
 */
function parseAgeRange(raw) {
  if (!raw || typeof raw !== 'string') return null;
  const trimmed = raw.trim().toLowerCase();
  if (trimmed === 'all') return { min: 0, max: 99 };
  const parts = trimmed.split('-');
  if (parts.length !== 2) return null;
  const min = parseInt(parts[0], 10);
  const max = parseInt(parts[1], 10);
  if (isNaN(min) || isNaN(max)) return null;
  return { min, max };
}

/**
 * Evaluate a single filter definition against a robot object.
 *
 * Supported operators:
 *   lt, gt, range          - numeric comparison on a field
 *   includes, not-includes - case-insensitive text search (field value includes text)
 *   includes-any           - field value includes ANY of the given values array
 *   price-lt, price-gt, price-range - price-aware numeric comparison
 *   tags-include            - tagsArray includes a specific tag (case-insensitive)
 *   tags-include-any        - tagsArray includes ANY of the given tags
 *   tags-not-include        - tagsArray does NOT include a specific tag
 *   age-min-lte             - ageRange min <= value
 *   age-min-gte             - ageRange min >= value
 *   age-max-lte             - ageRange max <= value
 *   all                    - every child filter must match (compound AND)
 *   any                    - at least one child filter must match (compound OR)
 */
export function matchesSubcategoryFilter(robot, filterDef) {
  if (!filterDef) return true;
  const { op } = filterDef;

  // Compound operators
  if (op === 'all') {
    return (filterDef.filters || []).every((f) => matchesSubcategoryFilter(robot, f));
  }
  if (op === 'any') {
    return (filterDef.filters || []).some((f) => matchesSubcategoryFilter(robot, f));
  }

  const rawValue = robot[filterDef.field] || '';

  // Numeric operators
  if (op === 'lt' || op === 'gt' || op === 'range') {
    const num = parseNumber(rawValue);
    if (isNaN(num)) return false;
    if (op === 'lt') return num < filterDef.value;
    if (op === 'gt') return num > filterDef.value;
    return num >= filterDef.min && num <= filterDef.max;
  }

  // Price operators
  if (op === 'price-lt' || op === 'price-gt' || op === 'price-range') {
    const price = parsePrice(rawValue);
    if (isNaN(price)) return false;
    if (op === 'price-lt') return price < filterDef.value;
    if (op === 'price-gt') return price > filterDef.value;
    return price >= filterDef.min && price <= filterDef.max;
  }

  // Tag operators (rawValue is an Array for tagsArray field)
  if (op === 'tags-include') {
    if (!Array.isArray(rawValue)) return false;
    const term = (filterDef.value || '').toLowerCase();
    return rawValue.some((t) => t.toLowerCase() === term);
  }

  if (op === 'tags-include-any') {
    if (!Array.isArray(rawValue)) return false;
    const lowerTags = rawValue.map((t) => t.toLowerCase());
    return (filterDef.values || []).some((v) => lowerTags.includes(v.toLowerCase()));
  }

  if (op === 'tags-not-include') {
    if (!Array.isArray(rawValue)) return false;
    const term = (filterDef.value || '').toLowerCase();
    return !rawValue.some((t) => t.toLowerCase() === term);
  }

  // Age-range operators
  if (op === 'age-min-lte' || op === 'age-min-gte' || op === 'age-max-lte') {
    const age = parseAgeRange(rawValue);
    if (!age) return false;
    if (op === 'age-min-lte') return age.min <= filterDef.value;
    if (op === 'age-min-gte') return age.min >= filterDef.value;
    return age.max <= filterDef.value;
  }

  // Text operators
  const text = rawValue.toLowerCase();

  if (op === 'includes') {
    const term = (filterDef.value || '').toLowerCase();
    return text.includes(term);
  }

  if (op === 'includes-any') {
    return (filterDef.values || []).some((v) => text.includes(v.toLowerCase()));
  }

  if (op === 'not-includes') {
    const term = (filterDef.value || '').toLowerCase();
    return !text.includes(term);
  }

  return true;
}

/**
 * Look up a subcategory definition by its ID across all categories.
 * Returns { category, subcategory } or null.
 */
export function getSubcategoryDef(subcatId) {
  for (const cat of CATEGORIES) {
    if (!cat.subcategories) continue;
    const sub = cat.subcategories.find((s) => s.id === subcatId);
    if (sub) return { category: cat, subcategory: sub };
  }
  return null;
}

/**
 * Look up a use-case definition by its ID.
 */
export function getUseCaseDef(useCaseId) {
  return USE_CASES.find((uc) => uc.id === useCaseId) || null;
}

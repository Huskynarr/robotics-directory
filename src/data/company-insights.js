import fs from 'node:fs';
import { buildCompanyInsights } from '../utils/company-insights.js';
import { getCompanyDirectoryProducts } from './company-product-mentions.js';

const read = (name) => JSON.parse(fs.readFileSync(`data/competitors/${name}.json`, 'utf8'));
let inventories;

export function validateCompanyEvidence(data) {
  if (!Array.isArray(data?.companies)) throw new Error('Invalid company evidence');
  const ids = new Set();
  for (const company of data.companies) {
    if (
      !company.brandId ||
      ids.has(company.brandId) ||
      !company.name?.trim() ||
      !company.role?.trim() ||
      !company.highlights?.length ||
      company.highlights.some((text) => typeof text !== 'string' || !text.trim()) ||
      !company.sources?.length
    ) {
      throw new Error('Invalid or duplicate company evidence record');
    }
    ids.add(company.brandId);
    if (company.website !== undefined) {
      const website = new URL(company.website);
      if (!['https:', 'http:'].includes(website.protocol) || website.username || website.password) {
        throw new Error('Company website must be an HTTP(S) URL without credentials');
      }
      if (!company.sources.some((source) => source.url === company.website)) {
        throw new Error('Reviewed company website requires its own dated source entry');
      }
    }
    for (const source of company.sources) {
      const url = new URL(source.url);
      if (
        !['https:', 'http:'].includes(url.protocol) ||
        url.username ||
        url.password ||
        !source.name?.trim() ||
        !/^\d{4}-\d{2}-\d{2}$/.test(source.checkedAt || '') ||
        new Date(source.checkedAt).toISOString().slice(0, 10) !== source.checkedAt
      ) {
        throw new Error('Company evidence requires a dated HTTP(S) source');
      }
    }
  }
  return data;
}

/** Server-side only: source snapshots are loaded once, never shipped as browser JSON. */
export function getCompanyInsights(brand) {
  inventories ||= {
    robotics: read('roboticsdir'),
    buy: read('buyandrentrobots'),
    evidence: validateCompanyEvidence(read('company-evidence')),
  };
  const primary = inventories.evidence.companies.find(
    (company) =>
      company.brandId === brand.id && [brand.name, ...(brand.aliases || [])].includes(company.name),
  );
  return {
    ...buildCompanyInsights(brand, inventories.robotics, inventories.buy),
    primary: primary || null,
    directoryProducts: getCompanyDirectoryProducts(brand, inventories.buy),
  };
}

import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { COMPANY_PRODUCT_KINDS } from '../utils/company-product-mentions.js';
import { getCompanyProductReviewIndex } from './company-product-reviews.js';

let cached;

/** Generated source extraction, deliberately separate from robot catalog identity. */
export function getCompanyDescriptionInventory(buy) {
  if (cached) return cached;
  const data = JSON.parse(fs.readFileSync('data/competitors/company-mentions.json', 'utf8'));
  const source = JSON.parse(fs.readFileSync('data/competitors/company-descriptions.json', 'utf8'));
  cached = validateCompanyDescriptionInventory(data, buy, source);
  return cached;
}

export function validateCompanyDescriptionInventory(data, buy, source) {
  const companies = new Map(buy.companies.map((company) => [company.slug, company]));
  if (
    data.sourceSnapshotAt !== buy.fetchedAt ||
    data.reviews?.length !== companies.size ||
    data.counts?.sourceCompaniesReviewed !== companies.size ||
    data.counts?.namedMentions !== data.mentions?.length
  ) {
    throw new Error('Company description extraction is incomplete or from another snapshot');
  }
  const reviewed = new Map();
  const originals = source
    ? new Map(source.companies.map((company) => [company.slug, company]))
    : null;
  if (source && (source.sourceSnapshotAt !== buy.fetchedAt || originals.size !== companies.size)) {
    throw new Error('Company description source snapshot differs from inventory');
  }
  const validDate = (value) =>
    /^\d{4}-\d{2}-\d{2}$/.test(value || '') &&
    Number.isFinite(Date.parse(value)) &&
    new Date(value).toISOString().slice(0, 10) === value;
  for (const review of data.reviews) {
    const original = originals?.get(review.companySlug);
    if (
      originals &&
      (original?.company_id !== review.companyId ||
        original?.company_name !== review.companyName ||
        createHash('sha256')
          .update(original?.description ?? '')
          .digest('hex') !== review.descriptionSha256)
    ) {
      throw new Error('Company description extraction has a stale source hash or identity');
    }
    if (
      companies.get(review.companySlug)?.name !== review.companyName ||
      reviewed.has(review.companySlug) ||
      !validDate(review.checkedAt) ||
      !/^[a-f0-9]{64}$/.test(review.descriptionSha256 || '') ||
      !Number.isInteger(review.mentionCount) ||
      review.mentionCount < 0
    ) {
      throw new Error('Company description review identity differs from source inventory');
    }
    reviewed.set(review.companySlug, review);
  }
  const ids = new Set();
  for (const mention of data.mentions) {
    const company = companies.get(mention.companySlug);
    const review = reviewed.get(mention.companySlug);
    const expectedId = `company-${createHash('sha256')
      .update(JSON.stringify([mention.companyId, mention.kind, mention.name, mention.context]))
      .digest('hex')
      .slice(0, 20)}`;
    if (
      company?.name !== mention.companyName ||
      mention.sourceUrl !== company.sourceUrl ||
      mention.sourceUrl !==
        `https://buyandrentrobots.com/companies/${encodeURIComponent(mention.companySlug)}` ||
      mention.companyId !== review?.companyId ||
      mention.descriptionSha256 !== review?.descriptionSha256 ||
      mention.checkedAt !== review?.checkedAt ||
      mention.id !== expectedId ||
      !/^company-[a-f0-9]{20}$/.test(mention.id || '') ||
      ids.has(mention.id) ||
      !Object.hasOwn(COMPANY_PRODUCT_KINDS, mention.kind) ||
      typeof mention.name !== 'string' ||
      !mention.name.trim() ||
      !Array.isArray(mention.aliases) ||
      mention.aliases.some((alias) => typeof alias !== 'string' || !alias.trim()) ||
      typeof mention.context !== 'string' ||
      !validDate(mention.checkedAt) ||
      mention.sourceSnapshotAt !== buy.fetchedAt
    ) {
      throw new Error('Invalid source company product mention');
    }
    ids.add(mention.id);
  }
  for (const review of reviewed.values()) {
    if (
      data.mentions.filter((mention) => mention.companySlug === review.companySlug).length !==
      review.mentionCount
    ) {
      throw new Error('Company description mention count differs from reviewed source');
    }
  }
  return data;
}

export function getCompanyDirectoryProducts(brand, buy) {
  const names = new Set([brand.name, ...(brand.aliases || [])]);
  const inventory = getCompanyDescriptionInventory(buy);
  const reviews = getCompanyProductReviewIndex(inventory);
  return inventory.mentions
    .filter((mention) => names.has(mention.companyName))
    .map((mention) => ({ ...mention, productReview: reviews.get(mention.id) || null }));
}

import { createHash } from 'node:crypto';
import { COMPANY_PRODUCT_KINDS } from '../../src/utils/company-product-mentions.js';

const sha = (value) => createHash('sha256').update(value).digest('hex');
const fail = (message) => {
  throw new Error(`Invalid company-description review: ${message}`);
};
const text = (value, label) => {
  if (typeof value !== 'string' || !value.trim() || value !== value.trim()) fail(label);
};
const date = (value) => {
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(value || '') ||
    new Date(value).toISOString().slice(0, 10) !== value
  )
    fail('invalid review date');
};
const containsName = (description, name) => {
  const escaped = name
    .normalize('NFC')
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\s+/g, '\\s+');
  return new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, 'iu').test(
    description.normalize('NFC'),
  );
};

/** Complete, snapshot-bound review: no implicit model expansion or manufacturer inference. */
export function extractCompanyMentions(companies, registry, sourceSnapshotAt) {
  if (!Array.isArray(companies) || !Array.isArray(registry?.reviews))
    fail('expected companies and reviews');
  date(registry.updatedAt);
  if (
    !/^\d{4}-\d{2}-\d{2}T/.test(sourceSnapshotAt || '') ||
    !Number.isFinite(Date.parse(sourceSnapshotAt))
  )
    fail('missing source snapshot date');
  const originals = new Map();
  for (const company of companies) {
    text(company.company_id, 'missing company ID');
    text(company.company_name, 'missing source company name');
    text(company.slug, 'missing source slug');
    if (originals.has(company.company_id)) fail('duplicate source company ID');
    originals.set(company.company_id, company);
  }
  const reviewed = new Set();
  const mentions = [];
  const reviewSummary = [];
  for (const review of registry.reviews) {
    const original = originals.get(review.companyId);
    if (!original) fail('unknown company ID');
    if (reviewed.has(review.companyId)) fail('duplicate company review');
    reviewed.add(review.companyId);
    if (review.companyName !== original.company_name || review.companySlug !== original.slug)
      fail('source company identity changed');
    const description = original.description ?? '';
    if (typeof description !== 'string') fail('description must be text or null');
    if (review.descriptionSha256 !== sha(description))
      fail(`stale description hash for ${review.companyName}`);
    text(review.note, 'missing extraction note');
    date(review.checkedAt);
    if (!Array.isArray(review.mentions)) fail('mentions must be an array');
    const unique = new Set();
    for (const mention of review.mentions) {
      text(mention.name, 'missing product name');
      if (!Object.hasOwn(COMPANY_PRODUCT_KINDS, mention.kind)) fail('unknown product kind');
      if (typeof mention.context !== 'string' || !Array.isArray(mention.aliases))
        fail('invalid context or aliases');
      for (const name of [mention.name, ...mention.aliases]) {
        text(name, 'invalid name/alias');
        if (!containsName(description, name))
          fail(`name absent from source: ${review.companyName} / ${name}`);
      }
      if (mention.context && !containsName(description, mention.context))
        fail('context absent from source');
      if (
        new Set(mention.aliases).size !== mention.aliases.length ||
        mention.aliases.includes(mention.name)
      )
        fail('duplicate name alias');
      const identity = JSON.stringify([
        review.companyId,
        mention.kind,
        mention.name,
        mention.context,
      ]);
      if (unique.has(identity)) fail('duplicate product mention');
      unique.add(identity);
      mentions.push({
        id: `company-${sha(identity).slice(0, 20)}`,
        companyId: review.companyId,
        companyName: review.companyName,
        companySlug: review.companySlug,
        ...mention,
        sourceUrl: `https://buyandrentrobots.com/companies/${encodeURIComponent(review.companySlug)}`,
        sourceSnapshotAt,
        checkedAt: review.checkedAt,
        descriptionSha256: review.descriptionSha256,
        note: review.note,
      });
    }
    reviewSummary.push({
      companyId: review.companyId,
      companyName: review.companyName,
      companySlug: review.companySlug,
      descriptionSha256: review.descriptionSha256,
      checkedAt: review.checkedAt,
      status: description.trim()
        ? review.mentions.length
          ? 'names-recorded'
          : 'no-named-products'
        : 'no-description',
      mentionCount: review.mentions.length,
      note: review.note,
    });
  }
  if (reviewed.size !== originals.size) fail('every source company needs an explicit review');
  mentions.sort(
    (a, b) =>
      a.companyName.localeCompare(b.companyName, 'en') ||
      a.name.localeCompare(b.name, 'en') ||
      a.kind.localeCompare(b.kind, 'en'),
  );
  reviewSummary.sort((a, b) => a.companySlug.localeCompare(b.companySlug, 'en'));
  return {
    updatedAt: registry.updatedAt,
    scope: registry.scope,
    sourceSnapshotAt,
    counts: {
      sourceCompaniesReviewed: reviewed.size,
      withDescriptions: reviewSummary.filter((review) => review.status !== 'no-description').length,
      withoutDescriptions: reviewSummary.filter((review) => review.status === 'no-description')
        .length,
      withNamedMentions: reviewSummary.filter((review) => review.mentionCount).length,
      namedMentions: mentions.length,
      byKind: Object.fromEntries(
        Object.keys(COMPANY_PRODUCT_KINDS).map((kind) => [
          kind,
          mentions.filter((mention) => mention.kind === kind).length,
        ]),
      ),
    },
    reviews: reviewSummary,
    mentions,
  };
}

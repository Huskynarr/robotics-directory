import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import {
  buildCompetitorReviewQueue,
  renderCompetitorResearchQueueCsv,
} from '../../scripts/lib/competitor-review-queue.mjs';
import { parseCSV } from '../../src/utils/csv-parser.js';

it('keeps saved research outputs aligned with the current catalog, reviews and original snapshots', () => {
  const body = (name) => fs.readFileSync(`data/competitors/${name}.json`, 'utf8');
  const read = (name) => JSON.parse(body(name));
  const coverage = read('coverage');
  const saved = read('research-queue');
  const gaps = read('buyandrentrobots-gaps');
  const buy = read('buyandrentrobots');
  const queue = buildCompetitorReviewQueue({
    coverage,
    robots: getAllRobots().allRobots,
    brands: getAllBrands(),
    getInsights: getProductInsights,
    getReview: getSpecificationReview,
    getCompanyFocus: (brand) => getCompanyInsights(brand).primary,
    sourceSnapshots: {
      roboticsdir: read('roboticsdir').fetchedAt,
      buyandrentrobots: buy.fetchedAt,
    },
  });
  expect(saved).toEqual(queue);
  expect(coverage.allSourceProductEvidenceCoverage).toEqual({
    ...queue.summary,
    scope: queue.scope,
  });
  expect(fs.readFileSync('data/competitors/robot-research-queue.csv', 'utf8')).toBe(
    renderCompetitorResearchQueueCsv(queue),
  );
  expect(gaps.fetchedAt).toBe(buy.fetchedAt);
  expect(gaps.comparison.catalogRows).toBe(coverage.catalog.models);
  expect(gaps.strictUnresolvedModels).toEqual(
    coverage.buyandrentrobots.models.filter((row) =>
      ['missing', 'family-covered', 'family-or-variant-review'].includes(row.status),
    ),
  );
  expect(gaps.strictUnresolvedListings).toEqual(coverage.listingReviews.unreviewedListings);
  for (const [key, name] of [
    ['inventory', 'buyandrentrobots'],
    ['coverage', 'coverage'],
  ])
    expect(gaps.inputSha256[key]).toBe(createHash('sha256').update(body(name)).digest('hex'));
});

function fixture() {
  const robots = ['a', 'b', 'candidate'].map((id) => ({
    id,
    manufacturer: `Maker ${id}`,
    model: `Robot ${id}`,
    category: 'commercial',
  }));
  const brands = robots.map((robot) => ({
    id: robot.id,
    name: robot.manufacturer,
    aliases: [],
    sources: [{ url: `https://example.com/company/${robot.id}` }],
    robots: [robot],
    modelCount: 1,
  }));
  brands.push({
    id: 'software',
    name: 'Software company',
    aliases: [],
    sources: [{ url: 'https://example.com/software' }],
    robots: [],
    modelCount: 0,
  });
  return {
    robots,
    brands,
    coverage: {
      generatedAt: '2026-11-02T10:00:00Z',
      catalog: { models: 3 },
      roboticsdir: {
        mentions: [
          {
            brand: 'Maker a',
            model: 'Robot a',
            sourceUrls: ['https://example.com/a'],
            status: 'exact',
            catalogIds: ['a'],
          },
        ],
      },
      buyandrentrobots: {
        models: [
          {
            brand: 'Candidate',
            model: 'Prefix',
            sourceUrls: ['https://example.com/prefix'],
            status: 'family-or-variant-review',
            catalogIds: ['candidate'],
          },
        ],
      },
      listingReviews: {
        entries: [
          {
            listingId: 'family',
            name: 'Family',
            company: 'Provider',
            sourceUrl: 'https://example.com/family',
            kind: 'family-resolution',
            checkedAt: '2026-11-02',
            note: 'Documented family, not an exact configuration',
            catalogIds: ['a', 'b'],
          },
        ],
        unreviewedListings: [{ listingId: 'open' }],
      },
      companyDescriptionProducts: {
        mentions: [
          {
            id: 'related',
            companyName: 'Provider',
            name: 'Robot b',
            sourceUrl: 'https://example.com/provider',
            reviewedCatalogIds: ['b'],
            productReview: {
              kind: 'family-reference',
              checkedAt: '2026-11-02',
              note: 'Related family, "configuration" unspecified\nCurrent availability unverified',
              scope: 'Naming only',
            },
          },
          {
            id: 'unreviewed',
            candidateCatalogIds: ['candidate'],
            reviewedCatalogIds: ['candidate'],
            productReview: null,
          },
        ],
      },
      remaining: [{ brand: 'Other', model: 'Unresolved', status: 'missing', catalogIds: [] }],
    },
    getInsights: (id) =>
      id === 'a'
        ? {
            highlights: ['A documented feature'],
            sources: [
              {
                name: 'Maker',
                type: 'manufacturer',
                url: 'https://example.com/maker',
                checkedAt: '2026-11-02',
              },
            ],
          }
        : null,
    getReview: (id) =>
      id === 'a'
        ? {
            fields: {
              weight: { status: 'documented' },
              speed: { status: 'not-documented' },
              size: { status: 'conflicting' },
              batteryLife: { status: 'roadmap' },
            },
            sources: [{ url: 'https://example.com/spec' }],
          }
        : null,
    getCompanyFocus: (brand) => (brand.id === 'software' ? { checkedAt: '2026-11-02' } : null),
  };
}

describe('complete saved-source research queue', () => {
  it('deduplicates robots across source layers while retaining their separate references', () => {
    const queue = buildCompetitorReviewQueue(fixture());
    expect(queue.summary.explicitModelMentionTargets).toBe(1);
    expect(queue.summary.targetsIncludingListingReviews).toBe(2);
    expect(queue.summary.allReviewedReferenceTargets).toBe(2);
    expect(queue.models.find((model) => model.robotId === 'a').sourceReferences).toHaveLength(2);
    expect(
      queue.models.find((model) => model.robotId === 'b').sourceReferences.map((ref) => ref.layer),
    ).toEqual(['listing-review', 'company-description-review']);
  });
  it('excludes prefix/name candidates and descriptions without a review', () => {
    const queue = buildCompetitorReviewQueue(fixture());
    expect(queue.models.some((model) => model.robotId === 'candidate')).toBe(false);
    expect(queue.summary.remainingModelIdentities).toBe(1);
    expect(queue.summary.remainingListingIdentities).toBe(1);
  });
  it('does not turn related-family references into exact configuration identities', () => {
    const row = buildCompetitorReviewQueue(fixture()).models.find((model) => model.robotId === 'b');
    expect(row.sourceReferences[1].status).toBe('family-reference');
    expect(row.sourceReferences[1].note).toContain('configuration');
    expect(row.sourceReferences[1].scope).toBe('Naming only');
  });
  it('distinguishes missing and undated highlights from dated primary evidence', () => {
    const input = fixture();
    input.getInsights = () => ({
      highlights: ['Undated claim'],
      sources: [{ name: 'Maker', type: 'manufacturer', url: 'https://example.com/maker' }],
    });
    const queue = buildCompetitorReviewQueue(input);
    expect(queue.summary.withDatedHighlights).toBe(0);
    expect(queue.summary.withoutDatedHighlights).toBe(2);
  });
  it('counts selected field states without presenting absent or partial reviews as certification', () => {
    const queue = buildCompetitorReviewQueue(fixture());
    expect(queue.summary.withSelectedFieldReview).toBe(1);
    expect(queue.summary.withoutSelectedFieldReview).toBe(1);
    expect(queue.summary.selectedFields).toBe(4);
    expect(queue.summary.selectedFieldStatuses).toEqual({
      documented: 1,
      'not-documented': 1,
      conflicting: 1,
      roadmap: 1,
    });
  });
  it('retains company-only profiles and ranks missing evidence before research volume', () => {
    const queue = buildCompetitorReviewQueue(fixture());
    expect(queue.companies).toHaveLength(4);
    expect(
      queue.companies.find((company) => company.brandId === 'software').hasCompanyAuthoredFocus,
    ).toBe(true);
    expect(queue.manufacturerPriorities[0].brandId).toBe('b');
  });
  it('rejects stale counts, unknown target IDs and ambiguous brand owners', () => {
    const stale = fixture();
    stale.coverage.catalog.models = 9;
    expect(() => buildCompetitorReviewQueue(stale)).toThrow('Stale');
    const unknown = fixture();
    unknown.coverage.roboticsdir.mentions[0].catalogIds = ['unknown'];
    expect(() => buildCompetitorReviewQueue(unknown)).toThrow('Unknown reviewed catalog target');
    const ambiguous = fixture();
    ambiguous.brands[1].robots.push(ambiguous.robots[0]);
    expect(() => buildCompetitorReviewQueue(ambiguous)).toThrow('Ambiguous brand owner');
  });
  it('exports readable source/status/note data through the repository CSV reader', () => {
    const queue = buildCompetitorReviewQueue(fixture());
    const rows = parseCSV(renderCompetitorResearchQueueCsv(queue));
    expect(rows).toHaveLength(2);
    const row = rows.find((model) => model.robotId === 'b');
    expect(row.referenceStatuses).toContain('family-reference');
    expect(row.referenceNotes).toContain(
      '"configuration" unspecified\nCurrent availability unverified',
    );
    expect(row.sourceUrls).toContain('https://example.com/provider');
    expect(row.hasSelectedFieldReview).toBe('false');
  });
});

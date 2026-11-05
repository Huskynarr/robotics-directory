import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { summarizeDetailContentChecks } from '../../scripts/lib/competitor-detail-content.mjs';
import { getAllRobots } from '../../src/data/robots.js';

const row = {
  listingId: 'a',
  name: 'Model',
  company: 'Provider',
  companySlug: 'provider',
  sourceUrl: 'https://buyandrentrobots.com/robot/a',
  fetchedAt: '2026-11-01',
};
const check = () => ({
  listingId: row.listingId,
  inventory: Object.fromEntries(
    ['name', 'company', 'companySlug', 'sourceUrl', 'fetchedAt'].map((key) => [key, row[key]]),
  ),
  source: {
    status: 200,
    finalUrl: row.sourceUrl,
    contentType: 'text/html',
    bodySha256: 'a'.repeat(64),
    bodyBytes: 100,
  },
  identity: {
    status: 'matched-identity',
    fields: Object.fromEntries(
      ['url', 'title', 'company', 'companyLink', 'description', 'uniqueVisibleFields'].map(
        (key) => [key, true],
      ),
    ),
  },
  content: {
    title: row.name,
    company: row.company,
    companyPath: '/companies/provider',
    descriptionSha256: 'b'.repeat(64),
    descriptionCharacters: 30,
  },
  review: { status: 'pending' },
});
const decision = () => ({
  status: 'reviewed',
  reviewedAt: '2026-11-05',
  directoryClaims: ['Delivery application'],
  assessment: 'consistent-with-primary-scope',
  catalogIds: ['catalog-model'],
  primarySources: [{ url: 'https://manufacturer.example/model', checkedAt: '2026-11-01' }],
  note: 'Directory application compared with a dated manufacturer record; availability is not certified.',
});

describe('per-URL directory detail content coverage', () => {
  it('does not equate HTTP success or parsed identity with a content review', () => {
    expect(summarizeDetailContentChecks([row], { checks: [check()] })).toMatchObject({
      matchedIdentityResponses: 1,
      reviewedDetailContents: 0,
      remainingDetailContentReviews: 1,
    });
  });

  it('counts a dated decision with catalog and primary-source provenance', () => {
    const entry = { ...check(), review: decision() };
    expect(
      summarizeDetailContentChecks([row], { checks: [entry] }, new Set(['catalog-model'])),
    ).toMatchObject({
      reviewedDetailContents: 1,
      remainingDetailContentReviews: 0,
    });
    expect(() => summarizeDetailContentChecks([row], { checks: [entry] }, new Set())).toThrow(
      /Invalid detail/,
    );
  });

  it('does not reuse a check when the saved listing identity or snapshot changes', () => {
    const entry = { ...check(), review: decision() };
    expect(
      summarizeDetailContentChecks([{ ...row, name: 'New model' }], { checks: [entry] }),
    ).toMatchObject({
      staleInventoryReferences: 1,
      reviewedDetailContents: 0,
    });
  });

  it('keeps latest failures open without counting earlier attempts twice', () => {
    const entry = { ...check(), review: decision() };
    const failed = { ...check(), source: { ...check().source, status: 429 } };
    expect(summarizeDetailContentChecks([row], { checks: [entry, failed] })).toMatchObject({
      attemptedListings: 1,
      trackedAttempts: 2,
      reviewedDetailContents: 0,
    });
  });

  it('reports conflicts and remaining manufacturer follow-ups separately', () => {
    for (const [assessment, key] of [
      ['directory-conflict-recorded', 'directoryConflicts'],
      ['primary-follow-up-required', 'pendingPrimaryFollowUps'],
    ]) {
      expect(
        summarizeDetailContentChecks([row], {
          checks: [{ ...check(), review: { ...decision(), assessment } }],
        })[key],
      ).toBe(1);
    }
  });

  it('requires a recorded classification before reviewing a service without a robot model', () => {
    const classification = {
      source: 'buyandrentrobots',
      brand: row.company,
      model: row.name,
      kind: 'service',
    };
    const entry = { ...check(), review: { ...decision(), catalogIds: [], classification } };
    expect(() => summarizeDetailContentChecks([row], { checks: [entry] })).toThrow(
      /Invalid detail/,
    );
    expect(
      summarizeDetailContentChecks([row], { checks: [entry] }, new Set(), [classification]),
    ).toMatchObject({
      reviewedDetailContents: 1,
      reviewedNonModelListings: 1,
    });
  });

  it('publishes the ledger-derived coverage while preserving catalog evidence counts', () => {
    const read = (name) => JSON.parse(fs.readFileSync(`data/competitors/${name}.json`, 'utf8'));
    const inventory = read('buyandrentrobots');
    const ledger = read('detail-content-reviews');
    const expected = summarizeDetailContentChecks(
      inventory.listings,
      ledger,
      new Set(getAllRobots().allRobots.map((robot) => robot.id)),
      read('model-classifications').decisions,
    );
    expect(read('coverage').sourceDetailContentCoverage).toEqual(expected);
    expect(read('coverage').specificationEvidenceCoverage.reviewedCatalogModels).toBe(1468);
    expect(expected.scope).toContain('not content review');
  });
});

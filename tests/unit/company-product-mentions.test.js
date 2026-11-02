import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { describe, expect, it } from 'vitest';
import { extractCompanyMentions } from '../../scripts/lib/competitor-company-mentions.mjs';
import { validateCompanyDescriptionInventory } from '../../src/data/company-product-mentions.js';
import { companyProductKindLabel } from '../../src/utils/company-product-mentions.js';
import { getAllBrands, getBrandSearchText } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';

const read = (name) => JSON.parse(fs.readFileSync(`data/competitors/${name}.json`, 'utf8'));
const sha = (value) => createHash('sha256').update(value).digest('hex');
const snapshot = '2026-11-01T17:58:29Z';
function fixture(description = 'SuperDrive™ and Capra 200 and 500; Evo; Café.') {
  const company = {
    company_id: 'example-id',
    company_name: 'Example',
    slug: 'example',
    description,
  };
  const review = {
    companyId: 'example-id',
    companyName: 'Example',
    companySlug: 'example',
    descriptionSha256: sha(description),
    checkedAt: '2026-11-02',
    note: 'Name extraction only.',
    mentions: [{ name: 'SuperDrive', kind: 'software', context: '', aliases: [] }],
  };
  return {
    companies: [company],
    registry: { updatedAt: '2026-11-02', scope: 'Source names only.', reviews: [review] },
    review,
  };
}
const extract = (f) => extractCompanyMentions(f.companies, f.registry, snapshot);

describe('snapshot-bound company product extraction', () => {
  it('keeps trademark boundaries, canonical Unicode and abbreviated configuration context', () => {
    const f = fixture();
    f.review.mentions.push(
      { name: '500', kind: 'configuration-label', context: 'Capra 200 and 500', aliases: [] },
      { name: 'Café', kind: 'family', context: '', aliases: ['Cafe\u0301'] },
    );
    const result = extract(f);
    expect(result.mentions.map((m) => m.name)).toEqual(['500', 'Café', 'SuperDrive']);
    expect(result.mentions[0].context).toBe('Capra 200 and 500');
    expect(JSON.stringify(result)).not.toContain('Capra 500');
    expect(
      result.mentions.every((m) => m.sourceSnapshotAt === snapshot && m.checkedAt === '2026-11-02'),
    ).toBe(true);
    expect(result.mentions.map((m) => m.id)).toEqual(extract(f).mentions.map((m) => m.id));
  });

  it('requires explicit reviews even when there is no description or no product name', () => {
    const f = fixture('General robotics business.');
    f.review.mentions = [];
    expect(extract(f).reviews[0].status).toBe('no-named-products');
    f.companies[0].description = null;
    f.review.descriptionSha256 = sha('');
    expect(extract(f).reviews[0].status).toBe('no-description');
    f.registry.reviews = [];
    expect(() => extract(f)).toThrow('every source company');
  });

  it('rejects text changes even when the extracted name remains in the source', () => {
    const f = fixture();
    f.companies[0].description += ' New details.';
    expect(() => extract(f)).toThrow('stale description hash');
  });

  it.each([
    [
      'name',
      (f) => {
        f.review.mentions[0].name = 'Missing';
      },
      'name absent',
    ],
    [
      'alias',
      (f) => {
        f.review.mentions[0].aliases = ['Invented'];
      },
      'name absent',
    ],
    [
      'context',
      (f) => {
        f.review.mentions[0].context = 'Invented context';
      },
      'context absent',
    ],
    [
      'kind',
      (f) => {
        f.review.mentions[0].kind = 'robot-guaranteed';
      },
      'unknown product kind',
    ],
    [
      'date',
      (f) => {
        f.review.checkedAt = '2026-02-30';
      },
      'invalid review date',
    ],
    [
      'identity',
      (f) => {
        f.review.companySlug = 'other';
      },
      'identity changed',
    ],
    [
      'duplicate review',
      (f) => {
        f.registry.reviews.push(structuredClone(f.review));
      },
      'duplicate company review',
    ],
    [
      'duplicate mention',
      (f) => {
        f.review.mentions.push(structuredClone(f.review.mentions[0]));
      },
      'duplicate product mention',
    ],
  ])('rejects invalid %s', (_, mutate, error) => {
    const f = fixture();
    mutate(f);
    expect(() => extract(f)).toThrow(error);
  });

  it('does not extract Bit or Evo from embedded substrings', () => {
    for (const name of ['Bit', 'Evo']) {
      const f = fixture('Bitwise evolutionary software.');
      f.review.mentions[0] = { name, kind: 'model', context: '', aliases: [] };
      expect(() => extract(f)).toThrow('name absent');
    }
  });

  it('preserves an existing output when the CLI receives incomplete source data', () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'company-mentions-'));
    try {
      const input = path.join(tmp, 'input.json'),
        output = path.join(tmp, 'output.json');
      fs.writeFileSync(input, '[]');
      fs.writeFileSync(output, 'previous reviewed output\n');
      const result = spawnSync(
        process.execPath,
        ['scripts/extract-company-mentions.mjs', '--input', input, '--out', output],
        { encoding: 'utf8' },
      );
      expect(result.status).toBe(1);
      expect(result.stderr).toContain('Incomplete source company snapshot');
      expect(fs.readFileSync(output, 'utf8')).toBe('previous reviewed output\n');
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });
});

describe('published company names and review inventory', () => {
  it('reproduces the full extraction and accounts for every source company', () => {
    const raw = read('company-descriptions').companies;
    const inventory = read('company-mentions'),
      buy = read('buyandrentrobots');
    expect(extractCompanyMentions(raw, read('company-description-reviews'), buy.fetchedAt)).toEqual(
      inventory,
    );
    expect(inventory.counts.sourceCompaniesReviewed).toBe(buy.companies.length);
    expect(inventory.counts.withDescriptions + inventory.counts.withoutDescriptions).toBe(
      buy.companies.length,
    );
    expect(Object.values(inventory.counts.byKind).reduce((a, b) => a + b, 0)).toBe(
      inventory.mentions.length,
    );
    expect(validateCompanyDescriptionInventory(inventory, buy)).toBe(inventory);
    const source = structuredClone(read('company-descriptions'));
    source.companies[0].description = `${source.companies[0].description || ''} Changed.`;
    expect(() => validateCompanyDescriptionInventory(inventory, buy, source)).toThrow(
      'stale source hash',
    );
  });

  it.each(['sourceUrl', 'sourceSnapshotAt', 'descriptionSha256', 'id', 'checkedAt'])(
    'rejects mutated %s at rendering time',
    (field) => {
      const data = structuredClone(read('company-mentions'));
      data.mentions[0][field] = field === 'sourceUrl' ? 'javascript:alert(1)' : 'invalid';
      expect(() => validateCompanyDescriptionInventory(data, read('buyandrentrobots'))).toThrow();
    },
  );

  it('exposes exact source-name joins, typed software search and no inferred manufacturer joins', () => {
    const brands = getAllBrands();
    const figure = brands.find((b) => b.id === 'figure-ai');
    expect(getBrandSearchText(figure)).toContain('helix');
    const plus = brands.find((b) => b.id === 'plusai');
    expect(getCompanyInsights(plus).directoryProducts.every((m) => m.kind === 'software')).toBe(
      true,
    );
    expect(getBrandSearchText(plus)).toContain('superdrive');
    const dji = brands.find((b) => b.id === 'dji-official');
    expect(getCompanyInsights(dji).directoryProducts).toHaveLength(13);
    expect(
      getCompanyInsights({
        id: 'unknown',
        name: 'Unknown',
        aliases: [],
        catalogManufacturers: ['DJI Official'],
      }).directoryProducts,
    ).toEqual([]);
    expect(() => companyProductKindLabel('invented-kind')).toThrow();
  });

  it('keeps extraction candidates separate from original catalog model coverage', () => {
    const coverage = read('coverage'),
      source = read('company-mentions');
    const extracted = coverage.companyDescriptionProducts;
    expect(extracted.mentions.map((m) => m.id)).toEqual(source.mentions.map((m) => m.id));
    expect(
      extracted.mentions
        .filter((m) => m.kind !== 'model')
        .every(
          (m) =>
            m.candidateCatalogIds.length === 0 &&
            m.identityStatus ===
              (m.productReview ? `reviewed-${m.productReview.kind}` : 'typed-non-model'),
        ),
    ).toBe(true);
    expect(
      extracted.mentions.find(
        (m) => m.companyName === 'Elite Event Robotics' && m.name === 'Unitree G1',
      ).identityStatus,
    ).toBe('reviewed-model-identity');
    expect(extracted.mentions.every((m) => !Object.hasOwn(m, 'catalogIds'))).toBe(true);
    expect(coverage.roboticsdir.mentions.length + coverage.buyandrentrobots.models.length).toBe(
      406,
    );
  });
});

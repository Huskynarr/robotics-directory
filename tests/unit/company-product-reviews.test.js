import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { indexCompanyProductReviews } from '../../src/utils/company-product-reviews.js';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';

const read = (name) => JSON.parse(fs.readFileSync(`data/competitors/${name}.json`, 'utf8'));
function fixture() {
  const source = {
    name: 'Maker',
    type: 'manufacturer',
    url: 'https://example.com/a',
    checkedAt: '2026-11-01',
  };
  return {
    data: {
      updatedAt: '2026-11-02',
      reviews: [
        {
          mentionId: 'mention-a',
          descriptionSha256: 'hash',
          kind: 'model-identity',
          catalogIds: ['maker-a'],
          checkedAt: '2026-11-02',
          note: 'Explicit name check.',
          sources: [source],
        },
      ],
    },
    mentions: [{ id: 'mention-a', kind: 'model', name: 'A', descriptionSha256: 'hash' }],
    robots: [{ id: 'maker-a', manufacturer: 'Maker', model: 'A' }],
    products: [{ row: { manufacturer: 'Maker', model: 'A' }, sources: [source] }],
  };
}
const index = (f) => indexCompanyProductReviews(f.data, f.mentions, f.robots, f.products);

describe('explicit company-description product decisions', () => {
  it('resolves a reviewed name to one primary-sourced model without changing source extraction', () => {
    const f = fixture(),
      before = JSON.stringify(f);
    const r = index(f).get('mention-a');
    expect(r.catalogTargets).toEqual([{ id: 'maker-a', manufacturer: 'Maker', model: 'A' }]);
    expect(r.label).toBe('Reviewed model reference');
    expect(r.scope).toContain('provider relationships');
    expect(JSON.stringify(f)).toBe(before);
  });

  it.each([
    [
      'unknown mention',
      (f) => {
        f.data.reviews[0].mentionId = 'unknown';
      },
      'unknown or duplicate',
    ],
    [
      'duplicate mention',
      (f) => {
        f.data.reviews.push(structuredClone(f.data.reviews[0]));
      },
      'unknown or duplicate',
    ],
    [
      'stale description',
      (f) => {
        f.mentions[0].descriptionSha256 = 'changed';
      },
      'stale source',
    ],
    [
      'invented kind',
      (f) => {
        f.data.reviews[0].kind = 'guaranteed';
      },
      'unknown review kind',
    ],
    [
      'invalid date',
      (f) => {
        f.data.reviews[0].checkedAt = '2026-02-30';
      },
      'valid date',
    ],
    [
      'future review',
      (f) => {
        f.data.reviews[0].checkedAt = '2026-11-03';
      },
      'valid date',
    ],
    [
      'missing note',
      (f) => {
        f.data.reviews[0].note = '';
      },
      'missing note',
    ],
    [
      'unsafe URL',
      (f) => {
        f.data.reviews[0].sources = [
          { ...f.data.reviews[0].sources[0], url: 'javascript:alert(1)' },
        ];
      },
      'dated primary',
    ],
    [
      'URL credentials',
      (f) => {
        f.data.reviews[0].sources = [
          { ...f.data.reviews[0].sources[0], url: 'https://user:pass@example.com/' },
        ];
      },
      'dated primary',
    ],
    [
      'directory evidence',
      (f) => {
        f.data.reviews[0].sources = [{ ...f.data.reviews[0].sources[0], type: 'directory' }];
      },
      'dated primary',
    ],
    [
      'future evidence',
      (f) => {
        f.data.reviews[0].sources = [{ ...f.data.reviews[0].sources[0], checkedAt: '2026-11-03' }];
      },
      'dated primary',
    ],
    [
      'missing target',
      (f) => {
        f.data.reviews[0].catalogIds = ['unknown'];
      },
      'unknown catalog target',
    ],
    [
      'unevidenced target',
      (f) => {
        f.products = [];
      },
      'lacks primary evidence',
    ],
    [
      'duplicate targets',
      (f) => {
        f.data.reviews[0].catalogIds = ['maker-a', 'maker-a'];
      },
      'invalid target IDs',
    ],
    [
      'family as exact model',
      (f) => {
        f.mentions[0].kind = 'family';
      },
      'one model target',
    ],
    [
      'non-robot with robot target',
      (f) => {
        f.data.reviews[0].kind = 'non-robot-device';
      },
      'cannot claim catalog',
    ],
  ])('rejects %s', (_, mutate, message) => {
    const f = fixture();
    mutate(f);
    expect(() => index(f)).toThrow(message);
  });

  it('allows related versions without representing them as exact model identities', () => {
    const f = fixture();
    f.data.reviews[0].kind = 'family-reference';
    expect(index(f).get('mention-a').label).toContain('configuration unspecified');
    f.data.reviews[0].catalogIds = [];
    expect(() => index(f)).toThrow('requires related products');
  });

  it('classifies a non-robot without attaching a robot card target', () => {
    const f = fixture();
    f.data.reviews[0].kind = 'non-robot-device';
    f.data.reviews[0].catalogIds = [];
    expect(index(f).get('mention-a').catalogTargets).toEqual([]);
  });

  it('keeps an evidenced named offering separate from an unverified hardware model', () => {
    const f = fixture();
    f.data.reviews[0].kind = 'named-offering';
    expect(() => index(f)).toThrow('cannot claim catalog');
    f.data.reviews[0].catalogIds = [];
    f.data.reviews[0].sources[0].type = 'deployment';
    expect(index(f).get('mention-a').label).toContain('hardware model unverified');
    expect(index(f).get('mention-a').catalogTargets).toEqual([]);
  });

  it('requires system references to be family/system names without standalone robot targets', () => {
    const f = fixture();
    f.data.reviews[0].kind = 'system-reference';
    expect(() => index(f)).toThrow('family/system/software name without robot targets');
    f.data.reviews[0].catalogIds = [];
    expect(() => index(f)).toThrow('family/system/software name without robot targets');
    f.mentions[0].kind = 'family';
    expect(index(f).get('mention-a').catalogTargets).toEqual([]);
    expect(index(f).get('mention-a').label).toContain('no standalone robot target');
  });

  it('reviews all extracted families without merging arm series, providers or system components', () => {
    const coverage = read('coverage').companyDescriptionProducts;
    const families = coverage.mentions.filter((m) => m.kind === 'family');
    expect(families).toHaveLength(28);
    expect(families.every((m) => m.productReview)).toBe(true);
    const rb = families.find((m) => m.companyName === 'Rainbow Robotics' && m.name === 'RB');
    expect(rb.productReview.catalogTargets).toHaveLength(13);
    expect(rb.productReview.catalogTargets.every((r) => /^RB\d/.test(r.model))).toBe(true);
    const aloha = families.find((m) => m.name === 'Aloha');
    expect(aloha.productReview.catalogTargets.map((r) => r.manufacturer)).toEqual([
      'Interbotix',
      'Interbotix',
      'Interbotix',
    ]);
    expect(getAllBrands().find((b) => b.id === 'trossen-robotics').catalogManufacturers).toEqual(
      [],
    );
    const skyhub = families.find((m) => m.name === 'SKYHUB');
    expect(skyhub.productReview.kind).toBe('system-reference');
    expect(skyhub.productReview.catalogIds).toEqual([]);
    expect(coverage.identityCounts['reviewed-system-reference']).toBe(5);
  });

  it.each([
    ['software-reference', 'software'],
    ['component-reference', 'component'],
    ['component-reference', 'component-family'],
    ['brand-reference', 'brand'],
    ['brand-reference', 'unresolved-name'],
    ['service-reference', 'service'],
    ['machine-family-reference', 'machine-family'],
  ])(
    'keeps %s for %s separate from robot identity and rejects other source types',
    (kind, type) => {
      const f = fixture();
      f.data.reviews[0].kind = kind;
      f.mentions[0].kind = type;
      expect(() => index(f)).toThrow('without robot targets');
      f.data.reviews[0].catalogIds = [];
      expect(index(f).get('mention-a').catalogTargets).toEqual([]);
      f.mentions[0].kind = 'model';
      expect(() => index(f)).toThrow('requires its source type');
    },
  );

  it('requires a configuration source label and separately evidenced related products', () => {
    const f = fixture();
    f.data.reviews[0].kind = 'configuration-reference';
    expect(() => index(f)).toThrow('configuration label');
    f.mentions[0].kind = 'configuration-label';
    expect(index(f).get('mention-a').catalogTargets).toHaveLength(1);
    f.data.reviews[0].catalogIds = [];
    expect(() => index(f)).toThrow('related products');
    f.data.reviews[0].catalogIds = ['unknown'];
    expect(() => index(f)).toThrow('unknown catalog target');
  });

  it('limits programme evidence to software reference reviews and forbids its use as hardware evidence', () => {
    const f = fixture();
    f.data.reviews[0].sources[0].type = 'programme';
    expect(() => index(f)).toThrow('dated primary evidence');
    f.data.reviews[0].kind = 'software-reference';
    f.data.reviews[0].catalogIds = [];
    f.mentions[0].kind = 'software';
    expect(index(f).get('mention-a').sources[0].type).toBe('programme');
    f.data.reviews[0].kind = 'brand-reference';
    f.mentions[0].kind = 'brand';
    expect(() => index(f)).toThrow('dated primary evidence');
    f.data.reviews[0].kind = 'model-identity';
    f.data.reviews[0].catalogIds = ['maker-a'];
    f.mentions[0].kind = 'model';
    f.data.reviews[0].sources[0].type = 'manufacturer';
    f.products[0].sources = [{ ...f.data.reviews[0].sources[0], type: 'programme' }];
    expect(() => index(f)).toThrow('lacks primary evidence');
  });

  it('keeps historical APP+ separate from current 1+OS and provider references separate from manufacturers', () => {
    const cp = read('coverage').companyDescriptionProducts;
    const app = cp.mentions.find((m) => m.name === 'APP+');
    expect(app.productReview.kind).toBe('software-reference');
    expect(app.productReview.note).toContain('September 9, 2022');
    expect(app.productReview.note).toContain('no source establishes APP+ and 1+OS as aliases');
    expect(app.reviewedCatalogIds).toEqual([]);
    const vex = cp.mentions.find((m) => m.name === 'VEX Robotics');
    expect(vex.productReview.kind).toBe('brand-reference');
    expect(vex.reviewedCatalogIds).toEqual([]);
    expect(getAllBrands().find((b) => b.id === 'idesign-365').catalogManufacturers).toEqual([]);
    const kime = cp.mentions.find((m) => m.name === 'Kime v5');
    expect(kime.productReview.kind).toBe('configuration-reference');
    expect(kime.reviewedCatalogIds).toEqual(['macco-robotics-kime-v5']);
    expect(kime.productReview.note).toContain('not verification');
  });

  it('preserves a source software type when primary evidence identifies an integrated system', () => {
    const m = read('coverage').companyDescriptionProducts.mentions.find(
      (m) => m.companyName === 'Nuro' && m.name === 'Nuro Driver',
    );
    expect(m.kind).toBe('software');
    expect(m.productReview.kind).toBe('system-reference');
    expect(m.productReview.note).toContain('both in-vehicle software and hardware');
    expect(m.productReview.catalogIds).toEqual([]);
  });

  it('reviews every extracted name while separating a forklift integration from tugger specifications', () => {
    const cp = read('coverage').companyDescriptionProducts;
    expect(cp.reviewedNames).toBe(132);
    expect(cp.mentions.filter((m) => !m.productReview)).toEqual([]);
    const forklift = cp.mentions.find((m) => m.companyName === 'Cyngn' && m.name === 'Forklift');
    expect(forklift.kind).toBe('configuration-label');
    expect(forklift.productReview.kind).toBe('configuration-reference');
    expect(forklift.reviewedCatalogIds).toEqual(['cyngn-drivemod-forklift']);
    expect(forklift.productReview.note).toContain('not a forklift lifting specification');
    const software = cp.mentions.filter((m) => m.productReview?.kind === 'software-reference');
    expect(software).toHaveLength(18);
    expect(software.every((m) => !m.reviewedCatalogIds.length)).toBe(true);
  });

  it('preserves operator identities and qualified family names after primary-source review', () => {
    const brands = getAllBrands();
    for (const [brandId, name] of [
      ['event-robot-com', 'Sparky'],
      ['scarlett-entertainment', 'Titan the Robot'],
    ]) {
      const mention = getCompanyInsights(
        brands.find((b) => b.id === brandId),
      ).directoryProducts.find((m) => m.name === name);
      expect(mention.kind).toBe('model');
      expect(mention.productReview.kind).toBe('named-offering');
      expect(mention.productReview.catalogIds).toEqual([]);
    }
    for (const [brandId, name, target] of [
      ['anybotics', 'ANYmal', 'anybotics-anymal'],
      ['thymio-by-mobsya', 'Thymio', 'mobsya-thymio-ii'],
    ]) {
      const brand = brands.find((b) => b.id === brandId);
      const mention = getCompanyInsights(brand).directoryProducts.find((m) => m.name === name);
      expect(mention.productReview.kind).toBe('family-reference');
      expect(mention.productReview.catalogIds).toEqual([target]);
    }
    const robotix = brands.find((b) => b.id === 'robotix-education');
    expect(robotix.catalogManufacturers).not.toContain('TTS');
    expect(
      getCompanyInsights(robotix).directoryProducts.find((m) => m.name === 'Bee-Bot').productReview
        .catalogIds,
    ).toEqual(['tts-bee-bot']);
  });

  it('preserves provider profiles and distinguishes original Bit from Bit+', () => {
    const brands = getAllBrands();
    const elite = brands.find((b) => b.id === 'elite-event-robotics');
    expect(elite.catalogManufacturers).not.toContain('Unitree');
    const g1 = getCompanyInsights(elite).directoryProducts.find((m) => m.name === 'Unitree G1');
    expect(g1.productReview.catalogTargets).toEqual([
      { id: 'unitree-g1', manufacturer: 'Unitree', model: 'G1' },
    ]);
    const bit = getCompanyInsights(brands.find((b) => b.id === 'ozobot')).directoryProducts.find(
      (m) => m.name === 'Bit',
    );
    expect(bit.productReview.catalogIds).toEqual(['ozobot-bit']);
    expect(getAllRobots().allRobots.some((r) => r.id === 'ozobot-bit-plus')).toBe(true);
  });

  it('accounts for every review in coverage while retaining all 132 source names and original coverage', () => {
    const data = read('company-product-reviews'),
      mentions = read('company-mentions').mentions;
    const reviews = indexCompanyProductReviews(
      data,
      mentions,
      getAllRobots().allRobots,
      read('verified-products').products,
    );
    const coverage = read('coverage');
    expect(coverage.companyDescriptionProducts.reviewedNames).toBe(reviews.size);
    expect(coverage.companyDescriptionProducts.mentions.map((m) => m.id)).toEqual(
      mentions.map((m) => m.id),
    );
    for (const m of coverage.companyDescriptionProducts.mentions) {
      const review = reviews.get(m.id);
      expect(m.productReview).toEqual(review || null);
      expect(m.reviewedCatalogIds).toEqual(review?.catalogIds || []);
      if (review) expect(m.identityStatus).toBe(`reviewed-${review.kind}`);
    }
    expect(coverage.roboticsdir.mentions.length + coverage.buyandrentrobots.models.length).toBe(
      406,
    );
  });
});

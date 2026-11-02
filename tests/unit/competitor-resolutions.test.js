import { describe, expect, it } from 'vitest';
import {
  indexModelResolutions,
  applyModelResolution,
} from '../../scripts/lib/competitor-resolutions.mjs';

const robots = [
  { id: 'enabled-er-max-600-20', manufacturer: 'Enabled Robotics', model: 'ER-MAX 600-20' },
  { id: 'enabled-er-max-600-30', manufacturer: 'Enabled Robotics', model: 'ER-MAX 600-30' },
];
const products = robots.map((robot) => ({
  row: robot,
  sources: [{ type: 'manufacturer', checkedAt: '2026-11-01' }],
}));
const resolution = {
  source: 'buyandrentrobots',
  brand: 'Mobile Industrial Robots (MiR)',
  model: 'MC600',
  catalogManufacturer: 'Enabled Robotics',
  catalogModels: robots.map((robot) => robot.model),
  kind: 'manufacturer-correction',
  checkedAt: '2026-11-01',
  evidence: [
    { publisher: 'Enabled Robotics', url: 'https://www.enabled-robotics.com/partnernetwork' },
  ],
  note: 'The complete mobile manipulator is supplied by Enabled Robotics.',
};
const entry = {
  brand: resolution.brand,
  model: resolution.model,
  status: 'missing',
  catalogIds: [],
  sourceUrls: ['https://example.com/listing'],
};

describe('reviewed competitor identity corrections', () => {
  it('retains original attribution while linking all verified manufacturer configurations', () => {
    const index = indexModelResolutions([resolution], robots, products);
    const corrected = applyModelResolution(entry, 'buyandrentrobots', index);
    expect(corrected.brand).toBe(resolution.brand);
    expect(corrected.status).toBe('verified-attribution');
    expect(corrected.identityReview.catalogManufacturer).toBe('Enabled Robotics');
    expect(corrected.catalogIds).toEqual(robots.map((robot) => robot.id));
    expect(corrected.sourceUrls).toEqual(entry.sourceUrls);
  });

  it('cannot close a gap if a target was never imported', () => {
    expect(() => indexModelResolutions([resolution], robots.slice(0, 1), products)).toThrow(
      'missing catalog target',
    );
  });

  it('cannot close a gap using a target without dated manufacturer evidence', () => {
    expect(() =>
      indexModelResolutions([resolution], robots, [{ row: robots[0], sources: [] }, products[1]]),
    ).toThrow('lacks primary evidence');
  });

  it('does not apply a correction to another source or a similar name', () => {
    const index = indexModelResolutions([resolution], robots, products);
    expect(applyModelResolution(entry, 'roboticsdir', index)).toBe(entry);
    expect(
      applyModelResolution({ ...entry, model: 'MC600 Plus' }, 'buyandrentrobots', index).status,
    ).toBe('missing');
  });

  it('accepts a dated deployment owner but rejects secondary reporting as primary evidence', () => {
    const withType = (type) =>
      products.map((product) => ({
        ...product,
        sources: [{ type, checkedAt: '2026-11-01' }],
      }));
    expect(indexModelResolutions([resolution], robots, withType('deployment')).size).toBe(1);
    expect(() => indexModelResolutions([resolution], robots, withType('secondary'))).toThrow(
      'lacks primary evidence',
    );
  });

  it('rejects duplicate decisions and unsafe source links', () => {
    expect(() => indexModelResolutions([resolution, resolution], robots, products)).toThrow(
      'duplicate source identity',
    );
    expect(() =>
      indexModelResolutions(
        [{ ...resolution, evidence: [{ publisher: 'Example', url: 'javascript:alert(1)' }] }],
        robots,
        products,
      ),
    ).toThrow('unsafe evidence URL');
  });

  it('keeps a family resolution distinct from an exact single-model match', () => {
    const rule = { ...resolution, kind: 'family-resolution' };
    const index = indexModelResolutions([rule], robots, products);
    expect(applyModelResolution(entry, 'buyandrentrobots', index).status).toBe('family-resolved');
    expect(() =>
      indexModelResolutions([{ ...rule, kind: 'model-alias' }], robots, products),
    ).toThrow('alias must identify one model');
  });
});

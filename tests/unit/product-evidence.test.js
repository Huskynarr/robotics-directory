import { describe, expect, it } from 'vitest';
import { isPrimaryProductSource, productSourceLabel } from '../../src/utils/product-evidence.js';

describe('primary product provenance', () => {
  it('identifies firsthand deployments separately from manufacturer statements', () => {
    const source = { type: 'deployment', checkedAt: '2026-11-01' };
    expect(isPrimaryProductSource(source)).toBe(true);
    expect(productSourceLabel(source)).toBe('Deployment owner source');
    expect(productSourceLabel({ ...source, type: 'manufacturer' })).toBe('Manufacturer source');
    expect(productSourceLabel({ ...source, type: 'developer' })).toBe('Developer source');
    expect(productSourceLabel({ ...source, type: 'integrator' })).toBe(
      'Integration partner source',
    );
  });

  it('rejects secondary publications, unknown types and undated evidence', () => {
    for (const source of [
      undefined,
      { type: 'secondary', checkedAt: '2026-11-01' },
      { type: 'directory', checkedAt: '2026-11-01' },
      { type: 'deployment' },
    ]) {
      expect(isPrimaryProductSource(source)).toBe(false);
      expect(() => productSourceLabel(source)).toThrow('Invalid primary product source');
    }
  });
});

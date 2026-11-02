import { afterEach, describe, expect, it, vi } from 'vitest';
const body = {
  products: { robot: { highlights: ['A scoped claim'], sources: [] } },
  specifications: {},
};
afterEach(() => {
  vi.unstubAllGlobals();
  vi.resetModules();
});
describe('shared search and comparison evidence loading', () => {
  it('shares pending requests and a resolved result without fetching on import', async () => {
    let resolve;
    const pending = new Promise((done) => {
      resolve = done;
    });
    const fetch = vi.fn(() => pending);
    vi.stubGlobal('fetch', fetch);
    const { loadProductEvidence } = await import('../../src/utils/load-product-evidence.js');
    expect(fetch).not.toHaveBeenCalled();
    const first = loadProductEvidence();
    const second = loadProductEvidence();
    expect(first).toBe(second);
    expect(fetch).toHaveBeenCalledTimes(1);
    resolve({ ok: true, json: async () => body });
    expect(await first).toEqual(body);
    expect(await loadProductEvidence()).toEqual(body);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('allows retry after HTTP failure and invalid product payloads', async () => {
    const fetch = vi
      .fn()
      .mockResolvedValueOnce({ ok: false })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ products: { robot: { highlights: 'bad' } }, specifications: {} }),
      })
      .mockResolvedValueOnce({ ok: true, json: async () => body });
    vi.stubGlobal('fetch', fetch);
    const { loadProductEvidence } = await import('../../src/utils/load-product-evidence.js');
    await expect(loadProductEvidence()).rejects.toThrow('unavailable');
    await expect(loadProductEvidence()).rejects.toThrow('Invalid');
    await expect(loadProductEvidence()).resolves.toEqual(body);
    expect(fetch).toHaveBeenCalledTimes(3);
  });
});

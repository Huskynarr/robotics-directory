import { afterEach, describe, expect, it, vi } from 'vitest';
import { loadArrayFromLocalStorage } from '../../src/scripts/storage.js';

afterEach(() => vi.unstubAllGlobals());

describe('saved robot identity corrections', () => {
  it.each(['robotFavorites', 'compareRobots'])(
    'preserves Ameca selections without duplicates in %s',
    (key) => {
      const saved = new Map([
        [key, JSON.stringify(['ameca-ameca', 'unitree-go2-w', 'engineered-arts-ameca'])],
      ]);
      vi.stubGlobal('localStorage', {
        getItem: (name) => saved.get(name) || null,
        setItem: (name, value) => saved.set(name, value),
      });
      expect(loadArrayFromLocalStorage(key)).toEqual(['engineered-arts-ameca', 'unitree-go2-w']);
      expect(JSON.parse(saved.get(key))).toEqual(['engineered-arts-ameca', 'unitree-go2-w']);
    },
  );

  it.each(['robotFavorites', 'compareRobots'])(
    'migrates JD Humanoid to canonical JD and deduplicates %s',
    (key) => {
      const saved = new Map([
        [key, JSON.stringify(['ez-robot-jd-humanoid', 'ez-robot-jd', 'ez-robot-six'])],
      ]);
      vi.stubGlobal('localStorage', {
        getItem: (name) => saved.get(name) || null,
        setItem: (name, value) => saved.set(name, value),
      });
      expect(loadArrayFromLocalStorage(key)).toEqual(['ez-robot-jd', 'ez-robot-six']);
      expect(JSON.parse(saved.get(key))).toEqual(['ez-robot-jd', 'ez-robot-six']);
    },
  );

  it('leaves unrelated stored arrays intact', () => {
    const setItem = vi.fn();
    vi.stubGlobal('localStorage', {
      getItem: () => JSON.stringify(['ameca-ameca', 'ameca-ameca']),
      setItem,
    });
    expect(loadArrayFromLocalStorage('other')).toEqual(['ameca-ameca', 'ameca-ameca']);
    expect(setItem).not.toHaveBeenCalled();
  });
});

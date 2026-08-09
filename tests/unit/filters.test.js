import { describe, expect, it } from 'vitest';
import {
  applyAdvancedRobotFilters,
  parseDurationHours,
  parseWeightKg,
} from '../../src/utils/robot-filters.js';
import { getPriceValue } from '../../src/utils/format.js';
import { translations } from '../../src/data/translations.js';
import { RECOMMENDED_PRIORITY } from '../../src/data/recommended-sort.js';

const robots = [
  { model: 'Atlas', weight: '196 lbs', batteryLife: '60 min', price: '150000 USD' },
  { model: 'Go1', weight: '12 kg', batteryLife: '1.5 hours', price: '~2700 USD' },
  { model: 'Pepper', weight: '28 kg', batteryLife: '12 hours', price: '20000 USD' },
  { model: 'Roomba', weight: '3400 g', batteryLife: '120 min', price: '500 USD' },
  { model: 'Sophia', weight: '50 kg', batteryLife: '8 hours', price: 'Not disclosed' },
];

describe('robot measurement parsing', () => {
  it.each([
    ['90 min', 1.5],
    ['2.5 hours', 2.5],
    ['1 day', 24],
  ])('normalizes duration %s to hours', (value, expected) => {
    expect(parseDurationHours(value)).toBe(expected);
  });

  it('normalizes grams and pounds to kilograms', () => {
    expect(parseWeightKg('3400 g')).toBe(3.4);
    expect(parseWeightKg('22 lbs')).toBeCloseTo(9.98, 1);
  });
});

describe('advanced robot filters', () => {
  it.each([
    ['light', ['Roomba']],
    ['medium', ['Go1', 'Pepper', 'Sophia']],
    ['heavy', ['Atlas']],
  ])('filters the %s weight range using normalized units', (filter, expected) => {
    expect(applyAdvancedRobotFilters(robots, { weight: filter }).map((r) => r.model)).toEqual(
      expected,
    );
  });

  it.each([
    ['short', ['Atlas', 'Go1']],
    ['medium', ['Roomba']],
    ['long', ['Pepper', 'Sophia']],
  ])('filters the %s battery range using normalized units', (filter, expected) => {
    expect(applyAdvancedRobotFilters(robots, { battery: filter }).map((r) => r.model)).toEqual(
      expected,
    );
  });

  it('combines filters without mutating the input array', () => {
    const result = applyAdvancedRobotFilters(robots, { weight: 'medium', battery: 'long' });
    expect(result.map((r) => r.model)).toEqual(['Pepper', 'Sophia']);
    expect(robots).toHaveLength(5);
  });
});

describe('price sorting', () => {
  it('sorts unknown prices last', () => {
    const sorted = [...robots].sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price));
    expect(sorted.at(0).model).toBe('Roomba');
    expect(sorted.at(-1).model).toBe('Sophia');
  });
});

describe('localized price filter labels', () => {
  it('uses the actual 5,000 and 50,000 USD boundaries in every language', () => {
    for (const [language, table] of Object.entries(translations)) {
      const normalized = [
        table['filters.price.low'],
        table['filters.price.medium'],
        table['filters.price.high'],
      ]
        .join(' ')
        .replace(/[.,\s]/g, '');

      expect(normalized, `${language} has stale price filter boundaries`).toContain('5000');
      expect(normalized, `${language} has stale price filter boundaries`).toContain('50000');
      expect(normalized, `${language} still exposes the old 1,000 USD boundary`).not.toMatch(
        /(^|\D)1000(\D|$)/,
      );
    }
  });
});

describe('recommended sort priority', () => {
  function getRecommendedRank(robot, priority) {
    const list = priority || RECOMMENDED_PRIORITY;
    const manufacturer = (robot.manufacturer || '').toLowerCase();
    const model = (robot.model || '').toLowerCase();
    const rank = list.findIndex((item) => {
      const itemManufacturer = item.manufacturer.toLowerCase();
      const itemModel = item.model?.toLowerCase();
      return manufacturer === itemManufacturer && (!itemModel || model === itemModel);
    });
    return rank === -1 ? Number.POSITIVE_INFINITY : rank;
  }

  it('places latest high-tech humanoids before older pinned recommendations', () => {
    const xiaoDi = { manufacturer: 'BYD', model: 'Xiao Di' };
    const panda = { manufacturer: 'UBTECH', model: 'Panda Robot (Youyou)' };
    const luna = { manufacturer: 'LimX Dynamics', model: 'Luna' };
    const friday = { manufacturer: 'Holiday Robotics', model: 'FRIDAY' };
    const igrisC = { manufacturer: 'ROBROS', model: 'IGRIS-C' };
    const neura = { manufacturer: 'Neura Robotics', model: 'B1' };

    const xiaoDiRank = getRecommendedRank(xiaoDi);
    const pandaRank = getRecommendedRank(panda);
    const lunaRank = getRecommendedRank(luna);
    const fridayRank = getRecommendedRank(friday);
    const igrisRank = getRecommendedRank(igrisC);
    const neuraRank = getRecommendedRank(neura);

    expect(xiaoDiRank).toBe(0);
    expect(pandaRank).toBeGreaterThan(xiaoDiRank);
    expect(lunaRank).toBeGreaterThan(pandaRank);
    expect(neuraRank).toBeGreaterThan(igrisRank);
  });

  it('sorts unmatched robots to the end', () => {
    const unknown = { manufacturer: 'Unknown Corp', model: 'X1' };
    const panda = { manufacturer: 'UBTECH', model: 'Panda Robot (Youyou)' };

    expect(getRecommendedRank(unknown)).toBe(Number.POSITIVE_INFINITY);
    expect(getRecommendedRank(panda)).toBeLessThan(getRecommendedRank(unknown));
  });

  it('matches manufacturer-only entries against any model', () => {
    const figureA = { manufacturer: 'Figure', model: 'Figure 01' };
    const figureB = { manufacturer: 'Figure', model: 'Figure 02' };

    expect(getRecommendedRank(figureA)).toBe(getRecommendedRank(figureB));
    expect(getRecommendedRank(figureA)).toBeLessThan(Number.POSITIVE_INFINITY);
  });

  it('prefers specific model entries over broad manufacturer matches', () => {
    const panda = { manufacturer: 'UBTECH', model: 'Panda Robot (Youyou)' };
    const genericUbt = { manufacturer: 'UBTECH', model: 'Other Model' };

    expect(getRecommendedRank(panda)).toBeLessThan(getRecommendedRank(genericUbt));
  });
});

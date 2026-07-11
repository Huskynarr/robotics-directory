import { describe, expect, it } from 'vitest';
import {
  applyAdvancedRobotFilters,
  parseDurationHours,
  parseWeightKg,
} from '../../src/utils/robot-filters.js';
import { getPriceValue } from '../../src/utils/format.js';

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

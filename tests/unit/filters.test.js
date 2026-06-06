import { describe, it, expect } from 'vitest';
import { getPriceValue } from '../../src/utils/format.js';

// Re-implement filter logic for testing (same logic as catalog.js)
function applyAdvancedFilters(robots, filters) {
  let result = [...robots];

  if (filters.weight) {
    result = result.filter(r => {
      const m = (r.weight || '').match(/(\d+(\.\d+)?)/);
      if (!m) return false;
      const w = parseFloat(m[0]);
      switch (filters.weight) {
        case 'light': return w < 10;
        case 'medium': return w >= 10 && w <= 50;
        case 'heavy': return w > 50;
        default: return true;
      }
    });
  }

  if (filters.battery) {
    result = result.filter(r => {
      const m = (r.batteryLife || '').match(/(\d+(\.\d+)?)/);
      if (!m) return false;
      const h = parseFloat(m[0]);
      switch (filters.battery) {
        case 'short': return h < 2;
        case 'medium': return h >= 2 && h <= 5;
        case 'long': return h > 5;
        default: return true;
      }
    });
  }

  return result;
}

const sampleRobots = [
  { model: 'Atlas', manufacturer: 'Boston Dynamics', weight: '89 kg', batteryLife: '1 hour', price: '150000 USD', category: 'humanoid' },
  { model: 'Go1', manufacturer: 'Unitree', weight: '12 kg', batteryLife: '1.5 hours', price: '~2700 USD', category: 'quadruped' },
  { model: 'Pepper', manufacturer: 'SoftBank', weight: '28 kg', batteryLife: '12 hours', price: '20000 USD', category: 'companion' },
  { model: 'Roomba', manufacturer: 'iRobot', weight: '3.4 kg', batteryLife: '2 hours', price: '500 USD', category: 'cleaning' },
  { model: 'Sophia', manufacturer: 'Hanson', weight: '50 kg', batteryLife: '8 hours', price: 'Not disclosed', category: 'humanoid' },
];

describe('Weight filter', () => {
  it('filters light robots (< 10kg)', () => {
    const result = applyAdvancedFilters(sampleRobots, { weight: 'light' });
    expect(result).toHaveLength(1);
    expect(result[0].model).toBe('Roomba');
  });

  it('filters medium robots (10-50kg)', () => {
    const result = applyAdvancedFilters(sampleRobots, { weight: 'medium' });
    expect(result).toHaveLength(3);
  });

  it('filters heavy robots (> 50kg)', () => {
    const result = applyAdvancedFilters(sampleRobots, { weight: 'heavy' });
    expect(result).toHaveLength(1);
    expect(result[0].model).toBe('Atlas');
  });
});

describe('Battery filter', () => {
  it('filters short battery (< 2h)', () => {
    const result = applyAdvancedFilters(sampleRobots, { battery: 'short' });
    expect(result).toHaveLength(2); // Atlas (1h), Go1 (1.5h)
  });

  it('filters medium battery (2-5h)', () => {
    const result = applyAdvancedFilters(sampleRobots, { battery: 'medium' });
    expect(result).toHaveLength(1); // Roomba (2h)
  });

  it('filters long battery (> 5h)', () => {
    const result = applyAdvancedFilters(sampleRobots, { battery: 'long' });
    expect(result).toHaveLength(2); // Pepper (12h), Sophia (8h)
  });
});

describe('Price sorting', () => {
  it('sorts by price value', () => {
    const sorted = [...sampleRobots].sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price));
    expect(sorted[0].model).toBe('Roomba');
    expect(sorted[sorted.length - 1].model).toBe('Sophia'); // Not disclosed = Infinity
  });
});

describe('Combined filters', () => {
  it('applies multiple filters', () => {
    const result = applyAdvancedFilters(sampleRobots, { weight: 'medium', battery: 'long' });
    expect(result).toHaveLength(2); // Pepper (28kg, 12h) and Sophia (50kg, 8h)
    const models = result.map(r => r.model);
    expect(models).toContain('Pepper');
    expect(models).toContain('Sophia');
  });
});

import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
const all = getAllRobots().allRobots;
const robot = (id) => all.find((r) => r.id === `fdata-robot-${id}`);
const review = (id) => getSpecificationReview(`fdata-robot-${id}`);
const text = (id) => getProductInsights(`fdata-robot-${id}`).highlights.join(' ');

describe('Fdata configuration, sensor and unit boundaries', () => {
  it('adds four explicitly named models without promoting redirect-only labels', () => {
    expect(all.filter((r) => r.manufacturer === 'Fdata Robot')).toHaveLength(14);
    for (const id of ['a012-mini', 'a005', 'a006', 'a010']) expect(robot(id)).toBeDefined();
    for (const id of ['a004', 'a008', 'a009']) expect(robot(id)).toBeUndefined();
  });
  it('links the smaller workbook-only Mini to the existing A012 family', () => {
    expect(robot('a012-mini').payload).toBe('30 kg');
    expect(robot('a012-mini').weight).toBe('38 kg');
    expect(robot('a012-mini').size).toBe('500 x 465 x 285 mm');
    expect(review('a012-mini').sources[0].url).toMatch(/A012-Series.*xlsx$/);
    const families = JSON.parse(
      fs.readFileSync('data/competitors/model-resolutions.json'),
    ).resolutions;
    const family = families.find((r) => r.brand === 'Fdata Robot' && r.model === 'A012 Series');
    expect(family.catalogModels).toHaveLength(5);
    expect(family.catalogModels).toContain('A012 Mini');
  });
  it('retains legacy payload disagreements without replacing exact named table values', () => {
    for (const [id, current, legacy] of [
      ['a012', '60 kg', '50 kg'],
      ['a012-plus', '100 kg', '80 kg'],
    ]) {
      expect(robot(id).payload).toBe(current);
      expect(review(id).fields.payload.status).toBe('conflicting');
      expect(review(id).fields.payload.note).toContain(legacy);
      expect(review(id).fields.payload.note).toContain('No reviewed revision mapping');
    }
  });
  it('does not inherit optional horizontal movement or the Plus passage claim', () => {
    expect(robot('a012-omni').driveMode).toContain('horizontal movement listed');
    expect(robot('a012-plus').driveMode).toBe('4WD-4WS');
    expect(robot('a012-plus').size).toContain('700');
    expect(text('a012-plus')).toContain('Passage geometry is unresolved');
    expect(robot('a012-pro').payload).toBe('80 kg');
    expect(robot('a012-pro').speed).toBe('Up to 7.2 km/h');
  });
  it('separates A011/A020 runtime claims from pack capacity and recharge duration', () => {
    expect(robot('a011').batteryLife).toBe('8 h; workload not stated');
    expect(robot('a011').maxRuntime).toBe('');
    expect(robot('a020').batteryLife).toContain('40 Ah or 70 Ah');
    expect(robot('a020').maxRuntime).toBe('');
    expect(robot('a020').weight).toBe('');
    for (const id of ['a011', 'a020']) expect(robot(id).chargingTime).toBe('');
  });
  it('keeps A025 sensor columns distinct from shared physical specifications', () => {
    for (const id of ['a025r', 'a025f', 'a025n']) {
      expect(robot(id).size).toBe('2000 x 1300 x 590 mm');
      expect(robot(id).weight).toBe('400 kg');
      expect(robot(id).batteryLife).toBe('8-10 h; workload not stated');
      expect(robot(id).maxRuntime).toBe('');
    }
    expect(text('a025r')).toContain('No mapping-area');
    expect(text('a025f')).toContain('F column checks 2D LiDAR, IMU and ultrasonics');
    expect(text('a025n')).toContain('2D LiDAR is a dash');
  });
  it('retains full-load terrain and tire-assembly clearance scope on A026', () => {
    expect(robot('a026').weight).toBe('450 kg');
    expect(robot('a026').terrain).toBe('Up to 10° climbing and 100 mm obstacle at full load');
    expect(robot('a026').ipRating).toBe('IP65');
    expect(text('a026')).toContain('130 mm tire-assembly clearance');
    expect(text('a026')).toContain('noise below 80 dB is explicitly estimated');
    expect(robot('a026').batteryLife).toBe('');
    expect(robot('a026').chargingTime).toBe('');
  });
  it('keeps kilometre and unitless battery-life values out of hourly fields', () => {
    expect(robot('a005').chargingTime).toBe('4 h');
    expect(robot('a005').batteryLife).toBe('');
    expect(robot('a006').batteryLife).toBe('');
    expect(robot('a006').maxRuntime).toBe('');
    expect(text('a006')).toContain('battery-life header has no time unit');
    expect(text('a005')).toContain('Unloaded limits are 20 degrees and 90 mm');
  });
  it('does not treat steering accuracy, temperature or turn indicators as navigation/IP ratings', () => {
    for (const id of ['a005', 'a006', 'a010']) {
      expect(robot(id).navigationAccuracy).toBe('');
      expect(robot(id).dockingAccuracy).toBe('');
      expect(robot(id).ipRating).toBe('');
      expect(review(id).fields.navigationAccuracy.status).toBe('not-documented');
    }
    expect(robot('a010').speed).toBe('');
    expect(robot('a010').payload).toBe('80 kg');
  });
  it('qualifies secondary-domain hardware and current availability at company level', () => {
    const brand = getAllBrands().find((b) => b.id === 'fdata-robot');
    const focus = getCompanyInsights(brand).primary;
    expect(focus.highlights.join(' ')).toContain(
      'orderability, stock and version history are not certified',
    );
    expect(focus.highlights.join(' ')).toContain('A redirect is not proof of equal hardware');
    for (const r of all.filter((r) => r.manufacturer === 'Fdata Robot')) {
      expect(r.price).toBe('Not disclosed');
      expect(r.releaseDate).toBe('');
    }
  });
});

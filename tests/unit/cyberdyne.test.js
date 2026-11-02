import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { CATEGORIES } from '../../src/data/categories.js';
import { matchesSubcategoryFilter } from '../../src/data/subcategory-filters.js';
import { getStructuredOffer } from '../../src/utils/format.js';
import { t } from '../../src/data/translations.js';
const all = getAllRobots().allRobots;
const robot = (model) => all.find((r) => r.manufacturer === 'Cyberdyne' && r.model === model);
const fields = (r) => getSpecificationReview(r.id).fields;
const highlights = (r) => getProductInsights(r.id).highlights.join(' ');

describe('Cyberdyne model and configuration evidence', () => {
  it('keeps medical and well-being single/double-leg mass mappings separate', () => {
    for (const family of ['ML', 'FL'])
      for (const [suffix, double, single] of [
        ['08', '13', '9'],
        ['07', '9.5', '6.5'],
        ['05', '14', '9'],
      ]) {
        const r = robot('HAL-' + family + suffix);
        expect(r.weight).toContain(double + ' kg double leg / ' + single + ' kg single leg');
        expect(r.weight).toContain('batteries included');
        expect(r.payload).toBe('');
      }
  });
  it('does not use wearer height or age as device dimensions', () => {
    const r = robot('HAL-ML07');
    expect(r.size).toContain('H930 × W400 × D400 mm');
    expect(r.size).toContain('minimum adjustment with 26 cm sensor shoes');
    expect(r.ageRange).toBe('');
    expect(fields(r).payload.note).toContain('15–50 kg');
    expect(highlights(r)).toContain('100–150 cm');
  });
  it('retains FL05 X-size height without extending the medical fitting range', () => {
    expect(highlights(robot('HAL-FL05'))).toContain('X 180–200 cm');
    expect(highlights(robot('HAL-ML05'))).toContain('150–190 cm');
    expect(robot('HAL-ML05').size).toContain('S size:');
    expect(highlights(robot('HAL-ML05'))).not.toContain('EU summary');
  });
  it('keeps single-joint measurements limited to worn parts', () => {
    for (const name of ['Medical HAL Single Joint', 'Well-being HAL Single Joint']) {
      const r = robot(name);
      expect(r.weight).toContain('excludes control device and battery');
      expect(r.size).toContain('Worn components only');
      expect(r.maxRuntime).toContain('120 min');
      expect(r.chargingTime).toBe('');
      expect(r.dof).toBe('');
    }
    expect(highlights(robot('Medical HAL Single Joint'))).toContain(
      'ankle and shoulder training attachments are optional',
    );
  });
  it('keeps BB04 shared mass and size columns without borrowing runtime', () => {
    const r = robot('HAL Lumbar Type for Well-being (BB04)');
    expect(r.weight).toContain('3.1 kg including battery');
    expect(r.size).toContain('XS 230 × 396 × 509 mm');
    expect(r.size).toContain('M 292 × 510 × 602 mm');
    expect(r.ipRating).toContain('IP54');
    for (const key of ['batteryLife', 'maxRuntime', 'chargingTime']) expect(r[key]).toBe('');
  });
  it('keeps LB06 and LB03 regional-page generations apart', () => {
    const current = robot('HAL-LB06');
    const other = robot('HAL-LB03-SSSJP');
    expect(current.weight).toContain('2.7 kg');
    expect(current.weight).toContain('battery inclusion not stated');
    expect(current.maxRuntime).toContain('10 h');
    expect(current.chargingTime).toContain('3 h');
    expect(other.weight).toContain('3.1 kg including battery');
    expect(other.maxRuntime).toContain('4.5 h');
    expect(other.chargingTime).toContain('2 h');
    expect(fields(current).weight.status).toBe('documented');
    expect(fields(other).weight.status).toBe('documented');
  });
  it('does not inherit a protection code or specifications for referenced LB01', () => {
    const r = robot('HAL-LB01');
    for (const key of ['weight', 'size', 'ipRating', 'batteryLife', 'maxRuntime', 'chargingTime'])
      expect(r[key]).toBe('');
    expect(fields(r).ipRating.note).toContain('no numeric IP code');
    expect(r.description).toMatch(/no current sale status/i);
  });
  it('keeps per-charge cleaning coverage and optional-unit dimensions scoped', () => {
    const r = robot('CL02');
    expect(r.category).toBe('cleaning');
    expect(r.size).toContain('height 970 mm with optional disinfection unit');
    for (const key of ['areaRate', 'workingWidth', 'waterTankCapacity', 'payload'])
      expect(r[key]).toBe('');
    expect(highlights(r)).toContain('3000 m² per battery charge');
    expect(fields(r).areaRate.note).toContain('Do not divide');
  });
  it('keeps onboard cargo distinct from towing and robot mass', () => {
    const r = robot('Transportation Robot');
    expect(r.weight).toContain('25 kg including battery');
    expect(r.payload).toContain('200 kg onboard load');
    expect(r.speed).toContain('30 m/min');
    expect(r.transportPayload).toBe('');
    expect(r.description).toContain('availability to Japan');
  });
  it('keeps robotic gait support belt speed separate from mobile travel and lift height', () => {
    const r = robot('Medicalcare Pit (HPD-BT04-JP)');
    expect(r.weight).toContain('130 kg');
    expect(r.size).toContain('L2040 × W860 × H2395 mm');
    expect(r.speed).toContain('Treadmill belt range 0.2–8.0 km/h');
    for (const key of ['payload', 'batteryLife', 'maxRuntime', 'maxLiftHeight'])
      expect(r[key]).toBe('');
    expect(highlights(r)).toContain('120 kg maximum body-mass statement includes HAL');
    expect(highlights(r)).toContain('110 mm step-up height is not hoist travel');
  });
  it('offers a workplace filter without labelling labor-support HAL as medical', () => {
    const sub = CATEGORIES.find((c) => c.id === 'commercial').subcategories.find(
      (s) => s.id === 'commercial-workplace',
    );
    for (const model of ['HAL-LB06', 'HAL-LB03-SSSJP', 'HAL-LB01']) {
      const r = robot(model);
      expect(matchesSubcategoryFilter(r, sub.filter)).toBe(true);
      expect(r.tagsArray).not.toContain('medical');
    }
    expect(matchesSubcategoryFilter(robot('HAL-ML08'), sub.filter)).toBe(false);
    expect(t(sub.i18nKey, 'en')).toBe('Workplace Assistance');
    expect(t(sub.i18nKey, 'de')).toBe('Arbeitsunterstützung');
  });
  it('does not invent prices, release years or independently verified treatment outcomes', () => {
    const selected = all.filter((r) => r.manufacturer === 'Cyberdyne');
    expect(selected).toHaveLength(15);
    for (const r of selected) {
      expect(getStructuredOffer(r.price)).toBeNull();
      expect(r.releaseDate).toBe('');
      expect(r.handType).toBe('');
      expect(r.dof).toBe('');
      expect(highlights(r)).not.toMatch(/FDA approved|cures|prevents injury/i);
    }
  });
});

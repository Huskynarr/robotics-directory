import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getStructuredOffer } from '../../src/utils/format.js';
const robots = getAllRobots().allRobots;
const find = (manufacturer, model) =>
  robots.find((r) => r.manufacturer === manufacturer && r.model === model);
const g = (model) => find('GreyOrange', model);
const k = (model) => find('KUKA', model);
const review = (r) => getSpecificationReview(r.id);
const highlights = (r) => getProductInsights(r.id).highlights.join(' ');
describe('GreyOrange named AMR configurations and orchestration roles', () => {
  it('preserves own load, loaded speed and pickup conditions without inheriting XXL geometry', () => {
    expect(g('Ranger Uplift-L').payload).toContain('1000 kg');
    expect(g('Ranger Forklift Elevate').payload).toContain('1400 kg');
    expect(g('Ranger Forklift AnyPallet').payload).toContain('2000 kg');
    expect(g('Ranger Forklift XXL').payload).toContain('2500 kg');
    expect(g('Ranger Forklift Elevate').description).toContain(
      'Closed-pallet pickup from elevated positions',
    );
    expect(g('Ranger Forklift AnyPallet').description).toContain(
      'Ground-level handling of both closed and open pallets',
    );
    expect(g('Ranger Forklift XXL').speed).toBe('1.4 m/s loaded; 1.7 m/s unloaded');
    expect(highlights(g('Ranger Forklift XXL'))).toContain(
      '2450 mm fork length is horizontal geometry',
    );
  });
  it('retains the Uplift metric/imperial length conflict without converting it into aisle clearance', () => {
    const r = g('Ranger Uplift-L');
    expect(r.size).toContain('1280 x 920 x 350 mm');
    expect(r.size).toContain('51.2 x 36.2 x 13.8 in');
    expect(review(r).fields.size.status).toBe('conflicting');
    expect(highlights(r)).toContain('1300.48 mm, not 1280 mm');
    for (const model of [
      'Ranger Uplift-L',
      'Ranger Forklift Elevate',
      'Ranger Forklift AnyPallet',
      'Ranger Forklift XXL',
    ]) {
      const r = g(model);
      for (const key of [
        'weight',
        'batteryLife',
        'maxRuntime',
        'chargingTime',
        'minAisleWidth',
        'turningRadius',
        'liftStroke',
        'maxLiftHeight',
      ])
        expect(r[key]).toBe('');
      expect(highlights(r)).toContain('not this individual robot throughput');
      expect(highlights(r)).toContain('third-party vendors');
    }
  });
});
describe('KUKA named cobot variants and standard-only technical values', () => {
  it('keeps seven-axis iiwa masses and repeatability paired to their exact standard models', () => {
    expect(k('LBR iiwa 7 R800').weight).toContain('23.9 kg');
    expect(k('LBR iiwa 14 R820').weight).toContain('29.9 kg');
    expect(k('LBR iiwa 7 R800').armRepeatability).toContain('±0.1 mm');
    expect(k('LBR iiwa 14 R820').armRepeatability).toContain('±0.15 mm');
    expect(k('LBR iiwa 7 R800').armReach).toBe('800 mm maximum reach');
    expect(k('LBR iiwa 14 R820').armReach).toBe('820 mm maximum reach');
    expect(k('LBR iiwa 7 R800').dof).toContain('7 axes');
  });
  it('does not assign standard mass/repeatability or wall/ceiling mounting to iiwa CR variants', () => {
    for (const model of ['LBR iiwa 7 R800 CR', 'LBR iiwa 14 R820 CR']) {
      const r = k(model);
      expect(r.weight).toBe('');
      expect(r.armRepeatability).toBe('');
      expect(r.terrain).toContain('Floor only');
      expect(r.ipRating).toBe('IP54');
      expect(review(r).fields.weight.status).toBe('not-documented');
      expect(review(r).fields.armRepeatability.note).toContain('CR-specific');
    }
  });
  it('keeps the 3kg iisy IP30 rating separate from larger IP54 six-axis models', () => {
    expect(k('LBR iisy 3 R760').ipRating).toBe('IP30');
    expect(k('LBR iisy 3 R760').weight).toContain('22.8 kg');
    expect(k('LBR iisy 3 R760').armRepeatability).toContain('±0.1 mm');
    for (const [model, mass, reach] of [
      ['LBR iisy 6 R1300', '46.3', '1300'],
      ['LBR iisy 8 R930', '43.2', '930'],
      ['LBR iisy 11 R1300', '46.3', '1300'],
      ['LBR iisy 15 R930', '43.2', '930'],
    ]) {
      const r = k(model);
      expect(r.ipRating).toBe('IP54');
      expect(r.weight).toContain(mass + ' kg');
      expect(r.armReach).toBe(reach + ' mm maximum reach');
      expect(r.armRepeatability).toContain('±0.05 mm');
      expect(r.dof).toContain('6 axes');
      expect(r.description).toContain('KR C5 micro-2');
    }
  });
  it('adds the two named iisy CR identities without copying standard mass or repeatability', () => {
    for (const model of ['LBR iisy 11 R1300 CR', 'LBR iisy 15 R930 CR']) {
      const r = k(model);
      expect(r).toBeDefined();
      expect(r.weight).toBe('');
      expect(r.armRepeatability).toBe('');
      expect(r.terrain).toContain('angle, ceiling, floor and wall');
      expect(r.description).toContain('iiQKA.OS2');
    }
  });
  it('does not turn arm reach, torque accuracy or optional tooling into size, linear speed or included hand', () => {
    for (const r of robots.filter((r) => r.manufacturer === 'KUKA')) {
      expect(r.size).toBe('');
      expect(r.speed).toBe('');
      expect(r.handType).toBe('');
      expect(r.batteryLife).toBe('');
      expect(r.releaseDate).toBe('');
      expect(getStructuredOffer(r.price)).toBeNull();
      expect(highlights(r)).toMatch(/manufacturer|Manufacturer/);
    }
  });
  it('connects canonical company focuses to the verified model inventories', () => {
    for (const [id, count] of [
      ['greyorange', 4],
      ['kuka', 11],
    ]) {
      const brand = getAllBrands().find((b) => b.id === id);
      expect(brand.robots).toHaveLength(count);
      expect(getCompanyInsights(brand).primary.highlights.length).toBeGreaterThan(3);
    }
  });
});

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
const v = (model) => find('VideoRay', model);
const s = (model) => find('Standard Bots', model);
const review = (r) => getSpecificationReview(r.id);
const highlights = (r) => getProductInsights(r.id).highlights.join(' ');
describe('VideoRay underwater model and configuration boundaries', () => {
  it('keeps controlled motion axes separate from thruster and IMU counts', () => {
    for (const [model, axes] of [
      ['Pro 5', 3],
      ['Ally', 4],
      ['Defender', 6],
      ['Wraith', 6],
    ]) {
      expect(v(model).dof).toContain(axes + ' controlled motion DOF');
      expect(highlights(v(model))).toContain('9 DOF AHRS');
    }
  });
  it('retains explicitly labelled launch years rather than data-sheet revision years', () => {
    for (const [model, year] of [
      ['Defender', '2017'],
      ['Pro 5', '2019'],
      ['Ally', '2024'],
      ['Wraith', '2025'],
    ]) {
      expect(v(model).releaseDate).toBe(year);
      expect(review(v(model)).fields.releaseDate.note).toContain('explicitly labels RELEASE YEAR');
      expect(review(v(model)).sources[0].url).toContain('/download/147/');
    }
  });
  it('exposes Pro 5 mass depth and speed-inequality conflicts', () => {
    expect(v('Pro 5').weight).toContain('11.8 kg');
    expect(v('Pro 5').weight).toContain('10 kg');
    expect(v('Pro 5').depthRating).toContain('300 m');
    expect(v('Pro 5').depthRating).toContain('305 m');
    for (const key of ['weight', 'depthRating', 'speed'])
      expect(review(v('Pro 5')).fields[key].status).toBe('conflicting');
    expect(v('Pro 5').speed).toContain('over 4.4 knots');
  });
  it('keeps piloting manipulator load separate from tether retrieval and thrust', () => {
    for (const [model, lift] of [
      ['Pro 5', '1.4'],
      ['Ally', '10.0'],
      ['Defender', '9.5'],
      ['Wraith', '36.3'],
    ]) {
      expect(v(model).payload).toContain(lift + ' kg maximum piloting lift / manipulator payload');
      expect(highlights(v(model))).toContain('tether retrieval is not free-swimming payload');
      expect(v(model).handType).toBe('');
    }
    expect(v('Defender').depthRating).toContain('300 m standard; 1000 m and 4000 m');
    expect(v('Wraith').depthRating).toBe('1000 m standard');
  });
  it('keeps Wraith speed definitions and controller protection separate from endurance', () => {
    const r = v('Wraith');
    expect(r.speed).toContain('4.3 knots');
    expect(r.speed).toContain('4.2 knots');
    expect(review(r).fields.speed.status).toBe('conflicting');
    expect(highlights(r)).toContain('IP65 applies to controller/console');
    expect(highlights(r)).toContain('Neither establishes two-hour runtime');
    for (const key of ['batteryLife', 'maxRuntime', 'chargingTime', 'ipRating'])
      expect(r[key]).toBe('');
  });
  it('keeps Ally battery unavailability and package equipment explicit without duplicate models', () => {
    expect(highlights(v('Ally'))).toContain('subsea battery not currently available');
    expect(highlights(v('Ally'))).toContain('180 degrees');
    expect(highlights(v('Ally'))).toContain('200 degrees');
    expect(highlights(v('Ally'))).toContain('Premium 74953 adds manipulator');
    expect(robots.filter((r) => r.manufacturer === 'VideoRay')).toHaveLength(4);
  });
});
describe('Standard Bots exact arm specifications and roadmap boundaries', () => {
  it('keeps model mass payload and stated pose repeatability paired', () => {
    for (const [model, mass, load] of [
      ['Spark', '21', '7'],
      ['Core', '32.5', '18'],
      ['Thor', '79', '30'],
    ]) {
      expect(s(model).weight).toContain(mass + ' kg arm');
      expect(s(model).payload).toContain(load + ' kg');
      expect(s(model).armRepeatability).toContain('±0.025 mm');
      expect(s(model).size).toBe('');
      expect(s(model).handType).toBe('');
    }
  });
  it('exposes Spark and Thor reach conflicts without silently correcting source units', () => {
    expect(s('Spark').armReach).toContain('950 mm');
    expect(s('Spark').armReach).toContain('900 mm');
    expect(s('Thor').armReach).toContain('2000 mm');
    expect(s('Thor').armReach).toContain('2 mm (78.7 in)');
    for (const model of ['Spark', 'Thor'])
      expect(review(s(model)).fields.armReach.status).toBe('conflicting');
    expect(s('Core').armReach).toBe('1.3 m');
  });
  it('does not inherit competitor speeds or treat an elapsed Spark deadline as released', () => {
    expect(s('Spark').speed).toBe('Coming Q2 2026; no numeric linear speed specified');
    expect(review(s('Spark')).fields.speed.status).toBe('roadmap');
    expect(s('Core').speed).toBe('Up to 3 m/s tool linear speed');
    expect(s('Thor').speed).toContain('not a full-load collaborative-speed guarantee');
    expect(s('Thor').payload).toContain('collaborative speeds');
    expect(s('Core').ipRating).toBe('');
    for (const model of ['Spark', 'Thor']) expect(s(model).ipRating).toContain('design rating');
  });
  it('keeps local operation conditions and dollar price limitations without a structured Offer', () => {
    for (const [model, price] of [
      ['Spark', '29,500'],
      ['Core', '39,500'],
      ['Thor', '49,500'],
    ]) {
      const r = s(model);
      expect(r.price).toContain('$' + price);
      expect(r.price).toContain('currency unspecified');
      expect(getStructuredOffer(r.price)).toBeNull();
      expect(highlights(r)).toContain('beta features may not work offline');
      for (const key of ['batteryLife', 'chargingTime', 'releaseDate']) expect(r[key]).toBe('');
    }
  });
  it('keeps Bolt planned motion and coverage separate from autonomy availability and endurance', () => {
    const r = s('Bolt');
    expect(r.speed).toContain('Planned mobile-base');
    expect(review(r).fields.speed.status).toBe('roadmap');
    expect(r.description).toContain('Fully autonomous navigation remains marked coming soon');
    expect(highlights(r)).toContain('not arm reach');
    expect(highlights(r)).toContain('not document 24 hours on a single charge');
    for (const key of [
      'armReach',
      'size',
      'dof',
      'payload',
      'handType',
      'batteryLife',
      'maxRuntime',
      'chargingTime',
      'releaseDate',
    ])
      expect(r[key]).toBe('');
  });
  it('connects canonical company focuses to unchanged model inventories', () => {
    for (const [id, count] of [
      ['videoray', 4],
      ['standard-bots', 4],
    ]) {
      const brand = getAllBrands().find((b) => b.id === id);
      expect(brand.robots).toHaveLength(count);
      expect(getCompanyInsights(brand).primary.highlights).toHaveLength(5);
    }
  });
});

import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
const all = getAllRobots().allRobots;
const robot = (id) => all.find((r) => r.id === `robotize-gopal-${id}`);
const review = (id) => getSpecificationReview(`robotize-gopal-${id}`);
const text = (id) => getProductInsights(`robotize-gopal-${id}`).highlights.join(' ');
const current = ['e22', 'e24', 'e24w', 'u22w', 'u24w', 'p35'];

describe('Robotize exact model blocks, brochure columns and historical boundaries', () => {
  it('represents six current models plus separately named historical GoPal 400', () => {
    expect(all.filter((r) => r.manufacturer === 'Robotize')).toHaveLength(7);
    expect(robot('400').releaseDate).toBe('2017');
    expect(text('400')).toContain('December 2017');
    expect(robot('400').website).toBe('https://robotize.com/about');
    for (const id of current) expect(robot(id).releaseDate).toBe('');
  });
  it('does not interpret historical model number 400 as payload or inherit present-day specifications', () => {
    for (const key of [
      'payload',
      'weight',
      'size',
      'batteryLife',
      'speed',
      'terrain',
      'chargingTime',
      'driveMode',
      'minAisleWidth',
      'turningRadius',
    ]) {
      expect(robot('400')[key]).toBe('');
      expect(review('400').fields[key].status).toBe('not-documented');
    }
  });
  it('selects named wide-model dimensions and masses while preserving repeated summary disagreements', () => {
    for (const [id, mass] of [
      ['e24w', '215 kg'],
      ['u22w', '242 kg'],
      ['u24w', '242 kg'],
    ]) {
      expect(robot(id).weight).toBe(mass);
      expect(robot(id).size).toBe('1400 x 1060 x 340 mm');
      for (const key of ['weight', 'size', 'speed'])
        expect(review(id).fields[key].status).toBe('conflicting');
      expect(review(id).fields.weight.note).toContain('187 kg summary');
    }
    expect(review('e22').fields.weight.status).toBe('documented');
    expect(review('e24').fields.weight.status).toBe('documented');
  });
  it('retains load envelope and pallet-inclusive U24W limits without confusing load height with robot height', () => {
    expect(robot('e22').payload).toBe('500 kg');
    expect(robot('e24').payload).toBe('1000 kg');
    expect(robot('e24w').payload).toBe('1200 kg');
    expect(robot('u24w').payload).toBe('1200 kg including pallet');
    for (const id of ['e24', 'e24w', 'u24w'])
      expect(review(id).fields.payload.status).toBe('conflicting');
    expect(review('u22w').fields.payload.status).toBe('documented');
    expect(robot('u24w').maxLiftHeight).toBe('');
    expect(text('u24w')).toContain('2400 mm is not robot body height');
  });
  it('keeps P35 module-inclusive capacity and all conflicting page values explicit', () => {
    expect(robot('p35').payload).toBe(
      '300 kg including top module; configuration-specific higher loads require confirmation',
    );
    expect(review('p35').fields.payload.status).toBe('conflicting');
    for (const value of ['250 kg', '300 kg', '500 kg'])
      expect(review('p35').fields.payload.note).toContain(value);
    expect(robot('p35').weight).toBe('120 kg');
    expect(robot('p35').size).toBe('960 x 660 x 295 mm');
    expect(text('p35')).toContain('505 x 790 x 258 mm');
  });
  it('keeps physical docking and inductive charging with different charge-window conflicts', () => {
    for (const id of current.filter((id) => id !== 'p35')) {
      expect(robot(id).chargingTime).toBe('45 min; full-charge versus 30%–95% source conflict');
      expect(review(id).fields.chargingTime.status).toBe('conflicting');
      expect(text(id)).toContain('48 V LiFePO4');
      expect(text(id)).toContain('physical automatic charging dock');
    }
    expect(robot('p35').chargingTime).toBe('45 min from 30% to 95%; brochure lists 55 min');
    expect(text('p35')).toContain('primary inductive charging and emergency USB-C');
  });
  it('does not convert fleet-level 24/7 operation or charge cycles into per-charge runtime', () => {
    for (const id of current) {
      expect(robot(id).batteryLife).toBe(
        id === 'p35' ? '8–14 h depending on load' : '6–14 h depending on load',
      );
      expect(robot(id).maxRuntime).toBe('');
      expect(review(id).fields.maxRuntime.note).toContain('24/7/365');
    }
    expect(review('p35').fields.batteryLife.status).toBe('conflicting');
  });
  it('keeps radius/diameter labels qualified and never silently halves brochure values', () => {
    for (const id of current) expect(review(id).fields.turningRadius.status).toBe('conflicting');
    expect(robot('e22').turningRadius).toContain('page labels diameter; brochure 1900 mm diameter');
    expect(robot('u22w').turningRadius).toContain(
      'page labels diameter; brochure 2000 mm diameter',
    );
    expect(robot('p35').turningRadius).toContain(
      '660 mm from robot center; brochure 1300 mm rotation diameter',
    );
    expect(review('p35').fields.turningRadius.note).toContain('3.3 ft versus 4.27 ft');
  });
  it('separates bare-platform aisle, two-way width and doorway limits', () => {
    expect(robot('e22').minAisleWidth).toBe('1200 mm minimum; 2500 mm minimum two-way');
    expect(robot('e24w').minAisleWidth).toBe('1400 mm minimum; 2900 mm minimum two-way');
    expect(review('p35').fields.minAisleWidth.status).toBe('conflicting');
    expect(robot('p35').minAisleWidth).toContain('bare AMR');
    expect(review('p35').fields.minAisleWidth.note).toContain('760 mm passage');
    expect(review('p35').fields.minAisleWidth.note).toContain('900 mm doorway');
  });
  it('keeps percentage gradients, floor-edge limits and exact brochure drive types', () => {
    for (const id of current) {
      expect(robot(id).terrain).toContain('gradient ±2%');
      expect(robot(id).terrain).not.toContain('2°');
      expect(robot(id).driveMode).toBe('Differential drive');
      for (const key of [
        'ipRating',
        'navigationAccuracy',
        'dockingAccuracy',
        'liftStroke',
        'maxLiftHeight',
      ])
        expect(robot(id)[key]).toBe('');
    }
    expect(robot('p35').terrain).toContain('edge 2 mm');
    expect(robot('e22').terrain).toContain('edge 4 mm');
    expect(robot('u24w').terrain).toContain('edge 3 mm');
  });
  it('keeps stations, partner attachments and GoControl out of the hardware-model count', () => {
    const brand = getAllBrands().find((b) => b.id === 'robotize');
    const focus = getCompanyInsights(brand).primary.highlights.join(' ');
    expect(focus).toContain('GoControl prioritizes transport jobs');
    expect(focus).toContain('1500 kg conveyor-station ratings are not onboard AMR ratings');
    for (const r of all.filter((r) => r.manufacturer === 'Robotize')) {
      expect(r.model).toMatch(/^GoPal (E22|E24|E24W|U22W|U24W|P35|400)$/);
      expect(r.price).toBe('Not disclosed');
    }
  });
});

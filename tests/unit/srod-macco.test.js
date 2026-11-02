import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getStructuredOffer } from '../../src/utils/format.js';

const robots = getAllRobots().allRobots;
const s = (model) =>
  robots.find(
    (r) => r.manufacturer === 'Shenzhen SROD Industrial Group Co., Ltd.' && r.model === model,
  );
const m = (model) => robots.find((r) => r.manufacturer === 'Macco Robotics' && r.model === model);
const review = (r) => getSpecificationReview(r.id);
const high = (r) => getProductInsights(r.id).highlights.join(' ');

describe('SROD component and configuration boundaries', () => {
  it('preserves T200 own-source mass conflict and expansion conditions apart from winch', () => {
    const r = s('T200');
    expect(r.weight).toContain('70 kg');
    expect(r.weight).toContain('75 kg');
    expect(review(r).fields.weight.status).toBe('conflicting');
    expect(r.size).toContain('115 kg');
    expect(r.terrain).toContain('DN600 mm and above require');
    expect(r.batteryLife).toBe('');
    expect(r.armReach).toBe('');
  });
  it('keeps S100C wheel-qualified mass and camera lift separate from cargo lift and axes', () => {
    expect(s('S100C MINI').weight).toBe('4.5 kg with 70 mm wheels');
    expect(s('S100C MINI').liftStroke).toContain('Camera elevator up to 50 mm');
    expect(s('S100C MINI').payload).toBe('');
    expect(s('S100C MINI').dof).toBe('');
    expect(s('S100C MINI').navigationAccuracy).toBe('');
  });
  it('does not import reel batteries and reel mass as long-distance crawler specifications', () => {
    for (const model of ['S190DHD', 'S300EHD', 'S200CHD', 'S150A', 'S150AF', 'S300YL', 'S300Y']) {
      expect(s(model).weight).toBe('');
      expect(s(model).batteryLife).toBe('');
      expect(s(model).navigationAccuracy).toBe('');
      expect(s(model).dof).toBe('');
    }
    expect(high(s('S300YL'))).toContain('125 kg winding vehicle');
    expect(s('S300YL').liftStroke).toContain('600 mm');
    expect(s('S300Y').driveMode).toContain('2 x 80 W');
  });
  it('keeps motor-row load separate from robot mass and duplicate application routes', () => {
    expect(s('S190DHD').payload).toContain('65 kg');
    expect(s('S150AF').payload).toContain('Not less than 50 kg');
    for (const model of ['S150A', 'S190DHD', 'S150AF']) {
      expect(
        robots.filter((r) => r.manufacturer === s(model).manufacturer && r.model === model),
      ).toHaveLength(1);
      expect(review(s(model)).sources).toHaveLength(2);
      expect(high(s(model))).toContain('identical technical parameter block');
    }
  });
  it('separates D800F support equipment terminal battery traction pump flow and hazardous-area options', () => {
    const r = s('D800F');
    expect(r.weight).toContain('650 kg robot body');
    expect(r.weight).toContain('2500 kg');
    expect(r.batteryLife).toBe('');
    expect(r.payload).toBe('');
    expect(r.depthRating).toContain('20 m');
    expect(r.throughput).toContain('no simultaneous duty-point guarantee');
    expect(high(r)).toContain('Remote terminal battery of at least 12 h');
    expect(r.terrain).toContain('non-explosion-proof');
    expect(s('D600D').throughput).toBe('');
  });
  it('retains F100 battery exclusion localization claim and future camera upgrade without invented speed', () => {
    const r = s('F100');
    expect(r.weight).toContain('excluding battery');
    expect(r.batteryLife).toContain('at least 4 h');
    expect(r.navigationAccuracy).toContain('10-30 cm per 100 m');
    expect(r.throughput).toContain('100 m blade in 5 min');
    expect(r.speed).toBe('');
    expect(r.ipRating).toBe('');
    expect(high(r)).toContain('subsequent software upgrade');
  });
  it('keeps S70 external power and S450A pull/system battery scope distinct from onboard endurance and mass', () => {
    expect(s('S70').batteryLife).toBe('');
    expect(s('S70').maxRuntime).toBe('');
    expect(s('S70').speed).toContain('15 m/min');
    expect(s('S70').depthRating).toBe('');
    expect(s('S450A').batteryLife).toContain('system');
    expect(s('S450A').payload).toBe('');
    expect(s('S450A').weight).toBe('');
    expect(high(s('S450A'))).toContain('14 kg Pull');
  });
  it('preserves sonar pipe-range conflict with separate depth sensor range and operating gears', () => {
    const r = s('S3831E');
    expect(r.terrain).toContain('DN500-600 mm');
    expect(r.terrain).toContain('DN500-6000 mm');
    expect(review(r).fields.terrain.status).toBe('conflicting');
    expect(r.batteryLife).toContain('High gear 2 h; low gear 4 h');
    expect(r.depthRating).toContain('20 m');
    expect(high(r)).toContain('0.25-6 m range');
    expect(r.dof).toBe('');
  });
  it('retains micro-cutter unit discrepancy without turning axial feed into arm reach or lift', () => {
    const r = s('Micro Wriggling Cutting Robot');
    expect(high(r)).toContain('100 m in headline and 100 mm in table');
    expect(r.armReach).toBe('');
    expect(r.liftStroke).toBe('');
    expect(r.size).toContain('72 mm');
    expect(r.terrain).toContain('optional up to DN250');
  });
});
describe('Macco version and commercial-offer boundaries', () => {
  it('keeps financing and named output claims separate from retail Offers and V5 hardware inheritance', () => {
    expect(m('Kime Bartender').throughput).toContain('200 cocktails/h');
    expect(m('Kime Chef').throughput).toContain('120 dishes/h');
    expect(m('Kime Kiosk').throughput).toBe('');
    for (const model of ['Kime Bartender', 'Kime Chef', 'Kime Kiosk']) {
      const r = m(model);
      expect(getStructuredOffer(r.price)).toBeNull();
      expect(high(r)).toContain('subject to bank approval');
      for (const key of [
        'weight',
        'dof',
        'ipRating',
        'cookingCapacity',
        'heatSource',
        'batteryLife',
      ])
        expect(r[key]).toBe('');
    }
  });
  it('uses versioned Kime V5 hands load axes and robot-versus-kiosk dimensions without angular-speed conversion', () => {
    const r = m('Kime V5');
    expect(r.weight).toContain('60 kg robot with base');
    expect(r.size).toContain('1498 mm');
    expect(r.size).toContain('approximately 2 m');
    expect(r.payload).toContain('5 kg per arm');
    expect(r.handType).toContain('five-finger');
    expect(r.dof).toContain('3-DOF head/neck');
    expect(r.speed).toBe('');
    expect(r.batteryLife).toBe('');
    expect(r.releaseDate).toBe('');
    expect(r.armReach).toBe('');
  });
  it('preserves previous Macco company claims while exposing new manufacturer boundaries', () => {
    const brands = getAllBrands();
    const macco = brands.find((b) => b.id === 'macco-robotics');
    const srod = brands.find((b) => b.id === 'shenzhen-srod-industrial-group-co-ltd');
    expect(macco.robots).toHaveLength(4);
    expect(srod.robots).toHaveLength(16);
    expect(getCompanyInsights(macco).primary.highlights[0]).toContain('programmed body poses');
    expect(getCompanyInsights(macco).primary.highlights).toHaveLength(5);
    expect(getCompanyInsights(srod).primary.highlights).toHaveLength(5);
  });
});

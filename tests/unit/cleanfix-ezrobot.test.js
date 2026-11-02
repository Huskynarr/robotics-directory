import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getStructuredOffer } from '../../src/utils/format.js';
import { ROBOT_ID_ALIASES } from '../../src/data/robot-id-aliases.js';
const robots = getAllRobots().allRobots;
const find = (manufacturer, model) =>
  robots.find((r) => r.manufacturer === manufacturer && r.model === model);
const c = (model) => find('Cleanfix', model);
const ez = (model) => find('EZ-Robot', model);
const review = (r) => getSpecificationReview(r.id);
const highlights = (r) => getProductInsights(r.id).highlights.join(' ');
describe('Cleanfix generations, optional equipment and tank scope', () => {
  it('separates Pure and Connect app functions without summing shared membrane tanks', () => {
    const pure = c('RA660 Navi M Pure');
    const connect = c('RA660 Navi M Connect');
    expect(highlights(pure)).toContain('Connect-only, not inherited');
    expect(highlights(connect)).toContain('Connect adds iPad');
    for (const r of [pure, connect]) {
      expect(r.waterTankCapacity).toContain('sharing tank volume');
      expect(r.chargingTime).toContain('Optional fast-charge');
      expect(r.chargingTime).toContain('initial charge unspecified');
      expect(r.areaRate).toContain('500-1250 m²/h');
      expect(r.minAisleWidth).toBe('');
    }
  });
  it('keeps the earlier XL source scope distinct from explicitly named Generation2', () => {
    const earlier = c('RA660 Navi XL');
    const gen2 = c('RA660 Navi XL Generation 2');
    expect(earlier.weight).toContain('313 kg with water');
    expect(earlier.size).toContain('1010 x 850 x 1185');
    expect(earlier.speed).toContain('0.6 m/s');
    expect(gen2.size).toContain('1015 x 850 x 1100');
    expect(gen2.weight).toContain('215 kg with batteries without water');
    expect(gen2.weight).toContain('315 kg with water');
    expect(review(gen2).fields.weight.status).toBe('documented');
    expect(review(gen2).fields.speed.status).toBe('conflicting');
    expect(gen2.speed).toContain('08. m/s');
    expect(gen2.waterTankCapacity).toContain('not 220 L total');
    expect(gen2.releaseDate).toBe('');
  });
  it('does not convert S170 site area or millimetre slope label into hourly productivity or angle', () => {
    const r = c('S170 Navi');
    expect(r.areaRate).toBe('');
    expect(r.waterTankCapacity).toBe('');
    expect(r.weight).toBe('');
    expect(r.workingWidth).toContain('170 mm main roller; 275 mm with side brush');
    expect(review(r).fields.terrain.status).toBe('conflicting');
    expect(review(r).fields.chargingTime.status).toBe('conflicting');
    expect(r.chargingTime).toContain('at most 5.5 h');
    expect(highlights(r)).toContain('paid FieldBots OS subscription');
    expect(highlights(r)).toContain('excluding industrial environments');
  });
});
describe('EZ-Robot identities and assembled robot versus kit components', () => {
  it('merges JD duplicate with retained image and an old identity alias', () => {
    expect(ez('JD Humanoid')).toBeUndefined();
    expect(ROBOT_ID_ALIASES['ez-robot-jd-humanoid']).toBe('ez-robot-jd');
    expect(ez('JD').image).toBe('images/educational/ez-robot-jd-humanoid.webp');
    expect(ez('JD').ageRange).toBe('10+');
    expect(ez('JD').dof).toBe('');
    expect(ez('JD').releaseDate).toBe('');
    expect(ez('JD').handType).toContain('Two programmable grippers');
    expect(ez('JD').weight).toContain('1.33 kg product mass');
  });
  it('keeps product mass/dimensions and exact joints apart from shipping, servo torque and controller channels', () => {
    expect(ez('Six').dof).toContain('12 joints');
    expect(ez('Roli').dof).toBe('');
    expect(ez('Roli').driveMode).toBe('Tracked drive');
    expect(ez('AdventureBot').weight).toContain('0.71 kg');
    expect(ez('Battle Flipper').weight).toContain('0.79 kg');
    for (const r of robots.filter((r) => r.manufacturer === 'EZ-Robot')) {
      expect(r.speed).toBe('');
      expect(r.payload).toBe('');
      expect(r.maxRuntime).toBe('');
      expect(r.chargingTime).toBe('');
      expect(getStructuredOffer(r.price)).toBeNull();
    }
  });
  it('distinguishes battery head from enhanced mains-powered head without inventing assembled torso dimensions', () => {
    const head = ez('EZ-InMoov Robot Head');
    const enhanced = ez('EZ-InMoov Enhanced Robot Head');
    const body = ez('EZ-InMoov Humanoid Robot (Hardware Kit)');
    expect(head.weight).toContain('1.25 kg assembled');
    expect(enhanced.weight).toContain('1.75 kg assembled');
    expect(review(enhanced).fields.size.status).toBe('conflicting');
    expect(enhanced.size).toContain('12.1 in');
    expect(highlights(enhanced)).toContain('five heavy-duty and two micro servos');
    expect(highlights(enhanced)).toContain('7.5 V mains power');
    expect(body.size).toBe('');
    expect(body.weight).toBe('');
    expect(body.description).toContain('not a ready-assembled walking full-body robot');
    expect(highlights(body)).toContain('one-year ARC Pro subscription');
  });
  it('excludes related bundle prices, conversion kits and generic developer electronics from robot identities', () => {
    for (const name of [
      'Developer Kit',
      'AdventureBot to Hexapod Conversion Kit',
      'Hexapod to AdventureBot Conversion Kit',
    ])
      expect(ez(name)).toBeUndefined();
    expect(ez('JD').price).toContain('679.99 USD');
    expect(ez('JD').price).not.toContain('3499');
    expect(ez('EZ-InMoov Robot Head').price).toContain('259.99-356.99 USD');
    expect(ez('EZ-InMoov Enhanced Robot Head').price).toContain('419.98-516.98 USD');
    for (const r of robots.filter((r) => r.manufacturer === 'EZ-Robot'))
      expect(r.price).toContain('Unavailable');
  });
  it('connects both company focuses to canonical brands', () => {
    for (const [id, count] of [
      ['cleanfix-robotics', 5],
      ['ez-robot', 8],
    ]) {
      const brand = getAllBrands().find((b) => b.id === id);
      expect(brand.robots).toHaveLength(count);
      expect(getCompanyInsights(brand).primary.highlights.length).toBeGreaterThan(3);
    }
  });
});

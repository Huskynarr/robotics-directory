import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';

const robots = getAllRobots().allRobots;
const robot = (model) => robots.find((r) => r.id === `rainbow-robotics-${model}`);
const review = (model) => getSpecificationReview(`rainbow-robotics-${model}`);
const text = (model) => getProductInsights(`rainbow-robotics-${model}`).highlights.join(' ');
const arms = robots.filter(
  (r) => r.manufacturer === 'Rainbow Robotics' && r.category === 'robotic-arm',
);

describe('Rainbow exact-model boundaries and manufacturer conflicts', () => {
  it('reviews thirteen existing arm configurations without new software/accessory cards', () => {
    expect(arms).toHaveLength(13);
    expect(arms.every((r) => r.dof === '6' && getSpecificationReview(r.id))).toBe(true);
    expect(robots.filter((r) => r.manufacturer === 'Rainbow Robotics')).toHaveLength(26);
  });
  it('retains both incompatible reach statements for the two 850 arms', () => {
    for (const id of ['rb5-850', 'rb5-850n']) {
      expect(robot(id).armReach).toBe('927.7 mm table; 850 mm narrative (manufacturer conflict)');
      expect(review(id).fields.armReach.status).toBe('conflicting');
      expect(review(id).fields.armReach.note).toContain('neither value silently wins');
    }
    expect(robot('rb6-920').armReach).toBe('920 mm');
    expect(robot('rb20-1900').armReach).toBe('1900 mm');
  });
  it('flags the standard arm imperial payload discrepancy without copying it to N', () => {
    expect(review('rb5-850').fields.payload.status).toBe('conflicting');
    expect(robot('rb5-850').payload).toContain('5 kg metric rating');
    expect(robot('rb5-850').payload).toContain('6.6 lb conflicts');
    expect(robot('rb5-850n').payload).toBe('5 kg');
    expect(review('rb5-850n').fields.payload.status).toBe('documented');
  });
  it('flags conflicting mass units without deriving a replacement mass', () => {
    expect(robot('rb30-1400').weight).toBe('71 kg metric value; imperial value 158 lb conflicts');
    expect(review('rb30-1400').fields.weight.status).toBe('conflicting');
    expect(robot('rb20-1800').weight).toBe('70.5 kg');
    expect(robot('rb20-1900').weight).toBe('75 kg');
  });
  it('uses exact arm protection instead of a family-wide enclosure assumption', () => {
    for (const model of ['rb3-730', 'rb5-850']) expect(robot(model).ipRating).toBe('IP54');
    for (const model of [
      'rb3-1200',
      'rb6-920',
      'rb6-1700',
      'rb10-1300',
      'rb20-1800',
      'rb20-1900',
      'rb30-1400',
      'rb3-1200n',
      'rb5-850n',
      'rb10-1300n',
    ])
      expect(robot(model).ipRating).toBe('IP66');
    expect(robot('rb16-900').ipRating).toBe('');
  });
  it('separates mounting footprint, arm mass, controller dimensions and repeatability', () => {
    expect(robot('rb3-730').size).toBe(
      'Ø128 mm mounting footprint; overall arm envelope not documented',
    );
    expect(robot('rb20-1800').size).toContain('Ø245 mm mounting footprint');
    expect(text('rb3-730')).toContain('Repeatability is not absolute positioning accuracy');
    expect(text('rb3-730')).toContain('±0.05 mm');
    expect(robot('rb3-730').weight).toBe('11 kg');
  });
  it('records linear TCP speed only when the exact table supplies it', () => {
    for (const model of ['rb5-850', 'rb10-1300'])
      expect(robot(model).speed).toBe('1 m/s maximum TCP speed during normal operation');
    for (const model of ['rb20-1900', 'rb30-1400'])
      expect(robot(model).speed).toBe('2 m/s maximum TCP speed during normal operation');
    expect(arms.filter((r) => r.speed)).toHaveLength(4);
    expect(review('rb5-850n').fields.speed.note).toContain('Degrees per second are not converted');
  });
  it('does not treat an HTTP-200 homepage as an RB16-900 specification', () => {
    expect(robot('rb16-900').armReach).toBe('900 mm');
    expect(review('rb16-900').fields.ipRating.status).toBe('not-documented');
    expect(review('rb16-900').fields.ipRating.note).toContain('homepage despite HTTP 200');
    expect(review('rb16-900').sources).toHaveLength(1);
    expect(text('rb16-900')).toContain('repeatability and linear TCP speed remain unverified');
  });
  it('keeps food-hygiene certification and world-first wording attributed and qualified', () => {
    for (const model of ['rb3-1200n', 'rb5-850n', 'rb10-1300n']) {
      expect(text(model)).toContain('NSF/ANSI 169');
      expect(text(model)).toContain('have not been independently checked');
      expect(robot(model).description).toContain('manufacturer claims');
    }
  });
  it('retains RBQ walking and step conflicts with percentage gradients', () => {
    const q = robot('rbq-10');
    expect(q.speed).toBe('9 km/h table vs 6 km/h overview; up to 14 km/h running');
    expect(q.terrain).toBe(
      'Longitudinal slope 45%, lateral 20%; steps 25 cm table vs 20 cm overview',
    );
    expect(review('rbq-10').fields.speed.status).toBe('conflicting');
    expect(review('rbq-10').fields.terrain.status).toBe('conflicting');
    expect(text('rbq-10')).toContain('not degrees');
  });
  it('keeps RBQ endurance claims separate from automatic charging and optional modules', () => {
    expect(robot('rbq-10').batteryLife).toBe('2 h nominal; up to 4 h (test conditions not stated)');
    expect(robot('rbq-10').chargingTime).toBe('');
    expect(text('rbq-10')).toContain(
      '3D LiDAR, LTE, PTZ/thermal cameras and wireless charging are configuration-dependent',
    );
    expect(review('rbq-10').fields.dof.status).toBe('not-documented');
    for (const r of [...arms, robot('rbq-10')]) {
      expect(r.price).toBe('Not disclosed');
      expect(r.releaseDate).toBe('');
    }
  });
  it('extends prior company evidence while retaining unresolved RB-Y1 counts', () => {
    const brand = getAllBrands().find((b) => b.id === 'rainbow-robotics');
    const focus = getCompanyInsights(brand).primary;
    expect(focus.sources.length).toBeGreaterThan(6);
    expect(focus.highlights.join(' ')).toContain('RBM-D400/D1000');
    expect(review('rb-y1').fields.dof.status).toBe('conflicting');
    expect(review('rb-y1').sources[0].checkedAt).toBe('2026-11-02');
  });
});

import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { t } from '../../src/data/translations.js';

const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
const robot = (id) => robots.get(id);

describe('KEENON manufacturer and configuration boundaries', () => {
  it('distinguishes C30 dry modes and C40 sweeping from wet scrubbing', () => {
    const dry = robot('keenon-kleenbot-c30');
    const wet = robot('keenon-kleenbot-c40');
    expect(dry.batteryLife).toBe('Up to 6 h sweeping/vacuuming; up to 10 h dust mopping');
    expect(dry.waterTankCapacity).toBe('');
    expect(dry.price).toBe('Not disclosed');
    expect(dry.areaRate).toContain('600 m²/h');
    expect(wet.batteryLife).toBe('Up to 5 h floor scrubbing; up to 12 h floor sweeping');
    expect(wet.chargingTime).toContain('2 h');
    expect(wet.size).toContain('without squeegee;');
    expect(wet.workingWidth).toContain('400 mm vacuuming/scrubbing');
  });

  it('keeps C20 empty-tank mass and task-specific widths separate from payload', () => {
    const small = robot('keenon-robotics-kleenbot-c20');
    expect(small.weight).toContain('empty water tanks');
    expect(small.payload).toBe('');
    expect(small.waterTankCapacity).toBe('7 L clean water; 5 L waste water');
    expect(small.workingWidth).toBe('450 mm sweeping/vacuuming; 285 mm scrubbing');
    expect(small.speed).toBe('');
  });

  it('exposes C55 water-capacity conflict and theoretical throughput rather than unlimited endurance', () => {
    const heavy = robot('keenon-robotics-kleenbot-c55');
    const review = getSpecificationReview(heavy.id);
    expect(heavy.maxRuntime).toBe('Up to 5 h per battery operating period');
    expect(heavy.chargingTime).toBe('4 h');
    expect(heavy.areaRate).toContain('maximum theoretical');
    expect(heavy.waterTankCapacity).toContain('60 L clean water + 47 L waste water');
    expect(review.fields.waterTankCapacity.status).toBe('conflicting');
    expect(review.fields.waterTankCapacity.note).toContain('107 L combined');
    expect(heavy.payload).toBe('');
  });

  it('keeps tray totals, partial charging and absent T11 charging distinct', () => {
    expect(robot('keenon-robotics-dinerbot-t9').payload).toBe('40 kg total; 10 kg per layer');
    for (const id of ['keenon-robotics-dinerbot-t9', 'keenon-robotics-dinerbot-t10']) {
      expect(robot(id).chargingTime).toContain('from 15% to 100%, robot powered on');
    }
    expect(robot('keenon-robotics-dinerbot-t8').payload).toBe('20 kg total');
    expect(robot('keenon-robotics-dinerbot-t8').chargingTime).toContain(
      'percentage range not stated',
    );
    expect(robot('keenon-robotics-dinerbot-t10').batteryLife).toContain('9-12.5 h');
    const t11 = getSpecificationReview('keenon-robotics-dinerbot-t11');
    expect(t11.fields.chargingTime.status).toBe('not-documented');
    expect(t11.fields.chargingTime.value).toBe('');
    expect(t11.fields.payload.value).toBe('20 kg total; middle level 5 kg; bottom level 10 kg');
  });

  it('retains S100 operating-load and contradictory passage-unit conditions', () => {
    const industrial = robot('keenon-robotics-s100');
    expect(industrial.payload).toContain('exact upper rating unspecified');
    expect(industrial.maxRuntime).toContain('load below 100 kg');
    expect(industrial.chargingTime).toContain('0% to 100%');
    const review = getSpecificationReview(industrial.id);
    expect(review.fields.terrain.status).toBe('conflicting');
    expect(review.fields.terrain.note).toContain('about 75 cm');
    expect(industrial.terrain).toContain('without rotation');
  });

  it('retains the unresolved S300 height basis while preserving full-load runtime', () => {
    const lift = robot('keenon-robotics-s300');
    expect(lift.weight).toBe('115 kg including battery');
    expect(lift.batteryLife).toContain('6 h at full load');
    expect(lift.chargingTime).toContain('percentage range not stated');
    expect(lift.size).toContain('1282 mm');
    expect(lift.size).toContain('230 mm chassis height');
    expect(getSpecificationReview(lift.id).fields.size.status).toBe('conflicting');
    expect(lift.speed).toBe('');
  });

  it('distinguishes wheeled R1 and bipedal F1 poster claims without persona release dates', () => {
    const wheel = robot('keenon-xman-r1');
    const biped = robot('keenon-xman-f1');
    expect(wheel.weight).toBe('110 kg');
    expect(wheel.dof).toBe('36');
    expect(biped.weight).toBe('68 kg');
    expect(biped.dof).toBe('43');
    expect(biped.releaseDate).toBe('');
    expect(getSpecificationReview(biped.id).fields.releaseDate.note).toContain('Persona birthday');
    for (const r of [wheel, biped]) {
      expect(r.speed).toBe('');
      expect(r.payload).toBe('');
      expect(getProductInsights(r.id).highlights.join(' ')).toContain('OCR');
    }
  });

  it('moves commercial service robots and exposes unresolved lineup names only in sourced company focus', () => {
    for (const slug of ['dinerbot-t8', 'dinerbot-t10', 'butlerbot-w3']) {
      expect(robot(`keenon-robotics-${slug}`).category).toBe('commercial');
    }
    const brand = getAllBrands().find((b) => b.id === 'keenon-robotics');
    const { primary } = getCompanyInsights(brand);
    for (const model of ['XMAN-L1', 'X101', 'M102']) {
      expect(brand.robots.some((r) => r.model === model)).toBe(false);
      expect(primary.highlights.join(' ')).toContain(model);
    }
    expect(t('spec.waterTankCapacity', 'de')).toBe('Wassertankvolumen');
    expect(t('spec.waterTankCapacity', 'fr')).toBe('Water tank capacity');
  });
});

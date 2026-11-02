import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getStructuredOffer } from '../../src/utils/format.js';
const robots = getAllRobots().allRobots;
const robot = (manufacturer, model) =>
  robots.find((r) => r.manufacturer === manufacturer && r.model === model);
const q = (model) => robot('Quasi Robotics', 'C2 ' + model);
const t = (model) => robot('Tennant', model);
const review = (r) => getSpecificationReview(r.id);
const highlights = (r) => getProductInsights(r.id).highlights.join(' ');
describe('Quasi carts and Tennant mode-specific cleaning evidence', () => {
  it('retains exact C2 column differences and suggested rather than universal capacity', () => {
    expect(q('Mini').minAisleWidth).toBe('2.5 ft / 0.76 m');
    expect(q('PartPorter').minAisleWidth).toBe('5 ft / 1.5 m');
    expect(q('Heavy').minAisleWidth).toBe('4 ft / 1.2 m');
    expect(q('Large').payload).toContain('225 lb / 100 kg suggested');
    expect(q('Heavy').driveMode).toContain('Mecanum');
    expect(q('Standard').driveMode).toContain('differential');
    for (const name of ['Mini', 'Standard', 'Large', 'PartPorter', 'Heavy']) {
      const r = q(name);
      expect(r.speed).toBe('');
      expect(r.ipRating).toBe('');
      expect(r.batteryLife).toBe('');
      expect(r.areaRate).toBe('');
      expect(r.terrain).toContain('10 degrees (about 18% grade) empty');
      expect(r.terrain).toContain('3% fully loaded');
    }
  });
  it('does not inherit wireless options or Heavy battery and charging into Mini', () => {
    expect(q('Mini').maxRuntime).toContain('16 h');
    expect(q('Heavy').maxRuntime).toContain('14 h');
    expect(q('Heavy').chargingTime).toContain('90 min to 50%; 4 h to 100%');
    expect(q('Mini').chargingTime).toContain('60 min to 50%; 2.5 h to 100%');
    expect(review(q('Mini')).fields.chargingTime.note).toContain('without initial state');
    expect(highlights(q('Mini'))).toContain('explicitly unavailable');
    expect(highlights(q('Heavy'))).toContain('Optional wireless');
    expect(highlights(q('Mini'))).toContain('16 ToF sensors');
    expect(highlights(q('Large'))).toContain('26 ToF sensors');
    expect(q('Mini').price).toBe('Not disclosed');
  });
  it('separates per-tank coverage from explicit manual hourly productivity', () => {
    expect(t('X4 ROVR').areaRate).toContain('1860 m²/h theoretical maximum, manual mode');
    expect(t('X6 ROVR').areaRate).toContain('1914 m²/h theoretical maximum, manual mode');
    expect(highlights(t('X6 ROVR'))).toContain('6967 m² estimated coverage per solution tank');
    expect(review(t('X4 ROVR')).fields.size.status).toBe('conflicting');
    expect(t('X4 ROVR').size).toContain('940 mm');
    expect(t('X2 ROVR SCRUB').areaRate).toContain('10,000 ft² / 1929 m²');
    expect(review(t('X2 ROVR SCRUB')).fields.areaRate.status).toBe('conflicting');
    expect(highlights(t('X2 ROVR SCRUB'))).toContain('10,000 ft² / 929 m² per solution tank');
    expect(t('T7AMR').areaRate).toBe('');
    expect(t('T16AMR').areaRate).toBe('');
  });
  it('retains dated runtime disagreements without inventing battery upgrades', () => {
    for (const name of ['T380AMR', 'T7AMR']) {
      expect(review(t(name)).fields.maxRuntime.status).toBe('conflicting');
      expect(review(t(name)).fields.maxRuntime.note).toContain('does not prove an upgrade');
      expect(t(name).releaseDate).toBe('');
    }
    expect(t('T7AMR').maxRuntime).toContain('6.5 h lithium-ion');
    expect(review(t('T380AMR')).fields.weight.status).toBe('conflicting');
    expect(t('T16AMR').maxRuntime).toContain('5.5 h lithium-ion');
    expect(t('T16AMR').maxRuntime).not.toContain('13 h');
    expect(t('T16AMR').chargingTime).toContain('lithium pack only');
    expect(t('T16AMR').speed).toContain('Autonomous forward up to 3.6 km/h');
    expect(review(t('T16AMR')).fields.weight.status).toBe('conflicting');
  });
  it('keeps dry collections separate from water tanks and load ratings', () => {
    for (const name of ['X16 SWEEP', 'P1 VAC']) {
      expect(t(name).waterTankCapacity).toBe('');
      expect(t(name).payload).toBe('');
    }
    expect(highlights(t('X16 SWEEP'))).toContain('150 L volume and 350 lb / 158 kg debris');
    expect(highlights(t('P1 VAC'))).toContain('10 L dustbin and 100 ml debris tray');
    expect(t('P1 VAC').areaRate).toContain('without side brush');
    expect(t('P1 VAC').workingWidth).toContain('440 mm with side brush; 279 mm main brush');
    for (const key of ['weight', 'size'])
      expect(review(t('P1 VAC')).fields[key].status).toBe('conflicting');
    for (const key of ['maxRuntime', 'minAisleWidth'])
      expect(review(t('X16 SWEEP')).fields[key].status).toBe('conflicting');
    expect(t('P1 VAC').maxRuntime).toBe('Up to 3.5 h vacuuming, Standard Mode');
  });
  it('limits launch years to manufacturer announcements and never creates accessory robot cards', () => {
    expect(t('X2 ROVR SCRUB').releaseDate).toBe('2026');
    expect(t('X4 ROVR').releaseDate).toBe('2024');
    expect(t('X6 ROVR').releaseDate).toBe('2025');
    expect(t('P1 VAC').releaseDate).toBe('');
    expect(t('X16 SWEEP').releaseDate).toBe('');
    for (const name of ['X2 Dock RFSH', 'X16 CHRG', 'P1 CHRG']) expect(t(name)).toBeUndefined();
    for (const r of robots.filter((r) => ['Tennant', 'Quasi Robotics'].includes(r.manufacturer)))
      expect(getStructuredOffer(r.price)).toBeNull();
  });
  it('connects both company focuses to their single canonical brand', () => {
    for (const [id, count] of [
      ['quasi-robotics', 5],
      ['tennant', 8],
    ]) {
      const matches = getAllBrands().filter((b) => b.id === id);
      expect(matches).toHaveLength(1);
      expect(matches[0].robots).toHaveLength(count);
      expect(getCompanyInsights(matches[0]).primary.highlights.length).toBeGreaterThan(3);
    }
  });
});

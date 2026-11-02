import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getRobotSearchMatch } from '../../src/utils/robot-search.js';
import { getComparisonEvidence } from '../../src/data/comparison-evidence.js';

const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
const robot = (name) => robots.get(`bear-robotics-${name}`);
const review = (name) => getSpecificationReview(`bear-robotics-${name}`);
const text = (name) => getProductInsights(`bear-robotics-${name}`).highlights.join(' ');

describe('Bear Robotics exact models and qualified partner evidence', () => {
  it('keeps Servi mini height and imperial payload separate from Servi', () => {
    expect(robot('servi').payload).toBe('30 kg total; 10 kg per tray');
    expect(robot('servi-mini').payload).toContain('44 lb total; 22 lb per tray');
    expect(robot('servi-mini').size).toBe('445 x 430 x 980 mm (W x D x H)');
    expect(robot('servi').size).toContain('1046 mm');
    expect(robot('servi-mini').weight).toBe('');
    expect(text('servi-mini')).toContain('one tray plus one bus tub');
  });
  it('moves Servi Plus into commercial while preserving its ID and image', () => {
    const r = robot('servi-plus');
    expect(r.category).toBe('commercial');
    expect(r.image).toBe('images/smarthome/bear-robotics-servi-plus.webp');
    expect(r.price).toBe('Not disclosed');
    expect(r.weight).toBe('62 kg (manual robot mass)');
    expect(r.size).toBe('535 x 590 x 1230 mm (W x D x H)');
    expect(r.releaseDate).toBe('2023');
    expect(
      getAllRobots().robotsByCategory.smarthome.some((r) => r.id === 'bear-robotics-servi-plus'),
    ).toBe(false);
  });
  it('preserves Servi Plus endurance disagreement and safe-mode limits', () => {
    const r = robot('servi-plus');
    expect(r.batteryLife).toContain('Web 10-12 h; manual 8-12 h');
    expect(review('servi-plus').fields.batteryLife.status).toBe('conflicting');
    expect(r.maxRuntime).toBe('');
    expect(r.speed).toContain('safe-drive mode up to 0.8 m/s');
    expect(r.terrain).toContain('safe bump 7 mm / maximum 12 mm');
    expect(r.payload).toBe('40 kg total maximum; 10 kg per tray');
  });
  it('keeps Servi Q lower-bound endurance and separate screen and shelf capacities', () => {
    const r = robot('servi-q');
    expect(r.batteryLife).toContain('At least 12 h');
    expect(r.maxRuntime).toBe('');
    expect(r.chargingTime).toContain('4-6 h depending on robot settings');
    expect(r.payload).toContain('10 kg bottom shelf');
    expect(text('servi-q')).toContain('8-inch touchscreen is separate from the 18.5-inch');
    expect(text('servi-q')).toContain('mat sold separately');
  });
  it('retains the partial-charge interval, safe speed and tray limits of Carti 100', () => {
    const r = robot('carti-100');
    expect(r.chargingTime).toBe('3 h contact charging from 1% to 75% (manual)');
    expect(r.speed).toContain('0.8 m/s in safe driving mode; 1.2 m/s maximum');
    expect(r.payload).toBe('100 kg total; top and middle trays 15 kg each; bottom tray 70 kg');
    expect(r.terrain).toContain('threshold up to 5 mm');
    expect(review('carti-100').fields.chargingTime.note).toContain('not a full charge');
  });
  it('keeps QR docking and navigation separate for all five low-profile variants', () => {
    for (const code of ['400', '600', '1000s', '1000', '1500']) {
      const r = robot(`carti-${code}`);
      expect(r.navigationAccuracy).toBe('±10 mm with SLAM');
      expect(r.dockingAccuracy).toBe('±5 mm with QR docking');
      expect(r.liftStroke).toBe('60 mm');
      expect(r.chargingTime).toContain('At most 1.5 h');
      expect(r.size).toContain('260 mm');
      expect(r.maxRuntime).toBe('');
    }
    expect(robot('carti-400').size).toContain('optional CE-model height 300 mm');
    expect(robot('carti-1000').size).toContain('optional CE-model height 270 mm');
    expect(robot('carti-600').size).not.toContain('CE-model height');
    expect(robot('carti-1000s').weight).toBe('135 kg');
    expect(robot('carti-1000').weight).toBe('190 kg');
  });
  it('does not turn a family milestone into the release year of another named variant', () => {
    expect(robot('carti-1000s').releaseDate).toBe('');
    expect(review('carti-1000s').fields.releaseDate.note).toContain('No exact 1000s release year');
    expect(robot('servi-clean').releaseDate).toBe('2026');
    expect(robot('servi-clean-max').releaseDate).toBe('');
    expect(robot('carti-100').releaseDate).toBe('2024');
  });
  it('keeps Clean vacuum and Clean Max scrubbing modes, widths and capacities distinct', () => {
    const clean = robot('servi-clean');
    const max = robot('servi-clean-max');
    expect(clean.category).toBe('cleaning');
    expect(clean.batteryLife).toBe('4 h vacuuming; 8 h dust mopping');
    expect(max.batteryLife).toBe('3.5 h scrubbing; 8 h dust mopping');
    expect(clean.workingWidth).toBe('17.33 in');
    expect(max.workingWidth).toBe('19.68 in');
    expect(clean.waterTankCapacity).toBe('');
    expect(max.waterTankCapacity).toBe('35 L clean / 33 L dirty water');
    expect(clean.payload).toBe('');
    expect(max.payload).toBe('');
    expect(max.areaRate).toContain('12917 sq ft/h');
  });
  it('attributes B9 to LG and avoids false hourly throughput and endless battery life', () => {
    const r = robots.get('lg-b9');
    expect(r.manufacturer).toBe('LG');
    expect(r.weight).toContain('with two batteries');
    expect(r.areaRate).toBe('');
    expect(r.maxRuntime).toBe('');
    expect(r.batteryLife).toBe('6 h sweep mode; 4 h suction mode');
    expect(getSpecificationReview(r.id).fields.areaRate.note).toContain(
      'without a time denominator',
    );
    expect(getProductInsights(r.id).sources[0].type).toBe('integrator');
    expect(robot('lg-b9')).toBeUndefined();
    expect(getProductInsights(r.id).highlights.join(' ')).toContain('not single-charge runtime');
  });
  it('keeps Kinisi and fleet claims qualified in the company focus', () => {
    const brand = getAllBrands().find((b) => b.id === 'bear-robotics');
    expect(brand.robots).toHaveLength(12);
    const focus = getCompanyInsights(brand).primary;
    expect(focus.highlights.join(' ')).toContain('to be confirmed at launch');
    expect(focus.highlights.join(' ')).toContain('no duplicate Kinisi hardware card');
    expect(robot('kinisi')).toBeUndefined();
  });
  it('makes model-specific source qualifications retrievable by highlight search', () => {
    const r = robot('servi-q');
    const evidence = getComparisonEvidence().products[r.id];
    expect(getRobotSearchMatch(r, 'mat sold separately')).toBeNull();
    const found = getRobotSearchMatch(r, 'mat sold separately', evidence);
    expect(found.kind).toBe('highlight');
    expect(found.highlight).toContain('Wheel-debris cleaning requires a mat sold separately');
  });
});

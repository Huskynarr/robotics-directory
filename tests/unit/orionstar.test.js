import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { CATEGORIES } from '../../src/data/categories.js';
import { matchesSubcategoryFilter } from '../../src/data/subcategory-filters.js';
const all = getAllRobots().allRobots;
const robot = (id) => all.find((r) => r.id === `orionstar-${id}`);
const review = (id) => getSpecificationReview(`orionstar-${id}`);
const text = (id) => getProductInsights(`orionstar-${id}`).highlights.join(' ');
const legacy = () => all.find((r) => r.id === 'orion-star-lucki-zhaocaibao');

describe('OrionStar current lineup and regional specification boundaries', () => {
  it('adds five named robots without treating accessories or software as new models', () => {
    expect(all.filter((r) => r.manufacturer === 'OrionStar')).toHaveLength(12);
    for (const id of [
      'greetingbot-ad',
      'cleanibot-s55-pro',
      'cleanibot-m1',
      'cleanibot-k1',
      'cleanibot-c5',
    ])
      expect(robot(id)).toBeDefined();
    expect(robot('carrybot-software')).toBeUndefined();
    expect(robot('carrybot-d150-1')).toBeUndefined();
    expect(text('carrybot-d150')).toContain('it was not downloaded or run');
  });
  it('preserves the two existing identities and images while moving delivery out of Smart Home', () => {
    expect(robot('luckibot-pro').category).toBe('commercial');
    expect(robot('luckibot-pro').image).toBe('images/smarthome/orionstar-luckibot-pro.webp');
    expect(legacy().category).toBe('commercial');
    expect(legacy().image).toBe('images/smarthome/orion-star-lucki-zhaocaibao.webp');
    expect(legacy().manufacturer).toBe('Orion Star');
  });
  it('keeps documented total and per-tray loads separate across delivery models', () => {
    expect(robot('luckibot').payload).toBe('40 kg total; up to 10 kg per tray');
    expect(robot('luckibot-pro').payload).toBe('60 kg total; up to 15 kg per tray');
    expect(robot('luckibot-pro-autodoor').payload).toBe(
      'Up to 20 kg per tray; total load unspecified',
    );
    expect(robot('luckibot-pro-autodoor').weight).toBe('');
    expect(text('luckibot-pro-autodoor')).toContain('410 x 480 x 315 mm');
  });
  it('keeps powered-off charging separate from dock-only wording and does not transfer regional grade', () => {
    for (const id of ['luckibot', 'luckibot-pro', 'luckibot-pro-autodoor'])
      expect(robot(id).chargingTime).toBe('4.5 h while powered off');
    expect(legacy().chargingTime).toBe('4.5 h using charging dock');
    expect(legacy().terrain).toBe('Maximum grade 5°');
    expect(robot('luckibot').terrain).toBe('');
    expect(legacy().batteryLife).toBe('10 h in a typical cruising scene');
  });
  it('does not inherit the expressly D150 dimension, mass, speed or charging table into D100', () => {
    for (const field of ['weight', 'size', 'speed', 'chargingTime']) {
      expect(robot('carrybot-d100')[field]).toBe('');
      expect(review('carrybot-d100').fields[field].status).toBe('not-documented');
      expect(review('carrybot-d100').fields[field].note).toContain('D150');
    }
    expect(robot('carrybot-d100').batteryLife).toContain(
      '9 h; tested with 100 kg load on marble floor',
    );
    expect(robot('carrybot-d100').payload).toContain('including trays/shelf');
  });
  it('retains D150 carrying configurations and the 100 kg endurance test without a single family mass', () => {
    expect(robot('carrybot-d150').weight).toBe('');
    expect(robot('carrybot-d150').size).toBe(
      'Robot: 600 x 525 x 1377 mm; shelf dimensions separate',
    );
    expect(robot('carrybot-d150').batteryLife).toBe('12 h with 100 kg load on marble floor');
    expect(robot('carrybot-d150').payload).toContain('150 kg maximum including fitted trays/shelf');
    expect(text('carrybot-d150')).toContain('48 kg robot plus 12 kg shelf');
    expect(text('carrybot-d150')).toContain('not a 150 kg endurance guarantee');
    expect(robot('carrybot-d150').navigationAccuracy).toBe('');
    expect(robot('carrybot-d150').dockingAccuracy).toBe('');
  });
  it('uses Mini and Nova exact cruising and charging conditions', () => {
    expect(robot('greetingbot-mini').batteryLife).toBe('12 h in a typical cruising scene');
    expect(robot('greetingbot-mini').size).toBe('410 x 410 x 1000 mm');
    expect(robot('greetingbot-mini').chargingTime).toBe('≤4.5 h while powered off');
    expect(robot('greetingbot-nova').batteryLife).toBe('12–14 h in a typical cruising scene');
    expect(robot('greetingbot-nova').chargingTime).toBe('4.5 h using charging dock');
    expect(robot('greetingbot-nova').speed).toBe('0.5–1.2 m/s; adjustable');
  });
  it('does not convert AD charging current, screen diagonals or qualitative positioning into exact specs', () => {
    const r = robot('greetingbot-ad');
    expect(r.batteryLife).toBe('8–10 h; operating conditions unspecified');
    for (const field of ['weight', 'size', 'chargingTime', 'navigationAccuracy', 'dockingAccuracy'])
      expect(r[field]).toBe('');
    expect(text('greetingbot-ad')).toContain('An 8 A');
    expect(text('greetingbot-ad')).toContain('not an exact ±1 cm bound');
  });
  it('keeps S55 Pro mode-specific cleaning output and endurance without a derived brush width', () => {
    const r = robot('cleanibot-s55-pro');
    expect(r.batteryLife).toContain('Power Scrub 3.5 h');
    expect(r.batteryLife).toContain('ECO Vacuum 19.5 h; Dust Mop 28 h');
    expect(r.areaRate).toContain('Scrub/Power Scrub 1197 m²/h');
    expect(r.areaRate).toContain('1368 m²/h');
    expect(r.workingWidth).toBe('');
    expect(r.waterTankCapacity).toBe('22 L clean / 15 L wastewater');
    expect(r.chargingTime).toBe('<4 h');
  });
  it('keeps M1 brush/squeegee widths and cleaning modes separate', () => {
    expect(robot('cleanibot-m1').workingWidth).toBe('500 mm main brush; 680 mm squeegee');
    expect(robot('cleanibot-m1').batteryLife).toBe('Scrubbing 3.5 h; Mopping 8 h');
    expect(robot('cleanibot-m1').waterTankCapacity).toBe('35 L clean / 33 L wastewater');
    expect(robot('cleanibot-m1').terrain).toBe('20 mm obstacle; maximum grade 8°');
  });
  it('keeps K1 dust capacity and source mode labels without assuming water-tank sizes', () => {
    const r = robot('cleanibot-k1');
    expect(r.workingWidth).toBe('440 mm main brush');
    expect(r.size).toBe('558 x 420 x 592 mm (L x W x H)');
    expect(r.batteryLife).toBe('Vacuuming 8 h; Mopping 4 h');
    expect(r.waterTankCapacity).toBe('');
    expect(text('cleanibot-k1')).toContain('10 L dust bucket');
    expect(text('cleanibot-k1')).toContain('880 mm minimum passing width');
  });
  it('keeps C5 tanks, ground pressure, fan life and station power at their own scope', () => {
    const r = robot('cleanibot-c5');
    expect(r.waterTankCapacity).toBe('45 L clean / 45 L wastewater; station tank 8 L separate');
    expect(r.payload).toBe('');
    expect(r.batteryLife).toBe('Scrubbing 3 h; Mopping 8 h');
    expect(r.terrain).toBe('15 mm obstacle; maximum grade 5° loaded / 8° empty');
    expect(text('cleanibot-c5')).toContain(
      '25 kg downward brush pressure is not transport payload',
    );
    expect(text('cleanibot-c5')).toContain('component lifespan, not battery life');
  });
  it('makes all four cleaners and retail AD discoverable while retaining qualified company claims', () => {
    const cleaning = CATEGORIES.find((c) => c.id === 'cleaning');
    const commercialCleaning = cleaning.subcategories.find((s) => s.id === 'cleaning-commercial');
    expect(commercialCleaning).toBeDefined();
    for (const id of ['cleanibot-s55-pro', 'cleanibot-m1', 'cleanibot-k1', 'cleanibot-c5']) {
      expect(robot(id).category).toBe('cleaning');
      expect(matchesSubcategoryFilter(robot(id), commercialCleaning.filter)).toBe(true);
    }
    const brand = getAllBrands().find((b) => b.id === 'orionstar-robotics');
    expect(brand.robots).toHaveLength(13);
    expect(getCompanyInsights(brand).primary.highlights.join(' ')).toContain(
      'regional/revision equivalence is not certified',
    );
    for (const r of [...all.filter((r) => r.manufacturer === 'OrionStar'), legacy()]) {
      expect(r.releaseDate).toBe('');
      expect(r.maxRuntime).toBe('');
      expect(r.price).toBe('Not disclosed');
    }
  });
});

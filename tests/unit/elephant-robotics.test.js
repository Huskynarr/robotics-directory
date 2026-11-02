import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
const all = getAllRobots().allRobots;
const robot = (id) => all.find((r) => r.id === `elephant-robotics-${id}`);
const review = (id) => getSpecificationReview(`elephant-robotics-${id}`);
const text = (id) => getProductInsights(`elephant-robotics-${id}`).highlights.join(' ');

describe('Elephant version, operating-mode and companion boundaries', () => {
  it('retains original myAGV physical conflicts without mixing in 2023 values', () => {
    expect(robot('myagv').weight).toBe('3.6 kg specifications vs 3.02 kg overview');
    expect(robot('myagv').size).toContain(
      '311 x 236 x 130 mm specifications vs 300 x 205 x 145 mm',
    );
    expect(review('myagv').fields.weight.status).toBe('conflicting');
    expect(review('myagv').fields.size.status).toBe('conflicting');
    expect(robot('myagv').payload).toBe('');
  });
  it('separates work, standby, charging and motor speed on original myAGV', () => {
    expect(robot('myagv').batteryLife).toBe('1-1.5 h working time; standby 1.5-2 h is separate');
    expect(robot('myagv').chargingTime).toBe('3.5-4 h');
    expect(robot('myagv').speed).toBe('0.9 m/s maximum moving speed');
    expect(robot('myagv').maxRuntime).toBe('');
    expect(review('myagv').fields.chargingTime.note).toContain('12V 2A');
    expect(review('myagv').sources).toHaveLength(3);
  });
  it('preserves the Pi and Jetson columns with navigation separate from standby', () => {
    for (const id of ['myagv-pi-2023', 'myagv-jn-2023']) {
      expect(robot(id).weight).toBe('4.16 kg');
      expect(robot(id).size).toBe('311.15 x 230 x 110 mm');
      expect(robot(id).payload).toBe('5 kg');
      expect(robot(id).batteryLife).toBe('181 min navigation; 328 min standby is separate');
      expect(robot(id).maxRuntime).toBe('');
      expect(robot(id).chargingTime).toBe('');
      expect(robot(id).speed).toBe('');
      expect(robot(id).releaseDate).toBe('');
    }
    expect(text('myagv-pi-2023')).toContain('5-megapixel camera with 65-degree');
    expect(text('myagv-jn-2023')).toContain('8-megapixel camera with 77-degree');
  });
  it('adds primary highlights to the existing 280 M5 without duplicating 2023 bundles', () => {
    expect(robot('mycobot-280-m5').armReach).toBe('280 mm');
    expect(robot('mycobot-280-m5').payload).toBe('0.25 kg');
    expect(robot('mycobot-280-m5').weight).toBe('850 g');
    expect(text('mycobot-280-m5')).toContain('2023 dual-screen package');
    expect(all.filter((r) => r.manufacturer === 'Elephant Robotics')).toHaveLength(13);
  });
  it('does not relabel lifespan or joint angular speed as endurance or TCP speed', () => {
    for (const id of ['mycobot-280-m5', 'mycobot-320-m5', 'mycobot-320-pi', 'mycobot-pro-630']) {
      expect(robot(id).speed).toBe('');
      expect(robot(id).batteryLife).toBe('');
      expect(robot(id).maxRuntime).toBe('');
      expect(robot(id).handType).toBe('');
    }
    expect(text('mycobot-320-m5')).toContain('2000 hours as working lifespan');
    expect(text('mycobot-pro-630')).toContain('lifespan exceeds 10,000 hours');
    expect(robot('mycobot-pro-630').armReach).toBe('630 mm');
  });
  it('uses myCobot Pi content identity despite the reused mypalletizer URL', () => {
    expect(robot('mycobot-320-pi').dof).toBe('6');
    expect(robot('mycobot-320-pi').weight).toBe('3.36 kg');
    expect(robot('mycobot-320-pi').armReach).toBe('350 mm');
    expect(text('mycobot-320-pi')).toContain('Raspberry Pi 4B');
    expect(text('mycobot-320-m5')).toContain('ESP32 / M5Stack');
    expect(text('mycobot-320-pi')).toContain('Terminology and conditions differ');
  });
  it('keeps Mercury A1, B1 and X1 physical and load scopes separate', () => {
    expect(robot('mercury-a1').dof).toBe('7');
    expect(robot('mercury-b1').dof).toBe('17');
    expect(robot('mercury-x1').dof).toBe('19');
    expect(robot('mercury-a1').payload).toBe('1 kg');
    expect(robot('mercury-b1').payload).toBe(
      '1 kg listed maximum; per-arm/combined scope not stated',
    );
    expect(robot('mercury-x1').armReach).toBe('');
    expect(robot('mercury-b1').armReach).toBe('450 mm');
    expect(robot('mercury-x1').size).toContain('other overall dimensions not documented');
  });
  it('keeps X1 endurance and base speed qualified without certifying controller revisions', () => {
    expect(robot('mercury-x1').batteryLife).toBe('Up to 8 h; workload not stated');
    expect(robot('mercury-x1').speed).toBe('Up to 1.2 m/s mobile-base speed');
    expect(robot('mercury-x1').terrain).toContain('15°');
    expect(robot('mercury-x1').chargingTime).toBe('');
    expect(text('mercury-x1')).toContain('does not certify a coherent bill of materials');
  });
  it('corrects MarsCat using mode-specific MARS-1001 manual values', () => {
    expect(robot('marscat').weight).toBe('2.9 kg (MARS-1001 manual)');
    expect(robot('marscat').dof).toBe('16 joints');
    expect(robot('marscat').ageRange).toBe('12+');
    expect(robot('marscat').batteryLife).toBe('2 h active motion; 3-4 h regular motion');
    expect(robot('marscat').chargingTime).toBe('3 h (MARS-1001 manual)');
    expect(robot('marscat').maxRuntime).toBe('');
    expect(review('marscat').fields.size.note).toContain('503 mm');
  });
  it('keeps MetaCat companion interactions separate from unsupported runtime and LLM claims', () => {
    expect(robot('metacat').category).toBe('companion');
    expect(robot('metacat').batteryLife).toBe('');
    expect(robot('metacat').maxRuntime).toBe('');
    expect(robot('metacat').releaseDate).toBe('');
    expect(text('metacat')).toContain('not a globally applicable purchase offer');
    expect(robot('metacat').description).toContain('does not establish walking');
    expect(review('metacat-ai')).toBeNull();
  });
  it('keeps dated regional price examples out of universal numeric offers', () => {
    for (const r of all.filter(
      (r) => r.manufacturer === 'Elephant Robotics' && r.model !== 'metaCat AI',
    )) {
      expect(r.price).toBe('Not disclosed');
      expect(getSpecificationReview(r.id).fields.price.note).toMatch(/region|global/i);
    }
    expect(text('myagv-pi-2023')).toContain('USD 949');
    expect(text('metacat')).toContain('USD 159');
  });
  it('records blocked and unconfirmed product leads without declaring them verified', () => {
    const brand = getAllBrands().find((b) => b.id === 'elephant-robotics');
    const focus = getCompanyInsights(brand).primary;
    expect(focus.highlights.join(' ')).toContain('HTTP 429');
    expect(focus.highlights.join(' ')).toContain('separately named LLM edition');
    expect(
      all.some(
        (r) => r.manufacturer === 'Elephant Robotics' && ['metaDog', 'metaPanda'].includes(r.model),
      ),
    ).toBe(false);
  });
});

import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getRobotSearchMatch } from '../../src/utils/robot-search.js';

const robot = (model) =>
  getAllRobots().allRobots.find((r) => r.manufacturer === 'Carbon Robotics' && r.model === model);
const review = (model) => getSpecificationReview(robot(model).id);
const highlights = (model) => getProductInsights(robot(model).id).highlights.join(' ');
const demo = 'First Autonomous LaserWeeder Unit';

describe('Carbon Robotics implement, prototype and tractor boundaries', () => {
  it('keeps five G2 models, the commercial implement and the named historical demo distinct', () => {
    expect(getAllBrands().find((b) => b.id === 'carbon-robotics').modelCount).toBe(7);
    expect(robot(demo).releaseDate).toBe('2021');
    expect(robot('LaserWeeder').releaseDate).toBe('2022');
    expect(robot(demo).tagsArray).toContain('prototype');
    expect(robot(demo).description).toContain('not for commercial sale');
    expect(robot('Carbon Autonomy')).toBeUndefined();
    expect(robot('Carbon AI')).toBeUndefined();
  });
  it('does not inherit commercial diode lasers into the autonomous CO2 demo', () => {
    expect(highlights('LaserWeeder')).toContain('30 x 150 W diode lasers');
    expect(highlights(demo)).toContain('eight 150 W CO2 lasers');
    expect(robot(demo).driveMode).toContain('4 hydraulic drive motors');
    expect(robot(demo).size).toBe('');
    expect(robot(demo).areaRate).toBe('');
    expect(robot(demo).workingWidth).toBe('');
  });
  it('retains each model treatment rate separately from weed shots and travel speed', () => {
    for (const [code, rate] of [
      ['200', '0.16-0.28'],
      ['300', '0.30-0.61'],
      ['400', '0.32-0.65'],
      ['600', '0.61-1.21'],
      ['1200', '1.21-2.43'],
    ]) {
      const model = 'LaserWeeder G2 ' + code;
      expect(robot(model).areaRate).toContain(rate + ' ha/h');
      expect(robot(model).speed).toBe('');
      expect(review(model).fields.areaRate.status).toBe('documented');
    }
    expect(highlights('LaserWeeder G2 1200')).toContain('does not publish weeds per minute');
  });
  it('does not treat tractor lift requirements as robot payload or replace machine mass', () => {
    expect(robot('LaserWeeder G2 300').weight).toBe('2540 kg');
    expect(highlights('LaserWeeder G2 300')).toContain('minimum tractor lift capacity 3600 kg');
    expect(robot('LaserWeeder G2 300').payload).toBe('');
    expect(robot('LaserWeeder G2 1200').weight).toBe('8165 kg');
    expect(highlights('LaserWeeder G2 1200')).toContain('8618 kg');
  });
  it('keeps rear PTO/8R requirements exclusive to the 1200 rather than copying front PTO', () => {
    expect(robot('LaserWeeder G2 1200').driveMode).toContain('rear PTO');
    expect(highlights('LaserWeeder G2 1200')).toContain('no minimum rated PTO hp stated');
    expect(highlights('LaserWeeder G2 1200')).toContain('8R-series IVT');
    expect(robot('LaserWeeder G2 600').driveMode).toContain('front PTO');
    expect(highlights('LaserWeeder G2 600')).toContain('100 hp rated PTO');
  });
  it('does not invent full treatment swath from frame dimensions, row spacing or module units', () => {
    for (const code of ['200', '300', '400', '600', '1200']) {
      const model = 'LaserWeeder G2 ' + code;
      expect(robot(model).workingWidth).toBe('');
      expect(review(model).fields.workingWidth.note).toContain('inconsistent 21-inch/61-cm');
    }
    expect(review('LaserWeeder').fields.workingWidth.status).toBe('not-documented');
    expect(robot('LaserWeeder').workingWidth).toBe('');
    expect(highlights('LaserWeeder')).toContain('20 ft / 6.01 m');
  });
  it('leaves battery, charging and IP ratings unknown despite cooling and remote support claims', () => {
    for (const model of ['LaserWeeder', 'LaserWeeder G2 600', demo]) {
      for (const key of ['batteryLife', 'maxRuntime', 'chargingTime', 'ipRating', 'dof']) {
        expect(robot(model)[key]).toBe('');
        expect(review(model).fields[key].status).toBe('not-documented');
      }
    }
    expect(highlights('LaserWeeder G2 600')).toContain(
      '24/7 software/remote support is not battery life',
    );
  });
  it('keeps unknown G2 variant introduction dates and all prices unallocated', () => {
    for (const code of ['200', '300', '400', '600', '1200']) {
      expect(robot('LaserWeeder G2 ' + code).releaseDate).toBe('');
      expect(robot('LaserWeeder G2 ' + code).price).toBe('Not disclosed');
    }
    expect(review(demo).fields.price.note).toContain('not for commercial sale');
  });
  it('retains targeting as a manufacturer claim without inventing navigation precision', () => {
    expect(highlights('LaserWeeder G2 400')).toContain('manufacturer claims');
    expect(robot('LaserWeeder G2 400').navigationAccuracy).toBe('');
    expect(highlights('LaserWeeder G2 400')).toContain('up to 99%');
  });
  it('keeps retrofit early access, remote human supervision and software in the company scope', () => {
    const brand = getAllBrands().find((b) => b.id === 'carbon-robotics');
    const focus = getCompanyInsights(brand).primary;
    expect(focus.highlights.join(' ')).toContain('remote human supervision');
    expect(focus.highlights.join(' ')).toContain(
      'initially limited U.S. regions under early access',
    );
    expect(focus.highlights.join(' ')).toContain('Plant Profiles');
  });
  it('makes the exact rear-PTO restriction retrievable through full highlight search', () => {
    const item = robot('LaserWeeder G2 1200');
    const match = getRobotSearchMatch(
      item,
      'no minimum rated PTO hp stated',
      getProductInsights(item.id),
    );
    expect(match.kind).toBe('highlight');
  });
});

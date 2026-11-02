import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getRobotSearchMatch } from '../../src/utils/robot-search.js';
const all = getAllRobots().allRobots;
const robot = (name) => all.find((r) => r.id === `deep-robotics-${name}`);
const field = (name, key) => getSpecificationReview(robot(name).id).fields[key];
const highlights = (name) => getProductInsights(robot(name).id).highlights.join(' ');

describe('DEEP Robotics platform, component and SDK boundaries', () => {
  it('keeps all 17 catalog models and attaches the bounded company focus', () => {
    const brand = getAllBrands().find((b) => b.id === 'deep-robotics');
    expect(brand.modelCount).toBe(17);
    expect(getCompanyInsights(brand).primary.name).toBe('Deep Robotics');
    expect(all.some((r) => r.manufacturer === 'DEEP Robotics' && r.model === 'M20_Piper')).toBe(
      false,
    );
    expect(getSpecificationReview(robot('dr01').id).sources[0].checkedAt).toBe('2026-11-01');
  });
  it('pairs M20 loaded endurance and range without treating the extreme-test speed as working speed', () => {
    for (const name of ['lynx-m20', 'lynx-m20-pro']) {
      expect(robot(name).weight).toBe('33 kg including battery');
      expect(robot(name).batteryLife).toBe(
        '3 h / 15 km no load; 2.5 h / 12 km with effective payload',
      );
      expect(robot(name).speed).toBe('2 m/s maximum working speed');
      expect(field(name, 'speed').note).toContain('5 m/s');
      expect(field(name, 'speed').status).toBe('documented');
      expect(robot(name).chargingTime).toBe('');
      expect(highlights(name)).toContain('Autonomous charging is optional');
      expect(highlights(name)).toContain('future OTA functions');
    }
  });
  it('does not assign Pro-only perception or M20 mass to M20S', () => {
    expect(highlights('lynx-m20')).toContain('dash for SLAM');
    expect(highlights('lynx-m20-pro')).toContain('three eight-core');
    for (const key of ['weight', 'payload', 'ipRating', 'batteryLife', 'releaseDate']) {
      expect(robot('lynx-m20s')[key]).toBe('');
      expect(field('lynx-m20s', key).status).toBe('not-documented');
    }
  });
  it('keeps X30 variant height and battery-inclusive mass distinct without unsupported speed', () => {
    expect(robot('x30').weight).toBe('56 kg including battery');
    expect(robot('x30-pro').weight).toBe('59 kg including battery');
    expect(robot('x30').size).toBe('1000 x 470 x 595 mm');
    expect(robot('x30-pro').size).toBe('1000 x 470 x 715 mm');
    for (const name of ['x30', 'x30-pro']) {
      expect(robot(name).speed).toBe('');
      expect(robot(name).batteryLife).toContain('load conditions unspecified');
      expect(robot(name).payload).toContain('≥20 kg');
      expect(robot(name).chargingTime).toBe('');
    }
  });
  it('does not convert Lite3 body mass or coordinate offsets into complete robot mass/height', () => {
    expect(robot('lite3').weight).toBe('');
    expect(field('lite3', 'weight').note).toContain('mbody 11 kg');
    expect(robot('lite3').size).toContain('standing envelope unspecified');
    expect(robot('lite3').dof).toBe('12 leg joints');
    for (const key of ['payload', 'price', 'batteryLife', 'terrain'])
      expect(field('lite3', key).status).toBe('not-documented');
  });
  it('keeps Venture SDK entitlement separate from EDU sensor configuration', () => {
    expect(highlights('lite3-venture')).toContain('only available for Lite 3 Venture Edition');
    expect(highlights('lite3-edu')).toContain('Jetson AGX and Livox Mid360');
    for (const name of ['lite3-venture', 'lite3-edu'])
      for (const key of ['weight', 'size', 'dof', 'batteryLife', 'payload'])
        expect(robot(name)[key]).toBe('');
  });
  it('does not turn S10 simulation scale or SDK authorization into hardware performance', () => {
    expect(highlights('lynx-s10')).toContain('1.1.8 firmware');
    expect(highlights('lynx-s10')).toContain('unique manufacturer-issued authentication code');
    for (const key of ['weight', 'size', 'terrain', 'ipRating', 'payload', 'speed'])
      expect(robot('lynx-s10')[key]).toBe('');
  });
  it('keeps the generic DR02 family separate from 31-joint Pro and neckless 21-joint Standard', () => {
    expect(robot('dr02').dof).toBe('');
    expect(robot('dr02-pro').dof).toBe('31 joints; neck indices 29–30 currently locked in SDK');
    expect(robot('dr02-standard').dof).toBe('21 joints; no neck joints');
    expect(highlights('dr02-standard')).toContain('Mimic deployment is implemented in the Pro');
    for (const name of ['dr02', 'dr02-pro', 'dr02-standard'])
      for (const key of ['weight', 'payload', 'ipRating', 'speed', 'armReach'])
        expect(robot(name)[key]).toBe('');
  });
  it('does not use the Standard external output as battery capacity or charger input', () => {
    for (const name of ['dr02-pro', 'dr02-standard']) {
      expect(highlights(name)).toContain('72 V / 5 A external output');
      expect(highlights(name)).toContain('not battery capacity');
      expect(robot(name).chargingTime).toBe('');
      expect(robot(name).batteryLife).toBe('');
    }
  });
  it('retrieves the complete Lite3 body-mass qualification from feature search', () => {
    const r = robot('lite3');
    const match = getRobotSearchMatch(r, 'mbody', getProductInsights(r.id));
    expect(match.kind).toBe('highlight');
    expect(match.highlight).toContain('Neither is selected as complete robot mass');
  });
});

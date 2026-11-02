import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getRobotSearchMatch } from '../../src/utils/robot-search.js';
const all = getAllRobots().allRobots;
const robot = (id) => all.find((r) => r.id === id);
const field = (id, key) => getSpecificationReview(id).fields[key];
const text = (id) => getProductInsights(id).highlights.join(' ');
const deep = (name) => `deep-trekker-${name}`;
const pipe = (name) => `pipe-trekker-a-${name}`;

describe('Deep Trekker and Pipe Trekker source and configuration boundaries', () => {
  it('preserves the affiliated brands and attaches both company reviews to real profiles', () => {
    const brands = getAllBrands();
    for (const [name, count] of [
      ['Deep Trekker', 13],
      ['Pipe Trekker', 2],
    ]) {
      const brand = brands.find((b) => b.name === name);
      expect(brand.modelCount).toBe(count);
      expect(getCompanyInsights(brand).primary.name).toBe(name);
      expect(all.filter((r) => r.manufacturer === name)).toHaveLength(count);
    }
    expect(text(pipe('150'))).toContain(
      'separately without treating the two names as exact aliases',
    );
  });
  it('keeps body mass in air and dive depth separate from long tether options', () => {
    expect(robot(deep('revolution')).depthRating).toBe('305 m');
    expect(text(deep('revolution'))).toContain('up to 2 km');
    expect(robot(deep('spectra')).weight).toBe('38 kg in air');
    expect(robot(deep('spectra')).depthRating).toBe('1000 m');
    expect(text(deep('spectra'))).toContain('300 m standard fiber tether');
  });
  it('keeps SPECTRA visible and structured speed conflicts and sonar option limits', () => {
    const id = deep('spectra');
    expect(field(id, 'speed').status).toBe('conflicting');
    expect(field(id, 'speed').note).toContain('4 Knots');
    expect(text(id)).toContain('3D sonar only');
    expect(text(id)).toContain('7200 W');
    expect(robot(id).payload).toBe('');
    expect(robot(id).batteryLife).toBe('');
    expect(robot(id).chargingTime).toBe('');
  });
  it('retains PHOTON and VAC camera conflicts without converting camera angles to robot joints', () => {
    expect(text(deep('photon'))).toContain('200°');
    expect(text(deep('photon'))).toContain('215°');
    expect(text(deep('vac'))).toContain('1080p');
    expect(text(deep('vac'))).toContain('enhanced 4K');
    for (const name of ['dtg3', 'photon', 'pivot', 'revolution']) {
      expect(robot(deep(name)).dof).toBe('');
      expect(robot(deep(name)).handType).toBe('');
    }
  });
  it('keeps MAG and VAC unit disagreements and does not turn an angle into a turning length', () => {
    for (const name of ['mag', 'vac']) {
      expect(field(deep(name), 'size').status).toBe('conflicting');
      expect(field(deep(name), 'size').note).toContain('330.2 mm');
      expect(robot(deep(name)).ipRating).toBe('');
      expect(robot(deep(name)).payload).toBe('');
    }
    expect(robot(deep('mag')).turningRadius).toBe('');
    expect(robot(deep('vac')).turningRadius).toBe('0 mm');
  });
  it('limits VAC eight-hour endurance to its package rather than adjacent crawler models', () => {
    expect(robot(deep('vac')).batteryLife).toBe('Up to 8 h; VAC shop package');
    for (const name of ['mag', 'vac-max']) expect(robot(deep(name)).batteryLife).toBe('');
    expect(text(deep('vac'))).toContain('excludes the hose and pump');
    expect(robot(deep('vac')).chargingTime).toBe('');
  });
  it('keeps VAC MAX assembly fields unknown despite attached generic tables', () => {
    for (const key of ['size', 'weight', 'speed', 'depthRating', 'payload']) {
      expect(robot(deep('vac-max'))[key]).toBe('');
      expect(field(deep('vac-max'), key).status).toBe('not-documented');
    }
    expect(text(deep('vac-max'))).toContain('36-inch vacuum head');
    expect(text(deep('vac-max'))).toContain('No 24 m/min speed is derived');
    expect(
      all.filter((r) => r.manufacturer === 'Deep Trekker' && r.model === 'VAC XL'),
    ).toHaveLength(0);
  });
  it('retains both Pipe Trekker runtime conflicts and separates controllers and hybrid operation', () => {
    for (const name of ['150', '200']) {
      expect(field(pipe(name), 'batteryLife').status).toBe('conflicting');
      expect(robot(pipe(name)).batteryLife).toContain('5 h');
      expect(robot(pipe(name)).batteryLife).toContain('8 h');
      expect(robot(pipe(name)).payload).toBe('');
      expect(robot(pipe(name)).chargingTime).toBe('');
    }
  });
  it('does not copy A-150 shop tables silently onto A-200 and retains incomplete A-150 size evidence', () => {
    expect(field(pipe('150'), 'size').status).toBe('conflicting');
    expect(robot(pipe('150')).size).toBe('');
    for (const key of ['weight', 'size', 'speed', 'driveMode'])
      expect(field(pipe('200'), key).status).toBe('conflicting');
    expect(field(pipe('200'), 'driveMode').note).toContain('6000 mAh versus 3000 mAh');
    expect(text(pipe('200'))).toContain('130 lb /580 N');
  });
  it('keeps S/X package details searchable under the two crawler models', () => {
    for (const name of ['150', '200']) {
      const id = pipe(name);
      const match = getRobotSearchMatch(robot(id), 'powered counter reel', getProductInsights(id));
      expect(match.kind).toBe('highlight');
      expect(match.highlight).toContain('S and X');
    }
    expect(
      all
        .filter((r) => r.manufacturer === 'Pipe Trekker')
        .map((r) => r.model)
        .sort(),
    ).toEqual(['A-150', 'A-200']);
  });
  it('retains historical DT320 depth/size conflicts and DT340 battery without using publication dates as launches', () => {
    expect(field(deep('dt320'), 'depthRating').status).toBe('conflicting');
    expect(field(deep('dt320'), 'size').status).toBe('conflicting');
    expect(robot(deep('dt340')).batteryLife).toBe('4–8 h');
    for (const name of ['dt320', 'dt340']) expect(robot(deep(name)).releaseDate).toBe('');
    expect(robot(deep('dt340')).depthRating).toBe('');
  });
  it('retains limited DTG2, Worker and DTX2 identity evidence without inherited modern specifications', () => {
    for (const name of ['dtg2', 'dtg2-worker', 'dtx2'])
      for (const key of ['depthRating', 'weight', 'size', 'payload', 'batteryLife', 'releaseDate'])
        expect(robot(deep(name))[key]).toBe('');
    expect(text(deep('dtg2-worker'))).toContain(
      'now resolves to a current search-and-recovery guide',
    );
    expect(text(deep('dtx2'))).toContain('model mention only');
  });
});

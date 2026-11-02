import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getRobotSearchMatch } from '../../src/utils/robot-search.js';
import { t } from '../../src/data/translations.js';

const robot = (model) =>
  getAllRobots().allRobots.find((r) => r.manufacturer === 'FANUC' && r.model === model);
const field = (model, key) => getSpecificationReview(robot(model).id).fields[key];
const highlights = (model) => getProductInsights(robot(model).id).highlights.join(' ');

describe('FANUC CR/CRX exact load modes and named variants', () => {
  it('represents six CR arms and twelve new CRX/Food/Paint configurations', () => {
    expect(getAllBrands().find((b) => b.id === 'fanuc').modelCount).toBe(18);
    for (const model of [
      'CRX-3iA',
      'CRX-30iA',
      'CRX-10iA/L Paint',
      'CRX-5iA Food',
      'CRX-30iA Food',
    ])
      expect(robot(model)).toBeDefined();
    expect(robot('CRX-25iA')).toBeUndefined();
  });
  it('retains regional legacy status without assigning the same retirement to every CR arm', () => {
    for (const model of ['CR-4iA', 'CR-7iA', 'CR-7iA/L']) {
      expect(robot(model).tagsArray).toContain('historical');
      expect(robot(model).description).toContain('US manufacturer page');
      expect(highlights(model)).toContain('not a worldwide installed-base retirement date');
    }
    expect(robot('CR-15iA').tagsArray).not.toContain('historical');
  });
  it('restricts CR-14 reach at the exact twelve-kilogram boundary', () => {
    expect(robot('CR-14iA/L').payload).toBe('14 kg maximum wrist load');
    expect(robot('CR-14iA/L').armReach).toBe('911 mm below 12 kg; 820 mm at 12 kg or greater');
    expect(field('CR-14iA/L', 'armReach').note).toContain('at or above 12 kg');
  });
  it('does not keep full CR-35 reach when optional wrist load increases', () => {
    expect(robot('CR-35iB').payload).toContain('50 kg optional');
    expect(robot('CR-35iB').armReach).toBe('1831 mm at 35 kg; 1643 mm in 50 kg payload mode');
    expect(robot('CR-35iB').speed).toContain('risk assessment');
  });
  it('keeps the CR-7 standard reach table/prose conflict visible', () => {
    expect(robot('CR-7iA').armReach).toContain('717 mm specification table');
    expect(robot('CR-7iA').armReach).toContain('911 mm conflicting');
    expect(field('CR-7iA', 'armReach').status).toBe('conflicting');
    expect(robot('CR-7iA/L').armReach).toBe('911 mm');
  });
  it('retains CR-35 and Paint mechanical-mass disagreements without subtracting a controller', () => {
    expect(robot('CR-35iB').weight).toContain('386 kg');
    expect(robot('CR-35iB').weight).toContain('375 kg');
    expect(field('CR-35iB', 'weight').status).toBe('conflicting');
    expect(robot('CRX-10iA/L Paint').weight).toContain('47 kg');
    expect(robot('CRX-10iA/L Paint').weight).toContain('40 kg');
    expect(field('CRX-10iA/L Paint', 'weight').status).toBe('conflicting');
    expect(robot('CRX-10iA/L').weight).toBe('40 kg mechanical arm');
  });
  it('keeps CRX-30 load/reach modes, flange restriction and unresolved footnote separate', () => {
    expect(robot('CRX-30iA').payload).toContain('40 kg mode requires downward-facing wrist flange');
    expect(robot('CRX-30iA').armReach).toContain('1756 mm at 30 kg; 1889 mm at 25 kg');
    expect(field('CRX-30iA', 'armReach').status).toBe('conflicting');
    expect(field('CRX-30iA', 'armReach').note).toContain('1700 mm table entry');
    expect(highlights('CRX-30iA')).toContain('mismatched footnote');
  });
  it('keeps component protection and exact motion modes rather than advertising blanket IP67/speed', () => {
    expect(robot('CR-15iA').ipRating).toBe('Body: IP54; wrist and J3 arm: IP67');
    expect(robot('CR-4iA').ipRating).toBe('Body: IP67; wrist and J3 arm: IP67');
    expect(robot('CR-15iA').speed).toContain('separately located area safety sensor');
    expect(robot('CR-7iA/L').speed).toContain('collaborative/high-speed split not stated');
    expect(robot('CRX-3iA').speed).toContain('2500 mm/s high-speed');
    expect(robot('CRX-20iA/L').speed).not.toContain('2000');
  });
  it('stores arm repeatability separately from absolute/vision accuracy', () => {
    expect(robot('CRX-3iA').armRepeatability).toBe('+/-0.02 mm (ISO 9283)');
    expect(robot('CR-4iA').armRepeatability).toBe('+/-0.01 mm (ISO 9283)');
    expect(field('CRX-10iA/L', 'armRepeatability').note).toContain(
      'not absolute positioning accuracy',
    );
    expect(robot('CRX-10iA/L').visionPrecision).toBeUndefined();
    expect(t('spec.armRepeatability', 'en')).toBe('Arm repeatability');
    expect(t('spec.armRepeatability', 'de')).toBe('Wiederholgenauigkeit des Arms');
  });
  it('does not inherit standard-arm equipped values into named Food packages', () => {
    for (const base of ['CRX-5iA', 'CRX-10iA', 'CRX-10iA/L', 'CRX-20iA/L', 'CRX-30iA']) {
      const model = base + ' Food';
      for (const key of ['weight', 'dof', 'speed', 'armRepeatability']) {
        expect(robot(model)[key]).toBe('');
        expect(field(model, key).status).toBe('not-documented');
      }
      expect(robot(model).ipRating).toContain('IP67');
      expect(highlights(model)).toContain('incidental food contact');
    }
    expect(robot('CRX-30iA Food').payload).not.toContain('40 kg');
  });
  it('does not treat footprint, cabinet size, maintenance years or upload folders as robot specifications', () => {
    for (const model of ['CR-35iB', 'CRX-3iA', 'CRX-30iA', 'CRX-5iA Food']) {
      for (const key of ['size', 'batteryLife', 'maxRuntime', 'chargingTime', 'releaseDate'])
        expect(robot(model)[key]).toBe('');
      expect(robot(model).price).toBe('Not disclosed');
    }
  });
  it('makes the exact unresolved reach footnote searchable with its source statement', () => {
    const r = robot('CRX-30iA');
    expect(
      getRobotSearchMatch(r, 'additional 1700 mm reach entry', getProductInsights(r.id)).kind,
    ).toBe('highlight');
  });
});

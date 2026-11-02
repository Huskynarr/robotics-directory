import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { t } from '../../src/data/translations.js';

const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
const robot = (suffix) => robots.get(`iplusmobot-${suffix}`);
const review = (suffix) => getSpecificationReview(`iplusmobot-${suffix}`);
const text = (suffix) => getProductInsights(`iplusmobot-${suffix}`).highlights.join(' ');

describe('IPLUSMOBOT named hardware and qualified measurements', () => {
  it('separates QR-assisted docking from general navigation and runtime lower bounds', () => {
    const r = robot('emma-400k');
    expect(r.navigationAccuracy).toBe('±30 mm position accuracy');
    expect(r.dockingAccuracy).toContain('±2 mm / ±0.2° with QR-code condition');
    expect(r.batteryLife).toContain('At least 8 h');
    expect(r.maxRuntime).toBe('');
    expect(r.chargingTime).toContain('At most 1.5 h full charging');
    expect(r.speed).toBe('Up to 1.5 m/s no load; 1.2 m/s full load');
  });
  it('preserves 400L lifting travel and does not invent a 2000L full-load speed', () => {
    expect(robot('emma-400l').liftStroke).toBe('75 mm');
    expect(review('emma-400l').fields.liftStroke.note).toContain(
      'generic family summary says 60 mm',
    );
    expect(robot('emma-2000l').payload).toBe('2000 kg');
    expect(robot('emma-2000l').speed).toContain('full-load speed not documented');
    expect(robot('emma-2000l').size).toBe('1043 x 801 x 301 mm (L x W x H)');
  });
  it('retains named FOLA columns without turning fork height into lift travel', () => {
    expect(robot('fola-bn1501t').weight).toContain('535 kg');
    expect(robot('fola-bn1501').weight).toContain('420 kg');
    expect(robot('fola-bn3001').payload).toBe('3000 kg at 600 mm load centre');
    expect(robot('fola-dn2030').maxLiftHeight).toContain('3000 mm maximum');
    expect(robot('fola-pn1530').batteryLife).toContain('At least 6 h');
    expect(robot('fola-dn1516').liftStroke).toBe('');
    expect(review('fola-dn1416').fields.liftStroke.status).toBe('conflicting');
    expect(robot('fola-dn1416').maxLiftHeight).toContain(
      '1600 mm maximum fork height; 90 mm minimum',
    );
  });
  it('retains QN aisle/length and BN2001 mass-unit disagreements', () => {
    expect(review('fola-qn1416').fields.size.status).toBe('conflicting');
    expect(review('fola-qn1416').fields.size.note).toContain('12034 mm');
    expect(robot('fola-qn1416').terrain).toContain('2320 mm web / 2410 mm');
    expect(review('fola-bn2001').fields.weight.note).toContain('1829 lb');
    expect(review('fola-bn2001').fields.weight.status).toBe('conflicting');
  });
  it('retains SN600 headline conflicts and standard/high envelopes without duplicate SKUs', () => {
    const r = robot('fola-sn600');
    expect(r.payload).toBe('600 kg');
    expect(review('fola-sn600').fields.payload.status).toBe('conflicting');
    expect(review('fola-sn600').fields.payload.note).toContain('1400 kg');
    expect(r.batteryLife).toContain('headline says 6 h');
    expect(r.speed).toContain('detailed brochure: 1.5 / 1.2');
    expect(r.size).toContain('standard;');
    expect(r.liftStroke).toBe('60 mm');
    expect(r.maxLiftHeight).toContain('195 mm');
    expect(robot('fola-sn600-high')).toBeUndefined();
  });
  it('keeps OMNI loaded movement, navigation, docking and lifting travel distinct', () => {
    const r = robot('omni-3-5t');
    expect(r.speed).toBe('Up to 1.0 m/s no load; 0.5 m/s full load');
    expect(r.navigationAccuracy).toContain('±10 mm');
    expect(r.dockingAccuracy).toContain('±2 mm');
    expect(r.liftStroke).toBe('60 mm');
    expect(r.maxLiftHeight).toBe('');
    expect(r.weight).toBe('');
  });
  it('does not give brochure-only Luna 30T the other variants size or speed', () => {
    const r = robot('luna-30t');
    expect(r.payload).toBe('30000 kg');
    for (const field of ['size', 'weight', 'speed', 'chargingTime', 'ipRating', 'maxRuntime'])
      expect(r[field]).toBe('');
    expect(r.dockingAccuracy).toBe('±20 mm / 1° in brochure');
    expect(review('luna-5t').fields.dockingAccuracy.status).toBe('conflicting');
    expect(review('luna-5t').fields.size.status).toBe('conflicting');
  });
  it('distinguishes NERA arm payload/reach and drivetrain without assigning an arm OEM', () => {
    expect(robot('nera-a12-jm').armReach).toBe('1327 mm arm range');
    expect(robot('nera-a12-jm').driveMode).toBe('Differential drive');
    expect(robot('nera-a12-uf').driveMode).toContain('omnidirectional');
    expect(robot('nera-a20-tt').payload).toContain(
      '20 kg arm payload; mobile-platform cargo limit not documented',
    );
    expect(robot('nera-a20-tt').dof).toBe('');
    expect(text('nera-a12-uf')).toContain('±0.5 mm execution precision with a vision system');
    expect(text('nera-a12-uf')).toContain('exact column lists ±1 mm');
  });
  it('does not inherit neighboring application runtime for the exact LDT configuration', () => {
    const r = robot('ldt1500-omni');
    expect(r.size).toContain('non-lifting height, customizable');
    expect(r.liftStroke).toBe('280 mm');
    expect(r.batteryLife).toBe('');
    expect(r.chargingTime).toBe('');
    expect(review('ldt1500-omni').fields.batteryLife.note).toContain('neighboring brochure');
  });
  it('qualifies the autonomous chassis and does not infer endurance from battery capacity', () => {
    const r = robot('nera-p200-ds3');
    expect(r.weight).toContain('optional counterweight');
    expect(r.payload).toBe('200 kg chassis load capacity');
    expect(r.batteryLife).toBe('');
    expect(r.armReach).toBe('');
    expect(text('nera-p200-ds3')).toContain('integration platform');
    expect(robot('nera-c')).toBeUndefined();
  });
  it('uses the explicit EMMA-T drawing cargo limit rather than the broader family limit', () => {
    const r = robot('emma-t-with-emma-400l');
    expect(r.payload).toContain('300 kg in EMMA-T / EMMA 400L drawing');
    expect(r.weight).toBe('');
    expect(r.size).toBe('');
    expect(r.speed).toBe('');
    expect(r.maxRuntime).toBe('');
    expect(review('emma-t-with-emma-400l').fields.payload.note).toContain(
      'Family payload <=800 kg',
    );
  });
  it('extends source family links with brochure models while retaining family identity', () => {
    const resolutions = JSON.parse(
      fs.readFileSync('data/competitors/model-resolutions.json', 'utf8'),
    ).resolutions;
    const coverage = JSON.parse(fs.readFileSync('data/competitors/coverage.json', 'utf8'));
    for (const [name, expected] of [
      ['EMMA L', 'EMMA 2000L'],
      ['FOLA', 'FOLA PN1530'],
      ['LUNA', 'Luna 30T'],
    ]) {
      const decision = resolutions.find((r) => r.brand === 'IPLUSMOBOT' && r.model === name);
      expect(decision.kind).toBe('family-resolution');
      expect(decision.catalogModels).toContain(expected);
      expect(
        decision.evidence.some((s) => s.url.endsWith('iplusmobot-product-brochure-2026-apac.pdf')),
      ).toBe(true);
      expect(decision.note).toContain('completeness and hardware equivalence are not asserted');
    }
    expect(coverage.productEvidenceCoverage.matchedCatalogModels).toBe(430);
    expect(coverage.productEvidenceCoverage.withoutDatedHighlights).toBe(0);
  });
  it('keeps software and controller offerings at company level and localizes measurements', () => {
    const brand = getAllBrands().find((b) => b.id === 'iplusmobot');
    const focus = getCompanyInsights(brand).primary;
    expect(focus.highlights.join(' ')).toContain('NERA-C is a controller component');
    for (const name of ['CLOUDIA', 'OWL', 'iMCS', 'CARLY'])
      expect(focus.highlights.join(' ')).toContain(name);
    expect(t('spec.dockingAccuracy', 'de')).toBe('Andockgenauigkeit');
    expect(t('spec.navigationAccuracy', 'fr')).toBe('Navigation accuracy');
    expect(t('spec.liftStroke', 'de')).toBe('Hubweg');
    expect(t('spec.maxLiftHeight', 'de')).toBe('Maximale Gabelhöhe');
    expect(t('spec.armReach', 'ja')).toBe('Arm reach');
  });
});

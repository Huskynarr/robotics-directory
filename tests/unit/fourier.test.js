import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getRobotSearchMatch } from '../../src/utils/robot-search.js';
import { parseWeightKg } from '../../src/utils/robot-filters.js';

const all = getAllRobots().allRobots;
const robot = (model) =>
  all.find((entry) => entry.manufacturer.startsWith('Fourier') && entry.model === model);
const field = (model, key) => getSpecificationReview(robot(model).id).fields[key];
const highlights = (model) => getProductInsights(robot(model).id).highlights.join(' ');

describe('Fourier configuration and manufacturer-source boundaries', () => {
  it('retains named generations, editions and a desktop platform without promoting software or sensors', () => {
    const brand = getAllBrands().find((entry) => entry.id === 'fourier');
    expect(brand.modelCount).toBe(18);
    for (const model of [
      'GR-3C',
      'GR-3C Ultra',
      'GR Mini',
      'GRW',
      'GRW Lite',
      'GR Nano',
      'ArmMotus M2 Pro',
      'ExoMotus M4 Immersive',
    ])
      expect(robot(model), model).toBeDefined();
    expect(
      all.some((entry) =>
        ['Nexus-01', 'RehabHub', 'InfinityNet', 'PelmaMotus'].includes(entry.model),
      ),
    ).toBe(false);
    expect(getCompanyInsights(brand).primary.highlights.join(' ')).toContain(
      'formerly Fourier Intelligence',
    );
  });

  it('removes unsupported GR-1 price and carrying claims while distinguishing walking endurance', () => {
    const gr1 = robot('GR-1');
    expect(gr1.price).toBe('Not disclosed');
    expect(field('GR-1', 'price').status).toBe('not-documented');
    expect(gr1.payload).toBe('≈3 kg per hand; posture unspecified');
    expect(gr1.batteryLife).toContain('≈60 min operating; ≈45 min walking');
    expect(gr1.chargingTime).toContain('315 min');
    expect(gr1.dof).toContain('44/34 configurations');
    expect(gr1.releaseDate).toBe('2023');
  });

  it('qualifies GR-2 actuator maxima by optional hands and keeps average endurance separate', () => {
    expect(robot('GR-2').dof).toContain('optional 12-DoF hands');
    expect(robot('GR-2').handType).toContain('Standard 6-DoF');
    expect(robot('GR-2').batteryLife).toContain('2 h average');
    expect(field('GR-2', 'armReach').note).toContain('single-arm working radius');
  });

  it('does not call the basic/optional GR-3 joint counts a contradiction', () => {
    expect(robot('GR-3').dof).toContain('43 with basic 6-DoF hands');
    expect(robot('GR-3').dof).toContain('up to 55 with optional 12-DoF hands');
    expect(field('GR-3', 'dof').status).toBe('documented');
    expect(robot('GR-3').chargingTime).toBe('≈1.5 h');
    expect(robot('GR-3').terrain).toContain('15°');
  });

  it('preserves GR-3 span and speed differences without treating a compatible lower bound as a conflict', () => {
    expect(field('GR-3', 'armReach').status).toBe('conflicting');
    expect(robot('GR-3').armReach).toContain('1759 mm in docs / 1795 mm in brochure');
    expect(field('GR-3', 'speed').status).toBe('conflicting');
    expect(field('GR-3', 'speed').note).toContain('lower bound compatible with 6.1');
  });

  it('does not fill exact GR-3C edition values from ambiguous or generic-series ratings', () => {
    for (const model of ['GR-3C', 'GR-3C Ultra']) {
      expect(robot(model).dof).toContain('43 with basic 6-DoF hands');
      expect(robot(model).weight).toBe('');
      expect(robot(model).armReach).toBe('');
      expect(robot(model).releaseDate).toBe('');
      expect(field(model, 'weight').status).toBe('not-documented');
    }
    expect(highlights('GR-3C Ultra')).toContain(
      'Microphone and immersive teleoperation are options',
    );
  });

  it('retains N1 technical-table discrepancies and distinct walking/running modes', () => {
    for (const key of ['weight', 'size', 'speed'])
      expect(field('N1', key).status).toBe('conflicting');
    expect(robot('N1').speed).toContain('Walking 2.7 km/h; running 10.8 km/h');
    expect(field('N1', 'speed').note).toContain('equals 3.0 m/s');
    expect(robot('N1').chargingTime).toBe('≈3.5 h');
    expect(robot('N1').handType).toBe('');
    expect(highlights('N1')).toContain('Cameras are optional');
  });

  it('keeps GRW unresolved body ratings visible and does not sum a combined load twice', () => {
    for (const key of ['weight', 'size', 'dof'])
      expect(field('GRW', key).status).toBe('conflicting');
    expect(robot('GRW').payload).toContain('16 kg combined dual-arm');
    expect(robot('GRW').payload).toContain('8 kg per arm');
    expect(field('GRW', 'speed').status).toBe('documented');
    expect(field('GRW', 'speed').note).toContain('different scopes');
    expect(robot('GRW').handType).toContain('No end-effector');
  });

  it('keeps GRW and Lite partial recharge separate from a complete charge and diameter from radius', () => {
    for (const model of ['GRW', 'GRW Lite']) {
      expect(robot(model).chargingTime).toContain('0 to 80%');
      expect(robot(model).turningRadius).toBe('');
      expect(robot(model).maxLiftHeight).toBe('');
      expect(field(model, 'turningRadius').note).toContain('diameter');
    }
    expect(highlights('GRW')).toContain('880 mm in docs versus 895 mm');
  });

  it('does not copy GRW payload, total joints or terrain limits into Lite', () => {
    expect(robot('GRW Lite').weight).toBe('≈120 kg');
    expect(robot('GRW Lite').payload).toBe('');
    expect(robot('GRW Lite').terrain).toBe('');
    expect(robot('GRW Lite').dof).toContain('whole-platform total not stated');
    expect(highlights('GRW Lite')).toContain('Ubuntu 24.04');
  });

  it('keeps GR Mini separate from N1 and omits an ambiguous recharge bound', () => {
    expect(robot('GR Mini').id).not.toBe(robot('N1').id);
    expect(robot('GR Mini').dof).toContain('25');
    expect(robot('GR Mini').weight).toBe('≈43 kg');
    for (const key of ['speed', 'terrain', 'chargingTime', 'payload'])
      expect(robot('GR Mini')[key]).toBe('');
  });

  it('keeps GR Nano desktop mass and external AI services within their proper scope', () => {
    expect(robot('GR Nano').category).toBe('companion');
    expect(parseWeightKg(robot('GR Nano').weight)).toBe(0.2);
    expect(robot('GR Nano').dof).toBe('3 head DoF');
    expect(robot('GR Nano').batteryLife).toBe('');
    expect(highlights('GR Nano')).toContain('customer AI platform');
    expect(highlights('GR Nano')).toContain('not included standalone robot intelligence');
  });

  it('retains M2, M2 Pro and the Immersive exoskeleton as distinct configurations without shared physical ratings', () => {
    expect(robot('ArmMotus M2').id).not.toBe(robot('ArmMotus M2 Pro').id);
    expect(robot('ExoMotus M4').id).not.toBe(robot('ExoMotus M4 Immersive').id);
    for (const model of ['ArmMotus M2', 'ArmMotus M2 Pro', 'ExoMotus M4 Immersive'])
      for (const key of ['weight', 'payload', 'batteryLife', 'dof'])
        expect(robot(model)[key]).toBe('');
    expect(highlights('ExoMotus M4 Immersive')).toContain('equipped configuration');
  });

  it('does not turn workspace or training motion labels into robot joint counts or clinical outcomes', () => {
    expect(robot('ArmMotus EMU').dof).toBe('');
    expect(robot('WristMotus').dof).toBe('');
    expect(robot('AnkleMotus').payload).toBe('');
    expect(robot('MetaMotus Galileo').dof).toContain(
      'motion platform; complete configured-system total unspecified',
    );
    expect(robot('MetaMotus Galileo').releaseDate).toBe('2023');
    expect(highlights('MetaMotus Galileo')).toContain('optional gait-training integration');
  });

  it('makes newly documented interaction and integration features searchable', () => {
    const nano = robot('GR Nano');
    expect(getRobotSearchMatch(nano, 'ASR, TTS, LLM/VLM', getProductInsights(nano.id)).kind).toBe(
      'highlight',
    );
    const lite = robot('GRW Lite');
    expect(getRobotSearchMatch(lite, 'Jetson Thor', getProductInsights(lite.id)).kind).toBe(
      'highlight',
    );
  });
});

import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getRobotSearchMatch } from '../../src/utils/robot-search.js';
const all = getAllRobots().allRobots;
const robot = (name) => all.find((r) => r.id === `addverb-technologies-${name}`);
const field = (name, key) => getSpecificationReview(robot(name).id).fields[key];
const highlights = (name) => getProductInsights(robot(name).id).highlights.join(' ');

describe('Addverb named configurations and specification boundaries', () => {
  it('links all 34 models to one company and keeps adjacent software out of robot cards', () => {
    const brand = getAllBrands().find((b) => b.id === 'addverb-technologies');
    expect(brand.modelCount).toBe(34);
    expect(getCompanyInsights(brand).primary.name).toBe('Addverb Technologies');
    const models = all.filter((r) => r.manufacturer === 'Addverb Technologies');
    for (const name of ['Movect', 'Mobinity', 'Concinity', 'Optimus', 'Rapido', 'Corzie'])
      expect(models.some((r) => r.model === name)).toBe(false);
  });
  it('keeps loaded speed, mass and charge windows specific to each Dynamo variant', () => {
    expect(robot('dynamo-100').weight).toBe('70 kg');
    expect(robot('dynamo-2500').weight).toBe('1650 kg');
    expect(robot('dynamo-100').speed).toBe('2 m/s empty; 1.5 m/s loaded');
    expect(robot('dynamo-2500').speed).toBe('1.2 m/s empty; 0.8 m/s loaded');
    expect(robot('dynamo-1500').chargingTime).toBe('24 min (0–80%); 8 min (20–80%)');
    for (const key of ['speed', 'driveMode'])
      expect(field('dynamo-2500', key).status).toBe('conflicting');
  });
  it('does not assign the linked FlowT 1520 PDF dimensions or lift height to FlowT 1530', () => {
    expect(robot('flowt-1520').weight).toBe('800 kg');
    expect(robot('flowt-1520').maxLiftHeight).toBe('2000 mm');
    for (const key of ['weight', 'size', 'ipRating', 'maxLiftHeight']) {
      expect(robot('flowt-1530')[key]).toBe('');
      expect(field('flowt-1530', key).status).toBe('not-documented');
    }
    expect(field('flowt-1530', 'maxLiftHeight').note).toContain('1520');
    expect(robot('flowt-1000').liftStroke).toBe('115 mm');
    expect(field('flowt-1000', 'payload').status).toBe('conflicting');
    expect(robot('flowt-1000').minAisleWidth).toContain('1000 mm-wide pallet');
  });
  it('leaves generic family and launch specifications unknown', () => {
    for (const name of ['flowt', 'trakr'])
      for (const key of ['weight', 'size', 'payload', 'batteryLife', 'dof', 'releaseDate']) {
        expect(robot(name)[key]).toBe('');
        expect(field(name, key).status).toBe('not-documented');
      }
    expect(robot('elixis').releaseDate).toBe('');
  });
  it('keeps chassis load separate from towing and preserves copied Dash Tug conflicts', () => {
    expect(robot('dash-line').payload).toBe('250 kg');
    expect(highlights('dash-line')).toContain('200 kg towing');
    expect(robot('dash-line').size).toBe('2320 x 750 x 405 mm');
    for (const key of ['payload', 'chargingTime'])
      expect(field('dash-tug', key).status).toBe('conflicting');
    expect(robot('dash-line').batteryLife).toBe('');
  });
  it('does not convert Veloce turning diameter or picking height into robot radius or fork height', () => {
    expect(robot('veloce').payload).toContain('30 kg per level');
    expect(robot('veloce').size).toBe('1700 x 998 x 4000 mm');
    expect(robot('veloce').turningRadius).toBe('');
    expect(robot('veloce').maxLiftHeight).toBe('');
    expect(highlights('veloce')).toContain('1789 mm turning diameter');
    expect(field('veloce', 'chargingTime').status).toBe('conflicting');
  });
  it('preserves sorter position and charge conflicts without copying fleet throughput into payload', () => {
    for (const name of ['6', '10', '30', '40', 'x']) {
      expect(field(`zippy-${name}`, 'navigationAccuracy').status).toBe('conflicting');
      expect(robot(`zippy-${name}`).turningRadius).toBe('');
    }
    for (const name of ['10', '30', 'x'])
      expect(field(`zippy-${name}`, 'chargingTime').status).toBe('conflicting');
    expect(robot('zippy-x').payload).toBe('15 kg');
    expect(highlights('zippy-x')).toContain('not established as one robot’s throughput');
  });
  it('keeps track systems and rack heights distinct from battery robots and robot body dimensions', () => {
    for (const name of ['multi-pro', 'quadron', 'medius', 'skyron', 'sortie', 'travect'])
      expect(robot(name).batteryLife).toBe('');
    expect(robot('skyron').terrain).toBe('');
    expect(robot('skyron').size).toBe('');
    expect(robot('skyron').maxLiftHeight).toBe('');
    expect(robot('medius').size).toBe('1568 x 934 x 3800 mm');
    for (const name of ['cruiser', 'cruiser-360'])
      expect(field(name, 'speed').status).toBe('conflicting');
  });
  it('retains optional Trakr ingress protection, battery-inclusive mass and responsive source conflicts', () => {
    expect(robot('trakr-5').weight).toBe('18 kg including battery');
    expect(robot('trakr-20').weight).toBe('53.5 kg including battery');
    for (const name of ['trakr-5', 'trakr-20']) {
      expect(robot(name).ipRating).toBe('IP67 optional configuration');
      expect(robot(name).dof).toBe('');
    }
    for (const key of ['batteryLife', 'terrain'])
      expect(field('trakr-5', key).status).toBe('conflicting');
    expect(robot('trakr-20').terrain).toContain('180 mm maximum step');
  });
  it('separates biped and wheeled Elixis and identifies endurance as a target', () => {
    expect(robot('elixis').weight).toBe('75 kg gross');
    expect(robot('elixis-w').weight).toBe('210 kg gross');
    expect(robot('elixis').dof).toBe('41');
    expect(robot('elixis-w').dof).toBe('33');
    for (const name of ['elixis', 'elixis-w']) {
      expect(field(name, 'batteryLife').status).toBe('roadmap');
      expect(robot(name).payload).toContain('5 kg per arm');
    }
  });
  it('keeps Syncro controller mass and JEN copied quadruped payload out of arm specifications', () => {
    expect(robot('syncro-5').weight).toBe('22 kg arm only');
    expect(robot('syncro-10').weight).toBe('40 kg arm only');
    expect(robot('syncro-5').armReach).toBe('650 mm');
    expect(robot('syncro-10').armReach).toBe('1300 mm');
    for (const name of ['syncro-5', 'syncro-10']) {
      expect(robot(name).size).toBe('');
      expect(robot(name).batteryLife).toBe('');
    }
    expect(robot('jen-6').payload).toBe('');
    expect(robot('jen-6').speed).toBe('');
    expect(robot('jen-6').dof).toBe('6 + 1 gripper');
  });
  it('keeps source-only Veloce turning geometry searchable with its qualifying statement', () => {
    const r = robot('veloce');
    const match = getRobotSearchMatch(r, '1789 mm turning diameter', getProductInsights(r.id));
    expect(match.kind).toBe('highlight');
    expect(match.highlight).toContain('not radius');
  });
});

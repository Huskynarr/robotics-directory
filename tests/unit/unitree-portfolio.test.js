import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getRobotSearchMatch } from '../../src/utils/robot-search.js';

const robot = (model) =>
  getAllRobots().allRobots.find((r) => r.manufacturer === 'Unitree' && r.model === model);
const field = (model, key) => getSpecificationReview(robot(model).id).fields[key];
const highlights = (model) => getProductInsights(robot(model).id).highlights.join(' ');

describe('Unitree portfolio model and package boundaries', () => {
  it('represents the named platform/arm/kit configurations without creating a boxing robot', () => {
    expect(getAllBrands().find((b) => b.id === 'unitree-robotics').modelCount).toBe(58);
    for (const model of [
      'A2-W PRO',
      'H2-X EDU',
      'H2-A Standard',
      'H2-D Flagship',
      'R1-A7-D',
      'G1-D Ultimate',
      'G1+ EDU',
      'G1-Comp',
      'B2-Ex Inspection Solution',
      'AlienGo',
      'R1-7a',
      'D1',
      'D1-T Full Edition',
      'Z1 PRO',
      'D2',
    ])
      expect(robot(model), model).toBeDefined();
    expect(robot('G1-Boxing')).toBeUndefined();
  });
  it('does not inherit A2-W PRO sensors or whole-robot IP67 into the standard model', () => {
    expect(highlights('A2-W')).toContain('one LiDAR');
    expect(highlights('A2-W PRO')).toContain('two LiDAR');
    expect(robot('A2-W').ipRating).toBe('IP56');
    expect(robot('A2-W PRO').ipRating).toContain('core components rated IP67');
    expect(robot('A2-W').weight).toContain('52 kg including battery');
    expect(robot('A2-W').batteryLife).toContain('25 kg load: >1.5 h');
  });
  it('retains exact H2-X eight-hour rows without copying microphone endurance or charging current', () => {
    for (const model of ['H2-X', 'H2-X EDU']) {
      expect(robot(model).batteryLife).toContain(
        'Static: about 8 h; continuous walking: about 8 h',
      );
      expect(robot(model).chargingTime).toBe('');
      expect(robot(model).ipRating).toBe('');
      expect(field(model, 'batteryLife').note).toContain('not independently corroborated');
    }
    expect(highlights('H2-X')).toContain('microphone five-hour');
  });
  it('distinguishes H2-X standard and EDU computing rather than combining all optional modules', () => {
    expect(robot('H2-X').tagsArray).not.toContain('dev-platform');
    expect(robot('H2-X EDU').tagsArray).toContain('dev-platform');
    expect(highlights('H2-X EDU')).toContain('Core i7 or Orin NX');
    expect(highlights('H2-X EDU')).toContain('Thor T5000 or Orin AGX');
  });
  it('keeps fixed H2-A geometry and hand-excluded DoF distinct from mobile platforms', () => {
    expect(robot('H2-A Standard').category).toBe('robotic-arm');
    expect(robot('H2-A Standard').weight).toContain('33.5 kg');
    expect(robot('H2-A Standard').dof).toBe('19 excluding end effectors');
    expect(robot('H2-A Standard').armReach).toContain('excluding dexterous hands');
    expect(highlights('H2-A Standard')).toContain('no lift column or powered chassis');
  });
  it('does not turn direct-power H2-D Standard operation into battery duration', () => {
    expect(robot('H2-D Standard').batteryLife).toBe('');
    expect(field('H2-D Standard', 'batteryLife').status).toBe('not-documented');
    expect(robot('H2-D Flagship').batteryLife).toContain('About 5 h on battery');
    expect(robot('H2-D Standard').liftStroke).toBe('0.36 m');
    expect(robot('H2-D Flagship').liftStroke).toBe('0.46 m');
    for (const model of ['H2-D Standard', 'H2-D Flagship']) {
      expect(robot(model).turningRadius).toBe('');
      expect(robot(model).maxLiftHeight).toBe('');
    }
  });
  it('keeps R1-A exact equipped joint counts, fixed-power mass and mobile chassis scope', () => {
    for (const [model, count] of [
      ['R1-A5', 15],
      ['R1-A7', 19],
      ['R1-A5-D', 18],
      ['R1-A7-D', 22],
    ])
      expect(robot(model).dof).toContain(count + ' with gripper');
    expect(robot('R1-A5').weight).toContain('11 kg with external power supply');
    expect(robot('R1-A7').weight).toContain('13 kg with external power supply');
    expect(robot('R1-A5-D').weight).toBe('About 30 kg');
    expect(robot('R1-A7-D').liftStroke).toBe('');
    expect(robot('R1-A7-D').driveMode).toBe('');
  });
  it('does not assign an unallocated family starting price to a particular R1-A configuration', () => {
    for (const model of ['R1-A5', 'R1-A7', 'R1-A5-D', 'R1-A7-D']) {
      expect(robot(model).price).toBe('Not disclosed');
      expect(field(model, 'price').note).toContain('unallocated family starting price');
    }
  });
  it('keeps G1-D standard and ultimate hardware and software-service uptime separate', () => {
    expect(robot('G1-D Standard').dof).toBe('17 excluding end effectors');
    expect(robot('G1-D Ultimate').dof).toBe('19 excluding end effectors');
    expect(robot('G1-D Standard').batteryLife).toContain('2 h');
    expect(robot('G1-D Ultimate').batteryLife).toContain('6 h');
    expect(robot('G1-D Standard').speed).toBe('');
    expect(robot('G1-D Ultimate').speed).toContain('1.5 m/s');
    expect(highlights('G1-D Standard')).toContain('24/7 acquisition describes software-service');
    expect(robot('G1-D Ultimate').liftStroke).toBe('');
  });
  it('preserves G1+ identity and variant arm loads without inheriting standard G1 values', () => {
    expect(robot('G1+').id).toBe('unitree-g1-plus');
    expect(robot('G1+ EDU').id).toBe('unitree-g1-plus-edu');
    expect(robot('G1+').dof).toBe('25');
    expect(robot('G1+ EDU').dof).toContain('25-45');
    expect(robot('G1+').payload).toContain('3 kg');
    expect(robot('G1+ EDU').payload).toContain('4 kg');
    expect(robot('G1+').price).toBe('15000 USD excluding tax and shipping');
    expect(robot('G1+').armReach).toBe('');
  });
  it('does not guarantee all advertised G1-Comp computing or tactile options in every bundle', () => {
    expect(highlights('G1-Comp')).toContain('selectable additional computing');
    expect(robot('G1-Comp').handType).toContain('tactile arrays optional');
    expect(robot('G1-Comp').chargingTime).toBe('');
  });
  it('keeps B2-Ex chassis and equipped inspection slope, load and protection claims distinct', () => {
    expect(robot('B2-Ex Chassis').weight).toContain('130 kg');
    expect(robot('B2-Ex Inspection Solution').weight).toContain('170 kg');
    expect(robot('B2-Ex Chassis').terrain).toContain('45°');
    expect(robot('B2-Ex Inspection Solution').terrain).toContain('30°');
    expect(robot('B2-Ex Inspection Solution').payload).toBe('');
    expect(robot('B2-Ex Inspection Solution').batteryLife).toContain('80 W external load');
    expect(highlights('B2-Ex Chassis')).toContain('not an independently verified certificate');
    expect(highlights('B2-Ex Inspection Solution')).toContain('Ex db eb ib mb IIB T4 Gb');
  });
  it('retains AlienGo battery-excluded mass and optional LiDAR without an inferred IP rating', () => {
    expect(robot('AlienGo').weight).toContain('without battery');
    expect(robot('AlienGo').ipRating).toBe('');
    expect(highlights('AlienGo')).toContain('LiDAR is optional');
  });
  it('does not turn R1-7a starting price into an exact price or 650 mm into bare-arm reach', () => {
    expect(robot('R1-7a').price).toBe('Not disclosed');
    expect(robot('R1-7a').armReach).toBe('650 mm with dexterous hand');
    expect(robot('R1-7a').weight).toBe('');
    expect(robot('R1-7a').payload).toContain('2 kg');
  });
  it('distinguishes the D1 single arm from whole D1-T kit specifications', () => {
    expect(robot('D1').weight).toContain('2.37 kg per arm');
    expect(robot('D1').payload).toContain('500 g per arm');
    expect(robot('D1').armReach).toContain('550 mm without gripper; 670 mm including gripper');
    for (const model of ['D1-T Standard Edition', 'D1-T Full Edition'])
      for (const key of ['price', 'weight', 'payload', 'dof', 'armReach'])
        expect(robot(model)[key]).toBe(key === 'price' ? 'Not disclosed' : '');
    expect(field('D1-T Standard Edition', 'price').note).toContain('upper bound below 8500');
    expect(field('D1-T Full Edition', 'price').note).toContain('upper bound below 16000');
  });
  it('does not assign Z1 joint-component weight to the complete arm', () => {
    expect(robot('Z1 AIR').weight).toBe('4.3 kg per arm');
    expect(robot('Z1 PRO').weight).toBe('4.5 kg per arm');
    expect(highlights('Z1 AIR')).toContain('405 g mass');
    expect(robot('Z1 PRO').payload).toContain('>=3 kg');
  });
  it('preserves D2 gripper geometry and platform-specific mounting restrictions', () => {
    expect(robot('D2').armReach).toContain('780 mm gripper working radius; arm length 633 mm');
    expect(robot('D2').payload).toContain('3 kg in table; up to 5 kg maximum');
    expect(highlights('D2')).toContain('restricts As2 to one arm');
    expect(highlights('D2')).toContain('prohibits high-speed A2 motion with two arms installed');
    expect(robot('D2').speed).toBe('');
  });
  it('exposes boxing as scoped G1 application evidence and makes mounting restrictions searchable', () => {
    expect(highlights('G1')).toContain('does not establish an included boxing package');
    const r = robot('D2');
    expect(getRobotSearchMatch(r, 'prohibits high-speed A2', getProductInsights(r.id)).kind).toBe(
      'highlight',
    );
  });
});

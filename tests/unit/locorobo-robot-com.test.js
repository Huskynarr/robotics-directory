import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getStructuredOffer } from '../../src/utils/format.js';

const robots = getAllRobots().allRobots;
const r = (model) => robots.find((v) => v.manufacturer === 'Robot.com' && v.model === model);
const l = (model) => robots.find((v) => v.manufacturer === 'LocoRobo' && v.model === model);
const review = (robot) => getSpecificationReview(robot.id);
const high = (robot) => getProductInsights(robot.id).highlights.join(' ');

describe('Robot.com named platform and availability evidence', () => {
  it('retains neck axes separately from arm and torso groups without sensor DOF', () => {
    expect(r('R-noid').dof).toContain('Dual 7-DOF arms');
    expect(r('R-noid').dof).toContain('4-DOF torso');
    expect(r('R-noid').dof).toContain('2-DOF neck');
    expect(high(r('R-noid'))).toContain('eight ultrasonic sensors');
    expect(
      review(r('R-noid')).sources.some((s) => s.url === 'https://lp.robot.com/rnoid/specs.pdf'),
    ).toBe(true);
  });
  it('separates structural arm length vertical workspace and base geometry from usable reach', () => {
    const robot = r('R-noid');
    expect(robot.armReach).toBe('');
    expect(high(robot)).toContain('Arm length 0.82 m');
    expect(high(robot)).toContain('0-1.9 m vertical workspace');
    expect(robot.size).toContain('0.55 m wheel base');
    expect(robot.size).toContain('complete body envelope unspecified');
    expect(review(robot).fields.armReach.status).toBe('not-documented');
  });
  it('uses exact named R-noid limits and launch without summing arm load or inferring full charge', () => {
    const robot = r('R-noid');
    expect(robot.speed).toContain('2 m/s');
    expect(robot.payload).toContain('4 kg per arm');
    expect(robot.payload).toContain('no combined two-arm load inferred');
    expect(robot.batteryLife).toContain('3 h');
    expect(robot.batteryLife).toContain('plug-in');
    expect(robot.chargingTime).toBe('');
    expect(robot.releaseDate).toBe('2026');
    expect(high(robot)).toContain('commercial launch is explicitly June 22, 2026');
    expect(high(robot)).toContain('May 14 technical revision is a document date');
  });
  it('keeps R-cargo numeric headings empty and charging equipment optional', () => {
    const robot = r('R-cargo');
    expect(robot.batteryLife).toContain('8 h');
    for (const key of ['payload', 'speed', 'chargingTime', 'ipRating']) expect(robot[key]).toBe('');
    expect(high(robot)).toContain('listed as add-ons/available equipment');
    expect(high(robot)).toContain('API in 48 h');
    expect(robot.maxRuntime).toBe('');
  });
  it('separates R-kiwi payload mass and cargo volume while retaining qualified battery headlines', () => {
    const robot = r('R-kiwi');
    expect(robot.payload).toContain('18 lb capacity');
    expect(robot.payload).toContain('19 L');
    expect(review(robot).fields.payload.status).toBe('documented');
    expect(robot.batteryLife).toContain('10-12 h');
    expect(high(robot)).toContain('not a capacity conflict');
    for (const key of ['speed', 'chargingTime', 'dof', 'ipRating']) expect(robot[key]).toBe('');
  });
  it('keeps future R-dog concept and present-tense directory wording from becoming availability', () => {
    const robot = r('R-dog');
    expect(robot.description).toContain('coming in 2027');
    expect(high(robot)).toContain('Availability wording is unresolved');
    expect(review(robot).fields.terrain.status).toBe('roadmap');
    expect(robot.releaseDate).toBe('');
    for (const key of ['weight', 'payload', 'speed', 'dof', 'batteryLife'])
      expect(robot[key]).toBe('');
  });
  it('adds fixed-surface R-top without importing shared six-axis headlines into exact hardware', () => {
    const robot = r('R-top');
    expect(robot.category).toBe('robotic-arm');
    expect(robot.description).toContain('fixed-surface');
    expect(robot.dof).toBe('');
    expect(robot.payload).toBe('');
    expect(high(robot)).toContain('not imported as another wheeled R-noid mode');
    expect(review(robot).fields.dof.note).toContain('Shared dual 6-DOF');
  });
});

describe('LocoRobo educational hardware and programme scopes', () => {
  it('keeps quadruped and hexapod morphology separate from mechanical axes ages and field deployment', () => {
    for (const model of ['LocoScout', 'LocoHex']) {
      const robot = l(model);
      for (const key of ['dof', 'ageRange', 'speed', 'payload', 'batteryLife'])
        expect(robot[key]).toBe('');
      expect(review(robot).fields.ageRange.note).toContain('not converted to ages');
    }
    expect(high(l('LocoScout'))).toContain('search-and-rescue simulations');
    expect(l('LocoHex').driveMode).toContain('Hexapod');
  });
  it('adds LocoXtreme with six sensors and programming support without joint or drive inference', () => {
    const robot = l('LocoXtreme');
    expect(robot.category).toBe('educational');
    expect(robot.description).toContain('Python and Java');
    expect(high(robot)).toContain('six integrated sensors');
    expect(robot.dof).toBe('');
    expect(robot.driveMode).toBe('');
  });
  it('adds LocoArm without assuming mobile base standard tooling or LocoRover arm identity', () => {
    const robot = l('LocoArm');
    expect(robot.description).toContain('Python-controlled');
    expect(high(robot)).toContain('not prove that a mobile base');
    expect(high(robot)).toContain('identical to the arm integrated into LocoRover');
    for (const key of ['dof', 'payload', 'handType', 'ageRange']) expect(robot[key]).toBe('');
  });
  it('retains LocoRover Mecanum hardware apart from course SLAM and numeric navigation accuracy', () => {
    const robot = l('LocoRover');
    expect(robot.driveMode).toContain('Four-wheel Mecanum');
    expect(high(robot)).toContain('ROS/Gazebo/SLAM');
    expect(high(robot)).toContain('not mechanical joint DOF');
    expect(robot.dof).toBe('');
    expect(robot.payload).toBe('');
  });
  it('preserves two named drone offers without treating LocoDroneX spelling and software as new airframes', () => {
    expect(l('LocoDrone')).toBeDefined();
    expect(l('LocoDrone X')).toBeDefined();
    expect(l('LocoDroneX')).toBeUndefined();
    for (const model of ['CodeMyDrones', 'LocoFly', 'TryDrones', 'BuildMyDrones'])
      expect(l(model)).toBeUndefined();
    expect(high(l('LocoDrone X'))).toContain('without a space');
    for (const model of ['LocoDrone', 'LocoDrone X'])
      for (const key of ['batteryLife', 'speed', 'payload', 'ageRange'])
        expect(l(model)[key]).toBe('');
  });
  it('exposes both sourced company focuses and preserves quote-only prices', () => {
    for (const [id, count] of [
      ['robot-com', 5],
      ['locorobo', 7],
    ]) {
      const brand = getAllBrands().find((v) => v.id === id);
      expect(brand.robots).toHaveLength(count);
      expect(getCompanyInsights(brand).primary.highlights).toHaveLength(5);
      for (const robot of brand.robots) expect(getStructuredOffer(robot.price)).toBeNull();
    }
  });
});

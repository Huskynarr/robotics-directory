import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getRobotSearchMatch } from '../../src/utils/robot-search.js';

const robot = (model) =>
  getAllRobots().allRobots.find((r) => r.manufacturer === 'Unitree' && r.model === model);
const field = (model, key) => getSpecificationReview(robot(model).id).fields[key];
const highlights = (model) => getProductInsights(robot(model).id).highlights.join(' ');

describe('Unitree variant, load and development boundaries', () => {
  it('keeps the six named additions separate and exposes manufacturer focus', () => {
    for (const model of ['A2-PRO', 'As2-W X', 'As2-W EDU', 'R1 AIR', 'R1 EDU', 'H1-2'])
      expect(robot(model), model).toBeDefined();
    const brand = getAllBrands().find((b) => b.id === 'unitree-robotics');
    expect(brand.modelCount).toBe(58);
    expect(getCompanyInsights(brand).primary.highlights.join(' ')).toContain(
      'separate developer configurations',
    );
  });
  it('uses one standard A2 LiDAR without inheriting the PRO bundle or core-component IP67', () => {
    expect(highlights('A2')).toContain('one LiDAR and one HD camera');
    expect(highlights('A2-PRO')).toContain('two LiDAR units');
    expect(robot('A2').weight).toContain('42 kg including battery');
    expect(robot('A2').ipRating).toBe('IP56');
    expect(robot('A2-PRO').ipRating).toContain('core components rated IP67');
    expect(field('A2-PRO', 'ipRating').note).toContain('does not establish uniform IP67');
  });
  it('separates A2 walking and standing loads, stairs and isolated climbs', () => {
    expect(robot('A2').payload).toContain('25 kg continuous walking');
    expect(robot('A2').payload).toContain('100 kg standing');
    expect(robot('A2').terrain).toContain('30 cm stair step');
    expect(robot('A2').terrain).toContain('separate maximum climb height');
    expect(robot('A2').batteryLife).toContain('25 kg load: >3 h');
  });
  it('does not assign As2 family IP54, torque or development support to AIR', () => {
    expect(robot('As2 AIR').ipRating).toBe('');
    expect(field('As2 AIR', 'ipRating').status).toBe('not-documented');
    expect(highlights('As2 AIR')).toContain('65 N·m');
    expect(highlights('As2 AIR')).toContain('8000 mAh');
    expect(robot('As2 AIR').tagsArray).not.toContain('dev-platform');
    expect(robot('As2 PRO').tagsArray).not.toContain('dev-platform');
    expect(robot('As2 X').tagsArray).toContain('dev-platform');
  });
  it('retains variant-specific As2 payload and loaded endurance', () => {
    expect(robot('As2 AIR').payload).toContain('10 kg continuous walking');
    expect(robot('As2 PRO').payload).toContain('13 kg continuous walking');
    expect(robot('As2 EDU').payload).toContain('15 kg continuous walking');
    expect(robot('As2 AIR').batteryLife).toContain('10 kg load: >1.5 h');
    expect(robot('As2 PRO').batteryLife).toContain('13 kg load: >2.5 h');
  });
  it('keeps charging docks and extra computing with the selected As2 edition', () => {
    expect(highlights('As2 X')).toContain('no charging dock');
    expect(highlights('As2 EDU')).toContain('charging dock and selectable compute expansion');
    expect(highlights('As2-W X')).toContain('not listed for X');
    expect(highlights('As2-W EDU')).toContain('EDU includes a charging dock');
  });
  it('does not describe an 80 cm isolated As2-W climb as a continuous stair rating', () => {
    for (const model of ['AS2-W', 'As2-W X', 'As2-W EDU']) {
      expect(robot(model).dof).toBe('16 joint motors');
      expect(robot(model).terrain).toContain('30 cm stair steps');
      expect(robot(model).terrain).toContain('separate maximum climb height');
      expect(robot(model).batteryLife).toContain('16 kg load: >2 h');
      expect(robot(model).payload).toContain('150 kg standing');
    }
  });
  it('removes the unsupported B2 price and qualifies special-configuration speed', () => {
    expect(robot('B2').price).toBe('Not disclosed');
    expect(robot('B2').speed).toContain('special configurations');
    expect(robot('B2').batteryLife).toContain('20 kg loaded walking: >4 h');
    expect(highlights('B2')).toContain('autonomous charging solution are optional');
  });
  it('corrects B2-W battery-inclusive mass and keeps kilometre range out of duration', () => {
    expect(robot('B2-W').weight).toBe('About 85 kg including battery');
    expect(robot('B2-W').website).toBe('https://www.unitree.com/b2-w/');
    expect(robot('B2-W').speed).toContain('15 km/h');
    for (const key of ['batteryLife', 'maxRuntime', 'chargingTime'])
      expect(robot('B2-W')[key]).toBe('');
    expect(field('B2-W', 'batteryLife').note).toContain('not operating hours');
    expect(highlights('B2-W')).toContain('25 km endurance with 40 kg load');
  });
  it('distinguishes R1 AIR cameras/joints/mass and EDU access', () => {
    expect(robot('R1 AIR').dof).toBe('20');
    expect(robot('R1 AIR').weight).toContain('27 kg');
    expect(highlights('R1 AIR')).toContain('monocular camera');
    expect(robot('R1').dof).toBe('26');
    expect(robot('R1').weight).toContain('29 kg');
    expect(robot('R1').tagsArray).not.toContain('dev-platform');
    expect(robot('R1 EDU').dof).toContain('26-40');
    expect(robot('R1 EDU').tagsArray).toContain('dev-platform');
  });
  it('does not silently turn a kg value under a torque label into an R1 payload', () => {
    for (const model of ['R1 AIR', 'R1', 'R1 EDU']) {
      expect(robot(model).payload).toBe('');
      expect(field(model, 'payload').status).toBe('not-documented');
      expect(field(model, 'payload').note).toContain('label/unit ambiguity');
    }
  });
  it('keeps published USD prices qualified and EDU prices unspecified', () => {
    expect(robot('R1 AIR').price).toBe('4900 USD excluding tax and shipping');
    expect(robot('R1').price).toBe('5900 USD excluding tax and shipping');
    expect(robot('H2').price).toBe('29900 USD excluding tax and shipping');
    for (const model of ['R1 EDU', 'H2 EDU'])
      expect(field(model, 'price').status).toBe('not-documented');
  });
  it('separates H2 rated and peak arm payload from optional computing', () => {
    for (const model of ['H2', 'H2 EDU']) {
      expect(robot(model).payload).toContain('7 kg rated; about 15 kg peak');
      expect(robot(model).size).toContain('1820 x 456 x 218');
      expect(robot(model).chargingTime).toBe('');
    }
    expect(robot('H2').tagsArray).not.toContain('dev-platform');
    expect(highlights('H2')).toContain('no extra compute module');
    expect(highlights('H2 EDU')).toContain('selectable additional modules such as Thor');
    expect(robot('H2').description).not.toContain('3x Jetson');
  });
  it('does not retain H1 generic payload, battery hours or infer total joints from limb counts', () => {
    expect(robot('H1').weight).toBe('About 47 kg total');
    expect(robot('H1').price).toBe('Not disclosed');
    for (const key of ['payload', 'batteryLife', 'maxRuntime', 'dof'])
      expect(robot('H1')[key]).toBe('');
    expect(robot('H1').speed).toContain('potential mobility only');
  });
  it('keeps H1-2 rated/peak loads and speed separate from H1', () => {
    expect(robot('H1-2').weight).toBe('About 70 kg total');
    expect(robot('H1-2').payload).toContain('7 kg rated; about 21 kg peak');
    expect(robot('H1-2').speed).toBe('<2 m/s');
    expect(robot('H1-2').dof).toContain('27');
    expect(robot('H1-2').batteryLife).toBe('');
  });
  it('makes the exact standard perception boundary searchable', () => {
    const r = robot('A2');
    expect(
      getRobotSearchMatch(r, 'standard column lists one LiDAR', getProductInsights(r.id)).kind,
    ).toBe('highlight');
  });
});

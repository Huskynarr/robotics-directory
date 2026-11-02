import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getRobotSearchMatch } from '../../src/utils/robot-search.js';

const all = getAllRobots().allRobots;
const robot = (id) => all.find((r) => r.id === `pal-robotics-${id}`);
const field = (id, key) => getSpecificationReview(robot(id).id).fields[key];
const highlights = (id) => getProductInsights(robot(id).id).highlights.join(' ');

describe('PAL Robotics named platforms and configuration boundaries', () => {
  it('retains 17 distinct platforms/configurations and exposes the manufacturer focus', () => {
    const brand = getAllBrands().find((b) => b.id === 'pal-robotics');
    expect(brand.modelCount).toBe(17);
    expect(getCompanyInsights(brand).primary.highlights.join(' ')).toContain(
      'classified as legacy',
    );
    expect(robot('tiago-plus-plus').model).toBe('TIAGo++');
    expect(robot('tiago-lite').id).not.toBe(robot('tiago').id);
    expect(all.some((r) => r.model === 'TIAGo Pro Teleoperation Station')).toBe(false);
  });
  it('separates mobile Pro reach from the accessory station without a false conflict', () => {
    expect(robot('tiago-pro').armReach).toContain('92 cm vertical; 236 cm horizontal');
    expect(field('tiago-pro', 'armReach').status).toBe('documented');
    expect(field('tiago-pro', 'armReach').note).toContain('96/240 cm');
    expect(robot('tiago-pro').payload).toContain('excluding end effector');
    expect(robot('tiago-pro').dof).toContain('including default grippers');
    expect(robot('tiago-pro').liftStroke).toBe('35 cm');
  });
  it('retains StockBot endurance/recharge conflicts and separates optical from RFID capture', () => {
    for (const key of ['batteryLife', 'chargingTime'])
      expect(field('stockbot', key).status).toBe('conflicting');
    expect(robot('stockbot').batteryLife).toContain('~10 h');
    expect(robot('stockbot').chargingTime).toContain('5 h');
    expect(highlights('stockbot')).toContain('optical camera capture height up to 2.4 m');
    expect(highlights('stockbot')).toContain('RFID capture height up to 4 m');
    expect(robot('stockbot').navigationAccuracy).toBe('');
    expect(robot('stockbot').dockingAccuracy).toBe('');
  });
  it('keeps Kangaroo bimanual loads distinct from two extended arms', () => {
    expect(robot('kangaroo').payload).toContain('7/5/3 kg for 4/5/7-DoF arms');
    expect(robot('kangaroo').payload).toContain('bimanual: 30/28/25 kg');
    expect(highlights('kangaroo')).toContain('not the sum');
    expect(robot('kangaroo').weight).toContain('configuration-dependent');
    expect(robot('kangaroo').batteryLife).toContain('operating conditions unspecified');
  });
  it('retains TALOS torque-sensor exclusions and walking versus standby endurance', () => {
    expect(highlights('talos')).toContain('excludes head, wrists and grippers');
    expect(robot('talos').batteryLife).toBe('1.5 h walking; 3 h standby');
    expect(robot('talos').payload).toBe('6 kg per arm at full extension');
    expect(robot('talos').speed).toBe('');
  });
  it('does not certify ARI mass, depth or a universal language/navigation bundle', () => {
    expect(robot('ari').weight).toBe('');
    expect(field('ari', 'size').status).toBe('conflicting');
    expect(robot('ari').size).toContain('73 cm webpage / 75 cm datasheet');
    expect(highlights('ari')).toContain('cloud speech');
    expect(highlights('ari')).toContain('may change the stated GDPR position');
  });
  it('keeps conditional TIAGo batteries and separate named arm configurations', () => {
    expect(robot('tiago').batteryLife).toBe('4–5 h with one battery; 8–10 h with two batteries');
    expect(robot('tiago-plus-plus').dof).toContain('Two seven-axis arms');
    for (const id of ['tiago-plus-plus', 'tiago-lite'])
      for (const key of ['weight', 'batteryLife', 'size', 'payload'])
        expect(robot(id)[key]).toBe('');
  });
  it('retains differential Base payload, speed and gap/step source distinctions', () => {
    for (const key of ['payload', 'speed', 'terrain'])
      expect(field('tiago-base', key).status).toBe('conflicting');
    expect(robot('tiago-base').terrain).toContain('~6%');
    expect(highlights('tiago-base')).toContain('percent slope is not degrees');
    expect(robot('tiago-base').maxRuntime).toBe('');
    expect(robot('tiago-base').chargingTime).toBe('');
  });
  it('does not merge the redirected historical AI base with the 100 kg OMNI Base', () => {
    expect(robot('tiago-base-ai').payload).toContain('150 kg');
    expect(robot('tiago-omni-base').payload).toBe('100 kg');
    expect(robot('tiago-base-ai').ipRating).toBe('');
    expect(robot('tiago-base-ai').website).toContain('/blog/pal-robotics-amrs/');
    expect(robot('tiago-omni-base').terrain).toContain('not vertical step height');
  });
  it('does not inherit bare-base physical ratings into three equipped integrations', () => {
    for (const id of ['tiago-base-delivery', 'tiago-base-actuated-conveyor', 'tiago-base-shelf'])
      for (const key of ['weight', 'size', 'payload', 'speed', 'batteryLife']) {
        expect(robot(id)[key]).toBe('');
        expect(field(id, key).status).toBe('not-documented');
      }
  });
  it('keeps arm peak/continuous payload, external-power cycle and coming-soon software distinct', () => {
    expect(robot('tiago-pro-arm').payload).toContain('7 kg peak / 6 kg continuous');
    expect(field('tiago-pro-arm', 'payload').status).toBe('conflicting');
    expect(field('tiago-pro-arm', 'size').status).toBe('conflicting');
    expect(robot('tiago-pro-arm').batteryLife).toBe('');
    expect(robot('tiago-pro-arm').maxRuntime).toBe('');
    expect(highlights('tiago-pro-arm')).toContain('not 24 h battery life');
    expect(highlights('tiago-pro-arm')).toContain('labelled coming soon');
  });
  it('preserves legacy head package-price conditions and makes the full discount claim searchable', () => {
    const r = robot('tiago-head');
    expect(r.dof).toBe('2');
    expect(r.price).toBe('Not disclosed');
    expect(r.batteryLife).toBe('');
    const match = getRobotSearchMatch(r, 'educational discount', getProductInsights(r.id));
    expect(match.kind).toBe('highlight');
    expect(match.highlight).toContain('excluding shipping, taxes and duties');
    expect(highlights('reem-c')).toContain('classifies REEM-C as legacy');
  });
});

import { describe, expect, it } from 'vitest';
import {
  getSpecificationReview,
  getSpecificationReviewCoverage,
  validateSpecificationReview,
} from '../../src/data/specification-reviews.js';
import { getAllRobots } from '../../src/data/robots.js';
import { t } from '../../src/data/translations.js';

describe('field-specific primary-source reviews', () => {
  it('keeps original Indy and historical RP separate from V3 and RP2 specifications', () => {
    const original = getSpecificationReview('neuromeka-indy7').fields;
    const v3 = getSpecificationReview('neuromeka-indy7-v3').fields;
    expect(original.releaseDate.value).toBe('2017');
    expect(original.armReach.value).toBe('');
    expect(original.weight.value).toBe('');
    expect(v3.armReach.value).toContain('1210 mm');
    expect(v3.dof.value).toContain('6');
    expect(getSpecificationReview('neuromeka-indy-rp').fields.releaseDate.value).toBe('2016');
    expect(getSpecificationReview('neuromeka-indy-rp2').fields.releaseDate.value).toBe('');
    expect(getSpecificationReview('neuromeka-indy-rp2').fields.dof.value).toContain('7');
  });

  it('preserves preliminary OPTi mass and NURI source-label differences', () => {
    const opti = getSpecificationReview('neuromeka-opti3').fields;
    expect(opti.weight.status).toBe('roadmap');
    expect(opti.weight.value).toContain('TBD');
    const nuri20 = getSpecificationReview('neuromeka-nuri20c').fields.armRepeatability;
    expect(nuri20.status).toBe('conflicting');
    expect(nuri20.value).toContain('0.5 mm');
    expect(nuri20.value).toContain('0.03 mm');
    const nuri30 = getSpecificationReview('neuromeka-nuri30').fields.armReach;
    expect(nuri30.status).toBe('conflicting');
    expect(nuri30.value).toContain('1990 mm');
    expect(nuri30.value).toContain('1800 mm');
  });

  it('does not convert delta example cycles or repeated XY labels into arm speed and reach', () => {
    for (const id of ['neuromeka-d3', 'neuromeka-d6']) {
      const fields = getSpecificationReview(id).fields;
      expect(fields.dof.value).toContain('4');
      expect(fields.speed.value).toBe('');
      expect(fields.armReach.value).toBe('');
      expect(fields.size.value).toBe('');
      expect(fields.description.value).toContain('KOREA ONLY');
    }
  });

  it('separates SOTO tote handling from conflicting total payload and charging claims', () => {
    const fields = getSpecificationReview('magazino-soto').fields;
    expect(fields.payload.value).toContain('20 kg per tote');
    expect(fields.transportPayload.status).toBe('conflicting');
    expect(fields.transportPayload.value).toContain('250 kg');
    expect(fields.transportPayload.value).toContain('240 kg');
    expect(fields.chargingTime.status).toBe('conflicting');
    expect(fields.speed.status).toBe('conflicting');
    expect(fields.turningRadius.value).toBe('');
  });

  it('does not convert TORU object limits or NEO system throughput into robot ratings', () => {
    const fields = getSpecificationReview('magazino-toru').fields;
    expect(fields.payload.value).toContain('5.8 kg');
    expect(fields.payload.value).toContain('5 kg');
    for (const key of [
      'weight',
      'size',
      'batteryLife',
      'maxRuntime',
      'throughput',
      'transportPayload',
    ]) {
      expect(fields[key].value).toBe('');
    }
    expect(fields.description.value).toContain('350+picks/hour');
  });

  it('keeps FarmBot preorder tooling separate from the documented v1.8 generation', () => {
    const old = getSpecificationReview('farmbot-genesis-v1-8');
    const next = getSpecificationReview('farmbot-genesis-v1-9');
    expect(old.fields.size.status).toBe('documented');
    expect(next.fields.size.status).toBe('roadmap');
    expect(next.fields.handType.value).toContain('watering nozzle permanently mounted');
    expect(old.fields.handType.value).toContain('exchange');
    expect(old.fields.handType.value).not.toContain('permanently');
    expect(next.fields.releaseDate.value).toBe('');
  });

  it('does not turn FarmBot shipping weights component IP or bed area into robot ratings', () => {
    for (const id of [
      'farmbot-genesis-xl-v1-8',
      'farmbot-genesis-xl-v1-9',
      'farmbot-express-xl-v1-1',
    ]) {
      const fields = getSpecificationReview(id).fields;
      for (const key of [
        'weight',
        'ipRating',
        'areaRate',
        'workingWidth',
        'batteryLife',
        'chargingTime',
      ]) {
        expect(fields[key].value).toBe('');
      }
    }
    expect(getSpecificationReview('farmbot-genesis-v1-8').fields.dof.value).toContain(
      '3 Cartesian',
    );
  });

  it('retains cancelled FarmBot MAX designs and historical controller revisions explicitly', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    expect(robots.get('farmbot-genesis-max-v1-5').size).toContain('3 x 18 m');
    expect(robots.get('farmbot-express-max-v1-0').size).toContain('2.4 x 18 m');
    expect(robots.get('farmbot-genesis-max-v1-5').description).toContain('cancelled');
    expect(robots.get('farmbot-express-max-v1-0').description).toContain('cancelled');
    expect(robots.get('farmbot-genesis-v1-2').description).toContain('Arduino MEGA/RAMPS');
    expect(robots.get('farmbot-genesis-v1-3').description).toContain('Farmduino');
  });

  it('does not transfer base mBot2 energy or speed figures into Rover or original mBot', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    expect(robots.get('makeblock-mbot-neo').batteryLife).toContain('5 h');
    expect(robots.get('makeblock-mbot-neo').speed).toContain('20 cm/s');
    for (const id of ['makeblock-mbot', 'makeblock-mbot2-rover-robotics-kit']) {
      expect(robots.get(id).batteryLife).toBe('');
      expect(robots.get(id).chargingTime).toBe('');
      expect(robots.get(id).speed).toBe('');
    }
    expect(robots.get('makeblock-mbot2-rover-robotics-kit').handType).toContain(
      'Gripping function',
    );
  });

  it('keeps Codey Rocky adapter instructions out of charging duration and runtime', () => {
    const fields = getSpecificationReview('makeblock-codey-rocky').fields;
    expect(fields.ageRange.value).toContain('6+');
    expect(fields.chargingTime.value).toBe('');
    expect(fields.chargingTime.note).toContain('5 V/1 A');
    expect(fields.batteryLife.value).toBe('');
    expect(fields.dof.value).toBe('');
  });

  it('does not treat construction counts or catalog dates as fixed manipulation hardware or launch years', () => {
    for (const id of ['makeblock-mbot-ultimate-2-0', 'makeblock-mbot-ranger']) {
      const fields = getSpecificationReview(id).fields;
      expect(fields.handType.value).toBe('');
      expect(fields.dof.value).toBe('');
      expect(fields.payload.value).toBe('');
      expect(fields.releaseDate.value).toBe('');
    }
    expect(getSpecificationReview('makeblock-mtiny').fields.ageRange.value).toBe('');
  });

  it('keeps Nexaro mapping speed and maximum area out of cleaning throughput', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    for (const id of ['nexaro-nr-1500', 'nexaro-nr-1700']) {
      expect(robots.get(id).areaRate).toContain('100 m²/h');
      expect(robots.get(id).areaRate).not.toMatch(/300|600|1,000/);
      expect(robots.get(id).waterTankCapacity).toBe('');
      expect(robots.get(id).minAisleWidth).toBe('');
    }
    expect(robots.get('nexaro-nr-1500').description).toContain('400 m²');
    expect(robots.get('nexaro-nr-1700').description).toContain('1,000 m²');
  });

  it('exposes Nexaro NR 1700 body-size disagreement without merging the NR 1500', () => {
    const review = getSpecificationReview('nexaro-nr-1700');
    expect(review.fields.size.status).toBe('conflicting');
    expect(review.fields.size.value).toContain('346 x 344 x 173 mm');
    expect(review.fields.size.value).toContain('343 x 343 x 175 mm');
    expect(getSpecificationReview('nexaro-nr-1500').fields.size.status).toBe('documented');
    expect(getSpecificationReview('nexaro-nr-1500').sources[0].url).toContain('NR1500');
    expect(review.sources[0].url).toContain('NR1700');
  });

  it('retains Nexaro runtime modes and partial charging windows rather than full-charge claims', () => {
    for (const id of ['nexaro-nr-1500', 'nexaro-nr-1700']) {
      const fields = getSpecificationReview(id).fields;
      expect(fields.batteryLife.value).toContain(
        '110 min Balanced; 105 min Performance (hard floor)',
      );
      expect(fields.chargingTime.value).toContain('95 min (15–85%); 120 min (15–95%)');
      expect(fields.releaseDate.value).toBe('');
      expect(fields.price.value).toBe('');
    }
  });

  it('separates BG1 speed from Pro and retains the charging-voltage boundary ambiguity', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    expect(robots.get('pudu-robotics-pudu-bg1').speed).toBe('0.2-1.0 m/s');
    expect(robots.get('pudu-robotics-pudu-bg1-pro').speed).toBe('0.2-1.2 m/s');
    for (const id of ['pudu-robotics-pudu-bg1', 'pudu-robotics-pudu-bg1-pro']) {
      expect(robots.get(id).payload).toBe('');
      expect(robots.get(id).workingWidth).toContain('708 mm with side brushes');
      expect(getSpecificationReview(id).fields.chargingTime.status).toBe('conflicting');
      expect(getSpecificationReview(id).fields.chargingTime.note).toContain('exactly 180 V');
    }
  });

  it('does not transfer CC1 Pro vacuum modes or scrubbing pressure into Disc payload', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    const pro = robots.get('pudu-robotics-pudu-cc1-pro');
    const disc = robots.get('pudu-robotics-pudu-cc1-pro-disc');
    expect(pro.weight).toBe('75 kg');
    expect(disc.weight).toBe('80 kg');
    expect(pro.workingWidth).toContain('500 mm');
    expect(disc.workingWidth).toContain('380 mm');
    expect(disc.payload).toBe('');
    expect(disc.batteryLife).toContain('3.8 h+ in Standard Mode');
    expect(disc.batteryLife).not.toContain('9 h');
    expect(disc.chargingTime).toBe('About 4.5 h');
  });

  it('keeps ET1 task widths and MT1 variant mass, filters and operating modes explicit', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    const et1 = robots.get('pudu-robotics-pudu-et1');
    expect(et1.workingWidth).toContain('300 mm scrubbing/dust mopping; 390 mm sweeping/vacuuming');
    const max = robots.get('pudu-robotics-pudu-mt1-max');
    const vac = robots.get('pudu-robotics-pudu-mt1-vac');
    expect(max.weight).toBe('85 kg');
    expect(vac.weight).toBe('75 kg');
    expect(max.ipRating).toContain('IP54');
    expect(vac.ipRating).toBe('');
    expect(vac.batteryLife).toContain('4 h standard sweep/vacuum on hard floors');
    expect(vac.areaRate).toContain('1400 m²/h');
  });

  it('does not derive GT3 hourly output from area per charge or inherit GT7 ingress protection', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    const gt3 = robots.get('pudu-robotics-pudu-gt3');
    const gt5 = robots.get('pudu-robotics-pudu-gt5');
    const gt7 = robots.get('pudu-robotics-pudu-gt7');
    expect(gt3.areaRate).toBe('');
    expect(getSpecificationReview(gt3.id).fields.areaRate.status).toBe('not-documented');
    expect(gt3.chargingTime).toContain('optional fast charging: 2 h');
    expect(gt5.chargingTime).toContain('Standard: 8 h');
    expect(gt7.maxRuntime).toBe('Up to 12 h in non-collection mode');
    expect(gt7.ipRating).toBe('');
    expect(gt7.size).toContain('1500 x 1400 mm lifted');
    expect(gt7.workingWidth).toContain('1600 mm');
  });

  it('uses D5 exact variant step, battery-inclusive mass and offer evidence without generic speed inheritance', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    const d5 = robots.get('pudu-robotics-d5');
    const wheel = robots.get('pudu-robotics-d5-w');
    expect(d5.terrain).toContain('30 cm maximum step; 25° ascent');
    expect(wheel.terrain).toContain('25 cm maximum step; 30° ascent');
    expect(d5.weight).toBe('61 kg including battery');
    expect(wheel.weight).toBe('62 kg including battery');
    expect(d5.price).toMatch(/^80000 USD/);
    expect(wheel.price).toMatch(/^85000 USD/);
    for (const robot of [d5, wheel]) {
      expect(robot.speed).toBe('');
      expect(robot.chargingTime).toBe('');
      expect(robot.releaseDate).toBe('');
      expect(getSpecificationReview(robot.id).fields.speed.note).toContain('generic series prose');
    }
  });

  it('provides working-area labels in German and English fallback for other UI languages', () => {
    expect(t('spec.workingWidth', 'de')).toBe('Arbeitsbreite');
    expect(t('spec.areaRate', 'de')).toBe('Flächenleistung');
    expect(t('spec.workingWidth', 'fr')).toBe('Working width');
    expect(t('spec.areaRate', 'ja')).toBe('Area rate');
  });
  it('keeps Pudu industrial family masses unselected and separates lifting hardware', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    for (const family of ['t150', 't300']) {
      const id = `pudu-robotics-pudu-${family}`;
      expect(robots.get(id).category).toBe('commercial');
      expect(robots.get(id).weight).toBe('');
      expect(robots.get(`${id}-standard`).weight).toBe('65 kg');
      expect(robots.get(`${id}-lifting`).weight).toBe('81 kg');
      expect(robots.get(id).chargingTime).toContain('0%-90%');
    }
    expect(robots.get('pudu-robotics-pudu-t300-standard').batteryLife).toBe(
      '12 h no load; 8 h full load',
    );
    expect(robots.get('pudu-robotics-pudu-t600').size).toBe('');
    expect(robots.get('pudu-robotics-pudu-t600-upright').weight).toBe('112 kg');
    expect(robots.get('pudu-robotics-pudu-t600-underride').weight).toBe('94 kg');
  });

  it('retains MP2000 voltage, load and fork-width conditions', () => {
    const robots = getAllRobots().allRobots.filter((r) => r.model.startsWith('PUDU MP2000'));
    expect(robots).toHaveLength(3);
    for (const robot of robots) {
      expect(robot.chargingTime).toContain('3.2 h at 100-120 Vac');
      expect(robot.batteryLife).toBe('12 h no load; 6 h maximum load');
      expect(robot.speed).toContain('1.6 m/s unloaded; 1.2 m/s loaded');
      expect(robot.weight).toBe('');
    }
    const standard = robots.find((r) => r.model.endsWith('Standard'));
    const narrow = robots.find((r) => r.model.endsWith('Narrow Fork'));
    expect(standard.description).toContain('620 mm outer fork');
    expect(narrow.description).toContain('550 mm outer fork');
  });

  it('does not multiply BellaBot tray capacity or inherit base runtime into Pro', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    for (const id of ['pudu-robotics-bellabot', 'pudu-robotics-bellabot-pro']) {
      expect(robots.get(id).payload).toBe('40 kg total maximum; 10 kg per tray');
      expect(robots.get(id).category).toBe('commercial');
      expect(robots.get(id).price).toBe('Not disclosed');
    }
    expect(robots.get('pudu-robotics-bellabot-pro').batteryLife).toBe('11 h with no load');
    expect(getSpecificationReview('pudu-robotics-bellabot').fields.batteryLife.status).toBe(
      'conflicting',
    );
    expect(robots.get('pudu-robotics-bellabot').maxRuntime).toBe('');
    expect(robots.get('pudu-robotics-bellabot-pro').description).toContain('under development');
  });

  it('keeps PuduBot 2 manual screen configurations distinct from marketing claims', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    const base = 'pudu-robotics-pudubot-2';
    expect(robots.get(`${base}-pdfd12`).weight).toBe('37 kg');
    expect(robots.get(`${base}-pdfd22`).weight).toBe('39 kg');
    for (const suffix of ['pdfd12', 'pdfd22']) {
      const robot = robots.get(`${base}-${suffix}`);
      expect(robot.chargingTime).toBe('About 3 h (manual)');
      expect(robot.payload).toBe('10 kg rated / 13 kg maximum per tray');
      expect(robot.batteryLife).not.toContain('15 h');
    }
    expect(getSpecificationReview(base).fields.chargingTime.status).toBe('conflicting');
    expect(robots.get(base).batteryLife).toContain('15 h full load');
  });

  it('retains CC1 mode limits and excludes accessory mass and arm-payload inference', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    const cc1 = robots.get('pudu-robotics-pudu-cc1');
    expect(cc1.terrain).toContain('20 mm threshold / 35 mm gap');
    expect(cc1.maxRuntime).toBe('');
    expect(getSpecificationReview(cc1.id).fields.batteryLife.status).toBe('conflicting');
    expect(robots.get('pudu-robotics-pudu-mt1').weight).toBe('65 kg');
    const arm = robots.get('pudu-robotics-flashbot-arm');
    expect(arm.weight).toBe('');
    expect(arm.speed).toBe('');
    expect(arm.payload).toContain('not an arm payload rating');
    expect(arm.dof).toContain('6 active + 5 passive');
  });

  it('keeps legacy KettyBot/HolaBot load and charging conditions separate from Pro', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    expect(robots.get('pudu-robotics-kettybot').chargingTime).toBe('4 h');
    expect(robots.get('pudu-robotics-kettybot-pro').chargingTime).toBe('3.5 h');
    expect(getSpecificationReview('pudu-robotics-kettybot-pro').fields.terrain.status).toBe(
      'conflicting',
    );
    expect(robots.get('pudu-robotics-holabot').payload).toContain(
      '10 kg per level crossing a 5 mm threshold',
    );
  });

  it('distinguishes Husky generations and leaves A300 source conflicts unresolved', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    const a300 = robots.get('clearpath-robotics-husky-a300');
    const a200 = robots.get('clearpath-robotics-husky-a200');
    expect(a300.payload).toContain('100 kg maximum; 50 kg all-terrain');
    expect(a200.payload).toContain('75 kg maximum; 20 kg all-terrain');
    expect(a200.ipRating).toBe('IP44');
    expect(a200.tagsArray).toContain('historical');
    const review = getSpecificationReview(a300.id);
    for (const key of ['size', 'batteryLife'])
      expect(review.fields[key].status).toBe('conflicting');
    expect(a300.batteryLife).toContain('8/16/24');
    expect(a300.batteryLife).toContain('4/8/12');
    expect(a300.maxRuntime).toBe('');
  });

  it('uses installed Husky-system payload instead of inheriting bare-base capacity', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    const amp = robots.get('clearpath-robotics-husky-amp');
    const observer = robots.get('clearpath-robotics-husky-observer');
    expect(amp.payload).toContain('81 kg maximum; 31.5 kg all-terrain');
    expect(amp.weight).toBe('98.5 kg');
    expect(observer.payload).toContain('10 kg additional');
    expect(observer.ipRating).toContain('Designed for IP55');
    expect(observer.chargingTime).toBe('');
    expect(getSpecificationReview(observer.id).fields.chargingTime.note).toContain('300 W');
    expect(amp.chargingTime).toContain('8-12 h');
  });

  it('does not mix Dingo overview figures with specific drive and battery revisions', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    const family = robots.get('clearpath-robotics-dingo');
    for (const key of ['weight', 'size', 'payload', 'batteryLife']) {
      expect(family[key]).toBe('');
      expect(getSpecificationReview(family.id).fields[key].status).toBe('not-documented');
    }
    expect(robots.get('clearpath-robotics-dingo-d').weight).toBe('12 kg');
    const omni = robots.get('clearpath-robotics-dingo-o');
    expect(omni.weight).toBe('17.5 kg');
    expect(omni.payload).toContain('25 kg');
    expect(omni.batteryLife).toContain('1.0:');
    expect(omni.batteryLife).toContain('1.5:');
    expect(omni.batteryLife).toContain('1-3 LiFePO4');
    expect(omni.maxRuntime).toBe('');
  });

  it('retains Warthog and Ridgeback mass/runtime qualifications instead of choosing larger figures', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    const warthog = robots.get('clearpath-robotics-warthog-ugv');
    const ridgeback = robots.get('clearpath-robotics-ridgeback');
    expect(getSpecificationReview(warthog.id).fields.weight.status).toBe('conflicting');
    expect(getSpecificationReview(warthog.id).fields.batteryLife.status).toBe('conflicting');
    expect(warthog.batteryLife).toContain('Li-ion: 3 h');
    expect(warthog.batteryLife).toContain('LiFePO4: 6 h');
    expect(warthog.maxRuntime).toBe('');
    expect(getSpecificationReview(ridgeback.id).fields.weight.status).toBe('conflicting');
    expect(ridgeback.size).toContain('before serial R100-0111');
    expect(ridgeback.batteryLife).toContain('with maximum payload');
  });

  it('keeps Boxer standby and TurtleBot charging separate from operating endurance', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    const boxer = robots.get('clearpath-robotics-boxer');
    expect(boxer.batteryLife).toContain('3 h continuous driving / 8 h standby');
    expect(boxer.maxRuntime).toBe('');
    expect(boxer.payload).toBe('');
    for (const id of ['clearpath-robotics-turtlebot-4', 'clearpath-robotics-turtlebot-4-lite']) {
      const robot = robots.get(id);
      expect(robot.chargingTime).toBe('2 h 30 min');
      expect(robot.maxRuntime).toContain('load-dependent');
      expect(robot.speed).toContain('0.31 m/s in safe mode; 0.46 m/s without safe mode');
    }
  });
  it('does not assign a mix of AIR price and X speed to the generic Go2 family', () => {
    const robot = getAllRobots().allRobots.find((r) => r.id === 'unitree-go2');
    const review = getSpecificationReview(robot.id);
    expect(robot.price).toBe('Not disclosed');
    for (const key of ['speed', 'payload', 'batteryLife', 'maxRuntime', 'terrain']) {
      expect(robot[key]).toBe('');
      expect(review.fields[key].status).toBe('not-documented');
    }
    expect(robot.weight).toContain('including battery');
  });

  it('keeps Go2 Pro performance and standard battery separate from X and EDU', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    const pro = robots.get('unitree-go2-pro');
    expect(pro.speed).toBe('0-3.5 m/s');
    expect(pro.price).toBe('2800 USD excluding tax and freight');
    expect(pro.payload).toContain('maximum about 10 kg');
    expect(pro.maxRuntime).toContain('2 h');
    expect(robots.get('unitree-go2-x').speed).toContain('maximum about 5 m/s');
    expect(robots.get('unitree-go2-edu').maxRuntime).toContain('4 h');
    expect(robots.get('unitree-go2-edu').ageRange).toBe('');
    for (const id of [
      'unitree-go2',
      'unitree-go2-air',
      'unitree-go2-pro',
      'unitree-go2-x',
      'unitree-go2-edu',
    ]) {
      const robot = robots.get(id);
      expect(robot.ipRating).toBe('');
      expect(robot.chargingTime).toBe('');
      expect(() => validateSpecificationReview(getSpecificationReview(id), robot)).not.toThrow();
    }
  });

  it('separates G1 posture-dependent arm load and optional EDU hands from walking speed', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    for (const [id, load] of [
      ['unitree-g1', '2 kg'],
      ['unitree-g1-edu', '3 kg'],
    ]) {
      const robot = robots.get(id);
      expect(robot.payload).toContain(load);
      expect(robot.payload).toContain('arm maximum load');
      expect(robot.speed).toBe('');
      expect(robot.maxRuntime).toBe('');
      expect(getSpecificationReview(id).fields.payload.note).toContain('arm extension posture');
    }
    expect(robots.get('unitree-g1').handType).toBe('none');
    expect(robots.get('unitree-g1-edu').handType).toContain('Optional Dex3-1');
  });

  it('keeps XYZ mobile handling payload, base travel and footprint meanings explicit', () => {
    const robots = getAllRobots().allRobots;
    for (const [model, payload, year] of [
      ['RockyOne', '30 kg', '2023'],
      ['RockyLight', '25 kg', '2024'],
    ]) {
      const robot = robots.find((r) => r.manufacturer === 'XYZ Robotics' && r.model === model);
      const review = getSpecificationReview(robot.id);
      expect(robot.payload).toContain(payload);
      expect(robot.speed).toContain('base travel');
      expect(robot.size).toContain('footprint');
      expect(robot.size).toContain('robot height not stated');
      expect(robot.releaseDate).toBe(year);
      for (const key of ['batteryLife', 'maxRuntime', 'chargingTime']) {
        expect(robot[key]).toBe('');
        expect(review.fields[key].status).toBe('not-documented');
      }
      expect(() => validateSpecificationReview(review, robot)).not.toThrow();
    }
  });

  it('never copies XYZ mobile-model specifications or case dates into SE variants', () => {
    const robots = getAllRobots().allRobots.filter(
      (r) => r.manufacturer === 'XYZ Robotics' && r.model.endsWith(' SE'),
    );
    expect(robots).toHaveLength(2);
    for (const robot of robots) {
      const review = getSpecificationReview(robot.id);
      expect(robot.tagsArray).not.toContain('autonomous-nav');
      for (const key of [
        'weight',
        'size',
        'payload',
        'speed',
        'ipRating',
        'terrain',
        'batteryLife',
        'maxRuntime',
        'chargingTime',
        'releaseDate',
      ]) {
        expect(robot[key], `${robot.model}.${key}`).toBe('');
        expect(review.fields[key].status).toBe('not-documented');
      }
      expect(review.sources.every((source) => source.type === 'manufacturer')).toBe(true);
    }
  });
  it('rejects a changed catalog value instead of silently retaining its source badge', () => {
    const review = getSpecificationReview('pudu-robotics-pudu-d9');
    const robot = getAllRobots().allRobots.find((r) => r.id === review.robotId);
    expect(() => validateSpecificationReview(review, { ...robot, weight: '55 kg' })).toThrow(
      /Stale or invalid.*weight/,
    );
  });

  it('does not attach generic missing-value notes to documented catalog fields', () => {
    for (const robot of getAllRobots().allRobots) {
      const review = getSpecificationReview(robot.id);
      for (const [key, field] of Object.entries(review?.fields || {})) {
        if (field.status !== 'documented') continue;
        expect(field.note || '', `${robot.id}.${key}`).not.toMatch(/^No exact-model/);
      }
    }
    expect(getSpecificationReview('fdata-robot-a011').fields.batteryLife.note).not.toContain(
      'No explicit battery operating duration',
    );
    expect(getSpecificationReview('fdata-robot-a005').fields.chargingTime.note).not.toContain(
      'does not establish a full recharge duration',
    );
    expect(getSpecificationReview('productive-robotics-blaze-lf').fields.workTableSize.note).toBe(
      '',
    );
  });

  it('reports reviewed fields separately from whole-model certification', () => {
    const coverage = getSpecificationReviewCoverage();
    expect(coverage.reviewedCatalogModels).toBe(1259);
    expect(coverage.reviewedFields).toBe(23799);
    expect(coverage.fieldStatuses.conflicting).toBe(316);
    expect(coverage.scope).toContain('unmarked fields remain unverified');
    expect(getSpecificationReview('unitree-go2-w').fields.weight.status).toBe('documented');
    expect(getSpecificationReview('unitree-go2-pro').fields.speed.value).toBe('0-3.5 m/s');
  });

  it('does not replace an unsupported initial release year with a later launch milestone', () => {
    const robot = getAllRobots().allRobots.find((r) => r.id === 'anybotics-anymal-x');
    const review = getSpecificationReview(robot.id);
    expect(robot.releaseDate).toBe('');
    expect(review.fields.releaseDate.status).toBe('not-documented');
    expect(review.fields.releaseDate.note).toContain('does not establish the first release');
    expect(robot.description).not.toMatch(/world.s first|atex|ip67|depth cameras/i);
  });

  it('keeps food capacity separate from payload and US/standard cooking configurations', () => {
    const robots = getAllRobots().allRobots.filter((r) => r.manufacturer === 'T-Chef');
    expect(robots).toHaveLength(6);
    const byModel = new Map(robots.map((r) => [r.model, r]));
    for (const robot of robots) {
      expect(robot.payload).toBe('');
      expect(robot.tagsArray).toContain('food-service');
      expect(() =>
        validateSpecificationReview(getSpecificationReview(robot.id), robot),
      ).not.toThrow();
    }
    expect(byModel.get('TC-G1000').cookingCapacity).toBe('maximum 100 kg per batch');
    expect(byModel.get('TC-G1000').weight).toBe('360 kg');
    expect(byModel.get('TC-40EA-US').cookingCapacity).toContain('optimal 2 kg');
    expect(byModel.get('TC-40EA-US').cookingCapacity).toContain('maximum stir-fry 4 kg');
    expect(byModel.get('TC-40EA-US').weight).toContain('actual weight may vary');
    expect(byModel.get('TC-E40A').weight).toBe('130 kg');
    expect(byModel.get('E20A')).toBeUndefined();
  });

  it('retains Inspire test conditions and equipment mass separately from maximum takeoff mass', () => {
    const robot = getAllRobots().allRobots.find((r) => r.id === 'dji-inspire-3');
    expect(robot.weight).toContain('3.995 kg including gimbal camera');
    expect(robot.maxTakeoffWeight).toBe('approximately 4.310 kg');
    expect(robot.flightTime).toContain('28 min (landing gear down) / 26 min (gear up)');
    expect(robot.flightTime).toContain('until forced low-battery landing');
    expect(robot.maxRuntime).toBe('');
    expect(robot.batteryLife).toBe('');
  });

  it('rejects undated sources and unsupported review states', () => {
    const review = getSpecificationReview('unitree-go2-w');
    const robot = getAllRobots().allRobots.find((r) => r.id === review.robotId);
    const undated = structuredClone(review);
    delete undated.sources[0].checkedAt;
    expect(() => validateSpecificationReview(undated, robot)).toThrow(
      /Invalid specification source/,
    );
    const invalid = structuredClone(review);
    invalid.fields.weight.status = 'certified';
    expect(() => validateSpecificationReview(invalid, robot)).toThrow(/Stale or invalid/);
  });

  it('distinguishes UR controller offers and retains unresolved CB7 reach values', () => {
    const robots = getAllRobots().allRobots.filter((r) => r.manufacturer === 'Universal Robots');
    expect(robots).toHaveLength(15);
    const byId = new Map(robots.map((r) => [r.id, r]));
    expect(byId.get('universal-robots-ur3e-cb5').size).toBe('Reach: 500 mm');
    expect(byId.get('universal-robots-ur3e-540').size).toContain(
      '540 mm page / 500 mm linked datasheet',
    );
    expect(byId.get('universal-robots-ur7e-920').size).toContain(
      '920 mm page / 850 mm linked datasheet',
    );
    for (const id of ['universal-robots-ur3e-540', 'universal-robots-ur7e-920']) {
      expect(getSpecificationReview(id).fields.size.status).toBe('conflicting');
      expect(getSpecificationReview(id).sources).toHaveLength(2);
    }
    expect(byId.has('universal-robots-ur20-1750')).toBe(false);
    expect(byId.has('universal-robots-ur30-1300')).toBe(false);
  });

  it('keeps UR extended payload, cable inclusion and maximum TCP speed explicit', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    const gen7 = robots.get('universal-robots-ur17g-1300');
    expect(gen7.payload).toBe(
      '15 kg nominal; up to 17.5 kg extended (manufacturer conditions apply)',
    );
    expect(gen7.weight).toBe('43.4 kg including cable');
    expect(gen7.speed).toBe('up to 5 m/s TCP');
    expect(gen7.releaseDate).toBe('');
    expect(robots.get('universal-robots-ur15-cb5').weight).toBe('40.7 kg without cable');
    expect(robots.get('universal-robots-ur30-cb5').payload).toContain(
      '30 kg nominal; up to 35 kg extended',
    );
    expect(getSpecificationReview(gen7.id).fields.payload.note).toContain('payload curves');
    for (const robot of robots.values()) {
      if (robot.manufacturer === 'Universal Robots') {
        expect(() =>
          validateSpecificationReview(getSpecificationReview(robot.id), robot),
        ).not.toThrow();
      }
    }
  });

  it('separates MiR loaded runtime from unloaded operation and complete charging', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    expect(robots.get('mobile-industrial-robots-mir600').maxRuntime).toBe(
      'up to 8 h 30 min at maximum payload / up to 11 h with no payload',
    );
    expect(robots.get('mobile-industrial-robots-mir1350').maxRuntime).toContain(
      '6 h 45 min at maximum payload / 9 h 50 min with no payload',
    );
    for (const slug of ['mir250', 'mir600', 'mir1350']) {
      const robot = robots.get('mobile-industrial-robots-' + slug);
      expect(robot.batteryLife).toBe('');
      expect(robot.chargingTime).toBe('');
      expect(getSpecificationReview(robot.id).fields.chargingTime.status).toBe('not-documented');
    }
    expect(robots.get('mobile-industrial-robots-mir250').payload).toBe(
      '250 kg (platform carrying capacity)',
    );
    expect(robots.get('mobile-industrial-robots-mir1350').payload).toBe(
      '1350 kg (platform carrying capacity)',
    );
  });

  it('retains MiR Pallet Jack source conflicts rather than selecting the larger claim', () => {
    const review = getSpecificationReview('mobile-industrial-robots-mir1200-pallet-jack');
    for (const field of ['maxRuntime', 'weight', 'size']) {
      expect(review.fields[field].status).toBe('conflicting');
    }
    expect(review.fields.maxRuntime.value).toContain('8 h on overview / up to 10 h');
    expect(review.fields.weight.value).toContain('750 kg / 1786 lb');
    expect(review.fields.size.note).toContain('cm');
  });

  it('retains historical MiR document limits and keeps charging separate from runtime', () => {
    const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
    const older = robots.get('mobile-industrial-robots-mir200');
    expect(older.tagsArray).toContain('historical');
    expect(older.payload).toBe('200 kg (carrying; maximum 5% incline)');
    expect(older.speed).toContain('1.1 m/s forward / 0.3 m/s backward');
    expect(older.releaseDate).toBe('2017');
    const heavy = robots.get('mobile-industrial-robots-mir1000');
    expect(heavy.chargingTime).toContain('10–90%: 1 h with MiRCharge 48V / 2 h with cable charger');
    expect(heavy.maxRuntime).toBe('');
    expect(heavy.ipRating).toBe('');
    expect(getSpecificationReview(heavy.id).fields.maxRuntime.status).toBe('not-documented');
    expect(getSpecificationReview(heavy.id).fields.releaseDate.note).toContain(
      'manufacturer timeline',
    );
    for (const slug of ['mir200', 'mir500', 'mir1000']) {
      const robot = robots.get('mobile-industrial-robots-' + slug);
      expect(() =>
        validateSpecificationReview(getSpecificationReview(robot.id), robot),
      ).not.toThrow();
    }
  });
});

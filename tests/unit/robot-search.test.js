import { describe, expect, it } from 'vitest';
import { getRobotSearchMatch, normalizeRobotSearch } from '../../src/utils/robot-search.js';
import { getAllRobots } from '../../src/data/robots.js';
import { getComparisonEvidence } from '../../src/data/comparison-evidence.js';

const robots = getAllRobots().allRobots;
const evidence = getComparisonEvidence();

describe('catalog search with dated product highlights', () => {
  it('finds source-only terminology and preserves the complete qualifying statement', () => {
    for (const [query, id] of [
      ['ECIC', 'xyz-robotics-rockylight'],
      ['AprilTag', 'mobile-industrial-robots-mir250'],
      ['barcode facing outward', 'xyz-robotics-rockylight-se'],
    ]) {
      const robot = robots.find((r) => r.id === id);
      expect(getRobotSearchMatch(robot, query)).toBeNull();
      const match = getRobotSearchMatch(robot, query, evidence.products[id]);
      expect(match.kind).toBe('highlight');
      expect(evidence.products[id].highlights).toContain(match.highlight);
      expect(normalizeRobotSearch(match.highlight)).toContain(normalizeRobotSearch(query));
    }
  });
  it('retrieves every recorded highlight for its model without indexing source URLs or research metadata', () => {
    let statements = 0;
    for (const robot of robots) {
      const product = evidence.products[robot.id];
      if (!product) continue;
      for (const highlight of product.highlights) {
        expect(getRobotSearchMatch(robot, highlight, product), robot.id).not.toBeNull();
        statements++;
      }
      expect(getRobotSearchMatch(robot, product.sources[0].url, product), robot.id).toBeNull();
    }
    expect(statements).toBe(
      Object.values(evidence.products).reduce((n, product) => n + product.highlights.length, 0),
    );
  });
  it('matches a complete manufacturer/model name and accents without inventing model identities', () => {
    const parrot = robots.find((r) => r.id === 'parrot-anafi-ukr');
    expect(getRobotSearchMatch(parrot, 'Parrot ANAFI UKR').kind).toBe('catalog');
    expect(
      getRobotSearchMatch(
        robots.find((r) => r.id === 'kaercher-rcv-5'),
        'Karcher',
      ).kind,
    ).toBe('catalog');
    expect(normalizeRobotSearch(' Straße  –  Kärcher ')).toBe('strasse karcher');
    expect(robots.some((r) => getRobotSearchMatch(r, 'CHUCK DV7', evidence.products[r.id]))).toBe(
      false,
    );
  });
  it('keeps catalog matches primary and handles blank or missing evidence', () => {
    const robot = {
      manufacturer: 'Example',
      model: 'Robot',
      description: 'Box handling',
      tagsArray: ['warehouse'],
    };
    for (const query of ['', 'example', 'ROBOT', 'Example Robot', 'box handling', 'warehouse'])
      expect(getRobotSearchMatch(robot, query, { highlights: ['Robot can handle cases'] })).toEqual(
        { kind: 'catalog' },
      );
    expect(getRobotSearchMatch(robot, 'random', undefined)).toBeNull();
    expect(getRobotSearchMatch(robot, 'random', {})).toBeNull();
  });
});

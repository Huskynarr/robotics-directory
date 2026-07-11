import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';

describe('robot catalog data', () => {
  it('generates a unique detail-page ID for every robot', () => {
    const { allRobots } = getAllRobots();
    const robotsById = new Map();

    for (const robot of allRobots) {
      const matches = robotsById.get(robot.id) || [];
      matches.push(`${robot.manufacturer} ${robot.model}`);
      robotsById.set(robot.id, matches);
    }

    const duplicates = [...robotsById.entries()].filter(([, matches]) => matches.length > 1);
    expect(duplicates, 'duplicate IDs cause Astro to silently omit detail pages').toEqual([]);
  });
});

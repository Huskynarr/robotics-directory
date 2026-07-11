import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
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

  it('references existing local image assets', () => {
    const { allRobots } = getAllRobots();
    const missing = allRobots
      .filter((robot) => robot.image && !/^https?:\/\//.test(robot.image))
      .filter((robot) => !fs.existsSync(path.resolve('public', robot.image.replace(/^\//, ''))))
      .map((robot) => `${robot.id}: ${robot.image}`);

    expect(missing, 'broken image paths degrade cards and social metadata').toEqual([]);
  });

  it('has the fields required to build stable cards and detail pages', () => {
    const { allRobots } = getAllRobots();
    const invalid = allRobots
      .filter(
        (robot) => !robot.manufacturer?.trim() || !robot.model?.trim() || !robot.category?.trim(),
      )
      .map((robot) => robot.id);

    expect(invalid).toEqual([]);
  });
});

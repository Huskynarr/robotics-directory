import { createHash } from 'node:crypto';
import { getAllRobots } from './robots.js';

let cached;

export function getCatalogScript() {
  if (!cached) {
    const body = `window.__ROBOTS_DATA__=${JSON.stringify(getAllRobots().allRobots)};\n`;
    cached = { body, version: createHash('sha256').update(body).digest('hex').slice(0, 16) };
  }
  return cached;
}

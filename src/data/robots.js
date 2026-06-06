import fs from 'node:fs';
import path from 'node:path';
import { parseCSV } from '../utils/csv-parser.js';
import { createRobotId } from '../utils/format.js';

const CATEGORIES = [
  { id: 'humanoid', file: 'data/humanoid.csv' },
  { id: 'quadruped', file: 'data/quadruped.csv' },
  { id: 'companion', file: 'data/companion.csv' },
  { id: 'cleaning', file: 'data/cleaning.csv' },
  { id: 'outdoor', file: 'data/outdoor.csv' },
  { id: 'educational', file: 'data/educational.csv' },
  { id: 'smarthome', file: 'data/smarthome.csv' },
];

function loadCategory(categoryId, filePath) {
  const fullPath = path.resolve(filePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`[robots] Category "${categoryId}" expects a CSV at ${fullPath} but the file is missing.`);
  }
  let csvText;
  try {
    csvText = fs.readFileSync(fullPath, 'utf-8');
  } catch (err) {
    throw new Error(`[robots] Failed to read CSV for category "${categoryId}" at ${fullPath}`, { cause: err });
  }
  const robots = parseCSV(csvText);
  if (robots.length === 0) {
    console.warn(`[robots] Warning: category "${categoryId}" (${filePath}) produced 0 robots.`);
  }
  robots.forEach((robot) => {
    robot.category = categoryId;
    robot.id = createRobotId(robot);
    robot.tagsArray = robot.tags ? robot.tags.split(';').map(t => t.trim()).filter(Boolean) : [];
  });
  return robots;
}

let _cache = null;

export function getAllRobots() {
  if (_cache) return _cache;

  const allRobots = [];
  const robotsByCategory = {};

  for (const cat of CATEGORIES) {
    const robots = loadCategory(cat.id, cat.file);
    robotsByCategory[cat.id] = robots;
    allRobots.push(...robots);
  }

  const manufacturers = [...new Set(allRobots.map((r) => r.manufacturer))].sort();

  _cache = { allRobots, robotsByCategory, manufacturers };
  return _cache;
}

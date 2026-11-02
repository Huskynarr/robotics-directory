import fs from 'node:fs';
import { getAllRobots } from './robots.js';
import { isPrimaryProductSource } from '../utils/product-evidence.js';

const statuses = new Set(['documented', 'not-documented', 'conflicting', 'roadmap']);

export function validateSpecificationReview(review, robot) {
  if (
    !robot ||
    review.robotId !== robot.id ||
    review.manufacturer !== robot.manufacturer ||
    review.model !== robot.model ||
    !Object.keys(review.fields || {}).length ||
    !review.sources?.length
  ) {
    throw new Error(`Invalid specification review: ${review.robotId}`);
  }
  for (const source of review.sources) {
    if (
      !isPrimaryProductSource(source) ||
      !['http:', 'https:'].includes(new URL(source.url).protocol)
    )
      throw new Error(`Invalid specification source: ${review.robotId}`);
  }
  for (const [field, entry] of Object.entries(review.fields)) {
    if (
      !Object.hasOwn(robot, field) ||
      typeof entry.value !== 'string' ||
      robot[field] !== entry.value ||
      !statuses.has(entry.status) ||
      (entry.status !== 'documented' && !entry.note?.trim())
    ) {
      throw new Error(`Stale or invalid specification review: ${review.robotId}.${field}`);
    }
  }
}

const data = JSON.parse(fs.readFileSync('data/competitors/specification-reviews.json', 'utf8'));
const { allRobots } = getAllRobots();
const robots = new Map(allRobots.map((robot) => [robot.id, robot]));
const reviews = new Map();
for (const review of data.reviews) {
  if (reviews.has(review.robotId))
    throw new Error(`Duplicate specification review: ${review.robotId}`);
  validateSpecificationReview(review, robots.get(review.robotId));
  reviews.set(review.robotId, review);
}

export function getSpecificationReview(robotId) {
  return reviews.get(robotId) || null;
}

export function getSpecificationReviewCoverage() {
  const fields = [...reviews.values()].flatMap((review) => Object.values(review.fields));
  return {
    reviewedCatalogModels: reviews.size,
    unreviewedCatalogModels: allRobots.length - reviews.size,
    reviewedFields: fields.length,
    fieldStatuses: Object.fromEntries(
      [...statuses].map((status) => [
        status,
        fields.filter((entry) => entry.status === status).length,
      ]),
    ),
    scope: data.scope,
  };
}

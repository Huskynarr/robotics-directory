import { getAllRobots } from './robots.js';
import { getProductInsights } from './product-insights.js';
import { getSpecificationReview } from './specification-reviews.js';

// Only public claims and their provenance belong in the comparison response.
// Research snapshots, competitor descriptions and local paths stay at build time.
export function getComparisonEvidence() {
  const products = {};
  const specifications = {};
  for (const robot of getAllRobots().allRobots) {
    const insights = getProductInsights(robot.id);
    if (insights) {
      products[robot.id] = {
        highlights: insights.highlights,
        sources: insights.sources,
      };
    }
    const review = getSpecificationReview(robot.id);
    if (review) {
      specifications[robot.id] = {
        sources: review.sources,
        fields: Object.fromEntries(
          Object.entries(review.fields).map(([field, { status, note }]) => [
            field,
            { status, ...(note ? { note } : {}) },
          ]),
        ),
      };
    }
  }
  return { products, specifications };
}

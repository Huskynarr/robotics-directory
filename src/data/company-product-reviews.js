import fs from 'node:fs';
import { getAllRobots } from './robots.js';
import { indexCompanyProductReviews } from '../utils/company-product-reviews.js';

let cached;
export function getCompanyProductReviewIndex(inventory) {
  cached ||= indexCompanyProductReviews(
    JSON.parse(fs.readFileSync('data/competitors/company-product-reviews.json', 'utf8')),
    inventory.mentions,
    getAllRobots().allRobots,
    JSON.parse(fs.readFileSync('data/competitors/verified-products.json', 'utf8')).products,
  );
  return cached;
}

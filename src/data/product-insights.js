import fs from 'node:fs';
import path from 'node:path';
import { productSourceLabel } from '../utils/product-evidence.js';

const file = path.resolve('data/competitors/product-insights.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const products = new Map();
for (const item of data.products) {
  if (
    !item.robotId ||
    products.has(item.robotId) ||
    !item.highlights?.length ||
    !item.sources?.length
  ) {
    throw new Error(`Invalid or duplicate product evidence: ${item.robotId}`);
  }
  for (const source of item.sources) {
    productSourceLabel(source);
    if (!['http:', 'https:'].includes(new URL(source.url).protocol)) {
      throw new Error(`Invalid product evidence URL: ${source.url}`);
    }
  }
  products.set(item.robotId, item);
}

export function getProductInsights(robotId) {
  return products.get(robotId) || null;
}

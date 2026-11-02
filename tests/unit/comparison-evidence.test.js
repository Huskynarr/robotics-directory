import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getComparisonEvidence } from '../../src/data/comparison-evidence.js';
import { GET } from '../../src/pages/comparison-evidence.json.js';

const read = (name) => JSON.parse(fs.readFileSync(`data/competitors/${name}.json`, 'utf8'));

describe('public comparison provenance', () => {
  it('includes every reviewed product claim and its exact dated primary sources', () => {
    const evidence = getComparisonEvidence();
    const records = read('product-insights').products;
    expect(Object.keys(evidence.products)).toHaveLength(records.length);
    for (const product of records) {
      expect(evidence.products[product.robotId], product.robotId).toEqual({
        highlights: product.highlights,
        sources: product.sources,
      });
    }
  });

  it('keeps field statuses and qualifications separate from product highlights', () => {
    const evidence = getComparisonEvidence();
    const reviews = read('specification-reviews').reviews;
    expect(Object.keys(evidence.specifications)).toHaveLength(reviews.length);
    for (const review of reviews) {
      const actual = evidence.specifications[review.robotId];
      expect(actual.sources).toEqual(review.sources);
      expect(Object.keys(actual.fields)).toEqual(Object.keys(review.fields));
      for (const [key, field] of Object.entries(review.fields)) {
        expect(actual.fields[key]).toEqual({
          status: field.status,
          ...(field.note ? { note: field.note } : {}),
        });
      }
    }
  });

  it('serves JSON without source snapshots, internal research paths or supplier discovery URLs', async () => {
    const response = GET();
    expect(response.headers.get('Content-Type')).toBe('application/json; charset=utf-8');
    const body = await response.text();
    expect(JSON.parse(body)).toEqual(getComparisonEvidence());
    for (const privateField of [
      'reviewedFrom',
      'discoveredIn',
      'descriptionSha256',
      'scratch/',
      'sourceSnapshotAt',
    ])
      expect(body).not.toContain(privateField);
    expect(Object.keys(JSON.parse(body)).sort()).toEqual(['products', 'specifications']);
  });
});

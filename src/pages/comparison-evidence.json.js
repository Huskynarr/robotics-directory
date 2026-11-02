import { getComparisonEvidence } from '../data/comparison-evidence.js';

export function GET() {
  return new Response(JSON.stringify(getComparisonEvidence()), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

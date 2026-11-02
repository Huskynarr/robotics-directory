import { getCatalogScript } from '../data/catalog-script.js';

export function GET() {
  return new Response(getCatalogScript().body, {
    headers: { 'Content-Type': 'application/javascript; charset=utf-8' },
  });
}

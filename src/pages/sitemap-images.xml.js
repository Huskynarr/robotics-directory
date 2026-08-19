import { getAllRobots } from '../data/robots.js';
import { SITE_URL } from '../config/site.js';
import { resolveImagePath } from '../utils/format.js';

function xmlEscape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toAbsolute(src) {
  if (!src) return null;
  if (/^https?:\/\//.test(src)) return src;
  if (src.startsWith('/')) return `${SITE_URL}${src}`;
  return `${SITE_URL}/${src}`;
}

export function GET() {
  const { allRobots } = getAllRobots();
  const entries = allRobots
    .filter((r) => r.image && r.image !== 'images/image-not-found.webp')
    .map((r) => {
      const loc = `${SITE_URL}/robot/${r.id}/`;
      const imgLoc = toAbsolute(resolveImagePath(r.image));
      const title = `${r.manufacturer} ${r.model}`;
      return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <image:image>
      <image:loc>${xmlEscape(imgLoc)}</image:loc>
      <image:title>${xmlEscape(title)}</image:title>
    </image:image>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

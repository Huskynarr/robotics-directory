#!/usr/bin/env node
// Usage: node scripts/indexnow.mjs <added-files.txt> [dist-dir]
// Submits pages that a deploy added to IndexNow. Never fails the deploy.
import fs from 'node:fs';
import path from 'node:path';
import { addedPageUrls, indexNowPayload, sitemapLocations } from './lib/indexnow.mjs';

const [addedList, distDir = 'dist'] = process.argv.slice(2);

try {
  const added = fs.existsSync(addedList) ? fs.readFileSync(addedList, 'utf8').split('\n') : [];
  const sitemapUrls = fs
    .readdirSync(distDir)
    .filter((name) => /^sitemap-\d+\.xml$/.test(name))
    .flatMap((name) => sitemapLocations(fs.readFileSync(path.join(distDir, name), 'utf8')));
  const urls = addedPageUrls(added, sitemapUrls);
  if (urls.length === 0) {
    console.log('IndexNow: no new pages in this deploy');
  } else {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(indexNowPayload(urls)),
    });
    console.log(`IndexNow: submitted ${urls.length} new pages, HTTP ${response.status}`);
    urls.slice(0, 50).forEach((url) => console.log(`  ${url}`));
  }
} catch (error) {
  console.warn(`IndexNow: skipped (${error.message})`);
}

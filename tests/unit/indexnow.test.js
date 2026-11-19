import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import {
  INDEXNOW_KEY,
  SITE,
  addedPageUrls,
  indexNowPayload,
  sitemapLocations,
} from '../../scripts/lib/indexnow.mjs';

describe('IndexNow submission', () => {
  const sitemap = [`${SITE}/`, `${SITE}/robot/amazon-ring-rover-cam/`, `${SITE}/brands/amazon/`];

  it('submits only added pages that are listed in the sitemap', () => {
    const added = [
      'robot/amazon-ring-rover-cam/index.html',
      'robot/old-alias/index.html',
      'images/commercial/amazon-ring-rover-cam.webp',
      '404.html',
      '',
    ];
    expect(addedPageUrls(added, sitemap)).toEqual([`${SITE}/robot/amazon-ring-rover-cam/`]);
  });

  it('maps the root index to the homepage', () => {
    expect(addedPageUrls(['index.html'], sitemap)).toEqual([`${SITE}/`]);
  });

  it('reads sitemap locations', () => {
    const xml = `<urlset><url><loc>${SITE}/</loc></url><url><loc>${SITE}/brands/amazon/</loc></url></urlset>`;
    expect(sitemapLocations(xml)).toEqual([`${SITE}/`, `${SITE}/brands/amazon/`]);
  });

  it('points engines at the hosted key file', () => {
    const payload = indexNowPayload([`${SITE}/`]);
    expect(payload.host).toBe('robodirectory.huskynarr.de');
    expect(payload.keyLocation).toBe(`${SITE}/${INDEXNOW_KEY}.txt`);
    expect(fs.readFileSync(`public/${INDEXNOW_KEY}.txt`, 'utf8').trim()).toBe(INDEXNOW_KEY);
  });
});

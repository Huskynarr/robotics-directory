// IndexNow lets Bing, Yandex, Naver, Seznam and others learn about new pages right after a deploy.
export const SITE = 'https://robodirectory.huskynarr.de';
export const INDEXNOW_KEY = 'c08e84ed1d69edd784e22df2b556e745';
export const MAX_URLS = 10000;

/**
 * Map files added by a deploy (paths relative to dist/) to page URLs.
 * Only pages listed in the sitemap qualify, which skips redirects, 404 and assets.
 */
export function addedPageUrls(addedFiles, sitemapUrls) {
  const listed = new Set(sitemapUrls);
  const urls = new Set();
  for (const file of addedFiles) {
    const path = file.trim();
    if (!path.endsWith('index.html')) continue;
    const url = `${SITE}/${path.slice(0, -'index.html'.length)}`;
    if (listed.has(url)) urls.add(url);
  }
  return [...urls].slice(0, MAX_URLS);
}

export function sitemapLocations(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

export function indexNowPayload(urls) {
  return {
    host: new URL(SITE).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };
}

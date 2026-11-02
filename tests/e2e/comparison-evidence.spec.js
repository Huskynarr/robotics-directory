import fs from 'node:fs';
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const products = JSON.parse(
  fs.readFileSync('data/competitors/product-insights.json', 'utf8'),
).products;
const mir600 = 'mobile-industrial-robots-mir600';
const mir1350 = 'mobile-industrial-robots-mir1350';
const palletJack = 'mobile-industrial-robots-mir1200-pallet-jack';

async function prepare(page, ids, lang = 'en') {
  await page.addInitScript(
    ({ ids, lang }) => {
      localStorage.setItem('lang', lang);
      localStorage.setItem('compareRobots', JSON.stringify(ids));
    },
    { ids, lang },
  );
  await page.goto(`/brands/mobile-industrial-robots-mir/?lang=${lang}`);
}

async function openComparison(page) {
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('loads sources on demand and compares all highlights with deduplicated dated links', async ({
  page,
}) => {
  let requests = 0;
  page.on('request', (request) => {
    if (request.url().endsWith('/comparison-evidence.json')) requests++;
  });
  await prepare(page, [mir600, mir1350]);
  expect(requests).toBe(0);
  const table = await openComparison(page);
  expect(requests).toBe(1);
  for (const [index, id] of [mir600, mir1350].entries()) {
    const product = products.find((p) => p.robotId === id);
    const cell = table.locator('[data-comparison-highlights] td').nth(index + 1);
    await expect(cell.locator('li')).toHaveCount(product.highlights.length);
    for (const highlight of product.highlights) await expect(cell).toContainText(highlight);
    const sources = table.locator('[data-comparison-sources] td').nth(index + 1);
    await expect(sources.locator('a')).toHaveCount(product.sources.length);
    for (const source of product.sources) {
      const link = sources.locator(`a[href="${source.url}"]`);
      await expect(link).toContainText('Manufacturer source');
      await expect(link.locator('time')).toHaveAttribute('datetime', source.checkedAt);
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
    await expect(table.locator(`thead a[href="/robot/${id}/"]`)).toBeVisible();
  }
  await page.locator('#compareClose').click();
  await openComparison(page);
  expect(requests).toBe(1);
});

test('shows conflict qualifications beside the affected values without certifying unreviewed fields', async ({
  page,
}) => {
  await prepare(page, [palletJack, 'universal-robots-ur7e-920']);
  const table = await openComparison(page);
  await expect(table.locator('[data-review-status="conflicting"]')).toHaveCount(4);
  for (const field of ['weight', 'size', 'maxRuntime']) {
    const review = table
      .locator(`[data-comparison-review="${field}"][data-review-status="conflicting"]`)
      .first();
    await expect(review).toContainText('Conflicting sources');
    await expect(review.locator('p')).not.toBeEmpty();
    await expect(review.locator('a')).toHaveAttribute('href', /specifications|\.pdf$/);
  }
  await expect(table).toContainText(
    'Other specifications, availability and performance are not certified',
  );
});

test('distinguishes products without a highlight review and retains deployment source roles', async ({
  page,
}) => {
  const deployment = products.find((p) => p.sources.some((s) => s.type === 'deployment'));
  await prepare(page, ['aimoga-aimoga', deployment.robotId]);
  const table = await openComparison(page);
  await expect(table.locator('[data-comparison-highlights]')).toContainText(
    'No primary-source highlight review recorded.',
  );
  await expect(table.locator('[data-comparison-sources]')).toContainText(
    'No dated primary sources recorded for this comparison.',
  );
  await expect(table.locator('[data-comparison-sources]')).toContainText('Deployment owner source');
  await expect(table.locator('[data-comparison-highlights] li')).toHaveCount(
    deployment.highlights.length,
  );
});

test('keeps specifications usable after a source-load failure and supports retry', async ({
  page,
}) => {
  let requests = 0;
  await page.route('**/comparison-evidence.json', async (route) => {
    requests++;
    if (requests === 1) await route.fulfill({ status: 503, body: 'Unavailable' });
    else await route.continue();
  });
  await prepare(page, [mir600, mir1350]);
  await page.locator('#compareBarBtn').click();
  const table = page.locator('#compareTableContainer');
  await expect(table.locator('[data-comparison-state="error"]')).toContainText(
    'Sources could not be loaded',
  );
  await expect(table.locator('table')).toContainText('8 h 30 min');
  await expect(table.locator('[data-comparison-highlights]')).toHaveCount(0);
  await table.locator('[data-comparison-retry]').click();
  await expect(table.locator('[data-comparison-state="ready"]')).toBeVisible();
  await expect(table.locator('[data-comparison-highlights]')).toContainText('1350 kg');
  expect(requests).toBe(2);
});

test('a late response cannot restore a cleared comparison', async ({ page }) => {
  let release;
  const gate = new Promise((resolve) => {
    release = resolve;
  });
  await page.route('**/comparison-evidence.json', async (route) => {
    await gate;
    await route.continue();
  });
  await prepare(page, [mir600, mir1350]);
  const request = page.waitForRequest('**/comparison-evidence.json');
  await page.locator('#compareBarBtn').click();
  await request;
  await page.locator('#compareClear').click();
  const response = page.waitForResponse('**/comparison-evidence.json');
  release();
  await response;
  await expect(page.locator('#compareModal')).toBeHidden();
  await expect(page.locator('#compareTableContainer')).toContainText('Add at least two robots');
  await expect(page.locator('#compareTableContainer table')).toHaveCount(0);
});

test('switching language while sources load keeps the latest labels', async ({ page }) => {
  let release;
  const gate = new Promise((resolve) => {
    release = resolve;
  });
  await page.route('**/comparison-evidence.json', async (route) => {
    await gate;
    await route.continue();
  });
  await prepare(page, [mir600, mir1350]);
  const request = page.waitForRequest('**/comparison-evidence.json');
  await page.locator('#compareBarBtn').click();
  await request;
  await page.evaluate(() => {
    localStorage.setItem('lang', 'de');
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: 'de' } }));
  });
  release();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  await expect(page.locator('[data-comparison-highlights] td').first()).toHaveText(
    'Produktmerkmale',
  );
  await expect(page.locator('[data-comparison-sources]')).toContainText('Herstellerquelle');
});

test('escapes claim markup and excludes executable source URLs', async ({ page }) => {
  await page.route('**/comparison-evidence.json', async (route) => {
    const response = await route.fetch();
    const body = await response.json();
    body.products[mir600].highlights = ['<img src=x onerror="window.claimExecuted=true">'];
    body.products[mir600].sources = [
      {
        name: '<script>bad</script>',
        type: 'manufacturer',
        checkedAt: '2026-11-02',
        url: 'javascript:window.claimExecuted=true',
      },
    ];
    body.specifications[mir600].sources[0].url = 'javascript:window.claimExecuted=true';
    await route.fulfill({ json: body });
  });
  await prepare(page, [mir600, mir1350]);
  const table = await openComparison(page);
  await expect(table.locator('[data-comparison-highlights]')).toContainText('<img src=x onerror=');
  await expect(table.locator('img, script, a[href^="javascript:"]')).toHaveCount(0);
  expect(await page.evaluate(() => window.claimExecuted)).toBeUndefined();
});

for (const mode of ['light', 'dark']) {
  test(`comparison sources remain readable and accessible in ${mode} mode`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: mode });
    await prepare(page, [mir600, mir1350, palletJack, 'universal-robots-ur7e-920']);
    const table = await openComparison(page);
    const result = await new AxeBuilder({ page })
      .include('#compareModal')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(
      result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
    ).toEqual([]);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
      viewportWidth,
    );
    if (viewportWidth < 768)
      expect(await table.evaluate((el) => el.scrollWidth)).toBeGreaterThan(
        await table.evaluate((el) => el.clientWidth),
      );
  });
}

import fs from 'node:fs';
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const products = JSON.parse(
  fs.readFileSync('data/competitors/product-insights.json', 'utf8'),
).products;
const light = 'xyz-robotics-rockylight';
const mir = 'mobile-industrial-robots-mir250';
const ready = (page) =>
  expect(page.locator('#productSearchStatus')).toHaveAttribute('data-search-state', 'ready');
const card = (page, id) => page.locator(`#robotsGrid .robot-card[data-robot-id="${id}"]`);

test('finds highlight-only terminology with its full qualified context and a source-section link', async ({
  page,
}) => {
  await page.goto('/?q=ECIC');
  await ready(page);
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(1);
  const found = card(page, light);
  const highlight = products
    .find((p) => p.robotId === light)
    .highlights.find((h) => h.includes('ECIC'));
  await expect(found.locator('[data-search-highlight]')).toContainText(highlight);
  await expect(found.locator('a')).toHaveAttribute('href', `/robot/${light}/#product-highlights`);
  await found.locator('a').click();
  await expect(page).toHaveURL(new RegExp(`/robot/${light}/#product-highlights$`));
  await expect(page.locator('#product-highlights')).toBeVisible();
});
test('search and comparison load evidence once, with no request before either is used', async ({
  page,
}) => {
  let requests = 0;
  page.on('request', (r) => {
    if (r.url().endsWith('/comparison-evidence.json')) requests++;
  });
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'en');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(['mobile-industrial-robots-mir250', 'mobile-industrial-robots-mir600']),
    );
  });
  await page.goto('/');
  expect(requests).toBe(0);
  await page.locator('#searchInput').fill('AprilTag');
  await ready(page);
  await expect(card(page, mir)).toBeVisible();
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  expect(requests).toBe(1);
});
test('supports full manufacturer/model names and accentless names without extra highlight labels', async ({
  page,
}) => {
  await page.goto('/?q=Parrot%20ANAFI%20UKR');
  await ready(page);
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(1);
  await expect(card(page, 'parrot-anafi-ukr').locator('[data-search-highlight]')).toHaveCount(0);
  await page.locator('#searchInput').fill('Karcher');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(5);
  await expect(page.locator('#robotsGrid [data-search-highlight]')).toHaveCount(0);
});
test('highlight matches obey category and advanced filters and disappear after reset', async ({
  page,
}) => {
  await page.goto('/?category=commercial&q=ECIC&weight=light');
  await ready(page);
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(0);
  await expect(page.locator('#advancedToggle')).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#advancedFilters')).toBeVisible();
  await page.locator('#weightFilter').selectOption('heavy');
  await expect(card(page, light)).toBeVisible();
  await page.locator('#manufacturerFilter').selectOption('Mobile Industrial Robots');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(0);
  await page.locator('#resetFilters').click();
  await expect(page.locator('#searchInput')).toHaveValue('');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(24);
  await expect(page.locator('#robotsGrid [data-search-highlight]')).toHaveCount(0);
});
test('a failed highlight search keeps name search usable and supports retry', async ({ page }) => {
  let requests = 0;
  await page.route('**/comparison-evidence.json', async (route) => {
    requests++;
    if (requests === 1) await route.fulfill({ status: 503, body: 'Unavailable' });
    else await route.continue();
  });
  await page.goto('/?q=ECIC');
  await expect(page.locator('#productSearchStatus')).toHaveAttribute('data-search-state', 'error');
  await expect(page.locator('#productSearchStatus')).toContainText('Results currently use names');
  await page.locator('#searchInput').fill('Parrot ANAFI UKR');
  await expect(card(page, 'parrot-anafi-ukr')).toBeVisible();
  await page.locator('[data-search-retry]').click();
  await ready(page);
  await page.locator('#searchInput').fill('AprilTag');
  await expect(card(page, mir)).toBeVisible();
  expect(requests).toBe(2);
});
test('late evidence uses the current query rather than restoring the initial search', async ({
  page,
}) => {
  let release;
  const gate = new Promise((resolve) => {
    release = resolve;
  });
  await page.route('**/comparison-evidence.json', async (route) => {
    await gate;
    await route.continue();
  });
  const request = page.waitForRequest('**/comparison-evidence.json');
  await page.goto('/?q=ECIC');
  await request;
  await expect(page.locator('#robotsGrid')).toHaveAttribute('aria-busy', 'true');
  await expect(page.locator('#noResults')).toBeHidden();
  await page.locator('#searchInput').fill('Parrot ANAFI UKR');
  await expect(card(page, 'parrot-anafi-ukr')).toBeVisible();
  release();
  await ready(page);
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(1);
  await expect(card(page, light)).toHaveCount(0);
});
test('clearing a query during loading leaves the unfiltered catalog intact', async ({ page }) => {
  let release;
  const gate = new Promise((resolve) => {
    release = resolve;
  });
  await page.route('**/comparison-evidence.json', async (route) => {
    await gate;
    await route.continue();
  });
  const request = page.waitForRequest('**/comparison-evidence.json');
  await page.goto('/?q=ECIC');
  await request;
  await page.locator('#searchInput').fill('');
  await expect(page).not.toHaveURL(/q=/);
  const response = page.waitForResponse('**/comparison-evidence.json');
  release();
  await response;
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(24);
  await expect(page.locator('#productSearchStatus')).toBeHidden();
  await expect(page.locator('#robotsGrid')).toHaveAttribute('aria-busy', 'false');
});
test('browser history restores highlight searches and their context', async ({ page }) => {
  await page.goto('/');
  await page.locator('#searchInput').fill('ECIC');
  await expect(page).toHaveURL(/q=ecic/);
  await ready(page);
  await expect(card(page, light)).toBeVisible();
  await page.locator('#searchInput').fill('AprilTag');
  await expect(page).toHaveURL(/q=apriltag/);
  await expect(card(page, mir)).toBeVisible();
  await page.goBack();
  await expect(page.locator('#searchInput')).toHaveValue('ecic');
  await expect(card(page, light).locator('[data-search-highlight]')).toContainText('ECIC');
});
test('escapes highlight markup in result cards', async ({ page }) => {
  await page.route('**/comparison-evidence.json', async (route) => {
    const response = await route.fetch();
    const body = await response.json();
    body.products[light].highlights = ['specimenxss <img src=x onerror="window.searchPwned=true">'];
    await route.fulfill({ json: body });
  });
  await page.goto('/?q=specimenxss');
  await ready(page);
  await expect(card(page, light).locator('[data-search-highlight]')).toContainText('<img src=x');
  await expect(
    page.locator('[data-search-highlight] img, [data-search-highlight] script'),
  ).toHaveCount(0);
  expect(await page.evaluate(() => window.searchPwned)).toBeUndefined();
});
test('German search labels retain the reviewed claim wording', async ({ page }) => {
  await page.goto('/?q=ECIC&lang=de');
  await ready(page);
  await expect(card(page, light).locator('[data-search-highlight]')).toContainText(
    'Treffer in Produktmerkmalen',
  );
  await expect(card(page, light).locator('[data-search-highlight]')).toContainText('ECIC');
});
for (const mode of ['light', 'dark'])
  test(`highlight search remains accessible in ${mode} mode`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: mode });
    await page.goto('/?q=ECIC');
    await ready(page);
    await expect(card(page, light)).toBeVisible();
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(
      result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
    ).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
      await page.evaluate(() => window.innerWidth),
    );
  });

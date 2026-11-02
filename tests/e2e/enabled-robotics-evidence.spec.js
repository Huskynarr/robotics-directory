import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
const visit = (page, suffix) => page.goto(`/robot/enabled-robotics-${suffix}/`);
const ids = ['er-flex-250-7e', 'er-flex-250-8l-esd', 'er-max-600-20', 'er-max-600-30'].map(
  (id) => `enabled-robotics-${id}`,
);
async function compare(page, lang = 'de') {
  await page.addInitScript(
    ({ ids, lang }) => {
      localStorage.setItem('lang', lang);
      localStorage.setItem('compareRobots', JSON.stringify(ids));
    },
    { ids, lang },
  );
  await page.goto(`/brands/enabled-robotics/?lang=${lang}`);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('Enabled brand separates current configurations, historical packages and software', async ({
  page,
}) => {
  await page.goto('/brands/enabled-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(12);
  const focus = page.locator('section[aria-labelledby="company-focus"]');
  await expect(focus).toContainText('five named UR arm choices');
  await expect(focus).toContainText('introduction still says four models');
  await expect(focus).toContainText('ER-ORGANIZER is add-on software');
  await expect(focus).toContainText('without mapping every older');
});

test('Standard and ESD variants retain exact arm values and different product numbers', async ({
  page,
}) => {
  await visit(page, 'er-flex-250-7e');
  await expect(spec(page, 'payload')).toContainText('7.5 kg arm payload');
  await expect(spec(page, 'transportPayload')).toContainText('Up to 165 kg transport load');
  await expect(spec(page, 'armReach')).toContainText('850 mm excluding tool');
  await expect(highlights(page)).toContainText('Standard configuration has product number 102250');
  await visit(page, 'er-flex-250-8l-esd');
  await expect(spec(page, 'payload')).toContainText('10 kg arm payload');
  await expect(spec(page, 'armReach')).toContainText('1750 mm excluding tool');
  await expect(highlights(page)).toContainText(
    'ESD-coated configuration has product number 103150',
  );
});

test('charge-state operating estimates do not become daily battery endurance or recharge duration', async ({
  page,
}) => {
  await visit(page, 'er-flex-250-7e');
  await expect(spec(page, 'batteryLife')).toContainText('Estimated 8 h operation from 100% to 10%');
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(highlights(page)).toContainText('twenty-hour daily utilization');
  await visit(page, 'er-max-600-30');
  await expect(spec(page, 'batteryLife')).toContainText('Estimated 4 h operation from 100% to 10%');
  await expect(highlights(page)).toContainText('daily utilization is 18.5 hours');
});

test('marker precision and component IP ratings remain qualified', async ({ page }) => {
  await visit(page, 'er-flex-250-12e-esd');
  await expect(spec(page, 'visionPrecision')).toHaveText('1 mm relative to markers');
  await expect(spec(page, 'navigationAccuracy')).toHaveCount(0);
  await expect(spec(page, 'dockingAccuracy')).toHaveCount(0);
  await expect(spec(page, 'ipRating')).toHaveText('IP21 platform; arm and tower IP54');
  await expect(page.locator('[data-spec-source="visionPrecision"]')).toHaveAttribute(
    'title',
    /relative to markers/,
  );
  await expect(highlights(page)).toContainText('not whole-system IP54');
});

test('family mass and footprint are not full installed arm envelopes', async ({ page }) => {
  await visit(page, 'er-flex-250-16e');
  await expect(spec(page, 'weight')).toContainText('209-229 kg shared ER-FLEX family range');
  await expect(spec(page, 'size')).toContainText('overall installed height not documented');
  await visit(page, 'er-max-600-20');
  await expect(spec(page, 'size')).toContainText('1350 x 910 mm footprint');
  await expect(spec(page, 'weight')).toContainText('arm-specific mass not separated');
});

test('ER-MAX arm and freight ratings do not inherit bare MiR600 carrying capacity', async ({
  page,
}) => {
  await visit(page, 'er-max-600-20');
  await expect(spec(page, 'payload')).toContainText('25 kg arm payload');
  await expect(spec(page, 'transportPayload')).toContainText('380 kg transport load');
  await expect(spec(page, 'armReach')).toContainText('1750 mm excluding tool');
  await expect(spec(page, 'ipRating')).toHaveText('IP52 platform; arm and tower IP54');
  await visit(page, 'er-max-600-30');
  await expect(spec(page, 'payload')).toContainText('35 kg arm payload');
  await expect(spec(page, 'armReach')).toContainText('1300 mm excluding tool');
});

test('structured data includes separate transport and marker properties with no price offer', async ({
  page,
}) => {
  await visit(page, 'er-flex-250-7e');
  const product = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .map(JSON.parse)
    .find((x) => x['@type'] === 'Product');
  expect(product.offers).toBeUndefined();
  expect(product.additionalProperty).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: 'Transport payload',
        value: 'Up to 165 kg transport load (ER-FLEX family specification)',
      }),
      expect.objectContaining({
        name: 'Vision localization precision',
        value: '1 mm relative to markers',
      }),
    ]),
  );
});

test('exact Standard/ESD product numbers are found through the full source qualification', async ({
  page,
}) => {
  await page.goto('/?q=103150');
  await expect(page.locator('#productSearchStatus')).toHaveAttribute('data-search-state', 'ready');
  const card = page.locator(
    '#robotsGrid .robot-card[data-robot-id="enabled-robotics-er-flex-250-8l-esd"]',
  );
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText(
    'ESD-coated configuration has product number 103150',
  );
  await expect(card.locator('a')).toHaveAttribute(
    'href',
    '/robot/enabled-robotics-er-flex-250-8l-esd/#product-highlights',
  );
});

test('German comparison separates arm payload, transport load and marker-relative vision', async ({
  page,
}) => {
  const table = await compare(page);
  await expect(table).toContainText('Transporttraglast');
  await expect(table).toContainText('Präzision der visuellen Lokalisierung');
  await expect(table).toContainText('Up to 165 kg transport load');
  await expect(table).toContainText('380 kg transport load');
  await expect(table).toContainText('1 mm relative to markers');
  await expect(table.locator('[data-comparison-review="transportPayload"]')).toHaveCount(4);
  await expect(table.locator('[data-comparison-review="visionPrecision"]')).toHaveCount(4);
});

test('another UI language keeps the English measurement fallback and source qualification', async ({
  page,
}) => {
  const table = await compare(page, 'fr');
  await expect(table).toContainText('Transport payload');
  await expect(table).toContainText('Vision localization precision');
  await expect(table).toContainText('1 mm relative to markers');
});

for (const theme of ['light', 'dark']) {
  for (const mode of ['detail', 'comparison', 'brand']) {
    test(`Enabled ${mode} accessibility ${theme}`, async ({ page }) => {
      await page.addInitScript((theme) => localStorage.setItem('theme', theme), theme);
      if (mode === 'comparison') await compare(page);
      else if (mode === 'brand') await page.goto('/brands/enabled-robotics/');
      else await visit(page, 'er-flex-250-8l-esd');
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(result.violations).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        await page.evaluate(() => window.innerWidth),
      );
    });
  }
}

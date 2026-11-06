import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
const visit = (page, suffix) => page.goto(`/robot/rainbow-robotics-${suffix}/`);
async function compare(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(
        ['rb5-850', 'rb5-850n', 'rb16-900', 'rbq-10'].map((s) => `rainbow-robotics-${s}`),
      ),
    );
  });
  await page.goto('/brands/rainbow-robotics/?lang=de');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('brand focus distinguishes exact arms, adjacent families and current source limitations', async ({
  page,
}) => {
  await page.goto('/brands/rainbow-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(26);
  const focus = page.locator('section[aria-labelledby="company-focus"]');
  await expect(focus).toContainText('ten named six-axis arms');
  await expect(focus).toContainText('three named RBC-N arms');
  await expect(focus).toContainText('remain system/software/accessory findings');
  await expect(focus).toContainText('homepage despite HTTP 200');
});

test('both 850 arm variants show reach conflict and retain different payload and protection', async ({
  page,
}) => {
  for (const id of ['rb5-850', 'rb5-850n']) {
    await visit(page, id);
    await expect(spec(page, 'armReach')).toHaveText(
      '927.7 mm table; 850 mm narrative (manufacturer conflict)',
    );
    await expect(page.locator('[data-spec-source="armReach"]')).toHaveAttribute(
      'data-review-status',
      'conflicting',
    );
    await expect(highlights(page)).toContainText('neither value silently wins');
    await expect(spec(page, 'ipRating')).toHaveText(id.endsWith('n') ? 'IP66' : 'IP54');
    await expect(spec(page, 'payload')).toContainText(
      id.endsWith('n') ? '5 kg' : '6.6 lb conflicts',
    );
  }
});

test('RB16 retains family-card reach without inventing exact protection or speed', async ({
  page,
}) => {
  await visit(page, 'rb16-900');
  await expect(spec(page, 'armReach')).toHaveText('900 mm');
  await expect(spec(page, 'ipRating')).toHaveCount(0);
  await expect(spec(page, 'speed')).toHaveCount(0);
  await expect(highlights(page)).toContainText('linked product query returns the homepage');
  await expect(page.locator('[data-spec-source="armReach"]')).toHaveAttribute(
    'href',
    /collaborative-robots\/rb-series/,
  );
});

test('arm mass and mounting footprint remain separate from controller and envelope', async ({
  page,
}) => {
  await visit(page, 'rb3-730');
  await expect(spec(page, 'size')).toHaveText(
    'Ø128 mm mounting footprint; overall arm envelope not documented',
  );
  await expect(spec(page, 'weight')).toHaveText('11 kg');
  await expect(highlights(page)).toContainText(
    'Repeatability is not absolute positioning accuracy',
  );
  await visit(page, 'rb30-1400');
  await expect(spec(page, 'weight')).toContainText('158 lb conflicts');
  await expect(page.locator('[data-spec-source="weight"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
});

test('TCP speed is numeric only where a model table supplies it', async ({ page }) => {
  await visit(page, 'rb20-1900');
  await expect(spec(page, 'speed')).toHaveText('2 m/s maximum TCP speed during normal operation');
  await visit(page, 'rb5-850n');
  await expect(spec(page, 'speed')).toHaveCount(0);
  await expect(spec(page, 'dof')).toHaveText('6');
  await expect(highlights(page)).toContainText('have not been independently checked');
});

test('RBQ preserves mode, gradient units, optional hardware and endurance boundaries', async ({
  page,
}) => {
  await visit(page, 'rbq-10');
  await expect(spec(page, 'speed')).toContainText('9 km/h table vs 6 km/h overview');
  await expect(spec(page, 'terrain')).toContainText('25 cm table vs 20 cm overview');
  await expect(page.locator('[data-spec-source="terrain"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'batteryLife')).toContainText('test conditions not stated');
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
  await expect(highlights(page)).toContainText('not degrees');
  await expect(highlights(page)).toContainText(
    '3D LiDAR, LTE, PTZ/thermal cameras and wireless charging are configuration-dependent',
  );
});

test('structured arm properties retain reach conflict and omit unknown price offers', async ({
  page,
}) => {
  await visit(page, 'rb5-850');
  const product = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .map(JSON.parse)
    .find((x) => x['@type'] === 'Product');
  expect(product.offers).toBeUndefined();
  expect(product.additionalProperty).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: 'Arm reach',
        value: '927.7 mm table; 850 mm narrative (manufacturer conflict)',
      }),
    ]),
  );
});

test('source-only repeatability qualification remains searchable with its full sentence', async ({
  page,
}) => {
  await page.goto('/?q=Repeatability%20is%20not%20absolute%20positioning%20accuracy');
  await expect(page.locator('#productSearchStatus')).toHaveAttribute('data-search-state', 'ready');
  const card = page.locator('#robotsGrid .robot-card[data-robot-id="rainbow-robotics-rb3-730"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText(
    'Repeatability is not absolute positioning accuracy',
  );
  await expect(card.locator('a')).toHaveAttribute(
    'href',
    '/robot/rainbow-robotics-rb3-730/#product-highlights',
  );
});

test('German comparison carries reach and payload conflicts alongside unknown exact-model fields', async ({
  page,
}) => {
  const table = await compare(page);
  await expect(table).toContainText('Armreichweite');
  await expect(table).toContainText('927.7 mm table; 850 mm narrative');
  await expect(
    table.locator('[data-comparison-review="armReach"][data-review-status="conflicting"]'),
  ).toHaveCount(2);
  await expect(
    table.locator('[data-comparison-review="payload"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  const headers = await table.locator('thead th').allTextContents();
  const rb16Column = headers.findIndex((label) => label.trim() === 'RB16-900');
  expect(rb16Column).toBeGreaterThan(0);
  const ipRow = table.locator('tr').filter({
    has: page.locator('[data-comparison-review="ipRating"]'),
  });
  await expect(ipRow.locator('td').nth(rb16Column)).toHaveText('-');
  await expect(table).toContainText('linked product query returns the homepage');
  await expect(table).toContainText('No explanation establishes equal reference frames');
});

for (const theme of ['light', 'dark']) {
  for (const mode of ['detail', 'comparison', 'brand']) {
    test(`Rainbow ${mode} accessibility ${theme}`, async ({ page }) => {
      await page.addInitScript((theme) => localStorage.setItem('theme', theme), theme);
      if (mode === 'comparison') await compare(page);
      else if (mode === 'brand') await page.goto('/brands/rainbow-robotics/');
      else await visit(page, 'rb5-850');
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

import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
const visit = (page, id) => page.goto(`/robot/productive-robotics-${id}/`);
async function compare(page, lang = 'de') {
  await page.addInitScript((lang) => {
    localStorage.setItem('lang', lang);
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(
        ['ob7', 'blaze-laser', 'blaze-lf', 'assemble-weld-cell'].map(
          (id) => `productive-robotics-${id}`,
        ),
      ),
    );
  }, lang);
  await page.goto(`/brands/productive-robotics/?lang=${lang}`);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}
test('company page lists fifteen named configurations and qualifies the Duo reference', async ({
  page,
}) => {
  await page.goto('/brands/productive-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(15);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'Duo identity, layout and warranty scope are unresolved',
  );
  await page.goto('/?category=commercial&sub=commercial-manufacturing');
  for (const id of ['blaze-lf', 'blaze-mig-cell', 'blaze-laser-cell', 'assemble-weld-cell'])
    await expect(
      page.locator(`#robotsGrid .robot-card[data-robot-id="productive-robotics-${id}"]`),
    ).toBeVisible();
});
test('OB7 and Stretch expose conflicting mass without inheriting component IP or flange size', async ({
  page,
}) => {
  for (const id of ['ob7', 'ob7-stretch']) {
    await visit(page, id);
    await expect(spec(page, 'weight')).toHaveText('22 kg');
    await expect(page.locator('[data-spec-source="weight"]')).toHaveAttribute(
      'data-review-status',
      'conflicting',
    );
    await expect(spec(page, 'size')).toHaveCount(0);
    await expect(spec(page, 'ipRating')).toHaveCount(0);
    await expect(highlights(page)).toContainText('optional PG2 gripper is IP65');
  }
});
test('OB7 Max cards retain their own load and reach combinations', async ({ page }) => {
  for (const [id, reach] of [
    ['ob7-max-8', '1700 mm'],
    ['ob7-max-12', '1300 mm'],
    ['ob7-max-16', '1000 mm'],
  ]) {
    await visit(page, id);
    await expect(spec(page, 'armReach')).toHaveText(reach);
    await expect(spec(page, 'weight')).toHaveText('58 kg');
  }
});
test('standard and Max MIG sizes keep torch reach separate from welding feed', async ({ page }) => {
  for (const [id, reach] of [
    ['blaze', '1550 mm including MIG torch'],
    ['blaze-max', '2159 mm including MIG torch'],
  ]) {
    await visit(page, id);
    await expect(spec(page, 'armReach')).toHaveText(reach);
    await expect(spec(page, 'weldSpeed')).toHaveText('Up to 2540 mm/min welding feed');
    await expect(spec(page, 'speed')).toHaveCount(0);
    await expect(page.locator('[data-spec-source="weldSpeed"]')).toHaveAttribute(
      'data-review-status',
      'documented',
    );
  }
});
test('Laser sizes retain inconsistent free-motion labels and source-mass scope', async ({
  page,
}) => {
  await visit(page, 'blaze-laser-max');
  await expect(spec(page, 'armReach')).toHaveText('2159 mm including laser torch');
  await expect(spec(page, 'speed')).toContainText('PDF also says 0-2+ m/s');
  await expect(page.locator('[data-spec-source="speed"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'weight')).toHaveCount(0);
  await expect(highlights(page)).toContainText('Miller source mass 64 kg is not the whole robot');
});
test('Mobile Max stays a rolling frame without verified drive speed or battery endurance', async ({
  page,
}) => {
  await visit(page, 'blaze-max-mobile');
  await expect(spec(page, 'armReach')).toContainText('2159 mm');
  await expect(highlights(page)).toContainText('locking wheels');
  await expect(spec(page, 'speed')).toHaveCount(0);
  await expect(spec(page, 'batteryLife')).toHaveCount(0);
});
test('package and enclosed-cell work tables are separate measurements from overall size', async ({
  page,
}) => {
  for (const id of ['blaze-lf', 'blaze-mig-cell', 'blaze-laser-cell']) {
    await visit(page, id);
    await expect(spec(page, 'workTableSize')).toContainText('4 ft x 8 ft work table');
    await expect(spec(page, 'size')).toHaveCount(0);
    await expect(spec(page, 'payload')).toHaveCount(0);
    await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  }
  await expect(spec(page, 'ipRating')).toHaveCount(0);
  await page.goto('/robot/fdata-robot-a005/');
  await expect(page.locator('[data-spec-source="chargingTime"]')).not.toHaveAttribute(
    'title',
    /does not establish a full recharge duration/,
  );
  await expect(spec(page, 'chargingTime')).toHaveText('4 h');
});
test('custom Assemble and Weld system does not inherit a summed arm payload or axis count', async ({
  page,
}) => {
  await visit(page, 'assemble-weld-cell');
  for (const key of ['dof', 'payload', 'armReach', 'weldSpeed', 'workTableSize'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(highlights(page)).toContainText('not summed or inherited');
});
test('structured product properties expose process feed and work table without a numeric offer', async ({
  page,
}) => {
  await visit(page, 'blaze-lf');
  const product = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .map(JSON.parse)
    .find((x) => x['@type'] === 'Product');
  expect(product.offers).toBeUndefined();
  expect(product.additionalProperty).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: 'Welding feed rate',
        value: 'Up to 2540 mm/min welding feed',
      }),
      expect.objectContaining({
        name: 'Work table dimensions',
        value: '4 ft x 8 ft work table; overall system dimensions not stated',
      }),
    ]),
  );
  expect(product.additionalProperty.some((p) => p.name === 'Size' || p.name === 'Speed')).toBe(
    false,
  );
});
test('search retrieves a named laser-size alias in a complete qualifying highlight', async ({
  page,
}) => {
  await page.goto('/?q=Blaze%20Max%20Laser');
  await expect(page.locator('#productSearchStatus')).toHaveAttribute('data-search-state', 'ready');
  const card = page.locator(
    '#robotsGrid .robot-card[data-robot-id="productive-robotics-blaze-laser-max"]',
  );
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText('not a third laser-arm card');
});
test('German comparison separates welding feed and table size while keeping conflicts and French fallback', async ({
  page,
}) => {
  const table = await compare(page);
  await expect(table).toContainText('Schweißvorschub');
  await expect(table).toContainText('Arbeitstischmaße');
  await expect(table).toContainText('4 ft x 8 ft work table');
  await expect(
    table.locator('[data-comparison-review="weight"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(
    table.locator('[data-comparison-review="speed"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await page.locator('#compareClose').click();
  const mobile = page.viewportSize().width < 768;
  if (mobile) await page.locator('#mobileMenuToggle').click();
  await page.locator(mobile ? '#languageSelectMobile' : '#languageSelect').selectOption('fr');
  if (mobile) await page.locator('#mobileMenuClose').click();
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  await expect(table).toContainText('Welding feed rate');
  await expect(table).toContainText('Work table dimensions');
});
for (const theme of ['light', 'dark']) {
  for (const mode of ['detail', 'comparison', 'brand']) {
    test(`Productive ${mode} accessibility ${theme}`, async ({ page }) => {
      await page.addInitScript((theme) => localStorage.setItem('theme', theme), theme);
      if (mode === 'comparison') await compare(page);
      else if (mode === 'brand') await page.goto('/brands/productive-robotics/');
      else await visit(page, 'blaze-laser');
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

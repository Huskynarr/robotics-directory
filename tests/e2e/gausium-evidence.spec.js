import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
const visit = (page, suffix) => page.goto(`/robot/gausium-${suffix}/`);
const cleaners = ['mira', 'marvel', 'omnie-disc-brush', 'omnie-roller-brush'];

async function compare(page) {
  await page.addInitScript(
    (ids) => {
      localStorage.setItem('lang', 'de');
      localStorage.setItem('compareRobots', JSON.stringify(ids));
    },
    cleaners.map((name) => `gausium-${name}`),
  );
  await page.goto('/brands/gausium-robotics/?lang=de');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('Gaussian alias finds the merged company and old profile directs to its canonical page', async ({
  page,
}) => {
  await page.goto('/brands/?q=Gaussian');
  const entry = page.locator('[data-brand-entry]:visible');
  await expect(entry).toHaveCount(1);
  await expect(entry).toContainText('Gausium');
  await page.goto('/brands/gaussian-robotics/');
  await expect(page).toHaveURL(/\/brands\/gausium-robotics\/$/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    /\/brands\/gausium-robotics\/$/,
  );
  await expect(page.locator('.robot-card')).toHaveCount(23);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText('alias');
  await expect(page.locator('.robot-card h3').filter({ hasText: 'Phantas Extra' })).toHaveCount(0);
});

test('Beetle variants retain rated runtime while family disagreement remains visible', async ({
  page,
}) => {
  await visit(page, 'beetle');
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(page.locator('[data-spec-source="batteryLife"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  for (const [suffix, weight, hours] of [
    ['standard', '102', '3'],
    ['pro', '112', '5'],
  ]) {
    await visit(page, `beetle-${suffix}`);
    await expect(spec(page, 'weight')).toHaveText(`${weight} kg net`);
    await expect(spec(page, 'batteryLife')).toContainText(`${hours} h in named variant`);
    await expect(spec(page, 'payload')).toHaveCount(0);
  }
});

test('Mira and Marvel lower-bound mode durations do not become unconditional maxima', async ({
  page,
}) => {
  for (const [suffix, field, note] of [
    ['mira', 'speed', '4.59 ft/s'],
    ['marvel', 'areaRate', '32550'],
  ]) {
    await visit(page, suffix);
    await expect(spec(page, 'maxRuntime')).toHaveCount(0);
    await expect(spec(page, 'chargingTime')).toHaveCount(0);
    await expect(spec(page, 'payload')).toHaveCount(0);
    await expect(page.locator(`[data-spec-source="${field}"]`)).toHaveAttribute(
      'data-review-status',
      'conflicting',
    );
    await expect(page.locator(`[data-spec-source="${field}"]`)).toHaveAttribute(
      'title',
      new RegExp(note),
    );
  }
  await expect(highlights(page)).toContainText('stand-on pedal is optional');
});

test('Omnie disc roadmap and roller side brushes keep different task coverage', async ({
  page,
}) => {
  await visit(page, 'omnie-disc-brush');
  await expect(spec(page, 'workingWidth')).toHaveText('520 mm scrubbing');
  await expect(spec(page, 'batteryLife')).toContainText('sweeping listed Coming Soon');
  await expect(spec(page, 'areaRate')).not.toContainText('3931');
  await visit(page, 'omnie-roller-brush');
  await expect(spec(page, 'workingWidth')).toHaveText(
    '406 mm scrubbing; 780 mm sweeping coverage with optional side brushes',
  );
  await expect(spec(page, 'areaRate')).toContainText('3931 m²/h sweeping');
});

test('PhanShop Max omits a merchandise tray and an unsupported touchscreen assertion', async ({
  page,
}) => {
  await visit(page, 'phanshop-max');
  await expect(highlights(page)).toContainText('merchandise tray Not Supported');
  await expect(highlights(page)).toContainText('touchscreen capability is not specified');
  await expect(spec(page, 'maxRuntime')).toContainText('10.5 h in sweeping');
  await expect(spec(page, 'payload')).toHaveCount(0);
});

test('Scrubber 50 provider SKU stays separate from brush-specific family figures', async ({
  page,
}) => {
  await visit(page, 'scrubber-50-pro');
  await expect(spec(page, 'weight')).toHaveCount(0);
  await expect(spec(page, 'workingWidth')).toHaveCount(0);
  await expect(highlights(page)).toContainText('SoftBank Robotics America');
  for (const [suffix, weight, hours] of [
    ['disc', '157', '8'],
    ['roller', '148', '6'],
  ]) {
    await visit(page, `scrubber-50-${suffix}-brush`);
    await expect(spec(page, 'weight')).toHaveText(`${weight} kg net`);
    await expect(spec(page, 'maxRuntime')).toContainText(`${hours} h in dust-mopping`);
  }
});

test('Scrubber 75 variants qualify shared physical data and optional station package', async ({
  page,
}) => {
  for (const suffix of ['s', 'p']) {
    await visit(page, `scrubber-75-${suffix}`);
    await expect(spec(page, 'terrain')).toContainText('3° autonomous cleaning');
    await expect(spec(page, 'terrain')).toContainText('8° autonomous driving');
    await expect(spec(page, 'payload')).toHaveCount(0);
    await expect(highlights(page)).toContainText('family');
  }
});

test('Vacuum 40 diffuser reservoir is for humidification and dry-mop rating remains qualified', async ({
  page,
}) => {
  await visit(page, 'vacuum-40-diffuser');
  await expect(spec(page, 'waterTankCapacity')).toHaveText(
    '4 L humidification reservoir; not floor-cleaning water',
  );
  await expect(spec(page, 'weight')).toHaveText('97 kg unladen');
  await expect(spec(page, 'maxRuntime')).toContainText('18 h in dry-mopping mode');
});

test('Sweeper 111 keeps two source conflicts without inventing cargo or a runtime maximum', async ({
  page,
}) => {
  await visit(page, 'sweeper-111');
  for (const key of ['terrain', 'batteryLife']) {
    await expect(page.locator(`[data-spec-source="${key}"]`)).toHaveAttribute(
      'data-review-status',
      'conflicting',
    );
  }
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(spec(page, 'payload')).toHaveCount(0);
});

test('historical Delivery X1 tables separate per-tray cargo, Pro mass and screen', async ({
  page,
}) => {
  for (const [suffix, weight] of [
    ['delivery-x1', '35'],
    ['delivery-x1-pro', '38'],
  ]) {
    await visit(page, suffix);
    await expect(spec(page, 'weight')).toHaveText(`${weight} kg unladen`);
    await expect(spec(page, 'payload')).toContainText(
      '30 kg across three trays; 10 kg maximum per tray',
    );
    await expect(spec(page, 'maxRuntime')).toContainText('load conditions not stated');
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(schemas.map(JSON.parse).find((x) => x['@type'] === 'Product').offers).toBeUndefined();
  }
});

test('Max display restriction is searchable with a link to its evidence', async ({ page }) => {
  await page.goto(
    '/?category=commercial&q=touchscreen%20capability%20is%20not%20specified%20for%20Max',
  );
  const cards = page.locator('#robotsGrid .robot-card');
  await expect(cards).toHaveCount(1);
  await expect(cards).toContainText('touchscreen capability is not specified for Max');
  await cards.locator('a[href="/robot/gausium-phanshop-max/#product-highlights"]').click();
  await expect(page.locator('h1')).toHaveText('PhanShop Max');
});

test('German four-model comparison shows mode-specific widths and conflict notes', async ({
  page,
}) => {
  const table = await compare(page);
  await expect(table).toContainText('Arbeitsbreite');
  await expect(table).toContainText('Wassertankvolumen');
  await expect(table).toContainText('780 mm sweeping coverage with optional side brushes');
  await expect(table.locator('[data-review-status="conflicting"]')).not.toHaveCount(0);
  await expect(table).toContainText('22 L clean water; 20 L waste water');
});

for (const [label, route] of [
  ['Sweeper 111', '/robot/gausium-sweeper-111/'],
  ['company', '/brands/gausium-robotics/'],
]) {
  for (const mode of ['light', 'dark']) {
    test(`${label} remains accessible without overflow in ${mode}`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: mode });
      await page.goto(route);
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(
        result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
      ).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        await page.evaluate(() => innerWidth),
      );
    });
  }
}
for (const mode of ['light', 'dark']) {
  test(`German Gausium comparison remains accessible in ${mode}`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: mode });
    await compare(page);
    const result = await new AxeBuilder({ page })
      .include('#compareModal')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(
      result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
    ).toEqual([]);
  });
}

import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const visit = (page, id) => page.goto(`/robot/pudu-robotics-${id}/`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');

async function compare(page, ids, lang = 'en') {
  await page.addInitScript(
    ({ ids, lang }) => {
      localStorage.setItem('lang', lang);
      localStorage.setItem('compareRobots', JSON.stringify(ids.map((id) => `pudu-robotics-${id}`)));
    },
    { ids, lang },
  );
  await page.goto(`/brands/pudu-robotics/?lang=${lang}`);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('BG1 and Pro have different speeds with qualified working width and voltage ambiguity', async ({
  page,
}) => {
  for (const [id, speed] of [
    ['pudu-bg1', '0.2-1.0 m/s'],
    ['pudu-bg1-pro', '0.2-1.2 m/s'],
  ]) {
    await visit(page, id);
    await expect(spec(page, 'speed')).toHaveText(speed);
    await expect(spec(page, 'workingWidth')).toContainText('708 mm with side brushes');
    await expect(spec(page, 'areaRate')).toContainText('6000 m²/h spot cleaning');
    await expect(page.locator('[data-spec-source="chargingTime"]')).toHaveAttribute(
      'data-review-status',
      'conflicting',
    );
    await expect(spec(page, 'payload')).toHaveCount(0);
  }
});

test('CC1 Pro and Disc retain separate runtime, width and optional dock qualifications', async ({
  page,
}) => {
  await visit(page, 'pudu-cc1-pro');
  await expect(spec(page, 'workingWidth')).toContainText('500 mm');
  await expect(spec(page, 'maxRuntime')).toContainText('silent mopping');
  await visit(page, 'pudu-cc1-pro-disc');
  await expect(spec(page, 'workingWidth')).toContainText('380 mm');
  await expect(spec(page, 'weight')).toHaveText('80 kg');
  await expect(spec(page, 'batteryLife')).toContainText('3.8 h+ in Standard Mode');
  await expect(spec(page, 'payload')).toHaveCount(0);
  await expect(highlights(page)).toContainText('optional docking station');
});

test('ET1 task widths and MT1 Vac task limits do not become universal values', async ({ page }) => {
  await visit(page, 'pudu-et1');
  await expect(spec(page, 'workingWidth')).toContainText(
    '300 mm scrubbing/dust mopping; 390 mm sweeping/vacuuming',
  );
  await expect(highlights(page)).toContainText('advertising display is optional');
  await visit(page, 'pudu-mt1-vac');
  await expect(spec(page, 'workingWidth')).toContainText('550 mm vacuuming; 700 mm sweeping');
  await expect(spec(page, 'batteryLife')).toContainText('4 h standard sweep/vacuum on hard floors');
  await expect(highlights(page)).toContainText('H13 is optional');
  await expect(spec(page, 'ipRating')).toHaveCount(0);
});

test('MT1 Max robot mass is distinct from the optional emptying station', async ({ page }) => {
  await visit(page, 'pudu-mt1-max');
  await expect(spec(page, 'weight')).toHaveText('85 kg');
  await expect(spec(page, 'size')).toContainText('675 mm');
  await expect(spec(page, 'ipRating')).toContainText('IP54');
  await expect(spec(page, 'terrain')).toContainText('extreme weather');
  await expect(highlights(page)).toContainText('57.8 kg');
});

test('mower rates, collection modes and optional fast charging remain qualified', async ({
  page,
}) => {
  await visit(page, 'pudu-gt3');
  await expect(spec(page, 'areaRate')).toHaveCount(0);
  await expect(spec(page, 'workingWidth')).toContainText('914.4 mm');
  await expect(spec(page, 'chargingTime')).toContainText('optional fast charging: 2 h');
  await visit(page, 'pudu-gt5');
  await expect(spec(page, 'areaRate')).toContainText('8000 m²/h');
  await expect(spec(page, 'terrain')).toContainText('20°');
  await visit(page, 'pudu-gt7');
  await expect(spec(page, 'maxRuntime')).toContainText('non-collection mode');
  await expect(spec(page, 'size')).toContainText('1500 x 1400 mm lifted');
  await expect(spec(page, 'ipRating')).toHaveCount(0);
});

test('D5 variant steps, battery-inclusive mass and numeric storefront offers stay separate', async ({
  page,
}) => {
  for (const [id, step, mass, price] of [
    ['d5', '30 cm maximum step; 25°', '61 kg including battery', 80000],
    ['d5-w', '25 cm maximum step; 30°', '62 kg including battery', 85000],
  ]) {
    await visit(page, id);
    await expect(spec(page, 'weight')).toHaveText(mass);
    await expect(spec(page, 'terrain')).toContainText(step);
    await expect(spec(page, 'speed')).toHaveCount(0);
    await expect(spec(page, 'chargingTime')).toHaveCount(0);
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    const product = schemas.map((text) => JSON.parse(text)).find((x) => x['@type'] === 'Product');
    // Storefront prices carry bundle/tax qualifiers, so they stay visible but not as Offers.
    expect(product.offers).toBeUndefined();
    await expect(spec(page, 'price')).toHaveAttribute('data-raw-value', new RegExp(`^${price} USD`));
    await expect(highlights(page)).toContainText('SDK/developer support');
  }
});

test('preserved source-only hand-vacuum functionality remains discoverable', async ({ page }) => {
  await page.goto('/?category=cleaning&q=hand-vacuum%20extension%20reaches%20furniture%20sides');
  const card = page.locator('#robotsGrid .robot-card');
  await expect(card).toHaveCount(1);
  await expect(card).toContainText('delivered accessory bundle remains unverified');
  await card.locator('a[href="/robot/pudu-robotics-pudu-mt1-vac/#product-highlights"]').click();
  await expect(page.locator('h1')).toHaveText('PUDU MT1 Vac');
});

test('working width and area rate compare in German with mode and source qualifications', async ({
  page,
}) => {
  const table = await compare(
    page,
    ['pudu-bg1', 'pudu-bg1-pro', 'pudu-cc1-pro-disc', 'pudu-mt1-max'],
    'de',
  );
  const width = table
    .getByRole('row')
    .filter({ has: page.getByRole('cell', { name: 'Arbeitsbreite', exact: true }) });
  const rate = table
    .getByRole('row')
    .filter({ has: page.getByRole('cell', { name: 'Flächenleistung', exact: true }) });
  await expect(width).toContainText('380 mm');
  await expect(width).toContainText('708 mm');
  await expect(rate).toContainText('7000 m²/h spot sweeping');
  await expect(table).toContainText('180 V');
  await expect(table).toContainText('0.2-1.0 m/s');
  await expect(table).toContainText('0.2-1.2 m/s');
});

for (const id of ['pudu-bg1-pro', 'pudu-gt7']) {
  for (const mode of ['light', 'dark']) {
    test(`${id} remains accessible and fits narrow screens in ${mode} mode`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: mode });
      await visit(page, id);
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
  test(`cross-category area comparison remains accessible in ${mode} mode`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: mode });
    await compare(page, ['pudu-bg1-pro', 'pudu-cc1-pro-disc', 'pudu-gt3', 'd5-w']);
    const result = await new AxeBuilder({ page })
      .include('#compareModal')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(
      result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
    ).toEqual([]);
  });
}

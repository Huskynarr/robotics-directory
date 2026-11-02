import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
const visit = (page, id) => page.goto(`/robot/orionstar-${id}/`);
async function compare(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(
        ['carrybot-d100', 'carrybot-d150', 'cleanibot-s55-pro', 'greetingbot-ad'].map(
          (id) => `orionstar-${id}`,
        ),
      ),
    );
  });
  await page.goto('/brands/orionstar-robotics/?lang=de');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}
test('brand lists twelve English model cards and the separately retained regional identity', async ({
  page,
}) => {
  await page.goto('/brands/orionstar-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(13);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'regional/revision equivalence is not certified',
  );
  await page.goto('/?category=cleaning&sub=cleaning-commercial&mfr=OrionStar');
  for (const id of ['s55-pro', 'm1', 'k1', 'c5'])
    await expect(
      page.locator(`#robotsGrid .robot-card[data-robot-id="orionstar-cleanibot-${id}"]`),
    ).toBeVisible();
});
test('Pro and regional delivery URLs retain their identities after commercial category transfers', async ({
  page,
}) => {
  await visit(page, 'luckibot-pro');
  await expect(spec(page, 'payload')).toHaveText('60 kg total; up to 15 kg per tray');
  await expect(spec(page, 'chargingTime')).toHaveText('4.5 h while powered off');
  await page.goto('/robot/orion-star-lucki-zhaocaibao/');
  await expect(spec(page, 'terrain')).toHaveText('Maximum grade 5°');
  await expect(spec(page, 'chargingTime')).toHaveText('4.5 h using charging dock');
  await expect(page.locator('[data-spec-source="chargingTime"]')).toHaveAttribute(
    'href',
    'https://www.orionstar.com/zhcaibao-zh.html',
  );
});
test('Lucki and Autodoor keep total load distinct from per-tray load and storage dimensions', async ({
  page,
}) => {
  await visit(page, 'luckibot');
  await expect(spec(page, 'payload')).toHaveText('40 kg total; up to 10 kg per tray');
  await expect(spec(page, 'terrain')).toHaveCount(0);
  await visit(page, 'luckibot-pro-autodoor');
  await expect(spec(page, 'payload')).toHaveText('Up to 20 kg per tray; total load unspecified');
  await expect(spec(page, 'weight')).toHaveCount(0);
  await expect(highlights(page)).toContainText('410 x 480 x 315 mm');
});
test('CarryBot D100 does not inherit D150 technical limits', async ({ page }) => {
  await visit(page, 'carrybot-d100');
  for (const key of ['weight', 'size', 'speed', 'chargingTime'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(spec(page, 'batteryLife')).toContainText(
    '9 h; tested with 100 kg load on marble floor',
  );
  await expect(highlights(page)).toContainText('expressly titled CarryBot-D150');
});
test('D150 keeps configuration mass, shelf size and test load qualified', async ({ page }) => {
  await visit(page, 'carrybot-d150');
  await expect(spec(page, 'weight')).toHaveCount(0);
  await expect(spec(page, 'size')).toHaveText(
    'Robot: 600 x 525 x 1377 mm; shelf dimensions separate',
  );
  await expect(spec(page, 'batteryLife')).toHaveText('12 h with 100 kg load on marble floor');
  await expect(highlights(page)).toContainText('48 kg robot plus 12 kg shelf');
  for (const key of ['navigationAccuracy', 'dockingAccuracy'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('Mini and Nova expose exact cruising and charging conditions', async ({ page }) => {
  await visit(page, 'greetingbot-mini');
  await expect(spec(page, 'batteryLife')).toHaveText('12 h in a typical cruising scene');
  await expect(spec(page, 'chargingTime')).toHaveText('≤4.5 h while powered off');
  await visit(page, 'greetingbot-nova');
  await expect(spec(page, 'batteryLife')).toHaveText('12–14 h in a typical cruising scene');
  await expect(spec(page, 'chargingTime')).toHaveText('4.5 h using charging dock');
});
test('AD does not convert charging current or screen diagonals to robot measurements', async ({
  page,
}) => {
  await visit(page, 'greetingbot-ad');
  await expect(spec(page, 'batteryLife')).toContainText('8–10 h');
  for (const key of ['weight', 'size', 'chargingTime', 'navigationAccuracy'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(highlights(page)).toContainText('An 8 A');
});
test('S55 Pro keeps mode-specific endurance and output without inventing brush width', async ({
  page,
}) => {
  await visit(page, 'cleanibot-s55-pro');
  await expect(spec(page, 'batteryLife')).toContainText('Power Scrub 3.5 h');
  await expect(spec(page, 'batteryLife')).toContainText('Dust Mop 28 h');
  await expect(spec(page, 'areaRate')).toContainText('Scrub/Power Scrub 1197 m²/h');
  await expect(spec(page, 'workingWidth')).toHaveCount(0);
  await expect(spec(page, 'waterTankCapacity')).toHaveText('22 L clean / 15 L wastewater');
});
test('M1, K1 and C5 retain brush widths, tank scope and loaded slope conditions', async ({
  page,
}) => {
  await visit(page, 'cleanibot-m1');
  await expect(spec(page, 'workingWidth')).toHaveText('500 mm main brush; 680 mm squeegee');
  await visit(page, 'cleanibot-k1');
  await expect(spec(page, 'batteryLife')).toHaveText('Vacuuming 8 h; Mopping 4 h');
  await expect(spec(page, 'waterTankCapacity')).toHaveCount(0);
  await visit(page, 'cleanibot-c5');
  await expect(spec(page, 'waterTankCapacity')).toHaveText(
    '45 L clean / 45 L wastewater; station tank 8 L separate',
  );
  await expect(spec(page, 'payload')).toHaveCount(0);
  await expect(spec(page, 'terrain')).toHaveText(
    '15 mm obstacle; maximum grade 5° loaded / 8° empty',
  );
});
test('structured properties include mode-specific capacity with no fabricated numeric offer', async ({
  page,
}) => {
  await visit(page, 'cleanibot-c5');
  const product = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .map(JSON.parse)
    .find((x) => x['@type'] === 'Product');
  expect(product.offers).toBeUndefined();
  expect(product.additionalProperty).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: 'Water tank capacity',
        value: '45 L clean / 45 L wastewater; station tank 8 L separate',
      }),
    ]),
  );
});
test('German comparison retains empty D100 fields and localized S55 mode values', async ({
  page,
}) => {
  const table = await compare(page);
  await expect(table).toContainText('Batterielaufzeit');
  await expect(table).toContainText('Dust Mop 28 h');
  const charging = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="chargingTime"]') });
  const columns = await table.locator('thead th').allTextContents();
  const column = (name) => columns.findIndex((value) => value.trim() === name);
  for (const name of ['CarryBot D100', 'CarryBot D150', 'GreetingBot AD'])
    expect(column(name)).toBeGreaterThan(0);
  await expect(charging.locator('td').nth(column('CarryBot D100'))).toHaveText('-');
  await expect(charging.locator('td').nth(column('CarryBot D150'))).toContainText('4,5 h');
  await expect(charging.locator('td').nth(column('GreetingBot AD'))).toHaveText('-');
  await expect(table).toContainText('8 A');
});
for (const theme of ['light', 'dark'])
  for (const route of [
    '/robot/orionstar-cleanibot-s55-pro/',
    '/brands/orionstar-robotics/',
    'comparison',
  ]) {
    test(`accessible ${theme} ${route}`, async ({ page }) => {
      await page.addInitScript((theme) => localStorage.setItem('theme', theme), theme);
      if (route === 'comparison') await compare(page);
      else await page.goto(route);
      const scan = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(scan.violations).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      );
    });
  }

import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const brand = '/brands/pal-robotics/';
const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
async function compare(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'pal-robotics-stockbot',
        'pal-robotics-tiago-base',
        'pal-robotics-tiago-omni-base',
        'pal-robotics-tiago-base-ai',
      ]),
    );
  });
  await page.goto(`${brand}?lang=de`);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('company profile exposes 17 distinct platforms and legacy configuration scope', async ({
  page,
}) => {
  await page.goto(brand);
  await expect(page.locator('main .robot-card')).toHaveCount(17);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'classified as legacy',
  );
  for (const id of ['tiago-pro-arm', 'tiago-head', 'tiago-plus-plus', 'tiago-base-ai'])
    await expect(
      page.locator(`main .robot-card[data-robot-id="pal-robotics-${id}"]`),
    ).toBeVisible();
});
test('mobile Pro reach is separated from the accessory station and default-gripper configuration', async ({
  page,
}) => {
  await page.goto('/robot/pal-robotics-tiago-pro/');
  await expect(spec(page, 'armReach')).toContainText('92 cm vertical; 236 cm horizontal');
  await expect(page.locator('[data-spec-source="armReach"]')).toHaveAttribute(
    'data-review-status',
    'documented',
  );
  await expect(spec(page, 'dof')).toContainText('including default grippers');
  await expect(highlights(page)).toContainText('separate TIAGo Pro Teleoperation Station');
});
test('StockBot renders both conflicting endurance and complete-recharge values', async ({
  page,
}) => {
  await page.goto('/robot/pal-robotics-stockbot/');
  await expect(spec(page, 'batteryLife')).toContainText('~10 h');
  await expect(spec(page, 'chargingTime')).toContainText('5 h full recharge');
  for (const key of ['batteryLife', 'chargingTime'])
    await expect(page.locator(`[data-spec-source="${key}"]`)).toHaveAttribute(
      'data-review-status',
      'conflicting',
    );
  await expect(highlights(page)).toContainText('optical camera capture height up to 2.4 m');
});
test('Kangaroo loads and TALOS sensor exclusions survive public rendering', async ({ page }) => {
  await page.goto('/robot/pal-robotics-kangaroo/');
  await expect(spec(page, 'payload')).toContainText('bimanual: 30/28/25 kg');
  await expect(highlights(page)).toContainText('not the sum');
  await page.goto('/robot/pal-robotics-talos/');
  await expect(spec(page, 'batteryLife')).toHaveText('1.5 h walking; 3 h standby');
  await expect(highlights(page)).toContainText('excludes head, wrists and grippers');
});
test('ARI omits unsupported mass and retains conflicting depth', async ({ page }) => {
  await page.goto('/robot/pal-robotics-ari/');
  await expect(spec(page, 'weight')).toHaveCount(0);
  await expect(spec(page, 'size')).toContainText('73 cm webpage / 75 cm datasheet');
  await expect(page.locator('[data-spec-source="size"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
});
test('differential Base and OMNI Base preserve gap, step and slope distinctions', async ({
  page,
}) => {
  await page.goto('/robot/pal-robotics-tiago-base/');
  for (const key of ['payload', 'speed', 'terrain'])
    await expect(page.locator(`[data-spec-source="${key}"]`)).toHaveAttribute(
      'data-review-status',
      'conflicting',
    );
  await expect(spec(page, 'terrain')).toContainText('~6% slope');
  await page.goto('/robot/pal-robotics-tiago-omni-base/');
  await expect(spec(page, 'terrain')).toContainText('not vertical step height');
  await expect(spec(page, 'payload')).toHaveText('100 kg');
});
test('arm operation cycle is not battery life and unresolved payload stays marked', async ({
  page,
}) => {
  await page.goto('/robot/pal-robotics-tiago-pro-arm/');
  for (const key of ['batteryLife', 'maxRuntime']) await expect(spec(page, key)).toHaveCount(0);
  await expect(spec(page, 'payload')).toContainText('7 kg peak / 6 kg continuous');
  await expect(page.locator('[data-spec-source="payload"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(highlights(page)).toContainText('not 24 h battery life');
});
test('legacy head and equipped Base configuration omit unproved mobile/bare-base specifications', async ({
  page,
}) => {
  await page.goto('/robot/pal-robotics-tiago-head/');
  await expect(spec(page, 'dof')).toHaveText('2');
  await expect(highlights(page)).toContainText('10% educational discount');
  await expect(spec(page, 'batteryLife')).toHaveCount(0);
  await page.goto('/robot/pal-robotics-tiago-base-actuated-conveyor/');
  for (const key of ['payload', 'size', 'weight', 'batteryLife'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('source-qualified educational pricing is searchable without a universal current offer', async ({
  page,
}) => {
  await page.goto('/?mfr=PAL%20Robotics&q=educational%20discount');
  const cards = page.locator('#robotsGrid .robot-card');
  await expect(cards).toHaveCount(1);
  await expect(cards).toHaveAttribute('data-robot-id', 'pal-robotics-tiago-head');
  await expect(cards).toContainText('excluding shipping, taxes and duties');
});
test('German comparison preserves missing StockBot payload and distinct AI/OMNI limits', async ({
  page,
}) => {
  const table = await compare(page);
  const headings = await table.locator('thead th').allTextContents();
  const column = (name) => headings.findIndex((s) => s.trim() === name);
  const row = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="payload"]') });
  expect(column('StockBot')).toBeGreaterThan(0);
  await expect(row.locator('td').nth(column('StockBot'))).toHaveText('-');
  await expect(row.locator('td').nth(column('TIAGo Base'))).toContainText('70 kg');
  await expect(row.locator('td').nth(column('TIAGo OMNI Base'))).toContainText('100 kg');
  await expect(row.locator('td').nth(column('TIAGo Base AI'))).toContainText('150 kg');
});
test('structured head data includes exact joints without presenting historical package prices as offers', async ({
  page,
}) => {
  await page.goto('/robot/pal-robotics-tiago-head/');
  const product = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .map(JSON.parse)
    .find((x) => x['@type'] === 'Product');
  expect(product.offers).toBeUndefined();
  expect(product.additionalProperty).toEqual(
    expect.arrayContaining([expect.objectContaining({ name: 'Degrees of freedom', value: '2' })]),
  );
});
for (const theme of ['light', 'dark'])
  for (const route of [brand, '/robot/pal-robotics-tiago-pro-arm/', 'comparison'])
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

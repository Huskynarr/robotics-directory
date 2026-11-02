import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (p, k) => p.locator('[data-spec-key="' + k + '"]');
const highlights = (p) => p.locator('section[aria-labelledby="product-highlights"]');

test('brand and provider profiles expose their own distinct offerings and sourced focus', async ({
  page,
}) => {
  for (const [id, count] of [
    ['catalog-interbotix-4c84889e15d1', 15],
    ['trossen-robotics', 16],
  ]) {
    await page.goto('/brands/' + id + '/');
    await expect(page.locator('main .robot-card')).toHaveCount(count);
    await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
      'provider/company profile',
    );
  }
});
test('X-Series payload remains qualified by extension and cooling conditions', async ({ page }) => {
  await page.goto('/robot/interbotix-viperx-300-6dof/');
  await expect(spec(page, 'payload')).toContainText('750 g');
  await expect(spec(page, 'payload')).toContainText('50% extension');
  await expect(highlights(page)).toContainText('servo-cooling rest poses');
});
test('PincherX-150 retains the unresolved printed reach without a silent correction', async ({
  page,
}) => {
  await page.goto('/robot/interbotix-pincherx-150/');
  await expect(spec(page, 'armReach')).toContainText('150 mm');
  await expect(spec(page, 'armReach')).toContainText('900 mm total span');
  await expect(spec(page, 'size')).toHaveCount(0);
});
test('arm DOF and repeatability remain different from servo count and accuracy', async ({
  page,
}) => {
  await page.goto('/robot/interbotix-widowx-250-6dof/');
  await expect(spec(page, 'dof')).toContainText('6 arm DOF');
  await expect(highlights(page)).toContainText('9 servos');
  await expect(spec(page, 'armRepeatability')).toContainText('1 mm');
  await expect(highlights(page)).toContainText('5 - 8mm');
});
test('ALOHA Mobile energy capacity does not become a runtime rating', async ({ page }) => {
  await page.goto('/robot/interbotix-aloha-mobile/');
  await expect(spec(page, 'weight')).toContainText('122 kg');
  await expect(spec(page, 'speed')).toContainText('1 m/s');
  await expect(highlights(page)).toContainText('1.4 kWh');
  for (const key of ['batteryLife', 'maxRuntime', 'chargingTime', 'size'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('previous and new arm generations retain different grippers and repeatability coverage', async ({
  page,
}) => {
  await page.goto('/robot/trossen-robotics-widowx-ai-follower/');
  await expect(spec(page, 'handType')).toContainText('95 mm');
  await expect(spec(page, 'dof')).toContainText('6 arm DOF');
  await expect(spec(page, 'armRepeatability')).toContainText('1 mm');
  await page.goto('/robot/trossen-robotics-widowx-pro/');
  await expect(spec(page, 'handType')).toContainText('90 mm');
  await expect(spec(page, 'armRepeatability')).toHaveCount(0);
});
test('new Pro reach conflict and preliminary weight stay visible beside their sources', async ({
  page,
}) => {
  await page.goto('/robot/trossen-robotics-widowx-pro/');
  await expect(spec(page, 'armReach')).toContainText('700 mm');
  await expect(spec(page, 'armReach')).toContainText('790 mm');
  await expect(page.locator('[data-spec-source="armReach"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(page.locator('[data-spec-source="weight"]')).toHaveAttribute(
    'data-review-status',
    'roadmap',
  );
});
test('Heavy load mismatch remains per-arm and is not summed for the package', async ({ page }) => {
  await page.goto('/robot/trossen-robotics-workbench-lite-plus-2-widowx-heavy-plus-cameras/');
  await expect(spec(page, 'payload')).toContainText('6 kg per arm');
  await expect(spec(page, 'payload')).toContainText('8 kg per arm');
  await expect(page.locator('[data-spec-source="payload"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
});
test('Rivet Base exclusions and populated-arm package have different specifications', async ({
  page,
}) => {
  await page.goto('/robot/trossen-robotics-rivet-base/');
  await expect(highlights(page)).toContainText('omits arms, cameras and built-in compute');
  await expect(spec(page, 'payload')).toHaveCount(0);
  await expect(spec(page, 'armReach')).toHaveCount(0);
  await expect(spec(page, 'liftStroke')).toContainText('890 mm');
  await expect(spec(page, 'maxLiftHeight')).toHaveCount(0);
  await page.goto('/robot/trossen-robotics-rivet-plus-2-widowx-pro-plus-cameras/');
  await expect(spec(page, 'payload')).toContainText('4 kg per');
});
test('full Workbench announcement retains coming-soon scope separately from Lite', async ({
  page,
}) => {
  await page.goto('/robot/trossen-robotics-workbench/');
  await expect(highlights(page)).toContainText('coming soon');
  await expect(spec(page, 'price')).toContainText('Not disclosed');
});
test('vertical-travel feature can be discovered through highlight search', async ({ page }) => {
  await page.goto('/?q=' + encodeURIComponent('890 mm of screw-driven vertical travel'));
  await expect(
    page.locator('.robot-card[data-robot-id="trossen-robotics-rivet-base"]'),
  ).toBeVisible();
  await expect(
    page.locator(
      '.robot-card[data-robot-id="trossen-robotics-rivet-base"] [data-search-highlight]',
    ),
  ).toContainText('890 mm of screw-driven');
});
test('German comparison shows preliminary prices, reach conflict and Heavy load qualification', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'trossen-robotics-widowx-pro',
        'trossen-robotics-widowx-heavy',
        'trossen-robotics-rivet-base',
      ]),
    );
  });
  await page.goto('/brands/trossen-robotics/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  await expect(table).toContainText('final approval pending');
  await expect(table).toContainText('8 kg per arm');
  await expect(
    table.locator('[data-comparison-review="armReach"][data-review-status="conflicting"]'),
  ).toHaveCount(2);
});
for (const id of ['interbotix-aloha-mobile', 'trossen-robotics-widowx-pro'])
  for (const theme of ['light', 'dark'])
    test('axe ' + id + ' ' + theme, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await page.goto('/robot/' + id + '/');
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });

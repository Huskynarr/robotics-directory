import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (page, key) => page.locator('[data-spec-key="' + key + '"]');
const badge = (page, key) => page.locator('[data-spec-source="' + key + '"]');
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
test('canonical brand pages expose sourced focuses and actual hardware inventory', async ({
  page,
}) => {
  for (const [id, count, text] of [
    ['cleanfix-robotics', 5, 'membrane'],
    ['ez-robot', 8, 'user-printed'],
  ]) {
    await page.goto('/brands/' + id + '/');
    await expect(page.locator('main .robot-card')).toHaveCount(count);
    await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(text);
  }
});
test('Pure does not inherit Connect remote functions and fast charging stays optional', async ({
  page,
}) => {
  await page.goto('/robot/cleanfix-ra660-navi-m-pure/');
  await expect(highlights(page)).toContainText('Connect-only, not inherited');
  await expect(spec(page, 'chargingTime')).toContainText('Optional fast-charge');
  await expect(spec(page, 'waterTankCapacity')).toContainText('sharing tank volume');
  await expect(spec(page, 'minAisleWidth')).toHaveCount(0);
  await page.goto('/robot/cleanfix-ra660-navi-m-connect/');
  await expect(highlights(page)).toContainText('Connect adds iPad');
  await expect(badge(page, 'chargingTime').locator('time')).toHaveAttribute(
    'datetime',
    '2026-11-02',
  );
});
test('dated XL configuration and named Generation2 retain distinct dimensions and speed evidence', async ({
  page,
}) => {
  await page.goto('/robot/cleanfix-ra660-navi-xl/');
  await expect(spec(page, 'size')).toContainText('1010 x 850 x 1185');
  await expect(spec(page, 'weight')).toContainText('313 kg with water');
  await page.goto('/robot/cleanfix-ra660-navi-xl-generation-2/');
  await expect(spec(page, 'size')).toContainText('1015 x 850 x 1100');
  await expect(badge(page, 'speed')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'speed')).toHaveAttribute('data-raw-value', /08. m\/s/);
  await expect(badge(page, 'weight')).toHaveAttribute('data-review-status', 'documented');
  await expect(spec(page, 'weight')).toContainText('without water');
});
test('S170 exposes charge and slope-label ambiguity without inferring hourly area or water volume', async ({
  page,
}) => {
  await page.goto('/robot/cleanfix-s170-navi/');
  for (const key of ['chargingTime', 'terrain'])
    await expect(badge(page, key)).toHaveAttribute('data-review-status', 'conflicting');
  for (const key of ['areaRate', 'waterTankCapacity', 'weight'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(spec(page, 'workingWidth')).toContainText(
    '170 mm main roller; 275 mm with side brush',
  );
  await expect(highlights(page)).toContainText('paid FieldBots OS subscription');
});
test('old JD URL and saved favorites/comparison migrate to the single canonical robot', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('robotFavorites', JSON.stringify(['ez-robot-jd-humanoid', 'ez-robot-jd']));
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(['ez-robot-jd-humanoid', 'ez-robot-jd', 'ez-robot-six']),
    );
  });
  await page.goto('/robot/ez-robot-jd-humanoid/');
  await expect(page).toHaveURL(/\/robot\/ez-robot-jd\/$/);
  await expect(page.locator('h1')).toHaveText('JD');
  await expect(spec(page, 'ageRange')).toHaveText('10+');
  await expect(spec(page, 'dof')).toHaveCount(0);
  await expect(spec(page, 'releaseDate')).toHaveCount(0);
  await page.goto('/brands/ez-robot/');
  await expect(page.locator('.robot-card[data-robot-id="ez-robot-jd"]')).toHaveCount(1);
  await expect
    .poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('robotFavorites'))))
    .toEqual(['ez-robot-jd']);
  await expect
    .poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('compareRobots'))))
    .toEqual(['ez-robot-jd', 'ez-robot-six']);
});
test('Six joint count is explicit while Roli servo inventory does not invent robot DOF', async ({
  page,
}) => {
  await page.goto('/robot/ez-robot-six/');
  await expect(spec(page, 'dof')).toContainText('12 joints');
  await expect(spec(page, 'weight')).toHaveAttribute('data-raw-value', /1.7 kg product mass/);
  await page.goto('/robot/ez-robot-roli/');
  await expect(spec(page, 'dof')).toHaveCount(0);
  await expect(spec(page, 'driveMode')).toHaveText('Tracked drive');
  await expect(highlights(page)).toContainText('five lever servos, three rotation servos');
});
test('Enhanced head retains height conversion conflict and differs from battery-powered standard kit', async ({
  page,
}) => {
  await page.goto('/robot/ez-robot-ez-inmoov-robot-head/');
  await expect(highlights(page)).toContainText('LiPo battery and USB charger');
  await page.goto('/robot/ez-robot-ez-inmoov-enhanced-robot-head/');
  await expect(badge(page, 'size')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'size')).toHaveAttribute('data-raw-value', /33 cm.*12.1 in/);
  await expect(highlights(page)).toContainText('7.5 V mains power supply');
  await expect(highlights(page)).toContainText('User must 3D print plastic parts');
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
});
test('torso/head hardware kit does not inherit related head dimensions or claim a walking humanoid', async ({
  page,
}) => {
  await page.goto('/robot/ez-robot-ez-inmoov-humanoid-robot-hardware-kit/');
  for (const key of ['size', 'weight', 'dof', 'maxRuntime'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(page.locator('main')).toContainText('not a ready-assembled walking full-body robot');
  await expect(highlights(page)).toContainText('one-year ARC Pro subscription');
});
test('two wheel kits retain distinct product mass and dated prices without universal Offers', async ({
  page,
}) => {
  for (const [id, mass, amount] of [
    ['adventurebot', '0.71 kg', '299.99 USD'],
    ['battle-flipper', '0.79 kg', '324.99 USD'],
  ]) {
    await page.goto('/robot/ez-robot-' + id + '/');
    await expect(spec(page, 'weight')).toHaveAttribute('data-raw-value', new RegExp(mass));
    await expect(spec(page, 'price')).toHaveAttribute('data-raw-value', new RegExp(amount));
    await expect(spec(page, 'price')).toContainText('Unavailable');
    const product = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((nodes) =>
        nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
      );
    expect(product.offers).toBeUndefined();
  }
});
test('feature-only search finds paid SIM service conditions', async ({ page }) => {
  await page.goto('/?mfr=Cleanfix&q=' + encodeURIComponent('paid FieldBots OS subscription'));
  const card = page.locator('.robot-card[data-robot-id="cleanfix-s170-navi"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText(
    'paid FieldBots OS subscription',
  );
});
test('German comparison shows generation/head conflicts and leaves cross-category water blanks', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'cleanfix-ra660-navi-xl',
        'cleanfix-ra660-navi-xl-generation-2',
        'ez-robot-six',
        'ez-robot-ez-inmoov-enhanced-robot-head',
      ]),
    );
  });
  await page.goto('/brands/ez-robot/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  for (const key of ['speed', 'size'])
    await expect(
      table.locator('[data-comparison-review="' + key + '"][data-review-status="conflicting"]'),
    ).toHaveCount(1);
  const water = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="waterTankCapacity"]') });
  const headers = await table.locator('thead th').allTextContents();
  for (const name of ['Six', 'EZ-InMoov Enhanced Robot Head']) {
    const index = headers.findIndex((text) => text.trim() === name);
    expect(index).toBeGreaterThan(0);
    await expect(water.locator('td').nth(index)).toHaveText('-');
  }
  await expect(water).toContainText('not 220 L total');
});
for (const theme of ['light', 'dark']) {
  for (const target of [
    '/brands/cleanfix-robotics/',
    '/brands/ez-robot/',
    '/robot/cleanfix-s170-navi/',
    '/robot/ez-robot-ez-inmoov-humanoid-robot-hardware-kit/',
  ]) {
    test('accessibility ' + theme + ' ' + target, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem('theme', value), theme);
      await page.goto(target);
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });
  }
}

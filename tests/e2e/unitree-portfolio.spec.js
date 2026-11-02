import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const brand = '/brands/unitree-robotics/';
const route = (id) => '/robot/unitree-' + id + '/';
const spec = (page, key) => page.locator('[data-spec-key="' + key + '"]');
const badge = (page, key) => page.locator('[data-spec-source="' + key + '"]');
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
async function comparison(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'unitree-h2-d-standard',
        'unitree-h2-d-flagship',
        'unitree-g1-d-standard',
        'unitree-g1-d-ultimate',
      ]),
    );
  });
  await page.goto(brand);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}
test('brand exposes named platform, arm and teleoperation-kit configurations', async ({ page }) => {
  await page.goto(brand);
  await expect(page.locator('main .robot-card')).toHaveCount(58);
  for (const id of [
    'a2-w-pro',
    'h2-x-edu',
    'h2-a-standard',
    'r1-a7-d',
    'g1-plus-edu',
    'g1-comp',
    'b2-ex-chassis',
    'aliengo',
    'r1-7a',
    'd1',
    'd1-t-full-edition',
    'z1-pro',
    'd2',
  ])
    await expect(
      page.locator('main .robot-card[data-robot-id="unitree-' + id + '"]'),
    ).toBeVisible();
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'robotic-arm and mobile dual-arm',
  );
});
test('A2-W exact standard and PRO perception/protection stay qualified', async ({ page }) => {
  await page.goto(route('a2-w'));
  await expect(highlights(page)).toContainText('one LiDAR');
  await expect(spec(page, 'ipRating')).toHaveText('IP56');
  await expect(spec(page, 'batteryLife')).toContainText('25 kg load: >1.5 h');
  await page.goto(route('a2-w-pro'));
  await expect(highlights(page)).toContainText('two LiDAR');
  await expect(spec(page, 'ipRating')).toContainText('core components rated IP67');
});
test('H2-X retains both manufacturer eight-hour rows without copying microphone or charger data', async ({
  page,
}) => {
  await page.goto(route('h2-x'));
  await expect(spec(page, 'batteryLife')).toContainText(
    'Static: about 8 h; continuous walking: about 8 h',
  );
  await expect(badge(page, 'batteryLife')).toHaveAttribute(
    'title',
    /not independently corroborated/,
  );
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
  await expect(spec(page, 'ipRating')).toHaveCount(0);
  await expect(highlights(page)).toContainText('microphone five-hour');
  await page.goto(route('h2-x-edu'));
  await expect(highlights(page)).toContainText('Core i7 or Orin NX');
});
test('H2-A fixed base and H2-D standard/flagship keep power and lift specifications separate', async ({
  page,
}) => {
  await page.goto(route('h2-a-standard'));
  await expect(spec(page, 'dof')).toHaveText('19 excluding end effectors');
  await expect(spec(page, 'armReach')).toContainText('excluding dexterous hands');
  await page.goto(route('h2-d-standard'));
  await expect(spec(page, 'batteryLife')).toHaveCount(0);
  await expect(spec(page, 'liftStroke')).toHaveText('0.36 m');
  await page.goto(route('h2-d-flagship'));
  await expect(spec(page, 'batteryLife')).toContainText('About 5 h on battery');
  await expect(spec(page, 'liftStroke')).toHaveText('0.46 m');
  for (const key of ['turningRadius', 'maxLiftHeight'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('R1-A table columns retain fixed power accounting and equipped joint counts', async ({
  page,
}) => {
  for (const [id, count] of [
    ['r1-a5', 15],
    ['r1-a7', 19],
    ['r1-a5-d', 18],
    ['r1-a7-d', 22],
  ]) {
    await page.goto(route(id));
    await expect(spec(page, 'dof')).toContainText(count + ' with gripper');
    await expect(spec(page, 'price')).toHaveText('Not disclosed');
  }
  await expect(spec(page, 'liftStroke')).toHaveCount(0);
  await expect(spec(page, 'driveMode')).toHaveCount(0);
});
test('G1-D software-service uptime does not become standard or ultimate battery life', async ({
  page,
}) => {
  for (const [id, count, hours] of [
    ['g1-d-standard', 17, 2],
    ['g1-d-ultimate', 19, 6],
  ]) {
    await page.goto(route(id));
    await expect(spec(page, 'dof')).toHaveText(count + ' excluding end effectors');
    await expect(spec(page, 'batteryLife')).toContainText('About ' + hours + ' h');
    await expect(spec(page, 'liftStroke')).toHaveCount(0);
    await expect(highlights(page)).toContainText('24/7 acquisition describes software-service');
  }
});
test('G1+ plus identity and competition configuration keep optional hardware scope', async ({
  page,
}) => {
  await page.goto(route('g1-plus'));
  await expect(spec(page, 'dof')).toHaveText('25');
  await expect(spec(page, 'payload')).toContainText('3 kg');
  await page.goto(route('g1-plus-edu'));
  await expect(spec(page, 'payload')).toContainText('4 kg');
  await page.goto(route('g1-comp'));
  await expect(highlights(page)).toContainText('selectable additional computing');
  await expect(spec(page, 'handType')).toContainText('tactile arrays optional');
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
});
test('B2-Ex inspection does not inherit chassis slope, spare payload or an independent certificate', async ({
  page,
}) => {
  await page.goto(route('b2-ex-chassis'));
  await expect(spec(page, 'terrain')).toContainText('45°');
  await expect(highlights(page)).toContainText('not an independently verified certificate');
  await page.goto(route('b2-ex-inspection-solution'));
  await expect(spec(page, 'terrain')).toContainText('30°');
  await expect(spec(page, 'payload')).toHaveCount(0);
  await expect(spec(page, 'batteryLife')).toContainText('80 W external load');
  await expect(highlights(page)).toContainText('Ex db eb ib mb IIB T4 Gb');
});
test('AlienGo mass excludes battery and protection mode does not create an IP rating', async ({
  page,
}) => {
  await page.goto(route('aliengo'));
  await expect(spec(page, 'weight')).toContainText('without battery');
  await expect(spec(page, 'ipRating')).toHaveCount(0);
  await expect(highlights(page)).toContainText('LiDAR is optional');
});
test('arm pages distinguish hand-inclusive geometry, component mass and mounting limits', async ({
  page,
}) => {
  await page.goto(route('r1-7a'));
  await expect(spec(page, 'armReach')).toHaveText('650 mm with dexterous hand');
  await expect(spec(page, 'weight')).toHaveCount(0);
  await page.goto(route('z1-air'));
  await expect(spec(page, 'weight')).toHaveText('4.3 kg per arm');
  await expect(highlights(page)).toContainText('405 g mass');
  await page.goto(route('z1-pro'));
  await expect(spec(page, 'weight')).toHaveText('4.5 kg per arm');
  await page.goto(route('d2'));
  await expect(spec(page, 'armReach')).toContainText('780 mm gripper working radius');
  await expect(highlights(page)).toContainText('restricts As2 to one arm');
});
test('D1 arm ratings and D1-T package price bounds do not become full-kit offers', async ({
  page,
}) => {
  await page.goto(route('d1'));
  await expect(spec(page, 'payload')).toContainText('500 g per arm');
  await expect(spec(page, 'armReach')).toContainText('550 mm without gripper');
  for (const id of ['d1-t-standard-edition', 'd1-t-full-edition']) {
    await page.goto(route(id));
    for (const key of ['weight', 'payload', 'dof', 'armReach'])
      await expect(spec(page, key)).toHaveCount(0);
    await expect(spec(page, 'price')).toHaveText('Not disclosed');
    const schemas = (
      await page.locator('script[type="application/ld+json"]').allTextContents()
    ).map(JSON.parse);
    expect(schemas.find((s) => s['@type'] === 'Product').offers).toBeUndefined();
  }
});
test('boxing context enriches existing G1 without adding another hardware card', async ({
  page,
}) => {
  await page.goto(route('g1'));
  await expect(highlights(page)).toContainText('does not establish an included boxing package');
  await expect(highlights(page).locator('a[href="https://www.unitree.com/boxing"]')).toBeVisible();
  await page.goto(brand);
  await expect(page.locator('main .robot-card[data-robot-id="unitree-g1-boxing"]')).toHaveCount(0);
});
test('feature search retrieves the D2 mounting restriction with its evidence', async ({ page }) => {
  await page.goto('/?mfr=Unitree&q=prohibits%20high-speed%20A2');
  const cards = page.locator('#robotsGrid .robot-card');
  await expect(cards).toHaveCount(1);
  await expect(cards).toHaveAttribute('data-robot-id', 'unitree-d2');
});
test('German comparison retains unknown standard battery time and exact platform payloads', async ({
  page,
}) => {
  const table = await comparison(page);
  const headings = await table.locator('thead th').allTextContents();
  const column = (model) => headings.findIndex((text) => text.trim() === model);
  const row = (key) =>
    table.locator('tr').filter({ has: page.locator('[data-comparison-review="' + key + '"]') });
  await expect(row('batteryLife').locator('td').nth(column('H2-D Standard'))).toHaveText('-');
  await expect(row('batteryLife').locator('td').nth(column('H2-D Flagship'))).toContainText(
    'About 5 h',
  );
  await expect(row('payload').locator('td').nth(column('G1-D Standard'))).toContainText(
    '3 kg maximum single-arm',
  );
});
for (const theme of ['light', 'dark'])
  for (const target of [brand, route('d2'), route('h2-d-flagship'), 'comparison'])
    test('accessible ' + theme + ' ' + target, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem('theme', value), theme);
      if (target === 'comparison') await comparison(page);
      else await page.goto(target);
      const scan = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(scan.violations).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      );
    });

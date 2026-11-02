import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const brand = '/brands/unitree-robotics/';
const route = (id) => `/robot/unitree-${id}/`;
const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const badge = (page, key) => page.locator(`[data-spec-source="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
async function compare(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(['unitree-r1-air', 'unitree-r1', 'unitree-r1-edu', 'unitree-b2-w']),
    );
  });
  await page.goto(brand);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('brand exposes six additional named configurations and dated manufacturer focus', async ({
  page,
}) => {
  await page.goto(brand);
  await expect(page.locator('main .robot-card')).toHaveCount(58);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'separate developer configurations',
  );
  for (const id of ['a2-pro', 'as2-w-x', 'as2-w-edu', 'r1-air', 'r1-edu', 'h1-2'])
    await expect(page.locator(`main .robot-card[data-robot-id="unitree-${id}"]`)).toBeVisible();
});

test('A2 and PRO distinguish standard perception and component-qualified protection', async ({
  page,
}) => {
  await page.goto(route('a2'));
  await expect(spec(page, 'weight')).toContainText('42 kg including battery');
  await expect(spec(page, 'ipRating')).toHaveText('IP56');
  await expect(highlights(page)).toContainText('standard column lists one LiDAR');
  await page.goto(route('a2-pro'));
  await expect(spec(page, 'ipRating')).toContainText('core components rated IP67');
  await expect(badge(page, 'ipRating')).toHaveAttribute('title', /does not establish uniform IP67/);
  await expect(highlights(page)).toContainText('two LiDAR units');
});

test('As2 AIR does not inherit PRO protection, payload or unloaded battery range', async ({
  page,
}) => {
  await page.goto(route('as2-air'));
  await expect(spec(page, 'ipRating')).toHaveCount(0);
  await expect(spec(page, 'payload')).toContainText('10 kg continuous walking');
  await expect(spec(page, 'batteryLife')).toContainText('10 kg load: >1.5 h');
  await expect(highlights(page)).toContainText('65 N·m');
  await page.goto(route('as2-pro'));
  await expect(spec(page, 'payload')).toContainText('13 kg continuous walking');
  await expect(highlights(page)).toContainText('Secondary development is not supported');
});

test('As2 X and EDU distinguish developer accessories', async ({ page }) => {
  await page.goto(route('as2-x'));
  await expect(highlights(page)).toContainText('no charging dock');
  await page.goto(route('as2-edu'));
  await expect(highlights(page)).toContainText('charging dock and selectable compute expansion');
});

test('As2-W variants distinguish continuous stairs and isolated climbing without inheriting docks', async ({
  page,
}) => {
  for (const id of ['as2-w', 'as2-w-x', 'as2-w-edu']) {
    await page.goto(route(id));
    await expect(spec(page, 'dof')).toHaveText('16 joint motors');
    await expect(spec(page, 'terrain')).toContainText('30 cm stair steps');
    await expect(spec(page, 'terrain')).toContainText('separate maximum climb height');
    await expect(spec(page, 'chargingTime')).toHaveCount(0);
  }
  await expect(highlights(page)).toContainText('EDU includes a charging dock');
});

test('B2 removes unsupported price and qualifies unloaded versus loaded walking', async ({
  page,
}) => {
  await page.goto(route('b2'));
  await expect(spec(page, 'price')).toHaveText('Not disclosed');
  await expect(spec(page, 'speed')).toContainText('special configurations');
  await expect(spec(page, 'batteryLife')).toContainText('20 kg loaded walking: >4 h');
  await expect(highlights(page)).toContainText('autonomous charging solution are optional');
});

test('B2-W uses its own mass and special speed without deriving hours from range', async ({
  page,
}) => {
  await page.goto(route('b2-w'));
  await expect(spec(page, 'weight')).toHaveText('About 85 kg including battery');
  await expect(spec(page, 'speed')).toContainText('15 km/h in special configurations');
  for (const key of ['batteryLife', 'maxRuntime', 'chargingTime'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(highlights(page)).toContainText('25 km endurance with 40 kg load');
  await expect(highlights(page).locator('a[href="https://www.unitree.com/b2-w/"]')).toBeVisible();
});

test('R1 variants retain camera, weight and joint differences with ambiguous payload omitted', async ({
  page,
}) => {
  for (const [id, joints, weight] of [
    ['r1-air', '20', '27 kg'],
    ['r1', '26', '29 kg'],
    ['r1-edu', '26-40 depending on configuration', '29 kg'],
  ]) {
    await page.goto(route(id));
    await expect(spec(page, 'dof')).toHaveText(joints);
    await expect(spec(page, 'weight')).toContainText(weight);
    await expect(spec(page, 'payload')).toHaveCount(0);
    await expect(highlights(page)).toContainText('inconsistent label and units');
  }
});

test('H2 rated arm load and computing packages retain their scope', async ({ page }) => {
  await page.goto(route('h2'));
  await expect(spec(page, 'payload')).toContainText('7 kg rated; about 15 kg peak');
  await expect(spec(page, 'size')).toContainText('1820 x 456 x 218');
  await expect(highlights(page)).toContainText('no extra compute module');
  await page.goto(route('h2-edu'));
  await expect(highlights(page)).toContainText('selectable additional modules such as Thor');
});

test('H1 and H1-2 do not share mass, operating time or achieved speed', async ({ page }) => {
  await page.goto(route('h1'));
  await expect(spec(page, 'weight')).toHaveText('About 47 kg total');
  for (const key of ['payload', 'batteryLife', 'maxRuntime', 'dof'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(spec(page, 'speed')).toContainText('potential mobility only');
  await page.goto(route('h1-2'));
  await expect(spec(page, 'speed')).toHaveText('<2 m/s');
  await expect(spec(page, 'payload')).toContainText('7 kg rated; about 21 kg peak');
});

test('feature search returns the exact standard A2 perception statement', async ({ page }) => {
  await page.goto('/?mfr=Unitree&q=standard%20column%20lists%20one%20LiDAR');
  const cards = page.locator('#robotsGrid .robot-card');
  await expect(cards).toHaveCount(1);
  await expect(cards).toHaveAttribute('data-robot-id', 'unitree-a2');
});

test('structured offers retain qualified published prices without adding unknown B2 prices', async ({
  page,
}) => {
  for (const [id, amount] of [
    ['r1-air', '4900'],
    ['b2', null],
  ]) {
    await page.goto(route(id));
    const schemas = (
      await page.locator('script[type="application/ld+json"]').allTextContents()
    ).map(JSON.parse);
    const product = schemas.find((s) => s['@type'] === 'Product');
    if (amount) expect(String(product.offers.price)).toBe(amount);
    else expect(product.offers).toBeUndefined();
  }
});

test('German comparison preserves unknown arm loads and B2-W battery duration', async ({
  page,
}) => {
  const table = await compare(page);
  const headings = await table.locator('thead th').allTextContents();
  const column = (model) => headings.findIndex((text) => text.trim() === model);
  const row = (key) =>
    table.locator('tr').filter({ has: page.locator(`[data-comparison-review="${key}"]`) });
  for (const model of ['R1 AIR', 'R1', 'R1 EDU'])
    await expect(row('payload').locator('td').nth(column(model))).toHaveText('-');
  await expect(row('payload').locator('td').nth(column('B2-W'))).toContainText('Walking: >40 kg');
  await expect(row('batteryLife').locator('td').nth(column('B2-W'))).toHaveText('-');
});

for (const theme of ['light', 'dark'])
  for (const target of [brand, route('r1-air'), route('b2-w'), 'comparison'])
    test(`accessible ${theme} ${target}`, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem('theme', value), theme);
      if (target === 'comparison') await compare(page);
      else await page.goto(target);
      const scan = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(scan.violations).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      );
    });

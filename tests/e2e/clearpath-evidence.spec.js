import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');

test('Clearpath brand links all named platforms without resolving the generic source generation', async ({
  page,
}) => {
  await page.goto('/brands/clearpath-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(13);
  for (const id of ['husky-a200', 'husky-amp', 'husky-observer', 'dingo-d', 'dingo-o'])
    await expect(
      page.locator(`main .robot-card a[href="/robot/clearpath-robotics-${id}/"]`),
    ).toHaveCount(1);
  const focus = page.locator('section[aria-labelledby="company-focus"]');
  await expect(focus).toContainText('generic competitor Husky UGV listing does not establish');
  await expect(focus).toContainText('different drive layouts');
});

test('A300 retains conflicting height and runtime with both dated source links', async ({
  page,
}) => {
  await page.goto('/robot/clearpath-robotics-husky-a300/');
  await expect(spec(page, 'size')).toContainText('381 mm');
  await expect(spec(page, 'size')).toContainText('372 mm');
  await expect(spec(page, 'batteryLife')).toContainText('8/16/24');
  await expect(spec(page, 'batteryLife')).toContainText('4/8/12');
  for (const key of ['size', 'batteryLife'])
    await expect(page.locator(`[data-spec-source="${key}"]`)).toHaveAttribute(
      'data-review-status',
      'conflicting',
    );
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(
    highlights(page).locator('a[href="https://clearpathrobotics.com/husky-spec-comparison/"]'),
  ).toBeVisible();
});

test('generic Dingo omits unselected variant numbers and D/O show their manual columns', async ({
  page,
}) => {
  await page.goto('/robot/clearpath-robotics-dingo/');
  for (const key of ['weight', 'size', 'payload', 'batteryLife'])
    await expect(spec(page, key)).toHaveCount(0);
  for (const [variant, weight, payload] of [
    ['d', '12 kg', '20 kg'],
    ['o', '17.5 kg', '25 kg'],
  ]) {
    await page.goto(`/robot/clearpath-robotics-dingo-${variant}/`);
    await expect(spec(page, 'weight')).toHaveText(weight);
    await expect(spec(page, 'payload')).toContainText(payload);
    await expect(spec(page, 'batteryLife')).toContainText('1.0:');
    await expect(spec(page, 'batteryLife')).toContainText('1.5:');
    await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  }
});

test('installed Husky systems keep their own payload and qualified protection/charging values', async ({
  page,
}) => {
  await page.goto('/robot/clearpath-robotics-husky-amp/');
  await expect(spec(page, 'payload')).toContainText('81 kg maximum; 31.5 kg all-terrain');
  await expect(spec(page, 'weight')).toHaveText('98.5 kg');
  await expect(spec(page, 'chargingTime')).toContainText('8-12 h');
  await expect(highlights(page)).toContainText('listed as upgrades');
  await page.goto('/robot/clearpath-robotics-husky-observer/');
  await expect(spec(page, 'payload')).toContainText('10 kg additional');
  await expect(spec(page, 'ipRating')).toContainText('Designed for IP55');
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
  await expect(highlights(page)).toContainText('300 W');
});

test('Warthog and Ridgeback show unresolved mass/runtime and sensor/revision boundaries', async ({
  page,
}) => {
  await page.goto('/robot/clearpath-robotics-warthog-ugv/');
  for (const key of ['weight', 'batteryLife'])
    await expect(page.locator(`[data-spec-source="${key}"]`)).toHaveAttribute(
      'data-review-status',
      'conflicting',
    );
  await expect(spec(page, 'batteryLife')).toContainText('LiFePO4: 6 h');
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await page.goto('/robot/clearpath-robotics-ridgeback/');
  await expect(spec(page, 'size')).toContainText('before serial R100-0111');
  await expect(page.locator('[data-spec-source="weight"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(highlights(page)).toContainText('requires the optional rear scanner');
});

test('TurtleBot cameras and charging differ from load-dependent endurance', async ({ page }) => {
  for (const [suffix, camera] of [
    ['', 'OAK-D-Pro'],
    ['-lite', 'OAK-D-Lite'],
  ]) {
    await page.goto(`/robot/clearpath-robotics-turtlebot-4${suffix}/`);
    await expect(spec(page, 'chargingTime')).toHaveText('2 h 30 min');
    await expect(spec(page, 'batteryLife')).toContainText('depending on load');
    await expect(spec(page, 'speed')).toContainText('0.31 m/s in safe mode');
    await expect(highlights(page)).toContainText(camera);
    await expect(highlights(page)).toContainText('Charging dock is listed as included');
  }
});

test('source-only AMP payload terminology is searchable with the complete qualification', async ({
  page,
}) => {
  await page.goto('/?category=educational&q=31.5%20kg%20all-terrain%20payload');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(1);
  const card = page.locator('#robotsGrid .robot-card');
  await expect(card).toContainText('rather than transferring');
  await card.locator('a[href="/robot/clearpath-robotics-husky-amp/#product-highlights"]').click();
  await expect(page.locator('h1')).toHaveText('Husky AMP');
});

test('Husky comparison keeps generation/system payload, source conflicts and missing charging distinct', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'en');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(
        ['husky-a200', 'husky-a300', 'husky-amp', 'husky-observer'].map(
          (s) => `clearpath-robotics-${s}`,
        ),
      ),
    );
  });
  await page.goto('/brands/clearpath-robotics/?lang=en');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  const headings = await table.locator('thead th').allTextContents();
  const payload = table
    .getByRole('row')
    .filter({ has: page.getByRole('cell', { name: 'Payload', exact: true }) });
  for (const [model, expected] of [
    ['Husky A200', '75 kg'],
    ['Husky A300', '100 kg'],
    ['Husky AMP', '81 kg'],
    ['Husky Observer', '10 kg additional'],
  ]) {
    const index = headings.indexOf(model);
    expect(index).toBeGreaterThan(0);
    await expect(payload.locator('td').nth(index)).toContainText(expected);
  }
  await expect(table).toContainText('4/8/12');
  await expect(table.locator('[data-comparison-highlights]')).toContainText('Designed for IP55');
});

for (const url of [
  '/robot/clearpath-robotics-husky-a300/',
  '/robot/clearpath-robotics-husky-observer/',
]) {
  for (const mode of ['light', 'dark']) {
    test(`Clearpath ${url} remains accessible in ${mode} mode`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: mode });
      await page.goto(url);
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(
        result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
      ).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        await page.evaluate(() => window.innerWidth),
      );
    });
  }
}

import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const spec = (page, key) => page.locator('[data-spec-key="' + key + '"]');
const badge = (page, key) => page.locator('[data-spec-source="' + key + '"]');
const high = (page) => page.locator('section[aria-labelledby="product-highlights"]');

test('canonical company profiles expose named inventories and educational versus service roles', async ({
  page,
}) => {
  for (const [id, count, term] of [
    ['robot-com', 5, '2027'],
    ['locorobo', 7, 'LocoDroneX'],
  ]) {
    await page.goto('/brands/' + id + '/');
    await expect(page.locator('main .robot-card')).toHaveCount(count);
    await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(term);
  }
});
test('R-noid includes neck joints but omits inferred arm reach and complete body depth', async ({
  page,
}) => {
  await page.goto('/robot/robot-com-r-noid/');
  await expect(spec(page, 'dof')).toContainText('2-DOF neck');
  await expect(spec(page, 'size')).toContainText('complete body envelope unspecified');
  await expect(spec(page, 'armReach')).toHaveCount(0);
  await expect(high(page)).toContainText('Arm length 0.82 m');
  await expect(high(page)).toContainText('0-1.9 m vertical workspace');
});
test('R-noid keeps named-sheet speed per-arm load plug-in mode and actual launch evidence', async ({
  page,
}) => {
  await page.goto('/robot/robot-com-r-noid/');
  await expect(spec(page, 'speed')).toContainText('2 m/s');
  await expect(spec(page, 'payload')).toContainText('4 kg per arm');
  await expect(spec(page, 'batteryLife')).toContainText('plug-in operation');
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
  await expect(badge(page, 'releaseDate')).toHaveAttribute('data-review-status', 'documented');
  await expect(high(page)).toContainText('May 14 technical revision is a document date');
  await expect(high(page).locator('a[href="https://lp.robot.com/rnoid/specs.pdf"]')).toBeVisible();
});
test('R-cargo has no numerical speed payload or charging interval inferred from headings and options', async ({
  page,
}) => {
  await page.goto('/robot/robot-com-r-cargo/');
  await expect(spec(page, 'batteryLife')).toContainText('8 h');
  for (const key of ['speed', 'payload', 'chargingTime', 'ipRating', 'maxRuntime'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(high(page)).toContainText('listed as add-ons/available equipment');
});
test('R-kiwi separates mass from cargo volume without declaring a false conflict', async ({
  page,
}) => {
  await page.goto('/robot/robot-com-r-kiwi/');
  await expect(spec(page, 'payload')).toHaveAttribute('data-raw-value', /18 lb.*19 L/);
  await expect(badge(page, 'payload')).toHaveAttribute('data-review-status', 'documented');
  await expect(spec(page, 'batteryLife')).toContainText('10-12 h');
  await expect(high(page)).toContainText('not a capacity conflict');
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
});
test('R-dog future concept retains roadmap context and no actual launch-year or Offer', async ({
  page,
}) => {
  await page.goto('/robot/robot-com-r-dog/');
  await expect(high(page)).toContainText('coming in 2027');
  await expect(high(page)).toContainText('Availability wording is unresolved');
  await expect(badge(page, 'terrain')).toHaveAttribute('data-review-status', 'roadmap');
  await expect(spec(page, 'releaseDate')).toHaveCount(0);
  const product = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) =>
      nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
    );
  expect(product.offers).toBeUndefined();
});
test('R-top remains a distinct fixed-surface offer without shared six-axis hardware assumptions', async ({
  page,
}) => {
  await page.goto('/robot/robot-com-r-top/');
  await expect(page.locator('h1')).toContainText('R-top');
  await expect(high(page)).toContainText('fixed surfaces');
  await expect(high(page)).toContainText('not imported as another wheeled R-noid mode');
  for (const key of ['dof', 'payload', 'armReach', 'batteryLife'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('LocoScout and LocoHex expose educational scope without ages or guessed joint counts', async ({
  page,
}) => {
  for (const [slug, term] of [
    ['locoscout', 'grades 3-12'],
    ['locohex', 'grades 6-12'],
  ]) {
    await page.goto('/robot/locorobo-' + slug + '/');
    await expect(high(page)).toContainText(term);
    for (const key of ['dof', 'ageRange', 'speed', 'batteryLife'])
      await expect(spec(page, key)).toHaveCount(0);
  }
  await expect(spec(page, 'driveMode')).toContainText('Hexapod legged');
});
test('new LocoXtreme LocoArm and LocoRover keep sensors arms and Mecanum drive separate', async ({
  page,
}) => {
  await page.goto('/robot/locorobo-locoxtreme/');
  await expect(high(page)).toContainText('six integrated sensors');
  await expect(spec(page, 'dof')).toHaveCount(0);
  await expect(spec(page, 'driveMode')).toHaveCount(0);
  await page.goto('/robot/locorobo-locoarm/');
  await expect(high(page)).toContainText('not prove that a mobile base');
  await expect(spec(page, 'handType')).toHaveCount(0);
  await page.goto('/robot/locorobo-locorover/');
  await expect(spec(page, 'driveMode')).toContainText('Four-wheel Mecanum');
  await expect(high(page)).toContainText('ROS/Gazebo/SLAM');
  await expect(spec(page, 'payload')).toHaveCount(0);
});
test('LocoDrone X spelling and course compatibility do not create a third airframe or flight figures', async ({
  page,
}) => {
  await page.goto('/robot/locorobo-locodrone-x/');
  await expect(high(page)).toContainText('LocoDroneX without a space');
  await expect(high(page)).toContainText('not an additional robot');
  for (const key of ['batteryLife', 'speed', 'payload', 'ageRange'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('feature-only search finds R-noid structural arm length with the qualifying source statement', async ({
  page,
}) => {
  await page.goto('/?mfr=Robot.com&q=' + encodeURIComponent('Arm length 0.82 m'));
  const card = page.locator('.robot-card[data-robot-id="robot-com-r-noid"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText(
    'not automatically usable arm reach',
  );
});
test('German mixed comparison retains roadmap per-arm load and blank DOF for educational robots', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'robot-com-r-noid',
        'robot-com-r-dog',
        'locorobo-locorover',
        'locorobo-locohex',
      ]),
    );
  });
  await page.goto('/brands/robot-com/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  await expect(
    table.locator('[data-comparison-review="terrain"][data-review-status="roadmap"]'),
  ).toHaveCount(1);
  await expect(table).toContainText('4 kg per arm');
  await expect(table).toContainText('2-DOF neck');
  await expect(table).toContainText('Four-wheel Mecanum');
  const row = table.locator('tr').filter({ has: page.locator('[data-comparison-review="dof"]') });
  const headers = await table.locator('thead th').allTextContents();
  for (const model of ['R-dog', 'LocoRover', 'LocoHex'])
    await expect(row.locator('td').nth(headers.findIndex((v) => v.includes(model)))).toHaveText(
      '-',
    );
});
for (const id of ['robot-com-r-noid', 'robot-com-r-dog', 'robot-com-r-top', 'locorobo-locorover'])
  for (const theme of ['light', 'dark'])
    test('axe ' + id + ' ' + theme, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await page.goto('/robot/' + id + '/');
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });

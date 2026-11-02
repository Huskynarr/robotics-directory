import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (p, k) => p.locator('[data-spec-key="' + k + '"]');

test('Cyberdyne brand exposes fifteen offerings and scoped manufacturer focus', async ({
  page,
}) => {
  await page.goto('/brands/cyberdyne/');
  await expect(page.locator('main .robot-card')).toHaveCount(15);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'LB06 while English describes LB03-SSSJP',
  );
});
test('lower-limb page separates worn robot size from wearer mass and age', async ({ page }) => {
  await page.goto('/robot/cyberdyne-hal-ml07/');
  await expect(spec(page, 'weight')).toContainText('9.5 kg double leg / 6.5 kg single leg');
  await expect(spec(page, 'size')).toContainText('minimum adjustment with 26 cm sensor shoes');
  await expect(spec(page, 'payload')).toHaveCount(0);
  await expect(spec(page, 'ageRange')).toHaveCount(0);
});
test('single-joint page keeps controller and battery exclusions visible', async ({ page }) => {
  await page.goto('/robot/cyberdyne-medical-hal-single-joint/');
  await expect(spec(page, 'weight')).toContainText('excludes control device and battery');
  await expect(spec(page, 'size')).toContainText('Worn components only');
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
});
test('Labor Support generations keep separate endurance and charging values', async ({ page }) => {
  for (const [id, runtime, charge] of [
    ['hal-lb06', '10 h', '3 h'],
    ['hal-lb03-sssjp', '4.5 h', '2 h'],
  ]) {
    await page.goto('/robot/cyberdyne-' + id + '/');
    await expect(spec(page, 'maxRuntime')).toContainText(runtime);
    await expect(spec(page, 'chargingTime')).toContainText(charge);
  }
  await page.goto('/robot/cyberdyne-hal-lb01/');
  await expect(spec(page, 'weight')).toHaveCount(0);
  await expect(spec(page, 'ipRating')).toHaveCount(0);
});
test('CL02 does not render per-charge coverage as hourly rate', async ({ page }) => {
  await page.goto('/robot/cyberdyne-cl02/');
  await expect(spec(page, 'size')).toContainText('height 970 mm with optional disinfection unit');
  await expect(spec(page, 'areaRate')).toHaveCount(0);
  await expect(spec(page, 'workingWidth')).toHaveCount(0);
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    '3000 m² per battery charge',
  );
});
test('transport and gait-training speed keep their meanings', async ({ page }) => {
  await page.goto('/robot/cyberdyne-transportation-robot/');
  await expect(spec(page, 'payload')).toContainText('200 kg onboard load');
  await expect(spec(page, 'speed')).toContainText('30 m/min');
  await page.goto('/robot/cyberdyne-medicalcare-pit-hpd-bt04-jp/');
  await expect(spec(page, 'speed')).toContainText('Treadmill belt range');
  await expect(spec(page, 'maxLiftHeight')).toHaveCount(0);
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
});
test('robotic left/right support feature is searchable', async ({ page }) => {
  await page.goto('/?q=' + encodeURIComponent('independent left/right body-weight support'));
  const card = page.locator('.robot-card[data-robot-id="cyberdyne-medicalcare-pit-hpd-bt04-jp"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText(
    'independent left/right body-weight support',
  );
});
test('German comparison retains generation values and the cleaning qualification', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(['cyberdyne-hal-lb06', 'cyberdyne-hal-lb03-sssjp', 'cyberdyne-cl02']),
    );
  });
  await page.goto('/brands/cyberdyne/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  await expect(table).toContainText('Approximately 10 h');
  await expect(table).toContainText('Approximately 4,5 h; named LB03 configuration');
  await expect(table).toContainText('3000 m² per battery charge');
});
test('workplace URL exposes labor-support models with a translated filter', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('lang', 'de'));
  await page.goto('/?category=commercial&sub=commercial-workplace');
  await expect(page.locator('.robot-card[data-robot-id="cyberdyne-hal-lb06"]')).toBeVisible();
  await expect(page.locator('.robot-card[data-robot-id="cyberdyne-hal-ml08"]')).toHaveCount(0);
  await expect(page.locator('#megaMenu [data-subcategory="commercial-workplace"]')).toContainText(
    'Arbeitsunterstützung',
  );
});
for (const id of ['cyberdyne-hal-ml07', 'cyberdyne-medicalcare-pit-hpd-bt04-jp'])
  for (const theme of ['light', 'dark'])
    test('axe ' + id + ' ' + theme, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await page.goto('/robot/' + id + '/');
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });

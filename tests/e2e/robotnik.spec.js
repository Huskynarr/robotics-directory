import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (p, k) => p.locator('[data-spec-key="' + k + '"]');
const badge = (p, k) => p.locator('[data-spec-source="' + k + '"]');
const goto = (p, id) => p.goto('/robot/robotnik-rb-' + id + '/');

test('Robotnik brand links fifteen offerings and dated company focus', async ({ page }) => {
  await page.goto('/brands/robotnik/');
  await expect(page.locator('main .robot-card')).toHaveCount(15);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'RB-THERON FP',
  );
});
test('Kairos base and installed arms retain different load roles and masses', async ({ page }) => {
  await goto(page, 'kairos');
  await expect(spec(page, 'payload')).toContainText('100 kg standard');
  await expect(spec(page, 'payload')).toContainText('250 kg with optional strong wheels');
  await goto(page, 'kairos-plus');
  await expect(spec(page, 'weight')).toContainText('UR7e 135 kg');
  await expect(spec(page, 'payload')).toContainText('UR16e 16 kg');
  await expect(spec(page, 'transportPayload')).toContainText('UR7e 230 kg');
});
test('Robout load adaptation, battery discrepancy and drawing height conflict remain explicit', async ({
  page,
}) => {
  await goto(page, 'robout');
  await expect(spec(page, 'payload')).toContainText('changed width and length');
  await expect(badge(page, 'batteryLife')).toHaveAttribute('data-review-status', 'conflicting');
  await goto(page, 'robout-plus');
  await expect(spec(page, 'size')).toContainText('UR15 1758');
  await expect(spec(page, 'size')).toContainText('drawing instead 1785');
  await expect(badge(page, 'size')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'transportPayload')).toContainText('755/765/760/735/765');
  await expect(spec(page, 'liftStroke')).toHaveCount(0);
});
test('Watcher enclosure and cargo values stay separate from component protection', async ({
  page,
}) => {
  await goto(page, 'watcher');
  await expect(spec(page, 'ipRating')).toContainText('IP54');
  await expect(spec(page, 'payload')).toContainText('50 kg');
  await goto(page, 'watcher-xl');
  await expect(spec(page, 'ipRating')).toContainText('IP55');
  await expect(spec(page, 'weight')).toContainText('75 kg');
  await expect(spec(page, 'payload')).toContainText('40 kg');
});
test('Fiqus+ configured mass, cargo and transverse guide remain separate', async ({ page }) => {
  await goto(page, 'fiqus-plus');
  await expect(spec(page, 'weight')).toContainText('600 kg');
  await expect(spec(page, 'transportPayload')).toContainText('UR12e 720 kg');
  await expect(spec(page, 'ipRating')).toContainText('IP53');
  await expect(spec(page, 'armReach')).toContainText('transverse guide displacement excluded');
  await expect(spec(page, 'liftStroke')).toHaveCount(0);
});
test('Summit current carrier conflict does not inherit legacy arm reach', async ({ page }) => {
  await goto(page, 'summit-plus');
  await expect(spec(page, 'payload')).toContainText('Lite 0.5 kg');
  await expect(spec(page, 'armReach')).toContainText('891 mm');
  await expect(spec(page, 'armReach')).toContainText('legacy 985 mm not inherited');
  await expect(badge(page, 'transportPayload')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'ipRating')).toContainText('IP22');
});
test('Theron FP and installed-arm version keep distinct runtimes and source conflicts', async ({
  page,
}) => {
  await goto(page, 'theron-fp');
  await expect(spec(page, 'batteryLife')).toContainText('5 h');
  await expect(badge(page, 'size')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'releaseDate')).toHaveCount(0);
  const product = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) =>
      nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
    );
  expect(product.offers).toBeUndefined();
  await goto(page, 'theron-plus');
  await expect(badge(page, 'batteryLife')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'payload')).toContainText('UR5e');
  await expect(badge(page, 'payload')).toHaveAttribute('data-review-status', 'conflicting');
});
test('Vogui+ carries qualified cargo differences and restricted long-arm reach', async ({
  page,
}) => {
  await goto(page, 'vogui-plus');
  await expect(spec(page, 'transportPayload')).toContainText('125 kg');
  await expect(spec(page, 'transportPayload')).toContainText('UR7e 130 kg');
  await expect(badge(page, 'transportPayload')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'armReach')).toContainText('1750 mm with restricted workspace');
});
test('catalog search finds the source qualification for optional lift columns', async ({
  page,
}) => {
  await page.goto(
    '/?q=' + encodeURIComponent('Column length supplies no demonstrated vertical travel'),
  );
  const card = page.locator('.robot-card[data-robot-id="robotnik-rb-robout-plus"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText('Column length supplies');
});
test('German comparison keeps carrier, body, battery and arm conflicts with their fields', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'robotnik-rb-robout-plus',
        'robotnik-rb-vogui-plus',
        'robotnik-rb-theron-plus',
        'robotnik-rb-summit-plus',
      ]),
    );
  });
  await page.goto('/brands/robotnik/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  await expect(
    table.locator('[data-comparison-review="transportPayload"][data-review-status="conflicting"]'),
  ).toHaveCount(3);
  await expect(
    table.locator('[data-comparison-review="size"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(
    table.locator('[data-comparison-review="payload"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(
    table.locator('[data-comparison-review="batteryLife"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(table).toContainText('1750 mm with restricted workspace');
});
for (const id of ['theron-fp', 'robout-plus'])
  for (const theme of ['light', 'dark'])
    test('axe Robotnik ' + id + ' ' + theme, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await goto(page, id);
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });

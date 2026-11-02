import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('Go2 Pro shows corrected variant values and dated manufacturer sources', async ({ page }) => {
  await page.goto('/robot/unitree-go2-pro/');
  await expect(page.locator('[data-spec-key="price"]')).toHaveText(
    '2800 USD excluding tax and freight',
  );
  await expect(page.locator('[data-spec-key="speed"]')).toHaveText('0-3.5 m/s');
  await expect(page.locator('[data-spec-key="payload"]')).toContainText('maximum about 10 kg');
  await expect(page.locator('[data-spec-key="batteryLife"]')).toContainText('About 1-2 h');
  for (const field of ['ipRating', 'chargingTime'])
    await expect(page.locator(`[data-spec-key="${field}"]`)).toHaveCount(0);
  const source = page.locator('[data-spec-source="speed"]');
  await expect(source).toHaveAttribute('href', 'https://www.unitree.com/go2/');
  await expect(source).toHaveAttribute('data-review-status', 'documented');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'full EDU access is not generalized',
  );
});

test('Go2 family preserves variants without combining their numeric specifications', async ({
  page,
}) => {
  await page.goto('/robot/unitree-go2/');
  for (const field of ['speed', 'payload', 'batteryLife', 'maxRuntime', 'terrain', 'ipRating'])
    await expect(page.locator(`[data-spec-key="${field}"]`)).toHaveCount(0);
  await expect(page.locator('[data-spec-source="price"]')).toHaveAttribute(
    'data-review-status',
    'not-documented',
  );
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'No single payload, top speed or battery runtime',
  );
  await page.goto('/brands/unitree-robotics/');
  for (const id of ['unitree-go2-air', 'unitree-go2-pro', 'unitree-go2-x', 'unitree-go2-edu'])
    await expect(page.locator(`main .robot-card a[href="/robot/${id}/"]`)).toHaveCount(1);
  await page.goto('/?category=quadruped&q=Unitree%20Go2%20X');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(1);
  await expect(page.locator('#robotsGrid a[href="/robot/unitree-go2-x/"]')).toBeVisible();
});

test('G1 and EDU explain arm payload and retain optional hand configuration', async ({ page }) => {
  for (const [id, payload] of [
    ['unitree-g1', '2 kg'],
    ['unitree-g1-edu', '3 kg'],
  ]) {
    await page.goto(`/robot/${id}/`);
    await expect(page.locator('[data-spec-key="payload"]')).toContainText(payload);
    await expect(page.locator('[data-spec-key="payload"]')).toContainText('depends on arm posture');
    await expect(page.locator('[data-spec-key="size"]')).toContainText('folded');
    await expect(page.locator('[data-spec-key="speed"]')).toHaveCount(0);
  }
  await expect(page.locator('[data-spec-key="handType"]')).toContainText('Optional Dex3-1');
  await expect(page.locator('[data-spec-key="dof"]')).toContainText('23-43');
});

test('Go2 comparison differentiates family, Pro, X and EDU evidence', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'en');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(['unitree-go2', 'unitree-go2-pro', 'unitree-go2-x', 'unitree-go2-edu']),
    );
  });
  await page.goto('/brands/unitree-robotics/?lang=en');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  const headings = await table.locator('thead th').allTextContents();
  const speed = table
    .getByRole('row')
    .filter({ has: page.getByRole('cell', { name: 'Speed', exact: true }) });
  for (const [model, text] of [
    ['Go2', '-'],
    ['Go2 Pro', '0-3.5 m/s'],
    ['Go2 X', 'maximum about 5 m/s'],
    ['Go2-EDU', 'maximum about 5 m/s'],
  ]) {
    const index = headings.indexOf(model);
    expect(index).toBeGreaterThan(0);
    await expect(speed.locator('td').nth(index)).toContainText(text);
  }
  await expect(table.locator('[data-comparison-highlights]')).toContainText('15000 mAh');
  await expect(table.locator('[data-comparison-sources]')).toContainText('Go2 AIR / PRO / X / EDU');
});

for (const url of ['/robot/unitree-go2/', '/robot/unitree-go2-x/', '/robot/unitree-g1-edu/']) {
  for (const mode of ['light', 'dark']) {
    test(`Unitree ${url} remains accessible in ${mode} mode`, async ({ page }) => {
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

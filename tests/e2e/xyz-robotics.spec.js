import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const ids = [
  'xyz-robotics-rockyone',
  'xyz-robotics-rockylight',
  'xyz-robotics-rockyone-se',
  'xyz-robotics-rockylight-se',
];

test('XYZ official products turn the source profile into a useful indexed brand without resolving generic labels', async ({
  page,
}) => {
  await page.goto('/brands/xyz-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(4);
  await expect(page.locator('meta[name="robots"][content*="noindex"]')).toHaveCount(0);
  const focus = page.locator('section[aria-labelledby="company-focus"]');
  await expect(focus).toContainText(
    'DeliveryDrone, SecurityGuard and ServiceBot remain unverified',
  );
  await expect(focus).toContainText('MarketWatch');
  await expect(page.locator('main a[href="https://www.xyzrobotics.com/"]').first()).toBeVisible();
  for (const id of ids)
    await expect(page.locator(`main .robot-card a[href="/robot/${id}/"]`)).toHaveCount(1);
  await page.goto('/?category=commercial&q=XYZ%20Robotics');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(4);
  for (const id of ids)
    await expect(page.locator(`#robotsGrid a[href="/robot/${id}/"]`)).toHaveCount(1);
});

test('XYZ mobile models separate footprint, handling payload and base travel from undocumented battery values', async ({
  page,
}) => {
  for (const [id, payload, speed, ip] of [
    [ids[0], '30 kg', '0.9 m/s', 'IP54'],
    [ids[1], '25 kg', '2 m/s', 'IP20'],
  ]) {
    await page.goto(`/robot/${id}/`);
    await expect(page.locator('[data-spec-key="payload"]')).toContainText(payload);
    await expect(page.locator('[data-spec-key="speed"]')).toContainText(speed);
    await expect(page.locator('[data-spec-key="speed"]')).toContainText('base travel');
    await expect(page.locator('[data-spec-key="ipRating"]')).toHaveText(ip);
    await expect(page.locator('[data-spec-key="size"]')).toContainText('robot height not stated');
    await expect(page.locator('[data-spec-source="size"]')).toHaveAttribute(
      'data-review-status',
      'documented',
    );
    for (const key of ['batteryLife', 'maxRuntime', 'chargingTime'])
      await expect(page.locator(`[data-spec-key="${key}"]`)).toHaveCount(0);
  }
});

test('XYZ SE robot variants show supplier case sources without inherited mobile specifications', async ({
  page,
}) => {
  for (const id of [ids[2], ids[3]]) {
    await page.goto(`/robot/${id}/`);
    const highlights = page.locator('section[aria-labelledby="product-highlights"]');
    await expect(highlights).toContainText('Manufacturer source');
    await expect(highlights).toContainText(/not independent|does not independently/);
    for (const key of [
      'weight',
      'size',
      'payload',
      'speed',
      'ipRating',
      'batteryLife',
      'maxRuntime',
      'chargingTime',
    ])
      await expect(page.locator(`[data-spec-key="${key}"]`)).toHaveCount(0);
    await expect(page.locator('[data-spec-source="price"]')).toHaveAttribute(
      'data-review-status',
      'not-documented',
    );
  }
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'stationary version',
  );
});

test('XYZ comparison keeps SE columns empty where mobile platform numbers are known', async ({
  page,
}) => {
  await page.addInitScript((ids) => {
    localStorage.setItem('lang', 'en');
    localStorage.setItem('compareRobots', JSON.stringify(ids));
  }, ids);
  await page.goto('/brands/xyz-robotics/?lang=en');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  const headings = await table.locator('thead th').allTextContents();
  const payload = table
    .getByRole('row')
    .filter({ has: page.getByRole('cell', { name: 'Payload', exact: true }) });
  for (const model of ['RockyOne SE', 'RockyLight SE']) {
    const index = headings.indexOf(model);
    expect(index).toBeGreaterThan(0);
    await expect(payload.locator('td').nth(index)).toHaveText('-');
  }
  await expect(payload.locator('td').nth(headings.indexOf('RockyOne'))).toContainText('30 kg');
  await expect(payload.locator('td').nth(headings.indexOf('RockyLight'))).toContainText('25 kg');
  await expect(table.locator('[data-comparison-highlights]')).toContainText('stationary version');
  await expect(table.locator('[data-comparison-sources]')).toContainText('2025-07-03');
});

for (const url of [
  '/brands/xyz-robotics/',
  '/robot/xyz-robotics-rockylight/',
  '/robot/xyz-robotics-rockylight-se/',
]) {
  for (const mode of ['light', 'dark']) {
    test(`XYZ ${url} remains accessible in ${mode} mode`, async ({ page }) => {
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

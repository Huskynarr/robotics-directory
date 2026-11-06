import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const themes = (page) => page.locator('section[aria-labelledby="directory-themes"]');
const visibleBrands = (page) => page.locator('[data-brand-entry]:not([hidden])');

test('ROS 2 lookup finds Clearpath while a ROS reference does not assert version support', async ({
  page,
}) => {
  await page.goto('/brands/?q=ROS%202%20support%20claimed');
  // Brand search is token-substring AND matching, so FANUC and OTTO also match all four tokens.
  await expect(visibleBrands(page)).toHaveCount(3);
  await expect(
    visibleBrands(page).locator('h2 a[href="/brands/clearpath-robotics/"]'),
  ).toBeVisible();
  await page.goto('/brands/clearpath-robotics/');
  await expect(themes(page)).toContainText('ROS 2 support claimed');
  await expect(themes(page)).toContainText('Unverified themes');
  await page.goto('/brands/open-robotics/');
  await expect(themes(page)).toContainText('ROS ecosystem reference');
  await expect(themes(page)).toContainText('Gazebo software reference');
  await expect(themes(page)).not.toContainText('ROS 2 support claimed');
  await expect(page.locator('main .robot-card')).toHaveCount(0);
});

test('robot docking and logistics cross-docking retain different source meanings', async ({
  page,
}) => {
  await page.goto('/brands/boteyes/');
  await expect(themes(page)).toContainText('robot docking');
  await expect(themes(page)).not.toContainText('cross-docking logistics');
  await expect(themes(page).locator('time[datetime="2026-11-01"]').first()).toBeVisible();
  for (const brand of ['seegrid', 'vecna-robotics']) {
    await page.goto(`/brands/${brand}/`);
    await expect(themes(page)).toContainText('cross-docking logistics');
    await expect(themes(page)).not.toContainText('robot docking');
    await expect(themes(page)).toContainText('production-line delivery');
  }
});

test('operator-support search excludes a supplier explicitly denying that service', async ({
  page,
}) => {
  await page.goto('/brands/?q=on-site%20operator%20support');
  await expect(visibleBrands(page)).toHaveCount(2);
  for (const brand of ['bots-4-events', 'elite-event-robotics'])
    await expect(visibleBrands(page).locator(`h2 a[href="/brands/${brand}/"]`)).toBeVisible();
  await page.goto('/brands/robotsinternational-com/');
  await expect(themes(page)).not.toContainText('on-site operator support');
});

test('tactile source themes keep component-provider and humanoid profiles discoverable', async ({
  page,
}) => {
  await page.goto('/brands/?q=tactile%20sensing');
  await expect(visibleBrands(page)).toHaveCount(2);
  for (const brand of ['robotics-center-of-silicon-valley', 'sanctuary-ai']) {
    await expect(visibleBrands(page).locator(`h2 a[href="/brands/${brand}/"]`)).toBeVisible();
  }
  await page.goto('/brands/sanctuary-ai/');
  await expect(themes(page)).toContainText('tactile sensing');
  await expect(themes(page)).toContainText(
    'do not establish manufacturer identity or unique advantages',
  );
});

test('specific construction and scripted-event tasks remain source-attributed themes', async ({
  page,
}) => {
  await page.goto('/brands/construction-robotics/');
  await expect(themes(page)).toContainText('concrete placement');
  await expect(themes(page)).toContainText('solar-panel installation');
  await expect(
    themes(page).locator('a[href*="buyandrentrobots.com/companies/"]').first(),
  ).toBeVisible();
  await page.goto('/brands/dma-events/');
  await expect(themes(page)).toContainText('scripted interaction');
});

test('curriculum lookup retains all explicitly described education providers', async ({ page }) => {
  await page.goto('/brands/?q=education%20curriculum');
  await expect(visibleBrands(page)).toHaveCount(8);
  for (const brand of [
    'booster-robotics',
    'lego-education',
    'locorobo',
    'makeblock',
    'ozobot',
    'sphero',
    'stembotix',
    'wonder-workshop',
  ])
    await expect(visibleBrands(page).locator(`h2 a[href="/brands/${brand}/"]`)).toBeVisible();
});

for (const url of ['/brands/boteyes/', '/brands/seegrid/']) {
  for (const mode of ['light', 'dark']) {
    test(`Source themes at ${url} remain accessible in ${mode} mode`, async ({ page }) => {
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

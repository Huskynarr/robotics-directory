import { test, expect } from '@playwright/test';

test.describe('Detail page', () => {
  test('loads a robot detail page', async ({ page }) => {
    await page.goto('/robot/westwood-robotics-themis-v2/');
    await expect(page.locator('.detail-header h1').first()).toContainText('THEMIS V2');
    await expect(page.locator('.specs-table')).toBeVisible();
  });

  test('has breadcrumb navigation', async ({ page }) => {
    await page.goto('/robot/westwood-robotics-themis-v2/');
    const breadcrumb = page.locator('nav[aria-label="Breadcrumb"]');
    await expect(breadcrumb).toBeVisible();
    await expect(breadcrumb.locator('a').first()).toHaveAttribute('href', '/');
  });

  test('has a back link to catalog', async ({ page }) => {
    await page.goto('/robot/westwood-robotics-themis-v2/');
    const backLink = page.locator('a[href="/"]').last();
    await expect(backLink).toBeVisible();
  });

  test('shows related robots', async ({ page }) => {
    await page.goto('/robot/westwood-robotics-themis-v2/');
    // Should have related humanoid robots
    const related = page.locator('.robot-card');
    const count = await related.count();
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThanOrEqual(4);
  });

  test('share button opens dropdown', async ({ page }) => {
    await page.goto('/robot/westwood-robotics-themis-v2/');
    const shareBtn = page.locator('#shareButton');
    await shareBtn.click();
    const dropdown = page.locator('#shareDropdown');
    await expect(dropdown).toHaveClass(/active/);
  });
});

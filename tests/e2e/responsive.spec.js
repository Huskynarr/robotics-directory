import { test, expect } from '@playwright/test';

test.describe('Responsive design', () => {
  test('mobile shows hamburger menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const hamburger = page.locator('#mobileMenuToggle');
    await expect(hamburger).toBeVisible();
  });

  test('mobile drawer opens on hamburger click', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.locator('#mobileMenuToggle').click();
    const drawer = page.locator('#mobileDrawer');
    await expect(drawer).toHaveClass(/active/);
  });

  test('desktop hides hamburger menu', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    const hamburger = page.locator('#mobileMenuToggle');
    await expect(hamburger).not.toBeVisible();
  });

  test('desktop shows category tabs in header', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    const headerTabs = page.locator('header .mega-tab');
    await expect(headerTabs.first()).toBeVisible();
  });

  test('cards layout is responsive', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 1440, height: 900 });
    const grid = page.locator('#robotsGrid');
    await expect(grid).toBeVisible();
  });
});

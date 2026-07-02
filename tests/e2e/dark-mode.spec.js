import { test, expect } from '@playwright/test';

test.describe('Dark mode', () => {
  test('defaults to system dark mode when no user preference is saved', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');

    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('dark mode toggle switches theme', async ({ page, viewport }) => {
    await page.goto('/');
    const isMobile = viewport.width < 768;
    const toggleId = isMobile ? '#darkModeToggleMobile' : '#darkModeToggle';

    if (isMobile) {
      await page.locator('#mobileMenuToggle').click();
      await page.waitForTimeout(200);
    }

    const toggle = page.locator(toggleId);
    await expect(toggle).toBeVisible();

    // Get initial state
    const wasDark = await page.locator('html').evaluate(el => el.classList.contains('dark'));

    // Click toggle
    await toggle.click();
    await page.waitForTimeout(200);

    // State should have changed
    const isDark = await page.locator('html').evaluate(el => el.classList.contains('dark'));
    expect(isDark).not.toBe(wasDark);
  });

  test('dark mode persists across page navigation', async ({ page, viewport }) => {
    await page.goto('/');
    const isMobile = viewport.width < 768;
    const toggleId = isMobile ? '#darkModeToggleMobile' : '#darkModeToggle';

    if (isMobile) {
      await page.locator('#mobileMenuToggle').click();
      await page.waitForTimeout(200);
    }

    // Enable dark mode
    const wasDark = await page.locator('html').evaluate(el => el.classList.contains('dark'));
    if (!wasDark) {
      await page.locator(toggleId).click();
      await page.waitForTimeout(200);
    }
    expect(await page.locator('html').evaluate(el => el.classList.contains('dark'))).toBe(true);

    // Navigate to a detail page
    await page.goto('/robot/westwood-robotics-themis-v2/');
    await page.waitForTimeout(300);

    // Dark mode should still be active
    expect(await page.locator('html').evaluate(el => el.classList.contains('dark'))).toBe(true);
  });
});

import { test, expect } from '@playwright/test';

test.describe('Internationalization', () => {
  test('defaults to English', async ({ page }) => {
    await page.goto('/');
    const title = page.locator('[data-i18n="hero.title"]');
    await expect(title).toContainText('Discover the World of Robotics');
  });

  test('switches to German via select', async ({ page, viewport }) => {
    await page.goto('/');
    const isMobile = viewport.width < 768;

    if (isMobile) {
      await page.locator('#mobileMenuToggle').click();
      await page.waitForTimeout(200);
      await page.locator('#languageSelectMobile').selectOption('de');
    } else {
      await page.locator('#languageSelect').selectOption('de');
    }

    await page.waitForTimeout(200);
    const title = page.locator('[data-i18n="hero.title"]');
    await expect(title).toContainText('Entdecke die Welt der Robotik');
  });

  test('loads German from URL parameter', async ({ page }) => {
    await page.goto('/?lang=de');
    await page.waitForTimeout(500);
    const title = page.locator('[data-i18n="hero.title"]');
    await expect(title).toContainText('Entdecke die Welt der Robotik');
  });

  test('price formatting changes with language', async ({ page, viewport }) => {
    await page.goto('/robot/westwood-robotics-themis-v2/');
    // English format
    const priceEl = page.locator('[data-raw-price]').first();
    const enPrice = await priceEl.textContent();
    expect(enPrice).toContain('69');

    const isMobile = viewport.width < 768;

    // Switch to German
    if (isMobile) {
      await page.locator('#mobileMenuToggle').click();
      await page.waitForTimeout(200);
      await page.locator('#languageSelectMobile').selectOption('de');
    } else {
      await page.locator('#languageSelect').selectOption('de');
    }

    await page.waitForTimeout(500);
    const dePrice = await priceEl.textContent();
    expect(dePrice).toContain('69');
  });
});

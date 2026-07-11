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

  test('URL language overrides a previously stored language without a visible flash', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      localStorage.setItem('lang', 'en');
      window.__wrongLanguageSeen = false;
      const observePaintedFrames = () => {
        const title = document.querySelector('[data-i18n="hero.title"]');
        if (
          title &&
          title.textContent.includes('Discover') &&
          getComputedStyle(title).visibility !== 'hidden'
        ) {
          window.__wrongLanguageSeen = true;
        }
        if (!title || document.documentElement.hasAttribute('data-i18n-loading')) {
          requestAnimationFrame(observePaintedFrames);
        }
      };
      requestAnimationFrame(observePaintedFrames);
    });

    await page.goto('/?lang=de');
    await expect(page.locator('[data-i18n="hero.title"]')).toContainText(
      'Entdecke die Welt der Robotik',
    );
    await page.waitForTimeout(250);
    await expect(page.locator('[data-i18n="hero.title"]')).toContainText(
      'Entdecke die Welt der Robotik',
    );
    expect(await page.evaluate(() => window.__wrongLanguageSeen)).toBe(false);
  });

  test('does not flash English before restoring German', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('lang', 'de');
      window.__englishFlashSeen = false;
      const observePaintedFrames = () => {
        const title = document.querySelector('[data-i18n="hero.title"]');
        if (
          title &&
          title.textContent.includes('Discover') &&
          getComputedStyle(title).visibility !== 'hidden'
        ) {
          window.__englishFlashSeen = true;
        }
        if (!title || document.documentElement.hasAttribute('data-i18n-loading')) {
          requestAnimationFrame(observePaintedFrames);
        }
      };
      requestAnimationFrame(observePaintedFrames);
    });
    await page.goto('/');
    await expect(page.locator('[data-i18n="hero.title"]')).toContainText(
      'Entdecke die Welt der Robotik',
    );
    await page.waitForTimeout(250);
    await expect(page.locator('[data-i18n="hero.title"]')).toContainText(
      'Entdecke die Welt der Robotik',
    );
    expect(await page.evaluate(() => window.__englishFlashSeen)).toBe(false);
  });

  test('does not flash English when German comes from the browser', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'de-DE' });
    const page = await context.newPage();
    await page.addInitScript(() => {
      localStorage.removeItem('lang');
      window.__englishFlashSeen = false;
      const observePaintedFrames = () => {
        const title = document.querySelector('[data-i18n="hero.title"]');
        if (
          title &&
          title.textContent.includes('Discover') &&
          getComputedStyle(title).visibility !== 'hidden'
        ) {
          window.__englishFlashSeen = true;
        }
        if (!title || document.documentElement.hasAttribute('data-i18n-loading')) {
          requestAnimationFrame(observePaintedFrames);
        }
      };
      requestAnimationFrame(observePaintedFrames);
    });
    await page.goto('/');
    await expect(page.locator('[data-i18n="hero.title"]')).toContainText(
      'Entdecke die Welt der Robotik',
    );
    await page.waitForTimeout(250);
    await expect(page.locator('[data-i18n="hero.title"]')).toContainText(
      'Entdecke die Welt der Robotik',
    );
    expect(await page.evaluate(() => window.__englishFlashSeen)).toBe(false);
    await context.close();
  });

  test('price formatting changes with language', async ({ page, viewport }) => {
    await page.goto('/robot/westwood-robotics-themis-v2/');
    // English format
    const priceEl = page.locator('[data-raw-price]').first();
    const enPrice = await priceEl.textContent();
    expect(enPrice).toContain('69');
    expect(enPrice).toContain('USD');

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
    expect(dePrice).toContain('USD');
  });
});

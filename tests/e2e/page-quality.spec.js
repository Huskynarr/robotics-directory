import { expect, test } from '@playwright/test';

const CORE_PAGES = ['/', '/finder/', '/robot/westwood-robotics-themis-v2/'];

for (const url of CORE_PAGES) {
  test(`${url} renders without browser errors or broken markup`, async ({ page }) => {
    // The catalog markup and scripts are under test; use a deterministic video frame
    // instead of executing the third-party player's changing scripts and policies.
    await page.route('https://www.youtube.com/embed/**', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'text/html',
        body: '<!doctype html><html lang="en"><title>Test video frame</title><body>Video frame fixture</body></html>',
      }),
    );
    const errors = [];
    page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
    page.on('console', (message) => {
      if (message.type() === 'error')
        errors.push(`console: ${message.text()} [${message.location().url}]`);
    });

    const response = await page.goto(url);
    expect(response?.status()).toBe(200);
    await expect(page.locator('body')).toBeVisible();

    const duplicateIds = await page
      .locator('[id]:not(style):not(svg):not(svg *)')
      .evaluateAll((elements) => {
        const ids = elements.map((element) => element.id);
        return [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
      });
    expect(duplicateIds, 'duplicate IDs make labels and scripted controls ambiguous').toEqual([]);

    const brokenImages = await page
      .locator('img:visible')
      .evaluateAll((images) =>
        images
          .filter((image) => image.complete && image.naturalWidth === 0)
          .map((image) => image.getAttribute('src')),
      );
    expect(brokenImages).toEqual([]);
    expect(errors).toEqual([]);
  });
}

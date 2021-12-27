import { test, expect } from '@playwright/test';

test.describe('test', () => {
  test('basic test', async ({ page }) => {
    await page.goto('/');

    const appStartedText = page.locator('div.card > span');

    await expect(appStartedText).toHaveText('bss-web app is running!');
  });
});

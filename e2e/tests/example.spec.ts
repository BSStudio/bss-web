import { test, expect } from '@playwright/test';

test.describe('test', () => {
  test('basic test', async ({ page, baseURL }) => {
    await page.goto('/');
    expect(await page.screenshot()).toMatchSnapshot('home.png');
  });
  test('simple test', async ({ page }) => {
    await page.goto('https://wikipedia.org');

    await page.click('input[name="search"]');
    // Fill input[name="search"]
    await page.fill('input[name="search"]', 'angular js');
    // Click a:has-text("AngularJSOpen source web application framework")
    await page.click(
      'a:has-text("AngularJSOpen source web application framework")'
    );
    await expect(page).toHaveURL('https://en.wikipedia.org/wiki/AngularJS');
  });
});

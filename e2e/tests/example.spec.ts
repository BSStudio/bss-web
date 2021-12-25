import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('/');
  expect(await page.screenshot()).toMatchSnapshot('home.png');
});

import { test, expect } from '@playwright/test';
import { VideoPage } from '../pom/video-page';

test.describe('video page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/video');
  });
  test('should render', async ({ page }) => {
    const videoPage = new VideoPage(page);

    await expect(videoPage.page).toHaveURL('/video');
  });
});

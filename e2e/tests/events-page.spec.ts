import { test, expect } from '@playwright/test';
import { EventsPage } from '../pom/events-page';

test.describe('events page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/events');
  });
  test('should render', async ({ page }) => {
    const eventsPage = new EventsPage(page);

    await expect(eventsPage.page).toHaveURL('/events');
  });
});

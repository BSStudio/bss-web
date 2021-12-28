import { Locator, Page } from '@playwright/test';
import { DefaultShell } from './default-shell';

export class HomePage extends DefaultShell {
  readonly title: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('h1');
  }

  goTo() {
    return this.page.goto('/');
  }
}

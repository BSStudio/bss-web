import { DefaultShell } from './default-shell';
import { Page } from '@playwright/test';

export class ContactPage extends DefaultShell {
  constructor(page: Page) {
    super(page);
  }
}

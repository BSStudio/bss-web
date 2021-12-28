import { Page } from '@playwright/test';

export enum Destination {
  HOMEPAGE = 'homepage',
  VIDEO = 'video',
  EVENTS = 'events',
  LIVE = 'live',
  COURSES = 'courses',
  ABOUT_US = 'about-us',
  MEMBERS = 'members',
  CONTACT = 'contact',
}

export class DefaultShell {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}

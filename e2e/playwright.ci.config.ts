import { PlaywrightTestConfig } from '@playwright/test';
import defaultConfig from './playwright.config';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://frontend:4000',
  },
  reporter: [
    ['dot'],
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'reports/results.xml' }],
  ],
  projects: defaultConfig.projects,
};
export default config;

import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run build:ssr && npm run serve:ssr',
    cwd: '../',
    port: 4000,
    timeout: 2 * 60 * 1000,
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:4000',
  },
  projects: [
    {
      name: 'Chrome Stable',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Desktop Safari',
      use: { browserName: 'webkit' },
    },
    {
      name: 'Desktop Firefox',
      use: { browserName: 'firefox' },
    },
  ],
};
export default config;

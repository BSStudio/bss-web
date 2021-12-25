import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve('./env/global-setup'),
  globalTeardown: require.resolve('./env/global-teardown'),
  use: {
    baseURL: 'http://localhost:4300',
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

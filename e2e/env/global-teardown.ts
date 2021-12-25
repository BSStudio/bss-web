import { FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
  // @ts-ignore
  global.startedDockerComposeEnvironment.down();
}

export default globalTeardown;

import type { FullConfig } from '@playwright/test';
import { DockerComposeEnvironment } from 'testcontainers';

async function globalSetup(config: FullConfig) {
  const composeEnvironment = new DockerComposeEnvironment(
    './',
    'docker-compose.yaml'
  );
  const startedDockerComposeEnvironment = await composeEnvironment.up();
  const mappedPort = startedDockerComposeEnvironment
    .getContainer('frontend_1')
    .getMappedPort(4000);
  // @ts-ignore
  global.startedDockerComposeEnvironment = startedDockerComposeEnvironment;
}

export default globalSetup;

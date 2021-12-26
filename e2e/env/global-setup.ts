import type { FullConfig } from '@playwright/test';
import { DockerComposeEnvironment, Wait } from 'testcontainers';

async function globalSetup(config: FullConfig) {
  const composeEnvironment = new DockerComposeEnvironment(
    './',
    'docker-compose.yaml'
  ).withWaitStrategy(
    'frontend_1',
    Wait.forLogMessage('Node Express server listening on')
  );
  const startedDockerComposeEnvironment = await composeEnvironment.up();
  const mappedPort = startedDockerComposeEnvironment
    .getContainer('frontend_1')
    .getMappedPort(4000);
  // @ts-ignore
  global.startedDockerComposeEnvironment = startedDockerComposeEnvironment;
}

export default globalSetup;

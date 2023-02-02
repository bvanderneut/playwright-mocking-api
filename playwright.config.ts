//@ts-check
import { PlaywrightTestConfig } from '@playwright/test';

const base = require('./playwright-base');

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  ...base,
  globalSetup: require.resolve("./global-setup"),
  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "test-results/",
  snapshotPathTemplate: "{testDir}/__screenshots__/{testFilePath}/{arg}{ext}",
  projects: [
    {
      name: "run-tests",
      testMatch: ["/tests/*.spec.ts"],
      use: { mockApi: true },
    },
  ],
};

export default config;

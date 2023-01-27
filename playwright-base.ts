module.exports = {
  /* Maximum time one test can run for. */
  timeout: 40 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 15000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Stop the run if too many failed tests to save resources */
  maxFailures: process.env.CI ? 10 : undefined,
  /* Use x percentage of CPU-cores to open as many browsers possible */
  workers: process.env.CI ? '100%' : '80%',
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    userAgent:
      'Playwright/1.28.1 Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASEURL === undefined ? 'https://www.independer.nl' : process.env.BASEURL,    
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'off',
    viewport: {
      width: 1920,
      height: 1080,
    },
  },
};

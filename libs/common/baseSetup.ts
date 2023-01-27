import { AutoHomePage, HomePage } from '@libs/pages';
import baseTest from '@playwright/test';

type pages = {
  homePage: HomePage;
  autoHomePage: AutoHomePage;
};

const baseSetup = baseTest.extend<pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  autoHomePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export default baseSetup;
export const expect = baseSetup.expect;

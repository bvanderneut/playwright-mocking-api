import { AutoHomePage, HomePage } from '@libs/pages';
import baseTest from '@playwright/test';
import { MockApi } from "./mock-api";

export type MyOptions = {
  mockApi: boolean;
};

type MyFixtures = {
  homePage: HomePage;
  autoHomePage: AutoHomePage;
};

const baseSetup = baseTest.extend<MyOptions & MyFixtures>({
  mockApi: [false, { option: true }],

  homePage: async ({ page, mockApi }, use) => {
    console.log("Mock API value: " + mockApi);
    if (mockApi) {
      console.log("Mock homepage api");
      new MockApi(page).mockAll();
    }

    await use(new HomePage(page));
  },

  autoHomePage: async ({ page, mockApi }, use) => {
    console.log("Mock API value: " + mockApi);
    if (mockApi) {
      console.log("Mock auto api");
      new MockApi(page).mockAll();
    }

    await use(new HomePage(page));
  },
});

export default baseSetup;
export const expect = baseSetup.expect;

 import test from "@libs/common/baseSetup";
import { MockApi } from '@libs/common/mock-api';

/**
 * Mocking does not work. If you inspect the "/api/security/loggedonuser" you see an empy (default value) string.
 * It has to do with the function `this.setupBrowser();` in the `base.page.ts` file where we disable the images
 * If you disable that function it works fine but I don't know why and how to solve this.
 */
test.beforeEach(async ({ page}) => {  
  new MockApi(page).mockAll();
});

// /**
//  * Mocking works if you add the beforeEach it like this but that is an ugly solution
//  */
// test.beforeEach(async ({ homePage, autoHomePage }) => { 
//   new MockApi(homePage.page).mockAll();
//   new MockApi(autoHomePage.page).mockAll();
// });

test("Go to homepage", async ({ homePage }) => {
  await homePage.gotoPage();
  await homePage.verifyPage();
});

test("Go to auto homepage", async ({ autoHomePage }) => {
  await autoHomePage.gotoPage();
  await autoHomePage.verifyPage();
});

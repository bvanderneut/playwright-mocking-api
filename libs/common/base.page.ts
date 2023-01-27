import { expect, Page } from '@playwright/test';
import Pages from '../common/pages';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.setupBrowser();
  }

  async setupBrowser() {
    console.log("setupBrowser");

    await this.page.route("**/*", (request) => {
      if (request.request().resourceType() === "image") {        
        return request.abort();
      }

      return request.continue();
    });
  }

  async goToPage(page: Pages): Promise<void> {
    await this.page.goto(page.toString());
  }

  async verifyPage(page: Pages) {
    expect(this.page.url()).toContain(page);
  }
}

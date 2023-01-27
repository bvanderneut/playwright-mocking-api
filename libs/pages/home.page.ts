import Pages from '@libs/common/pages';
import { Page } from '@playwright/test';
import { BasePage } from '../common/base.page';

export class HomePage extends BasePage {  
  constructor(page: Page) {  
    super(page);
  }

  public async gotoPage(): Promise<void> {
    await super.goToPage(Pages.homepage);
  }

  public async verifyPage(){
    await super.verifyPage(Pages.homepage);
  }
}

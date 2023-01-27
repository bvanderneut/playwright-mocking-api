import { Page } from '@playwright/test';

export class MockApi {
	public page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	public async mockAll(){
		this.mockLogon();
	}

	public async mockLogon(){
		console.log("Mock: loggedonuser");
		
    await this.page.route("**/api/security/loggedonuser**", (route) =>
      route.fulfill({ json: { mock: "yes mocked" } })
    );
  }
}
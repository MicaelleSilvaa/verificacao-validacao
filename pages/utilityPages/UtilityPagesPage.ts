import { Page } from '@playwright/test';

export class UtilityPagesPage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async goto(siteUrl: string) {
		await this.page.goto(siteUrl, { waitUntil: 'domcontentloaded' });
	}
}

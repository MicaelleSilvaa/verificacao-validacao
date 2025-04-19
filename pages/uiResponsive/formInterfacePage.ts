import { Page, Locator, expect } from '@playwright/test';

export class UiResponsivePage {
	private readonly page: Page;
	readonly formVisible: Locator;

	constructor(page: Page) {
		this.page = page;
		this.formVisible = page.getByText(
			'Previsão de Câncer de PulmãoGENDERGênero *Gênero *AGEIdade *Idade *',
		);
	}

	async setViewport(width: number, height: number) {
		await this.page.setViewportSize({ width, height });
	}
}

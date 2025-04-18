import { Page, Locator } from '@playwright/test';

export class ChatBotPage {
	private readonly page: Page;
	readonly logo: Locator;
	readonly heading: Locator;
	readonly startButton: Locator;
	readonly firstMessagePrompt: Locator;
	

	constructor(page: Page) {
		this.page = page;
		this.logo = page.getByRole('link', { name: 'logo LungAI' });
		this.heading = page.getByRole('heading', { name: 'Vamos iniciar a sua consulta?' });
		this.startButton = page.getByRole('button', { name: 'Vamos iniciar!' });
		this.firstMessagePrompt = page.getByText('Envie sua primeira mensagem');

	}
}

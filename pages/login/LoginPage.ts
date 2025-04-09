import { Page, Locator } from '@playwright/test';

interface User {
    email: string,
    password: string
}

export class LoginPage {
	readonly page: Page;

	private readonly signInButton: Locator;
	private readonly emailInput: Locator;
	private readonly passwordInput: Locator;

	constructor(page: Page) {
		this.page = page;

		this.emailInput = this.page.getByLabel('Username');
		this.passwordInput = this.page.getByLabel('Password');
		this.signInButton = this.page.getByRole('button', { name: 'LOGIN' });
	}

	async login(user: User){
		await this.emailInput.fill(user.email);
		await this.passwordInput.fill(user.password);
		await this.signInButton.click();
	}
}
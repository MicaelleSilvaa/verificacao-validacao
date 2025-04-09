import { test } from '@playwright/test';
import { LoginPage } from '../pages/login/LoginPage';
import { UtilityPagesPage } from '../pages/utilityPages/UtilityPagesPage';

interface Login {
	login: LoginPage,
	utilityPages: UtilityPagesPage
}

export const loginPage = test.extend<{
	loginPage: Login;
}>({
	loginPage: async ({ page }, use) => {
		const utilityPages = new UtilityPagesPage(page);
		const login = new LoginPage(page);
		
		await use({ login, utilityPages });
	},
});


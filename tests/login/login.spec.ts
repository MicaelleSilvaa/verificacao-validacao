import { expect, mergeTests } from '@playwright/test';
import { loginPage } from '../../fixtures/loginTest';
import { projectConfig } from '../../project.config';

const { email, password } = projectConfig.users.user;

export const test = mergeTests(
	loginPage
);

test('it should be possible for the user to log in', async ({
	loginPage
}) => {

	const { login, utilityPages } = loginPage;

	await utilityPages.goto(projectConfig.baseURL);

	await login.login({ email, password });
  
	await expect(login.page.url()).toContain('/home');
});
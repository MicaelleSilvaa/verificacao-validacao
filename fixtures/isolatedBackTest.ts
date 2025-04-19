import { test } from '@playwright/test';
import { IsolatedBack } from '../pages/isolatedBack/isolatedBackPage';
import { UtilityPagesPage } from '../pages/utilityPages/UtilityPagesPage';

interface Backend {
	backend: IsolatedBack;
	utilityPages: UtilityPagesPage;
}

export const formPage = test.extend<{
	formPage: Backend;
}>({
	formPage: async ({ page }, use) => {
		const utilityPages = new UtilityPagesPage(page);
		const backend = new IsolatedBack();

		await use({ backend, utilityPages });
	},
});

import { test } from '@playwright/test';
import { FormPage } from '../pages/form/formPage';
import { UtilityPagesPage } from '../pages/utilityPages/UtilityPagesPage';

interface Form {
	form: FormPage;
	utilityPages: UtilityPagesPage;
}

export const formPage = test.extend<{
	formPage: Form;
}>({
	formPage: async ({ page }, use) => {
		const utilityPages = new UtilityPagesPage(page);
		const form = new FormPage(page);

		await use({ form, utilityPages });
	},
});

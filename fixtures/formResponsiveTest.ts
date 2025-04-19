import { test } from '@playwright/test';
import { UiResponsivePage } from '../pages/uiResponsive/formInterfacePage';
import { UtilityPagesPage } from '../pages/utilityPages/UtilityPagesPage';

interface UiResponsive {
	uiResponsive: UiResponsivePage;
	utilityPages: UtilityPagesPage;
}

export const uiResponsive = test.extend<{
	uiResponsivePage: UiResponsive;
}>({
	uiResponsivePage: async ({ page }, use) => {
		const utilityPages = new UtilityPagesPage(page);
		const uiResponsive = new UiResponsivePage(page);

		await use({ uiResponsive, utilityPages });
	},
});

import { expect, mergeTests } from '@playwright/test';
import { uiResponsive } from '../../fixtures/formResponsiveTest';
import { UiResponsivePage } from '../../pages/uiResponsive/formInterfacePage';
import { projectConfig } from '../../project.config';

export const test = mergeTests(uiResponsive);

const viewports = [
	{ name: 'Mobile', width: 375, height: 667 },
	{ name: 'Tablet', width: 768, height: 1024 },
	{ name: 'Desktop', width: 1440, height: 900 },
];

for (const viewport of viewports) {
	test.describe(`User Interface Testing - ${viewport.name}`, () => {
		test(`it should be possible to view the rendered form correctly on different screen sizes ${viewport.name}`, async ({
			page,
			uiResponsivePage,
		}) => {
			const uiPage = new UiResponsivePage(page);

			await uiPage.setViewport(viewport.width, viewport.height);
			await uiResponsivePage.utilityPages.goto(projectConfig.baseURL);
			await expect(uiPage.formVisible).toBeVisible();
		});
	});
}

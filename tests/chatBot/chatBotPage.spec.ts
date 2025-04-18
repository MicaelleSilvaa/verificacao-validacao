import { expect, mergeTests } from '@playwright/test';
import { chatPage } from '../../fixtures/chatBotTest';
import { projectConfig } from '../../project.config';

export const test = mergeTests(chatPage);

test('it should be possible to start a medical consultation', async ({
	pages,
}) => {
	const { chatBotPage, utilityPages } = pages;

	await utilityPages.goto(projectConfig.systemURL);
	await expect(chatBotPage.logo).toBeVisible();

	if (await chatBotPage.heading.isVisible()) {
		await chatBotPage.startButton.click();
	}

	await expect(chatBotPage.firstMessagePrompt).toBeVisible();
});

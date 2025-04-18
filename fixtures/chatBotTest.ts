import { test as base } from '@playwright/test';
import { ChatBotPage } from '../pages/chatBot/chatBotPage';
import { UtilityPagesPage } from '../pages/utilityPages/UtilityPagesPage';

interface Pages {
	chatBotPage: ChatBotPage;
	utilityPages: UtilityPagesPage;
}

export const chatPage = base.extend<{
	pages: Pages;
}>({
	pages: async ({ page }, use) => {
		const chatBotPage = new ChatBotPage(page);
		const utilityPages = new UtilityPagesPage(page);

		await use({ chatBotPage, utilityPages });
	},
});

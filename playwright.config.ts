import { defineConfig } from '@playwright/test';
import { projectConfig } from './project.config';

import { config as form } from './tests/form/config';
import { config as chat } from './tests/chatBot/config';
import { config as uiResponsive } from './tests/uiResponsive/config';

export default defineConfig({
	testDir: './tests',

	reporter: [
		[
			'html',
			{
				open: 'never',
			},
		],
	],

	use: {
		baseURL: projectConfig.baseURL,
		screenshot: 'only-on-failure',
		trace: 'on-first-retry',
	},

	projects: [form, chat, uiResponsive],
});

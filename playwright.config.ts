import { defineConfig } from '@playwright/test';
import { projectConfig } from './project.config';

import { config as login } from './tests/login/config';

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

	projects: [login],
});

import { devices } from '@playwright/test';

export const config = {
	dependence: ['setup'],
	name: 'chatBot',
	testDir: 'tests/chatBot',
	use: {
		...devices['Desktop Chrome'],
	},
};

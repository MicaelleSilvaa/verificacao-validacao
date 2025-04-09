import { devices } from '@playwright/test';

export const config = {
	dependence: ['setup'],
	name: 'login',
	testDir: 'tests/login',
	use: {
		...devices['Desktop Chrome'],
	}
};
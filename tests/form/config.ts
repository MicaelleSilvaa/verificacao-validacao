import { devices } from '@playwright/test';

export const config = {
	dependence: ['setup'],
	name: 'form',
	testDir: 'tests/form',
	use: {
		...devices['Desktop Chrome'],
	}
};
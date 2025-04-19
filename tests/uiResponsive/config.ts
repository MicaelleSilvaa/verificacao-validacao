import { devices } from '@playwright/test';

export const config = {
	dependence: ['setup'],
	name: 'responsive',
	testDir: 'tests/uiResponsive',
	use: {
		...devices['Desktop Chrome'],
	}
};
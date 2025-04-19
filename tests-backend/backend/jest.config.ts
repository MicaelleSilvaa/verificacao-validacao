export default {
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	globals: {
		'ts-jest': {
			useBabelrc: true,
		},
	},
	testEnvironment: 'node',
	transformIgnorePatterns: ['/node_modules/(?!@playwright)'],
	testPathIgnorePatterns: ['/node_modules/', '/e2e/', '/tests/'],
};

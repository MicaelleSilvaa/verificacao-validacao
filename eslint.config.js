import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';

const config = [
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: typescriptEslintParser,
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: 'module',
			},
		},
		rules: {
			semi: 'error',
			quotes: ['error', 'single'],
			indent: ['error', 'tab'],
			'object-curly-spacing': ['error', 'always'],
		},
	},
	{
		plugins: {
			'@typescript-eslint': typescriptEslintPlugin,
		},
	},
];

export default config;

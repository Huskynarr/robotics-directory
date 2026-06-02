import js from '@eslint/js';
import globals from 'globals';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
    {
        ...js.configs.recommended,
        files: ['src/**/*.js', 'tests/**/*.js'],
    },
    ...eslintPluginAstro.configs.recommended,
    {
        ignores: ['dist/**', '.astro/**', 'public/**'],
    },
    {
        files: ['src/**/*.js', 'tests/**/*.js'],
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2015,
            },
        },
        rules: {
            'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            'no-var': 'error',
            'prefer-const': 'error',
        },
    },
];

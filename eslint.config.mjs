import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    plugins: ['@typescript-eslint'],
    rules: {
      'prefer-const': 'error',
      quotes: ['error', 'single'],
      'no-unused-vars': 'error',
      'no-restricted-syntax': 'error',
    },
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint'],
        extends: ['plugin:@typescript-eslint/recommended'],
        rules: {
          'react/prop-types': 'off',
          'react-hooks/exhaustive-deps': 'off',
          '@typescript-eslint/no-unused-vars': 'error',
          '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
              allowExpressions: true,
              allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            },
          ],
          '@typescript-eslint/no-explicit-any': 'error',
          '@typescript-eslint/ban-ts-comment': 'warn',
          '@typescript-eslint/no-empty-interface': 'off',
          '@typescript-eslint/no-non-null-assertion': 'off',
        },
      },
    ],
  }),
];

export default eslintConfig;

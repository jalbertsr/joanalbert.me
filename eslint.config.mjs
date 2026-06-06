import { defineConfig, globalIgnores } from 'eslint/config';
import nextConfig from 'eslint-config-next';

const eslintConfig = defineConfig([
  ...nextConfig,
  {
    rules: {
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'react/display-name': 'off',
    },
  },
  // Default ignores of eslint-config-next:
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;

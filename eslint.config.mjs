import {createConfigForNuxt} from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  files: ['**/*.{js,ts,vue}'],
  ignores: ['**/*.config.js', '.nuxt/*', '.vscode/*', 'node_modules/*', 'public/*', '.husky/*', '**/*.d.ts', '.nuxt/*', '**/*.config.mjs'],
  rules: {
    semi: 'true'
  },
  plugins: {},
  languageOptions: {
    ecmaVersion: 2024,
    sourceType: 'module'
  }
})
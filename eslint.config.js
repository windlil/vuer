import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'sort-imports': 'off',
    'curly': 'off',
    'jsonc/sort-keys': 'off',
  },
})

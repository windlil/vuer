import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['*.json', '*.md'],
  rules: {
    'sort-imports': 'off',
    'curly': 'off',
  },
})

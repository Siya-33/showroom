module.exports = {
  extends: [
    '@dcwjoy/react',
    '@Unocss',
  ],
  plugins: [
    'react',
  ],
  rules: {
    'react/self-closing-comp': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-newline': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'react/no-unknown-property': 'off',
  },
  ignorePatterns: [
    '*.svg',
    '*.scss',
  ],
}

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
  },
  ignorePatterns: [
    '*.svg',
  ],
}

module.exports = {
  extends: [
    '@dcwjoy/react',
    '@unocss',
  ],
  plugins: [
    'react',
  ],
  rules: {
    'react/self-closing-comp': 'error',
  },
  ignorePatterns: [
    '*.svg',
  ],
}

// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    // presetAttributify(), react jsx 暂时不使用属性模式
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  rules: [
    ['grid-bg',
      {
        'background-image': `conic-gradient(
          var(--bg1) 90deg,
          var(--bg2) 90deg 180deg,
          var(--bg1) 180deg 270deg,
          var(--bg2) 270deg
        )`,
        'background-size': 'calc(100vw / var(--num) * 2) calc(100vw / var(--num) * 2)',
      },
    ],
    ['screen-bg',
      {
        'background-image': 'url(@/bg/screen1.jpg)',
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
      },
    ],
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})

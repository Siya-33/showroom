// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
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
    [
      'card-bg',
      {
        'background-image': 'linear-gradient(112deg, hsla(0, 0%, 100%, .3) -50%, transparent)',
        'backdrop-filter': 'blur(5px)',
      },
    ],

  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributifyJsx(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})

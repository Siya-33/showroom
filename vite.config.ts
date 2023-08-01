import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'

// unocss vite plugin
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src/assets')}/`,
    },
  },
  plugins: [
    react(),
    UnoCSS(),
    AutoImport({
      imports: [
        'react',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
})

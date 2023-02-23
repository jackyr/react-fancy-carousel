import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: './example',
  base: './',
  resolve: {
    alias: {
      'react-fancy-carousel': path.resolve(__dirname, './src/index.tsx')
    },
  },
  build: {
    outDir: '../site',
  },
  server: {
    port: 3000,
  }
})
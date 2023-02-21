import { defineConfig } from 'vite'

export default defineConfig({
  root: './example',
  base: './',
  build: {
    outDir: '../site',
  },
  server: {
    port: 3000,
  }
})
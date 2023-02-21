import { defineConfig } from 'vite'

export default defineConfig({
  root: './example',
  build: {
    outDir: '../site',
  },
  server: {
    port: 3000,
  }
})
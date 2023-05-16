import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  esbuild: {
    jsx: 'transform',
  },
  build: {
    target: 'es2015',
    lib: {
      name: 'ReactFancyCarousel',
      entry: './src/index.tsx',
      fileName: 'ReactFancyCarousel',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        }
      },
    },
  },
  plugins: [
    dts({ 
      rollupTypes: true,
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
});
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    },
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  base: '/',
  plugins: [
    react()
  ],
  server: {
    open: true, // automatically open the app in the browser
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
});
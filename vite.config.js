import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/30-days-of-javascript/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'projects/weather-app/index.html'),
      },
    },
  },
});
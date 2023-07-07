import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/30-Days-of-JavaScript/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        weather_app: resolve(__dirname, 'projects/weather-app/index.html'),
        todo_list_app: resolve(__dirname, 'projects/todo-list-app/index.html')
      },
    },
  },
});
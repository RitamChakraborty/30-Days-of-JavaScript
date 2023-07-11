import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/30-Days-of-JavaScript/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        weather_app: resolve(__dirname, 'projects/weather-app/index.html'),
        todo_list_app: resolve(__dirname, 'projects/todo-list-app/index.html'),
        quiz_app: resolve(__dirname, 'projects/quiz-app/index.html'),
        password_generator_app: resolve(__dirname, 'projects/password-generator-app/index.html'),
        notes_app: resolve(__dirname, 'projects/notes-app/index.html')
      },
    },
  },
});
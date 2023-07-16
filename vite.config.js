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
        notes_app: resolve(__dirname, 'projects/notes-app/index.html'),
        age_calculator_app: resolve(__dirname, 'projects/age-calculator-app/index.html'),
        quotes_app: resolve(__dirname, 'projects/quotes-app/index.html'),
        qr_code_generator_app: resolve(__dirname, 'projects/qr-code-generator-app/index.html'),
        toast_notification_app: resolve(__dirname, 'projects/toast-notification-app/index.html'),
        music_player_app: resolve(__dirname, 'projects/music-player-app/index.html'),
        stop_watch_app: resolve(__dirname, 'projects/stopwatch-app/index.html'),
        calculator_app: resolve(__dirname, 'projects/calculator-app/index.html'),
        popup_app: resolve(__dirname, 'projects/popup-app/index.html'),
        password_toggle_app: resolve(__dirname, 'projects/password-toggle-app/index.html'),
        light_dark_mode_toggle_app: resolve(__dirname, 'projects/light-dark-mode-toggle-app/index.html')
      },
    },
  },
});
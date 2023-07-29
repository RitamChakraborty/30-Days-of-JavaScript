import { resolve } from 'path'
import { resolveBaseUrl } from 'vite';
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
        light_dark_mode_toggle_app: resolve(__dirname, 'projects/light-dark-mode-toggle-app/index.html'),
        form_validation_app: resolve(__dirname, 'projects/form-validation-app/index.html'),
        image_slider_app: resolve(__dirname, 'projects/image-slider-app/index.html'),
        email_subscription_app: resolve(__dirname, 'projects/email-subscription-app/index.html'),
        password_strength_app: resolve(__dirname, 'projects/password-strength-app/index.html'),
        text_to_speech_converter_app: resolve(__dirname, 'projects/text-to-speech-converter-app/index.html'),
        coming_soon_app: resolve(__dirname, 'projects/coming-soon-app/index.html'),
        image_background_transition_app: resolve(__dirname, 'projects/image-background-transition-app/index.html'),
        mini_calendar_app: resolve(__dirname, 'projects/mini-calendar-app/index.html'),
        custom_select_box_app: resolve(__dirname, 'projects/custom-select-box-app/index.html'),
        ciruclar_progress_bar_app: resolve(__dirname, 'projects/circular-progress-bar-app/index.html')
      },
    },
  },
});
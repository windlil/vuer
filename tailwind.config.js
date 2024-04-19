/** @type {import('tailwindcss').Config} */
import { iconsPlugin, dynamicIconsPlugin } from '@egoist/tailwindcss-icons'

export default {
  darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [iconsPlugin(), dynamicIconsPlugin()],
}

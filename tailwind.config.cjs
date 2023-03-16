/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: colors.emerald,
        gray: { ...colors.zinc, 950: 'hsl(240deg 7% 5%)' },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
     'lemonade'
    ],
  },
  plugins: [
    require('tailwindcss-animation-delay'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
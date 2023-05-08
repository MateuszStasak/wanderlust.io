/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: {
      //     DEFAULT: '#2B59CC',
      //     '50': '#F2F6FE',
      //     '100': '#C9D7F4',
      //     '200': '#A1B7EA',
      //     '300': '#7998E0',
      //     '400': '#5278D6',
      //     '500': '#2B59CC',
      //     '600': '#244EB3',
      //     '700': '#1C419A',
      //     '800': '#133477',
      //     '900': '#0C234E'
      //   },
      //   secondary: {
      //     DEFAULT: '#42A087',
      //     '50': '#F0FAF4',
      //     '100': '#D9F3DD',
      //     '200': '#B3EAC7',
      //     '300': '#8ED1B1',
      //     '400': '#68B89C',
      //     '500': '#42A087',
      //     '600': '#3B8D75',
      //     '700': '#31745E',
      //     '800': '#275B47',
      //     '900': '#1D4230'
      //   },
      //   accent: {
      //     DEFAULT: '#FFB41A',
      //     '50': '#FFF9E8',
      //     '100': '#FFECBF',
      //     '200': '#FFE096',
      //     '300': '#FFD26C',
      //     '400': '#FFC343',
      //     '500': '#FFB41A',
      //     '600': '#E6A417',
      //     '700': '#BF8E14',
      //     '800': '#996512',
      //     '900': '#7D5210'
      //   },
      //   neutral: {
      //     DEFAULT: '#959595',
      //     '50': '#F7F7F7',
      //     '100': '#E2E2E2',
      //     '200': '#CFCFCF',
      //     '300': '#BCBCBC',
      //     '400': '#A8A8A8',
      //     '500': '#959595',
      //     '600': '#808080',
      //     '700': '#6D6D6D',
      //     '800': '#595959',
      //     '900': '#464646'
      //   },
      //   'base-100': {
      //     DEFAULT: '#8B46CC',
      //     '50': '#F7F2FE',
      //     '100': '#E2D2F4',
      //     '200': '#CDACEA',
      //     '300': '#B787E0',
      //     '400': '#A066D6',
      //     '500': '#8B46CC',
      //     '600': '#7D40B3',
      //     '700': '#683397',
      //     '800': '#4F2764',
      //     '900': '#331C3E'
      //   }
      // }
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
  plugins: [
    require('tailwindcss-animation-delay'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};

// "midnight", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"

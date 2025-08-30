/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      anekTamil: ['Anek Tamil', 'sans-serif'],
      libreBaskerville: ['Libre Baskerville', 'serif'],
      libreFranklin: ['Libre Franklin', 'sans-serif'],
    },
    colors: {
      primary: '#d3bb7b',
      light: '#F2F2F2',
      dark: '#011a11',
      lighterDark: '#153A36',
    },
    extend: {
      height: {
        'screen-75': '75vh',
      }
    },
  },
  plugins: [],
}
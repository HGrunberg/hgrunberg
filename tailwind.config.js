/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Comfortaa: ['Comfortaa', 'cursive', 'sans-serif']
    },
    colors: {
      primary: '#3BAB87',
      light: '#F2F2F2',
      dark: '#20272E',
      lighterDark: '#30373E',
    },
    extend: {
      height: {
        'screen-75': '75vh',
      }
    },
  },
  plugins: [],
}
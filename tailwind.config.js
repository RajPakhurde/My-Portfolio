/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#081C29',
        grey: '#8B9297',
        skyBlue: '#00EEFF',
        white: '#F7F9FB'
      },
      translate: {
        'custom-up': '-4rem', // Define a custom value for upward movement
      },
    },
   
  },
  plugins: [],
}

 
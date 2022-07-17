/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          100: '#00c8961a',
          200: '#00c89633',
          300: '#00c8964d',
          400: '#00c89666',
          500: '#00c89680',
          600: '#00c89699',
          700: '#00c896b3',
          800: '#00c896cc',
          900: '#00c896',
        },
      },
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

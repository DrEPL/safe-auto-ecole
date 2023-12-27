/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#9d4edd',
          300: '#7b2cdf',
          700: '#6400a0',
          400: '#3c096c',
        },
      },
      backgroundImage: {
        'background': "url('/static/images/ecolemoto.jpg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
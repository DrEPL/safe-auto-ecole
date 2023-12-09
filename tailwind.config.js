/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        accent: '#ff6384',
        custom: {
          100: '#f0f0f0',
          200: '#d9d9d9',
          300: '#bfbfbf',
          400: '#666666',
          500: '#333333',
          600: '#1a1a1a',
          700: '#000000',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
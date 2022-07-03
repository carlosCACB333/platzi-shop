/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js,ts,tsx}'],
  darkMode: 'media',
  theme: {
    // extend: {},
    colors: { ...colors },
  },
  plugins: [require('@tailwindcss/forms')],
};

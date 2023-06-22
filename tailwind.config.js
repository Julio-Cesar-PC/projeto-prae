import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],

  // theme: {
  //     extend: {
  //         fontFamily: {
  //             sans: ['Figtree', ...defaultTheme.fontFamily.sans],
  //         },
  //     },
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#038845',

          secondary: '#B63E54',

          accent: '#53e2cf',

          neutral: '#211d2a',

          'base-100': '#F5F7F8',

          info: '#114B5F',

          success: '#2de190',

          warning: '#ec9d3c',

          error: '#f0757d',

        },
      },
    ],
  },

  plugins: [forms, require('daisyui')],
}


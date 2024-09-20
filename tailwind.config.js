/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/images/Image.png')",
      },
    },
  },
  plugins: [],
}


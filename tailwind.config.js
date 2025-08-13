// module.exports = {   content: ['./src/**/*.{html,js}'],   theme: {}, };
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          "oxanium": ['Oxanium', 'sans-serif'], // 'oxanium' is the name you'll use in your classes
          'poppins': ['Poppins'],
        },
      },
    },
    plugins: [
    ],
  }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {

      'xxxl': {'max': '1415px'},
      // => @media (max-width: 1415px) { ... }

      'xxl': {'max': '1282px'},
      // => @media (max-width: 1282px) { ... }

      'lg': {'max': '1100px'},
      // => @media (max-width: 1100px) { ... }

      'md': {'max': '871px'},
      // => @media (max-width: 871px) { ... }

      'md2': {'max': '855px'},
      // => @media (max-width: 855px) { ... }

      'sm': {'max': '560px'},
      // => @media (max-width: 560px) { ... }

      'sm2': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'sm3': {'max': '485px'},
      // => @media (max-width: 485px) { ... }

      'li': {'max': '390px'},
      // => @media (max-width: 390px) { ... }
    }
  },
  plugins: [],
}


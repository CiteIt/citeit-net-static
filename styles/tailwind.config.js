const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        change: "black",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        header: ["Inter", "Open Sans", ...defaultTheme.fontFamily.sans],
        body: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
       }
    },
  },
  variants: {},
  plugins: [],
};

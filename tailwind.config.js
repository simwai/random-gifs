module.exports = {
  purge: [
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "75": "75%"
      },
      width: {
        "100-vw": "100vw"
      },
      minWidth: {
        "half": "50%"
      },
      height: {
        "100-vh": "100vh"
      },
      maxHeight: {
        "75": "75%"
      }
    },
    colors: {
      "darker-grey": "#26282C",
      "dark-grey": "#2F3136",
      "grey": "#99AAB5",
      "blue-purple": "#7289DA",
      "purple": "#9B84EE",
      "orange": "#FAA61A",
      "mint": "#44DDBF"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

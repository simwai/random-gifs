module.exports = {
  purge: [
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        "40-vh": "40vh"
      },
      maxWidth: {
        "1/3-vw": 100 / 3 + "vw",
        "80-vw": "80vw",
        "120-px": "120px"
      },
      width: {
        "70-vw": "70vw"
      },
      height: {
        "70-vh": "70vh"
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

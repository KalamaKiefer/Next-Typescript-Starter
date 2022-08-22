/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },

    colors: {
      black: "#000",
      white: "#FFF",
      transparent: "#fff0",

      gray: {
        10: "#1A1A1A",
        20: "#333",
        72: "#BABABA",
        84: "#D8D8D8",
        87: "#DEDEDE",
        93: "#EEE",
      },

      red: "#EC1E27",
    },

    fontSize: {
      10: "10px",
      11: "11px",
      13: "13px",
      14: "14px",
      15: "15px",
      16: "16px",
      18: "18px",
      20: "20px",
      21: "21px",
      22: "22px",
      23: "23px",
      24: "24px",
      28: "28px",
      29: "29px",
      30: "30px",
      35: "35px",
      37: "37px",
      44: "44px",
      46: "46px",
      48: "48px",
      54: "54px",
      58: "58px",
      62: "62px",
      66: "66px",
      70: "70px",
      79: "79px",
      90: "90px",
      100: "100px",
      170: "170px",
    },

    lineHeight: {
      1: "1",
      "1_15": "1.15",
      "1_25": "1.25",
      "1_3": "1.3",
      "1_35": "1.35",
      "1_5": "1.5",
    },

    fontFamily: {
      sans: ["commuters-sans", "sans-serif"],
      serif: ["EB Garamond", "serif"],
    },
    extend: {},
  },
  plugins: [],
};

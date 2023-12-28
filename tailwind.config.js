/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        softRedPrimary: "hsl(7, 99%, 70%)",
        yellowPrimary: "hsl(51, 100%, 49%)",
        darkDesaturedCyanPrimary: "hsl(167, 40%, 24%)",
        darkBluePrimary: "hsl(198, 62%, 26%)",
        darkModerateCyanPrimary: "hsl(168, 34%, 41%)",
        veryDarkDesaturatedBlueNeutral: "hsl(212, 27%, 19%)",
        veryDarkGrayishBlueNeutral: "hsl(213, 9%, 39%)",
        darkGrayishBlueNeutral: "hsl(232, 10%, 55%)",
        grayishBlueNeutral: "hsl(210, 4%, 67%)",
        whiteNeutral: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      fontWeight: {
        "barlow-400":400,
        "barlow-500": 500,
        "barlow-600": 600,
        
        "fraunces-700": 700,
        "fraunces-900": 900,
      },
    },
  },
  plugins: [],
};

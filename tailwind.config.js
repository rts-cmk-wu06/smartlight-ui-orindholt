module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#393939",
        blue: "#0A4DA2",
        darkBlue: "#093B7B",
        gray: "#F6F8FB",
        darkGray: "#CECECE",
        orange: "#FFA939",
        salmon: "#FF9898",
        green: "#94EB9E",
        lightBlue: "#94CAEB",
        purple: "#A594EB",
        pink: "#DE94EB",
        lightYellow: "#EBD094",
        yellow: "#FFD239",
      },
      maxWidth: {
        sm: "375px"
      },
      keyframes: {
        slide: {
          "0%": {transform: "translateX(-100%)"},
          "100%": {transform: "translateX(0)"}
        }
      },
      animation: {
        "slide": "slide 1s 1s linear forwards"
      },
      boxShadow: {
        scene: "0px 2px 8px rgba(0, 0, 0, 0.2)"
      }
    },
  },
  plugins: [],
}

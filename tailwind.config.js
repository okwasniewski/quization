module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#1A2980",
      },
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: ["corporate"],
  },
  plugins: [require("daisyui")],
};

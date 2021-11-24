module.exports = {
  purge: [
    '.src/pages/**/*.{js,ts,jsx,tsx}',
    '.src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      main:'#1A2980'
    }
  },
    
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      scale: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  daisyui: {
    themes: ['corporate'],
  },
  plugins: [require('daisyui')],
};

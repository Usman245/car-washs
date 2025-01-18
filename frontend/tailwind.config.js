// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        mobile: {
          max: "660px"
        }
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};

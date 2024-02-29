/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url(./src/assets/bg.jpg)",
        tranquil: "url(./src/assets/tranquil.png)",
        aurelia: "url(./src/assets/aurelia.png)",
        crypto: "url(./src/assets/crypto.png)",
        popcorn: "url(./src/assets/popcorn.png)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

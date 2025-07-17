/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "hanken-grotesk": ['"Hanken Grotesk"', "sans-serif"],
      },
    },
  },
};

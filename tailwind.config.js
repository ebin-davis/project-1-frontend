/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        lightGreen:"#83C5BE",
        white:"#FBFBFB",
        grey:"#817E7E",
        red:"#FF0000",
      },
      fontFamily:{
        roboto:["Roboto","sans-serif"]
      }
    },
  },
  plugins: [],
};

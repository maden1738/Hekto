/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7E33E0",
        accent: "#FB2E86",
        background: "#F2F0FF",
      },
      fontFamily: {
        body: ["Josefin Sans"],
      },
    },
  },
  plugins: [],
};

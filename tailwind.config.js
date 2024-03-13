/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1240px",
        mx: "auto",
      },
      fontFamily: {
        Primary: ["Inter", "sans-serif"],
        Secondary: ["Barlow", "sans-serif"],
      },
      colors: {
        "error-color": "red-500",
      },
    },
  },
  plugins: [],
};

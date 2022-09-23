/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        primary: "rgba(125, 74, 234, 1)",
        secondary: "rgba(245, 245, 245, 1)",
        footer: "rgba(102, 102, 102, 1)",
        templateHoverBtn: "rgba(255, 255, 255, 1)",
        templateHoverOverlay: "rgba(125, 74, 234, 0.6)",
      },
      borderColor: {
        btnBorder: "rgba(210, 218, 227, 1)",
      },
    },
  },
  plugins: [],
};

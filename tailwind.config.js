/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        primaryBlue: "#175CFF",
        primaryGray: "#E3EAFB",
        primaryGray50: "#F9FAFB",
        primaryGray100: "#F0F2F5",
        primaryGray300: "#D0D5DD",
        primaryGray400: "#98A2B3",
        primaryGray500: "#667185",
        primaryGray600: "#475367",
        primaryGray700: "#344054",
        primaryGray800: "#1D2739",
        primaryGray900: "#101928",
        borderGray: "#E4E7EC",
        primaryRed: "#D42620",
        primaryOrange: "#FFECE5",
        orange500: "#F56630",
        sideBarGray: "#F7F9FC",
      },
    },
  },
  plugins: [],
};

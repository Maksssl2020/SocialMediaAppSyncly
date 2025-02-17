/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },

    extend: {
      colors: {
        "custom-white-100": "#F8F9FC",
        "custom-white-200": "#B3B4BC",
        "custom-black-100": "#1C1C25",
        "custom-black-200": "#12131A",
        "custom-gray-100": "#22222B",
        "custom-gray-200": "#AEAFB8",
        "custom-gray-300": "#282932",
        "custom-gray-400": "#84858E",
        "custom-gray-500": "#31323B",
        "custom-gray-600": "#292A33",
        "custom-violet-200": "#373E57",
        "custom-violet-300": "#151728",
        "custom-blue-100": "#116CD6",
      },
    },
  },
  plugins: [],
};

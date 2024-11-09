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
        "custom-black-100": "#1B1C25",
        "custom-black-200": "#12131A",
        "custom-gray-100": "#22222B",
        "custom-violet-200": "#373E57",
        "custom-violet-300": "#151728",
      },
    },
  },
  plugins: [],
};

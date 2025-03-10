/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "highlight-color": "#283618",
          "background-color": "FEFAE0",
          "green-light": "#606C38",
          "orange-light": "#DDA15E",
          "orange-dark": "#BC6C25",
        },
      },
    },
    plugins: [],
  };
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2a180fff',
        secondary: '#003c8bff',
      },
    },
  },
  plugins: [],
};

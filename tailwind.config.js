/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3c78a9',           // change to WoodMart primary color
        secondary: '#f5a623',         // change to WoodMart secondary
        'secondary-dark': '#d97706'   // change to WoodMart dark secondary
      }
    },
  },
  plugins: [],
}

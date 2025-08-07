/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      neon: "#B3FF00", // Or your exact neon green
    },
    scale: {
      '102': '1.02',
      '105': '1.05',
    }
  },
  },
  plugins: [],
}

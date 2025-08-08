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
    },
    animation: {
      'slide-up': 'slideUp 0.8s ease-out forwards',
    },
    keyframes: {
      slideUp: {
        '0%': { transform: 'translateY(100%)', opacity: 0 },
        '100%': { transform: 'translateY(0%)', opacity: 1 },
      },
    },
  },
  },
  plugins: [],
}

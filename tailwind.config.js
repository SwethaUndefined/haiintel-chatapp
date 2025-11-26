/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  safelist: [
    // dynamic gradient classes used in stats
    "from-emerald-500",
    "to-green-600",
    "from-blue-500",
    "to-cyan-600",
    "from-amber-500",
    "to-orange-600",
    "from-red-500",
    "to-pink-600",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};

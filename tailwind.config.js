/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pretendard': ['Pretendard Variable', 'system-ui', 'sans-serif'],
      },
      colors: {
        'landas-yellow': '#FBBF24',
      },
    },
  },
  plugins: [],
};

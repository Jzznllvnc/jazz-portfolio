/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abel: ['var(--font-abel)', 'sans-serif'],
        righteous: ['var(--font-righteous)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

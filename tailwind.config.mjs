/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FDFBF7',
          100: '#F7F3EB',
          200: '#EDE7D9',
          300: '#DDD4C0',
          400: '#C4B89E',
          500: '#A89878',
          600: '#8B7D65',
          700: '#6E6350',
          800: '#4A4235',
          900: '#2C2720',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

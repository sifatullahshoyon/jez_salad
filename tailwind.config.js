/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#FB9333',
        'secondary-color': '#828282',
        'dark-two-color': '#585858',
        'accent-color': '#575757',
        'neutral-color': '#F3F3F3',
        'base-color': '#29B170',
      },
    },
  },
  plugins: [],
};

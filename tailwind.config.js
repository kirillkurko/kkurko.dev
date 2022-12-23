module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Red Hat Text', 'sans-serif'],
        'secondary': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

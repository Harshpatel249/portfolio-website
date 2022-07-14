/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: theme => ({
        ...theme("colors"),
        "navy-900": "#0A192F",
        "navy-600": "#112240",
        "navy-200": "#233554",
        "custom-slate-900": "#8892B0",
        "custom-slate-600": "#A8B2D1",
        "custom-slate-200": "#A8B2D1",
        "white-blue": "#E6F1FF",
        "custom-green-500": "#64FFDA",
      }),
    },
  },
  plugins: [],
}

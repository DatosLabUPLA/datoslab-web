import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Roboto', 'sans-serif'],
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}
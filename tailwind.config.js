/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "base-100": "#FFFFFF", 
        "text": "#FFFFFF",
      },
      backgroundImage: {
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        sans: ["Roboto Mono", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
      animation: {
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
    screens: {
      xs: "480px", 
      sm: "768px", 
      md: "1060px", 
    },
  },
  plugins: [require("daisyui")], 
  daisyui: {
    themes: [
      "corporate",
      "dark",
      "night",
      "light",
      "emerald",
      "current",
      "synthwave",
      "default", 
      "retro",
      "aqua",
      "class",
      "nord",
      "dim",
      {
        mytheme: {
          "primary": "#FF6B66", 
          "secondary": "#FFC132", 
          "accent": "#FFCD5B", 
          "neutral": "#3D4451", 
          "base-100": "#FFFFFF", 
          "info": "#3ABFF8", 
          "success": "#36D399", 
          "warning": "#FBBD23", 
          "error": "#F87272", 
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "", 
    darkTheme: "dark",
    darkMode: "class", 
  },
};



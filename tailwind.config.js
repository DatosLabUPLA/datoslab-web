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
        'slide-up': 'slideUp 0.6s ease-out', // Duración ajustada
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
    screens: {
      xs: "480px", // Define una pantalla extra pequeña si es necesario
      sm: "768px", // Tamaño de pantalla para tablets
      md: "1060px", // Tamaño para pantallas medianas
    },
  },
  plugins: [require("daisyui")], // DaisyUI para usar temas de interfaz
  daisyui: {
    themes: [
      "corporate",
      "dark",
      "light",
      "emerald",
      "current",
      "synthwave",
      "default", // Tema por defecto
      "retro",
      "aqua",
      "class",
      "nord",
      "dim",
      {
        mytheme: {
          "primary": "#FF6B66", // Naranja rojizo
          "secondary": "#FFC132", // Amarillo
          "accent": "#FFCD5B", // Naranja más suave
          "neutral": "#3D4451", // Gris oscuro neutro
          "base-100": "#FFFFFF", // Fondo blanco
          "info": "#3ABFF8", // Azul claro
          "success": "#36D399", // Verde éxito
          "warning": "#FBBD23", // Amarillo alerta
          "error": "#F87272", // Rojo de error
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "", // Si no necesitas prefijos, déjalo vacío
    darkTheme: "dark", // Usar tema oscuro si se activa
    darkMode: "class", // Activar dark mode por clase
  },
};



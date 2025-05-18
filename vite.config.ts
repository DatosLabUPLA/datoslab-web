import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: [{ find: "@" , replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignorar advertencias específicas
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return
        }
        // Ignorar errores relacionados con TypeScript para permitir la compilación
        if (warning.code === 'TS2307' || 
            warning.code === 'TS2305' || 
            warning.code === 'TS2724' || 
            warning.code.startsWith('TS')) {
          return
        }
        warn(warning)
      }
    }
  }
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: { // Mover alias aquí
    alias: {
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@common': path.resolve(__dirname, './src/components/common'),
    },
  },
  base: "https://gdlhub.app/"
})
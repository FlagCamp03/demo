import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
      '/items': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
      '/chatRooms': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
      '/users': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: '../src/main/resources/static',
    emptyOutDir: true,
  }
}) 
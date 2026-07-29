import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['kauanvinicius.onrender.com']
  },
  preview: {
    allowedHosts: ['kauanvinicius.onrender.com']
  }
})

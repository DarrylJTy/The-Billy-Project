import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://the-billy-project-deploy-1.onrender.com'
    }
  },
  plugins: [react()],
  define: {
    'process.env.VITE_SERVER_URL':JSON.stringify(process.env.VITE_SERVER_URL)
  }
})

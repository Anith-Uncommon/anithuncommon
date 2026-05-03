import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages project site base path (only for production builds)
  base: process.env.NODE_ENV === 'production' ? '/anithuncommon/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // This ensures imports like '@/components/...' map correctly to './src/...'
      '@': path.resolve(__dirname, './src'),
    },
  },
})
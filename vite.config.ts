import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative paths for assets so the site works on any domain or subfolder
  base: './', 
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
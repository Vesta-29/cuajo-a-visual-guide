import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // IMPORTANT: This must match your GitHub repository name EXACTLY (including capitalization)
  // If your repo is at https://github.com/username/cuajo_-a-visual-guide
  // then base should be '/cuajo_-a-visual-guide/'
  base: '/cuajo_-a-visual-guide/', 
})

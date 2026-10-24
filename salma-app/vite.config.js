import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/projects/salma/',
  build: {
    outDir: '../salma',
    emptyOutDir: true,
  },
})

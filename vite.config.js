import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages publica o projeto em /<nome-do-repositorio>/
export default defineConfig({
  base: '/msb-microscopy-library/',
  plugins: [react()],
})

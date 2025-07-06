import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/e-plantShopping/", // ✅ must match repo name exactly!
  plugins: [react()],
})

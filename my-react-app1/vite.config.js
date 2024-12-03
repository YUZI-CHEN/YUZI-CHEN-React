import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  bass:process.env.NODE_ENV==='production'?'/https://github.com/YUZI-CHEN/YUZI-CHEN-React/':'/',

  plugins: [react()],
})

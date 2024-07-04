import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/happy-coaching-react-typescript-redux', // встановлює відносний шлях
  build: {
    outDir: 'dist', // вихідна директорія
    assetsDir: 'assets', // директорія для активів (CSS, JS)
  }
})


import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,  // Глобальные функции Vitest (test, expect и т. д.)
    environment: 'jsdom',  // Если нужен браузерный API (для React Testing)
    setupFiles: './src/setupTests.ts',
  },
})
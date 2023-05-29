import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
module.exports = {
  build: {
    rollupOptions: {
      // Skip emitting error on import when using external packages
      onwarn: (warning, rollupWarn) => {
        if (warning.code !== 'MISSING_NAME') {
          rollupWarn(warning);
        }
      },
    },
  },
};

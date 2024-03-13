import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // / Config Global Scss Variable */
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/index.scss";
        `,
      },
    },
  },
  //alias
  resolve: {
    alias: {
      '@': '/src',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@layouts': '/src/layouts',
    },
  },
});

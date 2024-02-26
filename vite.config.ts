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
      // "src/*": ["src/*"],
      // "@pages/*": ["src/pages/*"],
      // "@components/*": ["src/components/*"],
      // "@hooks/*": ["src/hooks/*"],
      // "@utils/*": ["src/utils/*"],
      // "@assets/*": ["src/assets/*"],
      // "@routes/*": ["src/routes/*"],
      // "@apis/*": ["src/apis/*"],
      // "@layouts/*": ["src/layouts/*"]
      // src: '/src',
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
      '@routes': '/src/routes',
      '@apis': '/src/apis',
      '@layouts': '/src/layouts',
    },
  },
});

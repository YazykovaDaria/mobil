import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({


  // plugins: [ ],
  resolve: {
    alias: {
      '@public': resolve(__dirname, './public'),
      '@modules': resolve(__dirname, './src/modules'),
      '@lib': resolve(__dirname, './src/lib'),
      '@locales': resolve(__dirname, './src/locales'),
    },
  },
  server: {
    open: true,
  },
});

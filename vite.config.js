import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Ваш основной файл
        second: resolve(__dirname, 'car.html'), // Второй файл HTML
      },
    },
  },
  // publicDir: resolve(__dirname, 'src'),
});

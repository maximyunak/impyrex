import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Ваш основной файл
        car: resolve(__dirname, 'car.html'), // Второй файл HTML
        about: resolve(__dirname, 'about.html'), // Второй файл HTML
        business: resolve(__dirname, 'business.html'), // Второй файл HTML
        contacts: resolve(__dirname, 'contacts.html'), // Второй файл HTML
        license: resolve(__dirname, 'license.html'), // Второй файл HTML
        partner: resolve(__dirname, 'partner.html'), // Второй файл HTML
      },
    },
  },
  // publicDir: resolve(__dirname, 'src'),
});

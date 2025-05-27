import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "https://shaneaous-emon.github.io/arise-research-center",
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

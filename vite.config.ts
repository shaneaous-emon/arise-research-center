import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/arise-research-center/",
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

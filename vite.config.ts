import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sovereign-cloud/', // 👈 this is required for GitHub Pages!
  plugins: [react()]
});


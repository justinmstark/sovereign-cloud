import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sovereign-cloud/',  // ← Required for GitHub Pages path resolution
  plugins: [react()],
});

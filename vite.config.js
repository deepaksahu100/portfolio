import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion', 'gsap'],
          scroll: ['lenis'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          icons: ['react-icons'],
        },
      },
    },
  },
});

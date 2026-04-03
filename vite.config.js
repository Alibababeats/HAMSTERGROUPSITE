import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        personas: resolve(__dirname, 'personas.html'),
        affinity: resolve(__dirname, 'affinity.html'),
        designThinking: resolve(__dirname, 'design-thinking.html'),
      },
    },
  },
});

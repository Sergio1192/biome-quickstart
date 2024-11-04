import { biomePlugin } from '@pbr1111/vite-plugin-biome';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    biomePlugin({
      errorOnWarnings: false,
      args: '--diagnostic-level=error --reporter=summary --no-errors-on-unmatched',
    }),
  ],
});

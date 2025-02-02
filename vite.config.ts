import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { readFileSync } from 'fs';

// Read the version from package.json
const packageJson = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'));
const appVersion = packageJson.version;

export default defineConfig({
  define: {
    // __APP_VERSION__: JSON.stringify(packageJson.version),
    __APP_VERSION__: JSON.stringify(appVersion),
    __VITE_ENVIRONMENT__ : JSON.stringify(process.env.NODE_ENV),
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
});

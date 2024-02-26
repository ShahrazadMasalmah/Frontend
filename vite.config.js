import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
   plugins: [
    process.env.MODE !== 'production' ? react({
      jsxRuntime: 'classic',
    }) : react(),
    svgLoader(),
  ],
})

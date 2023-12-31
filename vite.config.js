import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@components": "/src/components",
      "@routes": "/src/routes",
      "@hooks": "/src/hooks",
      "@assets": "/src/assets",
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// LightningCSS Disabled for Render Deployment
export default defineConfig({
  css: {
    transformer: "none"
  },
  plugins: [
    react(),
    tailwindcss()
  ],
});

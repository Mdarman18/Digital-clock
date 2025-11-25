import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  css: {
    transformer: "postcss"   // 🔥 LightningCSS disable (main fix)
  },
  plugins: [
    react(),
    tailwindcss()
  ],
});

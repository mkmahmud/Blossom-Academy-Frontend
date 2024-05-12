import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // @ts-ignore
    tailwindcss("./tailwind.config.js"),
  ],
  server: {
    port: 3000,
  },
});

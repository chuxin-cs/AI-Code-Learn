import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 这里就是需要配置resolve里的别名
      "@": path.join(__dirname, "./src"),
      "#": path.join(__dirname, "./types"),
    },
  },
  server: {
    port: 3000,
  },
});

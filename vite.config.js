import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";
// https://vitejs.dev/config/
export default defineConfig({
  base: new URL(pkg.homepage).pathname,
  server: {
    port: 3006,
  },
  esbuild: {
    drop: process.env.NODE_ENV == "development" ? [] : ["console", "debugger"],
  },
  plugins: [react()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// GitHub Pages serves this project at /stunning-sdet-showcase/.
// Use "/" locally so the Vite development server continues to work normally.
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/stunning-sdet-showcase/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

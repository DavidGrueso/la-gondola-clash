import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Simular __dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

if (!__dirname) {
  throw new Error("Failed to resolve __dirname. Ensure import.meta.url is supported in your environment.");
}

// Validar rutas antes de resolver
function safeResolve(...segments: string[]): string {
  if (segments.some((segment) => !segment)) {
    throw new Error("Invalid path segment detected. Check your configuration.");
  }
  return path.resolve(...segments);
}

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
  ],
  resolve: {
    alias: {
      "@": safeResolve(__dirname, "client", "src"),
      "@shared": safeResolve(__dirname, "shared"),
      "@assets": safeResolve(__dirname, "attached_assets"),
    },
  },
  root: safeResolve(__dirname, "client"),
  build: {
    outDir: safeResolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

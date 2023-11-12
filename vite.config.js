import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  esbuild: {
    target: "es2015",
    include: /\.(ts|jsx|tsx)$/,
  },
  build: {
    target: "es2015",
    cssTarget: "chrome61",
  },
  plugins: [
    react(),
    legacy({
      targets: [
        "chrome >= 64",
        "edge >= 79",
        "safari >= 11.1",
        "firefox >= 67",
      ],
      renderLegacyChunks: false,
      modernPolyfills: true,
    }),
  ],
});

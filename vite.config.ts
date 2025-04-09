import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import uiPro from "@nuxt/ui-pro/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag === "mini-app";
          },
        },
      },
    }),
    uiPro({
      ui: {
        colors: {
          primary: "green",
          neutral: "slate",
        },
      },
    }),
  ],

  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "./src/lib/index.ts"),
      name: "MiniApp",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: [],
    },
  },
});

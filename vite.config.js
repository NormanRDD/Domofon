import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
            @import "@/assets/scss/media.scss";
            @import "@/assets/global.scss";
            @import "@/assets/scss/header.scss";
          `,
      },
    },
  },
});

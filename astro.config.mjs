// @ts-check
import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: "file",
  },
  integrations: [react(), pagefind()],
});

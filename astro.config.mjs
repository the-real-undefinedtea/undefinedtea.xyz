import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [svelte(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap()],
  site: 'https://undefinedtea.dev',
  outDir: './build'
});

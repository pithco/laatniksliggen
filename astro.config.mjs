import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://laatniksliggen.nl',
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
});

import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://watanabe3tipapa.github.io',
  base: '/template-astro-vp/',
  integrations: [vue()],
  vite: {},
});
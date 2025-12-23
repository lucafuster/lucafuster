import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Remplace par ton URL GitHub finale
  site: 'https://lucafuster.github.io',
  base: '/lucafuster',
  integrations: [tailwind()],
});
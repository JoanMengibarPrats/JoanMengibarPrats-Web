import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://joanmengibarprats.com',

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer']
        }
      ]
    ]
  },

  integrations: [sitemap()]
});
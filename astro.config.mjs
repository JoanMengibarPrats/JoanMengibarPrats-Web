import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// En Vercel usamos el dominio real de producción para que los meta tags
// (og:image, canonical, sitemap) apunten al dominio correcto en cada despliegue.
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://joanmengibarprats.com';

export default defineConfig({
  site,

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

  integrations: [sitemap(), mdx()]
});
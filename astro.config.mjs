// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links'; // 1. Importamos el plugin

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  // 2. Configuramos el procesador de Markdown
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          // Le decimos que abra los enlaces en una pestaña nueva
          target: '_blank',
          // Añadimos seguridad para evitar vulnerabilidades al abrir nuevas pestañas
          rel: ['noopener', 'noreferrer'] 
        }
      ]
    ]
  }
});
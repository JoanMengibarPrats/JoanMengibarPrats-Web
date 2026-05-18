Hey! this is my webpage  

---

## Markdown Datasheet  

### Crear un nuevo post  

Los posts viven en `src/content/blog/{idioma}/{slug}/index.md`.  
Las imágenes del post van en la misma carpeta.  

Estructura:  
```
src/content/blog/
├── es/
│   └── mi-post/
│       ├── index.md
│       ├── foto1.webp
│       └── foto2.webp
├── en/
│   └── mi-post/
│       └── index.md
└── va/
    └── mi-post/
        └── index.md
```

El slug (nombre de carpeta) define la URL final:  
`/blog/mi-post` · `/en/blog/mi-post` · `/va/blog/mi-post`  

---

### Frontmatter  

```yaml
---
title: "Titulo del post"
description: "Descripcion corta para SEO y previews"
pubDate: 2026-05-18
tags: ["Hardware Hacking", "IoT", "Firmware"]
draft: false
---
```

| Campo | Obligatorio | Tipo | Notas |
|-------|:-----------:|------|-------|
| `title` | SI | string | Titulo del post |
| `description` | SI | string | Aparece en listings, OG tags y SEO |
| `pubDate` | SI | date | `YYYY-MM-DD`. Se ordena por fecha descendente |
| `tags` | NO | string[] | Se muestran como `#tag` en verde en la cabecera |
| `draft` | NO | boolean | `true` lo oculta del listado (default: `false`) |

---

### Elementos Markdown y como se renderizan  

Todos los estilos se aplican dentro del contenedor `.minimal-prose`.  
Fuente base: **Fira Code** (mono). Verde acento: `#22c55e`.  

```markdown
## Heading 2
### Heading 3
```

| Elemento | Renderizado |
|----------|------------|
| `## h2` | Syncopate bold, blanco, uppercase, margen superior 5rem. Aparece en el TOC lateral |
| `### h3` | Blanco, 1.25rem, margen 3.5rem. Aparece en el TOC lateral con indentado |
| `**bold**` | Blanco `#f4f4f5`, peso 700 |
| `inline code` | Verde `#4ade80`, 0.85em |
| `[link](url)` | Borde inferior verde, color zinc-200. Hover verde. Links externos → `target="_blank"` |
| `> blockquote` | Borde izquierdo verde 1px, texto italic zinc-500 |
| `- list item` | Sin bullet nativo, usa em-dash `—` verde como marcador |
| `1. ordered` | Numeros `decimal-leading-zero` con marcador verde Syncopate |

**Bloques de codigo:**  
````markdown
```python
print("hola")
```
````  
→ Fondo transparente, borde `#27272a`, padding 1.5rem, texto `#d1d5db`.  

**Imagenes:**  
```markdown
![alt](./foto.webp)
```  
→ Ancho completo, margin 3rem. Escala de grises por defecto, color al hacer hover.  
Usa WebP siempre que puedas. Las imagenes en la carpeta del post las optimiza Astro automaticamente.  

**Tabla de contenidos (TOC):**  
Se genera automaticamente a partir de los `h2` y `h3`. Aparece en la sidebar izquierda en desktop.  
Los `h3` aparecen indentados. Un indicador verde marca la seccion activa al hacer scroll.  

---

### Comandos  

| Comando | Que hace |
|---------|----------|
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Build de produccion en `dist/` |
| `npm run preview` | Previsualiza el build local |

---

### Cosas a recordar  

- El idioma por defecto es **es** (sin prefijo en la URL).  
- Las traducciones de UI estan en `src/i18n/ui.ts`.  
- Los posts sin cuerpo no se rompen, pero no muestran contenido.  
- Las imagenes se ponen en la misma carpeta que el `index.md`, no en `public/`.  
- Para imagenes externas usa la URL directa en `![]()`.  

Hey! This is my personal portfolio and blog.

---

## Markdown Datasheet

### Creating a new post

Posts live in `src/content/blog/{slug}/{lang}.md`.  
Images live alongside the markdown files — one copy shared across all languages.

Structure:
```
src/content/blog/
├── firmware_extraction/
│   ├── es.md           ← Spanish
│   ├── en.md           ← English
│   ├── va.md           ← Valencian
│   ├── foto1.webp      ← Shared across all translations
│   └── foto2.webp
└── another-post/
    ├── va.md
    └── image.webp
```

The slug (folder name) defines the final URL:  
`/blog/firmware_extraction` · `/en/blog/firmware_extraction` · `/va/blog/firmware_extraction`

Images are shared — no need to duplicate them per language.

---

### Frontmatter

```yaml
---
title: "Post title"
description: "Short description for SEO and previews"
pubDate: 2026-05-18
tags: ["Hardware Hacking", "IoT", "Firmware"]
draft: false
---
```

| Field | Required | Type | Notes |
|-------|:--------:|------|-------|
| `title` | YES | string | Post title |
| `description` | YES | string | Shown in listings, OG tags and SEO |
| `pubDate` | YES | date | `YYYY-MM-DD`. Sorted descending by date |
| `tags` | NO | string[] | Displayed as `#tag` in green on the header |
| `draft` | NO | boolean | `true` hides it from listings (default: `false`) |

---

### Markdown elements and how they render

All styles are applied inside the `.minimal-prose` container.  
Base font: **Fira Code** (mono). Accent green: `#22c55e`.

```markdown
## Heading 2
### Heading 3
```

| Element | Rendered as |
|---------|-------------|
| `## h2` | Syncopate bold, white, uppercase, 5rem top margin. Appears in the TOC sidebar |
| `### h3` | White, 1.25rem, 3.5rem margin. Appears in the TOC sidebar indented |
| `**bold**` | White `#f4f4f5`, weight 700 |
| `` `inline code` `` | Green `#4ade80`, 0.85em |
| `[link](url)` | Green bottom border, zinc-200 text. Hover turns green. External links → `target="_blank"` |
| `> blockquote` | Green left border 1px, italic zinc-500 text |
| `- list item` | No native bullet, uses green em-dash `—` as marker |
| `1. ordered` | `decimal-leading-zero` with green Syncopate marker |

**Code blocks:**
````markdown
```python
print("hello")
```
````
→ Transparent background, `#27272a` border, 1.5rem padding, `#d1d5db` text.

**Images:**
```markdown
![alt text](foto.webp)
```
→ Full width, 3rem margin. Grayscale by default, colour on hover.  
Use WebP whenever possible. Images in the post folder are automatically optimised by Astro.

**Table of contents (TOC):**
Auto-generated from `h2` and `h3` headings. Shown on the left sidebar on desktop.  
`h3` headings are indented. A green indicator tracks the active section on scroll.

---

### Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Production build in `dist/` |
| `npm run preview` | Preview the local build |

---

### Things to remember

- The default language is **es** (no URL prefix).
- UI translations live in `src/i18n/ui.ts`.
- Posts without body content do not break, but render no content.
- Images go in the slug folder alongside the `.md` files, not in `public/`. One copy per post, shared across languages.
- For external images use the direct URL in `![]()`.

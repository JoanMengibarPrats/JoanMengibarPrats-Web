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
La inteligencia artificial es muy perezosa: si le das una misión genérica recibirás un resultado muy cutre, pero si le das un prompt muy concreto puede hacer maravillas. Por eso, creé la siguiente estrategia: en Astro se separan las partes de la página web en componentes; pues la idea es dividir estos en subcomponentes que cumplan un objetivo solo, a menos que no sea posible.

Por ejemplo, en el componente blog de la página principal, he separado la lógica de la animación de la lava con la de la lista del blog. ¿Por qué? La animación de la lava nunca más la voy a modificar; si sigo escalando el código, a la hora de hacer copia y pega en la IA puede modificar alguna parte que no quieras, ya que son muy comunes las alucinaciones en códigos grandes.

```text
📁 src/
├── 📁 components/
│   ├── 📁 blog/
│   │   ├── 📄 FeaturedBlogs.astro
│   │   └── 📄 LavaLampBackground.astro
```

![Ejemplo](./EjemploBlog.webp)

### Un toque personal

Siempre me han fascinado las animaciones pixel art de los juegos antiguos, por eso me decidí a crear una para mi página web; así es como nació el componente "SamoyedGame.astro". Este consiste en una animación pixel art de mi perra. ¿Cómo la he hecho? Primero necesitas unas imágenes reales para crear los bocetos pixel art; una vez los tienes, generas un vídeo de la perra realizando la acción (en mi caso generé 3). Luego divides ese vídeo en frames y mediante Nano Banana creas los frames pixel art; una vez los tienes, los juntas en piskel.com para crear el spritesheet.

![SamoyedGame](./SamoyedGame.webp)


## 3. Optimización

La métrica que he utilizado para medir el rendimiento de la página web es el Lighthouse de Chrome; esta te da una puntuación sobre 100 de la "Performance", "Accessibility", "Best Practices" y "SEO". Mi objetivo era una puntuación mayor a 90 en la "Performance"; antes de ponerme a optimizar la página web, esta era la puntuación:

![Lighthouse](./Lighthouse.webp)

Una vez ya tienes el código acabado, es tan simple como revisarlo con IA con un prompt de optimización.

## 4. Conclusión

El vibe coding está muy bien para proyectos personales que no requieren una programación muy seria; sin embargo, a día de hoy, está muy lejos de sustituir a un programador. La cantidad de alucinaciones que tiene la inteligencia artificial es increíble, pero lo peor es que están diseñadas para disimularlas: te mienten en la cara. Al fin y al cabo estamos viviendo una carrera de empresas por dominar un nuevo sector, por lo que "todo vale" con tal de conseguir clientes, que a su vez entreguen datos para entrenar el siguiente modelo.

Si esto fuera un proyecto más grande, se me haría imposible de mantener simplemente con IA sin unos conocimientos de arquitectura web. Esto como tal no es muy grave, pero he leído que muchas empresas están utilizando IA para realizar auditorías de seguridad; espero que las estén utilizando como herramientas junto con un experto formado, de lo contrario, las alucinaciones que he vivido programando esto en un entorno crítico podrían ser fatales.

[GitHub de la página web](https://github.com/JoanMengibarPrats/JoanMengibarPrats-Web)
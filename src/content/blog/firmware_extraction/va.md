---
title: "Extracció de Firmware"
description: "Com extraure el firmware d'un dispositiu mitjançant el lector CH341A"
pubDate: 2026-04-28
tags: ["Hardware Hacking", "IoT", "Extracció de Firmware"]
---
## Extracció de firmware
En aquesta guia aprendràs el procés crític per a extraure la informació d'un xip Flash de manera adequada. Analitzarem els tipus de xips més comuns en l'ecosistema IoT, on trobar-los i, el més important, com emprar degudament el CH341A. Aquest programador és l'opció low-cost per excel·lència. A través de la meua experiència personal, compartiré amb tu els trucs i precaucions necessàries per a convertir esta ferramenta barata en un aliat professional.

### Quins xips podem trobar-nos?

L'ecosistema IoT empra una gran varietat de memòries flash. Les més comunes i barates són les memòries **SOIC-8**; per tant, són les més acceptades pel lector **CH341A**. Estes es poden llegir amb la pinça SOIC o amb l'adaptador per a este tipus de memòries.

Després serà més comú trobar-nos memòries **WSON-8** de 8x6 o 5x6 en dispositius IoT que necessiten un poc més de memòria. Per a este tipus de memòries necessitarem adaptadors específics com el de la imatge de baix; a més, este tipus de memòries solen donar bastants problemes en lectures amb el CH341A. Per a este tipus de memòria ja és recomanable invertir en un lector XGecu T48, que és la gamma baixa d'esta marca per uns 60€ a dia de hui, però este no suporta memòries eMMC; per a això necessitaries ja el T56.

![Foto1](Foto1.webp)

Per a un nivell més avançat on ens trobem amb memòries eMMC o MCU recomane el lector XGecu T76, és la ferramenta professional del sector i algunes vegades ens trobem aquest tipus de xips. Les memòries NAND, per com estan dissenyades, requerixen que el processador enfronte errors, blocs danyats, etc. Una eMMC és una memòria NAND amb un controlador integrat per a delegar la tasca que abans gestionava el processador; aquest xip és autònom en este sentit, per això és més comú trobar-lo en dispositius complexos com: Smart Hubs, Pantalles Intel·ligents, quadres de comandaments digitals i sistemes d'entreteniment, Gateways Industrials...

![Foto2](Foto2.webp)

## Etapes de l'extracció del firmware

### Reconeixement

La primera etapa de l'extracció del firmware és el reconeixement del model del xip, açò es realitza llegint la part superior del xip. En els xips comercials és molt senzill trobar el datasheet del model en específic, d'altra banda, hi ha empreses que emprenen xips privats en els quals és molt complicat trobar esta especificació.

En este exemple s'analitzarà la memòria flash xip **WINBOND W25X40CL**, un model molt comú de memòria amb un datasheet accessible.

En este podem trobar l'arquitectura, el diagrama de blocs, especificacions tècniques... Una de les coses més importants és la configuració de pins del xip.

![Foto3](Foto3.webp)

També és important identificar el **voltatge** que suporta el xip per a després configurar el lector; la majoria són de 3.3V, però també hi ha de 1.8V i de 5V.

### Connexió del xip

Per a realitzar correctament la lectura del xip cal continuar el circuit electrònic de la memòria principal, per això **és molt important fixar-se en el punt del xip**; este indicarà la connexió /CS. Seguint la connexió del CS és molt senzill col·locar-lo bé.

![Foto4](Foto4.webp)

La pinça SOIC-8 empra el mateix tipus de connexió; no obstant això, en alguns models he hagut de desconnectar el cable del VCC ja que em donava errors de connexió, donant energia al xip mitjançant la càrrega normal de la placa base, en este cas era el cable normal d'energia de la càmera, açò amb una placa base es pot fer de forma senzilla.

### Programari de lectura

En el repositori oficial de [CH341A](https://github.com/YTEC-info/CH341A-Softwares) trobem els programaris compatibles amb esta ferramenta. En este repositori trobaràs una gamma variada de programari per a diferents SO compatibles amb molts xips SOIC-8. Per a memòries WSON-8 he tingut bastants problemes emprant este lector, per la qual cosa recomanaria el lector T56 amb el seu programari, ja que és el millor del mercat, però és una ferramenta professional bastant cara.

### Consells

Personalment recomane emprar la metodologia de desoldar el xip; encara que siga més complexa, és una lectura molt més neta. La pinça, per a llegir el xip, introduïx voltatge en este per a activar-lo, la qual cosa pot resultar en activar altres parts de la placa base i embrutar la còpia extreta.

Una altra bona pràctica és la de realitzar diverses lectures del firmware per a després comparar els hashes de les diferents imatges; açò ens garantix que hi ha hagut una bona lectura. Si per algun motiu es va a moure la imatge a una altra màquina, una vegada realitzat el trasllat recomane comprovar el hash de nou per a garantir la cadena de custòdia de la imatge original; un sol bit contaminat en el firmware ens pot complicar moltíssim la vida.

Esta és una de les formes més comunes però no l'única, el firmware es pot extraure des de la interfície d'usuari UART o JTAG, a vegades des de la pròpia pàgina web de suport, altres des de la interfície web del dispositiu, interceptant actualitzacions... Com veus el límit està en la creativitat de cadascú per a aconseguir-ho.

També advertir-te que moltes vegades el contingut del firmware està xifrat, sobretot en dispositius crítics com càmeres de seguretat o datàfons. No obstant això, en la meua opinió, la seguretat per foscor revela que si sortegem esta barrera les probabilitats de trobar majors vulnerabilitats en el codi augmenten exponencialment.

## Resum del procediment

1. Reconeixement del xip.
2. Desoldar el xip, realitzar neteja d'estany dels pads i repassar amb alcohol isopropílic.
3. Col·locar el xip en el lector, fixant-nos bé en la marca del /CS.
4. Realitzar la còpia amb el nostre programari preferit, realitzar dos o tres còpies per a comprovar l'èxit de la lectura.

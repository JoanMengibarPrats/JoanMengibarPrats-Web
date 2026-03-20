---
title: "crear una pagina web"
description: "Cómo interceptar tráfico en dispositivos del Internet de las Cosas sin levantar sospechas en la red local."
pubDate: 2026-03-09
tags: ["IoT", "Hacking", "MITM", "Redes"]
---

El Internet de las Cosas (IoT) ha llenado nuestros hogares de dispositivos "inteligentes", pero a menudo, su seguridad es todo lo contrario. Bombillas, enchufes y cámaras se comunican constantemente, muchas veces enviando datos sensibles en texto plano. En este artículo, exploraremos cómo auditar esta comunicación utilizando técnicas de Man-in-the-Middle (MITM).

## 1. La superficie de ataque

Cuando hablamos de IoT, la superficie de ataque es enorme. Los fabricantes priorizan la facilidad de uso y el bajo coste sobre la seguridad robusta. 

### 1.1 Dispositivos sin cifrar
Es sorprendentemente común encontrar cámaras IP baratas que envían sus credenciales a través de peticiones HTTP sin cifrar (`http://`) en la red local. Si un atacante ya tiene acceso a la red Wi-Fi, interceptar estas comunicaciones es trivial.

### 1.2 Actualizaciones por aire (OTA) inseguras
Otro vector crítico son las actualizaciones de firmware. Si el dispositivo descarga el nuevo firmware desde un servidor HTTP sin validar firmas criptográficas, un ataque MITM podría inyectar código malicioso directamente en el núcleo del dispositivo.

## 2. Diseño Web

Personalmente esta ha sido mi parte favorita, en el sigiente [enlace](https://www.awwwards.com/websites/gsap/) tienes una recopilación de páginas web con gsap. En esa página están los mejores programadores, ahí la gente está loca, en esta me encontré con la página web de [WHITEOUT_WORKS](https://www.whiteoutworks.com/), en el momento que la vi me imaginé mi página web al momento, esto para gente amateur en diseño es una maravilla.

> **Advertencia ética:** Las técnicas descritas a continuación solo deben utilizarse en dispositivos de tu propiedad o en redes donde tengas autorización explícita para realizar auditorías de seguridad.

### 2.1 Configuración de ARP Spoofing
El primer paso para colocarnos en medio de la comunicación (MITM) es engañar a la puerta de enlace (router) y al dispositivo IoT. Usaremos ARP Spoofing para decirle al dispositivo IoT "Yo soy el router" y al router "Yo soy el dispositivo IoT".

Podemos hacerlo fácilmente con herramientas como `arpspoof` o `bettercap`. En una terminal, ejecutaríamos algo similar a esto:

```bash
# Habilitar el reenvío de IP para no dejar sin internet al dispositivo
echo 1 > /proc/sys/net/ipv4/ip_forward

# Engañar al dispositivo (Target IP)
arpspoof -i eth0 -t 192.168.1.50 192.168.1.1

# Engañar al router (Gateway IP)
arpspoof -i eth0 -t 192.168.1.1 192.168.1.50
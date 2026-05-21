---
title: "Firmware Extraction"
description: "How to extract firmware from a device using the CH341A programmer"
pubDate: 2026-04-28
tags: ["Hardware Hacking", "IoT", "Firmware Extraction"]
---
## Firmware Extraction
In this guide you will learn the critical process to properly extract information from a Flash chip. We will analyse the most common chip types in the IoT ecosystem, where to find them and, most importantly, how to properly use the CH341A. This programmer is the low-cost option par excellence. Through my personal experience, I will share the tricks and precautions needed to turn this inexpensive tool into a professional ally.

### What chips can we find?

The IoT ecosystem uses a wide variety of flash memories. The most common and cheapest are **SOIC-8** memories; therefore, they are the most supported by the **CH341A** reader. These can be read with the SOIC clip or with the adapter for this type of memory.

Then it will be more common to find **WSON-8** memories of 8x6 or 5x6 in IoT devices that need a bit more memory. For this type of memory we will need specific adapters such as the one in the image below; in addition, this type of memory usually causes quite a few reading problems with the CH341A. For this type of memory it is already advisable to invest in an XGecu T48 reader, which is the entry-level model of this brand for around €60 as of today, but this one does not support eMMC memories; for that you would need the T56.

![Foto1](Foto1.webp)

For a more advanced level where we find eMMC or MCU memories I recommend the XGecu T76 reader, it is the professional tool in the sector and sometimes we come across this type of chips. NAND memories, by design, require the processor to deal with errors, bad blocks, etc. An eMMC is a NAND memory with an integrated controller to offload the task that the processor previously managed; this chip is autonomous in this sense, which is why it is more common to find it in complex devices such as: Smart Hubs, Smart Displays, digital dashboards and entertainment systems, Industrial Gateways...

![Foto2](Foto2.webp)

## Stages of firmware extraction

### Identification

The first stage of firmware extraction is identifying the chip model; this is done by reading the top of the chip. With commercial chips it is very easy to find the datasheet for the specific model; on the other hand, there are companies that use proprietary chips for which it is very difficult to find this specification.

In this example we will analyse the **WINBOND W25X40CL** flash memory chip, a very common memory model with an accessible datasheet.

In this datasheet we can find the architecture, the block diagram, technical specifications... One of the most important things is the chip's pin configuration.

![Foto3](Foto3.webp)

It is also important to identify the **voltage** that the chip supports in order to later configure the reader; most are 3.3V, but there are also 1.8V and 5V versions.

### Chip connection

To correctly read the chip you must complete the electronic circuit of the main memory, which is why **it is very important to pay attention to the chip's dot**; this indicates the /CS connection. By following the CS connection it is very easy to place it correctly.

![Foto4](Foto4.webp)

The SOIC-8 clip uses the same type of connection; however, on some models I have had to disconnect the VCC cable as it gave me connection errors, powering the chip through the normal charge of the motherboard, in this case it was the normal camera power cable; this can be done easily with a motherboard.

### Reading software

In the official [CH341A](https://github.com/YTEC-info/CH341A-Softwares) repository we find the software compatible with this tool. In this repository you will find a varied range of software for different operating systems compatible with many SOIC-8 chips. For WSON-8 memories I have had quite a few problems using this reader, so I would recommend the T56 reader with its software, as it is the best on the market, but it is quite an expensive professional tool.

### Tips

I personally recommend using the desoldering methodology; although it is more complex, it yields a much cleaner reading. The clip, when reading the chip, introduces voltage into it to activate it, which can result in activating other parts of the motherboard and contaminating the extracted copy.

Another good practice is to perform several firmware reads and then compare the hashes of the different images; this guarantees that a good read has been performed. If for whatever reason the image is to be moved to another machine, once the transfer is done I recommend checking the hash again to ensure the chain of custody of the original image; a single corrupted bit in the firmware can make our lives incredibly difficult.

## Procedure summary

1. Chip identification.
2. Desolder the chip, clean the tin from the pads and wipe down with isopropyl alcohol.
3. Place the chip in the reader, paying close attention to the /CS mark.
4. Perform the copy with your preferred software, make two or three copies to verify a successful read.

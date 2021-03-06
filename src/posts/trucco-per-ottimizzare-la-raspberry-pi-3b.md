---
title: "Trucco per aumentare la RAM su di un Raspberry PI 3B+ aumentando la Swap"
description: "Raspberry PI 3B+ a volte ha bisogno di un po' più di RAM, con questo post voglio mostrarvi come fare trimite la Swap."
date: "2019/2/10"
update: "2019/9/6"
author: "Simo"
published: true
langKey: it
---

## Problema

Ho tentato di avviare un container Docker di NextCloud su di una Raspberry Pi B3+.

Premetto che avevo già alcuni container Docker funzionanti su di un’installazione Raspbian, come ad esempio OpenVPN, Pi-Hole e MotionEye e aggiungendo i container di MariaDB e di NextCloud mi sono trovato con solo 44 mega di Ram liberi.

LA soluzione sarebbe stata poter aggiungere della RAM fisica, ma siccome il Raspberry non lo permette, ho dovuto trovare un'altra soluzione che vi vado a spiegare.

## Soluzione

Seguendo il corso LPI di primo livello di Morrolinux su Udemy, uno dei primi video è quello inerente alla swap e c’è anche la spiegazione di come abilitare la swap su file e ne ho fatto tesoro.

In prima battuta, per abilitare la Swap ho pensato di ripartizionare, ma sarebbe stato un casino e poi mi sono vagamente ricordato che era possibile formattare un file ed abilitarlo da /etc/fstab.

Ho preso la mia tastierina, cambiato il canale della mia televisione sulla porta HDMI e ho pensato di aprire per prima cosa il file /etc/fstab sul mio Raspberry Pi 3B+.

Sul file c’è scritto infatti che non bisogna inserire nuove voci per la swap, ma di usare dphys-swapfile swapon.

Io mi sono letto la pagina man a riguardo di questo comando che non conoscevo e sostanzialmente c’è scritto che il file di configurazione è il rispettivo file di configurazione in /etc/dphys-swapfile.

l’ho aperto con nano, ho modificato la voce CONF_SWAPSIZE da 100 a 2048 che sostanzialmente sono da 100 Mega a 2 GB di swap e poi con il comando “dphys-swapfile swapon” l’ho abilitata.

Un check veloce con “free -m” e adesso la mia installazione di Nexcloud è molto più responsiva.

> **CONTROINDICAZIONI**<br><br>
> Se lo spazio sulla vostra microSD è poco, allora questo trucco non è molto utile in quanto viene usato lo spazio di swap (che è un file delle dimensioni scelte nella configurazione di CONF_SWAPSIZE) sulla microSD per fornire la RAM.<br><br>
> Quindi se avete impostato 2048, il file occuperà 2 GB sulla microSD.<br><br>
> Inoltre la RAM così ottenuta è più lenta della normale RAM fisica.

-- Buona vita--

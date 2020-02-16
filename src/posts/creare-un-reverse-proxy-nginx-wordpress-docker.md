---
title: "Come ho creato un reverse proxy nginx per wordpress con docker"
description: "Come ho fatto a creare un revese proxy nginx per trasferire i miei siti wordpress da un ambiente LEMP gestito ad un ambiente docker che gestisco io facilmente."
date: "13/02/2020"
update: "13/02/2020"
author: "Simo"
---

<!--
Devo dire che è stato un parto abbastanza complicato.

Capire docker e mettere in piedi un server in produzione è un lavoro che mi ha sdrenato ma mi ha insegnato tantissimo e soprattutto mi ha fatto risparmiare sull'hosting VPS su [digitalocean](https://m.do.co/c/b8caeaf651c4) gestito da [runcloud.io](https://runcloud.io/r/7v3Yv3Jj5KVR) che avevo prima.

Innanzitutto non sapevo cosa fosse un reverse proxy.
Secondo non sapevo configurare correttamente un server nginx e non sapevo a cosa servissero sul serio tutte le direttive che servono per mettere un server in produzione.
Terzo docker è un aggeggio utile utile, ma finché non ci ho preso confidenza era solo un aggeggio bello bello ma non sapevo che farmene.
-->

## Come ho iniziato a pensarci

Era un pezzetto che seguivo delle guide su docker, se ne parla molto in giro per il web e nell'associazione Rimini LUG che frequento e siccome Docker è un ottimo tool per eseguire vari servizi su un singolo VPS, ho pensato che fosse veramente una cosa veramente molto utile.

Il fatto di non dover sporcare la macchina sul quale si esegue docker è una cosa che me l'ha fatto preferire all'installare i servizi direttamente sul sistema operativo.

Dopo vari tentativi ho scoperto che mi sarebbe servito un reverse proxy e quindi, cercando su internet, ho trovato [questo articolo](https://www.pattonwebz.com/docker/multiple-wordpress-containers-proxy/) dove si parla di come eseguire un server web e caricare automaticamente la configurazione di nginx.

Prova che ti riprova non sono riuscito a metterlo in piedi - forse perché il post è abbastanza datato -, quindi ho chiesto aiuto al presidente dell'associazione che mi ha trovato [questa guida](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion/wiki/Docker-Compose) sul wiki ufficiale.

Chiara chiara.

In quel momento sono riuscito a mettere in piedi il sistema, ma senza i certificati, in seguito, durante un fine settimana, sono riuscito a mettere in piedi il tutto.

Eseguendo i servizi in test su un'istanza di [digitalocean](https://m.do.co/c/b8caeaf651c4) da 1 GB di RAM, ho scoperto che questo tipo di sistema, eseguendo un'istanza di mariadb per ogni wordpress installato, ne richiedeva una quantità maggiore e che mi sarebbe costato troppo l'hosting.

Matteo, il Presidente del Rimini LUG, mi ha ricordato [contabo.com](https://contabo.com), che mi aveva consigliato precedentemente anche un altro socio dell'associazione, ma al tempo, a causa di [runcloud.io](https://runcloud.io/r/7v3Yv3Jj5KVR) che funziona solo su determinati hosting, non lo avevo considerato per il mio server.

Quindi ora ho 4 Gb di RAM e 300 Gb di hard disk SSD Boosted per la modica cifra di 3,99 euro al mese al posto dei 13 euro e passa dell'hosting di prima.

Questa la parte decisionale, passiamo quindi alla parte pratica.

## Come configurare il reverse proxy con docker


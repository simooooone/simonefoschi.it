---
title: "Come ho creato un reverse proxy nginx per wordpress con docker"
description: "Come ho fatto a creare un revese proxy nginx per trasferire i miei siti wordpress da un ambiente LEMP gestito ad un ambiente docker che gestisco io facilmente."
date: "13/02/2020"
update: "13/02/2020"
author: "Simo"
---

Devo dire che è stato un parto abbastanza complicato.

Capire docker e mettere in piedi un server in produzione è un lavoro che mi ha sdrenato ma mi ha insegnato tantissimo e soprattutto mi ha fatto risparmiare sull'hosting VPS gestito che avevo prima.

Innanzitutto non sapevo cosa fosse un reverse proxy.
Secondo non sapevo configurare correttamente un server nginx a mano con tutte le direttive che in molti casi non sapevo a cosa servissero sul serio.
Terzo docker è un aggeggio utile utile, ma finché non ci ho preso confidenza era solo un aggeggio bello bello ma inutile.

## Come ho iniziato a pensarci

Era un pezzetto che seguivo delle guide su docker, ser ne parla molto in giro per il web e nell'azssociazione che frequento e così ho pensato che un server con dei servizi gestiti da docker fosse veramente una cosa molto utile.

Solo per il fatto di non dover sporcare la macchina sul quale si esegue docker è una cosa veramente al top.

Ho fatto questa considerazione dopo gli n tentativi di creare una macchina e dover reinstallare il sistema operativo per avere un sistema pulito.

Durante i vari tentativi ho scoperto che mi sarebbe servito un reverse proxy e quindi, cercando su internet, ho trovato [questo articolo](https://www.pattonwebz.com/docker/multiple-wordpress-containers-proxy/).

Prova che ti riprova non sono riuscito a metterlo in piedi e quindi ho chiesto aiuto ad un sistemista dell'associazione che mi ha trovato [questa guida](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion/wiki/Docker-Compose).


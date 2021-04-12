---
title: Come configurare un dns dinamico con duckdns.org
description: Procedura per configurare un proprio dominio internet casalingo.
  Utile se avete un server in casa con servizi come ad esempio Nextcloud o un
  sito web ospitato in casa.
date: 2018/12/16
update: 2019/9/4
author: Simo
published: true
langKey: it
---

Tra i tanti servizi che ho trovato per configurare un dns dinamico gratuito, sono incappato in [duckdns.org](https://duckdns.org), che fino ad ora si è dimostrato affidabile e facile da configurare con la mia Rasperry Pi 3 B+.

## Cos’è e a cosa serve un DNS Dinamico

A riguardo dei DNS Dinamici o DDNS o Dynamic DNS, Wikipedia a questa pagina dice:

> I nomi DNS (ad esempio [www.kernel.org](https://www.kernel.org)) sono normalmente associati stabilmente ad indirizzi IP (ad esempio 147.75.xxx.xxx), i quali a loro volta sono stabilmente assegnati ad host (di solito computer) che hanno funzioni di server. Molti host, in particolare quelli che si collegano ad internet utilizzando i servizi di uno (o più) ISP, ricevono invece un indirizzo IP diverso ad ogni connessione. Pertanto è impossibile raggiungerli da internet, perché non si conosce il loro indirizzo IP. Ciò preclude la possibilità di amministrarli remotamente e di offrire servizi su questi host.

Il DNS dinamico permette a questi host di essere sempre raggiungibili attraverso il loro nome DNS, e quindi rende possibile amministrarli remotamente ed erogare servizi raggiungibili da chiunque su internet.

I servizi di cui parla, possono essere ad esempio siti web, server di posta, programmi come [NextCloud](https://nextcloud.com/), server ftp o una VPN privata.

Quindi per rendere raggiungibile alcuni servizi della nostra rete dall’esterno, non avendo un IP statico, dobbiamo fare la procedura che segue.

I siti che offrono Dynamic DNS gratuito, sono parecchi ad esempio [no-ip.com](https://www.no-ip.com) ed io ho scelto [duckdns.org](https://duckdns.org), iniziando per provare, poi adottato in pianta stabile vista la sua affidabilità.

## Procedura di registrazione a duckdns.org

Una volta su [duckdns.org](https://duckdns.org) ci si presenta la pagina principale, dove in alto ci sono vari tipi di login.

Ne scegliete uno e vi verrà presentata una schermata simile alla seguente:

A volte bisognerà avere un po’ di pazienza e ritentare alcune volte, in quanto il sito web non è proprio perfetto e come nel mio caso ho fatto 5 o 6 tentativi con la seguente schermata:

A questo punto aggiungiamo il nome del sotto dominio e clicchiamo su add domain e abbiamo bello pronto il nostro indirizzo DNS Dinamico.

## Configurare l’aggiornamento del DNS Dinamico

A questo punto dobbiamo fare in modo che il nostro IP sia sincronizzato con il nostro terzo livello su duckdns.

Per farlo, cliccando qui, si va alla bellissima pagina delle istruzioni per i vari sistemi operativi dove ci spiega passo a passo le impostazioni da mettere.

Io ho seguito la procedura per linux cron, e come prima cosa ho notato che qualche volta, la VPN che avevo installato sulla mia Raspberry perdeva la connessione proprio mentre mi stavo stimando con un collega di averla configurata.

Infatti era settata per aggiornare l’IP del DNS Dinamico ogni 5 minuti e l’IP Dinamico della mia connessione di casa cambia purtroppo spesso.

Mi ha consigliato di impostarla ad 1 minuto, in quanto mi ha accennato che il TTL degli IP dinamici è appunto di 1 minuto (o qualcosa del genere).

Comunque a parte se ho capito bene o male, ho cambiato quell’impostazione e adesso va che è una favola.

## Esporre un servizio tramite DDNS

A seconda di che servizio vogliamo esporre ad internet della nostra rete locale, dovremo aprire la porta corrispondente sul router e sul firewall del computer che lo fornirà.

Per farlo bisogna accedere all’amministrazione del router e fare il port forwarding della porta verso l’ip dell’apparecchio.

Per vedere guide dettagliate per vari router -> [portforward.com](https://portforward.com/)

Se abbiamo impostato un indirizzo statico al computer, tanto meglio, se no molti router riconoscono l’ip del port forwarding in automatico tramite il MAC address.

## Conclusione

Alla fine magari, mi sono dilungato anche troppo in spiegazioni per una procedura così semplice.

Ma tant’è, a volte può servire una mini guida per avventurarsi in un territorio sconosciuto.

\-- Buona vita --
Simo

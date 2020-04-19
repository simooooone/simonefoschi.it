---
title: "Creare un reverse proxy nginx automatizzato per i vostri siti con docker"
description: "Come ho creato un Reverse Proxy Nginx docker poer il mio server web passo passo."
date: "2020/04/19"
update: "2020/4/19"
author: "Simo"
published: false
langKey: it
---

# Come creare un Reverse Proxy Nginx automatizzato con docker

Era un bel po' di tempo che stavo pensando a come configurare il mio server web in maniera da rimanere su una mia VPS in sicurezza e con le tecnologie più moderne.

Pensa che ti ripensa, mumble mumble, tramite le considerazioni qui sotto, sono arrivato a realizzare ad un progetto moderno e facile da gestire.

## Le considerazioni che mi hanno portato all'ideazione del sistema

Un Reverse Proxy Nginx è una particolare configurazione di Nginx per permettere ad un server di rispondere tramite un solo componente alle richieste esterne, appunto Nginx.

Questo garantisce che i componenti sottostanti del web server non siano interfacciati direttamente su internet e che quindi un attaccante abbia un superfice d'attacco molto minore rispetto all'interfacciarsi direttamente con il web server dei rispettivi siti su internet.

Docker invece è un moderno sistema di containerizzazione che permette di creare dei servizi atomici dentro a dei container senza aver bisogno di modificare la configurazione e le librerie della macchina host.

Docker è inoltre facilmente trasportabile da una macchina ad un'altra e nel caso di carichi elevati è possibile tramite kubernetes distribuire il carico aggiungendo macchine, il che fa di esso un sistema scalabile in maniera abbastanza semplice.

Fatte queste considerazioni ho fatto qualche ricerca su internet in maniera da trovare qualcosa che mi aiutasse a chiarire i miei dubbi e perché no, qualcosa di pronto all'uso dato che non avevo idea di come gestire il tutto.

> ## Considerazioni su docker tra i soci
>
> È molto tempo che coi soci del RiminiLUG si parla di Docker e ci siamo posti questioni di sicurezza, come al solito, trovando e condividendo tra noi articoli con diverse opinioni.<br /><br />
> Alla fine quello che è venuto fuori è che ci sono alcune configurazioni sicure ed altre con più vulnerabilità.<br /><br />
> Ad esempio in <a href="https://snyk.io/blog/top-ten-most-popular-docker-images-each-contain-at-least-30-vulnerabilities/" target="_blank" rel="noopener noreferrer">questo articolo</a> che Roberto ci ha girato, si fa riferimento alle vulnerabilità delle singole immagini di base, ma fa anche notare che con alcune immagini base ci sono molte vulnerabilita, mentre con l'immagine base di Nodejs Alpine Linux ce ne sono 0.<br /><br />
> Io quindi mi sono basato su queste considerazioni per creare un sistema con base Nginx su Alpine Linux in maniera da avere una superfice d'attacco molto più ridotta rispetto ad un sistema che comprendesse distribuzioni più complesse e affette da vulnerabilità come Ubuntu o Debian.<br /><br />
> Per chi non lo sapesse Alpine Linux è una distribuzione minimale che pesa solo 5 MB, creata tenendo ben presente il problema della sicurezza e di conseguenza riduce al minimo la superfice d'attacco avendo meno componenti di altre distribuzioni.<br /><br />

<br />

## Si parte

Ho trovato quasi subito <a href="https://www.pattonwebz.com/docker/multiple-wordpress-containers-proxy/" target="_blank" rel="noopener noreferrer">questo articolo</a> dove appunto si parla di come creare una configurazione di docker-compose per istanziare un Reverse Proxy Nginx per dei siti WordPress.

La particolarità di questo sistema è che aggiungendo container con siti web, crea in automatico la configurazione e a me non rimane che istanziare con i parametri corretti un docker compose e il sistema mi crea in automatico oltre che la configuraszione, anche i certificati https.

Ma nel cercare di farlo simile alla mia idea, ad un certo punto non partiva più.

Quindi ho chiesto aiuto a Matteo ed una sera che ci siamo ritrovati al consueto appuntamento settimanale del martedì all'associazione, mi ha fatto procedere dall'inizio seguendo <a href="https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion/wiki/Docker-Compose" target="_blank" rel="noopener noreferrer">questa guida</a> sul wiki ufficiale di Nginx Let's Encrypt Proxy Companion.

> Tra l'altro ho chiesto anche su stackoverflow ed il mio errore era quello di istanziare due volte docker-gen.<br />
> Una volta istanziando direttamente il container docker-gen, l'altra istanziando il container nginx-proxy che al suo interno contiene docker-gen, quando invece dovevo istanziare l'immagine nginx:alpine, come riportato nella configurazione sottostante.

<br />

## Configurare il server

Come server, su consiglio di Giuseppe che l'ha scoperto e Matteo ho usato <a href="https://contabo.com" target="_blank" rel="noopener noreferrer">contabo.com</a>, che oltre ad essere economico è anche un buonissimo hosting.

> Per la cifra ridicola di 3 euro e 99 al mese -- al momento attuale --, offre un VPS con 4 Gb di RAM e 300 Gb di hard disk SSD boosted.

Come sistema di base ho usato Ubuntu 18.04 LTS.

Per iniziare mi sono creato le chiavi ssh con ssh-keygen sul mio computer locale e una volta che ho avuto accesso al VPS creato su contabo ho caricato la cartella ~/.ssh tramite filezilla nella cartella principale dell'utente root.

Poi sempre come root, una dopo aver acceduto tramite ssh al server, l'ho configurato in questa maniera:

<pre class="language-bash"><code>adduser TUO-USERNAME
usermod -aG sudo TUO-USERNAME
rsync --archive --chown=TUO-USERNAME:TUO-USERNAME ~/.ssh /home/TUO-USERNAME
# Aggiorno il sistema
apt update && apt upgrade && apt dist-upgrade && apt autoremove && apt autoclean
apt install --install-recommends linux-generic-hwe-18.04
# Installo fail2ban
apt install fail2ban
# Aggiorno il sistema
apt update && apt upgrade && apt dist-upgrade && apt autoremove && apt autoclean
# Installo docker e docker-compose
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
usermod -aG docker TUO-USERNAME
apt install docker-compose -y
</code></pre>

Quindi mi sono preoccupato di creare i domini di test su <a href="https://duckdns.org" target="_blank" rel="noopener noreferrer">duckdns</a> e sul server li ho abilitati così:

<pre class="language-bash"><code>mkdir duckdns
cd duckdns
nano TUO-DOMINIO.sh
# ci ho incollato dentro questa stringa
echo url="https://www.duckdns.org/update?domains=TUO-DOMINIO&token=xxxx-xxxx-xxxx-xxxx&ip=" | curl -k -o ~/duckdns/TUO-DOMINIO.log -K -
# CTRL-X INVIO
chmod 700 TUO-DOMINIO.sh
crontab -e
# ci ho incollato dentro questa stringa
*/5 * * * * ~/duckdns/TUO-DOMINIO.sh >/dev/null 2>&1
# CTRL-X INVIO
./TUO-DOMINIO.sh
</code></pre>

> Voi dovete sostituire TUO-DOMINIO con i vostri domini duckdns.org e la stringa xxxx.... con il vostro token. Comunque la procedura corretta è visibile nella parte install del sito di <a href="https://duckdns.org" target="_blank" rel="noopener noreferrer">duckdns</a>

Quando ho messo in produzione i siti ho puntato i dns dei domini all'IP della macchina di produzione.

> La configurazione sopra serve per fare i test che tutto funzioni a dovere prima di mandare in produzione i siti.

<br />

## Configurare docker

Per iniziare ho creato un network nel quale far girare i container docker con questo comando:

<pre class="language-bash"><code>docker network create nginx-proxy</code></pre>

Quindi ho creato la struttura delle cartelle e siccome erano da trasferire avevo i miei due siti WordPress da trasferire, all'interno delle rispettive cartelle ho caricato la cartella wp-content dei due siti:

<pre class="language-yaml"><code>- /home/TUO-USERNAME/
  - nginx-proxy/
    - wordpress1/
      - wp-content/
    - wordpress2/
      - wp-content/
</code></pre>

Poi ho seguito il wiki di <a href="https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion/wiki/Docker-Compose" target="_blank" rel="noopener noreferrer">nginx-proxy-letsencrypt-companion</a>, ho usato il three-container setup creando un file docker-compose.yml nella directory nginx-proxy:

<pre class="language-yaml"><code>version: '2'
services:
nginx-proxy:
    image: nginx:alpine
    container_name: nginx-proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - conf:/etc/nginx/conf.d
      - vhost:/etc/nginx/vhost.d
      - html:/usr/share/nginx/html
      - certs:/etc/nginx/certs:ro
    network_mode: bridge
  docker-gen:
    image: jwilder/docker-gen
    container_name: nginx-proxy-gen
    command: -notify-sighup nginx-proxy -watch /etc/docker-gen/templates/nginx.tmpl /etc/nginx/conf.d/default.conf
    volumes_from:
      - nginx-proxy
    volumes:
      - /path/to/nginx.tmpl:/etc/docker-gen/templates/nginx.tmpl:ro
      - /var/run/docker.sock:/tmp/docker.sock:ro
    labels:
      - "com.github.jrcs.letsencrypt_nginx_proxy_companion.docker_gen"
    network_mode: bridge
  letsencrypt:
    image: jrcs/letsencrypt-nginx-proxy-companion
    container_name: nginx-proxy-le
    volumes_from:
      - nginx-proxy
    volumes:
      - certs:/etc/nginx/certs:rw
      - /var/run/docker.sock:/var/run/docker.sock:ro
    network_mode: bridge
volumes:
  conf:
  vhost:
  html:
  certs:</code></pre>

Quindi dentro le cartelle wordpress1 e wordpress2 ho creato un docker-compose.yml in ogni cartella con questo contenuto:

<pre class="language-yaml"><code>version: "3"
services:
  db_node_domain:
    image: mariadb:10.4
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: MY-SECRET-PASSWORD
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: MY-SECRET-PASSWORD
    container_name: example_db
  example:
    depends_on:
      - db_node_domain
    image: wordpress:latest
    expose:
      - 443
    restart: always
    environment:
      VIRTUAL_HOST: www.example.com,example.com
      WORDPRESS_DB_HOST: db_node_domain:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: MY-SECRET-PASSWORD
      LETSENCRYPT_HOST: www.example.com,example.com
      LETSENCRYPT_EMAIL: myemail@example.com
    container_name: example
    volumes:
      - data_volume:/var/www/html
      - ./home/wp:/home/wp
      - ./wp-content:/var/www/html/wp-content
volumes:
  db_data:
  data_volume:
networks:
  default:
    external:
      name: nginx-proxy</code></pre>

> Voi dovete cambiare rispettivamente "example" con il nome del vostro sito, "MY-SECRET-PASSWOWRD" con password sicure, una per root e una per l'utente di mariadb e l'email con cui richiedere il certificato https.

Quindi dentro le cartelle dove ho creato i file docker-compose.yml ho eseguito:

<pre class="language-bash"><code>docker-compose up</code></pre>

<br>

> ## Importante
>
> docker-compose up vi permette di vedere i log ma vi occupa un terminale e quindi dovrete aprire tre termninali in ssh sul server per lanciare i vostri siti di test.<br />
> Una volta che avrete completato i test sui log e che tutto funziona dovrete fare ctrl-c su ogni terminale per terminare i container e lanciare il comando<br /><br />
> docker-compose up -d<br /><br />
> nelle rispettive cartelle.<br />
> Per stoppare i container per la manutenzione basterà dare il seguente comando sempre nelle rispettive cartelle:<br /><br />
> docker-compose stop<br /><br />
> e rilanciare successivamente sempre con<br /><br />
> docker-compose up -d<br /><br />

<br />

## Per finire

Quindi, dopo i test che tutto funzionasse a dovere, ho dovuto fare la procedura del trasferimento dei db dal vecchio MySQL al server attuale tramite un plugin WordPress che si chiama UpdraftPlus in modalità gratuita, modificare i docker-compose.yml dei due siti WordPress per inserire i domini corretti e puntare il DNS dei domini di produzione.

## Ringraziamenti

Grazie per l'ennesima volta al RiminiLUG per tutto il supporto che mi hanno dato i soci e per avermi fatto risparmiare molti soldi grazie al consiglio di creare un VPS su contabo.

-- Buona vita --

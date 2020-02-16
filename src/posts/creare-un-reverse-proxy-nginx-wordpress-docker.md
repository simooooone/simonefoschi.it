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

Questa la parte decisionale, ora passiamo quindi alla parte pratica.

## Come configurare il server per e instare docker

Come sistema operativo ho deciso di usare Ubuntu 10.04 LTS e come sistema di protezione fail2ban. Il firewall non ho dovuto installarlo in quanto ho trovato che contabo ha un suo firewall ed apre solamente le porte 22, 80 e 443. Quindi è una situazione perfetta a livello di sicurezza per la mia installazione.

`adduser TUO-USERNAME`
`usermod -aG sudo TUO-USERNAME`
`rsync --archive --chown=TUO-USERNAME:TUO-USERNAME ~/.ssh /home/TUO-USERNAME`
`apt update && apt upgrade && apt dist-upgrade && apt autoremove && apt autoclean`
`apt install --install-recommends linux-generic-hwe-18.04`
`apt install fail2ban`
`apt update && apt upgrade && apt dist-upgrade && apt autoremove && apt autoclean`
`curl -fsSL https://get.docker.com -o get-docker.sh`
`sh get-docker.sh`
`usermod -aG docker TUO-USERNAME`
`apt install docker-compose -y`

Per quanto riguyarda il login ssh avevo già generato sul mio computer di sviluppo le chiavi private e quindi con filezilla non ho fatto altro che caricarle nella cartella /home/TUO-USERNAME/.ssh con i permessi corretti.

Quindi mi sono creato dei domini di test su [duckdns](https://duckdns.org) ed li ho configurati tutti per puntare al mio server:

`mkdir duckdns`
`cd duckdns`
`nano TUO-DOMINIO.sh`
`# ci ho incollato dentro questa stringa`
`echo url="https://www.duckdns.org/update?domains=TUO-DOMINIO&token=xxxx-xxxx-xxxx-xxxx&ip=" | curl -k -o ~/duckdns/TUO-DOMINIO.log -K -`
`# CTRL-X INVIO`
`chmod 700 TUO-DOMINIO.sh`
`crontab -e`
`# ci ho incollato dentro questa stringa`
`*/5 * * * * ~/duckdns/TUO-DOMINIO.sh >/dev/null 2>&1`
`# CTRL-X INVIO`
`./TUO-DOMINIO.sh`

Per il server di produzione bisogna che fate puntare i dns dei vostri domini all'IP della macchina di produzione.

Infatti la configurazione sopra serve per la macchina in fase di test.

## Configurare la network, i container ed i volumi Docker

Per creare il network sotto il quale gireranno i vostri container, bisogna dare questo comando:

`docker network create nginx-proxy`

Da ora in poi assegneremo i nostri container alla rete *nginx-proxy*

Successivamente bisogna creare un po' di cartelle, qui sotto l'albero delle directory:

- ~
    - nginx-proxy
        1. wordpress1
        2. wordpress2
        3. altri wordpress...

Questo per creare una struttura ordinata nella quale compilare i nostri *docker-compose.yml*, per i files della cartella wp-content di wordpress e per la cartella dei certificati ssl.

> In questa maniera, qualora si volesse cambiare hosting VPS, basterà procedere ad una configurazione standard di Ubuntu o di un altro sistema operativo *nix, basterà caricare le cartelle e i files che creeremo, fare una configurazione come sopra e lanciare docker-compose su ogni cartella ove ci sia un docker-compose.yml, girare i dns verso il nuovo server per i nostri siti funzionanti come sul vecchio VPS.

## Creare i files docker-compose.yml

Seguendo il wiki di [nginx-proxy-letsencrypt-companion](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion/wiki/Docker-Compose), ho creato il three-container setup incollando dentro il docker-compose.yml creato nella directory radice (nginx-proxy):

`version: '2'`
`services:`
`  nginx-proxy:`
`    image: nginx:alpine`
`    container_name: nginx-proxy`
`    ports:`
`      - "80:80"`
`      - "443:443"`
`    volumes:`
`      - conf:/etc/nginx/conf.d`
`      - vhost:/etc/nginx/vhost.d`
`      - html:/usr/share/nginx/html`
`      - certs:/etc/nginx/certs:ro`
`    network_mode: bridge`
`  docker-gen:`
`    image: jwilder/docker-gen`
`    container_name: nginx-proxy-gen`
`    command: -notify-sighup nginx-proxy -watch /etc/docker-gen/templates/nginx.tmpl /etc/nginx/conf.d/default.conf`
`    volumes_from:`
`      - nginx-proxy`
`    volumes:`
`      - /path/to/nginx.tmpl:/etc/docker-gen/templates/nginx.tmpl:ro`
`      - /var/run/docker.sock:/tmp/docker.sock:ro`
`    labels:`
`      - "com.github.jrcs.letsencrypt_nginx_proxy_companion.docker_gen"`
`    network_mode: bridge`
`  letsencrypt:`
`    image: jrcs/letsencrypt-nginx-proxy-companion`
`    container_name: nginx-proxy-le`
`    volumes_from:`
`      - nginx-proxy`
`    volumes:`
`      - certs:/etc/nginx/certs:rw`
`      - /var/run/docker.sock:/var/run/docker.sock:ro`
`    network_mode: bridge`
`volumes:`
`  conf:`
`  vhost:`
`  html:`
`  certs:`

A questo punto dentro le cartelle wordpress1 e wordpress2 ho creato la cartella wp-content

e un docker-compose.yml in ogni cartella con questo contenuto:

`version: "3"`
`services:`
`  db_node_domain:`
`    image: mariadb:10.4`
`    volumes:`
`      - db_data:/var/lib/mysql`
`    restart: always`
`    environment:`
`      MYSQL_ROOT_PASSWORD: MY-SECRET-PASSWORD`
`      MYSQL_DATABASE: wordpress`
`      MYSQL_USER: wordpress`
`      MYSQL_PASSWORD: MY-SECRET-PASSWORD`
`    container_name: example_db`
`  example:`
`    depends_on:`
`      - db_node_domain`
`    image: wordpress:latest`
`    expose:`
`      - 443`
`    restart: always`
``    environment:`
`      VIRTUAL_HOST: www.example.com,example.com`
`      WORDPRESS_DB_HOST: db_node_domain:3306`
`      WORDPRESS_DB_USER: wordpress`
`      WORDPRESS_DB_PASSWORD: MY-SECRET-PASSWORD`
`      LETSENCRYPT_HOST: www.example.com,example.com`
`      LETSENCRYPT_EMAIL: myemail@example.com`
`    container_name: example`
``    volumes:`
`      - data_volume:/var/www/html`
`      - ./home/wp:/home/wp`
`      - ./wp-content:/var/www/html/wp-content`
`volumes:`
`  db_data:`
`  data_volume:`
`networks:`
`  default:`
`    external:`
`      name: nginx-proxy`

`      MYSQL_PASSWORD: MY-SECRET-PASSWORD`

Cambiando rispettivamente "example" con il nome del mio sito, "MY-SECRET-PASSWOWRD" con due password sicure, una per root e una per l'utente di mariadb associato al sito e l'email per richiedere il certificato https.

si salvano le due configurazioni e nelle tre cartelle ove abbiamo creato i file docker-compose.yml si esegue:

`docker-compose up`

> aggiungendo il parametro -d si indicherà a docker-compose di eseguire i container come demoni


-- buona vita --
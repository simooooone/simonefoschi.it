---
title: "Come ho creato un reverse proxy nginx per wordpress con docker"
description: "Come ho fatto a creare un revese proxy nginx per trasferire i miei siti wordpress da un ambiente LEMP gestito ad un ambiente docker che gestisco io facilmente."
date: "13/02/2020"
update: "13/02/2020"
author: "Simo"
---

Devo dire che è stato un parto abbastanza complicato.

Capire docker e mettere in piedi un server in produzione è un lavoro che mi ha sdrenato ma mi ha insegnato tantissimo e soprattutto mi ha fatto risparmiare sull'hosting VPS su [digitalocean](https://m.do.co/c/b8caeaf651c4) gestito da [runcloud.io](https://runcloud.io/r/7v3Yv3Jj5KVR) che avevo prima.

- Innanzitutto non sapevo cosa fosse un reverse proxy.
- Secondo non sapevo configurare correttamente un server nginx e non sapevo a cosa servissero sul serio tutte le direttive che servono per mettere un server in produzione.
- Terzo docker è un aggeggio bello bello, ma finché non qualcosa per cui mi servisse realmente era solo un aggeggio di cui non sapevo che farmene, una cosa in più.

## Come ho iniziato a pensarci

Era un pezzetto che seguivo delle guide su docker, se ne parla molto in giro per il web e nell'associazione Rimini LUG che frequento e siccome Docker è un ottimo tool per eseguire vari servizi su una singola macchina, ho pensato che mi sarebbe tornato utile per il mio server.

Docker ha il pregio di sporcare minimamente la macchina sul quale si eseguono i container ed è facilmente trasportabile da una macchina ad un'altra ed estendibile per lavorare su più macchine quando il carico di lavoro aumenta.

Dopo vari tentativi ho scoperto che mi sarebbe servito un reverse proxy e quindi, cercando su internet, ho trovato [questo articolo](https://www.pattonwebz.com/docker/multiple-wordpress-containers-proxy/) dove si parla di come eseguire un server web e caricare automaticamente la configurazione di nginx.

Prova che ti riprova non sono riuscito a metterlo in piedi, quindi trovato una guida che mi facesse vedere l'installazione sotto un altro punto di vista in [questa guida](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion/wiki/Docker-Compose) sul wiki ufficiale.

Chiara chiara, pulita ed ha funzionato subito.

Eseguendo i servizi in test su un'istanza di [digitalocean](https://m.do.co/c/b8caeaf651c4) da 1 GB di RAM, ho scoperto che questo tipo di sistema, eseguendo un'istanza di mariadb per ogni wordpress installato, ne richiedeva una quantità maggiore e che mi sarebbe costato troppo l'hosting presso di loro.

Il Presidente del Rimini LUG, mi ha ricordato [contabo.com](https://contabo.com), che mi aveva consigliato precedentemente anche un altro socio dell'associazione, ma al tempo, a causa di [runcloud.io](https://runcloud.io/r/7v3Yv3Jj5KVR) che funziona solo su determinati hosting, non lo avevo considerato per il mio server.

Quindi ora ho 4 Gb di RAM e 300 Gb di hard disk SSD Boosted per la cifra di 3,99 euro al mese al posto dei 13 euro e passa che spendevo su digitalocean.

Questa la parte decisionale, ora passiamo alla parte pratica.

## Come configurare il server per e installare docker

Come sistema operativo ho deciso di usare Ubuntu 18.04 LTS e come sistema di protezione fail2ban. Il firewall non ho dovuto installarlo in quanto ho trovato che contabo ha un suo firewall ed apre solamente le porte 22, 80 e 443. Quindi è una situazione perfetta a livello di sicurezza di base per la mia installazione.

`adduser TUO-USERNAME`<br>
`usermod -aG sudo TUO-USERNAME`<br>
`rsync --archive --chown=TUO-USERNAME:TUO-USERNAME ~/.ssh /home/TUO-USERNAME`<br>
`apt update && apt upgrade && apt dist-upgrade && apt autoremove && apt autoclean`<br>
`apt install --install-recommends linux-generic-hwe-18.04`
`apt install fail2ban`<br>
`apt update && apt upgrade && apt dist-upgrade && apt autoremove && apt autoclean`<br>
`curl -fsSL https://get.docker.com -o get-docker.sh`<br>
`sh get-docker.sh`<br>
`usermod -aG docker TUO-USERNAME`<br>
`apt install docker-compose -y`

Per quanto riguarda il login ssh avevo già generato sul mio computer di sviluppo le chiavi private e quindi con filezilla non ho fatto altro che caricarle nella cartella /home/TUO-USERNAME/.ssh con i permessi corretti.

Quindi mi sono creato dei domini di test su [duckdns](https://duckdns.org) ed li ho configurati tutti per puntare al mio server.
Per ogni dominio di test ho fatto così:

`mkdir duckdns`<br>
`cd duckdns`<br>
`nano TUO-DOMINIO.sh`<br>
`# ci ho incollato dentro questa stringa`<br>
`echo url="https://www.duckdns.org/update?domains=TUO-DOMINIO&token=xxxx-xxxx-xxxx-xxxx&ip=" | curl -k -o ~/duckdns/TUO-DOMINIO.log -K -`<br>
`# CTRL-X INVIO`<br>
`chmod 700 TUO-DOMINIO.sh`<br>
`crontab -e`<br>
`# ci ho incollato dentro questa stringa`<br>
`*/5 * * * * ~/duckdns/TUO-DOMINIO.sh >/dev/null 2>&1`<br>
`# CTRL-X INVIO`<br>
`./TUO-DOMINIO.sh`

Per il server di produzione bisogna che fate puntare i dns dei vostri domini all'IP della macchina di produzione, infatti la configurazione sopra serve per la macchina in fase di test.

## Configurare la network, i container ed i volumi Docker

Per creare il network sotto il quale gireranno i vostri container, bisogna dare questo comando:

`docker network create nginx-proxy`

Da ora in poi assegneremo i nostri container alla rete *nginx-proxy*

Successivamente bisogna creare un po' di cartelle, qui sotto l'albero delle directory:

- ~
    - nginx-proxy
        - wordpress1
        - wordpress2

Questo per creare una struttura ordinata nella quale compilare i nostri *docker-compose.yml*, per i files della cartella wp-content di wordpress e per la cartella dei certificati ssl.

> In questa maniera, qualora si volesse cambiare hosting VPS, basterà procedere ad una configurazione standard di Ubuntu o di un altro sistema operativo *nix, basterà caricare le cartelle e i files che creeremo, fare una configurazione come sopra e lanciare docker-compose su ogni cartella ove ci sia un docker-compose.yml, girare i dns verso il nuovo server per i nostri siti funzionanti come sul vecchio VPS.

## Creare i files docker-compose.yml

Seguendo il wiki di [nginx-proxy-letsencrypt-companion](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion/wiki/Docker-Compose), ho creato il three-container setup incollando dentro il docker-compose.yml creato nella directory radice (nginx-proxy):

`version: '2'`<br>
`services:`<br>
`nginx-proxy:`<br>
`    image: nginx:alpine`<br>
`    container_name: nginx-proxy`<br>
`    ports:`<br>
`      - "80:80"`<br>
`      - "443:443"`<br>
`    volumes:`<br>
`      - conf:/etc/nginx/conf.d`<br>
`      - vhost:/etc/nginx/vhost.d`<br>
`      - html:/usr/share/nginx/html`<br>
`      - certs:/etc/nginx/certs:ro`<br>
`    network_mode: bridge`<br>
`  docker-gen:`<br>
`    image: jwilder/docker-gen`<br>
`    container_name: nginx-proxy-gen`<br>
`    command: -notify-sighup nginx-proxy -watch /etc/docker-gen/templates/nginx.tmpl /etc/nginx/conf.d/default.conf`<br>
`    volumes_from:`<br>
`      - nginx-proxy`<br>
`    volumes:`<br>
`      - /path/to/nginx.tmpl:/etc/docker-gen/templates/nginx.tmpl:ro`<br>
`      - /var/run/docker.sock:/tmp/docker.sock:ro`<br>
`    labels:`<br>
`      - "com.github.jrcs.letsencrypt_nginx_proxy_companion.docker_gen"`<br>
`    network_mode: bridge`<br>
`  letsencrypt:`<br>
`    image: jrcs/letsencrypt-nginx-proxy-companion`<br>
`    container_name: nginx-proxy-le`<br>
`    volumes_from:`<br>
`      - nginx-proxy`<br>
`    volumes:`<br>
`      - certs:/etc/nginx/certs:rw`<br>
`      - /var/run/docker.sock:/var/run/docker.sock:ro`<br>
`    network_mode: bridge`<br>
`volumes:`<br>
`  conf:`<br>
`  vhost:`<br>
`  html:`<br>
`  certs:`

A questo punto dentro le cartelle wordpress1 e wordpress2 ho creato la cartella wp-content

e un docker-compose.yml in ogni cartella con questo contenuto:

`version: "3"`<br>
`services:`<br>
`  db_node_domain:`<br>
`    image: mariadb:10.4`<br>
`    volumes:`<br>
`      - db_data:/var/lib/mysql`<br>
`    restart: always`<br>
`    environment:`<br>
`      MYSQL_ROOT_PASSWORD: MY-SECRET-PASSWORD`<br>
`      MYSQL_DATABASE: wordpress`<br>
`      MYSQL_USER: wordpress`<br>
`      MYSQL_PASSWORD: MY-SECRET-PASSWORD`<br>
`    container_name: example_db`<br>
`  example:`<br>
`    depends_on:`<br>
`      - db_node_domain`<br>
`    image: wordpress:latest`<br>
`    expose:`<br>
`      - 443`<br>
`    restart: always`<br>
`    environment:`<br>
`      VIRTUAL_HOST: www.example.com,example.com`<br>
`      WORDPRESS_DB_HOST: db_node_domain:3306`<br>
`      WORDPRESS_DB_USER: wordpress`<br>
`      WORDPRESS_DB_PASSWORD: MY-SECRET-PASSWORD`<br>
`      LETSENCRYPT_HOST: www.example.com,example.com`<br>
`      LETSENCRYPT_EMAIL: myemail@example.com`<br>
`    container_name: example`<br>
`    volumes:`<br>
`      - data_volume:/var/www/html`<br>
`      - ./home/wp:/home/wp`<br>
`      - ./wp-content:/var/www/html/wp-content`<br>
`volumes:`<br>
`  db_data:`<br>
`  data_volume:`<br>
`networks:`<br>
`  default:`<br>
`    external:`<br>
`      name: nginx-proxy`

Cambiando rispettivamente "example" con il nome del mio sito, "MY-SECRET-PASSWOWRD" con due password sicure, una per root e una per l'utente di mariadb associato al sito e l'email per richiedere il certificato https.

si salvano le due configurazioni e nelle tre cartelle ove abbiamo creato i file docker-compose.yml si esegue:

`docker-compose up`

> aggiungendo il parametro -d si indicherà a docker-compose di eseguire i container come demoni

## Il lieto fine

Dopo aver messo in produzione il tutto ho dovuto fare alcune sistemazioni, tutte correttamente riportate negli snippet di questo articolo.

Le macchine vanno che è una meraviglia ma ho notato che ad ogni aggiornamento dell'engine di docker, bisogna riavviare i container con un:

`docker-compose stop`<br>
`docker-compose up -d`

nelle rispettive cartelle dei file docker-compose.yml

-- buona vita --
---
title: "Come ho creato un reverse proxy nginx per wordpress con docker"
description: "Come ho fatto a creare un revese proxy nginx per trasferire i miei siti wordpress da un ambiente LEMP gestito ad un ambiente docker che gestisco io facilmente."
date: "13/02/2020"
update: "23/02/2020"
author: "Simo"
---

Devo dire che è stato tutto abbastanza complicato, ma alla fine una volta che il lavoro è fatto... cosa vuoi che sia?

semicit. Primo Foschi

<br>

## Come ho iniziato a pensarci

Era un pezzetto che seguivo delle guide su docker, se ne parla molto in giro per il web e nell'[associazione RiminiLUG](https://www.riminilug.it/) che frequento e siccome Docker è un ottimo tool per eseguire vari servizi su una singola macchina, ho pensato che mi sarebbe tornato utile per il mio server.

Docker ha il pregio di sporcare minimamente la macchina sul quale si eseguono i container, è facilmente trasportabile da una macchina ad un'altra ed estendibile per distribuire il carico del server su più macchine quando il carico di lavoro aumenta.

Dopo vari tentativi ho scoperto che mi sarebbe servito un reverse proxy nginx e quindi, cercando su internet, ho trovato [questo articolo](https://www.pattonwebz.com/docker/multiple-wordpress-containers-proxy/) dove si parla di come eseguire un reverse proxy con docker e caricare automaticamente la configurazione di nginx.

Prova che ti riprova, inizialmente non sono riuscito a metterlo in piedi, finché insieme a Matteo dell'associazione non ho trovato una guida che mi facesse vedere l'installazione sotto un altro punto di vista in [questa guida](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion/wiki/Docker-Compose) sul wiki ufficiale.

Chiara chiara, pulita ed ha funzionato subito.

> Alla fine chiedendo su stackoverflow, ho scoperto che il mio sbaglio consisteva nell'aver editato il codice originale di pattonwebz e stavo eseguendo due istanze di docker-gen. Una era dentro il container nginx-proxy ed un'altra la istanziavo direttamente come container.
> Quindi in un'installazione con tre container (nginx, docker-gen e docker-letsencrypt-nginx-proxy-companion), non va istanziato un container nginx-proxy.

Eseguendo i servizi in test su un'istanza di [digitalocean](https://m.do.co/c/b8caeaf651c4) da 1 GB di RAM, ho scoperto che questo tipo di sistema, eseguendo un'istanza di mariadb per ogni wordpress installato, richiedeva una quantità di risorse maggiore e che mi sarebbe costato troppo l'hosting presso di loro per due sitarelli come i miei.

Matteo, il Presidente del Rimini LUG, mi ha ricordato [contabo.com](https://contabo.com), che mi aveva consigliato precedentemente anche Giuseppe, un altro socio dell'associazione, ma al tempo, a causa di [runcloud.io](https://runcloud.io/r/7v3Yv3Jj5KVR) che funziona solo su determinati hosting, non avevo considerato l'opzione di spostare il mio server.

Quindi, comprato il VPS basico basico su contabo, ora ho 4 Gb di RAM e 300 Gb di hard disk SSD boosted per una cifra ridicola confronto a prima.

Questa la parte decisionale e ragioneristica, ora passiamo alla parte pratica.

<br>

## Come configurare il server per e installare docker

Come sistema operativo ho deciso di usare Ubuntu 18.04 LTS e come sistema di protezione per ssh un classico fail2ban. Il firewall non ho dovuto installarlo in quanto ho trovato che nell'immagine di Ubuntu 18.04 di Contabo è impostato un firewall che apre solamente le porte 22, 80 e 443. Quindi è una situazione perfetta a livello di sicurezza per una installazione come la mia.

<pre class="bash"><code>adduser TUO-USERNAME
usermod -aG sudo TUO-USERNAME
rsync --archive --chown=TUO-USERNAME:TUO-USERNAME ~/.ssh /home/TUO-USERNAME
apt update && apt upgrade && apt dist-upgrade && apt autoremove && apt autoclean
apt install --install-recommends linux-generic-hwe-18.04
apt install fail2ban
apt update && apt upgrade && apt dist-upgrade && apt autoremove && apt autoclean
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
usermod -aG docker TUO-USERNAME
apt install docker-compose -y
</code></pre>

Per quanto riguarda il login ssh avevo già generato sul mio computer di sviluppo le chiavi private e quindi con filezilla non ho fatto altro che caricarle nella cartella ~/.ssh con i permessi corretti.

Quindi mi sono creato dei domini di test su [duckdns](https://duckdns.org) ed li ho configurati tutti per puntare al mio server.
Per ogni dominio di test ho fatto così:

<pre class=bash><code>mkdir duckdns
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

Per il server di produzione bisogna puntare i dns dei domini all'IP della macchina di produzione, infatti la configurazione sopra serve per la macchina in test.

<br>

## Configurare la network, i container ed i volumi Docker

Per creare il docker network sotto il quale gireranno i container, bisogna dare questo comando:

<pre class=bash><code>docker network create nginx-proxy</code></pre>

Da ora in poi assegneremo i container alla rete *nginx-proxy* appena creata.

Successivamente bisogna creare un po' di cartelle, qui sotto l'albero delle directory:

<ul>
    <li>/home/TUO-USERNAME/</li>
        <ul>
            <li>nginx-proxy/</li>
                <ul>
                    <li>wordpress1/
                        <ul>
                            <li>wp-content/</li>
                        </ul>
                    </li>
                    <li>wordpress2/
                        <ul>
                            <li>wp-content/</li>
                        </ul>
                    </li>
                </ul>
        </ul>
</ul>


Questo per creare una struttura ordinata nella quale compilare i *docker-compose.yml*, per i files della cartella wp-content di wordpress e per la cartella dei certificati ssl.

> In questa maniera, qualora si volesse cambiare hosting VPS, basterà procedere ad una configurazione standard di Ubuntu esattamente come sopra, basterà caricare le cartelle e i files che creeremo e lanciare il comando "docker-compose up -d" su ogni cartella ove ci sia un docker-compose.yml e girare i dns verso il nuovo server per avere i siti funzionanti come sul vecchio VPS.

<br>

## Creare i files docker-compose.yml

Seguendo il wiki di [nginx-proxy-letsencrypt-companion](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion/wiki/Docker-Compose), ho creato il three-container setup incollando dentro il docker-compose.yml creato nella directory radice (nginx-proxy):

<pre class=yaml><code>version: '2'
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

A questo punto dentro le cartelle wordpress1 e wordpress2 ho creato la cartella wp-content

e un docker-compose.yml in ogni cartella con questo contenuto:

<pre class=yaml><code>version: "3"
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

Cambiando rispettivamente "example" con il nome del mio sito, "MY-SECRET-PASSWOWRD" con due password sicure, una per root e una per l'utente di mariadb associato al sito e l'email per richiedere il certificato https.

si salvano le due configurazioni e rispettivamente in ogni cartella ove abbiamo creato i file docker-compose.yml si esegue:

<pre class=bash><code>docker-compose up</code></pre>

> aggiungendo il parametro -d si indicherà a docker-compose di eseguire i container come demoni, quindi in fase di produzione bisognerà dare quel paramentro.

<br>

## Il lieto fine

Dopo aver messo in produzione il tutto ho dovuto fare alcune sistemazioni, tutte correttamente riportate negli snippet di questo articolo.

Le macchine vanno che è una meraviglia ma ho notato che ad ogni aggiornamento dell'engine di docker, bisogna riavviare i container con un:

<pre class=bash><code>docker-compose stop
docker-compose up -d</code></pre>

nelle rispettive cartelle dei file docker-compose.yml

Finito tutto per il meglio dopo qualche mese di studio, domande nelle chat, nei forum e di sbattimenti di testa. Morale, so anche fare il sistemista quando mi impegno. :-)

-- Buona vita --

Commenti ->

<blockquote class="twitter-tweet"><p lang="it" dir="ltr">Dopo alcuni mesi di travaglio sono riuscito a mettere in piedi quello che era diventato il mio pallino: usare docker in produzione. Qui il riassunto di questi mesi e il codice per implementare un nginx proxy con docker:<a href="https://t.co/YUktsbDXA5">https://t.co/YUktsbDXA5</a></p>&mdash; Simone (@simooooone) <a href="https://twitter.com/simooooone/status/1231520694946672641?ref_src=twsrc%5Etfw">February 23, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
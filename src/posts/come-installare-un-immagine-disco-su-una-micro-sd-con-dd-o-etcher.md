---
title: "Come installare un’immagine disco su una microSD con Linux"
description: "Guida per creare una chiavetta USB o un microSD con un sistema operativo avviabile e pronto all'installazione su Raspberrry o sul computer di casa."
date: "2018/12/16"
update: "2019/9/6"
author: "Simo"
published: true
langKey: it
---

> Premetto che in questa guida si utilizza Linux e Raspberry PI 3 B+.

In questa mini guida andremo a vedere la parte del processo di installazione più basilare e sulla quale spesso ci si ancora al primo approccio.

Si possono usare vari strumenti per scrivere l’immagine ISO di un sistema operativo su una microSD e vi mostrerò quelli che so usare io.

## 1. usando il comando da terminale dd

Individuare il punto di mount.

Bisogna sempre partire da una microSD vuota o che comunque contenga dati che possono essere sovrascritti e un immagine ISO di un qualche sistema operativo compatibile con il nostro device. Nel caso di un Raspberry consiglio sempre e comunque di scaricarsi la ISO di Raspbian

Inseriamo la microSD nell’apposita entrata del nostro computer.

A questo punto dobbiamo individuare il punto dove è stata montata la nostra microSD.

La via che a mio personale parere trovo più semplice è di usare Gparted.

Partiamo con Gparted:
su ogni derivata di Ubuntu e Debian in generale:
<br>

<pre class="language-bash"><code>sudo get install gparted -y
sudo gparted</code></pre>

<br>

e vi verrà mostrata una schermata simile alla seguente:

In alto a destra troviamo la tendina con la lista delle memorie (hard disk, schede di memoria ecc…) collegate al nostro computer.

Per trovare la nostra scheda dovremo far riferimento alla capienza della stessa.

La selezioniamo e al centro della schermata ci compariranno le partizioni della Mircro SD

> ATTENZIONE: andremo ad eliminare tutti i dati dalla scheda di memoria. Ponete attenzione a selezionare la scheda giusta; se no vi ritroverete con i dati dell’hard disk o della memoria difficilmente se non impossibili da recuperare; ed io non me ne prendo alcuna responsabilità.

La selezioniamo e con un click col tasto destro su ognuna delle partizioni dell’hard disk andremo prima a smontarle con unmount, poi ad eliminarle ad una ad una e infine clicchiamo la spunta verde per applicare le modifiche.

A questo punto abbiamo la schedina microSD completamente vuota e smontata.
Trovare il percorso del file system

Prima di chiudere gparted segnamoci il percorso del file system della periferica, ad esempio /dev/sdc.

Un altro modo per trovarlo è tramite la mitica riga di comando:
<br>

<pre class="language-bash"><code>df -h</code></pre>

<br>
nella prima colonna sono segnati i percorsi di tutti i file system e ad occhio, tramite la dimensione in Giga, riconosciamo la nostra schedina microSD

### Creare l’immagine dulla microSD con dd

> ATTENZIONE: la procedura descritta in seguito è molto delicata ed io non mi prendo alcuna responsabilità se copiate l’immagine sul drive sbagliato.

Quindi ponete attenzione a quel che fate.

Per una guida sul comando dd fare riferimento a questo link o digitate da terminale man dd.

A questo punto se abbiamo già scaricato l’immagine dell’OS che vogliamo caricare sulla microSD, la procedura è abbastanza semplice…via terminale scrivere:
<br><br>

<pre class="language-bash"><code>dd bs=4M if=path/dell/immagine.iso of=/dev/sdX</code></pre>

<br><br>
avendo cura di sostiutuire la X di /dev/sdX con la lettera della nostra microSD che ci siamo segnati prima e /pat/dell/immagine.iso con il path dove abbiamo salvato l’immagine disco.

Aspettiamo con pazienza che esegua il comando e la nostra microSD una volta smontata è pronta per essere inserita nel nostro Raspberry spento.

## 2. creando l’immagine disco con Etcher

un altro metodo, più user friendly, per scrivere le immagini dico su una microSD è Etcher, scaricabile qui, che è un programma multipiattaforma con interfaccia grafica.

Nella sua versione Linux è un file AppImage eseguibile tramite doppio click.

Semplicemente si apre il programma, si sceglie l’immagine .img del sistema operativo, si seleziona la nostra microSD e si flasha.

## 3. Fedora Media Writer

Se usate Fedora esiste l'utility grafica **Fedora Media Writer**

## 4. Gnome Disks

Se usate Gnome si possono scrivere le immagini ISO con **Gnome Disks**

## Conclusioni

Ora è tutto pronto per installare la microSD sul Raspberry e iniziare ad esplorare le meraviglie di questo piccolo computer.

-- Buona vita --
Simo

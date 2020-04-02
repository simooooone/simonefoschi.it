import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const PrivacyPolicy = () => {
  return (
    <Layout myimg="2">
      <Head title="Cookie Policy e Privacy Policy" description="" />
      <h1>Privacy, Cookie e GDPR</h1>
      <p>
        <blockquote>
          Questo sito si serve dei cookie di serviti da matomo.duckdns.org per
          l'analisi del traffico.
        </blockquote>
      </p>
      <p>
        Il software Matomo l'ho installato sui miei server e nessun dato è
        fornito a servizi di tracciamento esterni.
      </p>
      <p>
        Ulteriori informazioni Informativa estesa ai sensi del provv. n.229/2014
        Garante Privacy e ss. mm. ii, in G.U. 3 giugno 2014. (provvedimento 229
        dell’8 maggio 2014)
      </p>
      <p>
        Il Garante della Privacy ha recepito una direttiva europea che impone
        agli amministratori delle pagine web di mostrare ai visitatori un banner
        che li informa di quale sia lo politica dei cookie del sito che stanno
        consultando e di subordinare la sua accettazione al proseguimento della
        navigazione.
      </p>
      <p>
        Matomo è stato impostato su simonefoschi.it ed è ospitato su un mio
        server situato in Germania e non utilizza cookie di terze parti.
      </p>
      <p>
        I dati che raccolgo su tale server servono per raccogliere informazioni
        sugli utenti come, ad esempio, quelle relative al tipo di browser
        utilizzato, le pagine web visitate e altre informazioni utili ad
        analizzare i post.
      </p>
      <p>
        Matromo è stato impostato con il parametro per{" "}
        <u>l'anonimizzazione degli IP</u> e per <u>non inserire cookie</u> nella
        cache del browser.
      </p>
      <br />
      <h3>Opt out</h3>
      <p>Gli utenti possono impedire l'utilizzo di cookie in vari modi:</p>
      <h4>Blocca i cookie di terze parti</h4>
      <p>
        I cookie di terze parti non sono generalmente indispensabili per
        navigare, quindi puoi rifiutarli per default, attraverso apposite
        funzioni del tuo browser.
      </p>
      <p>
        Ulteriori informazioni sulla disabilitazione dei cookie su{" "}
        <a
          href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
          target="_blank"
          rel="noopener noreferrer"
        >
          Firefox, in inglese.
        </a>
      </p>
      <p>
        Ulteriori informazioni sulla disabilitazione dei cookie su{" "}
        <a
          href="https://support.google.com/chrome/answer/95647?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chrome, in inglese
        </a>
      </p>
      <p>
        Ulteriori informazioni sulla disabilitazione dei cookie su{" "}
        <a
          href="http://windows.microsoft.com/it-it/internet-explorer/delete-manage-cookies#ie=ie-11"
          target="_blank"
          rel="noopener noreferrer"
        >
          Internet Explorer, in inglese
        </a>
      </p>
      <p>
        Ulteriori informazioni sulla disabilitazione dei cookie su{" "}
        <a
          href="http://support.apple.com/kb/HT1677?viewlocale=it_IT&locale=it_IT"
          target="_blank"
          rel="noopener noreferrer"
        >
          Safari, in inglese
        </a>
      </p>
      <p>
        Ulteriori informazioni sulla disabilitazione dei cookie su{" "}
        <a
          href="http://help.opera.com/Mac/12.10/it/cookies.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Opera, in inglese.
        </a>
      </p>
      <h4>Attiva l'opzione Do Not Track</h4>
      <p>
        L'opzione Do Not Track è presente nella maggior parte dei browser di
        ultima generazione.
      </p>
      <p>
        I siti web progettati in modo da rispettare questa opzione, quando viene
        attivata, dovrebbero automaticamente smettere di raccogliere alcuni tuoi
        dati di navigazione.
      </p>
      <p>
        Come detto, tuttavia, non tutti i siti web sono impostati in modo da
        rispettare questa opzione (discrezionale).
      </p>
      <br />
      <h4>Attiva la modalità di "navigazione anonima"</h4>
      <p>
        Mediante questa funzione puoi navigare senza lasciare traccia nel
        browser dei dati di navigazione. I siti non si ricorderanno di te, le
        pagine che visiti non saranno memorizzate nella cronologia e i nuovi
        cookie saranno cancellati.
        <br />
        La funzione navigazione anonima non garantisce comunque l'anonimato su
        Internet, perché serve solo a non mantenere i dati di navigazione nel
        browser, mentre invece i tuoi dati di navigazione continueranno a
        restare disponibili ai gestori dei siti web e ai provider di
        connettività.
      </p>
      <p>
        Elimina direttamente i cookie Ci sono apposite funzioni per farlo in
        tutti i browser. Ricorda però che ad ogni collegamento ad Internet
        vengono scaricati nuovi cookie, per cui l'operazione di cancellazione
        andrebbe eseguita periodicamente.
      </p>
      <p>
        Volendo, alcuni browser offrono dei sistemi automatizzati per la
        cancellazione periodica dei cookie.
      </p>
      <br />
      <p>
        Maggiori informazioni sulla privacy che garantisce Matomo all'indirizzo{" "}
        <a
          href="https://matomo.org/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://matomo.org/privacy/
        </a>
      </p>
      <p>
        Altre informazioni sui cookie{" "}
        <a
          href="https://www.cookiechoices.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.cookiechoices.org/
        </a>
      </p>
      <p>
        Pagina informativa sui cookie del Garante della Privacy{" "}
        <a
          href="http://www.garanteprivacy.it/cookie"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://www.garanteprivacy.it/cookie
        </a>
      </p>
      <p>
        Per maggiori informazioni riguardanti la politica della privacy di
        questo blog potete contattarmi per email al seguente indirizzo: s.foschi
        [chiocciola] protonmail.com
      </p>
    </Layout>
  )
}

export default PrivacyPolicy
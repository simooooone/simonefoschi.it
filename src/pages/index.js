import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

// TODO localization

const IndexPage = () => {
  return (
    <Layout myimg="1" alt="Simone Foschi Developer">
      <Head
        title="Simone Foschi, Frontend Developer"
        description="Il mio sito web personale con blog su amministrazione sistemistica, programmazione e le meraviglie dell'Open Source."
      />
      <section>
        <header>
          <h1>### Chi sono</h1>
        </header>
        <article>
          <p>
            Sono uno Sviluppatore Frontend da molto tempo con molta esperienza
            in HTML e CSS ed una conoscenza intermedia di js e di molte cose che
            ci girano attorno.
          </p>
          <p>Uso Linux come OS per lo sviluppo.</p>
          <p>
            Ho la capacità di trovare soluzioni a problemi con un pensiero
            articolato e spesso non in linea con il comune senso di
            responsabilità limitata a quello che "devo" fare. Sono in continua
            evoluzione e grazie all'esperienza ed alla passione per
            l'automazione dei task quotidiani ho una capacità di architettare
            soluzioni in maniera pratica, che risultino semplici nell'utilizzo e
            coordinate per raggiungere lo scopo della massima velocità di
            esecuzione.
          </p>
          <p>
            Essendo molto empatico e disponibile, risulto un eccellente team
            player catalizzando molte volte l'attenzione e la simpatia dei miei
            colleghi. Lavoro per il gruppo e cerco sempre di essere all'altezza
            delle sue migliori menti.
          </p>
          <p>Amo le sfide e cerco di essere sempre competitivo.</p>
          <p>
            Adoro dispensare trucchi, consigli e best practices su quello che
            so, in maniera leale senza svilire la professionalità e le
            convinzioni altrui.
          </p>
          {/* <p>
            Credo che quelli che per i bulli sono dei deboli abbiano tanta forza
            e talento da esprimere perché la rabbia dell'umiliazione è una lotta
            gigantescha che si affronta eroicamente quasi sempre da soli. E nel
            momento in cui si reagisce dà una forza spropositata. Lo so bene
            perché anch'io sono un debole e non mi vergogno affatto ad
            ammetterlo, anzi è la mia forza ed adoro e cerco far forza a chi è
            passato dalle porte dell'umiliazione.
          </p> */}
          <p>
            Talvolta risulto eccessivo ma accetto di buon grado le critiche
            cercando di migliorarmi costantemente sia sotto l'aspetto umano che
            sotto l'aspetto professionale.
          </p>
          <p>
            Ho la ferma convinzione che non si può essere semplicemente
            perfetti. E il primo a sbagliare è chi lo suppone.
          </p>
          <p>
            Una delle mie grandi passioni, oltre che parte integrante del mio
            lavoro, è sempre stare informato sull'evoluzione tecnologica e
            cercare di colmare i continui gap che inevitabilmente si creano in
            questi anni così frenetici.
          </p>
          <br />
          <blockquote>
            A small step for a man is frequently also a small step for humanity.
            But many small steps of the humanity made the longest walk we know a
            being can make in the universe. Dream on, we can make even better.
          </blockquote>
          <br />
          <br />
        </article>
        <br />
        <footer>
          <p>
            <Link to="/resume">Curriculum completo &rsaquo;</Link>
          </p>
        </footer>
      </section>
    </Layout>
  )
}

export default IndexPage

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
            Sono uno Sviluppatore Frontend da molto tempo con molta espeerienza
            in HTML e CSS ed una conoscenza intermedia di js e di molte cose che
            ci girano attorno.
          </p>

          <p>Amo imparare e praticare nuove cose.</p>

          <p>Amo l'Open Source e l'evoluzione umana nella tecnologia.</p>
          <br />
          <blockquote>
            A small step for a man frequently is a small step for humanity. But
            many small steps of the humanity made the longest walk we know a
            being can make in the universe. Dream on, we can make better.
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

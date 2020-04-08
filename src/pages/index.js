import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

// TODO localization

const IndexPage = () => {
  return (
    <Layout myimg="1">
      <Head
        title="Simone Foschi, Frontend Developer"
        description="Personal blog on Sysadmin things, programming and Open Source wonders."
      />
      <section>
        <header>
          <h1>### Chi sono</h1>
        </header>
        <article>
          <p>Italo-Sammarinese</p>
          <p>
            Nel tempo libero mi piace lavorare su JS, React, Gatsby, GraphQL,
            Git, Amministrazione Linux, domotica e Docker.
          </p>

          <p>
            Amo imparare e praticare l'inglese, programmazione e amministrazione
            di sistemi.
          </p>

          <p>Amo l'Open Source e l'evoluzione tecnologica.</p>
          <br />
          <blockquote>
            L'esperienza è l'attitudine a fare cose come dovrebbero essere
            realizzate e saper spiegare la tecnologia usata ed i suoi limiti
          </blockquote>
        </article>
        <br />
        <footer>
          <p>
            <Link to="/resume">Full resume &rsaquo;</Link>
          </p>
        </footer>
      </section>
    </Layout>
  )
}

export default IndexPage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

// TODO localization

const IndexPage = () => {
  const path = require("path")
  /* const url = require("url") */
  /* let url = path.parse(window.location.href)*/
  console.log(window.location.href)

  /* console.log(url.parse()) */
  return (
    <Layout myimg="1">
      <Head
        title="Simone Foschi, Frontend Developer"
        description="Personal blog on Sysadmin things, programming and Open Source wonders."
      />
      <section>
        <header>
          <h1>### Who I am</h1>
        </header>
        <article>
          <p>Half Italian, half Sammarinese (from Repubblic of San Marino)</p>

          <p>
            In my spare time I enjoy working on JS, React, Gatsby, GraphQL, Git,
            Linux, home automation and Docker.
          </p>

          <p>
            Love learning and to practice english, programming and sysadmin
            things.
          </p>

          <p>Love Open Source and evolution in technology.</p>
          <br />
          <blockquote>
            Seniority is the attitude to do things as they should and to be able
            to explain them and the limits of the technology adopted
          </blockquote>
          <br />
          <br />
          <h2>### Chi sono</h2>
          <p>Italo-Sammarinese</p>

          <p>
            Nel tempo libero mi piace lavorare su JS, React, Gatsby, GraphQL,
            Git, Linux, domotica e Docker.
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

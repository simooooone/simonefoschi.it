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
        description="Frontend developer working on HTML, CSS and jQuery. Trying to learn open source frameworks and tools to become powerful."
      />
      <section>
        <header>
          <h1>### Who I am</h1>
          

        </header>
        <article>
          <p>Half Italian, half Sammarinese (from Repubblic of San Marino)</p>
          
          <p>In my spare time I enjoy working on JS, React, Gatsby, GraphQL, Git, Linux, home automation and Docker.</p>
          
          <p>Love learning and to practice english, programming and sysadmin things.</p>
          
          <p>Love Open Source and evolution in technology.</p>
          <br />
          <blockquote>Seniority is the attitude to do things as they should and to be able to explain them and the limits of the technology adopted</blockquote>
          <br />
          <br />
          <h2>### Chi sono</h2>
          <p>Italo-Sammarinese</p>

          <p>Il tempo libero lo dedico a JS, React, Gatsby, GraphQL, Git, Linux, domotica e Docker.</p> 

          <p>Amo imparare e praticare l'inglese, programmazione e amministrazione di sistemi.</p>

          <p>Amo l'open source e l'evoluizione tecnologica.</p>
          <br />
          

          <blockquote>L'esperienza è l'attitudine a fare cose come dovrebbero essere realizzate e saper spiegare la tecnologia usata ed i suoi limiti</blockquote>
        </article><br />
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


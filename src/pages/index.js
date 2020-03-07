import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

// TODO: inserire link al repository su github
// TODO: aggiornare immagine della pagina contatti con l'ultima che ha spedito l'Irina

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
          <p>In my spare time I enjoy working on JS, Reactjs, Gatsbyjs, GraphQL, Git, Linux and Docker.</p>
          <p>Love learning and to practice english, programming and sysadmin things.</p>
          <p>Love Open Source and evolution in technology</p>

          <blockquote>Seniority is the attitude to do things as they should be.</blockquote>
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

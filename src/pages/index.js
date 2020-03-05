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
          <h1>### Hi, I'm Simo</h1>
        </header>
        <article>
          <p>Born in Italy, living in Republic of San Marino</p>
          <p>In my spare time I enjoy working on JS, Reactjs, Gatsbyjs, GraphQL, Git, Linux and Docker.</p>
          <p>Love learing and to practice programming and sysadmin things.</p>
          <p>Love for Open Source and evolution in technology</p>
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

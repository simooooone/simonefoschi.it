import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

// TODO localization

const IndexPage = () => {
  return (
    <Layout myimg="1" alt="Simone Foschi Frontend Developer">
      <Head
        title="Simone Foschi, Frontend Developer"
        description="Personal blog on Sysadmin things, programming and Open Source wonders."
      />
      <section>
        <header>
          <h1>### Who I am</h1>
        </header>
        <article>
          <p>
            Hi, I am a long time Frontend Developer with strong experience in
            CSS and HTML and a good understanding of js and realted echosystem.
          </p>
          <p>Excited about implementing and learning new things.</p>
          <p>Love Open Source and evolution in technology.</p>
          <br />
          <blockquote>
            A small step for a man is a small step for humanity. But many small
            steps of the humanity made the longest walk we know a being can make
            in the universe. <br />
            <br />
            Dream on, we can make even better.
          </blockquote>
          <br />
          <br />
        </article>
        <br />
        <footer>
          <p>
            <Link to="/en/resume">Full resume &rsaquo;</Link>
          </p>
        </footer>
      </section>
    </Layout>
  )
}

export default IndexPage

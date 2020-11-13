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
          <p>Half Italian, half Sammarinese (from Repubblic of San Marino)</p>

          <p>
            In my spare time I enjoy working on JS, React, Gatsby, GraphQL, Git,
            Linux admin, home automation and Docker.
          </p>

          <p>
            Love learning and to practice english, programming and sysadmin
            things.
          </p>

          <p>Love Open Source and evolution in technology.</p>
          <br />
          <blockquote>
            Seniority is the attitude to do things as they should and to be able
            to understand technology limits and to know about alternatives
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

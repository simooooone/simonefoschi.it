import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

/*
import immagine1 from "./img/img-home-1.jpg"
import immagine2 from "./img/img-home-2.jpg"
import immagine3 from "./img/img-home-3.jpg"
import immagine4 from "./img/img-home-4.jpg"
*/

const IndexPage = () => {
  return (
    <Layout>
      <Head
        title="Simcko aka Simo, Senior Frontend Developer"
        description="Frontend developer working on HTML, CSS and Javascript. Trying to learn open source and new methodologies to learn how to do things and to become powerful."
      />
      <section>
        <header>
          <h1>Hi, I'm Simcko aka Simo</h1>
        </header>
        <article>
          <p>+++++ CSS</p>
          <p>+++++ HTML</p>
          <p>++++ jQuery</p>
          <p>++++ Javascript</p>
          <p>+++ Raspberry Pi</p>
          <p>+++ ASP.NET</p>
          <p>+++ Linux</p>
          <p>+++ MSSql Server</p>
          <p>++ WordPress</p>
          <p>++ Reactjs</p>
          <p>++ Gatsbyjs</p>
        </article><br />
        <footer>
          <p>
            <Link to="/about">-> storybook</Link>
          </p>
        </footer>
      </section>
    </Layout>
  )
}

export default IndexPage

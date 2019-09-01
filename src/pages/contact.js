import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
const ContactPage = () => {
  return (
    <Layout>
      <Head title="Ways to contact me" description="At your service" />
      <h1>Contact me</h1>
      <p>The best way to reach me is via</p>
      <ul className="lista-v">
        <li>
          <a
            rel="noopener noreferrer"
            href="https://twitter.com/@simooooone"
            target="_blank"
          >
            @simooooone
          </a>{" "}
          on Twitter
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/simone-foschi/"
            target="_blank"
          >
            @simone-foschi
          </a>{" "}
          on Linkedin
        </li>
        <li><u className="title-color">s dot foschi at protonmail dot com</u> via mail</li>
      </ul>
    </Layout>
  )
}

export default ContactPage

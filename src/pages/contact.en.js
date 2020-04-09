import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
const ContactPage = () => {
  return (
    <Layout myimg="4">
      <Head
        title="Simone Foschi Frontend Developer"
        description="Ways to contact me."
      />
      <h1>### Contact me</h1>
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
        <li>
          <a
            rel="noopener noreferrer"
            href="https://github.com/simooooone"
            target="_blank"
          >
            @simooooone
          </a>{" "}
          on Github
        </li>
        <li>
          <a
            href="mailto:s.foschi@protonmail.com?subject=info from simonefoschi.it"
            target="_blank"
          >
            via mail
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default ContactPage

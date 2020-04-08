import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
const ContactPage = () => {
  return (
    <Layout myimg="4">
      <Head title="Ways to contact me" description="At your service" />
      <h1>### Contattami</h1>
      <p>I migliori modi per metterti in contatto con me sono:</p>
      <ul className="lista-v">
        <li>
          <a
            rel="noopener noreferrer"
            href="https://twitter.com/@simooooone"
            target="_blank"
          >
            @simooooone
          </a>{" "}
          su Twitter
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/simone-foschi/"
            target="_blank"
          >
            @simone-foschi
          </a>{" "}
          su Linkedin
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            href="https://github.com/simooooone"
            target="_blank"
          >
            @simooooone
          </a>{" "}
          su Github
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

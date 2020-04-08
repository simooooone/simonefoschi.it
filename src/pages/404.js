import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout myimg="1">
      <Head
        title="404 | Page not found"
        description="Sorry, the page you requested cannot be found."
      />
      <h1>404 Page not found - Pagina non trovata :-(</h1>
      <p>La pagina richiesta non è stata trovata.</p>
      <p>The page you requested cannot be found.</p>
      <br />
      <p>
        <Link to="/">&lsaquo; Torna alla Home - Back to Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound

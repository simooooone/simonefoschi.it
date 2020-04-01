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
      <h1>Page not found :-(</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound

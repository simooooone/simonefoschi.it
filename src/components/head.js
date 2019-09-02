import React from "react"
import { Helmet } from "react-helmet"

import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <Helmet>
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={`${description} | ${data.site.siteMetadata.description}`} />
      <link href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap" rel="stylesheet" /> 
    </Helmet>
  )
}

export default Head

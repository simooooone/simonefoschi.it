import React from "react"

import { graphql, useStaticQuery } from "gatsby"
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className="footer">
      <p>Site created by {data.site.siteMetadata.author} &copy; 2019</p>
    </footer>
  )
}

export default Footer
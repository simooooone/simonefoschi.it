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
      <p>
        <a target="_blank" href="/rss.xml">
          RSS
        </a>
      </p>
      <p>Site created by {data.site.siteMetadata.author} &copy; 2019/2020</p>
    </footer>
  )
}

export default Footer

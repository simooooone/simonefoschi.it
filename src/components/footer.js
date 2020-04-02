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
      <p>Site created by {data.site.siteMetadata.author} &copy; 2018/2020</p>
      <p>
        <Link
          className="navItem"
          activeClassName="activeNavItem"
          to="/cookie-policy"
        >
          Privacy & Cookie Policy
        </Link>
      </p>
    </footer>
  )
}

export default Footer

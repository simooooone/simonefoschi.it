import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"
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
      <iframe
        style="border: 0; height: 200px; width: 300px;"
        src="https://matomo.duckdns.org/index.php?module=CoreAdminHome&action=optOut&language=it&backgroundColor=&fontColor=&fontSize=17px&fontFamily="
      ></iframe>
    </footer>
  )
}

export default Footer

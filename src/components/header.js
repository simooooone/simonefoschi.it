import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className="header">
      <h3>
        <Link className="title" activeClassName="activeNavItem" to="/">
          {data.site.siteMetadata.title}
        </Link></h3>
      <nav>
        <ul className="navList">
          <li>
            <Link className="navItem" activeClassName="activeNavItem" to="/">Home page</Link>
          </li>
          <li>
            <Link className="navItem" activeClassName="activeNavItem" to="/resume">Resume</Link>
          </li>
          <li>
            <Link className="navItem" activeClassName="activeNavItem" to="/blog">Blog</Link>
          </li>
          <li>
            <Link className="navItem" activeClassName="activeNavItem" to="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

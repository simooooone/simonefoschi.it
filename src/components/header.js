import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

//import './header.module.scss'
import headerStyles from './header.module.scss'

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
    <header className={headerStyles.header}>
      <h3>
        <Link className={headerStyles.title} activeClassName={headerStyles.activeNavItem} to="/">
          {data.site.siteMetadata.title}
        </Link></h3>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home page</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

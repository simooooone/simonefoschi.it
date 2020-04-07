import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Language from "./language"

const Header = props => {
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
      <div className="cont-flex-top">
        <div className="myimg-top flex-1 fullWidth">
          <Link to="/">
            <img src={require("../img/simo-" + props.myimg + ".jpg")} />
          </Link>
        </div>
        <div className="myname-top flex-2">
          <h3>
            <Link className="title" activeClassName="activeNavItem" to="/">
              {data.site.siteMetadata.title}
            </Link>
          </h3>
          <h4>Frontend Developer</h4>
        </div>
      </div>
      <div className="cont-flex-menu">
        <Language />
        <nav>
          <ul className="navList">
            <li>
              <Link
                className="navItem"
                activeClassName="activeNavItem"
                to="/resume"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                className="navItem"
                activeClassName="activeNavItem"
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="navItem"
                activeClassName="activeNavItem"
                to="/contact"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

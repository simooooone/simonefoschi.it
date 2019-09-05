import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const BarraBloccata = props => {
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
    <div className="blkBB">
      <div className="container-nocol">
        <div className="content">
          <div class="contSx">
            <div className="imgBB fullWidth">
              <Link to="/">
                <img
                  src={require("../pages/img/simo-" + props.myimg + ".jpg")}
                />
              </Link>
            </div>
            <div className="nomeBB">
              <Link className="title" activeClassName="activeNavItem" to="/">
                {data.site.siteMetadata.author}
              </Link>
            </div>
          </div>
          <div className="menuBB">
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
        </div>
      </div>
    </div>
  )
}

export default BarraBloccata

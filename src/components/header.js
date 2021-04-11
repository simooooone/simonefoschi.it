import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Language from "./language"
import img1 from "./../img/simo-1.jpg"
import img2 from "./../img/simo-2.jpg"
import img3 from "./../img/simo-3.jpg"
import img4 from "./../img/simo-4.jpg"
import img5 from "./../img/simo-5.jpg"

const Header = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const url = typeof window !== "undefined" ? window.location.href : ""
  let lang = url.includes("/en/") ? "/en" : ""

  const renderImg = () => {
    let img
    switch (props.myimg) {
      case "1":
        img = img1
        break
      case "2":
        img = img2
        break
      case "3":
        img = img3
        break
      case "4":
        img = img4
        break
      case "5":
        img = img5
        break
      default:
        img = img1
        break
    }
    return <img src={img} width="130" height="130" alt={props.alt} />
  }

  return (
    <header className="header">
      <div className="cont-flex-top">
        <div className="myimg-top flex-1 fullWidth">
          <Link to={lang + "/"}>{renderImg()}</Link>
        </div>
        <div className="myname-top flex-2">
          <h3>
            <Link
              className="title"
              activeClassName="activeNavItem"
              to={lang + "/"}
            >
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
                to={lang + "/resume"}
              >
                {lang ? "Resume" : "Curriculum"}
              </Link>
            </li>
            <li>
              <Link
                className="navItem"
                activeClassName="activeNavItem"
                to={lang + "/blog"}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="navItem"
                activeClassName="activeNavItem"
                to={lang + "/contact"}
              >
                {lang ? "Contacts" : "Contatti"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

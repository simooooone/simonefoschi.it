import React from "react"
import Footer from "./footer"
import Header from "./header"
import "../styles/style.scss"

const Layout = props => {
  return (
    <div className="container">
      <div className="content">
        <Header myimg={props.myimg} />
        <div className="barra-sx"></div>
        <div className="content">{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout

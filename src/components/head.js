import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <Helmet>
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={`${description} | ${data.site.siteMetadata.description}`}
      />
      <link
        href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
        rel="stylesheet"
      />

      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={require("../img/favicons/apple-touch-icon.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={require("../img/favicons/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={require("../img/favicons/favicon-16x16.png")}
      />
      <link
        rel="mask-icon"
        href={require("../img/favicons/safari-pinned-tab.svg")}
        color="#ffffff"
      />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  )
}

export default Head

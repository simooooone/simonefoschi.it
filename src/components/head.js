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
  const url = typeof window !== "undefined" ? window.location.href : ""
  let langPage = url.includes("/en/") ? "en" : "it"

  return (
    <Helmet htmlAttributes={{ lang: langPage }}>
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={`${description} | ${data.site.siteMetadata.description}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="../favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../favicons/favicon-32x32.png"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function (url) {
              let xhr = new XMLHttpRequest()
              xhr.open("GET", url, true)
              xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                  var css = xhr.responseText
                  var head = document.getElementsByTagName("head")[0]
                  var style = document.createElement("style")
                  style.appendChild(document.createTextNode(css))
                  head.appendChild(style)
                }
              }
              xhr.send()
            })("https://fonts.googleapis.com/css?family=Inconsolata&display=swap")
          `,
        }}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../favicons/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="../favicons/safari-pinned-tab.svg"
        color="#ffffff"
      />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="theme-color" content="#ffffff" />
      {"<!-- Google / Search Engine Tags -->"}
      <meta
        itemprop="name"
        content="Simone Foschi, Frontend Developer | Simone Foschi"
      />
      <meta
        itemprop="description"
        content="Personal blog on Sysadmin things, programming and Open Source wonders | Simone Foschi Frontend Developer."
      />
      <meta itemprop="image" content="" />
      {"<!-- Facebook Meta Tags -->"}
      <meta property="og:url" content="https://www.simonefoschi.it" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Simone Foschi, Frontend Developer | Simone Foschi"
      />
      <meta
        property="og:description"
        content="Personal blog on Sysadmin things, programming and Open Source wonders | Simone Foschi Frontend Developer."
      />
      <meta property="og:image" content="" />
      {"<!-- Twitter Meta Tags -->"}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Simone Foschi, Frontend Developer | Simone Foschi"
      />
      <meta
        name="twitter:description"
        content="Personal blog on Sysadmin things, programming and Open Source wonders | Simone Foschi Frontend Developer."
      />
      <meta name="twitter:image" content="" />
      {"<!-- Meta Tags Generated via http://heymeta.com -->"}
    </Helmet>
  )
}

export default Head

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
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-162623389-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-162623389-1');
      </script>

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

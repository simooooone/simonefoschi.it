module.exports = {
  siteMetadata: {
    title: "Simone Foschi",
    description:
      "Simone Foschi Frontend Developer. Personal blog on Sysadmin things and Open Source wonders.",
    author: "Simo",
    siteUrl: `https://www.simonefoschi.it/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  update: [edge.node.frontmatter.update],
                  url: site.siteMetadata.siteUrl + "/" + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + "/" + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { frontmatter: { date: { ne: null }, update: { ne: null } } }
                  sort: {
                    fields: [frontmatter___update, frontmatter___date]
                    order: DESC
                  }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        update
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Simone Foschi's RSS Feed",
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/pages`,
      },
    },

    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        whitelist: [
          "blockquote",
          "fullWidth",
          "flex-left",
          "flex-right",
          "flex",
          "code",
          "pre",
        ], // Don't remove this selector
        ignore: ["highlight.js/", "react-syntax-highlighter/"], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simo's blog`,
        short_name: `Simo's`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cfe180`,
        display: `minimal-ui`,
        icon: `src/img/favicons/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
}

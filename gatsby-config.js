module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: "Simone Foschi",
    description: "Simone Foschi Frontend Developer.",
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
              return allMarkdownRemark.edges.map((edge) => {
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
            title: "Simone Foschi",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: "it",
        langKeyForNull: "it",
        prefixDefault: false,
        useLangKeyLayout: false,
        pagesPaths: ["/src/pages"],
      },
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://matomo.duckdns.org",
        siteUrl: "https://www.simonefoschi.it",
        disableCookies: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
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
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    /* 
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/favicons`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/pages`,
      },
    },*/

    /* {
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
    }, */
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Simo's blog",
        short_name: "Simo's",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#cfe180",
        display: "minimal-ui",
        icon: "src/favicons/android-chrome-512x512.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-cookiehub-banner`,
      options: {
        // The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
        cookieHubId: "5e915478",
        // Optional parameter (default false) - Use new v2 API.
        cookieHubV2Api: true,
        // Categories configured with CookieHub
        categories: [
          {
            categoryName: "analytics", // Unique id of the category which is set by Cookiehub.
            cookieName: "gatsby-plugin-matomo-gdpr_cookies-enabled", // Your custom cookie name
          },
        ],
      },
    }, // gatsby-config.js
    {
      resolve: "gatsby-plugin-web-vitals",
      options: {
        // The Google Analytics property ID; the reporting code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // An array with metrics you want to track and send to analytics
        metrics: [`FID`, `TTFB`, `LCP`, `CLS`, `FCP`],
        // Event Category (optional) { string }, default 'Web Vitals'
        eventCategory: "Performance",
        // Include Web Vitals tracking in development
        // Defaults to false meaning Vitals will only be tracked in production.
        includeInDevelopment: false,
        // Prints metrics in the console when true
        debug: false,
      },
    },
    "gatsby-plugin-netlify-cms",
  ],
}

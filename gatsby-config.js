module.exports = {
  siteMetadata: {
    title: 'Simone Foschi',
    description: '.',
    author: 'Simo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/pages`,
      },
    },
    /*
    {
       resolve: 'gatsby-plugin-purgecss',
       options: {
         printRejected: true, // Print removed selectors and processed file names
         // develop: true, // Enable while using `gatsby develop`
         // tailwind: true, // Enable tailwindcss support
         whitelist: ['blockquote', 'fullWidth', 'flex-left', 'flex-right', 'flex', 'code', 'pre'], // Don't remove this selector
         ignore: ['highlight.js/', 'react-syntax-highlighter/'], // Ignore files/folders
         // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },*/
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `simonefoschi.it`,
        short_name: `simonefoschi.it`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
//        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline'
  ]
}

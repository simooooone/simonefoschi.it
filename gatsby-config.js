module.exports = {
  siteMetadata: {
    title: 'Simone Foschi',
    description: '.',
    author: 'Simo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
       resolve: 'gatsby-plugin-purgecss',
       options: {
         printRejected: true, // Print removed selectors and processed file names
         // develop: true, // Enable while using `gatsby develop`
         // tailwind: true, // Enable tailwindcss support
         whitelist: ['blockquote', 'fullWidth', 'flex-left', 'flex-right', 'flex', 'code', 'pre'], // Don't remove this selector
         // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
         // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth:750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
          name: `GatsbyJS`,
          short_name: `GatsbyJS`,
          start_url: `/`,
          background_color: `#f7f0eb`,
          theme_color: `#a2466c`,
          display: `standalone`,
          icon: `./static/MrBilly_Logo.png`, 
      },
    }
  ],
}

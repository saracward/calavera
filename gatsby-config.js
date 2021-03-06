const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Calavera`,
    description: ``,
    author: `@gatsbyjs`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto Mono`,
    //         variants: [`400`, `700`],
    //       },
    //       {
    //         family: `Roboto`,
    //         subsets: [`latin`],
    //       },
    //       {
    //         family: `Impact`,
    //       },
    //     ],
    //   },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xn2nr3mv0iiw`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `zlgsPgwfRzjkyeakMhKrOLBg0E4S99Mlt0PCtMtkMVE`,
      },
    },
    // ["gatsby-plugin-theme-ui"],
  ],
}
// this (optional) plugin enables Progressive Web App + Offline functionality
// To learn more, visit: https://gatsby.dev/offline
// `gatsby-plugin-offline`,gatsby

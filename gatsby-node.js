/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { pseudoRandomBytes } = require("crypto")
// const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const imagePage = path.resolve(`./src/templates/image-page-contentful`)
  return graphql(
    `
      {
        allContentfulGraphicImage {
          edges {
            node {
              graphicDesignImages {
                id
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    //create image posts
    const images = result.data.allContentfulGraphicImage.edges

    images.forEach((image, index) => {
      const previous = index === images ? null : images[index + 1].node
      const next = index === 0 ? null : images[index - 1].node
    })
    createPage({
      path: post.node.graphicDesignImage,
      component: imagePage,
      context: {
        id: post.node.id,
        previous,
        next,
      },
    })
  })
}

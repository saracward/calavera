import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const DesignPage = props => {
  console.log(props)
  return (
    <Layout>
      <SEO title="Graphic design" />
      <h1>Hi from the Graphic Design page</h1>
      <p>Welcome to page 2</p>

      {props.data.allContentfulGraphicImage.edges[0].node.graphicDesignImages.map(
        (image, index) => (
          <Img fluid={image.fluid} key={image.id} />
        )
      )}
    </Layout>
  )
}

export const DesignPageQuery = graphql`
  query DesignPageQuery {
    allContentfulGraphicImage {
      edges {
        node {
          graphicDesignImages {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyContentfulFluid
            }
            id
          }
        }
      }
    }
  }
`

export default DesignPage

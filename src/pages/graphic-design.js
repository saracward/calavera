import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const DesignPage = props => {
  const designBio =
    props.data.allContentfulGraphicImageDesignBioTextNode.edges[0].node
      .designBio
  console.log(props)
  return (
    <Layout>
      <SEO title="Graphic design" />
      <h1>
        <center>Let's get creative</center>
      </h1>
      {designBio}

      {props.data.allContentfulGraphicImage.edges[0].node.graphicDesignImages.map(
        (image, index) => (
          <Img fluid={image.fluid} />
        )
      )}
    </Layout>
  )
}

export const DesignPageQuery = graphql`
  query DesignPageQuery {
    allContentfulGraphicImageDesignBioTextNode {
      edges {
        node {
          designBio
        }
      }
    }
    allContentfulGraphicImage {
      edges {
        node {
          graphicDesignImages {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default DesignPage

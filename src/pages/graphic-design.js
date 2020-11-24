import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const DesignPage = props => {
  const designBio =
    props.data.allContentfulGraphicImage.edges[0].node.designBio.designBio
  console.log(props)
  return (
    <Layout>
      <SEO title="Graphic design" />
      <br />
      <br />
      <h1 style={{ color: `#18A2B8`, fontSize: `100px` }}>
        <center>Let's get creative</center>
      </h1>
      <br />
      <br />
      {designBio}
      <br />
      <br />
      <br />

      {props.data.allContentfulGraphicImage.edges[1].node.graphicDesignImages.map(
        (image, index) => (
          <Img fluid={image.fluid} />
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
          designBio {
            designBio
          }
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

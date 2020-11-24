import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const DevPage = props => {
  console.log(props)
  return (
    <Layout>
      <SEO title="Graphic design" />

      {/* <Link to="/">Go back to the homepage</Link> */}

      {props.data.allContentfulSoftwareImages.edges[0].node.softwareDevImages.map(
        (image, index) => (
          <Img fluid={image.fluid} key={image.id} />
        )
      )}
    </Layout>
  )
}

export const devPageQuery = graphql`
  query devPageQuery {
    allContentfulSoftwareImages {
      edges {
        node {
          softwareDevImages {
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

export default DevPage

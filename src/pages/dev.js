import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const DevPage = props => {
  const devBio =
    props.data.allContentfulSoftwareImagesDevBioTextNode.nodes[0].devBio

  console.log(props)
  return (
    <Layout>
      <SEO title="Graphic design" />
      <h1>
        <center>Full Stack Development</center>
      </h1>
      {devBio}
      <br />
      <br />
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
          }
        }
      }
    }
    allContentfulSoftwareImagesDevBioTextNode {
      nodes {
        devBio
      }
    }
  }
`

export default DevPage

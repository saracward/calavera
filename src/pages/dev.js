import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./dev.css"

const DevPage = props => {
  const devBio =
    props.data.allContentfulSoftwareImagesDevBioTextNode.nodes[0].devBio

  console.log(props)
  return (
    <Layout>
      <SEO title="Graphic design" />
      <br />
      <br />
      <h1 style={{ color: `#18A2B8`, fontSize: `100px` }}>
        <center>
          <div className="devheader">Full Stack Development</div>
        </center>
      </h1>
      <br />
      <br />
      {devBio}
      <br />
      <br />
      <br />
      <br />
      {/* <Link to="/">Go back to the homepage</Link> */}

      {props.data.allContentfulSoftwareImages.edges[1].node.softwareDevImages.map(
        (image, index) => (
          <Img fluid={image.fluid} />
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

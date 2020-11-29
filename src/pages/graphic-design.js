import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./graphic-design.css"

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
        <center>
          <div className="dheader">Let's get creative</div>
        </center>
      </h1>
      <br />
      <br />
      {designBio}

      <br />
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
    allContentfulGraphicImage {
      edges {
        node {
          graphicDesignImages {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          designBio {
            designBio
          }
        }
      }
    }
  }
`

export default DesignPage

import React from "react"
// import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CalaveraPage = props => {
  console.log(props)
  return (
    <Layout>
      <SEO title="Calavera Page" />
      <h1>Hi from the Calavera page</h1>
      <p>
        Calavera is a graphic design and software development company based out
        of Atlanta, Ga. It is a company that cultivates innovative content, and
        wants to develop websites and give exposure to local mom-and-pop shops.
        Wether that may be a restaurant, shoppe, growing clothing company..
        <br />
        Calavera wants to be a part of your glow up.
        <br />
        <br />
        Calavera can make your logo, signage, branding, website, and more. All
        in one place, while you in return, can also help a local small business
        succeed.
      </p>
      {props.data.allContentfulCalavera.nodes[0].calaveraImages.map(
        (image, index) => (
          <Img fluid={image.fluid} />
        )
      )}

      {/* {{data.allContentfulCalaveraImages.edges.map(image => (
        <a key={image.node.id} img={image.node.calaveraImages}></a>
      ))}} */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulCalavera {
      nodes {
        calaveraImages {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default CalaveraPage

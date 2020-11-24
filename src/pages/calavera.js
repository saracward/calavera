import React from "react"
// import { Link } from "gatsby"
import Img from "gatsby-image"
// import { Frame, Scroll } from "framer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CalaveraPage = props => {
  const bio =
    props.data.allContentfulCalavera.edges[0].node.calaveraBio.calaveraBio
  console.log(props)
  return (
    <Layout>
      <h1>
        <center>Que es Calavera?</center>
      </h1>
      <br />
      <SEO title="Calavera Page" />
      {bio}

      {/* <h1>
        <center>Que es Calavera?</center>
      </h1>
      <br />
      <p>
        Calavera is a graphic design and software development company based out
        of Atlanta, Ga. It is a company that cultivates innovative content, and
        wants to develop websites and give exposure to local mom-and-pop shops.
        Whether that may be a restaurant, shoppe, or growing clothing company..
        <br />
        Calavera wants to be a part of your glow up.
        <br />
        <br />
        Calavera can make your logo, signage, branding, website, and more. All
        in one place, while you in return, can also help a local small business
        succeed.
      </p> */}

      {props.data.allContentfulCalavera.edges[0].node.calaveraImages.map(
        (image, index) => (
          <Img fluid={image.fluid} />
        )
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulCalavera {
      edges {
        node {
          calaveraBio {
            calaveraBio
          }
          calaveraImages {
            push
            ro
          }
        }
      }
    }
  }
`

export default CalaveraPage

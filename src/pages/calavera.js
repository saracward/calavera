import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CalaveraPage = () => (
  <Layout>
    <SEO title="Calavera Page" />
    <h1>Hi from the Calavera page</h1>
    <p>
      Calavera is a graphic design and software development company based out of
      Atlanta, Ga. It is a company that cultivates innovative content, and wants
      to develop websites and give exposure to local mom-and-pop shops. Wether
      that may be a restaurant, shoppe, growing clothing company.. Calavera
      wants to be a part of your glow up.
      <br />
      <br />
      Calavera can make your logo, signage, branding, website, and more. All in
      one place, while you in return, can also help a local small business
      succeed.
    </p>

    {/* {{data.allContentfulCalaveraImages.edges.map(image => (
        <a key={image.node.id} img={image.node.calaveraImages}></a>
      ))}} */}
  </Layout>
)
export const pageQuery = graphql`
  query IndexQuery {
    allContentfulCalaveraImages {
      edges {
        node {
          calaveraImages {
            id
          }
        }
      }
    }
  }
`

export default CalaveraPage

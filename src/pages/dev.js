import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DevPage = () => (
  <Layout>
    <SEO title="Graphic design" />
    <h1>Hi from the Dev page</h1>
    <p>words</p>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export const devPageQuery = graphql`
  query devPageQuery {
    allContentfulSoftwareImages {
      edges {
        node {
          softwareDevImages {
            id
            contentful_id
          }
        }
      }
    }
  }
`

export default DevPage

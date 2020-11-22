import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DesignPage = () => (
  <Layout>
    <SEO title="Graphic design" />
    <h1>Hi from the Graphic Design page</h1>
    <p>Welcome to page 2</p>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export const DesignPageQuery = graphql`
  query DesignPageQuery {
    allContentfulGraphicImage {
      edges {
        node {
          graphicDesignImages {
            id
            contentful_id
          }
        }
      }
    }
  }
`

export default DesignPage

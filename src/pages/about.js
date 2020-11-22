import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Graphic design" />
    <h1>Hi from the About page</h1>
    <p>Welcome to me me me</p>
    <Link to="/">close</Link>
  </Layout>
)

export default AboutPage

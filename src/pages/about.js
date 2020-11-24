import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <br />
    <SEO title="Graphic design" />
    <center>
      <small>hello</small>
    </center>
    <br />
    <h2>
      I'm a graphic designer turned software developer, living in Atlanta, Ga.{" "}
    </h2>
    <p>
      I pay attention to the finest of details and aim to anticipates clients
      needs and design wants. I also am a mother to the cutest fur baby on the
      planet.
    </p>
    <p>
      If you're interested in working together, reach out at
      sara@gocalavera.com. I'd love to learn more about your project.{" "}
    </p>
    <Link to="/">close</Link>
  </Layout>
)

export default AboutPage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./about.css"

const AboutPage = () => (
  <Layout>
    <br />
    <SEO title="Graphic design" />
    <center>
      <h3>
        I'm a <span id="spin"></span>
      </h3>
    </center>
    <br />
    <p>
      I'm a graphic designer turned software developer, living in Atlanta, Ga.{" "}
    </p>
    <p>
      I pay attention to the finest of details and aim to anticipate clients
      needs and design wants. I also am a mother to the cutest fur baby on the
      planet, Dia.
    </p>
    <p>
      If you're interested in working together, reach out at
      sara@gocalavera.com. I'd love to learn more about your project.{" "}
    </p>
    <Link
      to="/"
      style={{
        color: `#18a2b8`,
        textDecoration: `none`,
        textAlign: `right`,
      }}
    >
      exit stage right
    </Link>
  </Layout>
)

export default AboutPage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styles from "./about.css"

const AboutPage = props => {
  console.log(props)
  const aboutMe = props.data.allContentfulAboutMe.edges[0].node.aboutMe.aboutMe

  return (
    <Layout>
      <br />
      <SEO title="Graphic design" />
      <center>
        <h3>
          I'm a <span id="spin"></span>
        </h3>
      </center>
      <br />
      {aboutMe}
      <Link
        to="/"
        style={{
          color: `#18a2b8`,
          textDecoration: `none`,
          textAlign: `right`,
        }}
      >
        <br />
        <br />
        exit stage right
      </Link>
    </Layout>
  )
}

export const aboutPageQuery = graphql`
  query aboutPageQuery {
    allContentfulAboutMe {
      edges {
        node {
          aboutMe {
            aboutMe
          }
        }
      }
    }
  }
`

export default AboutPage

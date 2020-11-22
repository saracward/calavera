import React from "react"
import { Link, graphql } from "gatsby"
// import { allContentfulCalaveraImages } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p>Lets talk</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}

      {/* {data.allContentfulCalaveraImages.edges.map(image => (
        <a key={image.node.id} img={image.node.calaveraImages}></a>
      ))} */}
    </div>
    <Link to="/graphic-design/">Go to Graphic Design Page</Link> <br />
    <Link to="/dev/">Go to Software Development Page</Link> <br />
    <Link to="/calavera/">Go to Calavera Page</Link> <br />
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    <br />
  </Layout>
)

export default IndexPage

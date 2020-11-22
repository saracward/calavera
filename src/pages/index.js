import React from "react"
import { Link, graphql } from "gatsby"
// import { allContentfulCalaveraImages } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <Layout>
    <Carousel style={{ textAlign: `center`, padding: `2.2rem` }}>
      <Carousel.Item>
        <Link
          to="/calavera/"
          style={{
            color: `black`,
            fontSize: `3rem`,
            textDecoration: `none`,
            padding: `1rem`,
          }}
          className="calavera"
        >
          CALAVERA
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/graphic-design/"
          style={{
            color: `black`,
            fontSize: `3rem`,
            textDecoration: `none`,
            padding: `1rem`,
          }}
          className="design"
        >
          DESIGN
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link
          to="/dev/"
          style={{
            color: `black`,
            fontSize: `3rem`,
            textDecoration: `none`,
            padding: `1rem`,
          }}
          className="dev"
        >
          DEV
        </Link>
      </Carousel.Item>
    </Carousel>
  </Layout>
  // <Layout>
  //   <SEO title="Home" />
  //   {/* <p>Lets talk</p> */}
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     {/* <Image /> */}

  //     {/* {data.allContentfulCalaveraImages.edges.map(image => (
  //       <a key={image.node.id} img={image.node.calaveraImages}></a>
  //     ))} */}
  //   </div>
  //   <Link
  //     to="/calavera/"
  //     style={{
  //       color: `black`,
  //       fontSize: `3rem`,
  //       textDecoration: `none`,
  //       padding: `1rem`,
  //     }}
  //     className="calavera"
  //   >
  //     CALAVERA
  //   </Link>{" "}
  //   <br />
  //   <Link
  //     to="/graphic-design/"
  //     style={{
  //       color: `black`,
  //       fontSize: `3rem`,
  //       textDecoration: `none`,
  //       padding: `1rem`,
  //     }}
  //     className="design"
  //   >
  //     DESIGN
  //   </Link>{" "}
  //   <br />
  //   <Link
  //     to="/dev/"
  //     style={{
  //       color: `black`,
  //       fontSize: `3rem`,
  //       textDecoration: `none`,
  //       padding: `1rem`,
  //     }}
  //     className="dev"
  //   >
  //     DEV
  //   </Link>{" "}
  //   <br />
  //   {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  //   <br />
  // </Layout>
)

export default IndexPage

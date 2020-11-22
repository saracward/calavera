import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>CALAVERA</h1>
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
    <p>Lets talk</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    <Link to="/graphic-design/">Go to Graphic Design Page</Link> <br />
    <Link to="/dev/">Go to Software Development Page</Link> <br />
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    <br />
  </Layout>
)

export default IndexPage

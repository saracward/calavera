import React from "react"
import { Link } from "gatsby"
// import { allContentfulCalaveraImages } from "@contentful/rich-text-react-renderer"
// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { motion } from "framer-motion"

const IndexPage = () => (
  <Carousel>
    <Carousel.Item>
      <Link
        to="/calavera/"
        style={{
          color: `black`,
          fontSize: `3rem`,
          textDecoration: `none`,
        }}
        className="calavera"
      >
        <div class="carousel slide" data-ride="carousel">
          <div class="carousel-inner bg-info" role="listbox">
            <div class="carousel-item active">
              {/* <img src="https://i.ibb.co/pzCGZDn/1500x800.png" alt="Slide 1" /> */}
              <div class="d-flex align-items-center justify-content-center min-vh-100">
                <motion.button
                  whileHover={{ scale: 1.7 }}
                  whileTap={{ scale: 1.5 }}
                >
                  <h1 class="display-1">calavera</h1>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Carousel.Item>

    <Carousel.Item>
      <Link
        to="/graphic-design/"
        style={{
          color: `black`,
          fontSize: `3rem`,
          textDecoration: `none`,
        }}
        className="design"
      >
        <div class="carousel slide" data-ride="carousel">
          <div class="carousel-inner bg-info" role="listbox">
            <div class="carousel-item active">
              <div class="d-flex align-items-center justify-content-center min-vh-100">
                <motion.button
                  whileHover={{ scale: 1.7 }}
                  whileTap={{ scale: 1.5 }}
                >
                  <h1 class="display-1">design</h1>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Carousel.Item>
    <Carousel.Item>
      <Link
        to="/dev/"
        style={{
          color: `black`,
          fontSize: `3rem`,
          textDecoration: `none`,
        }}
        className="dev"
      >
        <div class="carousel slide" data-ride="carousel">
          <div class="carousel-inner bg-info" role="listbox">
            <div class="carousel-item active">
              <div class="d-flex align-items-center justify-content-center min-vh-100">
                <motion.button
                  whileHover={{ scale: 1.7 }}
                  whileTap={{ scale: 1.5 }}
                >
                  <h1 class="display-1">hello world</h1>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Carousel.Item>
  </Carousel>
)

export default IndexPage

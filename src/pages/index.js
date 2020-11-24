import React from "react"
import { Link } from "gatsby"
// import Image from "../components/image"
// import SEO from "../components/seo"
import { Carousel } from "react-bootstrap"
import styles from "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import { motion } from "framer-motion"

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
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner bg-info" role="listbox">
            <div className="carousel-item active">
              {/* <img src="https://i.ibb.co/pzCGZDn/1500x800.png" alt="Slide 1" /> */}
              <div className="d-flex align-items-center justify-content-center min-vh-100">
                {/* <motion.button
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: 1.5 }}
                > */}
                <div className="typewriter">
                  <center>
                    <h1 className="typewriter-text">la compañia</h1>
                    <h5 style={{ opacity: `.3` }}>| calavera |</h5>
                  </center>
                </div>
                {/* </motion.button> */}
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
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner bg-info" role="listbox">
            <div className="carousel-item active">
              <div className="d-flex align-items-center justify-content-center min-vh-100">
                {/* <motion.button
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: 1.5 }}
                > */}
                <div>
                  <center>
                    <h1 className="typewriter-text">oh, crop</h1>
                    <h5 style={{ opacity: `.3` }}>| design |</h5>
                    {/* </motion.button> */}
                  </center>
                </div>
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
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner bg-info" role="listbox">
            <div className="carousel-item active">
              <div className="d-flex align-items-center justify-content-center min-vh-100">
                <div>
                  <center>
                    <h1 className="typewriter-text">hello world</h1>
                    <h5 style={{ opacity: `.3` }}>| software development |</h5>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Carousel.Item>
  </Carousel>
)

export default IndexPage

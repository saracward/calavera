import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.css"

const Header = ({}) => (
  <header
    style={{
      background: `#18A2B8`,
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 900,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <center>
        <nav>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            <img src="https://i.ibb.co/wJd9Dys/logo.png" className="NavLink" />
          </Link>

          <Link
            to="https://github.com/saracward"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            <img
              src="https://i.ibb.co/7vH24yT/github.png"
              className="NavLink"
            />
          </Link>
          <Link
            to="https://www.instagram.com/calaveraatl/?hl=en"
            style={{
              color: `black`,
              textDecoration: `none`,
              padding: `.5rem`,
            }}
          >
            <img src="https://i.ibb.co/X3v7DgD/ig.png" className="NavLink" />
          </Link>
          <Link
            to="https://dev.to/saracward"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            <img src="https://i.ibb.co/N7PqBQx/dev.png" className="NavLink" />
          </Link>
          <Link href="mailto:sara@gocalavera.com">
            <img
              src="https://i.ibb.co/jrmV14b/contact.png"
              className="NavLink"
            />
            <Link
              to="/about/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              <img src="https://i.ibb.co/6vkyTvv/me.png" className="NavLink" />
            </Link>
          </Link>
        </nav>
      </center>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `saraward`,
}

export default Header

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({}) => (
  <header
    style={{
      background: `gold`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          sara ward
        </Link>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav> */}
      </h2>
      <nav>
        <Link
          to="https://github.com/saracward"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <img src="https://i.ibb.co/7vH24yT/github.png" />
        </Link>
        <Link
          to="https://www.instagram.com/calaveraatl/?hl=en"
          style={{
            color: `black`,
            textDecoration: `none`,
            padding: `.5rem`,
          }}
        >
          <img src="https://i.ibb.co/X3v7DgD/ig.png" />
        </Link>
        <Link
          to="https://dev.to/saracward"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <img src="https://i.ibb.co/N7PqBQx/dev.png" />
        </Link>
      </nav>

      <div>
        <Link
          to="/about/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          About
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

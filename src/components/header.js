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
      <Link to="https://github.com/saracward">Github</Link>
      <Link to="https://www.instagram.com/calaveraatl/?hl=en">Instagram</Link>
      <Link to="https://dev.to/saracward">Dev</Link>
      <div>
        <Link to="/about/">About</Link>
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

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({}) => (
  <footer
    style={{
      background: `#18A2B8`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 900,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h4 style={{ color: `white`, display: `inline`, letterSpacing: `3px` }}>
        <center>sara ward</center>
      </h4>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `saraward`,
}

export default Footer

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="relative px-4 py-1 sm:p-1 bg-anakiwa-400 text-cranberry-700">
    <div className="p2">
      <h1 className="text-4xl">
        <Link to="/">{siteTitle}</Link>
      </h1>
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

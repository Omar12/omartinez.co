import PropTypes from "prop-types"
import React from "react"
import About from "../pages/about"

const Footer = () => (
  <footer className="bg-anakiwa-200 text-steel-gray-500">
    <div className="px-10 py-6 w-4/6">
      <About />
      <div className="pt-3 text-sm">{new Date().getFullYear()}</div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

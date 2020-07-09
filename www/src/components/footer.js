// TODO Stick footer to bottom of page
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import About from "../pages/about"
import { colors } from "../lib/css"

const Footer = () => (
  <StyledFooter>
    <div className="main container">
      <div className="row">
        <div className="col">
          <About />
          {new Date().getFullYear()}
        </div>
      </div>
    </div>
  </StyledFooter>
)

const { carbon, yellow } = colors

const StyledFooter = styled.footer`
  background: ${yellow};

  .main.container {
    background: ${yellow};
  }
`

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

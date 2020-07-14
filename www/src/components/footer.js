// TODO Stick footer to bottom of page
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import About from "../pages/about"
import CSS from "../lib/css"

const Footer = () => (
  <StyledFooter>
    <FooterDivider>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          class="shape-fill"
        ></path>
      </svg>
    </FooterDivider>
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

const { carbon, yellow } = CSS.colors

const StyledFooter = styled.footer`
  position: relative;
  background: ${yellow};
  color: ${carbon};

  .main.container {
    padding-top: 30px;
    background: transparent;
  }
`

const FooterDivider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 30px;
    transform: rotateY(180deg);
  }

  .shape-fill {
    fill: #ffffff;
  }
`

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

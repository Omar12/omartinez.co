import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors } from "../lib/css"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="container">
      <div className="row">
        <div className="col">
          <H1Title>
            <LinkTitle to="/">{siteTitle}</LinkTitle>
          </H1Title>
        </div>
      </div>
    </div>
  </StyledHeader>
)

const { carbon, yellow } = colors

const StyledHeader = styled.header`
  background: ${yellow};
  border-top: 4px solid ${carbon};
`

const H1Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 2em;
  line-height: 40px;
  letter-spacing: -0.01em;
  text-transform: capitalize;
  margin-bottom: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const LinkTitle = styled(Link)`
  color: ${carbon};
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

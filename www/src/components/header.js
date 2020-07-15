import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

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

const StyledHeader = styled.header`
  background: var(--color-primary);
  border-top: 4px solid var(--color-grey);
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
  color: var(--color-grey);
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from "react"
import styled from "styled-components"
import { fontSizes } from "../lib/css"

const AboutLinks = () => (
  <FooterLinks>
    <li>
      <a href="https://twitter.com/omar12">Twitter</a>
    </li>
    <li>
      <a href="https://github.com/omar12">Github</a>
    </li>
  </FooterLinks>
)

export default AboutLinks

const { small } = fontSizes

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  font-size: ${small};
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, max(1rem, 4rem));
`

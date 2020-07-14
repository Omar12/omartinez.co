import React from "react"
import styled from "styled-components"
import AboutLinks from "../components/aboutLinks"

const AboutPage = () => (
  <div>
    <h4>Who Am I?</h4>
    <BioParagraph>
      I’m a Frontend Software Developer from Seattle. For the 16 years of my
      professional career, I’ve been known as a “jack of all trades and a master
      of none”. I will write about anything that is worth reading. I love
      technology, music and video games. My dream job is to be a DJ.{" "}
    </BioParagraph>
    <AboutLinks />
  </div>
)

const BioParagraph = styled.p`
  font-size: 14px;
`

export default AboutPage

import React from "react"
import AboutLinks from "../components/aboutLinks"

const AboutPage = () => (
  <div className="text-perfume-500 font-light text-sm">
    <h4 className="text-xl pb-2">Who Am I?</h4>
    <p>
      My name is Omar Martinez. I’m a Lead Frontend Software Developer based out
      of Seattle. I've been a developer professionally for 16 years. I’ve been
      known as a “Jack of All Trades”. I work most of the time in JavaScript.
      This site is an attempt to share my thoughts and learnings. I love
      technology, music and video games. My dream job is to be a DJ{" "}
      <span role="img" aria-label="Black heart and headphones!">
        🖤 🎧
      </span>
      .
    </p>
    <AboutLinks />
  </div>
)

export default AboutPage

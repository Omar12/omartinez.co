/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import SEO from "../components/seo"

const Layout = ({ children }) => {
  // if (
  //   window.matchMedia &&
  //   window.matchMedia("(prefers-color-scheme: dark)").matches
  // ) {
  //   document.body.classList.add("dark")
  // }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="min-h-screen flex flex-col justify-center bg-steel-gray-500 text-anakiwa-500">
      <SEO title={data.site.siteMetadata.title} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="relative px-10 py-6 lg:container">
        <main className="prose">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

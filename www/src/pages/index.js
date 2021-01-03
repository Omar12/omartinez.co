import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  const posts = props.data.allMdx
  return (
    <Layout>
      <SEO title="Home" />
      {posts.edges.map(({ node }) => (
        <div className="posting-item pb-9" key={node.frontmatter.title}>
          <Link
            to={node.fields.slug}
            key={node.fields.slug}
            className="no-underline text-anakiwa-500"
          >
            <div className="post-details">
              <h1 className="text-wild-willow-500">{node.frontmatter.title}</h1>
              <p className="text-anakiwa-500">{node.excerpt}</p>
              <span className="text-atomic-tangerine-500">
                {node.frontmatter.date}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
          }
        }
      }
    }
  }
`

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  const posts = props.data.allMdx
  console.log(posts)
  return (
    <Layout>
      <SEO title="Home" />
      {posts.edges.map(({ node }) => (
        <Link to={node.fields.slug} key={node.fields.slug} className="link">
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
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

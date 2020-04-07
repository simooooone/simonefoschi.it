import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { date: { ne: null }, update: { ne: null } } }
        sort: {
          fields: [frontmatter___update, frontmatter___date]
          order: DESC
        }
      ) {
        edges {
          node {
            frontmatter {
              author
              date
              title
              description
              published
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout myimg="5">
      <Head
        title="Articoli del mio blog di cultura open source"
        description="Tutti gli articoli su Raspberry Pi, Linux, programmazione e cultura cyberpunk del mio blog."
      />
      <h1>### Blog</h1>
      <ol className="posts">
        {data.allMarkdownRemark.edges.map(edge => {
          const post = edge.node.frontmatter

          if (post.published) {
            return (
              <li className="post" key={edge.node.fields.slug}>
                <Link to={`/${edge.node.fields.slug}`}>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <p>
                    <em>{post.date}</em>
                  </p>
                </Link>
              </li>
            )
          }
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage

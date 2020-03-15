import React from "react"

import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
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
      <Head  title="Articoli del mio blog di cultura open source" description="Tutti gli articoli su Raspberry Pi, Linux, programmazione e cultura cyberpunk del mio blog." />
      <h1>### Blog</h1>
      <ol className="posts">
        {data.allMarkdownRemark.edges.map((edge) => {
          if (edge.node.frontmatter.published) {
            return (
              <li className="post">
                <Link to={`/${edge.node.fields.slug}`}>
                <h3>{edge.node.frontmatter.title}</h3>
                <p>{edge.node.frontmatter.description}</p>
                <p><em>{edge.node.frontmatter.date}</em></p>
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

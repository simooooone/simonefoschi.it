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
              title
              description
              date
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
      <Head  title="Blog di tecnologia open source di Simo" description="Tutti gli articoli su Raspberry Pi e Linux sul mio nuovo blog sviluppato con tecnologia Gatsbyjs." />
      <h1>### Blog</h1>
      <ol className="posts">
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className="post">
              <Link to={`/${edge.node.fields.slug}`}>
              <h3>{edge.node.frontmatter.title}</h3>
              <p>{edge.node.frontmatter.description}</p>
              <p><em>{edge.node.frontmatter.date}</em></p>
              </Link>
            </li>
          )
        })}
        
      </ol>
    </Layout>
  )
}

export default BlogPage

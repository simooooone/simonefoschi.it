import React from "react"

import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
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
    <Layout>
      <Head  title="Blog di tecnologia open source di Simcko" description="Tutti gli articoli su Raspberry Pi e Linux sul mio nuovo blog sviluppato con tecnologia Gatsbyjs." />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
        
      </ol>
    </Layout>
  )
}

export default BlogPage

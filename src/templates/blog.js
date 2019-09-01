import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import Head from '../components/head'
export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}, ) {
        frontmatter {
            title
            date
        }
        html
    }
  }
`
const Blog = props => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title}  
        description={props.data.markdownRemark.frontmatter.description} />
      <p><Link to='/blog'>&lsaquo; Back to Blog index</Link></p>
      <br />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
      dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div><br />
      <p><Link to='/blog'>&lsaquo; Back to Blog index</Link></p>

    </Layout>
  )
}

export default Blog

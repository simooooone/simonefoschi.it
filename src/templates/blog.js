import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// TODO: inserire link all'articolo su twitter
import Head from "../components/head"
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date
        update
        author
      }
      html
    }
  }
`
const Blog = props => {
  return (
    <Layout myimg="3">
      <Head
        title={props.data.markdownRemark.frontmatter.title}
        description={props.data.markdownRemark.frontmatter.description}
      />
      <p>
        <Link to="/blog">&lsaquo; Back to Blog index</Link>
      </p>
      <br />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>
        {props.data.markdownRemark.frontmatter.author}
        <em>{props.data.markdownRemark.frontmatter.date}</em>
      </p>
      <p>
        updated <em>{props.data.markdownRemark.frontmatter.update}</em>
      </p>
      <p
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></p>
      <br />
      <p>
        <Link to="/blog">&lsaquo; Back to Blog index</Link>
      </p>
    </Layout>
  )
}

export default Blog

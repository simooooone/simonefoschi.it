import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import parse, { domToReact } from "html-react-parser"
import PostCode from "../components/postcode"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        author
        update
        published
      }
      html
    }
  }
`
const Blog = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  return (
    <Layout myimg="3">
      <Head
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.description}
      />
      <p>
        <Link to="/blog">&lsaquo; Back to Blog index</Link>
      </p>
      <br />
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>
        {data.markdownRemark.frontmatter.author}
        <em>{data.markdownRemark.frontmatter.date}</em>
      </p>
      <p>
        updated <em>{data.markdownRemark.frontmatter.update}</em>
      </p>

      {/*<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
      </div>*/}
      <div>{parse(data.markdownRemark.html, { replace: replaceCode })}</div>
      <p>
        <Link to="/blog">&lsaquo; Back to Blog index</Link>
      </p>
    </Layout>
  )
}

const replaceCode = node => {
  if (node.name === "pre") {
    return (
      node.children.length > 0 && (
        <PostCode language={getLanguage(node)}>
          {domToReact(getCode(node))}
        </PostCode>
      )
    )
  }
}

const getLanguage = node => {
  if (node.attribs.class != null) {
    return node.attribs.class
  }
  return null
}

const getCode = node => {
  if (node.children.length > 0 && node.children[0].name === "code") {
    return node.children[0].children
  } else {
    return node.children
  }
}

export default Blog

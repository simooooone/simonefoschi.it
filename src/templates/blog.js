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

const Blog = props => {
  var post = props.data.markdownRemark
  var post_det = props.data.markdownRemark.frontmatter
  var page_context = props.pageContext

  return (
    <Layout myimg="3">
      <Head title={post_det.title} description={post_det.description} />
      <p>
        <Link to="/blog">&lsaquo; Back to Blog index</Link>
      </p>
      <br />
      <h1>{post_det.title}</h1>
      <p>
        {post_det.author} <em>{post_det.date}</em>
      </p>
      <p>
        updated <em>{post_det.update}</em>
      </p>
      <br />
      {/*<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
      </div>*/}
      <div>{parse(post.html, { replace: replaceCode })}</div>
      <div className="blog-post-nav">
        <Link
          to={
            page_context.previous == null
              ? ""
              : page_context.previous.fields.slug
          }
          className={page_context.previous || "hideme"}
        >
          &lsaquo; prev
        </Link>
        <Link
          to={page_context.next == null ? "" : page_context.next.fields.slug}
          className={page_context.next || "hideme"}
        >
          next &rsaquo;
        </Link>
      </div>
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

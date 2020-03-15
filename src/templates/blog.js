import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

//import hljs from "highlight.js/lib/highlight";
//import "highlight.js/styles/github.css";
//hljs.initHighlightingOnLoad();
//hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
//hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
//hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'));

import parse, {domToReact} from 'html-react-parser';
import PostCode from "../components/postcode";

// TODO: inserire link all'articolo su twitter
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

      {/*<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
      </div>*/}
      <div>{parse(props.data.markdownRemark.html, {replace: replaceCode})}</div>
      <p>
        <Link to="/blog">&lsaquo; Back to Blog index</Link>
      </p>
    </Layout>
  )
}

const replaceCode = node => {
  if (node.name === 'pre') {
    return node.children.length > 0 && <PostCode language={getLanguage(node)}>{domToReact(getCode(node))}</PostCode>;
  }
};

const getLanguage = node => {
  if (node.attribs.class != null) {
    return node.attribs.class;
  }
  return null;
};

const getCode = node => {
  if (node.children.length > 0 && node.children[0].name === 'code') {
    return node.children[0].children;
  } else {
    return node.children;
  }
};

export default Blog

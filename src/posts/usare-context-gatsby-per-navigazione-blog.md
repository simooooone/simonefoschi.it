---
title: "Come usare il context di Gatsbyjs per la navigazione nel blog"
description: "Come ho usato il context di Gatsbyjs per inserire i pulsanti precedente e successivo negli articoli di questo blog."
date: "2020/4/1"
update: "2020/4/1"
author: "Simo"
published: true
---

### Come è nata l'idea

Nel mio caso specifico volevo inserire i pulsanti precedente e successivo negli articoli per facilitarne la consultazione.

## Il context di Gatsby

Gatrsbyjs ha un suo context specifico al quale è possibile accedervi tramite GraphQL.

Per chi non lo sapesse, il context sono delle informazioni personalizzate che un framework si porta dietro per essere usato nei vari componenti che ne hanno necessità.

Nello specifico, Gatsby usa GraphQL per gestirlo e quindi bisognerà valorizzarlo da gatsby-node.js per i vari template del blog (io ne ho uno solo).

Fate riferimento a (questa pagina)[https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#pass-context-to-pages] del blog ufficiale per altri dettagli

## Come ho creato un context in Gatsby per il template dei post del mio blog

Nel file gatsby-node.js avevo già pronta la seguente procedura

<pre class="language-javascript"><code>module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allMarkdownRemark{
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = res.data.allMarkdownRemark.edges

  posts.forEach((edge, index) => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}</code></pre>

Che ho modificato in

<pre class="language-javascript"><code>module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { date: { ne: null }, update: { ne: null } } }
        sort: { fields: [frontmatter___update, frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = res.data.allMarkdownRemark.edges

  posts.forEach((edge, index) => {
    const previous = index === 0 ? null : posts[index - 1].node
    const next = index === posts.length - 1 ? null : posts[index + 1].node

    createPage({
      component: blogTemplate,
      path: `/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
        next,
        previous,
      },
    })
  })
}</code></pre>

### Per riassumere

Ho dato un ordinamento per data ai post in allMarkdownRemark, controllando che next e previous non vadano fuori dal numero delle pagine e aggiungendo sempre le variabili next e previous con assegnati gli oggetti node al context nella procedura createPage.

Nel template delle pagine del blog ho aggiunto i pulsanti html valorizzati tramite props.pageContext

> ho eliminato il codice dal file './src/templates/blog.js' che non è pertinente con l'articolo

<pre class="language-jsx"><code>const Blog = props => {
    var page_context = props.pageContext
    ...
    return (
        ...
        &lt;div className="blog-post-nav"&gt;
            &lt;Link to={page_context.previous == null ? "" : page_context.previous.fields.slug} className={page_context.previous || "hideme"}&gt;
                &lsaquo; prev
            &lt;/Link&gt;
            &lt;Link to={page_context.next == null ? "" : page_context.next.fields.slug} className={page_context.next || "hideme"}&gt;
                next &rsaquo;
            &lt;/Link&gt;
        &lt;/div&gt;
        ...
    )
}</code></pre>

-- Buona vita --

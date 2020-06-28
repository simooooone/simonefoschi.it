---
title: "Come usare il context di Gatsbyjs per la navigazione nel blog"
description: "Come ho usato il context di Gatsbyjs per inserire i pulsanti precedente e successivo negli articoli di questo blog."
date: "2020/4/1"
update: "2020/4/2"
author: "Simo"
published: true
langKey: it
---

### Come è nata l'idea

Nel mio caso specifico volevo inserire i pulsanti precedente e successivo negli articoli per facilitarne la consultazione.

## Il context di Gatsby

Gatsbyjs ha un suo context specifico al quale è possibile accedervi tramite GraphQL.

Per chi non lo sapesse, il context sono delle informazioni personalizzate che un framework si porta dietro per essere usato nei vari componenti che ne hanno necessità.

Nello specifico, Gatsby ha un context interno, accessibile tramite le props (props.pageContext.tuocontext), che bisognerà valorizzare nella procedura onCreatePage dentro gatsby-node.js e sarà disponibile in tutte le pagine.

Fate riferimento a <a href="https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#pass-context-to-pages" target="_blank" rel="noopener noreferrer">questa pagina</a> del blog ufficiale per ulteriori dettagli, che dice tra le altre cose:

> Siccome il context di Gatsby è serializzato prima di essere passato alle pagine, non si potranno passare delle funzioni ai componenti.

<br>

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
<br>

Che ho modificato in

<pre class="language-javascript"><code>module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {update: {ne: null}, published: {eq: true}}}, sort: {fields: [frontmatter___update, frontmatter___date], order: ASC}) {
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
<br>

### Inserimento dei pulsanti

Ho dato un ordinamento per data ai post in allMarkdownRemark, controllando che next e previous non vadano fuori dal numero delle pagine e aggiungendo sempre le variabili next e previous con assegnati gli oggetti node al context nella procedura createPage.

Nel template delle pagine del blog ho aggiunto i pulsanti html valorizzati tramite props.pageContext

> ho eliminato il codice dal file './src/templates/blog.js' che non è pertinente con l'articolo

<br>

<pre class="language-jsx"><code>const Blog = props => {
    var page_context = props.pageContext
    ...
    return (
        ...
        &lt;div className="blog-post-nav"&gt;
            &lt;Link to={`/$page_context.previous == null ? "" : page_context.previous.fields.slug}`} className={page_context.previous || "hideme"}&gt;
                &lsaquo; prev
            &lt;/Link&gt;
            &lt;Link to={`/$page_context.next == null ? "" : page_context.next.fields.slug}`} className={page_context.next || "hideme"}&gt;
                next &rsaquo;
            &lt;/Link&gt;
        &lt;/div&gt;
        ...
    )
}</code></pre>

-- Buona vita --

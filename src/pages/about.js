import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'


const AboutPage = () => {
  return (
    <Layout>
      <Head  title="About me" description="Who I am, what I do." />
      <h1>### Frontend Web Developer - Open source enthusiast</h1>
      
      <article>
          <h2>Skills</h2>
          +----------+-------+------------+<br />
          | <u>Skill</u> &nbsp; &nbsp;| <u>Level</u> | <u>Experience</u> |<br />
          +----------+-------+------------+<br />
          | CSS  &nbsp; &nbsp; &nbsp;| &nbsp; E &nbsp; | &nbsp;  &nbsp;11y &nbsp; &nbsp; |<br />
          | HTML &nbsp; &nbsp; | &nbsp; E &nbsp; | &nbsp;  &nbsp;11y &nbsp; &nbsp; |<br />
          | jQuery &nbsp; | &nbsp; E &nbsp; | &nbsp; &nbsp; 8y &nbsp; &nbsp; |<br />
          | JS &nbsp; &nbsp; &nbsp; | &nbsp; I &nbsp; | &nbsp;  &nbsp; 5y &nbsp; &nbsp; |<br />
          | Linux &nbsp; &nbsp;| &nbsp; I &nbsp; | &nbsp;  &nbsp; 4y &nbsp; &nbsp; |<br />          
          | Bash &nbsp; &nbsp; | &nbsp; I &nbsp; | &nbsp; &nbsp; 1y &nbsp; &nbsp; |<br />
          | ASP.NET &nbsp;| &nbsp; C &nbsp; | &nbsp;  &nbsp; 4y &nbsp; &nbsp; |<br />
          | .NET &nbsp; &nbsp; | &nbsp; C &nbsp; | &nbsp;  &nbsp; 4y &nbsp; &nbsp; |<br />
          | MSSql &nbsp; &nbsp;| &nbsp; C &nbsp; | &nbsp;  &nbsp; 4y &nbsp; &nbsp; |<br />
          | WP &nbsp; &nbsp; &nbsp; | &nbsp;J/I&nbsp; | &nbsp; 1,5y &nbsp; &nbsp; |<br />
          | Nodejs &nbsp; | &nbsp; J &nbsp; | &nbsp;  &nbsp; 4m &nbsp; &nbsp; |<br />
          | Reactjs &nbsp;| &nbsp; J &nbsp; | &nbsp;  &nbsp; 4m &nbsp; &nbsp; |<br />
          | Gatsbyjs | &nbsp; J &nbsp; | &nbsp;  &nbsp; 2m &nbsp; &nbsp; |<br />
          +----------+-------+------------+<br />
          <br />
          <h3>Legend</h3>
          <i>E</i> Expert<br />
          <i>I</i> Intermediate<br />
          <i>C</i> Certificate<br />
          <i>J</i> Junior
        </article>
        <article>
        <h2>Experience</h2>
        <h3>Titanka! S.p.A</h3>
        <p><em>2011 - Today</em></p>
        <p>HTML, CSS, jQuery, JavaScript, 
          Fireworks, Google PageSpeed, propietary CMS and Backoffice</p>
        </article>
      <p>
        <Link to="/contact">Go to contact page</Link>
      </p>
    </Layout>
  )
}

export default AboutPage

import React, { lazy } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
//const Layout = lazy(() => import("../components/layout"))
//const Head = lazy(() => import("../components/head"))

const AboutPage = () => {
  return (
    <Layout myimg="2" alt="Il curriculum di Simone Foschi">
      <Head
        title="Il mio curriculum, Simone Foschi Front End Developer,"
        description="Cosa ho fatto finora, dove ho lavorato e dove lavoro. Cosa ho raggiunto nella mia carriera di programmatore dal 1999 ad ora."
      />
      <h1>### Curriculum</h1>

      <article>
        <h2>Skills</h2>
        +------------+------------+
        <br />| <u>Tecnologia</u> | <u>Esperienza</u> |
        <br />
        +------------+------------+
        <br />| CSS &nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp;11y &nbsp; &nbsp;
        |
        <br />| HTML &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp;11y &nbsp; &nbsp; |
        <br />| jQuery &nbsp; &nbsp; | &nbsp; &nbsp; 8y &nbsp; &nbsp; |
        <br />| Linux &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; 4y &nbsp; &nbsp; |
        <br />| ASP.NET &nbsp; &nbsp;| &nbsp; &nbsp; 4y &nbsp; &nbsp; |
        <br />| .NET &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; 4y &nbsp; &nbsp; |
        <br />| MSSql &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; 4y &nbsp; &nbsp; |
        <br />| JS &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; 3y &nbsp; &nbsp;
        |
        <br />| TSQL &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; 3y &nbsp; &nbsp; |
        <br />| WP &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; 2y &nbsp; &nbsp;
        |
        <br />| Bash &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; 1y &nbsp; &nbsp; |
        <br />| Gatsbyjs &nbsp; | &nbsp; &nbsp; 6m &nbsp; &nbsp; |
        <br />| Reactjs &nbsp; &nbsp;| &nbsp; &nbsp; 9m &nbsp; &nbsp; |
        <br />| Node &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; 4m &nbsp; &nbsp; |
        <br />| Deno &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; 1m &nbsp; &nbsp; |
        <br />
        +------------+------------+
      </article>
      <br />
      <br />
      <article>
        <h2>Esperienze</h2>
        <h4>Titanka! S.p.A.</h4>
        <p>
          <em>2011 - Oggi</em>
        </p>
        <p>
          HTML, CSS, jQuery, JavaScript, Fireworks, Photoshop, Ottimizzazione
          per Google PageSpeed, SEO, Web Marketing
        </p>
        <p>
          <em>
            Sviluppati più di 350 siti web di piccole/medie dimensioni e molti
            di più modificati. Questi siti hanno avuto centinaia di migliaia di
            visite.
          </em>
        </p>
        <hr />
        <h4>
          <a href="https://www.simonefoschi.it/" target="_blank" rel="noopener">
            simonefoschi.it
          </a>
        </h4>
        <p>
          <em>2019</em>
        </p>
        <p>
          Reactjs, Gatsbyjs, GraphQL, JS, HTML, CSS, Netlify, Matomo self hosted
          analytics
        </p>
        <hr />
        <h4>
          <a href="https://www.amicimici.com" target="_blank" rel="noopener">
            amicimici.com
          </a>
        </h4>
        <p>
          <em>2016</em>
        </p>
        <p>
          HTML, CSS, jQuery, WordPress, Linux VPS admin, Docker, Matomo self
          hosted analytics
        </p>
        <hr />
        <h4>
          <a
            href="https://www.facebook.com/inostriamicimici"
            target="_blank"
            rel="noopener"
          >
            Amici Mici, pagina Facebook
          </a>
        </h4>
        <p>
          <em>2016</em>
        </p>
        <p>Facebook ed annunci Facebook, 79.000 like</p>
        <hr />
        <h4>okgrazie.it</h4>
        <p>
          <em>2011 - 2013</em>
        </p>
        <p>
          HTML, CSS, jQuery, SQL Server 2008/2005, T-SQL, ASP.NET, Visual
          Basic.NET, C#, Windows Web Server Admin
        </p>
        <hr />
        <h4>MCE! S.r.l.</h4>
        <p>
          <em>2007 - 2009</em>
        </p>
        <p>
          HTML, CSS, jQuery, JavaScript, VB 6, ASP 3.0, Visual Basic.NET, SQL
          Server, Amministrazione Windows Web Server, Photoshop
        </p>
        <p>
          <em>Più di 60 siti sviluppati</em>
        </p>
        <hr />
        <h4>Ascentive S.r.l.</h4>
        <p>
          <em>2004 - 2006</em>
        </p>
        <p>
          JavaScript, VB 6, ASP 3.0, Visual Basic.NET, SQL Server, Oracle,
          Windows Server
        </p>
        <hr />
      </article>
      <br />
      <article>
        <h2>Certificati</h2>

        <h4>Microsoft Certified Professional</h4>
        <p>
          <em>apr 2012</em>
        </p>
        <h4>Transcript</h4>
        <p>
          <a
            target="_blank"
            rel="noopener nofollow"
            href="https://mcp.microsoft.com/Anonymous//Transcript/Validate"
          >
            Microsoft MCP Transcript
          </a>
        </p>
        <p>USER ID: 831302</p>
        <p>Password: foschisimone</p>
        <hr />
      </article>
      <br />
      <br />
      <article>
        <h2>Esami</h2>
        <h4>
          Microsoft Certified Technology Specialist Microsoft .NET Framework
          3.5, ASP.NET Applications
        </h4>
        <p>
          <em>ott 2009</em>
        </p>
        <p>Esame 070/562</p>
        <hr />
        <h4>
          Microsoft Certified Technology Specialist Microsoft .NET Framework 2.0
          Web Applications
        </h4>
        <p>
          <em>gen 2009</em>
        </p>
        <p>Esame 070/536 + Esame 070/528</p>
        <hr />
        <h4>Microsoft Certified Technology Specialist Sql Server 2005</h4>
        <p>
          <em>apr 2008</em>
        </p>
        <p>Esame 070/431</p>
        <hr />
      </article>
      <br />
      <br />
      <article>
        <h2>Corsi e conferenze a cui ho partecipato</h2>
        <p>
          <em>2018/2020</em>
        </p>
        <h2>Corsi Udemy</h2>

        <h4>Nodejs, Reactjs, Linux LPI, Docker</h4>
        <hr />
        <p>
          <em>2017</em>
        </p>
        <h4>Javascript</h4>
        <p>Circolo Ratataplan</p>
        <hr />
        <p>
          <em>2017</em>
        </p>
        <h4>jQuery</h4>
        <p>Circolo Ratataplan</p>
        <hr />
        <p>
          <em>2012/2017</em>
        </p>
        <h4>
          <a
            href="https://be-wizard.com"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            BE-WIZARD
          </a>
        </h4>
        <p>Rimini</p>
        <hr />
        <p>
          <em>2000</em>
        </p>
        <h4>Visual Basic, SQL, Basics</h4>
        <p>Enaip Forlì</p>
        <hr />
        <p>
          <em>1999</em>
        </p>
        <h4>HTML, AutoCAD</h4>
        <p>Enaip Cesena</p>
        <hr />
      </article>
      <br />
      <br />
      <article>
        <h2>Siti web di cui sono orgoglioso:</h2>
        <h4>
          Portfolio of TITANKA! Web Company Spa dove lavoro come Senior Web
          Developer, ho realizzato in team con i miei colleghi, un gran numero
          di{" "}
          <a
            target="_blank"
            rel="noopener nofollow noreferrer"
            href="https://www.titanka.com/portfolio-turismo-hotel"
          >
            questi
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener nofollow noreferrer"
            href="https://www.titanka.com/portfolio-campeggi-e-villaggi-turistici"
          >
            questi
          </a>{" "}
          , e{" "}
          <a
            target="_blank"
            rel="noopener nofollow noreferrer"
            href="https://www.titanka.com/portfolio-siti-aziende"
          >
            questi
          </a>{" "}
          siti web.
        </h4>
        <hr />
      </article>
      <br />
      <br />
      <p>
        <Link to="/contact">Vai alla pagina contatti &rsaquo;</Link>
      </p>
    </Layout>
  )
}

export default AboutPage

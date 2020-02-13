import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout myimg="2">
      <Head title="About me" description="Who I am, what I do." />
      <h1>### Resume</h1>

      <article>
        <h2>Skills</h2>
        +----------+-------+------------+
        <br />| <u>Skill</u> &nbsp; &nbsp;| <u>Level</u> | <u>Experience</u> |
        <br />
        +----------+-------+------------+
        <br />
        | CSS &nbsp; &nbsp; &nbsp;| &nbsp; E &nbsp; | &nbsp; &nbsp;11y &nbsp;
        &nbsp; |<br />
        | HTML &nbsp; &nbsp; | &nbsp; E &nbsp; | &nbsp; &nbsp;11y &nbsp; &nbsp;
        |<br />
        | jQuery &nbsp; | &nbsp; E &nbsp; | &nbsp; &nbsp; 8y &nbsp; &nbsp; |
        <br />
        | JS &nbsp; &nbsp; &nbsp; | &nbsp; I &nbsp; | &nbsp; &nbsp; 5y &nbsp;
        &nbsp; |<br />
        | Linux &nbsp; &nbsp;| &nbsp; I &nbsp; | &nbsp; &nbsp; 4y &nbsp; &nbsp;
        |<br />
        | ASP.NET &nbsp;| &nbsp; C &nbsp; | &nbsp; &nbsp; 4y &nbsp; &nbsp; |
        <br />
        | .NET &nbsp; &nbsp; | &nbsp; C &nbsp; | &nbsp; &nbsp; 4y &nbsp; &nbsp;
        |<br />
        | MSSql &nbsp; &nbsp;| &nbsp; C &nbsp; | &nbsp; &nbsp; 4y &nbsp; &nbsp;
        |<br />
        | TSQL &nbsp; &nbsp; | &nbsp;J/I&nbsp; | &nbsp; &nbsp; 2y &nbsp;
        &nbsp; |
        <br />
        | WP &nbsp; &nbsp; &nbsp; | &nbsp;J/I&nbsp; | &nbsp; &nbsp; 1y &nbsp;
        &nbsp; |
        <br />
        | Bash &nbsp; &nbsp; | &nbsp;J/I&nbsp; | &nbsp; &nbsp; 1y &nbsp; &nbsp;
        |<br />
        | Reactjs &nbsp;| &nbsp; J &nbsp; | &nbsp; &nbsp; 4m &nbsp; &nbsp; |
        <br />
        | Nodejs &nbsp; | &nbsp; J &nbsp; | &nbsp; &nbsp; 3m &nbsp; &nbsp; |
        <br />
        | Gatsbyjs | &nbsp; J &nbsp; | &nbsp; &nbsp; 3m &nbsp; &nbsp; |<br />
        +----------+-------+------------+
        <br />
        <br />
        <h3>Legend</h3>
        <i>E</i> Expert
        <br />
        <i>I</i> Intermediate
        <br />
        <i>C</i> Certificate
        <br />
        <i>J/I</i> Junior/Intermediate
        <br />
        <i>J</i> Junior
      </article>
      <br />
      <br />
      <article>
        <h2>Experience</h2>
        <h4>Titanka! S.p.A.</h4>
        <p>
          <em>2011 - Today</em>
        </p>
        <p>
          HTML, CSS, jQuery, JavaScript, Fireworks, Google PageSpeed
          Optimization, propietary CMS and Backoffice
        </p>
        <p>
          <em>More than 300 websites developed</em>
        </p>

        <h4>simonefoschi.it</h4>
        <p>
          <em>2019</em>
        </p>

        <p>
          Reactjs, Gatsbyjs, HTML, CSS, Netlify
        </p>

        <h4>amicimici.com</h4>
        <p>
          <em>2016 - 2017</em>
        </p>
        <p>
          HTML, CSS, jQuery, WordPress, Facebook pages, Facebook Ads, Linux
          server
        </p>
        <p>
          <a href="https://www.amicimici.com" target="_blank" rel="noopener">link</a>
        </p>
        <h4>okgrazie.it</h4>
        <p>
          <em>2011 - 2013</em>
        </p>
        <p>
          HTML, CSS, jQuery, SQL Server 2008/2004, ASP.NET, Visual Basic.NET,
          C#, Windows Server
        </p>

        <h4>MCE! S.r.l.</h4>
        <p>
          <em>2007 - 2009</em>
        </p>
        <p>
          HTML, CSS, jQuery, JavaScript, VB 6, ASP 3.0, Visual Basic.NET, SQL
          Server, Windows Server
        </p>
        <p>
          <em>More than 60 websites developed</em>
        </p>

        <h4>Ascentive S.r.l.</h4>
        <p>
          <em>2004 - 2006</em>
        </p>
        <p>
          JavaScript, VB 6, ASP 3.0, Visual Basic.NET, SQL Server, Oracle,
          Windows Server
        </p>
      </article>
      <br />
      <article>
        <h2>Certifications</h2>

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
        <p>UDER ID: 831302</p>
        <p>Password: foschisimone</p>
      </article>
      <br />
      <br />
      <article>
        <h2>Exams</h2>
        <h4>
          Microsoft Certificated Technology Specialist Microsoft .NET Framework
          3.5, ASP.NET Applications
        </h4>
        <p>
          <em>oct 2009</em>
        </p>
        <p>Exam 070/562</p>

        <h4>
          Microsoft Certificated Technology Specialist Microsoft .NET Framework
          2.0 Web Applications
        </h4>
        <p>
          <em>jan 2009</em>
        </p>
        <p>Exam 070/536 + Exam 070/528</p>

        <h4>Microsoft Certificated Technology Specialist Sql Server 2005</h4>
        <p>
          <em>apr 2008</em>
        </p>
        <p>Exam 070/431</p>
      </article>
      <br />
      <br />
      <article>
        <h2>Courses</h2>

        <h4>Nodejs, Reactjs, Linux LPI</h4>
        <p>Udemy</p>
        <p>
          <em>2018/2019</em>
        </p>

        <h4>Javascript</h4>
        <p>Circolo Ratataplan</p>
        <p>
          <em>2017</em>
        </p>

        <h4>jQuery</h4>
        <p>Circolo Ratataplan</p>
        <p>
          <em>2017</em>
        </p>
      </article>
      <br />
      <br />
      <article>
        <h2>Websites deveolped I am proud of</h2>
        <h4>
          <a
            target="_blank"
            rel="noopener nofollow"
            href="https://capalonga.com"
          >
            Camping Capalonga Bibione
          </a>
        </h4>
        <p>HTML, CSS, jQuery</p>
        <h4>
          <a
            target="_blank"
            rel="noopener nofollow"
            href="https://www.miramarecamping.com"
          >
            Miramare Camping Sottomarina
          </a>
        </h4>
        <p>HTML, CSS, jQuery</p>
        <h4>
          <a
            target="_blank"
            rel="noopener nofollow"
            href="https://www.hotelulisse.com"
          >
            Hotel Ulisse Ischia
          </a>
        </h4>
        <p>HTML, CSS, jQuery</p>
        <h4>
          <a
            target="_blank"
            rel="noopener nofollow"
            href="https://www.arnikahotel.it"
          >
            Arnika Dolomiti Move Hotel
          </a>
        </h4>
        <p>HTML, CSS, jQuery</p>
        <h4>
          <a
            target="_blank"
            rel="noopener nofollow"
            href="https://www.campingsantin.it"
          >
            Camping Village Santin
          </a>
        </h4>
        <p>HTML, CSS, jQuery</p>
        <h4>
          <a
            target="_blank"
            rel="noopener nofollow"
            href="https://www.campingverona.com"
          >
            Camping Verona Village
          </a>
        </h4>
        <p>HTML, CSS, jQuery</p>
      </article>
      <br />
      <br />
      <p>
        <Link to="/contact">Go to contact page &rsaquo;</Link>
      </p>
    </Layout>
  )
}

export default AboutPage

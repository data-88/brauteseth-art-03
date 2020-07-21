import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style/normalize.css"
import "../style/all.scss"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Keen on photos. Loves writing. Here for you.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>About Andrew Brauteseth and Guy With Camera</figcaption>
          </figure>
          <h3 id="dynamic-styles">Dynamic Photographer</h3>
          <p>
            I've been taking photos all my life but began doing gigs professionally about 10 years ago.{" "}
            <a href="https://work.guywithcamera.co.za/">
              My work website.
            </a>{" "}
          </p>
          <p>
            Don't forget to check out my {" "}
            <a href="https://www.instagram.com/guy_with_camera/">
              Instagram.
            </a>{" "}
            for more ways to connect.
          </p>
          <p>
            Please feel free to email me{" "}
            <a href="mailto:andrew@guywithcamera.co.za">
              andrew@guywithcamera.co.za
            </a>{" "}
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)

import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[`Johannesburg`, `blog`, `guy with camera`, `Photographer`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Keen on photos. Love to write. Here for you.
          </h2>
          <h3 id="dynamic-styles">Dynamic Photographer</h3>
          <p>
            Don't forget to check out my{" "}
            <a href="https://www.instagram.com/guy_with_camera/">Instagram.</a>{" "}
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
  );
};

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
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);

import "./404.scss";
import "./scripts/gravity.js"
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SEO from "../components/SEO";

export default function NotFound(): React.ReactElement {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query NotFoundQuery {
        markdownRemark(frontmatter: { title: { eq: "Not Found" } }) {
          id
          frontmatter {
            description
          }
          html
        }
      }
    `
  );

  return (
    <div className="notFound">
      <SEO title="Page Not Found" />
      <div className="notFound__content">
        <div className="notFound__canvas">
          <canvas id="c"></canvas>
        </div>
        <div className="notFound__mainTitle">
          {markdownRemark.frontmatter.description}
        </div>
        {/* <div
          className="notFound__text"
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        /> */}
      </div>
    </div>
  );
}

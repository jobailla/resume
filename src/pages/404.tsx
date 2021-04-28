import "./404.scss";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SEO from "../components/SEO";
import Wrapper from "../components/Wrapper";

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
      <Wrapper>
        <div className="notFound__content">
          <div className="notFound__mainTitle">
            {markdownRemark.frontmatter.description}
          </div>
          <div
            className="notFound__text"
            dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
          />
        </div>
      </Wrapper>
    </div>
  );
}

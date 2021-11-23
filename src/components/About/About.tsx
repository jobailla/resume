import "./About.scss";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SectionTitle from "../SectionTitle";

export default function About(): React.ReactElement {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query AboutQuery {
        markdownRemark(frontmatter: { title: { eq: "About" } }) {
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
    <div className="About">
      <SectionTitle
        icon={<FaUserAlt size={28} />}
        text={markdownRemark.frontmatter.description}
      />
      <div
        className="About__text"
        dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
      />
    </div>
  );
}

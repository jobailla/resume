import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Avatar(props: { url?: string; altText: string; title: string}): React.ReactElement {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

    const { url, altText, title } = props;
    const styles = {
        maxWidth: "200px",
        maxHeight: "200px",
        minWidth: "150px",
        minHeight: "150px",
        borderRadius: "50%",
    };

    if (url) {
        return <img style={styles} src={url} alt={altText} title={title} />;
    }

    return (
        <Img
            style={styles}
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt={altText}
            title={title}
        />
    );
}
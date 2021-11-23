import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Avatar(props: {
  url?: string;
  altText: string;
  title: string;
}): React.ReactElement {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            formats: AUTO
            quality: 100
            width: 200
          )
        }
      }
    }
  `);

  const { url, altText, title } = props;
  const style = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
  };

  if (url) {
    return <img style={style} src={url} alt={altText} title={title} />;
  }

  return (
    <GatsbyImage
      style={style}
      image={data.file.childImageSharp.gatsbyImageData}
      alt={altText}
      title={title}
      backgroundColor={"#1E5C83"}
    />
  );
}

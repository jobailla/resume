import "./Stack.scss";
import { GrStackOverflow } from "@react-icons/all-files/gr/GrStackOverflow";
import { ITooltipHostStyles, TooltipHost } from "@fluentui/react/lib/Tooltip";
import { graphql, useStaticQuery } from "gatsby";
import { useId } from "@fluentui/react-hooks";
import Img from "gatsby-image";
import React from "react";
import SectionTitle from "../SectionTitle";

export default function Stack(): React.ReactElement {
  const stack = useStaticQuery(
    graphql`
      query StackQuery {
        allFile(
          filter: { dir: { regex: "/stack_img/" } }
          sort: { fields: base }
        ) {
          edges {
            node {
              name
              publicURL
              childImageSharp {
                fluid(maxWidth: 50, quality: 75) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  );

  const { edges } = stack.allFile;
  const hostStyles: Partial<ITooltipHostStyles> = { root: { display: "inline-block" } };
  const tooltipId = useId("tooltip");
  const calloutProps = { gapSpace: 0 };

  return (
    <div className="Stack">
      <SectionTitle icon={<GrStackOverflow size={28} />} text="Stack" />
      <div className="Stack__images">
        {edges.map((_image: undefined, i: React.Key) => (
          <TooltipHost key={`tooltip-${i}`}
            content={edges[i].node.name.substr(3)}
            id={tooltipId}
            calloutProps={calloutProps}
            styles={hostStyles}
          >
            <div className="logo" key={i}>
              <Img fluid={edges[i].node.childImageSharp.fluid} />
            </div>
          </TooltipHost>
        ))}
      </div>
    </div>
  );
}

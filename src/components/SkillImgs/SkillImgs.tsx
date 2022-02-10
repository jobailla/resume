import { useId } from "@fluentui/react-hooks";
import { ITooltipHostStyles, TooltipHost } from "@fluentui/react/lib/Tooltip";
import Img from "gatsby-image";
import React, { ReactElement } from "react";
import "./SkillImgs.scss";

interface Props {
  skills: string[];
  imgs: any;
}

export default function SkillImgs({ skills, imgs }: Props): ReactElement {
  const skillsImgs = imgs.filter((img: any) => skills.includes(img.node.name));

  const tooltipId = useId("tooltip");

  return (
    <div className="SkillImgs">
      <div className="SkillImgs__text">
        Technologie{skills?.length > 1 ? "s" : ""} utilisée
        {skills?.length > 1 ? "s" : ""}:
      </div>
      {skillsImgs.map((img: any, i: React.Key) => (
        <div className="SkillImgs__imgs" key={i}>
          <TooltipHost
            key={`tooltip-${i}`}
            content={img?.node?.name}
            id={tooltipId}
          >
            <Img
              key={`img-${i}`}
              fluid={img.node.childImageSharp.fluid}
              alt={img.node.name}
            />
          </TooltipHost>
        </div>
      ))}
    </div>
  );
}

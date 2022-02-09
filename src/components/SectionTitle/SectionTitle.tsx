import "./SectionTitle.scss";
import React, { ReactElement } from "react";

interface Props {
  icon?: ReactElement;
  text: string;
}

export default function SectionTitle({ icon, text }: Props): ReactElement {
  return (
    <div className="icon">
      {icon}
      <div className="text">{text}</div>
    </div>
  );
}

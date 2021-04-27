import React from "react";
import "./Wrapper.scss";

export default function Wrapper({ children }: any): React.ReactElement {
  return <div className="Wrapper">{children}</div>;
}

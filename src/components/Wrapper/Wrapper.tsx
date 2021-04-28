import "./Wrapper.scss";
import React from "react";

export default function Wrapper({ children }): React.ReactElement {
  return <div className="Wrapper">{children}</div>;
}

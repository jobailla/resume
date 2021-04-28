/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../NavBar";
import React from "react";

export default function Layout({ children }: any): React.ReactElement {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

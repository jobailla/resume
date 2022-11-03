import "./NavBar.scss";
import { Link } from "react-scroll";
import { graphql, useStaticQuery } from "gatsby";
import Burger from "../Burger";
import React, { useState } from "react";

export default function Navbar(): React.ReactElement {
  const { headerJson } = useStaticQuery(
    graphql`
      query headerQuery {
        headerJson {
          headerLinks {
            label
            url
          }
        }
      }
    `
  );

  const { headerLinks } = headerJson;
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="navBar">
      <div className="navBar__header">
        <div
          className="navBar__header__menuIcon"
          onClick={() => setToggled(!toggled)}
        >
          <Burger toggled={toggled} />
        </div>
        <div className={`navBar__link__group${toggled ? "__toggled" : ""}`}>
          {headerLinks.map(
            (headerLink: { label: string; url: string }, i: number) => (
              <Link
                href={headerLink.url}
                className="navBar__link"
                key={`header-link-${i}`}
                onClick={() => setToggled(false)}
                to={headerLink.url}
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                {headerLink.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

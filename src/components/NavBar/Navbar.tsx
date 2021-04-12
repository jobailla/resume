import React, { useState } from 'react'
import Burger from '../Burger'
import './NavBar.scss'
import { useStaticQuery, graphql } from 'gatsby'

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
      }`
    );


    const { headerLinks } = headerJson;
    const [toggled, setToggled] = useState(false)

    return (
        <nav className="navBar">
            <div className="navBar__header">
                <div className="navBar__header__menuIcon"
                    onClick={() => setToggled(!toggled)} >
                    <Burger />
                </div>
                <div className={`navBar__link__group${toggled ? "__toggled" : ""}`}>
                    {headerLinks.map((headerLink: { label: string; url: string; }, i: number) => (
                        <div className="navBar__link"
                            key={`header-link-${i}`}
                            onClick={() => setToggled(false)}>
                            {headerLink.label}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}
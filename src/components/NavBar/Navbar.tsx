import React, { useState } from 'react'
import { headerLinks } from '../../pages/siteConfig/header.json'
import Burger from '../Burger/Burger'
import './NavBar.scss'

export default function Navbar(): React.ReactElement {
    const [toggled, setToggled] = useState(false)

    return (
        <nav className="navBar">
            <div className="navBar__header">
                <div className="navBar__header__menuIcon"
                    onClick={() => setToggled(!toggled)} >
                    <Burger />
                </div>
                <div className={`navBar__link__group${toggled ? "__toggled" : ""}`}>
                    {headerLinks.map((headerLink, i) => (
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
import { graphql, useStaticQuery } from "gatsby";
import React from 'react';
import './SocialLinks.scss';

export default function SocialLinks(): React.ReactElement {
    const { socialJson } = useStaticQuery(
        graphql`
            query SocialLinksQuery {
           socialJson {
             socialLinks {
               site
               icon
               url
               color
             }
           }
         }`
    );


    interface Isocial {
        site: string;
        icon: string;
        url: string;
        color: string;
    }

    const  { socialLinks } = socialJson;
    return (
        <div className="wrapper">
            {socialLinks.map((social: Isocial, i: number) => (
                <div className="social" key={`social-${socialLinks[i].site}-${i}`}>
                    <a
                        href={social.url}
                        key={`${social.site}-${i}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="button">
                            <div className="icon">
                                <div className={`icon ${social.color}`}>
                                    <i className={`${social.icon}`} ></i>
                                </div>
                            </div>
                            <span className={`${social.color}`}>
                                {social.site}
                            </span>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}
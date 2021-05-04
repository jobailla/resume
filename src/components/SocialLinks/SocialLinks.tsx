import "./SocialLinks.scss";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Link from 'gatsby-link'

export default function SocialLinks(): React.ReactElement {
  const { socialJson, file } = useStaticQuery(
    graphql`
      {
        socialJson {
          socialLinks {
            site
            icon
            url
            color
          }
        }
        file(ext: { eq: ".pdf" }, name: { eq: "CV-Jonathan-BAILLAIS" }) {
          publicURL
        }
      }
    `
  );

  interface Isocial {
    site: string;
    icon: string;
    url: string;
    color: string;
  }

  const { socialLinks } = socialJson;

  return (
    <div className="wrapper">
      {socialLinks.map((social: Isocial, i: number) => (
        <div className="socialLinks" key={`social-${socialLinks[i].site}-${i}`}>
          <Link
            href={social.site === "CV" ? file.publicURL : social.url}
            key={`${social.site}-${i}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="button">
              <div className="icon">
                <div className={`icon ${social.color}`}>
                  <i className={`${social.icon}`}></i>
                </div>
              </div>
              <span className={`${social.color}`}>{social.site}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

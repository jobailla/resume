import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import "./SocialLinks.scss";

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

  // const addScript = (url: string) => {
  //   const script = document.createElement("script");
  //   script.src = url;
  //   script.async = true;
  //   document.body.appendChild(script);
  // };

  // const onClientEntry = () => {
  //   addScript("https://kit.fontawesome.com/a076d05399.js");
  // };

  // useEffect(() => {
  //   onClientEntry();
  // }, []);

  return (
    <div className="wrapper">
      {socialLinks.map((social: Isocial, i: number) => (
        <div className="socialLinks" key={`social-${socialLinks[i].site}-${i}`}>
          <a
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
          </a>
        </div>
      ))}
    </div>
  );
}

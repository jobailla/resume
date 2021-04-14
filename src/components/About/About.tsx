import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import SEO from '../SEO';
import './About.scss';

export default function About(): React.ReactElement {
    const { markdownRemark } = useStaticQuery(
        graphql`
            query AboutQuery {
              markdownRemark(frontmatter: {title: {eq: "About"}}) {
                id
                frontmatter {
                  description
                }
               html
            }
        }`
    );

    return (
        <div className="About">
            <div className="About__title">
                <FaUserAlt size={28} />
                <div className="About__title__description">
                    {markdownRemark.frontmatter.description}
                </div>
            </div>
            <div className="About__text" dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </div>
    )
}

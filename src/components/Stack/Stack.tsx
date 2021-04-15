import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { GrStackOverflow } from 'react-icons/gr';
import './Stack.scss';

export default function Stack(): React.ReactElement {
    const stack = useStaticQuery(
        graphql`
          query StackQuery {
    allFile(filter: {dir: {regex: "/stack_img/"}}, sort: {fields: base}) {
      edges {
        node {
          name
          publicURL
          childImageSharp {
            fluid(maxWidth: 35, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
         }`
    );

    const { edges } = stack.allFile

    return (
        <div className="Stack">
            <div className="Stack__title">
                <GrStackOverflow size={28} />
                <div className="Stack__title__description">
                    Stack
                </div>
            </div>
            <div className="Stack__images">
                {
                    edges.map((_image: undefined, i: React.Key) => (
                        <img width={35} key={i} src={edges[i].node.publicURL} />

                    ))
                }
            </div>
        </div>
    )
}

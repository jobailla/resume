import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import About from '../components/About/About';
import Avatar from "../components/Avatar";
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SocialLinks from "../components/SocialLinks";
import Wrapper from '../components/Wrapper';
import "./index.scss";


export default function IndexPage(): React.ReactElement {
  const { site } = useStaticQuery(
    graphql`
      query IndexPageQuery {
        site {
          siteMetadata {
            title
            keywords
            author
        }
      }
    }
    `
  );

  const { title, keywords, author } = site.siteMetadata
  return (
    <>
      <Layout>
        <SEO title={title} keywords={keywords} />
        <Wrapper>
          <div className="page-content">
            <div className="avatar">
              <Avatar altText="avatar" title="avatar" />
            </div>
            <div className="nameTitle">
              {author}
            </div>
            <div className="social">
              <SocialLinks />
            </div>
          </div>
          <div className="introduction">
            <div className="about">
              <About />
            </div>
            <div className="stack">
            </div>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}
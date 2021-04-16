import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import About from '../components/About/About';
import Avatar from "../components/Avatar";
import Divider from "../components/Divider";
import Education from "../components/Education";
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SocialLinks from "../components/SocialLinks";
import Stack from "../components/Stack";
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
    <div className="resume">
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
            <div className="introduction">
              <div className="about">
                <About />
              </div>
              <div className="stack">
                <Stack />
              </div>
            </div>
            <div id="divider-1">
              <Divider />
            </div>
            <div className="education">
              <Education />
              <div id="divider-2">
                <Divider />
              </div>
            </div>
          </div>
        </Wrapper>
      </Layout>
    </div>
  );
}
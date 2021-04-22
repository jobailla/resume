import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import About from '../components/About/About';
import Avatar from "../components/Avatar";
import Education from "../components/Education";
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SocialLinks from "../components/SocialLinks";
import Stack from "../components/Stack";
import Timeline from "../components/Timeline";
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
            <div className="introduction">
              <div className="social" >
                <div className="avatar">
                  <Avatar altText="avatar" title="avatar" />
                </div>
                <div className="nameTitle">
                  {author}
                </div>
                <div className="links">
                  <SocialLinks />
                </div>
              </div>
              <div className="about">
                <About />
              </div>
            </div>

            <div className="cursus">
              <div className="stack">
                <Stack />
              </div>

              <div className="education">
                <Education />
              </div>
            </div>
            <div className="timeline">
              <Timeline />
            </div>
          </div>
        </Wrapper>
      </Layout>
    </div>
  );
}
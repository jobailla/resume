import "./index.scss";
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import About from "../components/About/About";
import Avatar from "../components/Avatar";
import Education from "../components/Education";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import SocialLinks from "../components/SocialLinks";
import Stack from "../components/Stack";
import Timeline from "../components/Timeline";
import Wrapper from "../components/Wrapper";
import PersonalProjects from "../components/PersonalProjects";
import Langs from "../components/Langs/";

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

  const { title, keywords, author } = site.siteMetadata;
  return (
    <main className="resume">
      <Layout>
        <header>
          <SEO title={title} keywords={keywords} />
        </header>
        <Wrapper>
          <div className="page-content">
            <section className="introduction">
              <div className="social">
                <div className="avatar">
                  <Avatar altText="avatar" title="avatar" />
                </div>
                <div className="nameTitle">
                  <span>{author}</span>
                </div>
                <div className="links">
                  <SocialLinks />
                </div>
              </div>
              <div className="stack">
                <Stack />
              </div>
              <div className="about">
                <About />
                <Langs />
              </div>
            </section>
            <section className="cursus">
              <section className="personals-projects">
                <PersonalProjects />
              </section>
              <div className="education">
                <Education />
              </div>
            </section>
            <section className="timeline">
              <Timeline />
            </section>
          </div>
        </Wrapper>
      </Layout>
    </main>
  );
}

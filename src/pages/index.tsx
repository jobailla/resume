import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
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
              <div className="avatar__image">
                <Avatar altText="avatar" title="avatar"/>
              </div>
            </div>
            <div className="nameTitle">
              {author}
            </div>
            <div className="social">
              <SocialLinks />
            </div>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}
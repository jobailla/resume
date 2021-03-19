import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Avatar from "../components/Avatar";
import Layout from '../components/Layout';
import "./index.scss";

interface MetadataProps {
  name: string;
  tagline: string;
}

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query IndexPageQuery {
        site {
          siteMetadata {
            name
            tagline
          }
        }
      }
    `
  );

  const { name, tagline }: MetadataProps = site.siteMetadata;

  return (
    <>
      <Layout>
        <h1>{name}</h1>
        <p>{tagline}</p>
        <Avatar altText="avatar" title="avatar" />
        </Layout>
    </>
  );
};

export default IndexPage;

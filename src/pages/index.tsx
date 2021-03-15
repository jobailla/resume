import { graphql } from 'gatsby';
import * as React from 'react';
import * as styles from './Index.module.scss';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
        title: string;
      },
    },
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
        title
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {

  public render() {
    const {
      name,
      tagline,
      title
    } = this.props.data.site.siteMetadata;

    return (
      <div className={styles.Container}>
        <h1>{name}</h1>
        <p>{tagline}</p>
        <p>{title}</p>
      </div>
    );
  }
}

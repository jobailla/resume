import React from 'react';
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby';

const detailQuery = graphql`
    query DefaultSeoQuery {
        site {
            siteMetadata {
               title
              description
              name
              tagline
              image
			  keywords
            }
        }
    }`

interface Props {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    author?: string
    url?: string;
}

export default function SEO({ description, keywords, title, image, url, author }: Props): React.ReactElement {
    return (
        <StaticQuery
            query={detailQuery}
            render={data => {
                const metaTitle = title || data.site.siteMetadata.title
                const metaDescription = description || data.site.siteMetadata.description
                const metaAuthor = author || data.site.siteMetadata.author
                const metaImage = image || data.site.siteMetadata.image
                const metaKeywords = keywords || data.site.siteMetadata.keywords
                const metaUrl = url || data.site.siteMetadata.url
                return (
                    <Helmet
                        titleTemplate={`%s`}
                        title={title}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription
                            },
                            {
                                name: `author`,
                                content: metaAuthor
                            },
                            {
                                property: `og:title`,
                                content: metaTitle
                            },
                            {
                                property: `og:author`,
                                content: metaAuthor
                            },
                            {
                                property: `og:description`,
                                content: metaDescription
                            },
                            {
                                property: `og:type`,
                                content: `website`
                            },
                            {
                                property: `og:image`,
                                content: metaImage
                            },
                            {
                                property: `og:url`,
                                content: metaUrl
                            },
                            {
                                name: `twitter:card`,
                                content: `summary_large_image`
                            },
                            {
                                name: `twitter:title`,
                                content: metaTitle
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription
                            },
                            {
                                name: `twitter:image`,
                                content: metaImage
                            },
                        ].concat(
                            metaKeywords && metaKeywords.length > 0 ? {
                                name: `keywords`,
                                content: metaKeywords.join(`, `),
                            } : []
                        )}
                    />

                )

            }} />)
}
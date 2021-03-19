/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    name: `Jonathan Baillais`,
    tagline: `developper resume`,
    title: `Jonathan Baillais resume`,
  },
  plugins: [
    // Filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `texts`,
        path: `${__dirname}/src/pages/texts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages/images/`,
      },
    },
    // JSON
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`
      }
    },
    // Images
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // SCSS
    `gatsby-plugin-sass`,
    // Typescript
    `gatsby-plugin-typescript`,
    // Lint
    `gatsby-plugin-tslint`,
    // Markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
  ],
}

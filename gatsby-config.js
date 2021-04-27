/* eslint-disable no-undef */

module.exports = {
  siteMetadata: {
    title: `Jonathan Baillais Resume`,
    name: `Jonathan Baillais`,
    image: `./pages/images/avatar.jpg`,
    description: `Jonathan Baillais resume`,
    url: `https://jonathan-baillais.fr`,
    twitterUsername: `jobailla`,
    tagline: `developper resume`,
    author: `Jonathan Baillais`,
    keywords: ``,
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/texts/`,
      },
    },
    // Images
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-image-map`,

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
    // Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jonathan Baillais Resume`,
        short_name: `Jonathan Baillais`,
        start_url: `www.jonathan-baillais.fr`,
        background_color: `#0E0913`,
        theme_color: `#1B2029`,
        icon: `./src/pages/images/avatar.jpg`,
        display: 'minimal-ui',
        purpose: `maskable`,
      }
    }
  ],
}

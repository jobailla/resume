/* eslint-disable no-undef */

module.exports = {
  siteMetadata: {
    title: `Jonathan Baillais resume`,
    name: `Jonathan Baillais`,
    image: `./pages/images/avatar.jpg`,
    description: `Jonathan Baillais resume`,
    url: `https://jonathan-baillais.fr`,
    twitterUsername: `jobailla`,
    tagline: `developper resume`,
    author: `Jonathan Baillais`,
    keywords: ``,
    socialLinks: [
      {
        site: `Github`,
        icon: `fab fa-github`,
        url: `https://github.com/jobailla/`,
        color: `grey`
      },
      {
        site: `Linkedin`,
        icon: `fab fa-linkedin`,
        url: `https://www.linkedin.com/in/jobailla42/`,
        color: `darkblue`
      },
      {
        site: `Twitter`,
        icon: `fab fa-twitter`,
        url: `https://www.twitter.com/jobailla/`,
        color: "lightblue"
      },
      {
        site: `Email`,
        icon: `fas fa-envelope`,
        url: `mailto:jbaillais@gmail.com`,
        color: `red`
      },
      {
        site: `CV`,
        icon: `fas fa-file`,
        url: `https://jonathan-baillais.fr/CV-Jonathan-BAILLAIS.pdf`,
        color: `green`
      }
    ],
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

module.exports = {
  siteMetadata: {
    title: `Jonathan Baillais Resume`,
    name: `Jonathan Baillais`,
    image: `./pages/images/avatar.jpg`,
    description: `Jonathan Baillais resume`,
    siteUrl: `https://jonathan-baillais.fr`,
    twitterUsername: `jobailla`,
    tagline: `developper resume`,
    author: `Jonathan Baillais`,
    keywords: ["developer", "développeur", "dev", "42", "React", "Javascript", "Typescript", "web", "CV", "resume", "curiculum", "Jonathan Baillais", "recrutement", "Paris", "Île-de-France"],
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
    `gatsby-plugin-image`,
    `gatsby-plugin-fontawesome-css`,
    // SCSS
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        ignore: ["SocialLinks.scss"],
        develop: true,
      },
    },
    // Typescript
    `gatsby-plugin-typescript`,
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
        description: `Jonathan Baillais Resume`,
        short_name: `Jonathan Baillais`,
        start_url: `www.jonathan-baillais.fr`,
        background_color: `#0E0913`,
        theme_color: `#1B2029`,
        icon: `./src/pages/images/favicon.png`,
        orientation: `portrait`,
        display: "minimal-ui",
        purpose: "maskable"
      }
    },
    // ServiceWorker
    "gatsby-plugin-offline",
    // Analytics 
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_TRAKINGID,
        head: false,
        anonymize: true,
      }
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: process.env.GATSBY_SENTRY_DSN,
      },
    },

    "gatsby-plugin-vercel",
    // Preconnect
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://kit.fontawesome.com/e0a8da67ca.js", "https://www.google-analytics.com", "https://fonts.googleapis.com"],
      },
    },
    // Optimisations
    `gatsby-plugin-preact`,
    `gatsby-plugin-perf-budgets`,

    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    // Robot
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.jonathan-baillais.fr/',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
}

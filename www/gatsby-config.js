require("dotenv").config();

const siteMetadata = {
  title: `Stephen Ajulu`,
  name: `Stephen Ajulu`,
  siteUrl: `https://trongnguyen.co`,
  description: `Product Designer who's learning to write and express thoughts`,
  hero: {
    heading: `Hi, I’m Stephen Ajulu, web developer, designer, ethical hacker & content creator.`,
    writingHeading: `Writing is designing.`,
    maxWidth: 800,
  },
  social: [
    {
      url: `https://twitter.com/stephenajulu`,
    },
    {
      name: 'medium',
      url: `https://stephenajulu.medium.com/`,
    },
  ],
};

const plugins = [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      contentPortfolios: "content/portfolios",
      rootPath: "/",
      basePath: "/",
      authorsPage: true,
      mailchimp: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Stephen Ajulu`,
      short_name: `Ajulu`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-55380266-4",
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://medium.us16.list-manage.com/subscribe/post?u=bd56b6b313e273cdd466f5abc&amp;id=736a1779cd",
    },
  },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @narative/gatsby-theme-novela/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @narative/gatsby-theme-novela
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  });
}

module.exports = {
  siteMetadata,
  plugins,
};

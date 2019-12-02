module.exports = {
  siteMetadata: {
    title: `Bytom`,
    description: `A digital asset layer protocol is the infrastructure of asset Internet.`,
    author: `@bytom`,
    siteUrl: 'https://bytom.io',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bytom`,
        short_name: `bytom`,
        start_url: `/`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-126360547-1",
        head: false,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gmail.us20.list-manage.com/subscribe/post?u=bbafc8ca5070bf12853c712d4&amp;id=e8aa0dac65'
      }
    },
    // {
    //   resolve: 'gatsby-source-yuque',
    //   options: {
    //     login: 'rainoy',
    //     repo: 'blog',
    //   }
    // },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/conf/i18n`,
        languages: [`en`, `zh`],
        defaultLanguage: 'en',
        // redirect: true,
      }, // import { injectIntl, Link, FormattedMessage as Msg } from "gatsby-plugin-intl"
    },
    'gatsby-plugin-antd',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

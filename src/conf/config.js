import React from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";

export default {
  api: {
    news: 'https://webapi.8btc.com/bytom/news/list', //page_sie, page, lang = en,zh
    faucet: 'https://kit.blockmeta.com/api/v1/get_testnet_coins',
    eventsList: 'https://www.yuque.com/api/v2/repos/biyuanlian/gguo3r/docs',
    eventsDetail: 'https://www.yuque.com/api/v2/repos/biyuanlian/gguo3r/docs/',
    blog: 'https://api.bystack.com/docapi/v1/toc?id=bytomblockchain/developer',
    blogDetail: 'https://api.bystack.com/docapi/v1/doc?id=',
  },
  nav: [
    {
      name: <Msg id="nav_developer"/>,
      href: '/dev/',
    },
    {
      name: 'Bystack',
      href: 'https://www.bystack.com/',
    },
    {
      name: <Msg id="nav_eco" />,
      href: '/ecosystem/',
    },
    {
      name: <Msg id="nav_wallet" />,
      href: '/wallet/',
    },
    {
      name: 'DApp',
      href: '/dapp/',
    },
    {
      name: <Msg id="nav_exp" />,
      href: 'https://blockmeta.com',
    },
    {
      name: <Msg id="nav_blog" />,
      href: '/blog/',
    },
  ],
  subNav: {
    links: [
      {
        name: '',
        href: '',
        target: '_blank'
      },
      {
        name: '',
        href: '',
        target: '_blank'
      },
      {
        name: '',
        href: '',
        target: '_blank'
      },
      {
        name: '',
        href: '',
        target: '_blank'
      },
      {
        name: '',
        href: '',
        target: '_blank'
      },
      {
        name: '',
        href: '',
        target: '_blank'
      },
    ],
    developer: [],
    about: [],
    contact: [],
    followUs: []
  },
  
};
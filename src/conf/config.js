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
      children: [
        {
          name: <Msg id="nav_bystack_home" />,
          href: 'https://www.bystack.com/'
        },
        {
          name: <Msg id="nav_bp_node" />,
          href: 'https://www.bystack.com/node/detail'
        },
      ]
    },
    {
      name: "MOV",
      children: [
        {
          name: <Msg id="nav_bystack_mov_whitepaper" />,
          href: {
            zh: 'https://www.bystack.com/MOV_WhitePaper.pdf',
            en: 'https://www.bystack.com/MOV_WhitePaper_En.pdf',
          }
        },
      ]
    },
    {
      name: <Msg id="nav_wallet" />,
      href: '/wallet/',
      children: [
        {
          name: <Msg id="nav_bytom_wallet" />,
          href: '/wallet/'
        },
        {
          name: <Msg id="nav_bystack_wallet" />,
          href: 'https://www.bystack.com/wallet'
        },
      ]
    },
    {
      name: <Msg id="nav_eco" />,
      href: '/ecosystem/',
    },
    {
      name: 'BApp',
      href: '/bapp/',
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
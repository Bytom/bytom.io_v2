import React from 'react';
import css from 'styled-components';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";

export default {
  help: 'https://docs.bytom.io',
  solutions: [
    {
      title: <Msg id="dapp_solutions_1" />,
      img: require('../images/dapp/01SeaRates.png'),
      des: <Msg id="dapp_solutions_des_1" />,
      link: 'https://www.searates.com/'
    },
    {
      title: <Msg id="dapp_solutions_2" />,
      img: require('../images/dapp/02Bytomswap.png'),
      des: <Msg id="dapp_solutions_des_2" />,
      link: 'https://bytomswap.io/'
    },
    {
      title: <Msg id="dapp_solutions_3" />,
      img: require('../images/dapp/03Bluechain.png'),
      des: <Msg id="dapp_solutions_des_3" />,
      link: 'https://bluechain.tech/'
    },
    {
      title: <Msg id="dapp_solutions_4" />,
      img: require('../images/dapp/04BlockContract.png'),
      des: <Msg id="dapp_solutions_des_4" />,
      link: 'https://file9c9f53c8a864.iamh5.cn/v3/idea/rJmwMxX8'
    },
  ],
  dapps: [
    {
      img: require('../images/dapp/05HOS.png'),
      title: <Msg id='dapp_1' />,
      des: <Msg id="dapp_1_des" />,
      link: 'http://47.74.217.18:8080',
    },
    {
      img: require('../images/dapp/06Agricultural.png'),
      title: <Msg id="dapp_2" />,
      des: <Msg id="dapp_2_des" />,
    },
    {
      img: require('../images/dapp/07EONE.png'),
      title: <Msg id="dapp_3" />,
      des: <Msg id="dapp_3_des" />,
      link: 'http://meone.io/',
    },
    // {
    //   img: require('../images/dapp/08Carblock.png'),
    //   title: <Msg id="dapp_4" />,
    //   des: <msg id="dapp_4_des" />,
    //   des: 'Carblock is a vehicle data trading platform based on Bytom. In the process of migrating vehicle data onchain, Carblock first come to settle the trust issue in data storage, and at the same time ensure privacy and security.',
    // },
    {
      img: require('../images/dapp/09JoyIOT.png'),
      title: <Msg id="dapp_4" />,
      des: <Msg id="dapp_4_des" />,
      link: 'http://btmdemo.ppkpub.org/joy/iot/',
    },
    {
      img: require('../images/dapp/10JoyPub.png'),
      title: <Msg id="dapp_5" />,
      des: <Msg id="dapp_5_des" />,
      link: 'http://btmdemo.ppkpub.org/joy/pub/',
    },
    {
      img: require('../images/dapp/11blockchainAD.png'),
      title: <Msg id="dapp_6" />,
      des: <Msg id="dapp_6_des" />,
      link: 'https://blockchainad.github.io/',
    },
    // {
    //   img: require('../images/dapp/12CRT.png'),
    //   title: 'CRT',
    //   des: 'CRT is a Dapp based on Bytom,copyright circulation platform which pushes forward legit copy trade so that participants could get rid of the dilemma brought by piracy and share the benefits of copyright.',
    //   link: 'https://crt.ink/',
    // },
    // {
    //   img: require('../images/dapp/13V-Story.png'),
    //   title: 'V-Story',
    //   des: 'V-Story is dedicated to creating an all-round social life service platform of next era.',
    // },
    // {
    //   img: require('../images/dapp/14VolunteerX.png'),
    //   title: 'VolunteerX',
    //   des: 'VolunteerX is a decentralized public welfare crowdfunding platform based on Bytom, which allows public funds to be regulated and the flow of donations be tracked with transparency and trust.',
    // },
  ],
}
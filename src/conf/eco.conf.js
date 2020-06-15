import React from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";
export default {
  ecoList: [{
      title: <Msg id="eco_nav_wallet" />,
      list: [
        {
          img: require('../images/eco/1-BEPAL.png'),
          title: 'BEPAL',
          link: 'https://www.bepal.pro/',
        },
        {
          img: require('../images/eco/1-Bitpie.png'),
          title: 'Bitpie',
          link: 'https://bitpie.com/',
        },
        {
          img: require('../images/eco/1-bycoin.png'),
          title: 'Bycoin',
          link: 'https://blockmeta.com/wallet',
        },
        {
          img: require('../images/eco/1-byone.png'),
          title: 'Byone',
          link: 'https://chrome.google.com/webstore/detail/bystore/nlgbhdfgdhgbiamfdfmbikcdghidoadd',
        },
        {
          img: require('../images/eco/1-cobo.png'),
          title: 'Cobo',
          link: 'https://cobo.com/',
        },
        {
          img: require('../images/eco/1-Hoo.png'),
          title: 'Hoo',
          link: 'https://hoo.com/',
        },
        {
          img: require('../images/eco/1-HyperPay.png'),
          title: 'HyperPay',
          link: 'https://www.hyperpay.tech/',
        },
      ]
    },
    {
      title: <Msg id="eco_nav_exp" />,
      list: [{
          img: require('../images/eco/2-Blockmeta.png'),
          title: 'Blockmeta',
          link: 'https://blockmeta.com/',
        },
        {
          img: require('../images/eco/2-Btmscan.png'),
          title: 'Btmscan',
          link: 'http://www.btmscan.com/',
        },
        {
          img: require('../images/eco/2-Tokenview.png'),
          title: 'Tokenview',
          link: 'https://btm.tokenview.com/',
        }
      ]
    },
    {
      title: <Msg id="eco_nav_pool" />,
      list: [{
          img: require('../images/eco/3-F2Pool.png'),
          title: 'F2Pool',
          link: 'https://www.f2pool.com/coin/bytom',
        },
        {
          img: require('../images/eco/3-Antpool.png'),
          title: 'Antpool',
          link: 'https://antpool.com/',
        },
        {
          img: require('../images/eco/3-MATPool.png'),
          title: 'MATPool',
          link: 'https://matpool.io/',
        },
        {
          img: require('../images/eco/3-Beepool.png'),
          title: 'Beepool',
          link: 'https://beepool.org/coindetail/btm',
        },
        {
          img: require('../images/eco/3-UUPool.png'),
          title: 'UUPool',
          link: 'https://uupool.cn/btm/',
        },
        {
          img: require('../images/eco/3-ZhizhuPool.png'),
          title: 'ZhizhuPool',
          link: 'https://pool.zhizhu.top/',
        },
        {
          img: require('../images/eco/3-ViaBTC.png'),
          title: 'ViaBTC',
          link: 'https://pool.viabtc.com/',
        },
        {
          img: require('../images/eco/3-POOLREN.png'),
          title: 'POOL.REN',
          link: 'https://pool.ren/btm',
        }
      ]
    },
    {
      title: <Msg id="eco_nav_safety" />,
      list: [{
          img: require('../images/eco/5-360.png'),
          title: '360'
        },
        {
          img: require('../images/eco/5-SlowMist.png'),
          title: 'SlowMist'
        },
        {
          img: require('../images/eco/5-PeckShield.png'),
          title: 'PeckShield'
        },
        {
          img: require('../images/eco/5-Beosin.png'),
          title: 'Beosin'
        },
        {
          img: require('../images/eco/5-BUGX.png'),
          title: 'BUGX'
        }
      ]
    },
    {
      title: <Msg id="eco_nav_partners" />,
      list: [{
          img: require('../images/eco/6-8BTC.png'),
          title: '8BTC'
        },
        {
          img: require('../images/eco/6-Bitmain.png'),
          title: 'Bitmain'
        },
        {
          img: require('../images/eco/6-szwh.png'),
          title: '深圳文化产权交易所'
        },
        {
          img: require('../images/eco/6-zjzs.png'),
          title: '浙江知识产权交易中心'
        },
        {
          img: require('../images/eco/6-dhdsj.png'),
          title: '东湖大数据交易中心'
        },
        {
          img: require('../images/eco/6-Purdue.png'),
          title: 'Purdue'
        },
        {
          img: require('../images/eco/6-xajd.png'),
          title: '西南交通大学'
        },
        {
          img: require('../images/eco/6-DIF.png'),
          title: 'DIF'
        },
        {
          img: require('../images/eco/6-Junction.png'),
          title: 'Junction'
        },
        {
          img: require('../images/eco/6-kys.png'),
          title: '开源社'
        },
        {
          img: require('../images/eco/6-BEN.png'),
          title: 'BEN'
        }
      ]
    },
  ],
};

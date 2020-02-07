import React from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";

import img_anybit from '../images/wallet/mobile/wallet-anybit@2x.png';
import img_bycoin from '../images/wallet/mobile/wallet-bycoin@2x.png';
import img_bixin from '../images/wallet/mobile/wallet-bixin@2x.png';
import img_bepal from '../images/wallet/mobile/wallet-bepal@2x.png';
import img_hoo from '../images/wallet/mobile/wallet-hoo@2x.png';
import img_hyperpay from '../images/wallet/mobile/wallet-hyperpay@2x.png';
import img_bitpie from '../images/wallet/mobile/wallet-bitpie@2x.png';
import img_cobo from '../images/wallet/mobile/wallet-cobo@2x.png';

import img_icon_linux from '../images/linux.png';

import img_bystore from '../images/wallet/mobile/extension-bystore@2x.png';
import img_bepa from '../images/wallet/mobile/wallet-bepapros@2x.png';


export default {
  walletList: [
    {
      icon: <i className="iconfont icon--macOS"></i>,
      title: 'Bytom Wallet',
      des: 'for macOS',
      version: 'V 1.1.0',
      links: [
        null,
        {title: <Msg id="wallet_list_btn_download" />, href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/72322/bytom-wallet-desktop-1.1.0-mac.zip'}
      ]
    },
    {
      icon: <i style={{color: '#0079D7'}} className="iconfont icon--windows"></i>,
      title: 'Bytom Wallet',
      des: 'for Wins',
      version: 'V 1.1.0',
      links: [
        {title: 'Win32', href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/72322/bytom-wallet-desktop-1.1.0-win-ia32.zip'},
        {title: 'Win64', href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/72322/bytom-wallet-desktop-1.1.0-win-x64.zip'},
      ]
    },
    {
      icon: <img src={img_icon_linux} width="23" style={{verticalAlign: '-5px'}} />,
      title: 'Bytom Wallet',
      des: 'for Linux',
      version: 'V 1.1.0',
      links: [
        {title: 'Linux32', href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/72322/bytom-wallet-desktop-1.1.0-linux-ia32.zip'},
        {title: 'Linux64', href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/72322/bytom-wallet-desktop-1.1.0-linux-x64.zip'},
      ]
    },
    {
      icon: <i style={{color: '#0DBF37'}} className="iconfont icon--code"></i>,
      title: 'Source Code',
      des: '',
      version: '',
      links: [
        {title: 'zip', href: 'https://github.com/Bytom/bytom/archive/v1.1.0.zip'},
        {title: 'tar.gz', href: 'https://github.com/Bytom/bytom/archive/v1.1.0.tar.gz'},
      ]
    },
  ],
  mobileWalletList: [
    {
      img: img_anybit,
      title: <Msg id="wallet_mobile_anybit" />,
      link: 'https://www.anybit.io/',
      des: <Msg id="wallet_mobile_anybit_des" />
    },
    {
      img: img_bepal,
      title: <Msg id="wallet_mobile_bepal" />,
      link: 'https://www.bepal.pro/Download',
      des: <Msg id="wallet_mobile_bepal_des" />
    },
    {
      img: img_bitpie,
      title: <Msg id="wallet_mobile_bitpie" />,
      link: 'https://bitpie.com',
      des: <Msg id="wallet_mobile_bitpie_des" />
    },
    {
      img: img_bixin,
      title: <Msg id="wallet_mobile_binxin" />,
      link: 'https://bixin.com',
      des: <Msg id="wallet_mobile_binxin_des" />
    },
    {
      img: img_bycoin,
      title: <Msg id="wallet_mobile_bycoin" />,
      link: 'https://blockmeta.com/wallet',
      des: <Msg id="wallet_mobile_bycoin_des" />
    },
    {
      img: img_cobo,
      title: <Msg id="wallet_mobile_cobo" />,
      link: 'https://cobo.com/',
      des: <Msg id="wallet_mobile_cobo_des" />
    },
    {
      img: img_hoo,
      title: <Msg id="wallet_mobile_hoo" />,
      link: 'https://hoo.com',
      des: <Msg id="wallet_mobile_hoo_des" />
    },
    {
      img: img_hyperpay,
      title: <Msg id="wallet_mobile_hyperpay" />,
      link: 'https://hyperpay.me/download',
      des: <Msg id="wallet_mobile_hyperpay_des" />
    },
    {}
  ],
  browserWalletList: [
    {
      img: img_bystore,
      title: <Msg id="wallet_byone" />,
      link: 'https://chrome.google.com/webstore/detail/bystore/nlgbhdfgdhgbiamfdfmbikcdghidoadd',
      des: <Msg id="wallet_byone_des" />
    },
  ],
  hardwareWalletList: [
    {
      img: img_bepa,
      title: <Msg id="wallet_bepal" />,
      link: 'https://www.bepal.pro/bepal-pro-s',
      des: <Msg id="wallet_bepal_des" />
    },
  ],
  historyVersions: {
    title: [<Msg id="wallet_list_version" />, <Msg id="wallet_list_files" />, <><Msg id="wallet_list_md5" />(MD5)</>],
    width: [null, null, 200],
    data: [
      ['Bytom Wallet for macOS v1.1.0', 'bytom-wallet-desktop-1.1.0-mac.zip', 'b020ab2d3f36f48c9e46daf04e6892c2'],
      ['Bytom Wallet for Win 32 v1.1.0', 'bytom-wallet-desktop-1.1.0-win-ia32.zip	', '42970d9d7f9b7934d8af88ab2d551f86'],
      ['Bytom Wallet for Win 64 v1.1.0', 'bytom-wallet-desktop-1.1.0-win-x64.zip', '61284c30301d5106a534f2706ce25794'],
      ['Bytom Wallet for Linux 32 v1.1.0', 'bytom-wallet-desktop-1.1.0-linux-ia32.zip', 'd4736fdfea093e75006e0bbd2d74b757'],
      ['Bytom Wallet for Linux 64 v1.1.0', 'bytom-wallet-desktop-1.1.0-linux-x64.zip', '2c6e5b7b115c54302a976df574de30a8'],
    ],
    footer: <a target="_blank" href="https://github.com/Bytom/bytom/releases"><Msg id="wallet_list_more" /> &gt;&gt;</a>
  },
  fileList: {
    title: [<Msg id="wallet_list_file" />, <Msg id="wallet_list_height" />, <Msg id="wallet_list_size" />, <><Msg id="wallet_list_md5" />(MD5)</>, <Msg id="wallet_list_update" />, <Msg id="wallet_list_link" />],
    width: [280, 110, 150, 350, 260],
    data: [
      ['200206-Update.db.zip', '388255', '659MB', '774099a7e5cbca04d792bb30832ef16d', '2020-02-06 18:00:00 (GMT+8)', <a target="_blank" href="https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/72324/200206-Update.db.zip"><Msg id="wallet_list_btn_download" /></a>],
    ],
  },
};

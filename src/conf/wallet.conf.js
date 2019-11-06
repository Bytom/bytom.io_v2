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
      version: 'V 1.0.10',
      links: [
        null,
        {title: <Msg id="wallet_list_btn_download" />, href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71837/bytom-wallet-desktop-1.0.10-mac.zip'}
      ]
    },
    {
      icon: <i style={{color: '#0079D7'}} className="iconfont icon--windows"></i>,
      title: 'Bytom Wallet',
      des: 'for Wins',
      version: 'V 1.0.10',
      links: [
        {title: 'Win32', href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71837/bytom-wallet-desktop-1.0.10-win-ia32.zip'},
        {title: 'Win64', href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71837/bytom-wallet-desktop-1.0.10-win-x64.zip'},
      ]
    },
    {
      icon: <img src={img_icon_linux} width="23" style={{verticalAlign: '-5px'}} />,
      title: 'Bytom Wallet',
      des: 'for Linux',
      version: 'V 1.0.10',
      links: [
        {title: 'Linux32', href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71837/bytom-wallet-desktop-1.0.10-linux-ia32.zip'},
        {title: 'Linux64', href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71837/bytom-wallet-desktop-1.0.10-linux-x64.zip'},
      ]
    },
    {
      icon: <i style={{color: '#0DBF37'}} className="iconfont icon--code"></i>,
      title: 'Source Code',
      des: '',
      version: '',
      links: [
        {title: 'zip', href: 'https://github.com/Bytom/bytom/archive/v1.0.10.zip'},
        {title: 'tar.gz', href: 'https://github.com/Bytom/bytom/archive/v1.0.10.tar.gz'},
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
      link: 'https://www.bystack.com/wallet',
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
      ['Bytom Wallet for macOS v1.0.10', 'bytom-wallet-desktop-1.0.10-mac.zip', 'faa36671fc843d3bf1e2fd40792e5043'],
      ['Bytom Wallet for Win 32 v1.0.10', 'bytom-wallet-desktop-1.0.10-win-ia32.zip	', 'fc76b3af6102d38dc0e2873374d3689a'],
      ['Bytom Wallet for Win 64 v1.0.10', 'bytom-wallet-desktop-1.0.10-win-x64.zip', '9d3b648f2a42e19ff93d03e0e4a85cb0'],
      ['Bytom Wallet for Linux 32 v1.0.10', 'bytom-wallet-desktop-1.0.10-linux-ia32.zip', '965b011a7b77f0ef99ff2e7fdf7d9d81'],
      ['Bytom Wallet for Linux 64 v1.0.10', 'bytom-wallet-desktop-1.0.10-linux-x64.zip', '3aad5deab5be92d60a9e1d313762a53b'],
    ],
    footer: <a target="_blank" href="https://github.com/Bytom/bytom/releases"><Msg id="wallet_list_more" /> &gt;&gt;</a>
  },
  fileList: {
    title: [<Msg id="wallet_list_file" />, <Msg id="wallet_list_height" />, <Msg id="wallet_list_size" />, <><Msg id="wallet_list_md5" />(MD5)</>, <Msg id="wallet_list_update" />, <Msg id="wallet_list_link" />],
    width: [280, 110, 150, 350, 260],
    data: [
      ['191025-Update.db.zip', '327881', '570.69MB', '57A0B0CBE68B2B73CCA921454B320D2C', '2019-10-25 7:50:00 (GMT+8)', <a target="_blank" href="https://sourceforge.net/projects/bytomblockchain/files/core.db/191025-Update.db.zip"><Msg id="wallet_list_btn_download" /></a>],
    ],
  },
};

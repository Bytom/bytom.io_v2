import React from 'react';

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
      version: 'V 1.0.9',
      links: [
        null,
        {title: 'Download', href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71014/bytom-wallet-desktop-1.0.9-mac.zip'}
      ]
    },
    {
      icon: <i style={{color: '#0079D7'}} className="iconfont icon--windows"></i>,
      title: 'Bytom Wallet',
      des: 'for Wins',
      version: 'V 1.0.9',
      links: [
        {title: 'Win32', href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71014/bytom-wallet-desktop-1.0.9-win-ia32.zip'},
        {title: 'Win64', href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71014/bytom-wallet-desktop-1.0.9-win-x64.zip'},
      ]
    },
    {
      icon: <img src={img_icon_linux} width="23" style={{verticalAlign: '-5px'}} />,
      title: 'Bytom Wallet',
      des: 'for Linux',
      version: 'V 1.0.9',
      links: [
        {title: 'Linux32', href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71014/bytom-wallet-desktop-1.0.9-linux-ia32.zip'},
        {title: 'Linux64', href: 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71014/bytom-wallet-desktop-1.0.9-linux-x64.zip'},
      ]
    },
    {
      icon: <i style={{color: '#0DBF37'}} className="iconfont icon--code"></i>,
      title: 'Source Code',
      des: '',
      version: '',
      links: [
        {title: 'zip', href: 'https://github.com/Bytom/bytom/archive/v1.0.9.zip'},
        {title: 'tar.gz', href: 'https://github.com/Bytom/bytom/archive/v1.0.9.tar.gz'},
      ]
    },
  ],
  mobileWalletList: [
    {
      img: img_anybit,
      title: 'Anybit Wallet',
      link: 'https://www.anybit.io/',
      des: 'Your Mobile crypto Manager'
    },
    {
      img: img_bepal,
      title: 'Bepal Wallet',
      link: 'https://www.bepal.pro/Download',
      des: 'Safe and easy to use with attractive interface'
    },
    {
      img: img_bitpie,
      title: 'Bitpie Wallet',
      link: 'https://bitpie.com',
      des: 'Industry-leading multi-blockchain wallet'
    },
    {
      img: img_bixin,
      title: 'Bixin Wallet',
      link: 'https://bixin.com',
      des: 'Blockchain in your pocket'
    },
    {
      img: img_bycoin,
      title: 'Bycoin Wallet',
      link: 'https://wwww.bystack.com/wallet',
      des: 'Professional digital assets management platform'
    },
    {
      img: img_cobo,
      title: 'Cobo',
      link: 'https://cobo.com/',
      des: 'Grow and protect crypto assets for everyone'
    },
    {
      img: img_hoo,
      title: 'Hoo Wallet',
      link: 'https://hoo.com',
      des: 'Use Hoo to achieve your ambition'
    },
    {
      img: img_hyperpay,
      title: 'Hyperpay Wallet',
      link: 'https://hyperpay.me/download',
      des: 'The bastion of wallet security, watch your assets…'
    },
    {}
  ],
  browserWalletList: [
    {
      img: img_bystore,
      title: 'Byone',
      link: 'https://chrome.google.com/webstore/detail/bystore/nlgbhdfgdhgbiamfdfmbikcdghidoadd',
      des: 'Bytom Wallet Chrome extension'
    },
  ],
  hardwareWalletList: [
    {
      img: img_bepa,
      title: 'Bepa Pro S',
      link: 'https://www.bepal.pro/bepal-pro-s',
      des: 'Focusing on the safety of blockchain'
    },
  ],
  historyVersions: {
    title: ['Versions', 'Files', 'Checksums(MD5)'],
    width: [null, null, 200],
    data: [
      ['Bytom Wallet for macOS v1.0.9', 'bytom-wallet-desktop-1.0.9-mac.zip', '16fcaa1b55801c74b31bc0a0282c6bc3'],
      ['Bytom Wallet for Win 32 v1.0.9', 'bytom-wallet-desktop-1.0.9-win-ia32.zip	', '037408d9e2a923da380781c8345ef244'],
      ['Bytom Wallet for Win 64 v1.0.9', 'bytom-wallet-desktop-1.0.9-win-x64.zip', '51659d80ebec1745f16ce96b9894c52d'],
      ['Bytom Wallet for Linux 32 v1.0.9', 'bytom-wallet-desktop-1.0.9-linux-ia32.zip', 'ec21a1abe16314b515dcb0dc5c603e76'],
      ['Bytom Wallet for Linux 64 v1.0.9', 'bytom-wallet-desktop-1.0.9-linux-x64.zip', 'ac5073f4a563f021e56a746dac0c160e'],
    ],
    footer: <a target="_blank" href="https://github.com/Bytom/bytom/releases">More versions &gt;&gt;</a>
  },
  fileList: {
    title: ['File', 'Height', 'Size', 'Checksums(MD5)', 'Last update', 'Link'],
    width: [280, 110, 150, 350, 260],
    data: [
      ['190813-Update.db.zip', '285597', '542.7MB', 'C34D05F35494DA6C58F53B319538D378', '2019-08-13 15:50:00 (GMT+8)', <a target="_blank" href="https://sourceforge.net/projects/bytomblockchain/files/core.db/190813-Update.db.zip">Download</a>],
    ],
  },
};

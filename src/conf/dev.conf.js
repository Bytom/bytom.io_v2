import React from 'react';
import css from 'styled-components';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";

const Btn = css.a`
  display: block;
  margin: 3px 20px 20px 20px;
  height: 50px;
  line-height: 50px;
  text-align: center; 
  border: 1px solid #666;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  box-sizing: border-box;
  a{
    display: block;
    color: #000;
  }
  &:hover{
    a{
      color: #fff;
    }
    border: none;
    background: linear-gradient(90deg,rgba(3,91,212,1) 0%,rgba(62,143,255,1) 100%);
  }
  @media (max-width: 640px) {
    width: 180px;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    margin: 10px 0;
  }
`;

export default {
  help: 'https://docs.bytom.io',
  techList: [
    {
      title: 'Equity',
      img: require('../images/dev/dev-equity.png'),
      des: <Msg id="dev_tech_equity" />,
    },
    {
      title: 'Vapor',
      img: require('../images/dev/dev-vapor.png'),
      des: <Msg id="dev_tech_vapor" />,
    },
    {
      title: 'Tensority',
      img: require('../images/dev/dev-tensority.png'),
      des: <Msg id="dev_tech_tensority" />,
    },
  ],
  toolsList: [
    {
      img: require('../images/dev/dev-java.png'),
      title: 'Java SDK',
      des: '2019-02-21',
      link: 'https://github.com/Bytom/bytom-java-sdk',
    },
    {
      img: require('../images/dev/dev-node.png'),
      title: 'Node.js SDK',
      des: '2019-02-12',
      link: 'https://github.com/Bytom/bytom-node-sdk',
    },
    {
      img: require('../images/dev/dev-js.png'),
      title: 'JS SDK',
      des: '2019-02-15',
      link: 'https://github.com/Bytom/Bytom-JS-SDK',
    },
    {
      img: require('../images/dev/dev-php.png'),
      title: 'PHP SDK',
      des: '2019-03-02',
      link: 'https://github.com/lxlxw/bytom-php-sdk',
    },
    {
      img: require('../images/dev/dev-ruby.png'),
      title: 'Ruby SDK',
      des: '2019-02-21',
      link: 'https://github.com/Bytom-Community/Bytom-Ruby-SDK',
    },
    {
      img: require('../images/dev/dev-python.png'),
      title: 'Python SDK',
      des: '2019-03-18',
      link: 'https://github.com/Bytom-Community/python-bytom',
    },
    {
      img: require('../images/dev/dev-android.png'),
      title: 'Android SDK',
      des: '2019-01-21',
      link: 'https://github.com/Bytom-Community/Bytom-Android-SDK',
    },
    {
      img: require('../images/dev/dev-mobile.png'),
      title: 'Mobile Wallet SDK',
      des: '2019-03-19',
      link: 'https://github.com/Bytom-Community/Bytom-Mobile-Wallet-SDK',
    },
  ],
  
  bountyList: [
    {
      title: 'C++ SDK',
      img: require('../images/dev/dev-c++.png'),
      des: '10000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/T7HbW7"><Msg id="dev_btn_claim" /></a></Btn>
    },
    {
      title: 'Kotlin SDK',
      img: require('../images/dev/dev-kotlin.png'),
      des: '10000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/T7HbW7"><Msg id="dev_btn_claim" /></a></Btn>
    },
    {
      title: 'Swift SDK',
      img: require('../images/dev/dev-swift.png'),
      des: '10000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/oKkLfw"><Msg id="dev_btn_claim" /></a></Btn>
    },
    {
      title: 'Distributed Identity System',
      img: require('../images/dev/dev-dis.png'),
      des: '20000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/5n3Ewa"><Msg id="dev_btn_claim" /></a></Btn>
    },
    {
      title: 'Collecting BMIP',
      img: require('../images/dev/dev-bmip.png'),
      des: 'Bytom Improvement Proposals Bytom Improvement Proposals',
      exrta: <Btn><a target="_blank" href=""><Msg id="dev_btn_claim" /></a></Btn>
    },
    {
      title: 'Chrome Extension Wallet',
      img: require('../images/dev/dev-chrome.png'),
      des: '1000 BTM - 10000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/JcWfVQ"><Msg id="dev_btn_claim" /></a></Btn>
    },
    {
      title: 'Equity Contract',
      img: require('../images/dev/dev-equity-contract.png'),
      des: '30000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/hJax71"><Msg id="dev_btn_claim" /></a></Btn>
    },
    {
      title: 'Equity IDE',
      img: require('../images/dev/dev-equity-ide.png'),
      des: '30000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/2RV9nx"><Msg id="dev_btn_claim" /></a></Btn>
    },
  ],
  
  langTermList: [
    {
      title: 'Safety',
      img: require('../images/dev/dev-safety.png'),
      des: '500 BTM - 10,000 BTM',
      exrta: <Btn><a target="_blank" href="http://t.cn/EJC9TEh"><Msg  id="dev_btn_claim"/></a></Btn>,
    },
    {
      title: 'BMIP',
      img: require('../images/dev/dev-bmip.png'),
      des: '20000 BTM+',
      exrta: <Btn><a target="_blank" href="https://goo.gl/CCd6cP"><Msg id="dev_btn_claim" /></a></Btn>,
    },
    {
      title: 'Video Tutorials',
      img: require('../images/dev/dev-video.png'),
      des: '4000 BTM+ / 20 minutes',
      exrta: <Btn><a target="_blank" href="https://goo.gl/WCh3QD"><Msg id="dev_btn_claim" /></a></Btn>,
    },
    {
      title: 'Translate',
      img: require('../images/dev/dev-translate.png'),
      des: '100 BTM - 500 BTM / 1000',
      exrta: <Btn><a target="_blank" href="mailto:contact@bytom.io"><Msg id="dev_btn_claim" /></a></Btn>,
    },
  ],
}
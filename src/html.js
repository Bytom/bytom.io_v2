import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="no-referrer" />
        <meta name="description" content="比原链Bytom是一种多元比特资产的区块链开源交互协议，运行在比原链上的不同类型资产可以通过交互协议进行交换、对赌和基于智能合约的复杂性交互操作。比原链的愿景是利用区块链技术创造多样资产与可编程经济。" />
        <meta name="keywords" content="比原链,Bytom,比原,BTM,区块链,Blockchain,Bystack,Vapor,Tensority,长铗,朗豫,比原链官网" />
        <link rel="alternate" href="https://bytom.io/zh" hreflang="zh"></link>
        <link rel="alternate" href="https://bytom.io/en" hreflang="en"></link>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

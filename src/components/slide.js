import React from 'react';
import css from 'styled-components';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";

import img_banner from '../images/Banner-00@2x.png';
import img_bounty_cn from '../images/bounty/streamer-cn.png';
import img_bounty_en from '../images/bounty/streamer-en.png';
import img_anima from '../images/bounty/anima.gif';

import _conf from '../conf/bounty.conf';

const Wrap = css.div`
  width: 100%;
  height: 560px;
  background: #000 url(${img_banner}) center top / cover no-repeat;
  @media (max-width: 640px) {
    height: 440px;  
  }
`;
const Cont = css.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  position: relative;
  h1{
    font-size: 54px;
    font-weight: bold;
    padding-top: 165px;
    line-height: 72px;
    color: #fff;
    span{
      color: #257BF2;
    }
  }
  p{
    font-size: 24px;
    font-weight: 300;
    margin-top: 20px;
    color: #b3b3b3;
    font-weight: 300;
    font-size: 20px;
    line-height: 36px;
  }
  @media (max-width: 640px) {
    width: 100%;
    height: 440px;  
    h1{
      padding: 118px 40px 0 40px;
      line-height: 48px;
      font-size: 32px;
    }
    P{
      font-size: 14px;
      line-height: 24px;
    }
  }
`;
const Streamer = css.a`
  display: block;
  width: 1026px;
  height: 110px;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 127px;
  background: url(${props => props.lang === 'zh' ? img_bounty_cn : img_bounty_en}) left center / 100% no-repeat;
  &>img{
    border-radius: 12px 0 0 0;
    width: 300px;
    height: 60px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const Slide = ({ intl }) => (
  <Wrap>
    <Cont>
      <h1>Embrace the <span>New Era</span> of<br/> Bytom Blockchain</h1>
      {/* <p>Create diverse assets and<br/>a programmable economy</p> */}
      {
        intl.locale === 'en' ? 
          <>
            {/* <h1>Embrace the <span>New Era</span> of<br/> Bytom Blockchain</h1> */}
            <p>Create diverse assets and<br/>a programmable economy</p>
          </>
        : <><Msg id="home_slide_title_des" tagName="p" /></>
      }
      <Streamer href={_conf.apply_link} target="_blank" lang={intl.locale} />
    </Cont>
  </Wrap>
);

export default injectIntl(Slide);

import React from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";
import css from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Faq from '../components/grant/Faq';
import Steps from '../components/grant/Step';
import BountyList from '../components/grant/BountyList';

import _conf from '../conf/bounty.conf';

import img_banner_cn from '../images/bounty/banner-cn.png';
import img_banner_en from '../images/bounty/banner-en.png';
import img_banner_coin from '../images/bounty/banner-coin.png';
import img_coins from '../images/bounty/coin.png';
import img_sub_banner from '../images/bounty/banner-2.png';

import img_m_banner_cn from '../images/bounty/m/banner-cn.png';
import img_m_banner_en from '../images/bounty/m/banner-en.png';
import img_m_banner_coin from '../images/bounty/m/banner-coin.png';
import img_m_sub_banner from '../images/bounty/m/banner-2.png';

const Banner = css.div`
  width: 1360px;
  height: 450px;
  margin: 0 auto;
  position: relative;
  background: #fafafa;
  @media (max-width: 640px) {
    width: 100%;
    height: 510px;
  }
`;
const BannerCont = css.div`
  width: 1240px;
  height: 100%;
  margin: 0 auto;
  background: url(${props => props.lang === 'en' ? img_banner_en : img_banner_cn}) top center / 100% no-repeat;
  @media (max-width: 640px) {
    width: 100%;
    box-sizing: border-box;
    background: url(${props => props.lang === 'en' ? img_m_banner_en : img_m_banner_cn}) top center / 100% no-repeat;
  }
`;
const BannerFront = css.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${img_banner_coin}) top center / 100% no-repeat;
  @media (max-width: 640px) {
    background: url(${img_m_banner_coin}) top center / 100% no-repeat;
  }
`;
const ContWrap = css.div`
  width: 100%;
  padding: 42px 0 100px;
  background-color: #f8f8f8;
  @media (max-width: 640px) {
    padding: 36px 0 60px;
  }
`;
const Vision = css.div`
  width: 1240px;
  margin: 0 auto;
  text-align: center;
  &>h1 {
    font-size: 44px;
    color: rgba(0, 0, 0, 0.88);
    font-weight: bold;
    line-height: 1em;
  }
  &>p{
    font-size: 20px;
    color: rgba(0, 0, 0, 0.56);
    width: 750px;
    margin: 30px auto;
    line-height: 1.7em;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding: 0 16px;
    &>h1{ font-size: 36px; }
    &>p{ font-size: 16px; width: 100%; }
  }
`;

const Button = css.a`
  display: inline-block;
  padding: 0 32px;
  height: 45px;
  line-height: 45px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.88);
  text-align: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.88);
  box-sizing: border-box;
  &:hover {
    background: linear-gradient(90deg, #004EE4 0%, #2F76FF 100%);
    border: none;
    color: #fff;
  }
  @media (max-width: 640px) {
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
  }
`;
const SubBannerWrap = css.div`
  width: 100%;
  height: 280px;
  position: relative;
  background: url(${img_sub_banner}) top center / 100% 280px no-repeat;
  &>img{
    position: absolute;
    top: -30px;
    width: 100%;
    height: 340px;
  }
  &>h1 {
    width: 320px;
    margin: 0 auto;
    padding: 30px 0;
    color: #fff;
    font-size: 28px;
    line-height: 1.6em;
    text-align: center;
  }
  @media (max-width: 640px) {
    width: 100%;
    height: 230px;
    background: url(${img_m_sub_banner}) top center / 100% 250px no-repeat;
    &>img{
      display: none;
    }
  }
`;

function Bounty({ intl }) {
  const lang = intl.locale;
  return (
    <Layout light disableSubnav>
      <SEO title={{zh: '赏金计划', en: 'Bytom Grant'}} />
      <Banner>
        <BannerCont lang={lang} style={{position: 'relative'}} />
        <BannerFront />
      </Banner>
      <ContWrap>
        <Vision>
          <Msg id="bounty_vision_title" tagName="h1" />
          <Msg id="bounty_vision_des" tagName="p" />
          <Button target="_blank" href={_conf.apply_link}>Apply Now</Button>
          <Steps />
        </Vision>
      </ContWrap>
      <BountyList />
      <SubBannerWrap>
        <img src={img_coins} alt=""/>
        <Msg id="bounty_banner_subtitle" tagName="h1" />
      </SubBannerWrap>
      <Faq apply_link={_conf.apply_link} />
    </Layout>
  )
};

export default injectIntl(Bounty);
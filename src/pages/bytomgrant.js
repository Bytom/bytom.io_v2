import React from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";
import css from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import _conf from '../conf/bounty.conf';

import img_banner_cn from '../images/bounty/banner-cn.png';
import img_banner_en from '../images/bounty/banner-en.png';
import img_banner_coin from '../images/bounty/banner-coin.png';
import img_coins from '../images/bounty/coin.png';
import img_sub_banner from '../images/bounty/banner-2.png';


const Banner = css.div`
  width: 1360px;
  height: 450px;
  margin: 0 auto;
  position: relative;
`;
const BannerCont = css.div`
  width: 1240px;
  height: 100%;
  margin: 0 auto;
  background: url(${props => props.lang === 'en' ? img_banner_en : img_banner_cn}) top center / 100% no-repeat;
  @media (max-width: 640px) {
    width: 100%;
    box-sizing: border-box;
    padding: 0 16px;
  }
`;
const BannerFront = css.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${img_banner_coin}) top center / 100% no-repeat;
`;
const ContWrap = css.div`
  width: 100%;
  padding: 42px 0 100px;
  background-color: #f8f8f8;
  @media (max-width: 640px) {
    padding: 36px 0 15px;
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
  &>ul{
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
  }
`;
const StepItem = css.li`
  display: inline-block;
  width: 222px;
  height: 158px;
  position: relative;
  &>div {
    width: 192px;
    height: 158px;
    padding: 20px 20px 20px 50px;
    text-align: left;
    background: #fff;
    position: absolute;
    right: 0;
    top: 0;
    h1{
      font-size: 18px;
      color: rgba(0, 0, 0, 0.88);
    }
    p{
      font-size: 16px;
      color: rgba(0, 0, 0, 0.56);
      line-height: 1.8em;
      margin-top: 10px;
    }
  }
  &>img{
    width: 60px;
    height: 60px;
    position: absolute;
    left: 0;
    ${props => props.pos ? 'top: 0;' : 'bottom: 0;'}
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
`;
const BountyListWrap = css.div`
  background: #fff;
`;
const BountyList = css.div`
  width: 1240px;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  &>h1 {
    font-size: 44px;
    font-weight: bold;
    line-height: 1.5em;
    width: 190px;
  }
  &>section{
    flex: 1;
    padding-left: 126px;
    &>div {
      clear: both;
      &:not(:first-child) {
        padding-top: 80px;
      }
      &>h1{
        font-size: 28px;
        line-height: 1.6em;
        color: rgba(0, 0, 0, 0.88);
        border-bottom: 1px solid #d8d8d8;
        padding-bottom: 20px;
      }
      &>ul {
        clear: both;
        li{
          width: 280px;
          min-height: 175px;
          margin: 32px 0 0 32px;
          float: left;
          background: #fafafa;
          padding: 20px;
          h3{
            font-size: 18px;
            line-height: 1.5em;
          }
          p{
            font-size: 16px;
            color: rgba(0, 0, 0, 0.56);
            line-height: 1.8em;
          }
          p:first-of-type{
            margin-top: 20px;
          }
          &:hover{
            h3{ color: #004EE4; }
          }
        }
        li:nth-child(1), li:nth-child(4), li:nth-child(7) {
          margin-left: 0;
        }
      }
    }
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
`;
const FaqWrap = css.div`
  background: #1C1C1C;
  color: #fff;
  padding: 100px 0;
`;
const Faq = css.div`
  width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  &>h1{
    color: #fff;
    font-size: 44px;
  }
  &>div{
    padding-left: 238px;
    &>div{
      border-bottom: 1px solid #363636;
      padding: 40px 0;
      &:first-child{
        padding-top: 0;
      }
      &>h2{
        font-size: 18xp;
        color: #fff;
      }
      &>p{
        font-size: 16px;
        margin-top: 10px;
        line-height: 1.8em;
        color: rgba(255, 255, 255, 0.72);
      }
    }
  }
`;

function Bounty({ intl }) {
  const lang = intl.locale;
  return (
    <Layout light>
      <SEO title={{zh: '赏金计划', en: 'Bytom Grant'}} />
      <Banner>
        <BannerCont lang={lang} style={{position: 'relative'}}>
          
        </BannerCont>
        <BannerFront />
      </Banner>
      <ContWrap>
        <Vision>
          <Msg id="bounty_vision_title" tagName="h1" />
          <Msg id="bounty_vision_des" tagName="p" />
          <Button href="">Apply Now</Button>
          <ul>
            {
              _conf.steps.map((item, index) => (
                <StepItem pos={index % 2 === 1} key={index}>
                  <div>
                    <h1>{item.title}</h1>
                    <p>{item.cont}</p>
                  </div>
                  <img src={item.icon} alt=""/>
                </StepItem>
              ))
            }
          </ul>
        </Vision>
      </ContWrap>
      <BountyListWrap>
        <BountyList>
          <Msg id="bounty_list_title" tagName="h1" />
          <section>
            {
              _conf.task_list.map((item, index) => (
                <div key={index}>
                  <h1>{item.title}</h1>
                  <ul>
                    {
                      item.list.map((task, taskIndex) => (
                        <li key={taskIndex}>
                          <h3>0{taskIndex + 1}</h3>
                          <p>{task.title}</p>
                          {
                            task.children && task.children.map((taskItem, taskItemIndex) => (
                              <p key={taskItemIndex}>{taskItem}</p>
                            ))
                          }
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </section>
        </BountyList>
      </BountyListWrap>
      <SubBannerWrap>
        <img src={img_coins} alt=""/>
        <Msg id="bounty_banner_subtitle" tagName="h1" />
      </SubBannerWrap>
      <FaqWrap>
        <Faq>
          <Msg id="bounty_faq_title" tagName="h1"/>
          <div>
            {
              _conf.faq.map((item, index) => (
                <div key={index}>
                  <h2>{item.title}</h2>
                  <p>{item.cont}</p>
                  { index === 0 && <Button style={{ marginTop: 15 }}><Msg id="bounty_btn_apply" /></Button>}
                </div>
              ))
            }
          </div>
        </Faq>
      </FaqWrap>
    </Layout>
  )
};

export default injectIntl(Bounty);
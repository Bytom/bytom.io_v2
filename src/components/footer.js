import React, { useState } from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";
import css from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import Follows from '../components/Follows';

const links = [
  {
    title: <Msg id="nav_links" />,
    list: [
      {title: <Msg id="nav_wallet" />, href: '/wallet'},
      {title: <Msg id="nav_exp" />, href: 'http://blockmeta.com/'},
      {title: <Msg id="nav_blog" />, href: '/blog/'},
      // {title: 'Forum', href: 'https://forum.bytom.io/'},
    ]
  },
  {
    title: <Msg id="nav_developer" />,
    list: [
      {title: 'GitHub', href: 'https://github.com/Bytom/bytom'},
      {title: <Msg id="nav_wiki" />, href: 'https://docs.bytom.io/'},
      {title: <Msg id="nav_tools" />, href: '/dev/'},
      {title: <Msg id="nav_bounty" />, href: '/dev', state: {bounty: true}},
    ]
  },
  {
    title: <Msg id="nav_aboutus" />,
    list: [
      // {title: 'About', href: '/'},
      {title: <Msg id="nav_team" />, href: '/team',},
      {title: <Msg id="nav_eco" />, href: '/ecosystem'},
      {title: <Msg id="nav_white_paper" />, href: 'https://cdn.bytom.io/res/Bytom-Technical-White-Paper-EN.pdf'},
      {title: 'Bytom Logo', href: 'https://cdn.bytom.io/res/Logo_Bytom_v2.1.zip'},
    ]
  },
  {
    title: <Msg id="nav_contack" />,
    list: [
      {title: 'E-Mail: contact@bytom.io', href: 'mailto:contact@bytom.io'},
      {title: <Msg id="nav_website" />, href: '/'},
    ]
  },
];

const Wrap = css.div`
  width: 100%;
  height: 305px;
  box-sizing: border-box;
  background-color: #1C1C1C;
  @media (max-width: 640px) {
    height: 130px;
    box-sizing: border-box;
  }
`;
const Cont = css.div`
  width: 1280px;;
  height: 305px;
  margin: 0 auto;
  display: flex;
  padding: 60px 0;
  @media (max-width: 640px) {
    width: 100%;
    height: auto;
    padding: 10px 60px;
    &>div:not(:last-child){
      display: none;
    }
  }
`;
const Item = css.div`
  width: 20%;
  h2{
    color: #035BD4;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  ul li{
    font-size: 14px;
    margin: 16px 0;
    // span{
    //   color: rgba(255, 255, 255, 0.4);
    //   cursor: not-allowed;
    // }
    a{
      color: #fff;
    }
  }
  @media (max-width: 640px) {
    width: 100%;
    h2{
      display: none;
    }
  }
`;
const Copy = css.div`
  background-color: #000;
  color: #666;
  font-size: 12px;
  height: 55px;
  line-height: 55px;
  text-align: center;
  font-weight: 400;
`;
const Follow = css.div`
  display: flex;
  height: 34px;
  line-height: 34px;
  input{
    flex: 1;
    padding: 0 10px;
    border: 0;
    outline: 0;
  }
  button{
    width: 90px;
    display: inline-block;
    height: 34px;
    background-color: #035BD4;
    color: #fff;
    font-size: 12px;
    outline: none;
    border: 0;
    cursor: pointer;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
const TipsMsg = css.div`
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.err ? '#E21919' : '#fff'};
`;
const MobileInfo = css.section`
  color: #fff;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  @media (min-width: 640px) {
    display: none;
  }
`;

const Footer = ({ siteTitle, disableSubnav }) => {

  const [email, handleChange] = useState('');
  const [isSubscribed, toggleSubscribe] = useState(false);
  const [isErr, toggleError] = useState(false);

  const handleSubscribe = () => {
    const pattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
    if(pattern.test(email)){
      addToMailchimp(email, {
        URL: window.location.href
      }).then((data) => {
        toggleSubscribe(true);
        handleChange('');
      }).catch(err => {
        console.log(err);
      })
      toggleError(false);
    } else {
      toggleError(true);
      toggleSubscribe(false);
    }
  }

  const Links = ({ href, title, state={} }) => {
    const pattern = /^http/;
    return pattern.test(href) ? 
        <a target="_blank" href={href || '/'}>{title}</a> 
      : /^\//.test(href) ? <Link state={state} to={href}>{title}</Link> : <a>{title}</a>;
  }

  return (
    <>
      {!disableSubnav && <Wrap>
        <Cont>
          {
            links.map((item, index) => (
              <Item key={index}>
                <h2>{item.title}</h2>
                <ul>
                  {
                    item.list.map((sitem, sindex) => (
                      <li key={sindex}>
                      {
                        sitem.disable ? 
                          <span>{sitem.title}</span>
                        : <Links {...sitem} />
                      }
                      </li>
                    ))
                  }
                </ul>
              </Item>
            ))
          }
          <Item>
            <Msg id="nav_follow" tagName="h2" />
            <Follow>
              <input value={email} onChange={(e) => handleChange(e.target.value)} type="email"/>
              <button onClick={handleSubscribe}><Msg id="nav_subscribe" /></button>
            </Follow>
            <Follows />
            { isSubscribed && <TipsMsg><Msg id="nav_subscribe_success" /></TipsMsg>}
            { isErr && <TipsMsg err><Msg id="nav_subscribe_fail" /></TipsMsg>}
            <MobileInfo>
              <p>E-Mail: contact@bytom.io</p>
              <p>Website: bytom.io</p>
            </MobileInfo>
          </Item>
        </Cont>
      </Wrap>}
      <Copy>Copyright ©2021 bytom.io</Copy>
    </>
  )
};

export default Footer;

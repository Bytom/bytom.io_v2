import React, { useState } from 'react';
import css from 'styled-components';
import _conf from '../conf/config';
import {
  Link,
  injectIntl,
  FormattedMessage as Msg,
  changeLocale,
} from 'gatsby-plugin-intl';
import { Dropdown, Menu, Icon } from 'antd';

import img_logo from '../images/logo.png';
import img_logo_light from '../images/logo_light.png';
import img_m_menu from '../images/m.menu.png';
import img_m_menu_light from '../images/m.menu.light.png';
import img_devcon from '../images/devcon/btn.png';

const Wrap = css.div`
  width: 100%;
  height: 80px;
  background-color: ${props => (props.light === 'true' ? '#fff' : '#000')};
  @media (max-width: 640px) {
    height: 60px;
  }
`;
const Cont = css.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  @media (max-width: 640px) {
    width: 100%;
    box-sizing: border-box;
    padding: 0 16px;
    position: relative;
  }
`;
const Logo = css(Link)`
  display: inline-block;
  width: 130px;
  height: 100%;
  background: url(${props =>
    props.light === 'true'
      ? img_logo_light
      : img_logo}) center left / 130px no-repeat;
`;

const Nav = css.ul`
  list-style: none;
  display: inline-block;
  vertical-align: top;
  margin-left: 40px;
  @media (max-width: 640px) {
    display: none;
  }
  .ant-dropdown-menu{
    border-radius: 0;
    background-color: ${props => (props.light === 'true' ? '#fff' : '#1c1c1c')};
  }
  .ant-dropdown-menu-item:hover, .ant-dropdown-menu-submenu-title:hover{
    background-color: ${props => (props.light === 'true' ? '#fff' : '#1c1c1c')};
    a{
      color: #1890ff;
    }
  }
  .ant-dropdown-menu-item > a, .ant-dropdown-menu-submenu-title > a{
    color: ${props => (props.light === 'true' ? '#000' : '#fff')};
  }
  .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title{
    font-size: 16px;
    padding: 10px 12px;
  }
`;
const NavItemWrap = css.li`
  float: left;
  font-size: 16px;
  padding: 0 20px;
  line-height: 80px;
  a{
    display: inline-block;
    height: 100%;
    color: ${props => (props.light === 'true' ? '#000' : '#fff')};
    &:hover{
      color: #035BD4;
    }
    &.active{
      color: #035BD4;
    }
  }
`;
const Toolbar = css.div`
  display: block;
  float: right;
  width: 60px;
  height: 100%;
  line-height: 80px;
  @media (max-width: 640px) {
    line-height: 60px;
    width: 100px;
  }
`;
const Github = css.a`
  font-size: 23px !important;
  color: #666;
  width: 20px;
  display: inline-block;
  cursor: pointer;
  &:hover{
    color: ${props => (props.light === 'true' ? '#000' : '#fff')};
  }
  @media (max-width: 640px) {
    color: ${props => (props.light === 'true' ? '#000' : '#fff')};
  }
`;
const Lang = css(Github)`
  margin-left: 20px;
`;
const MobileNav = css.ul`
  list-style: none;
  position: absolute;
  top: 60px;
  z-index: 99;
  ${props => (props.active ? 'right: 0;' : 'display: none;')}
  width: 140px;
  transition: all 0.3s ease-out;
`;
const MobileNavItem = css.li`
  font-size: 13px;
  line-height: 30px;
  height: 30px;
  background-color: ${props => (props.light === 'true' ? '#fff' : '#000')};
  cursor: pointer;
  a{
    color: ${props => (props.light === 'true' ? '#000' : '#fff')};
    display: block;
    padding: 0 10px;
    &:hover{
      color: #035BD4;
    }
    &.active{
      color: #035BD4;
      background-color: #141414;
    }
  }
  @media (min-width: 640px) {
    display: none;
  }
`;
const SubNavItem = css(MobileNavItem)`
  @media (min-width: 640px) {
    display: block;
  }
`;
const LangNav = css(MobileNav)`
  top: 80px;
  @media (max-width: 640px){
    top: 60px;
  }
`;
const MobileMenuToggle = css.span`
  display: inline-block;
  width: 23px;
  height: 60px;
  vertical-align: top;
  margin-left: 15px;
  background: url(${props =>
    props.light === 'true'
      ? img_m_menu_light
      : img_m_menu}) center / 100% no-repeat;
  @media (min-width: 640px) {
    display: none;
  }
`;

const Header = ({ siteTitle, light, intl }) => {
  const [menuStatus, toggleMobileMenu] = useState(false);
  const [langStatus, toggleLangStatus] = useState(false);

  const NavItem = ({ href, name }) =>{
    if (typeof href !== 'string') {
      return (
        <a target="_blank" href={href[intl.locale]}>
          {name}
        </a>
      );
    }
    return /^http/.test(href) ? (
      <a target="_blank" href={href}>
        {name}
      </a>
    ) : (
      <Link activeClassName="active" to={href}>
        {name}
      </Link>
    )
  };

  return (
    <Wrap light={light ? 'true' : 'false'}>
      <Cont className="clearfix">
        <Logo light={light ? 'true' : 'false'} to="/">
          {' '}
        </Logo>
        <Nav light={light ? 'true' : 'false'} id="nav">
          {_conf.nav.map((item, index) => (
            <NavItemWrap light={light ? 'true' : 'false'} key={index}>
              {item.children ? (
                <Dropdown
                  key={index}
                  overlayStyle={{
                    background: '#1c1c1c'
                  }}
                  getPopupContainer={() => document.getElementById('nav')}
                  overlay={
                    <Menu>
                      {item.children.map(menu => (
                        <Menu.Item>
                          <NavItem {...menu} />
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                >
                  <a>{item.name}</a>
                </Dropdown>
              ) : (
                <NavItem key={index} {...item} />
              )}
            </NavItemWrap>
          ))}
        </Nav>
        <MobileNav light={light ? 'true' : 'false'} active={menuStatus}>
          {_conf.nav.map((item, index) => (
            item.children ? 
              item.children.map((child, childIndex) => (
                <MobileNavItem light={light ? 'true' : 'false'} key={childIndex}>
                  <NavItem {...child} />
                </MobileNavItem>
              ))
            : (
              <MobileNavItem light={light ? 'true' : 'false'} key={index}>
                <NavItem {...item} />
              </MobileNavItem>
            )
          ))}
          <MobileNavItem light={light ? 'true' : 'false'} key={'10'}>
            <Link activeClassName="active" to="/team">
              Team
            </Link>
          </MobileNavItem>
        </MobileNav>
        <LangNav light={light ? 'true' : 'false'} active={langStatus}>
          <SubNavItem light={light ? 'true' : 'false'} key={'12'}>
            <a onClick={() => changeLocale('en')}>English</a>
          </SubNavItem>
          <SubNavItem light={light ? 'true' : 'false'} key={'13'}>
            <a onClick={() => changeLocale('zh')}>简体中文</a>
          </SubNavItem>
        </LangNav>
        <Toolbar>
          <Github
            light={light ? 'true' : 'false'}
            target="_blank"
            href="https://github.com/Bytom/bytom"
            className="iconfont github"
          />
          <Lang
            light={light ? 'true' : 'false'}
            onMouseEnter={() => toggleLangStatus(!langStatus)}
            onClick={() => toggleLangStatus(!langStatus)}
            className="iconfont lang"
          ></Lang>
          <MobileMenuToggle
            light={light ? 'true' : 'false'}
            onClick={() => toggleMobileMenu(!menuStatus)}
          />
        </Toolbar>
        {/* <DevCon><a target="_blank" href="https://devcon.bytom.io">DevCon2</a></DevCon> */}
      </Cont>
    </Wrap>
  );
};

export default injectIntl(Header);

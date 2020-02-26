import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { injectIntl, Link, FormattedMessage as Msg, IntlContextConsumer } from "gatsby-plugin-intl"

import css from 'styled-components';
import Header from './header';
import Footer from './footer';
import './layout.css';
import '../static/font/iconfont.css';

const Wrap = css.div`
  width: 100%;
`;

const Layout = ({ children, light = false, disableSubnav = false }) => (
  <IntlContextConsumer>
    {
      () => (
        <>
          <Header light={light} disableSubnav={disableSubnav} />
          <Wrap style={{background: light && disableSubnav ? '#f8f8f8' : 'transparent'}}>
            {children}
          </Wrap>
          <Footer disableSubnav={disableSubnav} />
        </>
      )
    }
  </IntlContextConsumer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout);

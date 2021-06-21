import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { injectIntl, Link, FormattedMessage as Msg, IntlContextConsumer } from "gatsby-plugin-intl"
import { isSameDay } from 'date-fns';

import css from 'styled-components';
import Header from './header';
import Footer from './footer';
import './layout.css';
import '../static/font/iconfont.css';

const Wrap = css.div`
  width: 100%;
`;

const Layout = ({ children, light = false, headerStyle, disableSubnav = false, intl }) => {
  return (
    <IntlContextConsumer>
      {
        () => (
          <>
            <Header style={headerStyle} light={light} disableSubnav={disableSubnav} />
            <Wrap style={{background: light && disableSubnav ? '#f8f8f8' : 'transparent'}}>
              {children}
            </Wrap>
            <Footer disableSubnav={disableSubnav} />
          </>
        )
      }
    </IntlContextConsumer>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout);

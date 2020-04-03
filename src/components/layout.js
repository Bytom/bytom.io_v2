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

const Layout = ({ children, light = false, disableSubnav = false, intl }) => {
  useEffect(() => {
    console.log('object')
    if(intl.locale === 'zh') {
      try{
        const isGray = isSameDay(new Date(), new Date('2020-04-04'));
        if(isGray) {
          window.document.body.style.filter = 'grayscale(100%)';
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try{
        window.document.body.style.filter = 'grayscale(0)';
      } catch (error) {
        console.log(error);
      }
    }
  }, [intl.locale])
  return (
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
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout);

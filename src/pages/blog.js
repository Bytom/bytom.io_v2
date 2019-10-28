import React from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";
import css from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import Tables from '../components/Table';
import Tabs from '../components/Tabs';
import Card from '../components/Card';
import Follows from '../components/Follows';
import TrendsList from '../components/Trends';

const PageDesc = css.p`
  font-size: 24px;
  color: #fff;
  line-height: 50px;
  text-align: center;
  font-weight: 300;
  padding-top: 190px;
  margin-bottom: 20px;
  @media (max-width: 640px) {
    padding: 102px 26px 0 26px;
    color: #b3b3b3;
    font-size: 14px;
    line-height: 2em;
  }
`;
const Follow = css.div`
  width: 300px;
  margin: 0 auto;
`;

function Blog({ pageContext }) {
  const isZh = pageContext.intl.language === 'zh';
  const tabs = ['Blog'];
  // if (isZh) {
  //   tabs.push('技术文章');
  // }
  return (
    <Layout>
      <SEO title={{zh: '博客', en: 'Blog'}} />
      <Banner>
        {/* <PageTitle>Bytom Trends</PageTitle> */}
        <PageDesc><Msg id="blog_title" values={{br: <br />}} /></PageDesc>
        <Follow><Follows size={32} /></Follow>
      </Banner>
      <Tabs
        tab={tabs}
      >
        <div>
          <TrendsList light style={{padding: '0 0 20px'}} />
        </div>
        <div>
          <TrendsList light blog style={{padding: '0 0 20px'}} />
        </div>
      </Tabs>
    </Layout>
  );
};

export default injectIntl(Blog);
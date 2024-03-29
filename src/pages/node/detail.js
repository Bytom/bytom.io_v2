import React from 'react';
import css from 'styled-components';
import { FormattedMessage as Msg } from 'gatsby-plugin-intl';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Button from '../../components/Button';
import PageTitle from '../../components/PageTitle';
import RuleCont from '../../components/RuleCont';

import img_bg from '../../images/bg.png';
import img_bgm from '../../images/bgm.png';

const Wrap = css.div`
  width: 100%;
  padding-bottom: 60px;
  background: #000 url(${img_bg}) top center / 1920px no-repeat;
  @media (max-width: 640px) {
    background: #000 url(${img_bgm}) top center / 100% no-repeat;
  }
`;

const Cont = css.div`
  width: 920px;
  height: auto;
  box-sizing: border-box;
  background-color: #fff;
  padding: 60px;
  margin: 0 auto;
  text-align: center;
  &>h1{
    font-size: 20px;
    padding: 20px 0;
    line-height: 1em;
    font-weight: 500;
  }
  &>h2{
    font-size: 14px;
    color: #808A95;
    font-weight: 500;
  }
  &>h3{
    font-size: 20px;
    padding: 40px 0 20px;
    line-height: 1em;
  }
  @media (max-width: 640px) {
    width: auto;
    height: auto;
    margin: 0 24px;
    padding: 10px 20px;
    padding-bottom: 30px;
    &>h1, &>h3{
      font-size: 16px;
    }
  }
`;
const Content = css.div`
  height: auto;
  text-align: left;
  color: #808A95;
  font-size: 14px;
  @media (max-width: 640px) {
    min-height: 100px;
    height: auto;
  }
`;
const Line = css.div`
  width: 100%;
  height: 1px;
  margin: 50px 0 30px;
  background-color: #DEDEDE;
`;


const Detail = () => (
  <Layout>
    <SEO 
      title="Bytom" 
    />
    <Wrap>
      <PageTitle title={<Msg id="node_home_title" />} subTitle={<Msg id="plan_sub_title" />} />
      <Cont>
        {/* <h1><Msg id="plan_cont_title" /></h1>
        <h2><Msg id="plan_date" /></h2>
        <h3><Msg id="plan_cont_sub_title" /></h3> */}
        <Content>
          <RuleCont />
        </Content>
        <Line />
        <Button style={{width: 200}} href="/node/apply"><Msg id="plan_btn_apply" /></Button>
      </Cont>
    </Wrap>
  </Layout>
);

export default Detail;

import React, {useState, useEffect, useMemo} from 'react';
import css from 'styled-components';
import axios from "axios/index";
import {Link, FormattedMessage as Msg, injectIntl} from 'gatsby-plugin-intl';

import _conf from '../conf/side.conf';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DesBar from '../components/desbar';

import img_bg from '../images/bg-vapor.png';
import map_bg from '../images/side/map.png'

const BannerWrap = css.div`
  width: 100%;
  height: 560px;
  background: #004EE4 url(${img_bg}) center top / cover no-repeat;

  .title {
    white-space: pre-line;
    font-size: 54px;
    font-weight: bold;
    padding-top: 165px;
    line-height: 72px;
    color: #fff;
  }
  .subtitle {
    margin: 20px auto 0;
    color: rgba(255, 255, 255, 0.72);
    font-weight: 300;
    font-size: 20px;
    line-height: 36px;
    max-width: 826px;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 640px) {
    height: 440px;  

    .title {
      padding: 80px 40px 0 40px;
      line-height: 48px;
      font-size: 32px;
      white-space: none;
    }
    .subtitle {
      padding: 0 10px;
      font-size: 14px;
      line-height: 24px;
    }
  }
`;
const Cont = css.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  position: relative;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const EcoWrap = css.div`
  padding: 100px 0;
  background: #fafafa;

  .list {
    display: flex;
    margin-top: 60px;

    .card {
      flex: 1;
      box-sizing: border-box;
      padding: 65px 24px 60px;
      background: #fff;
      text-align: center;

      & + .card {
        margin-left: 32px;
      }
      .img {
        margin-bottom: 26px;
        width: 62px;
        height: 62px;
      }
      .title {
        margin-bottom: 8px;
        font-weight: bold;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.88);
      }
      .des {
        font-size: 16px;
        line-height: 1.8;
        color: rgba(0, 0, 0, 0.56);
      }
    }
  }

  @media (max-width: 640px) {
    padding: 60px 0;

    .list {
      display: block;

      .card {
        border-bottom: 0.5px solid #eae8e8;

        & + .card {
          margin-left: 0;
        }
        &:first-child {
          border-top: 0.5px solid #eae8e8;
        }
      }
    }
    
  }
`
const TitleWrap = css.div`
  padding: 0 10px;
  line-height: 1.5;
  font-weight: bold;
  font-size: 44px;
  color: rgba(0, 0, 0, 0.8);
  word-break: break-all;

  .highlight {
    color: #004EE4;
  }
  .space {
    margin: 0 8px;
  }
  > span {
    cursor: initial;
  }
`
const FooterWrap = css.div`
  padding: 40px 0;
  width: 100%;
  background: #fff;

  .list {
    display: inline-block;
    margin: o auto;
  }
  .item {
    display: flex;
    align-items: center;
    float: left;
    padding: 0 10px;
    width: 350px;
    text-align:left;

    ::after {
      content: ' ';
      display: block;
      margin: auto 40px auto auto;
      width: 1px;
      height: 30px;
      background: #fafafa;
    }
    &:last-child {
      width: auto;

      &::after {
        display: none;
      }
    }

    .title {
      font-weight: bold;
      font-size: 18px;
      color: #000;
    }
    .link {
      color: #004EE4;
      font-size: 16px;
    }
    .img {
      width: 68px;
      height: 68px;
      display: inline-block;
      vertical-align: top;
      margin-right: 20px;
    }
  }

  @media (max-width: 640px) {
    padding-bottom: 10px;

    .item {
      width: 100% !important;
      padding: 20px 10px;
      border-bottom: 0.5px solid #eae8e8;

      &:first-child {
        border-top: 0.5px solid #eae8e8;
      }
    }
  }
`;
const NodeWrap = css.div`
  padding-top: 100px;
  background: #fff;
  text-align: center;

  .content {
    margin: 10px auto;
    max-width: 710px;
    line-height: 1.8;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.56);
  }
  .node-list {
    .node {
      display: inline-block;

      & + .node {
        margin-left: 122px;
      }
    }
  }
  .circle {
    display: inline-block;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    border: 7px solid;
    
    &.green {
      background: #06BE85;
      border-color: #E5F6F0;
    }
    &.yellow {
      background: #F88805;
      border-color: #FCF3E7;
    }
    &.gray {
      background: #808A95;
      border-color: #F2F3F4;
    }
  }
  .num {
    margin-top: 10px;
    font-weight: bold;
    font-size: 44px;
    line-height: 1.2;
    color: rgba(0, 0, 0, 0.88);
  }
  
  @media (max-width: 640px) {
    padding-top: 60px;

    .content {
      padding: 0 10px;
    }
    .node-list {
      .node {
        display: block;

        & + .node {
          margin-top: 10px;
          margin-left: 0;
        }
      }
    }
    
  }
`
const Map = css.div`
  margin: 0 auto 100px;
  width: 1240px;

  .img {
    width: 100%;
  }
  @media (max-width: 640px) {
    margin-bottom: 40px;
    width: 100%;
  }
`

const Title = ({ intl, children, highlightIndex }) => {
  return (
    <TitleWrap>
      {children.map((item, index) => 
        <span 
          key={ index } 
          className={ `${highlightIndex === index ? 'highlight' : ''} ${intl.locale === 'en' ? 'space' : ''}` }
        >
          { item }
        </span>
      )}
    </TitleWrap>
  )
}

const Detail = ({ intl }) => {
  const [nodeList, setNodeList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const {
        data: {
          data
        },
      } = await axios.get(`${_conf.node_list}`);
      setNodeList(data.consensus_nodes);
    };
    try {
      getList();
    } catch (error) {}
  }, []);

  const { totalNode, bpNum, stanbyBpNum } = useMemo(() => {
    return {
      totalNode: nodeList.length,
      bpNum: nodeList.filter(n => n.role === 0).length,
      stanbyBpNum: nodeList.filter(n => n.role === 1).length
    }
  }, [nodeList])

  return (
  <Layout>
    <SEO title={ {zh: '比原侧链', en: 'Sidechain'} } />
    <BannerWrap>
      <Cont>
        <h1 className="title"><Msg id="vapor_banner" /></h1>
        <p className="subtitle"><Msg id="vapor_banner_subtitle" /></p>
      </Cont>
    </BannerWrap>
    <DesBar features={_conf.features} />
    <EcoWrap>
      <Cont>
        <Title highlightIndex={ 0 } intl={ intl }>
          <Msg id="vapor_eco_title_1" />
          <Msg id="vapor_eco_title_2" />
        </Title>
        <div className="list">
          {_conf.ecoFeatures.map((item, index) =>
            <div className="card" key={ index }>
              <img className="img" src={ item.img } />
              <div className="title">{ item.title }</div>
              <div className="des">{ item.cont }</div>
            </div>
          )}
        </div>
      </Cont>
    </EcoWrap>
    <NodeWrap>
      <Title highlightIndex={ 1 } intl={ intl }>
        <Msg id="vapor_node_title_1" />
        <Msg id="vapor_node_title_2" />
      </Title>
      <div className="content">
        <Msg id="vapor_node_des" />
      </div>
      <div className="node-list">
        <div className="node">
          <i className="circle green" />
          <div className="num">{ bpNum || '-' }</div>
          <div className="des"><Msg id="vapor_node_part1_title"/></div>
        </div>
        <div className="node">
          <i className="circle yellow" />
          <div className="num">{ stanbyBpNum || '-' }</div>
          <div className="des"><Msg id="vapor_node_part2_title"/></div>
        </div>
        <div className="node">
          <i className="circle gray" />
          <div className="num">{ totalNode || '-' }</div>
          <div className="des"><Msg id="vapor_node_part3_title"/></div>
        </div>
      </div>
    </NodeWrap>
    <FooterWrap>
      <Cont>
        <div className="list clearfix">
          {_conf.footerFeatures.map((item, index) => 
            <div className="item" key={ index }>
              <img className="img" src={ item.img } />
              <div>
                <h3 className="title">{ item.title }</h3>
                { item.link && <a className="link" href={ item.link } target="_blank">{ item.cont } &gt;&gt;</a> }
                { item.innerLink && <Link className="link" to={ item.innerLink } target="_blank">{ item.cont } &gt;&gt;</Link> }
              </div>
            </div>
          )}
        </div>
      </Cont>
    </FooterWrap>
    <Map>
      <img className="img" src={ map_bg } />
    </Map>
  </Layout>
)};

export default injectIntl(Detail);

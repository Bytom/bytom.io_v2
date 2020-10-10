import React, {useState, useEffect} from 'react';
import css from 'styled-components';
import {FormattedMessage as Msg, injectIntl} from 'gatsby-plugin-intl';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DesBar from '../components/desbar';

import img_bg from '../images/bg-vapor.png';
import node_eco_bg from '../images/side/node_eco_bg.png';
import footer_des_bg from '../images/side/footer_des_bg.png';
import _conf from '../conf/side.conf';
import axios from "axios/index";

const BannerWrap = css.div`
  width: 100%;
  height: 560px;
  background: #004EE4 url(${img_bg}) center top / cover no-repeat;
  @media (max-width: 640px) {
    height: 440px;  
  }
`;
const NodeWrap = css.div`
  width: 100%;
  min-height: 723px;
  background: #fafbfe url(${node_eco_bg}) center top / cover no-repeat;
  .paragraph{
    width: 869px;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    position: relative;
    padding-top:99px;
    h2{
      font-size: 44px;
      font-weight: bold;
      span{
        color: #004EE4;
      }
      margin-bottom:10px;
    }
    p{
      font-size: 16px;
      color: rgba(0, 0, 0, 0.56);
      text-align:left;
    }
    @media (max-width: 640px) {
      width: 100%;
      margin: 0 10px;
    }
  }
  .cardWrap{
      width: 1280px;
      display: flex;
      position: relative;
      margin: 40px auto 0;
      @media (max-width: 640px) {
        width: 100%;
        flex-direction: column;
        padding: 0 30px;
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
  h1{
    white-space: pre-line;
    font-size: 54px;
    font-weight: bold;
    padding-top: 165px;
    line-height: 72px;
    color: #fff;
  }
  p{
    font-size: 24px;
    font-weight: 300;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.72);
    font-weight: 300;
    font-size: 20px;
    line-height: 36px;
    max-width: 826px;
    width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}
  }
  @media (max-width: 640px) {
    width: 100%;
    h1{
      padding: 118px 40px 0 40px;
      line-height: 48px;
      font-size: 32px;
      white-space: none;
    }
    P{
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

const CardWarp = css.div`
  width: 33%;
  background:#fff;
  text-align: center;
  position: relative;
  border-radius: 8px;
  height: 370px;
  padding: 60px 45px;
  text-align: center;
  
  .hide{
    display:none;
    h4{
      font-weight: bold;
      font-size: 18px;
      
      color: rgba(0, 0, 0, 0.88);
      margin-bottom: 12px;
    }
  }
  .show{
    p{
      font-size: 16px;
    }
    display:block;
  }
  
  &:not(:last-child){
    margin-right: 32px;
  }
  
  &:hover{
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
    .hide{
      display:block;
    }
    .show{
      display:none;
    }
  }
  i{
    height: 29px;
    width: 29px;
    border-radius: 19px;
    display: block;
    background: black;
    border: 9px solid gray;
    margin: 0 auto 20px;
    
    &.green{
      background: #91D303;
      border-color: #F4FBE6;
    }
    &.yellow{
      background: #FFCC00;
      border-color: #FFFAE5;
    }
    &.blue{
      background:#004EE4;
      border-color: #E5EDFC;
    }
  }
  
  .num{
    font-weight: bold;
    font-size: 90px;
    
    color: #000000;
  }
  
  @media (max-width: 640px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const FooterWrap = css.div`
  width: 100%;
  background: #ffffff url(${footer_des_bg}) center top / cover no-repeat;
`;
const FooterItem = css.li`
  width: 33%;
  display: flex;
  float: left;
  padding: 70px 10px;
  box-sizing: border-box;
  text-align:left;

  h3{
    font-weight: bold;
    font-size: 28px;
    
    color: #000000;
  }
  a{
    color: #004EE4;
  }
  .divider{
    width: 1px;
    height: 30px;
    background:rgba(0, 0, 0, 0.24);
    margin: 0 40px 0 auto;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding: 20px 10px;
    border-bottom: 0.5px solid #eae8e8;
    .divider{
      display:none;
    }
  }
`;
const Img = css.img`
  width: 68px;
  height: 68px;
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
`;

const Detail = ({ intl }) => {
  const [loading, setLoading] = useState(true);
  const [nodeList, setNodeList] = useState([]);
  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      const {
        data: {
          data
        },
      } = await axios.get(`${_conf.node_list}`);
      setNodeList(data.consensus_nodes);
      setLoading(false);
    };
    try {
      getList();
    } catch (error) {}
  }, []);

  const totalNode = nodeList.length;
  const bpNum = nodeList.filter(n => n.role === 0).length;
  const stanbyBpNum = nodeList.filter(n => n.role === 1).length;
  return (
  <Layout>
    <SEO
      title="Bytom"
    />
    <BannerWrap>
      <Cont>
        <h1><Msg id="vapor_banner" /></h1>
        <p><Msg id="vapor_banner_subtitle" /></p>
      </Cont>
    </BannerWrap>
    <DesBar features={_conf.features} />
    <NodeWrap>
      <div className='paragraph'>
        <h2>
          {
            intl.locale === 'en' ?
              <>
                <span>Node</span> ecology
              </>
              :
              <>
                <span>节点</span>生态
              </>
          }
        </h2>
        <p><Msg id="vapor_node_eco_des"/></p>
      </div>
      <div className="cardWrap">
        <CardWarp>
          <i className="green"></i>
          <div className="show">
            <div className="num">{bpNum||0}</div>
            <p><Msg id="vapor_list_part1_title"/></p>
          </div>
          <div className="hide">
            <h4><Msg id="vapor_list_part1_title"/></h4>
            <p><Msg id="vapor_list_part1_des"/></p>
          </div>
        </CardWarp>
        <CardWarp>
          <i className="yellow"></i>
          <div className="show">
            <div className="num">{stanbyBpNum||0}</div>
            <p><Msg id="vapor_list_part2_title"/></p>
          </div>
          <div className="hide">
            <h4><Msg id="vapor_list_part2_title"/></h4>
            <p><Msg id="vapor_list_part2_des"/></p>
          </div>
        </CardWarp>
        <CardWarp>
          <i className="blue"></i>
          <div className="show">
            <div className="num">{totalNode||0}</div>
            <p><Msg id="vapor_list_part3_title"/></p>
          </div>
          <div className="hide">
            <h4><Msg id="vapor_list_part3_title"/></h4>
            <p><Msg id="vapor_list_part3_des"/></p>
          </div>
        </CardWarp>
      </div>
    </NodeWrap>
    <FooterWrap>
      <Cont>
        <ul className="clearfix">
          {
            _conf.footerFeatures.map((item, index) => (
              <FooterItem key={index}>
                <Img src={item.img} alt=""/>
                <div>
                  <h3>{item.title}</h3>
                  <a href={item.link} target={"_blanket"}>{item.cont} >></a>
                </div>
                {(index !== (_conf.footerFeatures.length-1)) && <div className="divider"/>}
              </FooterItem>
            ))
          }
        </ul>
      </Cont>
    </FooterWrap>
  </Layout>
)};

export default injectIntl(Detail);

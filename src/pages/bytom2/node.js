import React from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from 'gatsby-plugin-intl';
import css from 'styled-components';
import Layout from '../../components/layout';

import img_bg from '../../images/bytom2/node/web/bg.png';
import img_bg_footer from '../../images/bytom2/node/web/bg_footer.png';
import img_bg_1 from '../../images/bytom2/node/web/01.png';
import img_bg_2 from '../../images/bytom2/node/web/02.png';
import img_bg_m from '../../images/bytom2/node/m/bg.png';
import img_bg_m_footer from '../../images/bytom2/node/m/bg_footer.png';
import img_bg_m_1 from '../../images/bytom2/node/m/01.png';
import img_bg_m_2 from '../../images/bytom2/node/m/02.png';
import img_bg_m_3 from '../../images/bytom2/node/m/03.png';

const headerStyle = {
  background: `url(${img_bg}) top center / 1920px no-repeat, #000`,
};

const Wrap = css.div`
  padding-bottom: 82px;
  background: url(${img_bg_2}) left 1300px / 243px 400px no-repeat, 
              url(${img_bg_1}) right 450px / 532px 850px no-repeat, 
              url(${img_bg}) center -80px / 1920px no-repeat, 
              url(${img_bg_footer}) bottom center / 1920px no-repeat,
              #000;
  color: rgba(255, 255, 255, 0.72);
  .header{
    padding: 130px 0 0 0;
    width: 1180px;
    margin: 0 auto;
    text-align: center;
    h1{
      font-size: 54px;
      font-weight: 600;
      line-height: 1em;
      color: #fff;
    }
    p{
      margin: 30px 0;
      line-height: 32px;
      font-size: 18px;
      font-weight: 300;
    }
  }
  .cont{
    padding: 12px 354px 0 0;
    width: 1180px;
    margin: 0 auto;
    &>h1:nth-child(1), &>ul:nth-child(1){
      display: none;
    }
    &>ul:nth-child(10){
      li:nth-child(2n){
        list-style: none;
      }
    }
    h1{
      color: #fff;
      font-size: 44px;
      font-weight: 600;
      line-height: 1em;
      margin: 120px 0 60px;
    }
    ul{
      padding: 0 0 0 18px;
      li{
        font-size: 16px;
        line-height: 24px;
        list-style: disc;
        table{
          width: 498px;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid #363636;
          margin-top: 20px;
          td{
            background: rgba(28, 28, 28, 1);
            border: 1px solid #363636;
            width: 50%;
            padding: 16px 20px;
            font-size: 16px;
            line-height: 1em;
          }
        }
      }
    }
  }
  a{
    height: 48px;
    line-height: 48px;
    background: linear-gradient(180deg, #3177FF 0%, #004EE4 100%);
    border-radius: 8px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    display: inline-block;
    padding: 0 40px;
  }
  @media (max-width: 640px) {
    padding: 0px 20px 360px 20px;
    background: url(${img_bg_m_1}) right 320px / 100px no-repeat, 
                url(${img_bg_m_2}) left 1300px / 50px no-repeat, 
                url(${img_bg_m_3}) right 1980px / 50px no-repeat, 
                url(${img_bg_m}) center -60px / 100% no-repeat, 
                url(${img_bg_m_footer}) bottom center / 100% no-repeat,
                #000;
    .header{
      padding: 50px 0 0 0;
      width: 100%;
      h1{
        font-size: 36px;
        font-weight: 600;
        line-height: 1.5em;
      }
      p{
        line-height: 24px;
        font-size: 16px;
        text-align: left;
      }
    }
    .cont{
      width: 100%;
      padding: 0;
      h1{
        font-size: 20px;
        margin: 60px 0 30px;
      }
      ul{
        padding: 0 0 0 18px;
        li{
          list-style: disc;
          table{
            width: 100%;
          }
        }
      }
    }
  }
`;

const TableDevice = (
  <table>
    <tr>
      <td><Msg id="btm2_node_des_3_5_0" /></td>
      <td>CentOS 7 / Ubuntu 18.04</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 Core</td>
    </tr>
    <tr>
      <td><Msg id="btm2_node_des_3_5_1" /></td>
      <td>32 G</td>
    </tr>
    <tr>
      <td><Msg id="btm2_node_des_3_5_2" /></td>
      <td>3TB SSD</td>
    </tr>
    <tr>
      <td><Msg id="btm2_node_des_3_5_3" /></td>
      <td>50 Mbps</td>
    </tr>
  </table>
);

const TableReward = (
  <table>
    <tr>
      <td><Msg id="btm2_node_des_4_4_0" /></td>
      <td><Msg id="btm2_node_des_4_4_1" /></td>
    </tr>
    <tr>
      <td><Msg id="btm2_node_des_4_4_2" /></td>
      <td>5.7 BTM</td>
    </tr>
    <tr>
      <td><Msg id="btm2_node_des_4_4_3" /></td>
      <td>82,191.78 BTM</td>
    </tr>
    <tr>
      <td><Msg id="btm2_node_des_4_4_4" /></td>
      <td>30,000,000 BTM</td>
    </tr>
  </table>
);

const NodeApply = () => {
  return (
    <Layout headerStyle={headerStyle}>
      <Wrap>
        <div className="header">
          <h1>
            <Msg id="btm2_node_title" />
          </h1>
          <p>
            <Msg id="btm2_node_des" />
          </p>
          <Link to="/node/apply">
            <Msg id="plan_btn_apply" />
          </Link>
        </div>
        <div className="cont">
          {[0, 4, 6, 5, 10].map((count, i) => (
            <React.Fragment key={i}>
              <h1>
                <Msg id={`btm2_node_subtitle_${i + 1}`} />
              </h1>
              <ul>
                {new Array(count).fill('0').map((item, index) => (
                  <li
                    key={index}
                    style={{ marginTop: i === 2 && index === 5 || i === 3 && index === 4 ? '30px' : 0 }}
                  >
                    <Msg id={`btm2_node_des_${i + 1}_${index}`} />
                    { i === 2 && index === 5 && TableDevice}
                    { i === 3 && index === 4 && TableReward}
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </div>
      </Wrap>
    </Layout>
  );
};

export default NodeApply;

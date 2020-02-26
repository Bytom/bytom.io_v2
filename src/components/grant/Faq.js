import React from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";
import css from 'styled-components';

import _conf from '../../conf/bounty.conf';

const FaqWrap = css.div`
  background: #1C1C1C;
  color: #fff;
  padding: 100px 0;
  @media (max-width: 640px) {
    width: 100%;
    padding: 40px 20px;
  }
`;
const Wrap = css.div`
  width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  &>h1{
    color: #fff;
    font-size: 44px;
  }
  &>div{
    padding-left: 238px;
    &>div{
      border-bottom: 1px solid #363636;
      padding: 40px 0;
      &:first-child{
        padding-top: 0;
      }
      &>h2{
        font-size: 18xp;
        color: #fff;
      }
      &>p{
        font-size: 16px;
        margin-top: 10px;
        line-height: 1.8em;
        color: rgba(255, 255, 255, 0.72);
      }
    }
  }
  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    &>h1{
      font-size: 36px;
      line-height: 1em;
      margin-bottom: 40px;
    }
    &>div{ 
      padding: 0;
      &>div{
        padding: 20px 0;
        &>h2{
          font-size: 16px;
        }
        &>p{
          font-size: 14px;
        }
      }
    }
  }
`;
const Button = css.a`
  display: inline-block;
  padding: 0 32px;
  height: 45px;
  line-height: 45px;
  border: 1px solid #fff;
  color: #fff;
  text-align: center;
  font-size: 16px;
  box-sizing: border-box;
  &:hover {
    background: linear-gradient(90deg, #004EE4 0%, #2F76FF 100%);
    border: none;
    color: #fff;
  }
  @media (max-width: 640px) {
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
`;

function Faq () {
  return (
    <FaqWrap>
        <Wrap>
          <Msg id="bounty_faq_title" tagName="h1"/>
          <div>
            {
              _conf.faq.map((item, index) => (
                <div key={index}>
                  <h2>{item.title}</h2>
                  <p>{item.cont}</p>
                  { index === 0 && <Button style={{ marginTop: 15 }}><Msg id="bounty_btn_apply" /></Button>}
                </div>
              ))
            }
          </div>
        </Wrap>
      </FaqWrap>

  )
}

export default injectIntl(Faq);
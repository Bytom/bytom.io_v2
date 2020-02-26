import React from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from 'gatsby-plugin-intl';
import css from 'styled-components';

import _conf from '../../conf/bounty.conf';
const Wrap = css.ul`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;
const StepItem = css.li`
  display: inline-block;
  width: 222px;
  height: 158px;
  position: relative;
  &>div {
    width: 192px;
    height: 158px;
    padding: 20px 20px 20px 50px;
    text-align: left;
    background: #fff;
    position: absolute;
    right: 0;
    top: 0;
    h1{
      font-size: 18px;
      color: rgba(0, 0, 0, 0.88);
    }
    p{
      font-size: 16px;
      color: rgba(0, 0, 0, 0.56);
      line-height: 1.8em;
      margin-top: 10px;
      letter-spacing: 0.2px;
    }
  }
  &>img{
    width: 60px;
    height: 60px;
    position: absolute;
    left: 0;
    ${props => props.pos ? 'top: 0;' : 'bottom: 0;'}
  }
  @media (max-width: 640px) {
    width: 100%;
    height: 100px;
    margin-top: 20px;
    &>div{
      width: auto;
      height: 100px;
      left: 30px;
      h1{ font-size: 16px; }
      p{ font-size: 14px; }
    }
    &>img{
      top: 0 !important;
    }
  }
`;

function Step() {
  return (
    <Wrap>
      {_conf.steps.map((item, index) => (
        <StepItem pos={index % 2 === 1} key={index}>
          <div>
            <h1>{item.title}</h1>
            <p>{item.cont}</p>
          </div>
          <img src={item.icon} alt="" />
        </StepItem>
      ))}
    </Wrap>
  );
}

export default injectIntl(Step);

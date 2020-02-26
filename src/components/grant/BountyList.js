import React from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from 'gatsby-plugin-intl';
import css from 'styled-components';

import _conf from '../../conf/bounty.conf';

const BountyListWrap = css.div`
  background: #fff;
`;
const Wrap = css.div`
  width: 1240px;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  &>div {
    h1 {
      font-size: 44px;
      font-weight: bold;
      line-height: 1.5em;
      width: 190px;
      position: sticky;
      top: 100px;
    }
  }
  &>section{
    flex: 1;
    padding-left: 126px;
    &>div {
      clear: both;
      &:not(:first-child) {
        padding-top: 60px;
      }
      &>h1{
        font-size: 28px;
        line-height: 1.6em;
        color: rgba(0, 0, 0, 0.88);
        border-bottom: 1px solid #d8d8d8;
        padding: 20px 0;
        background: #fff;
      }
      &>ul {
        clear: both;
        li{
          width: 286px;
          min-height: 175px;
          margin: 32px 0 0 32px;
          float: left;
          background: #fafafa;
          padding: 20px;
          h3{
            font-size: 18px;
            line-height: 1.5em;
          }
          p{
            font-size: 16px;
            color: rgba(0, 0, 0, 0.56);
            line-height: 1.8em;
          }
          p:first-of-type{
            margin-top: 20px;
          }
          &:hover{
            h3{ color: #004EE4; }
          }
        }
        li:nth-child(1), li:nth-child(4), li:nth-child(7) {
          margin-left: 0;
        }
      }
    }
  }
  @media (max-width: 640px) {
    width: 100%;
    padding: 40px 20px;
    flex-direction: column;
    &>div>h1{ font-size: 36px; margin-bottom: 20px; }
    &>section {
      padding: 0;
      &>div {
        clear: both;
        &:not(:first-child) {
          padding-top: 20px;
        }
        &>h1{
          font-size: 20px;
          position: sticky;
          top: 0;
        }
        ul{
          li { 
            width: 100%; 
            min-height: 125px;
            margin: 20px 0 0 0; 
            h3{ font-size: 16px; }
            p{ font-size: 14px; }
          }
        }
      }
    }
  }
`;

function BountyList() {
  return (
    <BountyListWrap>
      <Wrap>
        <div>
          <Msg id="bounty_list_title" tagName="h1" />
        </div>
        <section>
          {_conf.task_list.map((item, index) => (
            <div key={index}>
              <h1>{item.title}</h1>
              <ul className="clearfix">
                {item.list.map((task, taskIndex) => (
                  <li key={taskIndex}>
                    <h3>0{taskIndex + 1}</h3>
                    <p>{task.title}</p>
                    {task.children &&
                      task.children.map((taskItem, taskItemIndex) => (
                        <p key={taskItemIndex}>{taskItem}</p>
                      ))}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </Wrap>
    </BountyListWrap>
  );
}

export default injectIntl(BountyList);

import React, { useState, useEffect } from 'react';
import css from 'styled-components';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";

import Card from '../components/Card';
import _conf from '../conf/config';
import ajax from 'axios';
import { format } from 'date-fns';

const Wrap = css.div`
  width: 100%;
  box-sizing: border-box;
`;
const Cont = css.div`
  width: 1280px;
  margin: 0 auto;
  padding: 60px 0 80px;
  &>h1{
    color: #000;
    font-size: 28px;
    font-weight: bold;
    a{
      font-size: 16px;
      color: #035BD4;
      float: right;
    }
  }
  @media (max-width: 640px) {
    width: 100%;
    box-sizing: border-box;
    padding: 30px 16px !important;
    &>h1{
      padding-bottom: 20px;
      font-size: 24px;
      a{
        line-height: 2em;
        font-size: 12px;
      }
    }
  }
`;
const CardWrap = css.div`
  width: 1280px;;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &>div{
    margin-top: 40px;
  }
  @media (max-width: 640px) {
    width: 100%;
    box-sizing: border-box;
    &>div{
      height: auto !important;
      margin-top: 20px !important;
    }
    &>div:nth-child(n+${props => props.isLight ? 11 : 4}){
      display: none;
    }
    &>div:first-child{
      margin-top: 0 !important;
    }
    h1{
      font-size: 15px !important;
      padding: 12px 12px 8px 12px !important;
    }
    p{
      font-size: 12px !important;
      height: 24px !important;
      padding: 0 12px !important;
    }
  }
`;
const More = css.div`
  text-align: right;
  padding: 20px 0 80px;
  @media (max-width: 640px) {
    padding: 30px 0 0;
  }
`;

const getTimes = times => {
  let result = '';
  try {
    result = format(new Date(+times), 'YYYY-MM-DD');
  } catch (err) {
    console.log(err);
  }
  return result;
};

const Trends = function({ light = false, style = {}, blog = false, intl }) {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const url = blog ? _conf.api.blog : _conf.api.news;
    const page_size = light ? 24 : 6;
    const params = blog ? {} : { page_size, lang: intl.locale || 'en' };

    const getList = async () => {
      setLoading(true);
      const {
        data: {
          data,
        },
      } = await ajax.get(url, { params });
      setNews(blog ? data.content : data.list);
      setLoading(false);
    };
    try {
      getList();
    } catch (error) {}
  }, [blog]);

  if (loading) {
    return (
      <Cont style={style}>
        <CardWrap style={{ paddingBottom: 40 }}>
          {new Array(6).fill(0).map((item, index) => (
            <Card key={index} loading />
          ))}
        </CardWrap>
      </Cont>
    );
  }

  return (
    <Wrap>
      <Cont style={style}>
        {!light && (
          <h1>
            <Msg id="home_news_title" /> <Link to="/blog"><Msg id="home_news_more" /> &gt;&gt;</Link>
          </h1>
        )}
        <CardWrap isLight={light}>
          {news.map((item, index) => (
            <Card
              style={{ height: 255 }}
              key={item.id}
              link={blog ? `/detail?id=${item.slug}` : item.link}
              img={item.image}
              title={item.title}
              des={blog ? '' : getTimes(item.post_time)}
            />
          ))}
        </CardWrap>
        {light && (
          <More>
            <a target="_blank" href="https://medium.com/@Bytom_Official">
              Go to medium &gt;&gt;
            </a>
          </More>
        )}
      </Cont>
    </Wrap>
  );
};

export default injectIntl(Trends);

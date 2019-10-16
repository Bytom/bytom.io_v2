import React from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";
import img_changj from '../images/team/01-01-changjia@2x.png';
import img_duanxx from '../images/team/01-02-duanxinxing@2x.png';
import img_langy from '../images/team/01-03-langyu@2x.png';
import img_jinl from '../images/team/01-04-jinlei@2x.png';
import img_quzx from '../images/team/01-05-quzhaoxiang@2x.png';
import img_lizc from '../images/team/01-06-lizongcheng@2x.png';

import img_zhuyq from '../images/team/02-01-zhuyiqi@2x.png';
import img_mayy from '../images/team/02-02-mayao@2x.png';
import img_yangs from '../images/team/02-03-yangsheng@2x.png';
import img_linhy from '../images/team/02-04-linhaoyu@2x.png';
import img_wangz from '../images/team/02-05-wangzhang@2x.png';
import img_shena from '../images/team/02-06-shenao@2x.png';
import img_zhangcc from '../images/team/02-07-zhangchengcheng@2x.png';
import img_linzt from '../images/team/02-08-linzhiting@2x.png';
import img_qiaoy from '../images/team/02-09-qiaoyu@2x.png';

import img_duc from '../images/team/03-01-duchao@2x.png';
import img_maql from '../images/team/03-02-maqianli@2x.png';
import img_zhonglf from '../images/team/03-03-zhonglifei@2x.png';
import img_huangxl from '../images/team/03-04-huangxinglong@2x.png';
import img_liky from '../images/team/03-05-likaiyuan@2x.png';
import img_pnegzw from '../images/team/03-06-zhuowen@2x.png';
import img_zhangx from '../images/team/03-07-zhangxi@2x.png';
import img_wenjc from '../images/team/03-08-jiacheng@2x.png';
import img_liuyr from '../images/team/03-09-yuruo@2x.png';
import img_reny from '../images/team/03-10-renyi@2x.png';
import img_fanmx from '../images/team/03-11-mengxin@2x.png';
import img_xun from '../images/team/03-12-xunan@2x.png';

export default {
  title: [
    <Msg id="team_subtitle_1" />,
    <Msg id="team_subtitle_2" />,
    <Msg id="team_subtitle_3" />,
  ],
  data: [
    [
      {
        name: <Msg id="team_member_cj" />,
        position: <Msg id="team_member_cj_title" />,
        img: img_changj,
        contact: [
          {type: 'linkedin', link: 'https://www.linkedin.com/in/%E5%BF%97%E9%B9%8F-%E5%88%98-750b8395/'},
        ],
      },
      {
        name: <Msg id="team_member_ly" />,
        position: <Msg id="team_member_ly_title" />,
        img: img_langy,
        contact: [
          {type: 'linkedin', link: 'https://www.linkedin.com/in/lang-yu-b15604142'},
          {type: 'email', link: 'langyu@bytom.io'},
        ],
      },
      {},
      {},
    ],
    [
      {
        name: <Msg id="team_member_zyq"/>,
        position: <Msg id="team_member_zyq_title" />,
        img: img_zhuyq,
        contact: [
          {type: 'linkedin', link: 'https://www.linkedin.com/in/yiqi-zhu-56608963/'},
          // {type: 'email', link: 'james@bytom.io'},
        ],
      },
      {
        name: <Msg id="team_member_jl" />,
        position: <Msg id="team_member_jl_title" />,
        img: img_jinl,
        contact: [
          {type: 'linkedin', link: 'https://www.linkedin.com/in/jinlei/'},
          {type: 'email', link: 'jinl@8btc.com'},
        ],
      },
      {
        name: <Msg id="team_member_myy" />,
        position: <Msg id="team_member_dev_title" />,
        img: img_mayy,
        contact: [
          {type: 'linkedin', link: 'https://www.linkedin.com/in/%E8%80%80%E8%80%80-%E9%A9%AC-596414132/'},
          // {type: 'email', link: ''},
        ],
      },
      {
        name: <Msg id="team_member_ys" />,
        position: <Msg id="team_member_dev_title" />,
        img: img_yangs,
        contact: [
          {type: 'linkedin', link: ''},
          // {type: 'email', link: ''},
        ],
      },
      {
        name: <Msg id="team_member_lhy" />,
        position: <Msg id="team_member_dev_title" />,
        img: img_linhy,
        contact: [
          {type: 'linkedin', link: 'https://www.linkedin.com/in/haoyu-lin-239474123/'},
          // {type: 'email', link: ''},
        ],
      },
      {
        name: <Msg id="team_member_wz"/>,
        position: <Msg id="team_member_dev_title" />,
        img: img_wangz,
        contact: [
          {type: 'linkedin', link: ''},
          // {type: 'email', link: ''},
        ],
      },
      {
        name: <Msg id="team_member_sa"/>,
        position: <Msg id="team_member_dev_title" />,
        img: img_shena,
        contact: [
          {type: 'linkedin', link: 'https://www.linkedin.com/in/%E6%95%96-%E6%B2%88-89976a11b/'},
          // {type: 'email', link: ''},
        ],
      },
      {
        name: <Msg id="team_member_zcc" />,
        position: <Msg id="team_member_dev_title" />,
        img: img_zhangcc,
        contact: [
          {type: 'linkedin', link: 'https://www.linkedin.com/in/%E6%88%90%E6%88%90-%E5%BC%A0-705381169/'},
          // {type: 'email', link: ''},
        ],
      },
      {
        name: <Msg id="team_member_lzt" />,
        position: <Msg id="team_member_dev_fe_title" />,
        img: img_linzt,
        contact: [
          {type: 'linkedin', link: 'https://www.linkedin.com/in/zhitinglin/'},
          // {type: 'email', link: ''},
        ],
      },
      {
        name: <Msg id="team_member_qy" />,
        position: <Msg id="team_member_dev_fe_title" />,
        img: img_qiaoy,
        contact: [
          {type: 'linkedin', link: ''},
          // {type: 'email', link: ''},
        ],
      },
      {},
      {}
    ],
    [
      // {
      //   name: 'Du Chao',
      //   position: 'Marketing Director',
      //   img: img_duc,
      //   contact: [
      //     {type: 'linkin', link: 'https://www.linkedin.com/in/chao-du-304a92b2'},
      //     {type: 'email', link: 'duc@bytom.io'},
      //   ],
      // },
      {
        name: <Msg id="team_member_qzx" />,
        position: <Msg id="team_member_qzx_title" />,
        img: img_quzx,
        contact: [
          {type: 'twitter', link: 'https://twitter.com/He1l_Q'},
          {type: 'email', link: 'q@bytom.io'},
        ],
      },
      {
        name: <Msg id="team_member_lzc" />,
        position: <Msg id="team_member_lzc_title" />,
        img: img_lizc,
        contact: [
          {type: 'email', link: 'lizc@8btc.com'},
        ],
      },
      {
        name: <Msg id="team_member_mql" />,
        position: <Msg id="team_member_mql_title" />,
        img: img_maql,
        contact: [
          {type: 'linkin', link: ''},
          {type: 'email', link: 'mql@bytom.io'},
        ],
      },
      {
        name: <Msg id="team_member_zlf" />,
        position: <Msg id="team_member_zlf_title" />,
        img: img_zhonglf,
        contact: [
          {type: 'linkin', link: 'https://www.linkedin.com/in/%E7%AB%8B%E9%A3%9E-%E9%92%9F-901115b0/'},
          {type: 'email', link: 'zhonglf@bytom.io'},
        ],
      },
      {
        name: <Msg id="team_member_ry" />,
        position: <Msg id="team_member_ry_title" />,
        img: img_reny,
        contact: [
          {type: 'linkin', link: 'https://www.linkedin.com/in/yi-ren-098303149/'},
          {type: 'email', link: 'reny@bytom.io'},
        ],
      },
      {
        name: <Msg id="team_member_hxl" />,
        position: <Msg id="team_member_hxl_title" />,
        img: img_huangxl,
        contact: [
          {type: 'email', link: 'huangxl@bytom.io'},
        ],
      },
      {
        name: <Msg id="team_member_lky" />,
        position: <Msg id="team_member_lky_title" />,
        img: img_liky,
        contact: [
          {type: 'linkin', link: ''},
          {type: 'email', link: ''},
        ],
      },
      {
        name: <Msg id="team_member_wjc" />,
        position: <Msg id="team_member_wjc_title" />,
        img: img_wenjc,
        contact: [
          {type: 'linkin', link: 'https://www.linkedin.com/in/%E5%98%89%E6%88%90-%E7%BF%81-815918161/'},
          {type: 'email', link: ''},
        ],
      },
      {
        name: <Msg id="team_member_fmx" />,
        position: <Msg id="team_member_fmx_title" />,
        img: img_fanmx,
        contact: [
          {type: 'linkin', link: 'https://www.linkedin.com/in/%E9%86%92-%E6%A2%A6-392635175/'},
          {type: 'email', link: 'fanmx@bytom.io'},
        ],
      },
      {},
    ],
  ],
}
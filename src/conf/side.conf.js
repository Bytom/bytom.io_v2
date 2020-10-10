import React from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";

import img_icon_des1 from '../images/side/icon-des1.png';
import img_icon_des2 from '../images/side/icon-des2.png';
import img_icon_des3 from '../images/side/icon-des3.png';

import img_icon_footer_des1 from '../images/side/icon-footer-des1.png';
import img_icon_footer_des2 from '../images/side/icon-footer-des2.png';
import img_icon_footer_des3 from '../images/side/icon-footer-des3.png';

const NODE_API = 'https://bcapi.movapi.com/vapor/v3/q/vote-status?start=0&limit=200'

export default {
  node_list:NODE_API,
  features: [
    {
      img: img_icon_des1,
      title: <Msg id="vapor_slide_feature_part1_title" />,
      cont: <Msg id="vapor_slide_feature_part1_des" />
    },
    {
      img: img_icon_des2,
      title: <Msg id="vapor_slide_feature_part2_title" />,
      cont: <Msg id="vapor_slide_feature_part2_des" />
    },
    {
      img: img_icon_des3,
      title: <Msg id="vapor_slide_feature_part3_title" />,
      cont: <Msg id="vapor_slide_feature_part3_des" />
    },
  ],
  footerFeatures: [
    {
      img: img_icon_footer_des1,
      title: <Msg id="vapor_bottom_part1" />,
      cont: <Msg id="vapor_bottom_part1_des" />,
      link:"http://staking.bymov.io/"
    },
    {
      img: img_icon_footer_des2,
      title: <Msg id="vapor_bottom_part2" />,
      cont: <Msg id="vapor_bottom_part2_des" />,
      link:"https://bytom.io/en/node/detail"
    },
    {
      img: img_icon_footer_des3,
      title: <Msg id="vapor_bottom_part3" />,
      cont: <Msg id="vapor_bottom_part3_des" />,
      link:"https://github.com/Bytom/vapor/wiki/Build-and-Install"
    },
  ],
};
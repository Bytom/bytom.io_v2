import React from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";

import img_icon_des1 from '../images/icon-des.png';
import img_icon_des2 from '../images/icon-des2.png';
import img_icon_des3 from '../images/icon-des3.png';


export default {
  slide: [
    {
      title: 'Bytom Blockchain',
      des: 'A digital asset layer protocol, is the infrastructure of asset Internet.'
    },
  ],
  features: [
    {
      img: img_icon_des1,
      title: <Msg id="home_slide_feature_part1_title" />,
      cont: <Msg id="home_slide_feature_part1_des" />
    },
    {
      img: img_icon_des2,
      title: <Msg id="home_slide_feature_part2_title" />,
      cont: <Msg id="home_slide_feature_part2_des" />
    },
    {
      img: img_icon_des3,
      title: <Msg id="home_slide_feature_part3_title" />,
      cont: <Msg id="home_slide_feature_part3_des" />
    },
  ],
  videoInfo: {
    title: <Msg id="home_video_title" />,
    subTitle: <Msg id="home_video_sub_title" />,
    desc: <Msg id="home_video_des" />,
    list: [
      <Msg id="home_video_feature_1" />,
      <Msg id="home_video_feature_2" />,
      <Msg id="home_video_feature_3" />,
      <Msg id="home_video_feature_4" />,
      <Msg id="home_video_feature_5" />,
      <Msg id="home_video_feature_6" />,
      <Msg id="home_video_feature_7" />,
      <Msg id="home_video_feature_8" />,
    ]
  },
  bytomInfo: {
    title: <Msg tagName="i" id="home_bytom_title" />,
    titleDes: <Msg id="home_bytom_title_des" />,
    subTitle: <Msg tagName="i" id="home_bytom_subtitle" />,
    desc: <Msg tagName="p" id="home_bytom_des" />
  }

};
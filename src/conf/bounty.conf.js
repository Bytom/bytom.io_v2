import React from 'react';
import css from 'styled-components';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";

import icon_step_1 from '../images/bounty/img - cube - 1.png';
import icon_step_2 from '../images/bounty/img - cube - 2.png';
import icon_step_3 from '../images/bounty/img - cube - 3.png';
import icon_step_4 from '../images/bounty/img - cube - 4.png'
import icon_step_5 from '../images/bounty/img - cube - 5.png'

export default {
  steps: [
    {
      title: <Msg id="bounty_step_1_title" />,
      cont: <Msg id="bounty_step_1_des" />,
      icon: icon_step_1,
    },
    {
      title: <Msg id="bounty_step_2_title" />,
      cont: <Msg id="bounty_step_2_des" />,
      icon: icon_step_2,
    },
    {
      title: <Msg id="bounty_step_3_title" />,
      cont: <Msg id="bounty_step_3_des" />,
      icon: icon_step_3,
    },
    {
      title: <Msg id="bounty_step_4_title" />,
      cont: <Msg id="bounty_step_4_des" />,
      icon: icon_step_4,
    },
    {
      title: <Msg id="bounty_step_5_title" />,
      cont: <Msg id="bounty_step_5_des" />,
      icon: icon_step_5,
    },
  ],

  task_list: [
    {
      title: <Msg id="bounty_list_part_1_title" />,
      list: [
        { title: <Msg id="bounty_list_part_1_1" /> },
        { title: <Msg id="bounty_list_part_1_2" /> },
        { title: <Msg id="bounty_list_part_1_3" /> },
        { title: <Msg id="bounty_list_part_1_4" /> },
        { title: <Msg id="bounty_list_part_1_5" /> },
        { title: <Msg id="bounty_list_part_1_6" /> },
        { 
          title: <Msg id="bounty_list_part_1_7" />,
          children: [
            <Msg id="bounty_list_part_1_7_1" />,
            <Msg id="bounty_list_part_1_7_2" />,
            <Msg id="bounty_list_part_1_7_3" />,
            <Msg id="bounty_list_part_1_7_4" />,
          ]
        },
      ]
    },
    {
      title: <Msg id="bounty_list_part_2_title" />,
      list: [
        { title: <Msg id="bounty_list_part_2_1" /> },
        { title: <Msg id="bounty_list_part_2_2" /> },
        { title: <Msg id="bounty_list_part_2_3" /> },
        { title: <Msg id="bounty_list_part_2_4" /> },
        { title: <Msg id="bounty_list_part_2_5" /> },
      ]
    },
    {
      title: <Msg id="bounty_list_part_3_title" />,
      list: [
        { title: <Msg id="bounty_list_part_3_1" /> },
        { title: <Msg id="bounty_list_part_3_2" /> },
        { title: <Msg id="bounty_list_part_3_3" /> },
      ]
    },
  ],
  faq: [
    {
      title: <Msg id="bounty_faq_1_q" />,
      cont: <Msg id="bounty_faq_1_a" />,
    },
    {
      title: <Msg id="bounty_faq_2_q" />,
      cont: <Msg id="bounty_faq_2_a" />,
    },
    {
      title: <Msg id="bounty_faq_3_q" />,
      cont: <Msg id="bounty_faq_3_a" />,
    },
    {
      title: <Msg id="bounty_faq_4_q" />,
      cont: <Msg id="bounty_faq_4_a" />,
    },
    {
      title: <Msg id="bounty_faq_5_q" />,
      cont: <Msg id="bounty_faq_5_a" />,
    },
    {
      title: <Msg id="bounty_faq_6_q" />,
      cont: <Msg id="bounty_faq_6_a" />,
    },
  ]
};
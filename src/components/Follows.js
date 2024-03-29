import React from 'react';
import css from 'styled-components';

const Wrap = css.ul`
  display: flex;
  justify-content: space-between;
  li{
    float: left;
    i{
      font-size: ${(props) => props.size}px;
      color: #666;
      &:hover{
        color: #fff;
      }
      @media (max-width: 640px) {
        color: #fff;
      }
    }
  }
`;

export default function Follows({ size=23 }) {
  return (
    <Wrap size={size}>
      <li><a target="_blank" href="https://twitter.com/Bytom_Official"><i className="iconfont twitter"></i></a></li>
      <li><a target="_blank" href="https://mp.weixin.qq.com/s/fLCk33KYQTouevEAi0a0Kg"><i className="iconfont wechat"></i></a></li>
      <li><a target="_blank" href="https://weibo.com/u/5966947038?refer_flag=1001030101_"><i className="iconfont weibo"></i></a></li>
      <li><a target="_blank" href="https://www.chainnode.com/forum/143"><i className="iconfont chainnode"></i></a></li>
      <li><a target="_blank" href="https://www.facebook.com/bytomofficial/"><i className="iconfont facebook"></i></a></li>
      <li><a target="_blank" href="https://discord.gg/U3RSYr5"><i className="iconfont discord"></i></a></li>
      <li><a target="_blank" href="https://t.me/BytomInternational"><i className="iconfont telegram"></i></a></li>
    </Wrap>
  )
}

import React, { useState } from 'react';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";
import css from 'styled-components';
import ajax from 'axios';
import _conf from '../conf/config';


const Wrap = css.div`
  width: 500px;
  height: 270px;
  background-color: #fff;
  padding: 25px 30px;
  position: relative;
  h2{
    font-size: 20px;
    color: #000000;
    line-height: 1em;
  }
  input{
    display: block;
    height: 50px;
    width: 100%;
    margin: 20px 0 25px 0;
    padding: 0 15px;
    outline: none;
    box-sizing: border-box;
    border: 1px solid #b3b3b3;
  }
  button{
    display: block;
    height: 50px;
    width: 100%;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
    outline: none;
    background: linear-gradient(90deg,rgba(3,91,212,1) 0%,rgba(62,143,255,1) 100%);
  }
  p{
    color: #666;
    font-size: 14px !important;
    line-height: 26px !important;
    margin-top: 10px !important;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
const ErrMsg = css.span`
  font-size: 12px;
  line-height: 20px;
  color: ${props => props.success ? '#38b571' : '#E21919'};
  margin-top: -20px;
  display: inline-block;
  position: absolute;
  top: 136px;
`;

export default function Faucet() {
  const [result, handleGetBtm] = useState(0);
  const [address, setAddress] = useState('');
  const getBtm = async () => {
    if(!address){
      handleGetBtm(2);
      return;
    }
    try {
      const data = await ajax.post(_conf.api.faucet, { receiver_str: address });
      if(data.data.tx_id){
        handleGetBtm(1)
      }
    } catch (error) {
      handleGetBtm(2);
    }
  }
  return (
    <Wrap>
      <Msg id="dev_wallet_address" />
      <input placeholder="Bytom Testnet Wallet Address..." onChange={e => setAddress(e.target.value)} type="text"/>
      {result === 2 && <ErrMsg>* <Msg id="dev_wallet_err_msg" /></ErrMsg>}
      {result === 1 && <ErrMsg success>* <Msg id="dev_wallet_success_msg" /></ErrMsg>}
      <button onClick={getBtm}><Msg id="dev_wallet_btn" /></button>
      <Msg tagName="p" id="dev_wallet_des" values={{
        download: <Link to="/wallet"> <Msg id="dev_wallet_down" /> </Link>,
        intro: <a target="_blank" href="https://docs.bytom.io/en-us/docs/10_2_bytom_kit.html"> <Msg id="dev_wallet_intro" /> </a>
      }} />
    </Wrap>
  )
}

import React, { useState } from 'react';
import styled from 'styled-components';
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import _conf from '../../conf/eco.conf';
import { Link, injectIntl, FormattedMessage as Msg } from "gatsby-plugin-intl";

const Wrap = styled.div`
  width: 100%;
  height: 72px;
  box-shadow:0px 2px 4px rgba(0,0,0,0.04);
  opacity:1;
  background-color: #fff;
  position: sticky;
  top: 0;
  @media (max-width: 640px) {
    display: none;
  }
`;
const Cont = styled.ul` 
  width: 1280px;; 
  height: 100%;
  margin: 0 auto;
  display:flex;
  align-items:center;
`;
const Item = styled.li`
  font-size:16px;
  line-height:69px;
  color:rgba(0,0,0,1);
  padding:0 20px;
  cursor: pointer;
  border-bottom: 3px solid ${(props) => props.isCur ? '#035BD4' : 'transparent'};
  transition:all .4s;
`;
const ListWrap = styled.div`
  
`;
const List = styled.div`
  div{
    &.isEven{
      background:#fff;
    }
    .content{
    width: 1280px;; 
    height: 100%;
    margin: 0 auto;
    }
  }
  @media (max-width: 640px) {
    width: 100%;
    &>div{
      box-sizing: border-box;
      &>div{
        padding-bottom: 20px !important;
      }
      .content{
        padding: 0 16px;
        width: 100%;
      }
    }
  }
`
const Title = styled.h1`
  font-size:28px;
  font-weight:bold;
  color:rgba(40,40,40,1);
  padding:60px 0 40px 0;
  @media (max-width: 640px) {
    padding: 20px 0;
    font-size: 18px;
  } 
`
const IconList = styled.ul`
  display:flex;
  flex-wrap:wrap;
  li{
    width:22%;
    height:175px;
    margin-right:30px;
    margin-bottom:30px;
    box-shadow:0px 2px 4px rgba(0,0,0,0.04);
    &:hover{
      box-shadow: 0px 2px 12px rgba(0,0,0,0.12);
      transition: all .3s ease;
    }
    img{

    }
    h2{
      font-size:18px;
      font-weight:bold;
      line-height:26px;
      color:rgba(28,28,28,1);
      opacity:1;
      padding:14px 20px 20px;
    }
  }
  @media (max-width: 640px) {
    justify-content: space-between;
    li{
      width: 48%;
      height: auto;
      margin: 0 0 12px 0;
      h2{
        font-size: 12px;
        padding: 8px;
        line-height: 1em;
        font-weight: bold;
      }
    }
  }
`
const navList = [
  {
    id: 'wallets',
    name: <Msg id="eco_nav_wallet" />,
    index: 0
  },
  {
    id: 'explorers',
    name: <Msg id="eco_nav_exp" />,
    index: 1
  }, {
    id: 'mining',
    name: <Msg id="eco_nav_pool" />,
    index: 2
  }, {
    id: 'exchanges',
    name: <Msg id="eco_nav_exchange" />,
    index: 3
  }, {
    id: 'safety',
    name: <Msg id="eco_nav_safety" />,
    index: 4
  },
  {
    id: 'partners',
    name: <Msg id="eco_nav_partners" />,
    index: 5
  },
];

class TopFix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currnetIndex: 0
    };
  }
  componentDidMount() {
    // this.windowOnScroll();
    Events.scrollEvent.register('begin', function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  windowOnScroll() {
    window.onscroll = () => {
      //获取滚动条滚动的距离
      //指定了DOCTYPE时，使用document.documentElement.scrollTop。
      let h = document.documentElement.scrollTop
      // if (h > 80) {
      //   this.isScrollTop = false
      //   console.log('大于80', this.isScrollTop);

      // }else{
      //   this.isScrollTop = true
      //   console.log('小于80', this.isScrollTop);

      // }
    }
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  handleClick(index) {
    // scroll.scrollTo(index * 800)
    this.setState({
      currnetIndex: index
    })

    scroller.scrollTo(`test${index}`, {
      duration: 800,
      offset: -70,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  render() {
    return (
      <div>
        <Wrap>
          <Cont className="clearfix">
            {
              navList.map((item, index) => {
                return (
                  <Item isCur={index === this.state.currnetIndex} key={index} onClick={() => this.handleClick(index)}
                  >
                  {item.name}
                  </Item>
                )
              })
            }
          </Cont>
        </Wrap>
        <ListWrap className="clearfix">
          <List>
            {
              _conf.ecoList.map((item, index) => {
                return (
                  <Element name={`test${index}`} className="element" key={index}>
                    <div style={{paddingBottom: 50}} className={(index % 2) !== 0 ? 'isEven' : ''} >
                      <div className="content">
                        <Title>{item.title}</Title>
                        <IconList>
                          {
                            item.list.map((imgInfo, imgIndex) => {
                              return (
                                <li key={imgIndex}>
                                  <a target="_blank" href={imgInfo.link}>
                                    <img src={imgInfo.img} />
                                    <h2>{imgInfo.title}</h2>
                                  </a>
                                </li>
                              )
                            })
                          }
                        </IconList>
                      </div>
                    </div>
                  </Element>
                )
              })
            }
          </List>
        </ListWrap>
      </div>

    )
  }
}
export default TopFix; 
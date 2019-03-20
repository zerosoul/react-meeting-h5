import React, { PureComponent } from "react";
import styled from "styled-components";

import ani from "animejs";
import UnderLineTitle from "../component/UnderLineTitle";
import BtmImg from "../assets/img/point.one.png";
import Floating from "../component/Floating";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  padding: 0 2rem;
  padding-top: 4rem;
  height: 100vh;

  .lines {
    color: #666;
    font-size: 0.8rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .line {
      line-height: 1.6;
      border-bottom: 1px solid #ffaf80;
      &.bold {
        font-size: 1rem;
        font-weight: 800;
      }
    }
  }
  .btmImg {
    z-index: 1;
    img {
      width: 80%;
      animation: 4s ${Floating} ease-in infinite;
    }
  }
`;
export default class PointOne extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <Content ref={this.wrapper}>
        <UnderLineTitle title="亮点一：招生智能化" />
        <div className="lines">
          <p className="line">发传单、送气球，low爆了!</p>
          <p className="line">什么样的方式能够实现自动、智能化招生?</p>
        </div>
        <div className="lines">
          <p className="line bold">足不出户，生源爆满</p>
          <p className="line">借助互联网轻松实现</p>
        </div>
        <div className="btmImg">
          <img src={BtmImg} alt="开幕配图" />
        </div>
      </Content>
    );
  }
}

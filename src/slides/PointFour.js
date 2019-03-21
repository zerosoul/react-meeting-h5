import React, { Component } from "react";
import styled from "styled-components";

import ani from "animejs";
import Floating from "../component/Floating";
import UnderLineTitle from "../component/UnderLineTitle";

import BtmImg from "../assets/img/point.four.png";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  padding: 1rem 2rem;
  height: 100vh;

  .lines {
    color: #666;
    font-size: 0.8rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .line {
      line-height: 1.5;
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
      width: 100%;
      animation: 4s ${Floating} ease-in-out infinite;
    }
  }
`;
export default class PointFour extends Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <Content ref={this.wrapper}>
        <UnderLineTitle title="亮点四：安全管控标准化" />
        <div className="lines">
          <p className="line">老师的失误、工作的意外、不可预知的风险...</p>
          <p className="line">时刻威胁着幼儿的安全</p>
        </div>
        <div className="lines">
          <p className="line bold">守住办园底线，保障孩子安全</p>
          <p className="line">借助互联网轻松实现</p>
        </div>
        <div className="btmImg">
          <img src={BtmImg} alt="开幕配图" />
        </div>
      </Content>
    );
  }
}

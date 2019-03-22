import React, { Component } from "react";
import styled from "styled-components";

import ani from "animejs";
import Floating from "../component/Floating";
import UnderLineTitle from "../component/UnderLineTitle";
import UnderLine from "../component/UnderLine";

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
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
          <UnderLine content={"老师的失误、工作的意外、不可预知的风险..."} />
          <UnderLine content={"时刻威胁着幼儿的安全"} />
        </div>
        <div className="lines">
          <UnderLine bold={true} content={"守住办园底线，保障孩子安全"} />
          <UnderLine content={"借助互联网轻松实现"} />
        </div>
        <div className="btmImg">
          <img src={BtmImg} alt="开幕配图" />
        </div>
      </Content>
    );
  }
}

import React, { Component } from "react";
import styled from "styled-components";

import ani from "animejs";
import UnderLineTitle from "../component/UnderLineTitle";
import Floating from "../component/Floating";
import UnderLine from "../component/UnderLine";

import BtmImg from "../assets/img/point.two.png";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fff;
  padding: 4rem 1.8rem;
  padding-bottom: 0;
  height: 100vh;

  .lines {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .btmImg {
    z-index: 1;
    img {
      width: 80%;
      animation: 4s ${Floating} ease-in-out infinite;
    }
  }
`;
export default class PointTwo extends Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <Content ref={this.wrapper}>
        <UnderLineTitle title="亮点二：家长满意度飙升" />
        <div className="lines">
          <UnderLine content={"家园之间不理解、缺信任、无协同！"} />
          <UnderLine content={"家长满意度低，家园关系一碰就碎！?"} />
        </div>
        <div className="lines">
          <UnderLine bold={true} content={"将“家园共育”锻造成幼儿园的名片"} />
          <UnderLine content={"借助互联网轻松实现"} />
        </div>
        <div className="btmImg">
          <img src={BtmImg} alt="开幕配图" />
        </div>
      </Content>
    );
  }
}

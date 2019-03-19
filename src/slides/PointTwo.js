import React, { PureComponent } from "react";
import styled from "styled-components";

import ani from "animejs";
import UnderLineTitle from "../component/UnderLineTitle";
import Floating from "../component/Floating";

import BtmImg from "../assets/img/point.two.png";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fff;
  padding: 4rem 2rem;
  padding-bottom: 0;
  height: 100vh;

  .lines {
    color: #666;
    font-size: 0.8rem;
    margin-bottom: 2rem;
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
      width: 80%;
      animation: 4s ${Floating} ease-in-out infinite;
    }
  }
`;
export default class PointTwo extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <Content ref={this.wrapper}>
        <UnderLineTitle title="亮点二：家长满意度飙升" />
        <div className="lines">
          <p className="line">家园之间不理解、缺信任、无协同！</p>
          <p className="line">家长满意度低，家园关系一碰就碎！?</p>
        </div>
        <div className="lines">
          <p className="line bold">将“家园共育”锻造成幼儿园的名片</p>
          <p className="line">借助互联网轻松实现</p>
        </div>
        <div className="btmImg">
          <img src={BtmImg} alt="开幕配图" />
        </div>
      </Content>
    );
  }
}

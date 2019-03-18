import React, { PureComponent } from "react";
import styled from "styled-components";

import ani from "animejs";
import BtmImg from "../assets/img/point.two.png";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  padding: 1.4rem 2rem;
  height: 100vh;
  .title {
    color: #ff6a1c;
    font-size: 1.2rem;
    font-weight: 800;
    box-shadow: inset 0 -0.4em #ccc;
    margin-bottom: 2rem;
  }
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
        <p className="title">亮点二：家长满意度飙升</p>
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

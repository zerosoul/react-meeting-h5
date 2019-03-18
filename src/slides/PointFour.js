import React, { PureComponent } from "react";
import styled from "styled-components";

import ani from "animejs";
import BtmImg from "../assets/img/point.four.png";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  padding: 1rem 2rem;
  height: 100vh;
  .title {
    color: #ff6a1c;
    font-size: 1rem;
    font-weight: 800;
    box-shadow: inset 0 -0.4em #ccc;
    margin-bottom: 2rem;
  }
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
    }
  }
`;
export default class PointFour extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <Content ref={this.wrapper}>
        <p className="title">亮点四：安全管控标准化</p>
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

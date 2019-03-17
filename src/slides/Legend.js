import React, { PureComponent } from "react";
import styled from "styled-components";

import ani from "animejs";
import Demo1Img from "../assets/img/mobile.demo.1.png";
import Demo2Img from "../assets/img/mobile.demo.2.png";
import DotLine from "../component/DotLine";
import { r } from "../util";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 8rem 2rem;
  height: 100vh;

  > .title {
    color: #ff6a1c;
    font-size: ${r(56)};
    font-weight: 800;
    box-shadow: inset 0 -0.4em #ccc;
    margin-bottom: 4rem;
  }
  .subTitle {
    color: #666;
    text-align: center;
    line-height: 1.5;
    font-weight: bold;
    margin-bottom: 1rem;
    .line {
      margin-top: 0.8rem;
    }
  }
  .num {
    font-size: ${r(184)};
    margin-bottom: ${r(134)};
  }
  .pics {
    width: ${r(900)};
  }
`;
export default class Legend extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <Content ref={this.wrapper}>
        <h1 className="title">壹点壹滴正在创造幼教界传奇</h1>

        <div className="subTitle">
          <p>短短八个月时间 </p>
          <p>全国已有15000+幼儿园选择加入壹点壹滴!</p>
          <DotLine width={"100%"} background="#fdb749" className="line" />
        </div>
        <p className="num">15000+</p>
        <div className="pics">
          <img src={Demo1Img} alt="pic1" className="pic" />
          {/* <img src={Demo2Img} alt="demo2" className="demo" /> */}
        </div>
      </Content>
    );
  }
}

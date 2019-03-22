import React, { Component } from "react";
import styled from "styled-components";
import ani from "animejs";
// 组件
import Floating from "../component/Floating";

import DotLine from "../component/DotLine";
import HowImg from "../assets/img/how.png";
import Icon1 from "../assets/img/how.icon.1.png";
import Icon2 from "../assets/img/how.icon.2.png";
import Icon3 from "../assets/img/how.icon.3.png";
import Icon4 from "../assets/img/how.icon.4.png";
import UnderLine from "../component/UnderLineTitle";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #5b5b5b;
  padding-left: 2rem;
  padding-right: 4rem;
  padding-top: 4rem;
  .top {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    position: relative;
    .lines {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .line {
        font-size: 0.8rem;
        line-height: 1.4;
        border-bottom: 1px solid #ff6a1c;
        margin-bottom: 0.2rem;
        &.how {
          font-size: 1.8rem;
          font-weight: 800;
        }
      }
    }
    .pic {
      position: absolute;
      width: 11rem;
      height: 11rem;
      right: -12rem;
      top: -2rem;
      animation: 4s ${Floating} ease-in-out infinite;
    }
  }

  .tips {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 0.8rem;
    overflow: hidden;
    width: 11rem;
    z-index: 1;
    transform: translate3d(0, 0, 0);

    .tip {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 5rem;
      border-radius: 0.8rem;
      padding: 0.3rem;
      color: #fff;
      margin-bottom: 10px;
      z-index: 1;
      &.yellow {
        background: #ffa71f;
      }
      &.orange {
        background: #ff6a1c;
      }
      &.btm {
        box-shadow: 0px 2px 3px #666;
      }
      img {
        width: 1.4rem;
        margin-top: 0.8rem;
        margin-bottom: 1rem;
      }
      .txt {
        margin-bottom: 0.6rem;
      }
      .line {
      }
    }
  }
`;
export default class Intro extends Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    const wrapper = this.wrapper.current;
    wrapper.querySelectorAll(".lines .line").forEach(node => {
      console.log("node", node);

      let arr = node.innerText;
      let newArr = arr.split("").map(t => `<span class='letter'>${t}</span>`);
      node.innerHTML = newArr.join("");
    });
    const cards = wrapper.querySelectorAll(".tips .tip");
    const lines = wrapper.querySelectorAll(".lines .line");
    const tl = ani.timeline({ loop: false });
    tl.add({
      targets: lines,
      translateY: [60, 0],
      opacity: [0, 1],
      delay: (ele, i) => {
        return i * 120;
      }
    }).add({
      targets: cards,
      opacity: [0, 1],
      rotateY: [-90, 0],
      duration: 2000,
      delay: (ele, i) => i * 400
    });
  }
  render() {
    return (
      <Content ref={this.wrapper}>
        <div className="top">
          <div className="lines">
            <p className="line">老套路，效果差!</p>
            <p className="line">高科技，玩不转!</p>
            <p className="line">打广告，浪费钱!</p>
            <p className="line how">怎么办?</p>
          </div>
          <img src={HowImg} className="pic" alt="怎么办配图" />
        </div>
        <UnderLine title="借助互联网轻松实现" />
        <div className="tips">
          <p className="tip orange">
            <img src={Icon1} alt="图标" />
            <span className="txt">快速招生</span>
            <DotLine width="3.4rem" />
          </p>
          <p className="tip yellow">
            <img src={Icon2} alt="图标" />
            <span className="txt">家长满意</span>
            <DotLine width="3.4rem" dotBackground="#ff6a1c" />
          </p>
          <p className="tip yellow btm">
            <img src={Icon3} alt="图标" />
            <span className="txt">教师成长</span>
            <DotLine width="3.4rem" dotBackground="#ff6a1c" />
          </p>
          <p className="tip orange btm">
            <img src={Icon4} alt="图标" />
            <span className="txt">安全管控</span>
            <DotLine width="3.4rem" />
          </p>
        </div>
      </Content>
    );
  }
}

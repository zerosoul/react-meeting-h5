import React, { Component } from "react";
import styled from "styled-components";

import ani from "animejs";
import UnderLineTitle from "../component/UnderLineTitle";

import Floating from "../component/Floating";
import GiftImg from "../assets/img/gift.png";
import PromiseImg from "../assets/img/promise.png";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 5rem 2rem;
  padding-bottom: 0;
  height: 100vh;

  .promises {
    position: relative;
    text-align: center;
    color: #666;
    margin-bottom: 1rem;
    .promise {
      font-size: 0.8rem;
      border-bottom: 1px solid #fda264;
      line-height: 1.8;
      &.title {
        font-weight: 800;
        font-size: 1rem;
      }
      .bold {
        font-weight: 800;
        padding-left: 0.5rem;
      }
    }
    .slogan {
      position: absolute;
      width: 4rem;
      right: -3.6rem;
      bottom: -0.2rem;
    }
  }
  .gift {
    z-index: 1;
    width: 12rem;
    margin-bottom: 2rem;
    animation: 4s ${Floating} ease-in-out infinite;
  }
  .tips {
    z-index: 1;
    position: absolute;
    bottom: 2rem;
    line-height: 1.8;
    font-weight: 800;
    font-size: 0.8rem;
    .tip {
      text-align: center;
    }
  }
`;
export default class Promises extends Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    const wrapper = this.wrapper.current;
    const tips = wrapper.querySelectorAll(".tips .tip");
    const slogan = wrapper.querySelector(".slogan");
    const tl = ani.timeline();
    tl.add({
      targets: slogan,
      scale: [8, 1],
      opacity: [0, 1],
      easing: "easeInOutBack"
    }).add({
      targets: tips,
      opacity: [0, 1],
      translateX: [-400, 0]
    });
  }

  render() {
    const { gift } = this.props;
    return (
      <Content ref={this.wrapper}>
        <UnderLineTitle title="未来十年生死存亡，本场会议决定!" />

        <div className="promises">
          <p className="promise title">我们承诺!</p>
          <p className="promise">
            没干货<span className="bold">随时离场</span>
          </p>
          <p className="promise">
            不认同<span className="bold">随时离场</span>
          </p>
          <p className="promise">
            没收获<span className="bold">随时退费</span>
          </p>
          <p className="promise">
            不落地<span className="bold">随时退费</span>
          </p>
          <img className="slogan" src={PromiseImg} alt="我们承诺" />
        </div>
        <img className="gift" src={GiftImg} alt="礼物图片" />
        {gift && (
          <div className="tips">
            <p className="tip">《{gift}》</p>
            <p className="tip">人手一份，到场即送！</p>
          </div>
        )}
      </Content>
    );
  }
}

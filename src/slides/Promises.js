import React, { PureComponent } from "react";
import styled from "styled-components";

import ani from "animejs";
import GiftImg from "../assets/img/gift.png";
import PromiseImg from "../assets/img/promise.png";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 5rem 2rem;
  height: 100vh;
  > .title {
    color: #ff6a1c;
    font-size: 1.2rem;
    font-weight: 800;
    box-shadow: inset 0 -0.4em #ccc;
    margin-bottom: 2rem;
  }
  .promises {
    position: relative;
    text-align: center;
    color: #666;
    margin-bottom: 2rem;
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
    width: 15rem;
    margin-bottom: 2rem;
  }
  .tips {
    z-index: 1;
    position: absolute;
    bottom: 2rem;
    line-height: 1.8;
    font-weight: 800;
    font-size: 1rem;
  }
`;
export default class Promises extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <Content ref={this.wrapper}>
        <h1 className="title">未来十年生死存亡，本场会议决定!</h1>
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
        <div className="tips">
          <p className="tip">《我是怎的多多多多》</p>
          <p className="tip">人手一份，到场即送！</p>
        </div>
      </Content>
    );
  }
}

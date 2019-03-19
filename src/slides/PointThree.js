import React, { PureComponent } from "react";
import styled from "styled-components";

import ani from "animejs";
import BtmImg from "../assets/img/point.three.png";
import UnderLineTitle from "../component/UnderLineTitle";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  height: 100vh;
  padding: 3rem 2rem;
  background: url(${BtmImg});
  background-size: 100%;
  background-position: 0 100%;
  background-repeat: no-repeat;

  .circles {
    display: flex;
    margin-bottom: 2rem;

    .circle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      box-sizing: border-box;
      background: #ff6a1c;
      margin-right: 0.28rem;
      font-size: 0.9rem;
      &.yellow {
        background: #ffa71f;
      }
      span {
        color: #fff;
        font-weight: 600;
        line-height: 1.2;
      }
    }
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
    width: 100%;
    align-self: center;
  }
`;
export default class PointThree extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <Content ref={this.wrapper}>
        <UnderLineTitle title="亮点三：教师专业化成长" />
        <div className="circles">
          <p className="circle">
            <span>教师</span>
            <span>招不来</span>
          </p>
          <p className="circle yellow">
            <span>人才</span>
            <span>难培养</span>
          </p>
          <p className="circle">
            <span>骨干</span>
            <span>留不住</span>
          </p>
        </div>
        <div className="lines">
          <p className="line">团队水平参差不齐，怎么办？</p>
        </div>
        <div className="lines">
          <p className="line bold">教师专业成长，团队快速提升</p>
          <p className="line">借助互联网轻松实现</p>
        </div>
        {/* <img className="btmImg" src={BtmImg} alt="开幕配图" /> */}
      </Content>
    );
  }
}

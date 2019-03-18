import React, { PureComponent } from "react";
import styled from "styled-components";
import Swiper from "swiper";
// components
import ani from "animejs";
import DotLine from "../component/DotLine";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 6rem 3rem;
  height: 100vh;

  > .title {
    color: #ff6a1c;
    font-size: 1rem;
    font-weight: 800;
    box-shadow: inset 0 -0.4em #ccc;
    margin-bottom: 3rem;
  }
  .subTitle {
    color: #666;
    text-align: center;
    line-height: 1.5;
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    .line {
      margin-top: 0.8rem;
    }
  }
  .submited {
    color: #ffb121;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    align-self: flex-start;
  }
  .gardens {
    z-index: 1;
    font-size: 0.8rem;
    width: 16rem;
    border: 0.2rem solid #fdb037;
    border-radius: 0.8rem;
    padding: 1.6rem 1rem;
    background: #fff;
    ul {
      color: #666;
      li {
        line-height: 2;
      }
    }
  }
`;
export default class Waiting extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    // var swiper = new Swiper(".pics.swiper-container", {
    //   effect: "flip",
    //   grabCursor: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false
    //   }
    // });
  }
  render() {
    return (
      <Content ref={this.wrapper}>
        <h1 className="title">您还在等什么?</h1>

        <div className="subTitle">
          <p>互联网智慧幼儿园让您省心省事又省钱!</p>
          <DotLine width={"100%"} background="#fdb749" className="line" />
        </div>
        <p className="submited">本次会议已报名园所</p>
        <div className="gardens">
          <ul>
            <li>所属区域：廊坊</li>
            <li>园所名称：小太阳幼儿园</li>
            <li>园长姓名：张**</li>
            <li>参会人数：2人</li>
          </ul>
        </div>
      </Content>
    );
  }
}

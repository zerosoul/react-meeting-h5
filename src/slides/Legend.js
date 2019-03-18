import React, { PureComponent } from "react";
import styled from "styled-components";
import Swiper from "swiper";
// components
import ani from "animejs";
import Demo1Img from "../assets/img/demo.1.png";
import Demo2Img from "../assets/img/mobile.demo.2.png";
import DotLine from "../component/DotLine";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 6.4rem 2rem;
  height: 100vh;

  > .title {
    color: #ff6a1c;
    font-size: 1.2rem;
    font-weight: 800;
    box-shadow: inset 0 -0.4em #ccc;
    margin-bottom: 2.4rem;
  }
  .subTitle {
    color: #666;
    text-align: center;
    line-height: 1.5;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 1rem;
    .line {
      margin-top: 0.8rem;
    }
  }
  .num {
    color: #fd7f27;
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 2rem;
    background-image: linear-gradient(to top, #fd7e27, #fd9730);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  .pics {
    z-index: 1;
    width: 18rem;
    border: 0.4rem solid #fdb037;
    border-radius: 0.8rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export default class Legend extends PureComponent {
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
        <h1 className="title">壹点壹滴正在创造幼教界传奇</h1>

        <div className="subTitle">
          <p>短短八个月时间 </p>
          <p>全国已有15000+幼儿园选择加入壹点壹滴!</p>
          <DotLine width={"100%"} background="#fdb749" className="line" />
        </div>
        <p className="num">15000+</p>
        <div className="pics">
          <img src={Demo1Img} alt="demo2" className="demo" />
        </div>
      </Content>
    );
  }
}

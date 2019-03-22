import React, { Component } from "react";
import styled from "styled-components";
import Swiper from "swiper";
// components
import ani from "animejs";
import UnderLineTitle from "../component/UnderLineTitle";

import Scene1Img from "../assets/img/scene.1.jpg";
import Scene2Img from "../assets/img/scene.2.jpg";
import Scene3Img from "../assets/img/scene.3.jpg";
import Scene4Img from "../assets/img/scene.4.jpg";
import Scene5Img from "../assets/img/scene.5.jpg";
import Scene6Img from "../assets/img/scene.6.jpg";
import NumImg from "../assets/img/15000.png";
import DotLine from "../component/DotLine";

const Imgs = [Scene1Img, Scene2Img, Scene3Img, Scene4Img, Scene5Img, Scene6Img];

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 6.4rem 2rem;
  padding-bottom: 0;
  height: 100vh;

  .subTitle {
    color: #666;
    text-align: center;
    line-height: 1.5;
    font-weight: bold;
    font-size: 0.8rem;
    .line {
      margin-top: 0.8rem;
    }
  }
  .num {
    width: 100%;
    margin-bottom: 1rem;
  }
  .pics {
    z-index: 1;
    width: 15rem;
    height: 10rem;
    overflow: hidden;
    border: 0.4rem solid #fdb037;
    border-radius: 0.8rem;
    transform: translate3d(0, 0, 0);
    img {
      width: 100%;
    }
  }
`;
export default class Legend extends Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    new Swiper(".pics .swiper-container", {
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      // grabCursor: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      }
    });
    const wrapper = this.wrapper.current;
    const numEle = wrapper.querySelector(".num");
    ani({
      targets: numEle,
      opacity: [0, 1],
      translateY: [400, 0]
    });
  }
  render() {
    return (
      <Content ref={this.wrapper}>
        <UnderLineTitle title="壹点壹滴正在创造幼教界传奇" fs="1.1rem" />

        <div className="subTitle">
          <p>短短八个月时间 </p>
          <p>全国已有15000+幼儿园选择加入壹点壹滴!</p>
          <DotLine width={"100%"} background="#fdb749" className="line" />
        </div>
        <img src={NumImg} alt="成交数配图" className="num" />
        <div className="pics">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {Imgs.map((img, i) => {
                return (
                  <div className="swiper-slide" key={i}>
                    <img src={img} alt={`demo1${i}`} className="demo" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Content>
    );
  }
}

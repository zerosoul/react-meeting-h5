import React, { Component } from "react";
import styled from "styled-components";
import Swiper from "swiper";
// components
import ani from "animejs";
import UnderLineTitle from "../component/UnderLineTitle";
import DotLine from "../component/DotLine";
import SignImg from "../assets/img/sign.png";
import Floating from "../component/Floating";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 4rem 3rem;
  height: 100vh;

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
  .gardens {
    z-index: 1;
    transform: translate3d(0, 0, 0);
    .title {
      color: #ffb121;
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }
    .listWrapper {
      font-size: 0.8rem;
      width: 16rem;
      height: 10rem;
      overflow: hidden;
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
  }
  .signNow {
    z-index: 1;
    transform: translate3d(0, 0, 0);
    text-align: center;
    .signBtn {
      color: rgba(255, 249, 219, 1);
      border: none;
      padding: 0.2rem 0.8rem;
      margin-bottom: 2rem;
      font-size: 1rem;
      background: linear-gradient(
        0deg,
        rgba(248, 149, 5, 1),
        rgba(253, 195, 79, 1)
      );
      box-shadow: 0px 2px 3px 0px rgba(131, 131, 131, 0.75);
      border-radius: 0.4rem;
    }
    .btmImg {
      z-index: 1;
      width: 14rem;
      animation: 4s ${Floating} ease-in-out infinite;
    }
  }
`;
export default class Waiting extends Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    const wrapper = this.wrapper.current;
    const swiper = new Swiper(".gardens .swiper-container", {
      // effect: "flip",
      // grabCursor: true,
      loop: true,
      nested: true,
      direction: "vertical",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
    ani({
      targets: wrapper.querySelector(".signBtn"),
      opacity: [0, 1],
      rotateX: [-90, 0],
      scaleX: [4, 1],
      delay: 1000
    });
  }
  onSignNow = () => {
    const { currSwiper } = this.props;
    currSwiper.slideTo(currSwiper.slides.length);
  };
  render() {
    const { submitList = [] } = this.props;
    return (
      <Content ref={this.wrapper}>
        <UnderLineTitle title="您还在等什么?" />

        <div className="subTitle">
          <p>互联网智慧幼儿园让您省心省事又省钱!</p>
          <DotLine width={"100%"} background="#fdb749" className="line" />
        </div>
        {submitList.length ? (
          <div className="gardens">
            <h2 className="title">已报名园所</h2>
            <div className="listWrapper">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  {submitList.map(item => {
                    const maskName =
                      item.name[0] +
                      new Array(item.name.length - 1).fill("*").join("");
                    return (
                      <div class="swiper-slide">
                        <ul key={item.id}>
                          <li>报名时间：{item.enroll_time}</li>
                          <li>园所名称：{item.school_name}</li>
                          <li>园长姓名：{maskName}</li>
                          <li>参会人数：{item.person_num}人</li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="signNow">
            <button onClick={this.onSignNow} className="signBtn">
              立即报名
            </button>
            <img src={SignImg} alt="立即报名配图" className="btmImg" />
          </div>
        )}
      </Content>
    );
  }
}

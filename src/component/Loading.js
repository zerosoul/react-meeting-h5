import React, { PureComponent } from "react";
import styled from "styled-components";
import SlideWrapper from "./SliderWrapper";
import LogoImg from "../assets/img/logo.png";
import anime from "animejs";

const Content = styled.div`
  .uil-ripple {
    position: absolute;
    left: calc(50% - 90px);
    top: calc(50% - 170px);
    opacity: 0.5;
    z-index: 999;
  }
  .progress {
    position: absolute;
    font-size: 15px;
    color: rgba(255, 220, 219, 1);
    top: 250px;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 30px;
  }
  .logo {
    position: absolute;
    bottom: 65px;
    left: 0;
    right: 0;
    margin: auto;
    width: 117px;
  }
`;
export default class Loading extends PureComponent {
  constructor() {
    super();
    this.progress = {
      percent: "5%"
    };
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    // 苹果隐藏工具栏
    /mobile/i.test(navigator.userAgent) &&
      setTimeout(function() {
        window.scrollTo(0, 1);
      }, 1000);
    const { onInitOver = () => {} } = this.props;
    const wrapper = this.wrapper.current;
    const ripple = wrapper.querySelector(".uil-ripple");
    const tl = anime.timeline();
    tl.add({
      targets: this.progress,
      percent: "100%",
      round: 1,
      duration: 300,
      update: () => {
        const { percent } = this.progress;
        wrapper.querySelector(".progress").innerHTML = percent;
      },
      easing: "easeInOutQuad"
    })
      .add(
        {
          targets: ripple,
          scale: 5,
          duration: 4000
        },
        "-=1000"
      )
      .add(
        {
          targets: wrapper,
          opacity: [1, 0],
          duration: 600,
          complete: anim => {
            console.log("loading over");

            onInitOver();
          },
          easing: "linear"
        },
        "-=1500"
      );
  }
  render() {
    return (
      <SlideWrapper type="orange">
        <Content ref={this.wrapper}>
          <svg
            width="182px"
            height="182px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            className="uil-ripple"
          >
            <rect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="none"
              className="bk"
            />
            <g>
              <animate
                attributeName="opacity"
                dur="4s"
                repeatCount="indefinite"
                begin="0s"
                keyTimes="0;0.33;1"
                values="1;1;0"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#eeeeee"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <animate
                  attributeName="r"
                  dur="4s"
                  repeatCount="indefinite"
                  begin="0s"
                  keyTimes="0;0.33;1"
                  values="0;22;44"
                />
              </circle>
            </g>
            <g>
              <animate
                attributeName="opacity"
                dur="4s"
                repeatCount="indefinite"
                begin="2s"
                keyTimes="0;0.33;1"
                values="1;1;0"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#eeeeee"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <animate
                  attributeName="r"
                  dur="4s"
                  repeatCount="indefinite"
                  begin="2s"
                  keyTimes="0;0.33;1"
                  values="0;22;44"
                />
              </circle>
            </g>
          </svg>
          <p className="progress">0%</p>
          <img className="logo" src={LogoImg} alt="公司图标" />
        </Content>
      </SlideWrapper>
    );
  }
}

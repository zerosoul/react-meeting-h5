import React, { Component } from "react";
import DotLine from "../component/DotLine";
import styled from "styled-components";
import LogoImg from "../assets/img/logo.png";
import WxImg from "../assets/img/wx.avatar.png";
import CloudImg from "../assets/img/cloud.png";
import TitleImg from "../assets/img/topic.title.png";
import SubTitleImg from "../assets/img/topic.sub.title.png";

import InviteImg from "../assets/img/topic.invite.png";
import NewWayImg from "../assets/img/topic.new.way.png";

import ani from "animejs";
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  padding: 0 2rem;
  padding-top: 2.4rem;
  box-sizing: border-box;
  .head {
    position: relative;
    margin-bottom: 1.4rem;
    text-align: center;

    .preTitle {
      z-index: 2;
      margin-bottom: 0.4rem;
      width: 84%;
    }
    .topicTitle {
      width: 84%;
    }
    .bubble {
      position: absolute;
      box-sizing: border-box;
      border-radius: 50%;
      background: #ddd;
      z-index: -1;
      &.topLeft {
        width: 0.6rem;
        height: 0.6rem;
        left: 0;
        top: 0;
        background-image: linear-gradient(-90deg, #fc5531, #fd7e30);
      }
      &.topRight {
        width: 4rem;
        height: 4rem;
        right: -1rem;
        top: -2rem;
        background-image: linear-gradient(-90deg, #fc5531, #fd7e30);
      }
      &.btmLeft {
        width: 2rem;
        height: 2rem;
        left: 0.5rem;
        bottom: -0.5rem;
        background-image: linear-gradient(45deg, #fc5531, #fd7e30);
        z-index: 1;
      }
      &.btmRight {
        width: 1.6rem;
        height: 1.6rem;
        right: 0.9rem;
        bottom: 0.6rem;
        background-image: linear-gradient(-90deg, #fc5531, #fd7e30);
      }
    }
  }
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.4rem;
    .invite {
      width: 7rem;
    }
    .wx {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 0.8rem;
      .avatar {
        border: 0.4rem solid #fecda5;
        box-sizing: border-box;
        border-radius: 50%;
        width: 5rem;
        height: 5rem;
        margin-bottom: 0.4rem;
      }
      .nickname {
        font-size: 0.8rem;
        margin-bottom: 0.8rem;
      }
    }
    .newWay {
      width: 10rem;
    }
  }
  .btm {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${CloudImg});
    background-size: 100% 100%;
    background-position-y: bottom;
    background-repeat: no-repeat;
    width: 100%;
    height: 6rem;
    .logo {
      width: 3.4rem;
      margin-left: 2rem;
      margin-top: 2.6rem;
    }
    .info {
      margin-top: 2.6rem;
      color: #ff741c;
      border-left: 0.3rem solid #ff741c;
      padding-left: 0.3rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-right: 2rem;
      font-size: 0.6rem;
      time {
        font-weight: 800;
      }
      .line {
        height: 1px;
        background: #ff741c;
        margin: 0.1rem 0;
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

    const titles = wrapper.querySelectorAll(".head>img");
    const dots = wrapper.querySelectorAll(".bubble");
    const btm = wrapper.querySelectorAll(".btm");
    const wx = wrapper.querySelectorAll(".profile .wx");
    const lines = wrapper.querySelectorAll(".profile .line");
    const letters = wrapper.querySelectorAll(".letters");
    // const dots = wrapper.querySelectorAll(".btm ");
    const tl = ani.timeline({ loop: false });
    tl.add({
      targets: titles,
      translateX: [-300, 0],
      delay: (ele, i) => i * 150
    })
      .add({
        targets: dots,
        opacity: [0, 1],
        scale: [0, 1],
        delay: (ele, i) => i * 300
      })
      .add(
        {
          targets: btm,
          translateY: [200, 0],
          opacity: [0, 1],
          easing: "linear"
        },
        "-=1500"
      )
      .add({
        targets: lines[0],
        translateY: [-200, 0],
        opacity: [0, 1],
        duration: 400
      })
      .add(
        {
          targets: lines[1],
          translateY: [200, 0],
          opacity: [0, 1]
        },
        "-=400"
      )
      .add(
        {
          targets: wx,
          scale: [0, 1],
          opacity: [0, 1]
        },
        "-=1000"
      )
      .add({
        targets: letters,
        translateY: [-40, 0],
        opacity: [0, 1],
        easing: "easeOutCirc",
        delay: (el, i) => {
          return 200 * i;
        }
      });
  }
  render() {
    const { time, addr = "北京", nickname, head } = this.props;
    return (
      <Content ref={this.wrapper}>
        <div className="head">
          <img src={TitleImg} className="preTitle" alt="标题" />
          <img src={SubTitleImg} className="topicTitle" alt="副标题" />

          <div className="bubble topLeft" />
          <div className="bubble topRight" />
          <div className="bubble btmLeft" />
          <div className="bubble btmRight" />
        </div>
        <div className="profile">
          <img src={InviteImg} alt="诚邀图片" className="invite letters" />
          <DotLine className="line" width="6.4rem" background="#fff" />
          <p className="wx">
            <img src={head ? head : WxImg} alt="微信头像" className="avatar" />
            <span className="nickname">{nickname}</span>
          </p>
          <DotLine className="line" width="6.4rem" background="#fff" />
          <img src={NewWayImg} alt="新出路图片" className="newWay letters" />
        </div>
        <div className="btm">
          <img src={LogoImg} alt="公司Logo" className="logo" />
          <div className="info">
            <time>{time}</time>
            <span className="line" />
            <p className="addr">{addr}</p>
          </div>
        </div>
      </Content>
    );
  }
}

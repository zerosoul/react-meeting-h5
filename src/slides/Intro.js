import React, { PureComponent } from "react";
import DotLine from "../component/DotLine";
import styled from "styled-components";
import LogoImg from "../assets/img/logo.png";
import WxImg from "../assets/img/wx.avatar.png";
import CloudImg from "../assets/img/cloud.png";

import { r } from "../util";
import ani from "animejs";
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  padding: 0 2rem;
  padding-top: 6rem;
  box-sizing: border-box;
  .head {
    position: relative;
    margin-bottom: 2rem;
    /* transform: rotate(-4deg); */
    .preTitle {
      font-size: 1.8rem;
      margin-bottom: 0.4rem;
      text-shadow: 2px 2px 0px #ffa71f;
    }
    .title {
      font-size: 2.2rem;
      margin-bottom: 0.4rem;
      text-shadow: 2px 2px 0px #ffa71f;
    }
    .topicTitle {
      display: flex;
      align-items: center;
      .topic {
        font-size: ${r(70)};
        background: #ffa71f;
        border-radius: 0.8rem;
        padding: 0.6rem 1.2rem;
        margin-right: 0.4rem;
      }
      .enTitle {
        font-size: 0.8rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .word {
          color: #fab236;
        }
      }
    }
    .bubble {
      position: absolute;
      box-sizing: border-box;
      border-radius: 50%;
      background: #ddd;
      z-index: -1;
      &.topLeft {
        width: 1rem;
        height: 1rem;
        left: -1.2rem;
        top: -1.6rem;
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
        left: -1rem;
        bottom: -1rem;
        background-image: linear-gradient(45deg, #fc5531, #fd7e30);
        z-index: 1;
      }
      &.btmRight {
        width: 1.6rem;
        height: 1.6rem;
        right: -1rem;
        bottom: 0;
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
      font-size: 1.4rem;
      margin-bottom: 0.3rem;
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
        width: ${r(250)};
        height: ${r(250)};
        margin-bottom: 0.4rem;
      }
      .nickname {
        font-size: ${r(30)};
        margin-bottom: 10px;
      }
    }
    .newWay {
      font-size: ${r(36)};
    }
  }
  .btm {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${CloudImg});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 8rem;
    .logo {
      width: 4rem;
      /* height: 100%; */
      margin-left: 2rem;
      margin-top: 2rem;
    }
    .info {
      margin-top: 2rem;
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
export default class Intro extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    const wrapper = this.wrapper.current;
    wrapper.querySelectorAll(".letters").forEach(node => {
      console.log("node", node);

      let arr = node.innerText;
      let newArr = arr.split("").map(t => `<span class='letter'>${t}</span>`);
      node.innerHTML = newArr.join("");
    });
    const head = wrapper.querySelectorAll(".head");
    const titles = wrapper.querySelectorAll(".head>p");
    const dots = wrapper.querySelectorAll(".bubble");
    const btm = wrapper.querySelectorAll(".btm");
    const wx = wrapper.querySelectorAll(".profile .wx");
    const lines = wrapper.querySelectorAll(".profile .line");
    const letters = wrapper.querySelectorAll(".letters .letter");
    // const dots = wrapper.querySelectorAll(".btm ");
    const tl = ani.timeline({ loop: false });
    tl.add({
      targets: titles,
      translateX: [-300, 0],
      delay: (ele, i) => i * 150
    })
      .add({
        targets: head,
        rotate: [0, -4]
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
        "-=800"
      )
      .add({
        targets: dots,
        opacity: [0, 1],
        scale: [0, 1],
        delay: (ele, i) => i * 300
      })
      .add({
        targets: letters,
        scale: [2, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        // duration: 800,
        delay: function(el, i) {
          return 100 * i;
        }
      });
  }
  render() {
    return (
      <Content ref={this.wrapper}>
        <div className="head">
          <p className="preTitle">用互联网助力幼儿园</p>
          <p className="title">运营管理升级</p>
          <p className="topicTitle">
            <span className="topic">主题论坛</span>
            <span className="enTitle">
              <i className="word">Operations</i>
              <i className="word">management</i>
              <i className="word">upgrade</i>
            </span>
          </p>
          <div className="bubble topLeft" />
          <div className="bubble topRight" />
          <div className="bubble btmLeft" />
          <div className="bubble btmRight" />
        </div>
        <div className="profile">
          <p className="invite letters">诚邀您参加</p>
          <DotLine className="line" width="6.4rem" background="#fff" />
          <p className="wx">
            <img src={WxImg} alt="微信头像" className="avatar" />
            <span className="nickname">羊二小</span>
          </p>
          <DotLine className="line" width="6.4rem" background="#fff" />
          <p className="newWay letters">幼教新十年,民办幼儿园的新出路</p>
        </div>
        <div className="btm">
          <img src={LogoImg} alt="公司Logo" className="logo" />
          <div className="info">
            <time>2019.3.18</time>
            <span className="line" />
            <p className="addr">河北·廊坊</p>
          </div>
        </div>
      </Content>
    );
  }
}

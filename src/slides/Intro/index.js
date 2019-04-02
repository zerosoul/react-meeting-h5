import React, { useRef, useState, useEffect } from "react";
import ani from "animejs";
// 组件
import Wrapper from "./styled.wrapper";
import DotLine from "../../component/DotLine";
// 静态资源
import LogoImg from "../../assets/img/logo.png";
import WxImg from "../../assets/img/wx.avatar.png";
import TitleImg from "../../assets/img/topic.title.png";
import SubTitleImg from "../../assets/img/topic.sub.title.png";

import InviteImg from "../../assets/img/topic.invite.png";
import NewWayImg from "../../assets/img/topic.new.way.png";
import useAnimate from "../../component/useAnimate";

const Intro = ({ time, addr = "北京", nickname, head }) => {
  const wrapperEle = useRef(null);
  const animate = () => {
    const wrapper = wrapperEle.current;
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
      opacity: [0, 1],
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
  };
  const [show] = useAnimate(animate);
  return (
    <Wrapper ref={wrapperEle} show={show}>
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
    </Wrapper>
  );
};
export default Intro;

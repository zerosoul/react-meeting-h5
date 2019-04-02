import React, { useRef, useEffect } from "react";

import ani from "animejs";
import UnderLineTitle from "../../component/UnderLineTitle";

import WangImg from "../../assets/img/bigman.wang.png";
import DengImg from "../../assets/img/bigman.deng.png";
import ZhangImg from "../../assets/img/bigman.zhang.png";
import Wrapper from "./styled.wrapper";
import useAnimate from "../../component/useAnimate";

const BigMan = () => {
  const wrapperEle = useRef(null);
  const animate = () => {
    const wrapper = wrapperEle.current;
    const blocks = wrapper.querySelectorAll(".block");
    const avatars = wrapper.querySelectorAll(".block .avatar");
    const intros = wrapper.querySelectorAll(".block .intro");

    const tl = ani.timeline();
    tl.add({
      targets: blocks,
      width: [0, "18rem"],
      delay: (ele, i) => i * 100
    })
      .add({
        targets: avatars,
        scale: [0, 1],
        delay: (ele, i) => i * 50
      })
      .add({
        targets: intros,
        scale: [0, 1],
        opacity: [0, 1],
        duration: 400,
        // easing: "linear",
        delay: (ele, i) => i * 50
      });
  };
  const [show] = useAnimate(animate);
  return (
    <Wrapper ref={wrapperEle} show={show}>
      <UnderLineTitle title="幼教大咖助力园长 赢在“新幼教”时代" mb="1rem" />

      <div className="blocks">
        <div className="block">
          <p className="intro">
            <span className="name">
              王红兵<i>_Wang Hongbing</i>
            </span>
            <span className="title">壹点壹滴创始人&CEO</span>
            <span>红缨教育创始人</span>
            <span>中国民办幼儿园卓越领军人物</span>
          </p>
          <img className="avatar" src={WangImg} alt="王总的照片" />
        </div>
        <div className="block reverse">
          <img className="avatar" src={ZhangImg} alt="张总的照片" />
          <p className="intro">
            <span className="name">
              张缪兴<i>_Zhang Miaoxing</i>
            </span>
            <span className="title">壹点壹滴联合创始人&总裁</span>
            <span>原伊顿连锁幼儿园信息化总监</span>
            <span>十多年国内顶尖幼儿园一线运营管理与信息化经验</span>
          </p>
        </div>
        <div className="block">
          <p className="intro">
            <span className="name">
              邓迎锋<i>_Deng Yingfeng</i>
            </span>
            <span className="title">壹点壹滴联合创始人&COO</span>
            <span>幼儿园市场营销实战第一人</span>
            <span>13年早教幼教创业/从业经验</span>
            <span>资深幼儿园管理经验</span>
          </p>
          <img className="avatar" src={DengImg} alt="邓总的照片" />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigMan;

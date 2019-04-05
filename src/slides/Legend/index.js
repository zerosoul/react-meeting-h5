import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
// components
import ani from "animejs";
import UnderLineTitle from "../../component/UnderLineTitle";

import Scene1Img from "../../assets/img/scene.1.jpg";
import Scene2Img from "../../assets/img/scene.2.jpg";
import Scene3Img from "../../assets/img/scene.3.jpg";
import Scene4Img from "../../assets/img/scene.4.jpg";
import Scene5Img from "../../assets/img/scene.5.jpg";
import Scene6Img from "../../assets/img/scene.6.jpg";
import NumImg from "../../assets/img/15000.png";
import DotLine from "../../component/DotLine";
import Wrapper from "./styled.wrapper";
import useAnimate from "../../component/useAnimate";

const Imgs = [Scene1Img, Scene2Img, Scene3Img, Scene4Img, Scene5Img, Scene6Img];

const Legend = () => {
  const wrapperEle = useRef(null);
  const animate = () => {
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
    const wrapper = wrapperEle.current;
    const numEle = wrapper.querySelector(".num");
    ani({
      targets: numEle,
      opacity: [0, 1],
      translateY: [400, 0],
      delay: 500
    });
  };
  const [show] = useAnimate(animate);

  return (
    <Wrapper ref={wrapperEle} show={show}>
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
    </Wrapper>
  );
};
export default Legend;

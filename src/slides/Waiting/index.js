import React, { useRef } from "react";
import Swiper from "swiper";
// components
import ani from "animejs";
import UnderLineTitle from "../../component/UnderLineTitle";
import DotLine from "../../component/DotLine";
import SignImg from "../../assets/img/sign.png";
import Wrapper from "./styled.wrapper";
import useAnimate from "../../component/useAnimate";
const Waiting = ({ submitList = [] }) => {
  const wrapperEle = useRef(null);
  const animate = () => {
    const wrapper = wrapperEle.current;
    new Swiper(".gardens .swiper-container", {
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
  };
  const onSignNow = () => {
    const { currSwiper } = this.props;
    currSwiper.slideTo(currSwiper.slides.length);
  };
  const [show] = useAnimate(animate);
  return (
    <Wrapper ref={wrapperEle} show={show}>
      <UnderLineTitle title="您还在等什么?" />

      <div className="subTitle">
        <p>互联网智慧幼儿园让您省心省事又省钱!</p>
        <DotLine width={"100%"} background="#fdb749" className="line" />
      </div>
      {submitList.length ? (
        <div className="gardens">
          <h2 className="title">已报名园所</h2>
          <div className="listWrapper">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {submitList.map(item => {
                  const maskName =
                    item.name[0] +
                    new Array(item.name.length - 1).fill("*").join("");
                  return (
                    <div key={item.id} className="swiper-slide">
                      <ul>
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
          <button onClick={onSignNow} className="signBtn">
            立即报名
          </button>
          <img src={SignImg} alt="立即报名配图" className="btmImg" />
        </div>
      )}
    </Wrapper>
  );
};
export default Waiting;

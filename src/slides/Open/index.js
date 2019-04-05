import React, { useRef, useEffect } from "react";

import ani from "animejs";
import UnderLineTitle from "../../component/UnderLineTitle";

import DotLine from "../../component/DotLine";
import OpenImg from "../../assets/img/open.png";
import Wrapper from "./styled.wrapper";
import useAnimate from "../../component/useAnimate";

const Open = () => {
  const wrapperEle = useRef(null);
  const animate = () => {
    const wrapper = wrapperEle.current;
    const words = wrapper.querySelectorAll(".word");
    ani({
      targets: words,
      scale: [14, 1],
      opacity: [0, 1],
      easing: "easeOutCirc",
      duration: 800,
      delay: function(el, i) {
        return 800 * i;
      }
    });
  };
  const [show] = useAnimate(animate);

  return (
    <Wrapper ref={wrapperEle} show={show}>
      <UnderLineTitle
        title="四大亮点，您不得不来!"
        fs="1.2rem"
        fc="#fff"
        bg="#ffa71f"
      />
      <div className="open">
        <h2 className="desc">一场改变幼教人命运的课程</h2>
        <h1>
          <span className="word">马上</span>
          <span className="word">开幕!</span>
        </h1>
        <DotLine width="100%" />
      </div>
      <div className="btmImg">
        <img src={OpenImg} alt="开幕配图" />
      </div>
    </Wrapper>
  );
};
export default Open;

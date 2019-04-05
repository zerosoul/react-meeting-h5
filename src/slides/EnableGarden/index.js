import React, { useRef, useEffect } from "react";

import ani from "animejs";
import UnderLineTitle from "../../component/UnderLineTitle";

import Demo1Img from "../../assets/img/mobile.demo.1.png";
import Demo2Img from "../../assets/img/mobile.demo.2.png";
import DotLine from "../../component/DotLine";
import Wrapper from "./styled.wrapper";
import useAnimate from "../../component/useAnimate";

const EnableGarden = () => {
  const wrapperEle = useRef(null);
  const animate = () => {
    const wrapper = wrapperEle.current;
    const brands = wrapper.querySelectorAll(".brands .brand");
    const demos = wrapper.querySelectorAll(".demos .demo");
    const tl = ani.timeline();
    tl.add({
      targets: brands,
      opacity: [0, 1],
      translateY: [-300, 0],
      delay: (ele, i) => i * 100
    }).add({
      targets: demos,
      opacity: [0, 1],
      translateY: [200, 0],
      delay: (ele, i) => i * 100
    });
  };
  const [show] = useAnimate(animate);
  return (
    <Wrapper ref={wrapperEle} show={show}>
      <UnderLineTitle title="互联网赋能幼儿园" />

      <div className="brands">
        <p className="brand">
          <span className="no">No.1</span>
          <span className="word">智能</span>
          <span className="word">招生</span>
        </p>
        <p className="brand">
          <span className="no">No.2</span>
          <span className="word">家园</span>
          <span className="word">共育</span>
        </p>
        <p className="brand">
          <span className="no">No.3</span>
          <span className="word">幼师</span>
          <span className="word">星球</span>
        </p>
        <p className="brand">
          <span className="no">No.4</span>
          <span className="word">安全</span>
          <span className="word">管控</span>
        </p>
      </div>
      <div className="middleTitle">
        <p>一键彻底解放园长</p>
        <p>让幼儿园插上移动互联的翅膀!</p>
        <DotLine width={"100%"} background="#fdb749" className="line" />
      </div>
      <div className="demos">
        <div>
          <img src={Demo1Img} alt="demo1" className="demo" />
        </div>
        <div>
          <img src={Demo2Img} alt="demo2" className="demo" />
        </div>
      </div>
    </Wrapper>
  );
};
export default EnableGarden;

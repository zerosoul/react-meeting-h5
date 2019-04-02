import React, { useRef } from "react";
import ani from "animejs";
// 组件
import DotLine from "../../component/DotLine";
import HowImg from "../../assets/img/how.png";
import Icon1 from "../../assets/img/how.icon.1.png";
import Icon2 from "../../assets/img/how.icon.2.png";
import Icon3 from "../../assets/img/how.icon.3.png";
import Icon4 from "../../assets/img/how.icon.4.png";
import UnderLine from "../../component/UnderLineTitle";
import Wrapper from "./styled.wrapper";
import useAnimate from "../../component/useAnimate";
const How = () => {
  const wrapperEle = useRef(null);
  const animate = () => {
    const wrapper = wrapperEle.current;
    wrapper.querySelectorAll(".lines .line").forEach(node => {
      console.log("node", node);

      let arr = node.innerText;
      let newArr = arr.split("").map(t => `<span class='letter'>${t}</span>`);
      node.innerHTML = newArr.join("");
    });
    const cards = wrapper.querySelectorAll(".tips .tip");
    const lines = wrapper.querySelectorAll(".lines .line");
    const tl = ani.timeline({ loop: false });
    tl.add({
      targets: lines,
      translateY: [60, 0],
      opacity: [0, 1],
      delay: (ele, i) => {
        return i * 120;
      }
    }).add({
      targets: cards,
      opacity: [0, 1],
      rotateY: [-90, 0],
      duration: 2000,
      delay: (ele, i) => i * 400
    });
  };
  const [show] = useAnimate(animate);

  return (
    <Wrapper ref={wrapperEle} show={show}>
      <div className="top">
        <div className="lines">
          <p className="line">老套路，效果差!</p>
          <p className="line">高科技，玩不转!</p>
          <p className="line">打广告，浪费钱!</p>
          <p className="line how">怎么办?</p>
        </div>
        <img src={HowImg} className="pic" alt="怎么办配图" />
      </div>
      <UnderLine title="借助互联网轻松实现" />
      <div className="tips">
        <p className="tip orange">
          <img src={Icon1} alt="图标" />
          <span className="txt">快速招生</span>
          <DotLine width="3.4rem" />
        </p>
        <p className="tip yellow">
          <img src={Icon2} alt="图标" />
          <span className="txt">家长满意</span>
          <DotLine width="3.4rem" dotBackground="#ff6a1c" />
        </p>
        <p className="tip yellow btm">
          <img src={Icon3} alt="图标" />
          <span className="txt">教师成长</span>
          <DotLine width="3.4rem" dotBackground="#ff6a1c" />
        </p>
        <p className="tip orange btm">
          <img src={Icon4} alt="图标" />
          <span className="txt">安全管控</span>
          <DotLine width="3.4rem" />
        </p>
      </div>
    </Wrapper>
  );
};
export default How;

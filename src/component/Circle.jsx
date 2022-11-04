import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

const Wrapper = styled.div`
  width: 22px;
  height: 17px;
  z-index: 9999;
`;
const Circle = () => {
  const circleEle = useRef(null);
  useEffect(() => {
    const circle = circleEle.current;
    anime({
      targets: circle,
      translateY: -10,
      duration: 1000,
      opacity: [0.4, 1],
      easing: "easeOutExpo",
      loop: true
    });
  });
  return <Wrapper ref={circleEle} />;
};
export default Circle;

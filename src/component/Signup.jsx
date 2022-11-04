import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

const Wrapper = styled.div`
  z-index: 98;
  position: absolute;
  top: 9.2rem;
  right: 0.1rem;
  box-sizing: border-box;
  font-size: 0.8rem;
  font-weight: 500;
  background: #ffa25d;
  border-radius: 0.2rem;
  color: #fff;
  padding: 0.4rem;
  writing-mode: vertical-lr;
  opacity: 0;
`;
const Signup = ({ currSwiper }) => {
  const signupEle = useRef(null);
  useEffect(() => {
    anime({
      targets: signupEle.current,
      right: [-30, 2],
      duration: 1500,
      opacity: [0, 1],
      delay: 1000
    });
  }, [currSwiper]);

  return (
    <Wrapper
      onClick={() => {
        currSwiper.slideTo(currSwiper.slides.length);
      }}
      ref={signupEle}
    >
      点击报名
    </Wrapper>
  );
};
export default Signup;

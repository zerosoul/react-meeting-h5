import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import anime from "animejs";

const Wrapper = styled.div`
  opacity: 0;
  z-index: 98;
  position: absolute;
  top: 14rem;
  right: 0.1rem;
  box-sizing: border-box;
  font-size: 0.8rem;
  font-weight: 500;
  background: #ffa25d;
  border-radius: 0.2rem;
  color: #fff;
  padding: 0.4rem;
  writing-mode: vertical-lr;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
const Tel = ({ mobile }) => {
  const tel = useRef(null);
  useEffect(() => {
    anime({
      targets: tel.current,
      right: [-30, 2],
      duration: 1500,
      opacity: [0, 1],
      delay: 1000
    });
  }, [mobile]);
  return (
    <Wrapper ref={tel}>
      <a href={`tel:${mobile}`}>电话咨询</a>
    </Wrapper>
  );
};
export default Tel;

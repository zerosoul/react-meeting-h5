import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ani from "animejs";

const Title = styled.h2`
  color: #fff;
  background: #ff6a14;
  border-radius: 0.4rem;
  font-weight: 800;
  font-size: 0.8rem;
  line-height: 1.4;
  padding: 0.3rem 0.6rem;
`;
const DepartmentTitle = ({ title }) => {
  const titleEle = useRef(null);

  useEffect(() => {
    const title = titleEle.current;
    ani({
      targets: title,
      translateY: [-200, 0],
      translateZ: 0,
      opacity: [0, 1]
    });
  });
  return <Title ref={titleEle}>{title}</Title>;
};
export default DepartmentTitle;

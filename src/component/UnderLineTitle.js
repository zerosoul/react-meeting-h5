import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ani from "animejs";

const Title = styled.h1`
  padding-top: 0.1rem;
  color: ${({ fc }) => fc};
  font-size: ${({ fs }) => fs};
  font-weight: 800;
  display: inline-block;
  /* padding-top: 0.2em; */
  box-shadow: inset 0 -0.4em ${({ bg }) => bg};
  margin-bottom: ${({ mb }) => mb};
  overflow: hidden;
  .letter {
    display: inline-block;
    line-height: 1em;
  }
`;
const UnderLineTitle = ({
  title,
  mb = "2rem",
  fs = "1rem",
  bg = "#ccc",
  fc = "#ff6a1c"
}) => {
  const titleEle = useRef(null);
  useEffect(() => {
    const title = titleEle.current;
    let newArr = title.innerText
      .split("")
      .map(t => `<span class='letter'>${t}</span>`);
    title.innerHTML = newArr.join("");
    const letters = title.querySelectorAll(".letter");
    ani({
      targets: letters,
      translateY: ["1.1em", 0],
      translateZ: 0,
      delay: (el, i) => {
        return 100 * i;
      }
    });
  }, [title]);
  return (
    <Title ref={titleEle} mb={mb} fs={fs} bg={bg} fc={fc}>
      {title}
    </Title>
  );
};
export default UnderLineTitle;

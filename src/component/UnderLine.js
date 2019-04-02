import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ani from "animejs";

const Line = styled.h3`
  color: #666;
  font-size: 0.8rem;
  line-height: 1.6;
  border-bottom: 1px solid #ffaf80;
  &.bold {
    font-size: 1rem;
    font-weight: 800;
  }
  .letter {
    line-height: 1em;
    transform-origin: 0 0;
  }
`;
const UnderLine = ({ content, bold = false, fs = ".8rem" }) => {
  const titleEle = useRef(null);
  useEffect(() => {
    console.log("letters");

    const title = titleEle.current;
    let newArr = title.innerText
      .split("")
      .map(t => `<span class='letter'>${t}</span>`);
    title.innerHTML = newArr.join("");
    const letters = title.querySelectorAll(".letter");
    // const tl = ani.timeline({ loop: true });

    ani({
      targets: letters,
      rotateY: [-90, 0],
      opacity: [0, 1],
      delay: function(el, i) {
        return 80 * i;
      }
    });
  });
  return (
    <Line ref={titleEle} className={bold ? "bold" : ""} fs={fs}>
      {content}
    </Line>
  );
};
export default UnderLine;

import React, { PureComponent } from "react";
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
    display: inline-block;
    line-height: 1em;
    transform-origin: 0 0;
  }
`;
export default class UnderLine extends PureComponent {
  constructor() {
    super();
    this.titleEle = React.createRef();
  }
  componentDidMount() {
    console.log("letters");

    const title = this.titleEle.current;
    let newArr = title.innerText
      .split("")
      .map(t => `<span class='letter'>${t}</span>`);
    title.innerHTML = newArr.join("");
    const letters = title.querySelectorAll(".letter");
    // const tl = ani.timeline({ loop: true });

    ani({
      targets: letters,
      rotateY: [-80, 0],
      opacity: [0, 1],
      delay: function(el, i) {
        return 80 * i;
      }
    });
  }
  render() {
    const { content, bold = false, fs = ".8rem" } = this.props;
    return (
      <Line ref={this.titleEle} className={bold ? "bold" : ""} fs={fs}>
        {content}
      </Line>
    );
  }
}

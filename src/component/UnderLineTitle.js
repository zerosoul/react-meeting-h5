import React, { PureComponent } from "react";
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
      translateY: ["1.1em", 0],
      translateZ: 0,
      delay: (el, i) => {
        return 100 * i;
      }
    });
  }
  render() {
    const {
      title,
      mb = "2rem",
      fs = "1rem",
      bg = "#ccc",
      fc = "#ff6a1c"
    } = this.props;
    return (
      <Title ref={this.titleEle} mb={mb} fs={fs} bg={bg} fc={fc}>
        {title}
      </Title>
    );
  }
}

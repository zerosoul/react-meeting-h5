import React, { PureComponent } from "react";
import styled from "styled-components";
import ArrowImg from "../assets/img/arrow.png";
import anime from "animejs";

const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
  width: 22px;
  height: 17px;
  z-index: 9999;
  left: 0;
  right: 0;
  margin: auto;
  img {
    width: 100%;
  }
`;
export default class Arrows extends PureComponent {
  constructor() {
    super();
    this.arrows = React.createRef();
  }
  componentDidMount() {
    anime({
      targets: this.arrows.current,
      translateY: -10,
      duration: 1000,
      opacity: [0.4, 1],
      easing: "easeOutExpo",
      loop: true
    });
  }
  render() {
    return (
      <Wrapper ref={this.arrows}>
        <img src={ArrowImg} alt="导航箭头" />
      </Wrapper>
    );
  }
}

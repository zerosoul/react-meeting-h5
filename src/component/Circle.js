import React, { PureComponent } from "react";
import styled from "styled-components";
import anime from "animejs";

const Wrapper = styled.div`
  width: 22px;
  height: 17px;
  z-index: 9999;
`;
export default class Circle extends PureComponent {
  constructor() {
    super();
    this.circle = React.createRef();
  }
  componentDidMount() {
    anime({
      targets: this.circle.current,
      translateY: -10,
      duration: 1000,
      opacity: [0.4, 1],
      easing: "easeOutExpo",
      loop: true
    });
  }
  render() {
    return <Wrapper ref={this.circle} />;
  }
}

import React, { PureComponent } from "react";
import styled from "styled-components";
import LogoImg from "../assets/img/logo.png";
// import anime from "animejs";

const Wrapper = styled.div`
  position: absolute;

  top: 20px;
  left: 20px;

  width: 117px;
  /* height: 17px; */
  z-index: 9999;
  img {
    width: 100%;
  }
`;
export default class Logo extends PureComponent {
  constructor() {
    super();
    this.Logo = React.createRef();
  }
  // componentDidMount() {
  //   anime({
  //     targets: this.Logo.current,
  //     translateY: -10,
  //     duration: 1000,
  //     opacity: [0.4, 1],
  //     easing: "easeOutExpo",
  //     loop: false
  //   });
  // }
  render() {
    return (
      <Wrapper ref={this.Logo}>
        <img src={LogoImg} alt="公司图标" />
      </Wrapper>
    );
  }
}

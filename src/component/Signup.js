import React, { PureComponent } from "react";
import styled from "styled-components";
import anime from "animejs";

const Wrapper = styled.div`
  z-index: 9999;
  position: fixed;
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
`;
export default class Signup extends PureComponent {
  constructor() {
    super();
    this.signup = React.createRef();
  }
  componentDidMount() {
    anime({
      targets: this.signup.current,
      right: [-30, 2],
      duration: 1500
    });
  }
  render() {
    const { currSwiper } = this.props;
    console.log("swiper", currSwiper);

    return (
      <Wrapper
        onClick={() => {
          currSwiper.slideTo(currSwiper.slides.length);
        }}
        ref={this.signup}
      >
        点击报名
      </Wrapper>
    );
  }
}

import React, { PureComponent } from "react";
import styled from "styled-components";
import anime from "animejs";

const Wrapper = styled.div`
  z-index: 9999;
  position: fixed;
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
export default class Tel extends PureComponent {
  constructor() {
    super();
    this.tel = React.createRef();
  }
  componentDidMount() {
    anime({
      targets: this.tel.current,
      right: [-30, 2],
      duration: 1500
    });
  }
  render() {
    return (
      <Wrapper ref={this.tel}>
        <a href="tel:18201385848">电话咨询</a>
      </Wrapper>
    );
  }
}

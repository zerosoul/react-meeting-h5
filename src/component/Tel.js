import React, { PureComponent } from "react";
import styled from "styled-components";
import anime from "animejs";

const Wrapper = styled.div`
  z-index: 9999;
  position: fixed;
  top: 350px;
  right: 2px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 600;
  background: #ffa25d;
  border-radius: 5px;
  color: #fff;
  padding: 6px;
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

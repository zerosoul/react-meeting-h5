import React, { Component } from "react";
import styled from "styled-components";

const Line = styled.span`
  position: relative;
  height: 1px;
  width: ${({ width = "80px" }) => width};
  background: ${({ background = "#fff" }) => background};
  display: inline-block;
  margin-bottom: 10px;
  &:before,
  &:after {
    content: "";
    display: block;
    width: 4px;
    height: 4px;
    background: ${({ dotBackground = "#ffa71f" }) => dotBackground};
    box-sizing: border-box;
    border-radius: 50%;
    position: absolute;
    top: -2px;
  }
  &:after {
    right: -2px;
  }
  &:before {
    left: -2px;
  }
`;
export default class DotLine extends Component {
  render() {
    // const { width, background } = this.props;
    return <Line {...this.props} />;
  }
}

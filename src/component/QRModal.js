import React, { Component } from "react";

import styled from "styled-components";
import BgImg from "../assets/img/modal.bg.png";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${BgImg});
`;

export default class QRModal extends Component {
  render() {
    return <Wrapper>333</Wrapper>;
  }
}

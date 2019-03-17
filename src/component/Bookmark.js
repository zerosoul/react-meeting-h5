import React, { PureComponent } from "react";
import styled from "styled-components";
// import { rem } from "polished";

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 1rem;
  display: flex;
  align-items: center;
  padding: 0.4rem 1rem;
  background: ${({ background = "orange" }) =>
    background === "orange" ? "#ff6a1c" : "#fdb037"};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  .year {
    font-size: 0.6rem;
    font-weight: bold;
  }
  .cheng {
    color: #fff;
    padding: 0 0.4rem;
    font-size: 0.6rem;
  }
  .en {
    line-height: 1.2;
    font-size: 0.3rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
export default class Bookmark extends PureComponent {
  render() {
    return (
      <Wrapper {...this.props}>
        <p className="year">2019</p>
        <p className="cheng">x</p>
        <p className="en">
          <span>Operations</span>
          <span>management upgrade</span>
        </p>
      </Wrapper>
    );
  }
}

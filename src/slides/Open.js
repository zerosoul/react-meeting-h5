import React, { PureComponent } from "react";
import styled from "styled-components";

import ani from "animejs";
import Floating from "../component/Floating";
import UnderLineTitle from "../component/UnderLineTitle";

import DotLine from "../component/DotLine";
import OpenImg from "../assets/img/open.png";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 2rem;
  height: 100vh;

  .open {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    .desc {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 1.4rem;
      font-weight: 800;
      margin-bottom: 0.8rem;
    }
  }
  .btmImg {
    text-align: center;

    img {
      animation: 4s ${Floating} ease-in infinite;
      width: 80%;
    }
  }
`;
export default class Intro extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <Content ref={this.wrapper}>
        <UnderLineTitle
          title="四大亮点，您不得不来!"
          fs="1.2rem"
          fc="#fff"
          bg="#ffa71f"
        />
        <div className="open">
          <h2 className="desc">一场改变幼教人命运的课程</h2>
          <h1>马上开幕!</h1>
          <DotLine width="100%" />
        </div>
        <div className="btmImg">
          <img src={OpenImg} alt="开幕配图" />
        </div>
      </Content>
    );
  }
}

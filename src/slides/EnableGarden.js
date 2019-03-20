import React, { PureComponent } from "react";
import styled from "styled-components";

import ani from "animejs";
import UnderLineTitle from "../component/UnderLineTitle";

import Demo1Img from "../assets/img/mobile.demo.1.png";
import Demo2Img from "../assets/img/mobile.demo.2.png";
import DotLine from "../component/DotLine";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 5rem 2rem;
  padding-bottom: 0;
  height: 100vh;

  .brands {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    .brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fd762f;
      box-sizing: border-box;
      border-radius: 10% 10% 50% 50%;
      padding: 0 0.8rem;
      padding-bottom: 1rem;
      overflow: hidden;
      font-weight: 800;
      margin-bottom: 1rem;
      height: 4.4rem;
      &:nth-child(even) {
        background: #fdb037;
        .no {
          color: #fdb037;
        }
      }
      .no {
        background: #dedede;
        color: #ff761e;
        font-size: 0.6rem;
        width: 2rem;
        height: 2rem;
        display: table;
        margin-top: -50%;
        padding-top: 1.1rem;
        text-align: center;
        border-radius: 50%;
        box-sizing: border-box;
      }
      .word {
        &:nth-child(2) {
          margin-top: 0.6rem;
        }
        line-height: 1.2;
      }
    }
  }
  .middleTitle {
    font-size: 0.8rem;
    color: #666;
    text-align: center;
    line-height: 1.5;
    font-weight: bold;
    margin-bottom: 1rem;
    .line {
      margin-top: 0.8rem;
    }
  }
  .demos {
    z-index: 1;
    display: flex;
    justify-content: space-around;
    width: 90%;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    .demo {
      width: 6rem;
    }
  }
`;
export default class EnableGarden extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    const wrapper = this.wrapper.current;
    const brands = wrapper.querySelectorAll(".brands .brand");
    const tl = ani.timeline();
    tl.add({
      targets: brands,
      opacity: [0, 1],
      translateY: [-300, 0],
      delay: (ele, i) => i * 100
    });
  }
  render() {
    return (
      <Content ref={this.wrapper}>
        <UnderLineTitle title="互联网赋能幼儿园" />

        <div className="brands">
          <p className="brand">
            <span className="no">No.1</span>
            <span className="word">智能</span>
            <span className="word">招生</span>
          </p>
          <p className="brand">
            <span className="no">No.2</span>
            <span className="word">家园</span>
            <span className="word">共育</span>
          </p>
          <p className="brand">
            <span className="no">No.3</span>
            <span className="word">幼师</span>
            <span className="word">星球</span>
          </p>
          <p className="brand">
            <span className="no">No.4</span>
            <span className="word">安全</span>
            <span className="word">管控</span>
          </p>
        </div>
        <div className="middleTitle">
          <p>一键彻底解放园长</p>
          <p>让幼儿园插上移动互联的翅膀!</p>
          <DotLine width={"100%"} background="#fdb749" className="line" />
        </div>
        <div className="demos">
          <div>
            <img src={Demo1Img} alt="demo1" className="demo" />
          </div>
          <div>
            <img src={Demo2Img} alt="demo2" className="demo" />
          </div>
        </div>
      </Content>
    );
  }
}

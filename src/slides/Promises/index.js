import React, { Component } from "react";

import ani from "animejs";
import UnderLineTitle from "../../component/UnderLineTitle";

import GiftImg from "../../assets/img/gift.png";
import PromiseImg from "../../assets/img/promise.png";
import Wrapper from "./styled.wrapper";
export default class Promises extends Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    const wrapper = this.wrapper.current;
    const tips = wrapper.querySelectorAll(".tips .tip");
    const slogan = wrapper.querySelector(".slogan");
    const ps = wrapper.querySelectorAll(".promise");
    const tl = ani.timeline();
    tl.add({
      targets: ps,
      translateY: [-60, 0],
      opacity: [0, 1],
      delay: (ele, i) => {
        return i * 120;
      }
    })
      .add({
        targets: slogan,
        scale: [8, 1],
        opacity: [0, 1],
        easing: "easeInOutBack"
      })
      .add({
        targets: tips,
        opacity: [0, 1],
        translateX: [-400, 0]
      });
  }

  render() {
    const { gift } = this.props;
    return (
      <Wrapper ref={this.wrapper}>
        <UnderLineTitle title="未来十年生死存亡，本场会议决定!" />

        <div className="promises">
          <p className="promise title">我们承诺!</p>
          <p className="promise">
            没干货<span className="bold">随时离场</span>
          </p>
          <p className="promise">
            不认同<span className="bold">随时离场</span>
          </p>
          <p className="promise">
            没收获<span className="bold">随时退费</span>
          </p>
          <p className="promise">
            不落地<span className="bold">随时退费</span>
          </p>
          <img className="slogan" src={PromiseImg} alt="我们承诺" />
        </div>
        <img className="gift" src={GiftImg} alt="礼物图片" />
        {gift && (
          <div className="tips">
            <p className="tip">{gift}</p>
          </div>
        )}
      </Wrapper>
    );
  }
}

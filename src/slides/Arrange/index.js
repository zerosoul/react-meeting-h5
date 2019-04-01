import React, { Component } from "react";

import ani from "animejs";
import UnderLineTitle from "../../component/UnderLineTitle";
import Wrapper from "./styled.wrapper";
export default class Arrange extends Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    const wrapper = this.wrapper.current;
    const arrs = wrapper.querySelectorAll(".arranges .arrange");
    const tl = ani.timeline();
    tl.add(
      {
        targets: arrs,
        opacity: [0, 1],
        rotateX: [-90, 0],
        // rotateY: [-90, 0],
        duration: 1000,
        delay: (ele, i) => i * 500
      },
      "+=500"
    );
  }
  render() {
    const { addr, list = [], name, mobile } = this.props;
    return (
      <Wrapper ref={this.wrapper}>
        <UnderLineTitle title="课程安排" />
        <div className="arranges">
          {list &&
            list.map(item => {
              return (
                <div key={item.time} className="arrange">
                  <p className="placeholder" />
                  <p className="detail">
                    <time>{item.time}</time>
                    <span className="title">{item.name}</span>
                  </p>
                </div>
              );
            })}
        </div>
        <div className="info">
          <p className="tel">
            {name} <a href="tel:12345678901">{mobile}</a>
          </p>
          <p className="addr">{addr}</p>
        </div>
      </Wrapper>
    );
  }
}

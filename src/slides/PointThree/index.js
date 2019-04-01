import React, { Component } from "react";

import ani from "animejs";
import UnderLineTitle from "../../component/UnderLineTitle";
import UnderLine from "../../component/UnderLine";
import Wrapper from "./styled.wrapper";
export default class PointThree extends Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    const wrapper = this.wrapper.current;
    const circles = wrapper.querySelectorAll(".circles .circle");
    ani({
      targets: circles,
      opacity: [0, 1],
      scale: [5, 1],
      delay: (ele, i) => {
        return i * 200;
      }
    });
  }

  render() {
    return (
      <Wrapper ref={this.wrapper}>
        <UnderLineTitle title="亮点三：教师专业化成长" />
        <div className="circles">
          <p className="circle">
            <span>教师</span>
            <span>招不来</span>
          </p>
          <p className="circle yellow">
            <span>人才</span>
            <span>难培养</span>
          </p>
          <p className="circle">
            <span>骨干</span>
            <span>留不住</span>
          </p>
        </div>
        <div className="lines">
          <UnderLine content={"团队水平参差不齐，怎么办？"} />
        </div>
        <div className="lines">
          <UnderLine bold={true} content={"教师专业成长，团队快速提升"} />
          <UnderLine content={"借助互联网轻松实现"} />
        </div>
      </Wrapper>
    );
  }
}

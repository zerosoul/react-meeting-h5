import React, { Component } from "react";

// import ani from "animejs";
import UnderLineTitle from "../../component/UnderLineTitle";
import UnderLine from "../../component/UnderLine";

import BtmImg from "../../assets/img/point.two.png";
import Wrapper from "./styled.wrapper";
export default class PointTwo extends Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <Wrapper ref={this.wrapper}>
        <UnderLineTitle title="亮点二：家长满意度飙升" />
        <div className="lines">
          <UnderLine content={"家园之间不理解、缺信任、无协同！"} />
          <UnderLine content={"家长满意度低，家园关系一碰就碎！?"} />
        </div>
        <div className="lines">
          <UnderLine bold={true} content={"将“家园共育”锻造成幼儿园的名片"} />
          <UnderLine content={"借助互联网轻松实现"} />
        </div>
        <div className="btmImg">
          <img src={BtmImg} alt="开幕配图" />
        </div>
      </Wrapper>
    );
  }
}

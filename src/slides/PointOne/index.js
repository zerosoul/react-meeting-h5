import React, { Component } from "react";

import UnderLineTitle from "../../component/UnderLineTitle";
import UnderLine from "../../component/UnderLine";
import BtmImg from "../../assets/img/point.one.png";
import Wrapper from "./styled.wrapper";
export default class PointOne extends Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <Wrapper ref={this.wrapper}>
        <UnderLineTitle title="亮点一：招生智能化" />
        <div className="lines">
          <UnderLine content={"发传单、送气球，low爆了!"} />
          <UnderLine content={"什么样的方式能够实现自动、智能化招生?"} />
        </div>
        <div className="lines">
          <UnderLine bold={true} content={"足不出户，生源爆满"} />
          <UnderLine content={"借助互联网轻松实现"} />
        </div>
        <div className="btmImg">
          <img src={BtmImg} alt="开幕配图" />
        </div>
      </Wrapper>
    );
  }
}

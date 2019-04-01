import React from "react";
import UnderLineTitle from "../../component/UnderLineTitle";
import UnderLine from "../../component/UnderLine";

import BtmImg from "../../assets/img/point.four.png";
import Wrapper from "./styled.wrapper";
const PointFour = () => {
  return (
    <Wrapper>
      <UnderLineTitle title="亮点四：安全管控标准化" />
      <div className="lines">
        <UnderLine content={"老师的失误、工作的意外、不可预知的风险..."} />
        <UnderLine content={"时刻威胁着幼儿的安全"} />
      </div>
      <div className="lines">
        <UnderLine bold={true} content={"守住办园底线，保障孩子安全"} />
        <UnderLine content={"借助互联网轻松实现"} />
      </div>
      <div className="btmImg">
        <img src={BtmImg} alt="开幕配图" />
      </div>
    </Wrapper>
  );
};
export default PointFour;

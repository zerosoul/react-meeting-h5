import React, { useRef, useEffect } from "react";
import Card from "../../component/ProfileCard";

import ani from "animejs";
import UnderLineTitle from "../../component/UnderLineTitle";
import DepartmentTitle from "../../component/DepartmentTitle";

import SunImg from "../../assets/img/speaker.sq.png";
import ZhuImg from "../../assets/img/speaker.zhuxy.png";
import QiImg from "../../assets/img/speaker.qixi.png";
import LiuImg from "../../assets/img/speaker.lyx.png";

import Wrapper from "./styled.wrapper";
const SpeakerTeam2 = () => {
  return (
    <Wrapper>
      <UnderLineTitle title="壹点壹滴金牌讲师团队" mb=".4rem" />

      <h2 className="subTitle">手把手教您开好园，助您成功转型！</h2>
      <Card
        avatar={SunImg}
        name="孙  权"
        descs={[
          "北京大学旗下幼教连锁运营专家",
          "中国未来研究会教育分会特约讲师"
        ]}
      />

      <Card
        avatar={ZhuImg}
        name="朱宣颖"
        descs={[
          "《绝对成交》销售理论创立者",
          "MBA工商管理硕士",
          "中国互联网教育协会特聘顾问"
        ]}
      />

      <Card
        avatar={QiImg}
        name="齐  奚"
        descs={[
          "互联网运营高级导师",
          "幸福中国教育工程合伙人",
          "美国AMI特约讲师，国家高级育婴师"
        ]}
      />

      <Card
        avatar={LiuImg}
        name="刘亚星"
        descs={[
          "国家十三五重点课题组成员",
          "中国人生科学学会家庭教育",
          "科学研究院研究员"
        ]}
      />
      <DepartmentTitle title="营销二部" />
    </Wrapper>
  );
};
export default SpeakerTeam2;

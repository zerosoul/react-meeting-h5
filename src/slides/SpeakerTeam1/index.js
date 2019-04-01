import React from "react";
import Card from "../../component/ProfileCard";

import UnderLineTitle from "../../component/UnderLineTitle";
import DepartmentTitle from "../../component/DepartmentTitle";

import ChaoImg from "../../assets/img/speaker.dongzc.png";
import LongImg from "../../assets/img/speaker.zhangyanlong.png";
import KeImg from "../../assets/img/speaker.huangke.png";
import MsImg from "../../assets/img/speaker.ms.png";
import Wrapper from "./styled.wrapper";
const SpeakerTeam1 = () => {
  return (
    <Wrapper ref={this.wrapper}>
      <UnderLineTitle title="壹点壹滴金牌讲师团队" mb=".4rem" />

      <h2 className="subTitle">手把手教您开好园，助您成功转型！</h2>
      <Card
        avatar={ChaoImg}
        name="佟志超"
        title="壹点壹滴营销中心总经理"
        descs={["国家注册公共关系师", "原红缨教育集团悠久事业部副总经理"]}
      />

      <Card
        avatar={LongImg}
        name="张彦龙"
        descs={[
          "中国家庭教育指导师，心理咨询师",
          "国际学前教育协会实战讲师",
          "中国幼儿教育家协会会员"
        ]}
      />

      <Card
        avatar={KeImg}
        name="黄珂"
        descs={[
          "北京大学旗下幼教连锁运营专家",
          "中国未来研究会教育分会特约讲师"
        ]}
      />

      <Card
        avatar={MsImg}
        name="马爽"
        descs={[
          "中国未来研究会教育分会特约讲师",
          "全脑平衡训练开发师",
          "青少年演说力/领导力特训营教练"
        ]}
      />
      <DepartmentTitle title="营销一部" />
    </Wrapper>
  );
};
export default SpeakerTeam1;

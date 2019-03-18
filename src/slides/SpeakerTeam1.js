import React, { PureComponent } from "react";
import styled from "styled-components";
import Card from "../component/ProfileCard";

import ani from "animejs";
import ChaoImg from "../assets/img/speaker.dongzc.png";
import LongImg from "../assets/img/speaker.zhangyanlong.png";
import KeImg from "../assets/img/speaker.huangke.png";
import MsImg from "../assets/img/speaker.ms.png";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 4rem 1rem 0 1rem;
  height: 100vh;
  .title {
    color: #ff6a1c;
    font-size: 1.2rem;
    font-weight: 800;
    box-shadow: inset 0 -0.4em #ccc;
    margin-bottom: 0.4rem;
  }
  .subTitle {
    color: #4d4d4d;
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
  }
  .department {
    color: #fff;
    background: #ff6a14;
    border-radius: 0.2rem;
    font-weight: 800;
    font-size: 1.2rem;
    padding: 0.3rem 0.8rem;
  }
`;
export default class SpeakerTeam1 extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    const wrapper = this.wrapper.current;
    const eles = wrapper.querySelectorAll(".profile .avatar,.profile .intro");
    ani({
      targets: eles,
      delay: (el, i) => i * 90,
      opacity: [0, 1]
    });
  }

  render() {
    return (
      <Content ref={this.wrapper}>
        <h1 className="title">壹点壹滴金牌讲师团队</h1>
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

        <p className="department">营销一部</p>
      </Content>
    );
  }
}

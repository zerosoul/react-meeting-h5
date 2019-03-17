import React, { PureComponent } from "react";
import styled from "styled-components";
import Card from "../component/ProfileCard";

import ani from "animejs";
import SunImg from "../assets/img/speaker.sq.png";
import ZhuImg from "../assets/img/speaker.zhuxy.png";
import QiImg from "../assets/img/speaker.qixi.png";
import LiuImg from "../assets/img/speaker.lyx.png";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 4rem 2rem 0 2rem;
  height: 100vh;
  .title {
    color: #ff6a1c;
    font-size: 1rem;
    font-weight: 800;
    box-shadow: inset 0 -0.4em #ccc;
    margin-bottom: 0.8rem;
  }
  .subTitle {
    color: #4d4d4d;
    font-size: 0.8rem;
    margin-bottom: 1rem;
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
export default class SpeakerTeam2 extends PureComponent {
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
            "MBA共商管理硕士",
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

        <p className="department">营销二部</p>
      </Content>
    );
  }
}

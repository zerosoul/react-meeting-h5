import React, { PureComponent } from "react";
import styled from "styled-components";

import ani from "animejs";
import WangImg from "../assets/img/bigman.wang.png";
import DengImg from "../assets/img/bigman.deng.png";
import ZhangImg from "../assets/img/bigman.zhang.png";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 4rem 2rem;
  height: 100vh;
  .title {
    color: #ff6a1c;
    font-size: 1.2rem;
    font-weight: 800;
    box-shadow: inset 0 -0.4em #ccc;
    margin-bottom: 2rem;
  }
  .block {
    display: flex;
    background: #ff6a14;
    .avatar {
      width: 4rem;
      height: 100%;
    }
    &.reverse {
      flex-direction: row-reverse;
      background: #ffa71f;
    }
    .intro {
      display: flex;
      flex-direction: column;
    }
  }
`;
export default class BigMan extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <Content ref={this.wrapper}>
        <h1 className="title">幼教大咖助力园长 赢在“新幼教”时代</h1>
        <div className="block reverse">
          <img className="avatar" src={WangImg} alt="王总的照片" />
          <p className="intro">
            <span className="name">
              王红兵<i>_Wang Hongbing</i>
            </span>
            <span className="title">壹点壹滴创始人&CEO</span>
            <span>红缨教育创始人</span>
            <span>中国民办幼儿园卓越领军人物</span>
          </p>
        </div>
        <div className="block">
          <img className="avatar" src={ZhangImg} alt="张总的照片" />
          <p className="intro">
            <span className="name">
              张缪兴<i>_Zhang Miaoxing</i>
            </span>
            <span className="title">壹点壹滴联合创始人&总裁</span>
            <span>原伊顿连锁幼儿园信息化总监</span>
            <span>十多年国内顶尖幼儿园一线运营管理与信息化经验</span>
          </p>
        </div>
        <div className="block reverse">
          <img className="avatar" src={DengImg} alt="邓总的照片" />
          <p className="intro">
            <span className="name">
              邓迎锋<i>_Deng Yingfeng</i>
            </span>
            <span className="title">壹点壹滴联合创始人&COO</span>
            <span>幼儿园市场营销实战第一人</span>
            <span>13年早教幼教创业/从业经验</span>
            <span>资深幼儿园管理经验</span>
          </p>
        </div>
      </Content>
    );
  }
}

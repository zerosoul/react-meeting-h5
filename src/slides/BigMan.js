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
  > .title {
    color: #ff6a1c;
    font-size: 1rem;
    font-weight: 800;
    box-shadow: inset 0 -0.4em #ccc;
    margin-bottom: 6rem;
  }
  .blocks {
    display: flex;
    flex-direction: column;

    .block {
      display: flex;
      align-items: center;
      background: #ff6a14;
      border-radius: 0.4rem;
      margin-bottom: 5rem;
      padding: 1.2rem;
      box-sizing: border-box;
      width: 18rem;
      height: 5rem;
      position: relative;
      .avatar {
        position: absolute;
        bottom: 0;
        right: 1rem;
        width: 6rem;
      }
      &.reverse {
        flex-direction: row-reverse;
        background: #ffa71f;
        .avatar {
          left: 1rem;
        }
        .intro {
          .name {
            color: #ffa71f;
          }
        }
      }
      .intro {
        font-size: 0.5rem;
        display: flex;
        flex-direction: column;
        line-height: 1.6;
        position: relative;
        width: 10rem;
        height: 4rem;
        align-items: flex-start;
        justify-content: center;
        .name {
          color: #ff6a14;
          font-weight: bold;
          position: absolute;
          top: -2.2rem;
          left: 0;
          font-size: 1rem;
          i {
            font-size: 0.6rem;
            color: #666;
          }
        }
        .title {
          font-size: 0.8rem;
          font-weight: bold;
        }
      }
    }
  }
`;
export default class BigMan extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    const wrapper = this.wrapper.current;
    const blocks = wrapper.querySelectorAll(".block");
    const avatars = wrapper.querySelectorAll(".block .avatar");
    const intros = wrapper.querySelectorAll(".block .intro");

    const tl = ani.timeline({ loop: false });
    tl.add({
      targets: blocks,
      width: [0, "18rem"],
      delay: (ele, i) => i * 50
    })
      .add({
        targets: avatars,
        scale: [0, 1],
        delay: (ele, i) => i * 50
      })
      .add({
        targets: intros,
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 300,
        easing: "linear",
        delay: (ele, i) => i * 50
      });
  }

  render() {
    return (
      <Content ref={this.wrapper}>
        <h1 className="title">幼教大咖助力园长 赢在“新幼教”时代</h1>
        <div className="blocks">
          <div className="block">
            <p className="intro">
              <span className="name">
                王红兵<i>_Wang Hongbing</i>
              </span>
              <span className="title">壹点壹滴创始人&CEO</span>
              <span>红缨教育创始人</span>
              <span>中国民办幼儿园卓越领军人物</span>
            </p>
            <img className="avatar" src={WangImg} alt="王总的照片" />
          </div>
          <div className="block reverse">
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
          <div className="block">
            <p className="intro">
              <span className="name">
                邓迎锋<i>_Deng Yingfeng</i>
              </span>
              <span className="title">壹点壹滴联合创始人&COO</span>
              <span>幼儿园市场营销实战第一人</span>
              <span>13年早教幼教创业/从业经验</span>
              <span>资深幼儿园管理经验</span>
            </p>
            <img className="avatar" src={DengImg} alt="邓总的照片" />
          </div>
        </div>
      </Content>
    );
  }
}

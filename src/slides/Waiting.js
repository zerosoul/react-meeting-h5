import React, { PureComponent } from "react";
import styled from "styled-components";
import Swiper from "swiper";
// components
import ani from "animejs";
import UnderLineTitle from "../component/UnderLineTitle";
import DotLine from "../component/DotLine";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 6rem 3rem;
  height: 100vh;

  .subTitle {
    color: #666;
    text-align: center;
    line-height: 1.5;
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    .line {
      margin-top: 0.8rem;
    }
  }
  .gardens {
    z-index: 1;
    transform: translate3d(0, 0, 0);
    .title {
      color: #ffb121;
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }
    .listWrapper {
      font-size: 0.8rem;
      width: 16rem;
      height: 10rem;
      overflow: hidden;
      border: 0.2rem solid #fdb037;
      border-radius: 0.8rem;
      padding: 1.6rem 1rem;
      background: #fff;
      ul {
        color: #666;
        li {
          line-height: 2;
        }
      }
    }
  }
`;
export default class Waiting extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    var swiper = new Swiper(".gardens .swiper-container", {
      // effect: "flip",
      // grabCursor: true,
      direction: "vertical",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
  }
  render() {
    const { submitList = [] } = this.props;
    return (
      <Content ref={this.wrapper}>
        <UnderLineTitle title="您还在等什么?" />

        <div className="subTitle">
          <p>互联网智慧幼儿园让您省心省事又省钱!</p>
          <DotLine width={"100%"} background="#fdb749" className="line" />
        </div>
        <div className="gardens">
          <h2 className="title">本次会议已报名园所</h2>
          <div className="listWrapper">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                {submitList.map(item => {
                  const maskName =
                    item.name[0] +
                    new Array(item.name.length - 1).fill("*").join("");
                  return (
                    <div class="swiper-slide">
                      <ul key={item.id}>
                        <li>所属区域：{item.town_id}</li>
                        <li>园所名称：{item.school_name}</li>
                        <li>园长姓名：{maskName}</li>
                        <li>参会人数：{item.person_num}人</li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Content>
    );
  }
}

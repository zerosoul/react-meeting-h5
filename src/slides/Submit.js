import React, { PureComponent } from "react";
import styled from "styled-components";
import ani from "animejs";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;

  padding-top: 73px;
  .saving {
    font-family: "Fashion Zhonghei";

    font-size: 12px;
    font-weight: 400;
    margin-bottom: 24px;
  }
  .waiting {
    font-family: "Fashion Zhonghei";

    font-size: 24px;
    font-weight: 400;
    margin-bottom: 25px;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      background: rgba(255, 255, 255, 1);
      border-radius: 40px;
      border: none;
      padding: 13px 22px;
      font-size: 15px;
      outline: none;
      margin-bottom: 15px;
      width: 220px;
    }
    &::placeholder {
      color: rgba(122, 122, 122, 1);
    }
  }
  .tips {
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    margin: 0 auto;
    margin-bottom: 9px;
    .tip {
      margin-bottom: 4px;
      .tel {
        text-decoration: none;
        color: #fff;
        padding: 0 2px;
      }
    }
  }
  .submit {
    padding: 12px 40px;
    background: #fff;
    margin-bottom: 8px;
    border-radius: 40px;
    font-weight: 500;
    font-size: 18px;
    color: rgba(235, 51, 67, 1);
    outline: none;
    border: none;
    max-width: 160px;
  }
  .btm_tip {
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
export default class Submit extends PureComponent {
  constructor() {
    super();
    this.inputs = React.createRef();
    this.submitBtn = React.createRef();
    this.waiting = React.createRef();
  }
  componentDidMount() {
    const inputs = this.inputs.current.querySelectorAll("input");
    const submitBtn = this.submitBtn.current;
    const waiting = this.waiting.current;

    ani
      .timeline({
        duration: 300,
        easing: "spring(1, 80, 10, 0)"
      })
      .add({
        targets: waiting,
        easing: "linear",
        loop: true,
        opacity: [0, 1],
        scale: [8, 1],
        duration: 800
      })
      .add({
        targets: inputs,
        translateY: [-20, 0],
        opacity: [0, 1],
        delay: (ele, i) => {
          return i * 400;
        }
      })
      .add(
        {
          targets: submitBtn,
          opacity: [0, 1],
          translateY: [40, 0]
        },
        "-=800"
      );
  }
  render() {
    return (
      <Content>
        <p className="saving">互联网智慧幼儿园让您省心、省事、省钱</p>
        <p className="waiting" ref={this.waiting}>
          你还在等什么<em>?</em>
        </p>
        <div className="inputs" ref={this.inputs}>
          <input placeholder="请输入姓名" />
          <input type="tel" placeholder="请输入手机号" />
          <input placeholder="请输入幼儿园名称" />
          <input placeholder="请输入微信号" />
        </div>
        <div className="tips">
          <p className="tip">
            联系电话: 王老师
            <a className="tel" href="tel:12345678901">
              12345678901
            </a>
          </p>
          <p className="tip">参会对象：只限园长与投资人参加，名额仅限150名</p>
          <p className="tip">费用说明：场地费及中餐费每人100元</p>
        </div>
        <p className="btm_tip">报名到场即送赠品，人手一份！</p>
        <button className="submit" type="submit" ref={this.submitBtn}>
          立即报名
        </button>
      </Content>
    );
  }
}

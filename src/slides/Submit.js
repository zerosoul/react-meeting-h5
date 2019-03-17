import React, { Component } from "react";
import styled from "styled-components";
// components
import ani from "animejs";
import ClockIcon from "../assets/img/icon.clock.png";
import AddrIcon from "../assets/img/icon.addr.png";
import { Math } from "core-js";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 4rem 3rem;
  height: 100vh;

  > .title {
    color: #ff6a1c;
    font-size: 1.6rem;
    font-weight: 800;
    box-shadow: inset 0 -0.4em #ccc;
    margin-bottom: 1.8rem;
  }
  .info {
    color: #666;
    line-height: 1.5;
    font-size: 0.7rem;
    time {
      background: url(${ClockIcon});
    }
    .addr {
      background: url(${AddrIcon});
    }
    time,
    .addr {
      padding-left: 1.2rem;
      margin-bottom: 0.8rem;
      line-height: 1.6;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  .form {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .input {
      > input {
        background: #fd762f;
        box-shadow: 0px 5px 13px 0px rgba(151, 0, 92, 0.35);
        margin-bottom: 0.8rem;
        border: none;
        border-radius: 0.2rem;
        padding: 0.4rem 0.8rem;
        box-sizing: border-box;
        width: 15rem;

        &:disabled {
          &::placeholder {
            opacity: 1;
          }
        }
        &::placeholder {
          font-weight: bold;
          color: #fff;
          opacity: 0.6;
        }
      }
      &.mobile {
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: space-between;
        > input {
          width: 9.8rem;
        }
        .codeBtn {
          font-weight: bold;
          color: #fff;
          background: #666;
          border: none;
          font-size: 0.8rem;
          border-radius: 0.4rem;
          padding: 0.3rem 0.4rem;
        }
      }
      &.num {
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: space-between;
        > input {
          width: 5rem;
        }
        .count {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: 4.6rem;
          margin: 0 0.2rem;
          .m,
          .p {
            width: 0.8rem;
            height: 0.8rem;
            font-weight: bolder;
            background: #fdb037;
            border-radius: 50%;
            box-sizing: border-box;
            text-align: center;
            font-size: 0.6rem;
            line-height: 1.1;
          }
          .p {
            background: #fd762f;
          }
          input {
            width: 1.4rem;
            text-align: center;
            border: 1px solid #ff761e;
            padding: 0.3rem 0.4rem;
            border-radius: 0.2rem;
            color: #ff761e;
          }
        }
        .tip {
          font-size: 0.5rem;
          color: #666;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          span {
            line-height: 1.6;
          }
        }
      }
      &.cost {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        color: #666;
        input {
          width: 5rem;
        }
        .price {
          font-weight: bold;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 10rem;
          margin-bottom: 0.8rem;
          .true {
            color: #ff761e;
          }
          .false {
            position: relative;
            &:after {
              content: "";
              top: 50%;
              left: -5px;
              display: block;
              position: absolute;
              width: 120%;
              height: 1px;
              background: #ff761e;
            }
          }
        }
      }
    }
    .submitBtn {
      color: #fff;
      background: #fdb037;
      border: none;
      padding: 0.4rem 0;
      font-size: 1rem;
      width: 15rem;
      border-radius: 0.4rem;
      margin-top: 2rem;
    }
  }
`;
export default class Submit extends Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
    this.state = {
      count: 1,
      truePrice: 100,
      falsePrice: 100
    };
  }
  updateCount = count => {
    // console.log("math", Math);
    let tmp = (count / 2) << 0;
    let { falsePrice, truePrice } = this.state;
    falsePrice = count * 100;
    truePrice = (count % 2) * 100 + tmp * 150;
    this.setState({
      count,
      truePrice,
      falsePrice
    });
  };
  onCountChange = val => {
    this.updateCount(val);
  };
  onAddCount = () => {
    let { count } = this.state;
    count++;
    this.updateCount(count);
  };
  onMinusCount = () => {
    let { count } = this.state;
    if (count === 1) {
      alert("至少有个人参加啊，兄嘚！");
      return;
    }
    count--;
    this.updateCount(count);
  };
  componentDidMount() {
    // var swiper = new Swiper(".pics.swiper-container", {
    //   effect: "flip",
    //   grabCursor: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false
    //   }
    // });
  }
  render() {
    const { count, truePrice, falsePrice } = this.state;
    return (
      <Content ref={this.wrapper}>
        <h1 className="title">立即报名</h1>

        <div className="info">
          <time>2019.03.28</time>
          <p className="addr">河北省廊坊市xxxx路xxxx街会议中心</p>
        </div>
        <form action="">
          <div className="form">
            <p className="input">
              <input name="name" placeholder="姓 名" />
            </p>
            <p className="input mobile">
              <input name="mobile" placeholder="手机号" />
              <button className="codeBtn">获取验证码</button>
            </p>
            <p className="input">
              <input name="code" placeholder="手机验证码" />
            </p>
            <p className="input">
              <input name="garden" placeholder="幼儿园名称" />
            </p>
            <div className="input num">
              <input name="garden" disabled placeholder="参会人数" />
              <p className="count">
                <i onClick={this.onMinusCount} className="m">
                  -
                </i>
                <input
                  onChange={this.onCountChange}
                  type="number"
                  value={count}
                />
                <i onClick={this.onAddCount} className="p">
                  +
                </i>
              </p>
              <p className="tip">
                <span>单 价：100元/人</span>
                <span>优惠价：150元/两人</span>
              </p>
            </div>
            <p className="input cost">
              <input name="garden" disabled placeholder="费  用" />
              <span className="price">
                <span className="true">{truePrice}元</span>
                <span className="false">{falsePrice}元</span>
              </span>
            </p>
            <input className="submitBtn" type="submit" value="提  交" />
          </div>
        </form>
      </Content>
    );
  }
}

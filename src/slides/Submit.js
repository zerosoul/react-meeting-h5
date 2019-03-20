import React, { Component } from "react";
import styled from "styled-components";
import { createForm, formShape } from "rc-form";
// components
import ani from "animejs";
import UnderLineTitle from "../component/UnderLineTitle";
import KeyboardBug from "../component/KeyboardBug";

import ClockIcon from "../assets/img/icon.clock.png";
import AddrIcon from "../assets/img/icon.addr.png";
import { getSMSCode, postMeetingInfo } from "../actions";
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 4rem 3rem;
  height: 100vh;

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
      background-size: 0.8rem;
    }
  }
  .form {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    /* width: 14rem; */
    .input {
      > input {
        color: #fff;
        background: #fd762f;
        box-shadow: inset 0px 5px 13px 0px rgba(151, 0, 92, 0.35);
        margin-bottom: 0.6rem;
        border: none;
        border-radius: 0.2rem;
        padding: 0.3rem 0.6rem;
        box-sizing: border-box;
        line-height: 1.4;
        width: 15rem;

        &:disabled {
          opacity: 1;
        }
        &::placeholder {
          font-size: 0.8rem;
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
          width: 8rem;
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
          width: 4.4rem;
        }
        .count {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: 4.4rem;
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
            line-height: 1.2;
          }
          .p {
            background: #fd762f;
          }
          input {
            width: 2rem;
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
        margin-bottom: 1rem;
        input {
          width: 4.4rem;
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
      z-index: 1;
    }
  }
`;
class Submit extends Component {
  constructor() {
    super();
    this.form = React.createRef();
    this.interVal = null;
    this.state = {
      count: 1,
      truePrice: 100,
      falsePrice: 100,
      waitingSecondLeft: 0
    };
  }
  onGetCode = async () => {
    const { form } = this.props;
    const { waitingSecondLeft } = this.state;
    if (waitingSecondLeft > 0) {
      return;
    }
    const error = form.getFieldError("mobile");
    if (error) {
      alert(error.join(""));
      return;
    }
    const mobile = form.getFieldValue("mobile");
    if (!mobile) {
      alert("请输入手机号");
      return;
    }
    const { status } = await getSMSCode(mobile);
    if (status === "success") {
      console.log("success");
      this.startCountDown();
    }
    console.log("mobile", error, mobile);
  };
  // 倒计时 60
  startCountDown = () => {
    this.setState(
      {
        waitingSecondLeft: 60
      },
      () => {
        this.interVal = setInterval(() => {
          const { waitingSecondLeft } = this.state;
          if (waitingSecondLeft === 0) {
            clearInterval(this.interVal);
          }
          this.setState({
            waitingSecondLeft: waitingSecondLeft - 1
          });
        }, 1000);
      }
    );
  };
  onSubmit = evt => {
    evt.preventDefault();
    const { count, truePrice } = this.state;
    // if (waitingSecondLeft > 0) {
    //   alert("验证码还在数秒ing");
    // }
    this.props.form.validateFields(async (error, values) => {
      // console.log(error, values);
      if (!error) {
        values.person_num = count;
        values.price = truePrice;
        values.meetingid = 1;
        console.log("api start:");
        const { status } = await postMeetingInfo(values);
        console.log("api end status:", status);
        if (status === "success") {
          alert("报名成功！");
        }
      } else {
        console.log("here");

        const msg = error[Object.keys(error)[0]].errors[0].message;
        alert(msg);
      }
    });
  };
  updateCount = count => {
    // console.log("math", Math);
    let tmp = (count / 2) << 0;
    let { falsePrice, truePrice } = this.state;
    const { single, double } = this.props;
    falsePrice = count * single;
    truePrice = (count % 2) * single + tmp * double;
    this.setState({
      count,
      truePrice,
      falsePrice
    });
  };
  onCountChange = ({ target: { value } }) => {
    console.log(value);

    this.updateCount(value);
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
    const { single } = this.props;

    this.setState({
      falsePrice: single,
      truePrice: single
    });
    ani({
      targets: this.form.current,
      translateY: [400, 0],
      delay: 500
    });
  }
  render() {
    const { count, truePrice, falsePrice, waitingSecondLeft } = this.state;
    const { addr, time, single, double } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Content>
        <UnderLineTitle title="立即报名" fs="1.4rem" mb="1rem" />

        <div className="info">
          <time>{time}</time>
          <p className="addr">{addr}</p>
        </div>
        <div className="form" ref={this.form}>
          <p className="input">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "请输入姓名"
                }
              ]
            })(<input placeholder="姓 名" />)}
          </p>
          <p className="input mobile">
            {getFieldDecorator("mobile", {
              rules: [
                { required: true, message: "请输入手机号" },
                {
                  pattern: /^[1][0-9][0-9]{9}$/,
                  message: "请输入正确的手机号"
                }
              ]
            })(<input type="tel" placeholder="手机号" />)}
            <button className="codeBtn" onClick={this.onGetCode}>
              {waitingSecondLeft > 0
                ? `重新发送${waitingSecondLeft}`
                : `获取验证码`}
            </button>
          </p>
          <p className="input">
            {getFieldDecorator("verifycode", {
              rules: [
                { required: true, message: "请输入验证码" },
                {
                  min: 4,
                  message: "请输入正确的验证码"
                }
              ]
            })(<input type="number" placeholder="手机验证码" />)}
          </p>
          <p className="input">
            {getFieldDecorator("school_name", {
              rules: [{ required: true, message: "请输入幼儿园名称" }]
            })(<input placeholder="幼儿园名称" />)}
          </p>
          <div className="input num">
            <input disabled placeholder="参会人数" />
            <p className="count">
              <i onClick={this.onMinusCount} className="m">
                -
              </i>
              <input
                type="number"
                onChange={this.onCountChange}
                value={count}
              />
              <i onClick={this.onAddCount} className="p">
                +
              </i>
            </p>
            <p className="tip">
              <span>单 价：{single}元/人</span>
              <span>优惠价：{double}元/两人</span>
            </p>
          </div>
          <p className="input cost">
            <input name="garden" disabled placeholder="费  用" />
            <span className="price">
              <span className="true">{truePrice}元</span>
              <span className="false">{falsePrice}元</span>
            </span>
          </p>
          <button className="submitBtn" onClick={this.onSubmit}>
            提 交
          </button>
        </div>
        <KeyboardBug />
      </Content>
    );
  }
}
export default createForm()(Submit);

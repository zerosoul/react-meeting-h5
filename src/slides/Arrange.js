import React, { PureComponent } from "react";
import styled from "styled-components";

import ani from "animejs";
import TelIcon from "../assets/img/icon.tel.png";
import AddrIcon from "../assets/img/icon.addr.png";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 8rem 2rem;
  height: 100vh;

  > .title {
    color: #ff6a1c;
    font-size: 1.2rem;
    font-weight: 800;
    box-shadow: inset 0 -0.4em #ccc;
    margin-bottom: 4rem;
  }
  .arranges {
    color: #666;
    font-size: 0.8rem;
    font-weight: 800;
    .arrange {
      display: flex;
      align-items: end;
      &:last-child {
        .title {
          min-height: 9rem;
        }
      }
      .title {
        border-right: 1px solid #fb763a;
        position: relative;
        font-size: 1rem;
        min-width: 4rem;
        min-height: 6rem;
        &:after {
          content: "";
          position: absolute;
          top: -0rem;
          right: -0.25rem;
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 100%;
          box-shadow: 0px 0px 0px 4px white, 0 0 0 0.3rem #ff6a1c;
          background: #ff6a1c;
        }
      }
      .detail {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 1rem;
        time {
          margin-bottom: 0.4rem;
        }
        .desc {
          line-height: 1.2;
          color: #ff6a1c;
        }
      }
    }
  }
  .info {
    color: #fff;
    text-align: left;
    z-index: 1;
    position: absolute;
    bottom: 2rem;
    .tel {
      background: url(${TelIcon});
      a {
        text-decoration: none;
        color: #fff;
      }
    }
    .addr {
      background: url(${AddrIcon});
    }
    .tel,
    .addr {
      padding-left: 2rem;
      margin-bottom: 0.8rem;
      line-height: 1.6;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;
export default class Arrange extends PureComponent {
  constructor() {
    super();
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <Content ref={this.wrapper}>
        <h1 className="title">课程安排</h1>
        <div className="arranges">
          <div className="arrange">
            <p className="title">上午场</p>
            <p className="detail">
              <time>9:00-10:00</time>
              <span className="desc">
                我是课程描述描述描述我是课程描述描述描述
              </span>
            </p>
          </div>
          <div className="arrange">
            <p className="title">上午场</p>
            <p className="detail">
              <time>9:00-10:00</time>
              <span className="desc">
                我是课程描述描述描述我是课程描述描述描述
              </span>
            </p>
          </div>
          <div className="arrange">
            <p className="title">下午场</p>
            <p className="detail">
              <time>9:00-10:00</time>
              <span className="desc">
                我是课程描述描述描述我是课程描述描述描述
              </span>
            </p>
          </div>
        </div>
        <div className="info">
          <p className="tel">
            王老师 <a href="tel:12345678901">12345678901</a>
          </p>
          <p className="addr">河北省廊坊市xxxx路xxxx街会议中心</p>
        </div>
      </Content>
    );
  }
}
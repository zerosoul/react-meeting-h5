import React, { Component } from "react";

import styled from "styled-components";
import ani from "animejs";

import BgImg from "../assets/img/modal.bg.png";
import TitleImg from "../assets/img/modal.title.png";
import CloseImg from "../assets/img/modal.close.png";
import QrImg from "../assets/img/modal.qrcode.png";

const Wrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  .card {
    width: 16rem;
    height: 20rem;
    margin-top: -4rem;
    background: url(${BgImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    position: relative;
    .title {
      width: 12rem;
    }
    .content {
      font-size: 0.7rem;
      line-height: 1.4;
      text-align: center;
      margin-top: 1rem;
      margin-bottom: 1.2rem;
    }
    .tip {
      font-size: 0.6rem;
    }
    .qr {
      width: 7rem;
      margin-top: 1.5rem;
    }
    .close {
      position: absolute;
      bottom: -2.6rem;
      width: 1rem;
      height: 1rem;
      left: 50%;
      margin-left: -0.5rem;
    }
    .vLine {
      position: absolute;
      bottom: -0.8rem;
      left: 8rem;
      width: 1px;
      height: 1.4rem;
      background: #fff;
    }
    .dotLine {
      position: absolute;
      border: none;
      border-top: 1px dotted #fff6;
      height: 1px;
      width: 84%;
      top: 9.2rem;
      left: 1.2rem;
    }
  }
`;

export default class QRModal extends Component {
  constructor() {
    super();
    this.card = React.createRef();
  }
  componentDidMount() {
    const card = this.card.current;
    ani({
      targets: card,
      opacity: [0, 1],
      rotateY: [-90, 0],
      duration: 1000
    });
  }
  render() {
    const { onCloseModal } = this.props;
    return (
      <Wrapper>
        <div className="card" ref={this.card}>
          <img className="title" src={TitleImg} alt="弹窗标题" />
          <p className="content">
            为确保您报名成功，请联系会议组织者交取相关费用。关注下方公众号，可在报名成功后及时领取专属入场券，会议需凭入场券扫码签到。
          </p>
          <hr className="dotLine" />
          <img src={QrImg} className="qr" alt="qr" />
          <p className="tip">请长按识别二维码</p>
          <div className="vLine" />
          <img
            className="close"
            src={CloseImg}
            alt="关闭弹窗"
            onClick={onCloseModal}
          />
        </div>
      </Wrapper>
    );
  }
}

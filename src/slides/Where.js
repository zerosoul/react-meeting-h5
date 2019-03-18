import React, { PureComponent } from "react";
import styled from "styled-components";
import ani from "animejs";

import VideoPoster from "../assets/img/video.poster.png";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  .title {
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    color: #ff6a1c;
    box-shadow: inset 0 -0.4em #ccc;
    margin-bottom: 1.6rem;
  }
  .bubbles {
    position: relative;
    margin: 10px auto;
    height: 33vh;
    width: 78vw;
    margin-bottom: 2rem;
    .bubble {
      position: absolute;
      box-sizing: border-box;
      border-radius: 50%;
      font-weight: 800;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 0.8rem;
      &.yellow {
        background: #ffa71f;
        &.one {
          width: 0.8rem;
          height: 0.8rem;
          top: 1.8rem;
          left: 1.8rem;
        }
        &.two {
          width: 0.8rem;
          height: 0.8rem;
          bottom: 0.4rem;
          right: 46%;
        }
        &.three {
          width: 0.7rem;
          height: 0.7rem;
          top: 0.4rem;
          right: 4.2rem;
        }
        &.four {
          width: 0.4rem;
          height: 0.4rem;
          bottom: 40%;
          right: 2.6rem;
        }
        &.five {
          width: 0.4rem;
          height: 0.4rem;
          bottom: 0.8rem;
          right: 0.4rem;
        }
      }
      &.orange {
        background: #ff6a1c;
        &.one {
          width: 0.6rem;
          height: 0.6rem;
          top: 64%;
          left: 0;
        }
        &.two {
          width: 0.6rem;
          height: 0.6rem;
          top: 2rem;
          left: 4.4rem;
        }
        &.three {
          width: 1.4rem;
          height: 1.4rem;
          top: 56%;
          right: 0.2rem;
        }
      }
      &.word {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        span {
          line-height: 1.4;
          margin-left: 0.7rem;
        }
      }
      &.more {
        font-size: 0.6rem;
        width: 3.8rem;
        height: 3.8rem;
        top: -0.2rem;
        left: 50%;
        margin-left: -1.7rem;
      }
      &.strict {
        width: 4.6rem;
        height: 4.6rem;
        top: 1.2rem;
        right: 0.8rem;
      }
      &.hard {
        width: 4.6rem;
        height: 4.6rem;
        bottom: -0.4rem;
        right: 1.2rem;
      }
      &.rich {
        width: 4.6rem;
        height: 4.6rem;
        bottom: -0.4rem;
        left: 2rem;
      }
      &.come {
        width: 4.6rem;
        height: 4.6rem;
        top: 3rem;
        left: 1rem;
      }
      &.stay {
        font-size: 1rem;
        width: 5.4rem;
        height: 5.4rem;
        top: 50%;
        margin-top: -2rem;
        left: 50%;
        margin-left: -2rem;
      }
    }
  }
  .video {
    z-index: 1;
    border: 0.6rem solid #ff6a1c;
    border-radius: 0.4rem;
    position: relative;
    .playIcon {
      z-index: 999;
      background: #fff;
      position: absolute;
      width: 2.2rem;
      height: 2.2rem;
      top: 50%;
      left: 50%;
      margin-left: -1.1rem;
      margin-top: -1.1rem;
      box-sizing: border-box;
      border-radius: 50%;
      &:after {
        content: "";
        position: absolute;
        left: 0.8rem;
        top: 0.5rem;
        display: block;
        width: 1rem;
        height: 1.2rem;
        background-color: #fd762f;
        clip-path: polygon(0 0, 0 100%, 100% 50%);
      }
    }
    video {
      width: 100%;
      height: 100%;
    }
  }
`;
export default class Where extends React.Component {
  constructor() {
    super();
    this.wrapper = React.createRef();
    this.video = React.createRef();
    this.state = {
      playing: false
    };
  }
  onVideoClick = () => {
    const { playing } = this.state;
    if (playing) {
      this.video.current.pause();
    } else {
      this.video.current.play();
    }
    this.setState({
      playing: !playing
    });
  };
  componentDidMount() {
    const wrapper = this.wrapper.current;
    const words = wrapper.querySelectorAll(".bubbles .word");
    const dots = wrapper.querySelectorAll(".bubbles .dot");
    const video = wrapper.querySelector(".video");
    const tl = ani.timeline({ loop: false });
    tl.add({
      targets: dots,
      opacity: [0, 1],
      scale: [0, 1],
      delay: (ele, i) => i * 50
    })
      .add(
        {
          targets: words,
          opacity: [0, 1],
          scale: [0, 1],
          delay: (ele, i) => i * 100
        },
        "-=800"
      )
      .add({
        targets: video,
        opacity: [0, 1],
        rotate: "2turn"
      });
  }
  render() {
    const { playing } = this.state;
    return (
      <Content ref={this.wrapper}>
        <div className="title">内外交困，民办园该何去何从?</div>
        <div className="bubbles">
          <p className="bubble word yellow more">
            <span>幼儿园</span>
            <span>越来越多</span>
          </p>
          <p className="bubble word orange come">
            <span>学生</span>
            <span>招不来?</span>
          </p>
          <p className="bubble word yellow strict">
            <span>政策</span>
            <span>越来越严</span>
          </p>
          <p className="bubble word orange hard">
            <span>教师</span>
            <span>培训难?</span>
          </p>
          <p className="bubble word yellow rich">
            <span>幼儿园</span>
            <span>越来越豪</span>
          </p>
          <p className="bubble word orange stay">
            <span>家长</span>
            <span>留不住?</span>
          </p>
          <p className="dot bubble yellow one" />
          <p className="dot bubble yellow two" />
          <p className="dot bubble yellow three" />
          <p className="dot bubble yellow four" />
          <p className="dot bubble yellow five" />
          <p className="dot bubble orange one" />
          <p className="dot bubble orange two" />
          <p className="dot bubble orange three" />
        </div>
        <div className="video">
          {!playing && <i className="playIcon" onClick={this.onVideoClick} />}
          <video
            onClick={this.onVideoClick}
            ref={this.video}
            controls={false}
            autoPlay={false}
            poster={VideoPoster}
            src="http://img001.ddweilai.com/Zhaoshengwang/yijian.mp4"
            alt="宣传视频"
          />
        </div>
      </Content>
    );
  }
}

import React from "react";
import ani from "animejs";
import UnderLineTitle from "../../component/UnderLineTitle";

import VideoPoster from "../../assets/img/video.poster.png";
import Wrapper from "./styled.wrapper";
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
      <Wrapper ref={this.wrapper}>
        <UnderLineTitle title="内外交困，民办园该何去何从?" mb="1.4rem" />
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
            onPause={() => {
              this.setState({
                playing: false
              });
            }}
            ref={this.video}
            controls={false}
            autoPlay={false}
            poster={VideoPoster}
            src="http://img001.ddweilai.com/Guankongdian/shipin.mp4"
            alt="宣传视频"
          />
        </div>
      </Wrapper>
    );
  }
}

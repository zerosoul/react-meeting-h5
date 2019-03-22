import React from "react";
import styled, { keyframes } from "styled-components";
import MusicImg from "../assets/img/music.svg";
import MusicWhiteImg from "../assets/img/music.white.svg";
import BgMusic from "../assets/bgm.mp3";
import { timingSafeEqual } from "crypto";
const rotation = keyframes`
  from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  width: 35px;
  height: 35px;
  position: fixed;
  top: 10px;
  right: 10px;
  box-sizing: border-box;
  audio {
    display: none;
  }
  img {
    color: #000;
    width: 23px;
    &.playing {
      animation: ${rotation} 2s infinite linear forwards;
    }
    &.paused {
      animation-play-state: paused;
    }
  }
`;
export default class Music extends React.Component {
  state = {
    playing: false
  };
  constructor() {
    super();
    this.isIPHONE = navigator.userAgent.match(/iPhone|iPad|iPod/i);
    this.bgMusic = React.createRef();
  }
  onCanPlay = () => {
    const music = this.bgMusic.current;

    music.play();
  };
  onPlaying = () => {
    this.setState({
      playing: true
    });
  };
  onPause = () => {
    this.setState({
      playing: false
    });
  };
  onTogglePlay = () => {
    const { playing } = this.state;
    const bgM = this.bgMusic.current;
    if (playing) {
      bgM.pause();
    } else {
      bgM.play();
    }
  };
  handleIPhonePlayBug = () => {
    const { playing } = this.state;
    if (!playing) {
      this.bgMusic.current.play();
      window.removeEventListener("touchstart", this.handleIPhonePlayBug);
    }
  };
  componentDidMount() {
    if (this.isIPHONE) {
      window.addEventListener("touchstart", this.handleIPhonePlayBug);
    }
  }
  render() {
    const { playing } = this.state;
    const { isWhite = false } = this.props;
    return (
      <Wrapper onClick={this.onTogglePlay}>
        <img
          src={isWhite ? MusicWhiteImg : MusicImg}
          alt="音乐图片"
          className={playing ? `playing` : `playing paused`}
        />
        <audio
          onCanPlay={this.onCanPlay}
          onPause={this.onPause}
          onPlaying={this.onPlaying}
          autoPlay={true}
          loop={true}
          ref={this.bgMusic}
          src={BgMusic}
        />
      </Wrapper>
    );
  }
}

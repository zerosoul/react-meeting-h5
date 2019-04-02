import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import MusicImg from "../assets/img/music.svg";
import MusicWhiteImg from "../assets/img/music.white.svg";
import BgMusic from "../assets/bgm.mp3";
let rotation = keyframes`
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
const Music = ({ isWhite = false }) => {
  const [playing, setPlaying] = useState(false);

  const bgMusic = useRef(null);
  const onCanPlay = () => {
    const music = bgMusic.current;
    console.log("onCanPlay", music);
    // promise?
    const pr = music.play();
    if (pr !== undefined) {
      pr.then(_ => {
        // Autoplay started!
      }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
      });
    }
  };
  const onPlaying = () => {
    setPlaying(true);
  };
  const onPause = () => {
    setPlaying(false);
  };
  const onTogglePlay = () => {
    const bgM = bgMusic.current;
    if (playing) {
      bgM.pause();
    } else {
      bgM.play();
    }
  };
  useEffect(() => {
    // 兼容苹果系统的自动播放
    const IS_IPHONE = navigator.userAgent.match(/iPhone|iPad|iPod/i);

    if (IS_IPHONE) {
      const audioEle = bgMusic.current;
      // promise?
      const pr = audioEle.play();
      if (pr !== undefined) {
        pr.then(_ => {
          // Autoplay started!
        }).catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
        });
      }
      document.addEventListener(
        "WeixinJSBridgeReady",
        () => {
          audioEle.play();
        },
        false
      );
    }
  }, []);
  return (
    <Wrapper onClick={onTogglePlay}>
      <img
        src={isWhite ? MusicWhiteImg : MusicImg}
        alt="音乐图片"
        className={playing ? `playing` : `playing paused`}
      />
      <audio
        onCanPlay={onCanPlay}
        onPause={onPause}
        onPlaying={onPlaying}
        autoPlay={true}
        loop={true}
        ref={bgMusic}
        src={BgMusic}
      />
    </Wrapper>
  );
};
export default Music;

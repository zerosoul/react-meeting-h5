import React, { useState, useRef } from "react";
import VideoPoster from "../../assets/img/video.poster.png";

const Video = () => {
  const videoEle = useRef(null);
  const [playing, setPlaying] = useState(false);
  const onVideoClick = () => {
    if (playing) {
      videoEle.current.pause();
    } else {
      videoEle.current.play();
    }
    setPlaying(!playing);
  };
  return (
    <div className="video">
      {!playing && <i className="playIcon" onClick={onVideoClick} />}
      <video
        onClick={onVideoClick}
        onPause={() => {
          setPlaying(false);
        }}
        ref={videoEle}
        controls={false}
        autoPlay={false}
        poster={VideoPoster}
        src="https://img001.1d1d100.com/Zijing/zijingfirstyear.mp4"
        alt="宣传视频"
      />
    </div>
  );
};
export default Video;

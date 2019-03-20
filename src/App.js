import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { hot } from "react-hot-loader/root";
import Swiper from "swiper";
import URLSearchParams from "@ungap/url-search-params";
// 组件
// import BaseFontSize from "./component/BaseFontSize";
import Music from "./component/Music";
import Signup from "./component/Signup";
import Tel from "./component/Tel";
// import Loading from "./component/Loading.js";
import SlideWrapper from "./component/SliderWrapper";
import WaveBg from "./component/WaveBg";
import Bookmark from "./component/Bookmark";
// 幻灯片
import Intro from "./slides/Intro.js";
import Where from "./slides/Where.js";
import How from "./slides/How.js";
import Open from "./slides/Open.js";
import PointOne from "./slides/PointOne";
import PointTwo from "./slides/PointTwo";
import PointThree from "./slides/PointThree";
import PointFour from "./slides/PointFour";
import BigMan from "./slides/BigMan";
import SpeakerTeam1 from "./slides/SpeakerTeam1";
import Promises from "./slides/Promises";
import Arrange from "./slides/Arrange";
import EnableGarden from "./slides/EnableGarden";
import Legend from "./slides/Legend";
import SpeakerTeam2 from "./slides/SpeakerTeam2";
import Waiting from "./slides/Waiting";
import Submit from "./slides/Submit";
import { getMeetingDetail, getSubmitList } from "./actions";
const GlobalStyle = createGlobalStyle`
  ${reset}
 
  @media screen and (min-width: 375px){
      html {
          font-size: 14.0625px;   
      }
  }
  @media screen and (min-width: 360px){
      html {
          font-size: 13.5px;
      }
  }
  @media screen and (min-width: 320px){
      html {
          font-size: 12px;
      }
  }
  *{
    box-sizing:border-box;
    outline:none;
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    font-weight:400;
    color:#fff;
    font-family:"Fangzheng ZY", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  }
  body{
    max-width:720px;
    margin:0 auto;
  }
  #root{
    position:relative;
  }
  .swiper-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
`;
class App extends Component {
  state = {
    whiteMusic: false,
    mySwiper: null,
    slides: [false],
    meetingDetail: {},
    submitList: []
  };
  constructor() {
    super();
    this.interNum = null;
    this.mySwiper = null;
  }

  initSwiper = () => {
    this.setState({
      whiteMusic: true
    });
    const mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "vertical",
      loop: false
    });

    mySwiper.on("slideChange", wtf => {
      const { realIndex } = mySwiper;
      let isWhite = realIndex === 0 || realIndex === 3;
      this.setState({
        whiteMusic: isWhite
      });
      console.log("changed", realIndex);
      let newSlides = new Array(mySwiper.slides.length).fill(false);
      newSlides[realIndex] = true;
      this.setState({
        slides: newSlides
      });
    });
    const initSlides = new Array(mySwiper.slides.length).fill(false);
    initSlides[0] = true;
    this.setState({
      mySwiper,
      slides: initSlides
    });
  };
  async componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const mid = params.get("mid") || 1;
    const { status, response } = await getMeetingDetail(mid);
    if (status === "success") {
      this.setState({
        meetingDetail: response
      });
    }
    const { status: listStatus, response: listResp } = await getSubmitList();
    console.log("meeting resp", status);
    if (listStatus === "success") {
      this.setState({
        submitList: listResp
      });
    }
    // init swiper
    this.initSwiper();
  }
  render() {
    const {
      whiteMusic,
      mySwiper,
      slides,
      meetingDetail: {
        start_time,
        address,
        is_gift,
        gift_desc,
        double_price,
        single_price,
        meeting_agenda,
        area,
        agent_info
      },
      submitList
    } = this.state;
    const { real_name = "", mobile = "" } = agent_info || {};
    console.log("slides array", slides);

    return (
      <>
        <GlobalStyle />

        <Music isWhite={whiteMusic} />
        {mobile && <Tel mobile={mobile} />}
        <Signup currSwiper={mySwiper} />
        {/* <!-- Slider main container --> */}
        <div className="swiper-container">
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper">
            {/* <!-- Slides --> */}

            <SlideWrapper bgType="orange" className="swiper-slide">
              {slides[0] && <Intro time={start_time} addr={area} />}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="7rem" />
              {slides[1] && (
                <>
                  <Where />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="6rem" />
              {slides[2] && (
                <>
                  <How />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper bgType="orange" className="swiper-slide">
              <Bookmark background="yellow" />
              {slides[3] && (
                <>
                  <Open />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="7rem" />

              {slides[4] && (
                <>
                  <PointOne />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="6rem" />

              {slides[5] && (
                <>
                  <PointTwo />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              {slides[6] && (
                <>
                  <PointThree />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="6rem" />

              {slides[7] && (
                <>
                  <PointFour />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              {slides[8] && (
                <>
                  <BigMan />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              {slides[9] && (
                <>
                  <SpeakerTeam1 />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              {slides[10] && (
                <>
                  <SpeakerTeam2 />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="8rem" />
              {slides[11] && (
                <>
                  <Promises gift={is_gift ? gift_desc : null} />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="8rem" />

              {slides[12] && (
                <>
                  <Arrange
                    addr={address}
                    list={meeting_agenda}
                    name={real_name}
                    mobile={mobile}
                  />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="7rem" />

              {slides[13] && (
                <>
                  <EnableGarden />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="8rem" />

              {slides[14] && (
                <>
                  <Legend />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg />

              {slides[15] && (
                <>
                  <Waiting submitList={submitList} />
                </>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="4.4rem" />

              {slides[16] && (
                <>
                  <Submit
                    time={start_time}
                    addr={address}
                    single={parseInt(single_price)}
                    double={parseInt(double_price)}
                  />
                </>
              )}
            </SlideWrapper>
          </div>
        </div>
      </>
    );
  }
}

export default hot(App);

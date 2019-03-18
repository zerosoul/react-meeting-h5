import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { hot } from "react-hot-loader/root";
import Swiper from "swiper";
// 组件
// import BaseFontSize from "./component/BaseFontSize";
import Music from "./component/Music";
import Signup from "./component/Signup";
import Tel from "./component/Tel";
import Loading from "./component/Loading.js";
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
    loading: true,
    mySwiper: null,
    slides: [false]
  };
  constructor() {
    super();
    this.interNum = null;
    this.mySwiper = null;
  }
  initSwiper = () => {
    this.setState({
      loading: false
    });
    const mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "vertical",
      loop: false
    });

    mySwiper.on("slideChange", wtf => {
      console.log("wtf", mySwiper);
      const { realIndex } = mySwiper;
      let newSlides = new Array(mySwiper.slides.length).fill(true);
      newSlides[realIndex] = true;
      this.setState({
        slides: newSlides
      });
    });
    const initSlides = new Array(mySwiper.slides.length).fill(true);
    initSlides[0] = true;
    this.setState({
      mySwiper,
      slides: initSlides
    });
  };
  componentDidMount() {}
  render() {
    const { loading, mySwiper, slides } = this.state;

    console.log("slides array", slides);

    return (
      <>
        <GlobalStyle />
        {/* <BaseFontSize /> */}
        {loading ? (
          <Loading onInitOver={this.initSwiper} />
        ) : (
          <>
            {/* <Music /> */}
            <Tel />
            <Signup currSwiper={mySwiper} />
            {/* <!-- Slider main container --> */}
            <div className="swiper-container">
              {/* <!-- Additional required wrapper --> */}
              <div className="swiper-wrapper">
                {/* <!-- Slides --> */}

                <SlideWrapper bgType="orange" className="swiper-slide">
                  {slides[0] && <Intro />}
                </SlideWrapper>
                <SlideWrapper className="swiper-slide">
                  <Bookmark />
                  <WaveBg />
                  {slides[1] && (
                    <>
                      <Where />
                    </>
                  )}
                </SlideWrapper>
                <SlideWrapper className="swiper-slide">
                  <Bookmark />
                  <WaveBg />
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
                  <WaveBg />

                  {slides[4] && (
                    <>
                      <PointOne />
                    </>
                  )}
                </SlideWrapper>
                <SlideWrapper className="swiper-slide">
                  <Bookmark />
                  <WaveBg />

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
                  <WaveBg />

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
                      <Promises />
                    </>
                  )}
                </SlideWrapper>
                <SlideWrapper className="swiper-slide">
                  <Bookmark />
                  <WaveBg />

                  {slides[12] && (
                    <>
                      <Arrange />
                    </>
                  )}
                </SlideWrapper>
                <SlideWrapper className="swiper-slide">
                  <Bookmark />
                  <WaveBg />

                  {slides[13] && (
                    <>
                      <EnableGarden />
                    </>
                  )}
                </SlideWrapper>
                <SlideWrapper className="swiper-slide">
                  <Bookmark />
                  <WaveBg />

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
                      <Waiting />
                    </>
                  )}
                </SlideWrapper>
                <SlideWrapper className="swiper-slide">
                  <Bookmark />
                  <WaveBg height="5rem" />

                  {slides[16] && (
                    <>
                      <Submit />
                    </>
                  )}
                </SlideWrapper>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default hot(App);

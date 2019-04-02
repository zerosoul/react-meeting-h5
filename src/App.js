import React, { Component, lazy, Suspense } from "react";
import { hot } from "react-hot-loader/root";
import Swiper from "swiper";
import URLSearchParams from "@ungap/url-search-params";
import GlobalStyle from "./global.style";
// 组件
import Music from "./component/Music";
import Signup from "./component/Signup";
import Tel from "./component/Tel";
import SlideWrapper from "./component/SliderWrapper";
import ConfigWxShare from "./component/WxShareConfig";
import WaveBg from "./component/WaveBg";
import Bookmark from "./component/Bookmark";
import { getMeetingDetail, getSubmitList } from "./actions";
// 幻灯片

const Intro = lazy(() =>
  import(/* webpackChunkName: "intro" */ "./slides/Intro")
);

const Where = lazy(() =>
  import(/* webpackChunkName: "where" */ "./slides/Where")
);
const How = lazy(() => import(/* webpackChunkName: "how" */ "./slides/How"));
const Open = lazy(() => import(/* webpackChunkName: "open" */ "./slides/Open"));
const PointOne = lazy(() =>
  import(/* webpackChunkName: "pointone" */ "./slides/PointOne")
);
const PointTwo = lazy(() =>
  import(/* webpackChunkName: "PointTwo" */ "./slides/PointTwo")
);
const PointThree = lazy(() =>
  import(/* webpackChunkName: "PointThree" */ "./slides/PointThree")
);
const PointFour = lazy(() =>
  import(/* webpackChunkName: "PointFour" */ "./slides/PointFour")
);
const BigMan = lazy(() =>
  import(/* webpackChunkName: "BigMan" */ "./slides/BigMan")
);
const SpeakerTeam1 = lazy(() =>
  import(/* webpackChunkName: "SpeakerTeam1" */ "./slides/SpeakerTeam1")
);
const SpeakerTeam2 = lazy(() =>
  import(/* webpackChunkName: "SpeakerTeam2" */ "./slides/SpeakerTeam2")
);
const Promises = lazy(() =>
  import(/* webpackChunkName: "Promises" */ "./slides/Promises")
);
const Arrange = lazy(() =>
  import(/* webpackChunkName: "Arrange" */ "./slides/Arrange")
);
const EnableGarden = lazy(() =>
  import(/* webpackChunkName: "EnableGarden" */ "./slides/EnableGarden")
);
const Legend = lazy(() =>
  import(/* webpackChunkName: "Legend" */ "./slides/Legend")
);
const Waiting = lazy(() =>
  import(/* webpackChunkName: "Waiting" */ "./slides/Waiting")
);
const Submit = lazy(() =>
  import(/* webpackChunkName: "Submit" */ "./slides/Submit")
);

class App extends Component {
  state = {
    whiteMusic: true,
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
    let effects = ["coverflow", "slide", "flip"];
    let effect = effects[Math.floor(Math.random() * effects.length)];
    const mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      // preventInteractionOnTransition: true,
      grabCursor: true,
      // followFinger: false,
      effect,
      direction: "vertical",
      loop: false,
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        progressbarOpposite: true
      }
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
    const nickname = params.get("nickname") || "微信昵称";
    const wxHead = params.get("headimgurl") || "";
    await ConfigWxShare(mid);
    this.setState({
      nickname,
      wxHead,
      mid
    });
    const { status, response } = await getMeetingDetail(mid);
    if (status === "success") {
      this.setState({
        meetingDetail: response
      });
    }
    const { status: listStatus, response: listResp } = await getSubmitList(mid);
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
        agent_info,
        meeting_qr_code
      },
      submitList,
      nickname,
      wxHead,
      mid
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
              {slides[0] && (
                <Suspense fallback={<div>Loading</div>}>
                  <Intro
                    time={start_time}
                    addr={area}
                    nickname={nickname}
                    head={wxHead}
                  />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="7rem" />
              {slides[1] && (
                <Suspense fallback={<div>Loading</div>}>
                  <Where />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="6rem" />
              {slides[2] && (
                <Suspense fallback={<div>Loading</div>}>
                  <How />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper bgType="orange" className="swiper-slide">
              <Bookmark background="yellow" />
              {slides[3] && (
                <Suspense fallback={<div>Loading</div>}>
                  <Open />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="7rem" />

              {slides[4] && (
                <Suspense fallback={<div>Loading</div>}>
                  <PointOne />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="6rem" />

              {slides[5] && (
                <Suspense fallback={<div>Loading</div>}>
                  <PointTwo />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              {slides[6] && (
                <Suspense fallback={<div>Loading</div>}>
                  <PointThree />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="6rem" />

              {slides[7] && (
                <Suspense fallback={<div>Loading</div>}>
                  <PointFour />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              {slides[8] && (
                <Suspense fallback={<div>Loading</div>}>
                  <BigMan />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              {slides[9] && (
                <Suspense fallback={<div>Loading</div>}>
                  <SpeakerTeam1 />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              {slides[10] && (
                <Suspense fallback={<div>Loading</div>}>
                  <SpeakerTeam2 />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="8rem" />
              {slides[11] && (
                <Suspense fallback={<div>Loading</div>}>
                  <Promises gift={is_gift ? gift_desc : null} />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="8rem" />

              {slides[12] && (
                <Suspense fallback={<div>Loading</div>}>
                  <Arrange
                    addr={address}
                    list={meeting_agenda}
                    name={real_name}
                    mobile={mobile}
                  />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="7rem" />

              {slides[13] && (
                <Suspense fallback={<div>Loading</div>}>
                  <EnableGarden />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="8rem" />

              {slides[14] && (
                <Suspense fallback={<div>Loading</div>}>
                  <Legend />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg height="8rem" />

              {slides[15] && (
                <Suspense fallback={<div>Loading</div>}>
                  <Waiting currSwiper={mySwiper} submitList={submitList} />
                </Suspense>
              )}
            </SlideWrapper>
            <SlideWrapper className="swiper-slide">
              <Bookmark />
              <WaveBg className="btmBg" height="4.4rem" />

              {slides[16] && (
                <Suspense fallback={<div>Loading</div>}>
                  <Submit
                    time={start_time}
                    addr={address}
                    single={parseInt(single_price)}
                    double={parseInt(double_price)}
                    mid={mid}
                    qr={meeting_qr_code}
                    mobile={mobile}
                  />
                </Suspense>
              )}
            </SlideWrapper>
          </div>
          <div className="swiper-pagination" />
        </div>
      </>
    );
  }
}

export default hot(App);

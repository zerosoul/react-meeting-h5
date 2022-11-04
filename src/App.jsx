import React, { Component, lazy, Suspense } from "react";
import Swiper from "swiper";
import GlobalStyle from "./global.style";

// 组件
import Music from "./component/Music";
import Signup from "./component/Signup";
import Tel from "./component/Tel";
import SlideWrapper from "./component/SliderWrapper";
// import ConfigWxShare from "./component/WxShareConfig";
import WaveBg from "./component/WaveBg";
import Bookmark from "./component/Bookmark";
// demo 数据
import DemoData from "./assets/data";

// 幻灯片
import Intro from "./slides/Intro";
const Where = lazy(() =>
  import(/* webpackChunkName: "Where" */ "./slides/Where")
);
const How = lazy(() => import(/* webpackChunkName: "How" */ "./slides/How"));
const Open = lazy(() => import(/* webpackChunkName: "Open" */ "./slides/Open"));
const PointOne = lazy(() =>
  import(/* webpackChunkName: "Pointone" */ "./slides/PointOne")
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
    whiteMusic: false,
    mySwiper: null,
    slides: [false],
    meetingDetail: {},
    submitList: [],
  };
  constructor() {
    super();
    this.interNum = null;
    this.mySwiper = null;
  }

  initSwiper = () => {
    let effects = ["coverflow", "slide", "flip"];
    let effect = effects[Math.floor(Math.random() * effects.length)];
    this.setState({
      whiteMusic: true,
    });
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
        onlyInViewport: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        progressbarOpposite: true,
      },
    });

    mySwiper.on("slideChange", () => {
      const { realIndex } = mySwiper;
      let isWhite = realIndex === 0 || realIndex === 3;
      this.setState({
        whiteMusic: isWhite,
      });
      console.log("changed", realIndex);
      let newSlides = new Array(mySwiper.slides.length).fill(false);
      newSlides[realIndex] = true;
      this.setState({
        slides: newSlides,
      });
    });
    const initSlides = new Array(mySwiper.slides.length).fill(false);
    initSlides[0] = true;
    this.setState({
      mySwiper,
      slides: initSlides,
    });
  };
  async componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const nickname = params.get("nickname") || "杨二小";
    const wxHead =
      params.get("headimgurl") ||
      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJr3icb8eboibicqhrFdvIr2ekYGx0RPn87SoTJ9fxqk0P8f9vTMNFzsHtb0Ca1lsj1Bhh7k0Evlwycg/132";
    this.setState({
      nickname,
      wxHead,
    });

    this.setState({
      meetingDetail: DemoData.meeting,
      submitList: DemoData.submits,
    });

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
        meeting_qr_code,
      },
      submitList,
      nickname,
      wxHead,
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
            <Suspense fallback={<div>Loading</div>}>
              <SlideWrapper bgType="orange" className="swiper-slide">
                {slides[0] && (
                  <Intro
                    time={start_time}
                    addr={area}
                    nickname={nickname}
                    head={wxHead}
                  />
                )}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                <WaveBg height="7rem" />
                {slides[1] && <Where />}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                <WaveBg height="6rem" />
                {slides[2] && <How />}
              </SlideWrapper>
              <SlideWrapper bgType="orange" className="swiper-slide">
                <Bookmark background="yellow" />
                {slides[3] && <Open />}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                <WaveBg height="7rem" />

                {slides[4] && <PointOne />}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                <WaveBg height="6rem" />

                {slides[5] && <PointTwo />}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                {slides[6] && <PointThree />}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                <WaveBg height="6rem" />

                {slides[7] && <PointFour />}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                {slides[8] && <BigMan />}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                {slides[9] && <SpeakerTeam1 />}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                {slides[10] && <SpeakerTeam2 />}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                <WaveBg height="8rem" />
                {slides[11] && <Promises gift={is_gift ? gift_desc : null} />}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                <WaveBg height="8rem" />

                {slides[12] && (
                  <Arrange
                    addr={address}
                    list={meeting_agenda}
                    name={real_name}
                    mobile={mobile}
                  />
                )}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                <WaveBg height="7rem" />

                {slides[13] && <EnableGarden />}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                <WaveBg height="8rem" />

                {slides[14] && <Legend />}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                <WaveBg height="8rem" />

                {slides[15] && (
                  <Waiting currSwiper={mySwiper} submitList={submitList} />
                )}
              </SlideWrapper>
              <SlideWrapper className="swiper-slide">
                <Bookmark />
                <WaveBg className="btmBg" height="4.4rem" />

                {slides[16] && (
                  <Submit
                    time={start_time}
                    addr={address}
                    single={parseInt(single_price)}
                    double={parseInt(double_price)}
                    qr={meeting_qr_code}
                    mobile={mobile}
                  />
                )}
              </SlideWrapper>
            </Suspense>
          </div>
          <div className="swiper-pagination" />
        </div>
      </>
    );
  }
}

export default App;

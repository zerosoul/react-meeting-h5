import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;

  .bubbles {
    position: relative;
    margin: 10px auto;
    height: 33vh;
    width: 78vw;
    margin-bottom: 2.6rem;
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
          top: 1rem;
          left: 1.4rem;
        }
        &.two {
          width: 0.8rem;
          height: 0.8rem;
          bottom: 0.4rem;
          right: 50%;
        }
        &.three {
          width: 0.7rem;
          height: 0.7rem;
          top: 0.4rem;
          right: 4.8rem;
        }
        &.four {
          width: 0.4rem;
          height: 0.4rem;
          bottom: 40%;
          right: 3rem;
        }
        &.five {
          width: 0.4rem;
          height: 0.4rem;
          bottom: 0.8rem;
          right: 1rem;
        }
      }
      &.orange {
        background: #ff6a1c;
        &.one {
          width: 0.6rem;
          height: 0.6rem;
          top: 64%;
          left: -0.4rem;
        }
        &.two {
          width: 0.6rem;
          height: 0.6rem;
          top: 2rem;
          left: 4rem;
        }
        &.three {
          width: 1.4rem;
          height: 1.4rem;
          top: 56%;
          right: 0.4rem;
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
        top: -0.6rem;
        left: 50%;
        margin-left: -1.7rem;
      }
      &.strict {
        width: 4.6rem;
        height: 4.6rem;
        top: 1.2rem;
        right: 0.4rem;
      }
      &.hard {
        width: 4.6rem;
        height: 4.6rem;
        bottom: -1rem;
        right: 1.6rem;
      }
      &.rich {
        width: 4.6rem;
        height: 4.6rem;
        bottom: -1rem;
        left: 1rem;
      }
      &.come {
        width: 4.6rem;
        height: 4.6rem;
        top: 2rem;
        left: 0rem;
      }
      &.stay {
        font-size: 1rem;
        width: 5.4rem;
        height: 5.4rem;
        top: 52%;
        margin-top: -2rem;
        left: 44%;
        margin-left: -2rem;
      }
    }
  }
  .video {
    z-index: 1;
    border: 0.6rem solid #ff6a1c;
    border-radius: 0.4rem;
    position: relative;
    height: 10rem;
    overflow: hidden;
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
      object-fit: cover;
    }
  }
`;
export default Wrapper;

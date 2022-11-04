import styled from "styled-components";
import CloudImg from "../../assets/img/cloud.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  padding: 0 2rem;
  padding-top: 2.4rem;
  box-sizing: border-box;
  .head {
    position: relative;
    margin-bottom: 1.4rem;
    text-align: center;

    .preTitle {
      z-index: 2;
      margin-bottom: 0.4rem;
      width: 84%;
    }
    .topicTitle {
      width: 84%;
    }
    .bubble {
      position: absolute;
      box-sizing: border-box;
      border-radius: 50%;
      background: #ddd;
      z-index: -1;
      &.topLeft {
        width: 0.6rem;
        height: 0.6rem;
        left: 0;
        top: 0;
        background-image: linear-gradient(-90deg, #fc5531, #fd7e30);
      }
      &.topRight {
        width: 4rem;
        height: 4rem;
        right: -1rem;
        top: -2rem;
        background-image: linear-gradient(-90deg, #fc5531, #fd7e30);
      }
      &.btmLeft {
        width: 2rem;
        height: 2rem;
        left: 0.5rem;
        bottom: -0.5rem;
        background-image: linear-gradient(45deg, #fc5531, #fd7e30);
        z-index: 1;
      }
      &.btmRight {
        width: 1.6rem;
        height: 1.6rem;
        right: 0.9rem;
        bottom: 0.6rem;
        background-image: linear-gradient(-90deg, #fc5531, #fd7e30);
      }
    }
  }
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.4rem;
    .invite {
      width: 7rem;
    }
    .wx {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 0.8rem;
      .avatar {
        border: 0.4rem solid #fecda5;
        box-sizing: border-box;
        border-radius: 50%;
        width: 5rem;
        height: 5rem;
        margin-bottom: 0.4rem;
      }
      .nickname {
        font-size: 0.8rem;
        margin-bottom: 0.8rem;
      }
    }
    .newWay {
      width: 10rem;
    }
  }
  .btm {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${CloudImg});
    background-size: 100% 100%;
    background-position-y: bottom;
    background-repeat: no-repeat;
    width: 100%;
    height: 6rem;
    .logo {
      width: 3.4rem;
      margin-left: 2rem;
      margin-top: 2.6rem;
    }
    .info {
      margin-top: 2.6rem;
      color: #ff741c;
      border-left: 0.3rem solid #ff741c;
      padding-left: 0.3rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-right: 2rem;
      font-size: 0.6rem;
      time {
        font-weight: 800;
      }
      .line {
        height: 1px;
        background: #ff741c;
        margin: 0.1rem 0;
      }
    }
  }
`;
export default Wrapper;

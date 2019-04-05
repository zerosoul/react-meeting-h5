import styled from "styled-components";
import Floating from "../../component/Floating";
import W from "../../component/ContentWrapper";

const Wrapper = styled(W)`
  align-items: flex-start;
  color: #5b5b5b;
  padding-left: 2rem;
  padding-right: 4rem;
  padding-top: 4rem;
  .top {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    position: relative;
    .lines {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .line {
        font-size: 0.8rem;
        line-height: 1.4;
        border-bottom: 1px solid #ff6a1c;
        margin-bottom: 0.2rem;
        &.how {
          font-size: 1.8rem;
          font-weight: 800;
        }
      }
    }
    .pic {
      position: absolute;
      width: 11rem;
      height: 11rem;
      right: -12rem;
      top: -2rem;
      animation: 4s ${Floating} ease-in-out infinite;
    }
  }

  .tips {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 0.8rem;
    overflow: hidden;
    width: 11rem;
    z-index: 1;
    transform: translate3d(0, 0, 0);

    .tip {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 5rem;
      border-radius: 0.8rem;
      padding: 0.3rem;
      color: #fff;
      margin-bottom: 10px;
      z-index: 1;
      &.yellow {
        background: #ffa71f;
      }
      &.orange {
        background: #ff6a1c;
      }
      &.btm {
        box-shadow: 0px 2px 3px #666;
      }
      img {
        width: 1.4rem;
        margin-top: 0.8rem;
        margin-bottom: 1rem;
      }
      .txt {
        margin-bottom: 0.6rem;
      }
      .line {
      }
    }
  }
`;
export default Wrapper;

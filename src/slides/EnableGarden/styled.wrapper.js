import styled from "styled-components";
import W from "../../component/ContentWrapper";

const Wrapper = styled(W)`
  padding: 5rem 2rem;
  padding-bottom: 0;

  .brands {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    .brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fd762f;
      box-sizing: border-box;
      border-radius: 10% 10% 50% 50%;
      padding: 0 0.8rem;
      padding-bottom: 1rem;
      overflow: hidden;
      font-weight: 800;
      margin-bottom: 1rem;
      height: 4.4rem;
      &:nth-child(even) {
        background: #fdb037;
        .no {
          color: #fdb037;
        }
      }
      .no {
        background: #dedede;
        color: #ff761e;
        font-size: 0.6rem;
        width: 2rem;
        height: 2rem;
        display: table;
        margin-top: -50%;
        padding-top: 1.1rem;
        text-align: center;
        border-radius: 50%;
        box-sizing: border-box;
      }
      .word {
        &:nth-child(2) {
          margin-top: 0.6rem;
        }
        line-height: 1.2;
      }
    }
  }
  .middleTitle {
    font-size: 0.8rem;
    color: #666;
    text-align: center;
    line-height: 1.5;
    font-weight: bold;
    margin-bottom: 1rem;
    .line {
      margin-top: 0.8rem;
    }
  }
  .demos {
    z-index: 1;
    display: flex;
    justify-content: space-around;
    width: 90%;
    /* overflow: hidden; */
    transform: translate3d(0, 0, 0);
    .demo {
      width: 6rem;
    }
  }
`;
export default Wrapper;

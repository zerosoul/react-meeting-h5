import styled from "styled-components";

import BtmImg from "../../assets/img/point.three.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  height: 100vh;
  padding: 3rem 2rem;
  background: url(${BtmImg});
  background-size: 100%;
  background-position: 0 100%;
  background-repeat: no-repeat;

  .circles {
    display: flex;
    margin-bottom: 2rem;

    .circle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      box-sizing: border-box;
      background: #ff6a1c;
      margin-right: 0.28rem;
      font-size: 0.9rem;
      &.yellow {
        background: #ffa71f;
      }
      span {
        color: #fff;
        font-weight: 600;
        line-height: 1.2;
      }
    }
  }
  .lines {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .btmImg {
    width: 100%;
    align-self: center;
  }
`;
export default Wrapper;

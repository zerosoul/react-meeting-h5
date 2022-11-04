import styled from "styled-components";

import Floating from "../../component/Floating";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 4rem 3rem;
  height: 100vh;

  .subTitle {
    color: #666;
    text-align: center;
    line-height: 1.5;
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    .line {
      margin-top: 0.8rem;
    }
  }
  .gardens {
    z-index: 1;
    transform: translate3d(0, 0, 0);
    .title {
      color: #ffb121;
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }
    .listWrapper {
      font-size: 0.8rem;
      width: 16rem;
      height: 10rem;
      overflow: hidden;
      border: 0.2rem solid #fdb037;
      border-radius: 0.8rem;
      padding: 1.6rem 1rem;
      background: #fff;
      ul {
        color: #666;
        li {
          line-height: 2;
        }
      }
    }
  }
  .signNow {
    z-index: 1;
    transform: translate3d(0, 0, 0);
    text-align: center;
    .signBtn {
      color: rgba(255, 249, 219, 1);
      border: none;
      padding: 0.2rem 0.8rem;
      margin-bottom: 2rem;
      font-size: 1rem;
      background: linear-gradient(
        0deg,
        rgba(248, 149, 5, 1),
        rgba(253, 195, 79, 1)
      );
      box-shadow: 0px 2px 3px 0px rgba(131, 131, 131, 0.75);
      border-radius: 0.4rem;
    }
    .btmImg {
      z-index: 1;
      width: 14rem;
      animation: 4s ${Floating} ease-in-out infinite;
    }
  }
`;
export default Wrapper;

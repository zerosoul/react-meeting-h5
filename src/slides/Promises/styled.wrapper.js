import styled from "styled-components";
import Floating from "../../component/Floating";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 5rem 2rem;
  padding-bottom: 0;
  height: 100vh;

  .promises {
    position: relative;
    text-align: center;
    color: #666;
    margin-bottom: 1rem;
    .promise {
      font-size: 0.8rem;
      border-bottom: 1px solid #fda264;
      line-height: 1.8;
      &.title {
        font-weight: 800;
        font-size: 1rem;
      }
      .bold {
        font-weight: 800;
        padding-left: 0.5rem;
      }
    }
    .slogan {
      position: absolute;
      width: 4rem;
      right: -3.6rem;
      bottom: -0.2rem;
    }
  }
  .gift {
    z-index: 1;
    width: 12rem;
    margin-bottom: 2rem;
    animation: 4s ${Floating} ease-in-out infinite;
  }
  .tips {
    z-index: 1;
    position: absolute;
    bottom: 2rem;
    line-height: 1.8;
    font-weight: 800;
    font-size: 0.8rem;
    .tip {
      text-align: center;
    }
  }
`;
export default Wrapper;

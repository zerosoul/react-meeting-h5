import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 6.4rem 2rem;
  padding-bottom: 0;
  height: 100vh;

  .subTitle {
    color: #666;
    text-align: center;
    line-height: 1.5;
    font-weight: bold;
    font-size: 0.8rem;
    .line {
      margin-top: 0.8rem;
    }
  }
  .num {
    width: 100%;
    margin-bottom: 1rem;
  }
  .pics {
    z-index: 1;
    width: 16rem;
    height: 11rem;
    overflow: hidden;
    border: 0.4rem solid #fdb037;
    border-radius: 0.8rem;
    transform: translate3d(0, 0, 0);
    img {
      width: 100%;
    }
  }
`;

export default Wrapper;

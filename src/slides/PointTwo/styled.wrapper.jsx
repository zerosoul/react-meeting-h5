import styled from "styled-components";

import Floating from "../../component/Floating";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fff;
  padding: 4rem 1.8rem;
  padding-bottom: 0;
  height: 100vh;

  .lines {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .btmImg {
    z-index: 1;
    img {
      width: 80%;
      animation: 4s ${Floating} ease-in-out infinite;
    }
  }
`;
export default Wrapper;

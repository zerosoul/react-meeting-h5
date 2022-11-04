import styled from "styled-components";

import Floating from "../../component/Floating";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  padding: 0 2rem;
  padding-top: 4rem;
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
      animation: 4s ${Floating} ease-in infinite;
    }
  }
`;
export default Wrapper;

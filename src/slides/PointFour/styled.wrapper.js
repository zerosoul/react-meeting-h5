import styled from "styled-components";

import Floating from "../../component/Floating";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  padding: 1rem 2rem;
  height: 100vh;

  .lines {
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .btmImg {
    z-index: 1;
    img {
      width: 100%;
      animation: 4s ${Floating} ease-in-out infinite;
    }
  }
`;
export default Wrapper;

import styled from "styled-components";
import Floating from "../../component/Floating";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 2rem;
  height: 100vh;

  .open {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    .desc {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 1.4rem;
      font-weight: 800;
      margin-bottom: 0.8rem;
      .word {
        display: inline-block;
      }
    }
  }
  .btmImg {
    text-align: center;

    img {
      animation: 4s ${Floating} ease-in infinite;
      width: 80%;
    }
  }
`;
export default Wrapper;

import styled from "styled-components";
import WhiteBgImg from "../assets/img/bg.png";
import OrangeBgImg from "../assets/img/bg.orange.png";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;

  background: ${({ bgType = "white" }) =>
    bgType === "white" ? `url(${OrangeBgImg})` : `url(${WhiteBgImg})`};
  background-color: ${({ bgType = "white" }) =>
    bgType === "white" ? `#fff` : `#fd7924`};
  background-size: contain;
  position: relative;
`;

export default Wrapper;

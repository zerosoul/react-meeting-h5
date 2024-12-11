import styled from "styled-components";
import WhiteBgImg from "../assets/img/bg.png";
import OrangeBgImg from "../assets/img/bg.orange.png";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;

  background: ${({ bgtype = "white" }) =>
    bgtype === "white" ? `url(${OrangeBgImg})` : `url(${WhiteBgImg})`};
  background-color: ${({ bgtype = "white" }) =>
    bgtype === "white" ? `#fff` : `#fd7924`};
  background-size: contain;
  position: relative;
  z-index: -999;
`;

export default Wrapper;
